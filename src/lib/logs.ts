import fs from 'fs';
import path from 'path';

export interface LogEntry {
  query: string;
  timestamp: string;
  resultFound: boolean;
  resultCount: number;
}

const LOG_FILE_PATH = path.join(process.cwd(), 'missing_searches.json');

// In-memory fallback if filesystem writes are restricted in serverless environments
let inMemoryLogs: LogEntry[] = [];

export function recordSearchLog(query: string, resultFound: boolean, resultCount = 0): LogEntry {
  const cleanQuery = query.trim().toLowerCase();
  if (!cleanQuery) {
    throw new Error('Query string is required');
  }

  const entry: LogEntry = {
    query: cleanQuery,
    timestamp: new Date().toISOString(),
    resultFound,
    resultCount
  };

  inMemoryLogs.push(entry);

  try {
    let existingLogs: LogEntry[] = [];
    if (fs.existsSync(LOG_FILE_PATH)) {
      const data = fs.readFileSync(LOG_FILE_PATH, 'utf-8');
      existingLogs = JSON.parse(data);
    }
    existingLogs.push(entry);
    fs.writeFileSync(LOG_FILE_PATH, JSON.stringify(existingLogs, null, 2), 'utf-8');
  } catch (err) {
    console.warn('Could not persist search log to filesystem, using memory cache:', err);
  }

  return entry;
}

export interface MissingSearchSummary {
  query: string;
  count: number;
  lastSearched: string;
}

export function getMissingSearchSummaries(): MissingSearchSummary[] {
  let logs: LogEntry[] = [...inMemoryLogs];

  try {
    if (fs.existsSync(LOG_FILE_PATH)) {
      const data = fs.readFileSync(LOG_FILE_PATH, 'utf-8');
      const fileLogs: LogEntry[] = JSON.parse(data);
      logs = [...fileLogs, ...inMemoryLogs];
    }
  } catch (err) {
    console.warn('Error reading log file:', err);
  }

  // Filter only missing searches (resultFound === false)
  const missingLogs = logs.filter(l => !l.resultFound);

  const summaryMap: Record<string, { count: number; lastSearched: string }> = {};

  for (const log of missingLogs) {
    const q = log.query;
    if (!summaryMap[q]) {
      summaryMap[q] = { count: 0, lastSearched: log.timestamp };
    }
    summaryMap[q].count += 1;
    if (new Date(log.timestamp) > new Date(summaryMap[q].lastSearched)) {
      summaryMap[q].lastSearched = log.timestamp;
    }
  }

  // Add some initial mock seed entries if log is empty for demo/testing admin page
  if (Object.keys(summaryMap).length === 0) {
    summaryMap['akvaryum filtresi'] = { count: 82, lastSearched: new Date().toISOString() };
    summaryMap['elektrikli scooter'] = { count: 71, lastSearched: new Date().toISOString() };
    summaryMap['bebek telsizi'] = { count: 63, lastSearched: new Date().toISOString() };
    summaryMap['airfryer alırken'] = { count: 45, lastSearched: new Date().toISOString() };
    summaryMap['oyuncu koltuğu'] = { count: 39, lastSearched: new Date().toISOString() };
  }

  return Object.entries(summaryMap)
    .map(([query, data]) => ({ query, count: data.count, lastSearched: data.lastSearched }))
    .sort((a, b) => b.count - a.count);
}
