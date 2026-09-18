import { Guide } from '@/types/guide';

// YENİ REHBERLER (2026-09-15) — GUIDES dizisinin sonuna eklenmek üzere üretilmiştir.
export const NEW_GUIDES: Guide[] = [

  // 21. Monitör Alırken
  {
    id: 'monitor-alirken',
    slug: 'monitor-alirken',
    categorySlug: 'teknoloji',
    title: 'Monitör Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Monitör Alırken',
    description: 'Panel tipi, çözünürlük, yenileme hızı, parlaklık ve bağlantı portları gibi temel kriterleri bilerek doğru monitörü seçme rehberi. Monitör alırken nelere dikkat edilmeli, tüm detaylarıyla burada.',
    intro: [
      'Monitör seçiminde en sık yapılan hata, inç boyutuna bakıp panel kalitesini, parlaklığı ve ergonomiyi göz ardı etmektir. Oysa aynı 27 inçlik iki ekran arasında renk doğruluğu ve göz konforu açısından dünya kadar fark olabilir.',
      'Monitörü ne için kullanacağınız tabloyu baştan belirler: ofis ve yazı işleri için rahat bir IPS panel ve ergonomik ayak, fotoğraf/video işleri için renk gamı, oyunda ise yenileme hızı ve tepki süresi öne çıkar.',
      'Bu rehber, ekranı mağazadaki parlak demo modundan çıkarıp kendi masanızda nasıl performans göstereceğini değerlendirmeniz için gereken kıstasları sunar.'
    ],
    keywords: ['monitör', 'monitor', 'bilgisayar ekranı', 'monitör alırken nelere dikkat edilmeli', 'ips monitör', 'monitör çözünürlüğü', 'ekran yenileme hızı', 'qhd monitör'],
    aliases: ['monitor', 'ekran', 'bilgisayar ekranı', 'görüntü birimi'],
    estimatedReadTimeMinutes: 5,
    lastUpdated: '2026-09-15',
    status: 'published',
    importanceItems: [
      { id: 'panel', title: 'Panel Tipi (IPS / VA / TN / OLED)', description: 'Renk doğruluğu ve viewing angle için IPS, derin kontrast için VA, hız için TN, en üst seviye görüntü için OLED tercih edilir. Ofis ve tasarım işlerinde TN panellerden kaçının.', importance: 'critical' },
      { id: 'cozunurluk', title: 'Çözünürlük ve İnç Dengesi', description: '24 inç için Full HD, 27 inç için QHD (2560x1440), 32 inç ve üzeri için 4K idealdir. 27 inçte Full HD seçmek piksellerin görünmesine yol açar.', importance: 'critical' },
      { id: 'yenileme', title: 'Yenileme Hızı (Hz)', description: 'Ofis kullanımında 60-75 Hz yeterliyken; akıcı görüntü ve oyun için en az 100-144 Hz tercih edilmelidir. Yazılımsal karıştırılmış değerlere değil native panele bakın.', importance: 'important' },
      { id: 'parlaklik', title: 'Parlaklık ve Renk Gamı', description: 'Gündüz aydınlık odalarda 300 nits altındaki ekranlar yetersiz kalır. Renk hassasiyeti gerektiren işlerde %99-100 sRGB desteği kontrol edilmelidir.', importance: 'important' },
      { id: 'portlar', title: 'Bağlantı Portları', description: 'En az 1x HDMI ve 1x DisplayPort bulunmalıdır. Laptop kullanıcıları için USB-C (DisplayPort Alt Mode) girişli ve 65W+ PD şarj geçişli modeller kablo karmaşasını bitirir.', importance: 'useful' },
      { id: 'ergonomi', title: 'Ergonomi ve Ayak Kalitesi', description: 'Yükseklik, eğim (tilt) ve döndürme (pivot) ayakları masaya göre konumlandırmayı kolaylaştırır. VESA montaj desteği ileride kollu stand kullanımı sağlar.', importance: 'useful' }
    ],
    checklistItems: [
      { id: 'c1', text: 'Masamın derinliğini ve izleme mesafemi ölçüp ideal inç boyutunu belirledim.', importance: 'critical' },
      { id: 'c2', text: 'Panel tipinin (IPS / VA / OLED) kullanım amacıma uygun olduğunu doğruladım.', importance: 'critical' },
      { id: 'c3', text: 'Çözünürlüğün ekran boyutuyla oranını (27 inçte en az QHD) kontrol ettim.', importance: 'critical' },
      { id: 'c4', text: 'Native yenileme hızının ve bilgisayarımın çıkış verebildiği Hz değerinin uyumunu onayladım.', importance: 'important' },
      { id: 'c5', text: 'Parlaklığın en az 300 nits ve renk gamının %100 sRGB olduğunu gördüm.', importance: 'important' },
      { id: 'c6', text: 'HDMI / DisplayPort / USB-C portlarının ihtiyacımı karşıladığını kontrol ettim.', importance: 'important' },
      { id: 'c7', text: 'Ayağın yükseklik ayarı ve VESA montaj deliği olup olmadığını inceledim.', importance: 'useful' }
    ],
    redFlags: [
      { id: 'rf1', title: 'Yazılımsal Hz İddiaları', explanation: 'Bazı satıcılar 60Hz paneli "120Hz destekler" diye tanıtır; gerçek (native) panel değerini teknik spec sayfasından teyit etmeden almayın.' },
      { id: 'rf2', title: '200 Nits Altı Solgun Ekranlar', explanation: 'Işıklı ortamlarda görüntüyü seçilemez hale getiren düşük parlaklıklı ofis modelleri, mağazadaki demo modunda olduğundan canlı görünür.' },
      { id: 'rf3', title: 'DisplayPort’suz HDMI Tek Girişli Modeller', explanation: 'Tek HDMI girişi hem laptoptan hem masaüstünden bağlanmayı imkansız kılar; sürekli tak-çıkar yapmaya mecbur kalırsınız.' }
    ],
    questions: [
      { id: 'q1', question: 'Panel native kaç Hz çalışıyor, yazılımsal mı donanımsal mı?', whyItMatters: 'Gerçek akıcılığı belirleyen değer native yenileme hızıdır; pazarlama metinlerindeki değer yanıltıcı olabilir.', target: 'seller' },
      { id: 'q2', question: 'Kutudan HDMI ve DisplayPort kablosu çıkıyor mu?', whyItMatters: 'Yüksek Hz ve çözünürlük için kaliteli kablo şarttır; kablosuz gelen üründe ekstra masraf açabilirsiniz.', target: 'seller' },
      { id: 'q3', question: 'Ölü piksel garantisi hangi şartlarda geçerli?', whyItMatters: 'Bazı firmalar 3-5 ölü pikseli "aykırı değil" sayar; dönüş koşullarını önceden öğrenmek hakkınızı korur.', target: 'seller' }
    ],
    scenarios: [
      { id: 'ofis', title: 'Ofis ve Uzun Süreli Çalışma', description: 'Göz yorgunluğu az, ergonomik ayaklı, 27 inç QHD IPS panel.', recommendedCriteriaIds: ['ergonomi', 'parlaklik', 'panel'] },
      { id: 'tasarim', title: 'Tasarım ve Fotoğraf', description: '%100 sRGB (tercihen DCI-P3) renk gamı, fabrika kalibrasyonlu IPS panel.', recommendedCriteriaIds: ['panel', 'parlaklik', 'cozunurluk'] },
      { id: 'oyun', title: 'Oyun Odaklı Kullanım', description: '144Hz+ panel, düşük tepki süresi ve değişken yenileme (FreeSync/G-Sync) desteği.', recommendedCriteriaIds: ['yenileme', 'panel', 'portlar'] }
    ],
    relatedGuideIds: ['laptop-alirken', 'oyuncu-monitoru-alirken', 'usb-c-hub-alirken']
  },

  // 22. Oyuncu Monitörü Alırken
  {
    id: 'oyuncu-monitoru-alirken',
    slug: 'oyuncu-monitoru-alirken',
    categorySlug: 'teknoloji',
    title: 'Oyuncu Monitörü Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Oyuncu Monitörü Alırken',
    description: 'Yenileme hızı, tepki süresi, VRR senkronizasyonu ve panel seçimiyle oyun deneyimini belirleyen kriterler. Oyuncu monitörü alırken nelere dikkat edilmeli, işte cevabı.',
    intro: [
      'Oyuncu monitörü pazarı, saniyelerle ölçülen iddialarla doludur; 1ms tepki süresi ve 240Hz gibi değerler doğru okunmadığında yanıltıcı olur. Mesele kağıt üzerindeki sayı değil, panelin gerçek davranışıdır.',
      'Rekabetçi FPS oyuncusuyla hikâye temelli tek oyunculu oyunları seven kişinin ihtiyaçları farklıdır: biri 240Hz hız ve netlik isterken, diğeri yüksek çözünürlük ve HDR parlaklığına öncelik verir.',
      'Ekran kartınızın gücü de tabloya dahil edilmelidir; 240Hz bir monitör, kartınız 100 FPS üstü çıkaramıyorsa boşa harcanmış bütçedir.'
    ],
    keywords: ['oyuncu monitörü', 'gaming monitör', '144hz monitör', 'oyuncu monitörü alırken nelere dikkat edilmeli', 'tepki süresi', 'g-sync', 'freesync', 'hdr monitör'],
    aliases: ['gaming monitor', 'oyun ekranı', 'esports monitörü'],
    estimatedReadTimeMinutes: 5,
    lastUpdated: '2026-09-15',
    status: 'published',
    importanceItems: [
      { id: 'hz', title: 'Native Yenileme Hızı', description: 'Rekabetçi oyunlar için 144Hz başlangıç noktasıdır; 240Hz ve üzeri ancak yüksek FPS alan sistemlerde anlamlıdır. 60Hz native paneli oyun monitörü diye almayın.', importance: 'critical' },
      { id: 'tepkisuresi', title: 'Tepki Süresi ve Overdrive Davranışı', description: 'GtG 1ms değerleri en iyi senaryoyu yansıtır; gerçek dünyada overdrive (OD) modlarının inverse ghosting yapmadan çalıştığı "optimum" mod önemlidir. VA panellerde smearing (iz bırakma) görülebilir.', importance: 'critical' },
      { id: 'vrr', title: 'Değişken Yenileme (FreeSync / G-Sync)', description: 'Ekran kartı ile monitör arasındaki ekran yırtılması ve takılmayı önler. VRR çalışma aralığının (ör. 48-144Hz) genişliği deneyimi belirler.', importance: 'critical' },
      { id: 'cozunurluk', title: 'Çözünürlük / Boyut / FPS Dengesi', description: '1440p 27 inç, görünürlük ve performans dengesi olarak en mantıklı seçenektir; 4K ancak üst segment kartlarla oyun monitörü anlamına gelir.', importance: 'important' },
      { id: 'hdr', title: 'Gerçek HDR Parlaklığı', description: 'HDR400 etiketi çoğu zaman marketingtir; gerçek HDR deneyimi için 600 nits+ ve geniş renk gamı (DCI-P3) gerekir. OLED paneller pikseller seviyesinde parlaklık kontrolü sunar.', importance: 'important' },
      { id: 'portlar', title: 'HDMI 2.1 ve Konsol Uyumu', description: 'Konsolda 4K 120Hz için HDMI 2.1 (48Gbps tam bant genişliği) şarttır; HDMI 2.0 portlu monitörler konsolda 1440p120 ile sınırlı kalır.', importance: 'useful' }
    ],
    checklistItems: [
      { id: 'c1', text: 'Ekran kartımın oyunlarda ortalama kaç FPS ürettiğini ölçüp buna göre Hz hedefi belirledim.', importance: 'critical' },
      { id: 'c2', text: 'Native (donanımsal) yenileme hızını teknik spec sayfasından doğruladım.', importance: 'critical' },
      { id: 'c3', text: 'Kullandığım GPU’ya uygun VRR desteğini (FreeSync / G-Sync Compatible) kontrol ettim.', importance: 'critical' },
      { id: 'c4', text: 'Overdrive modlarının incelemelerdeki gerçek test sonuçlarını okudum.', importance: 'important' },
      { id: 'c5', text: 'Konsol kullanıyorsam HDMI 2.1 tam bant genişliğini (48Gbps) doğruladım.', importance: 'important' },
      { id: 'c6', text: 'VA panelde iz bırakma (smearing) konusundaki kullanıcı yorumlarını inceledim.', importance: 'useful' },
      { id: 'c7', text: 'Ayak sağlamlığını ve VESA desteğini kontrol ettim.', importance: 'useful' }
    ],
    redFlags: [
      { id: 'rf1', title: 'MPRT ile Oynanan 1ms İddiaları', explanation: 'Bazı markalar 4-5ms GtG olan paneli MPRT ölçümüyle "1ms" diye tanıtır; iki ölçüm aynı şey değildir, GtG değerini sorun.' },
      { id: 'rf2', title: 'HDMI 2.1 Etiketli Ama 24Gbps Portlar', explanation: 'Bazı monitörlerde HDMI 2.1 yazsa da port yarı bant genişliğidir; 4K120 hedefliyorsanız tam 48Gbps destek teyit edilmelidir.' },
      { id: 'rf3', title: 'OC (Overclock) Hz Pazarlaması', explanation: '165Hz gibi değerlerin bir kısmı panelden overclock ile elde edilir ve kararsız çalışabilir; native değeri sorun.' }
    ],
    questions: [
      { id: 'q1', question: 'Panel native kaç Hz ve overclock değerleri kararsızlık gösteriyor mu?', whyItMatters: 'OC modları bazı modellerde siyah ekran ve takılma yapar; güvenilir native değer uzun ömürlü kullanım sağlar.', target: 'seller' },
      { id: 'q2', question: 'VRR hangi FPS aralığında aktif oluyor?', whyItMatters: 'Alt sınır yüksekse (ör. 48 FPS) düşük FPS anlarında koruma devre dışı kalır ve yırtılma oluşur.', target: 'seller' },
      { id: 'q3', question: 'Konsolumla 4K120 veya 1440p120 modunu bizzat test edebilir miyim?', whyItMatters: 'Mağaza testi, satın almadan önce gerçek performansı görmenin en garantili yoludur.', target: 'seller' }
    ],
    scenarios: [
      { id: 'fps', title: 'Rekabetçi FPS Oyuncusu', description: '24.5-27 inç, 240Hz+ Fast IPS, agresif overdrive ve geniş VRR aralığı.', recommendedCriteriaIds: ['hz', 'tepkisuresi', 'vrr'] },
      { id: 'hikaye', title: 'Tek Oyunculu / Sinematik Oyunlar', description: '27-32 inç 4K, yüksek parlaklık ve geniş renk gamıyla gerçek HDR.', recommendedCriteriaIds: ['cozunurluk', 'hdr', 'vrr'] },
      { id: 'konsol', title: 'Konsol Oyuncusu', description: 'HDMI 2.1 tam bant, 4K120 destekli, düşük girişim gecikmeli panel.', recommendedCriteriaIds: ['portlar', 'hz', 'cozunurluk'] }
    ],
    relatedGuideIds: ['monitor-alirken', 'televizyon-alirken', 'laptop-alirken', 'kulaklik-alirken']
  },

  // 23. E-Kitap Okuyucu Alırken
  {
    id: 'e-kitap-okuyucu-alirken',
    slug: 'e-kitap-okuyucu-alirken',
    categorySlug: 'teknoloji',
    title: 'E-Kitap Okuyucu Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'E-Kitap Okuyucu Alırken',
    description: 'E Ink ekran kalitesi, aydınlatma, mağaza ekosistemi ve dayanıklılık kriterleriyle doğru e-kitap okuyucuyu seçme rehberi. E-kitap okuyucu alırken nelere dikkat edilmeli, bu yazıda.',
    intro: [
      'E-kitap okuyucular, LCD ekranlı tabletlerden tamamen farklı bir deneyim sunar: E Ink ekranlar arka ışık yaymadığı için uzun süreli okumada göz yorgunluğu belirgin şekilde azalır ve pil günler yerine haftalarla ölçülür.',
      'Bu cihazlarda inç boyutu ya da işlemci hızı değil; ekran nesli (Carta 1200 gibi), aydınlatmanın renk sıcaklığı ayarı ve mağaza ekosisteminin kısıtları ön plana çıkar.',
      'Alım dan önce hangi kitapları hangi kaynaktan okuyacağınızı netleştirmek, cihaz seçiminde en çok işe yarayan adımdır; çünkü bazı okuyucular kendi mağazası dışındaki formatlarla sınırlı çalışır.'
    ],
    keywords: ['e-kitap okuyucu', 'ebook reader', 'kindle', 'e-ink', 'e-kitap okuyucu alırken nelere dikkat edilmeli', 'kobo', 'epub okuyucu'],
    aliases: ['ebook reader', 'e-okuyucu', 'dijital kitap okuyucu', 'e-ink okuyucu'],
    estimatedReadTimeMinutes: 4,
    lastUpdated: '2026-09-15',
    status: 'published',
    importanceItems: [
      { id: 'ekran', title: 'E Ink Ekran Nesli ve PPI', description: '300 PPI değerindeki Carta 1200 nesli ekranlar en keskin yazıyı sunar. 6-7 inç standart boyuttur; çizgi roman ve PDF için 8 inç+ veya 13.3 inç modeller düşünülebilir.', importance: 'critical' },
      { id: 'aydinlatma', title: 'Ön Aydınlatma ve Renk Sıcaklığı', description: 'Işıksız model karanlıkta okunamaz. En az 20 seviye parlaklık ve sıcak beyaz (amber) ayarı olan modeller gece okumalarında gözü yormaz.', importance: 'critical' },
      { id: 'ekosistem', title: 'Mağaza ve Format Desteği', description: 'Kapalı ekosistemli cihazlar kendi mağazasındaki kitapları en iyi şekilde okur; kendi EPUB dosyalarınızı yükleyecekseniz geniş format desteği (EPUB, PDF, CBZ) ve sorunsuz side-load araştırmalısınız.', importance: 'critical' },
      { id: 'sugecirmezlik', title: 'Su Geçirmezlik (IPX8)', description: 'Banyo, plaj ve havuz kenarı okumaları için IPX8 sınıfı gövde büyük avantaj sağlar; sadece "sıçramaya dayanıklı" ifadesi daldırmayı kapsamaz.', importance: 'important' },
      { id: 'batarya', title: 'Pil Ömrü ve Şarj Portu', description: 'Haftalarca giden pil E Ink cihazlarının doğasıdır; mikro USB yerine USB-C portlu model güncel bir zorunluluktur.', importance: 'useful' }
    ],
    checklistItems: [
      { id: 'c1', text: 'Ekranın en az 300 PPI olduğunu teknik spec sayfasından doğruladım.', importance: 'critical' },
      { id: 'c2', text: 'Ön aydınlatmanın parlaklık ve renk sıcaklığı ayarının bulunduğunu kontrol ettim.', importance: 'critical' },
      { id: 'c3', text: 'Kendi EPUB/PDF dosyalarımı yüklemenin bu cihazda nasıl çalıştığını araştırdım.', importance: 'critical' },
      { id: 'c4', text: 'Türkiye’den mağaza alışverişi ve ödeme yöntemlerinin durumunu kontrol ettim.', importance: 'important' },
      { id: 'c5', text: 'Plaj/havuz kullanımı planlıyorsam IPX8 sertifikasını doğruladım.', importance: 'important' },
      { id: 'c6', text: 'Şarj portunun USB-C olduğunu ve kutuda kablonun çıkığını onayladım.', importance: 'useful' }
    ],
    redFlags: [
      { id: 'rf1', title: '"E-Kitap Okuyabilen" LCD Tablet Pazarlaması', explanation: 'LCD tabletler e-kitap okuyabilse de arka ışık yaydıkları için uzun okumada göz yorgunluğu ve pil tükenmesi yaşatır; E Ink ile karıştırılmamalıdır.' },
      { id: 'rf2', title: 'Bölge Kilidi ve Ödeme Kısıtları', explanation: 'Bazı cihazların mağazası belirli ülkelerden ödeme kabul etmez; cihaz alındıktan sonra kitap alamama riskine karşı önceden doğrulanmalıdır.' },
      { id: 'rf3', title: 'Işıksız Baz Model Tuzağı', explanation: 'Fiyatı cazip görünen ışıksız modeller, yatakta ve loş ortamda okumayı fiilen imkansız kılar; aradaki fiyat farkı aydınlatmaya değer.' }
    ],
    questions: [
      { id: 'q1', question: 'Kendi indirdiğim EPUB ve PDF dosyalarını sorunsuz okuyabilir miyim?', whyItMatters: 'Kapalı ekosistemli cihazlarda side-load süreci zahmetli olabilir veya DRM engeli çıkar.', target: 'seller' },
      { id: 'q2', question: 'Mağazasından Türkiye’den satın alma ve TL ile ödeme yapılabiliyor mu?', whyItMatters: 'Bölge kısıtı olan mağazalar, cihazı aldıkran sonra kitap alamamanıza yol açar.', target: 'seller' },
      { id: 'q3', question: 'Cihaz hangi dillerde sözlük ve not alma desteği sunuyor?', whyItMatters: 'Türkçe kitap okuyanlar için varsayılan sözlük desteği günlük kullanımı kolaylaştırır.', target: 'seller' }
    ],
    scenarios: [
      { id: 'yolcu', title: 'Yolculuk ve Tatil Okuru', description: 'IPX8 su geçirmez, USB-C şarjlı, haftalarca pil giden hafif model.', recommendedCriteriaIds: ['sugecirmezlik', 'batarya', 'ekran'] },
      { id: 'ev-okuru', title: 'Evde Akşam Okuru', description: 'Renk sıcaklığı ayarlı aydınlatması olan, 6-7 inç 300 PPI model.', recommendedCriteriaIds: ['aydinlatma', 'ekran'] },
      { id: 'akademik', title: 'Akademik Metin / PDF Okuru', description: '8 inç ve üzeri büyük ekran, gelişmiş PDF işleme ve kalem desteği.', recommendedCriteriaIds: ['ekran', 'ekosistem'] }
    ],
    relatedGuideIds: ['powerbank-alirken', 'akilli-saat-alirken', 'laptop-alirken']
  },

  // 24. Akıllı Saat Alırken
  {
    id: 'akilli-saat-alirken',
    slug: 'akilli-saat-alirken',
    categorySlug: 'teknoloji',
    title: 'Akıllı Saat Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Akıllı Saat Alırken',
    description: 'Telefon uyumu, sensör doğruluğu, pil ömrü ve ekran teknolojisi kriterleriyle doğru akıllı saati seçme rehberi. Akıllı saat alırken nelere dikkat edilmeli, tüm başlıklarla burada.',
    intro: [
      'Akıllı saatte en belirleyici kriter çoğu zaman teknik özellik değil, uyumlu olduğu telefon platformudur: bazı saatler yalnızca kendi ekosistemindeki telefonlarla tam özellik çalışır, diğerlerinde temel fonksiyonlar eksik kalır.',
      'İkinci büyük ayrım saat tipindedir: ekranı sürekli açık, uygulama dolu akıllı saatler ile haftalarca pil giden spor odaklı bantlar (smart band) farklı ihtiyaçlara cevap verir.',
      'Sensör doğruluğu, ölçüm tutarlılığı ve pil ömrü ise günlük kullanımda memnuniyeti belirleyen üçlüdür; kutudaki yazının ötesinde gerçek kullanım deneyimine bakmak gerekir.'
    ],
    keywords: ['akıllı saat', 'smartwatch', 'akıllı saat alırken nelere dikkat edilmeli', 'spor saati', 'akıllı bileklik', 'gps saat', 'nabız ölçen saat'],
    aliases: ['smartwatch', 'akıllı bileklik', 'giyilebilir teknoloji'],
    estimatedReadTimeMinutes: 4,
    lastUpdated: '2026-09-15',
    status: 'published',
    importanceItems: [
      { id: 'uyum', title: 'Telefon Uyumu (iOS / Android)', description: 'Bazı saatler karşı platformda hiç çalışmaz, çoğu sınırlı çalışır. Satın almadan önce kendi telefon modelinizle uyum listesini mutlaka kontrol edin.', importance: 'critical' },
      { id: 'pil', title: 'Pil Ömrü ve Ekran Türü', description: 'Her zaman açık ekran (AOD) ile 1-2 gün giden AMOLED modeller ile 10-14 gün giden spor odaklı modeller arasındaki fark, kullanım alışkanlığınıza göre belirleyicidir.', importance: 'critical' },
      { id: 'sensorler', title: 'Sensör Seti ve Ölçüm Doğruluğu', description: 'Kalp ritmi (EKG), kan oksijeni (SpO2), uyku evreleri ve dahili GPS gibi özelliklerin kaçı gerçek ve doğru çalışıyor, incelemelerden teyit edilmelidir.', importance: 'critical' },
      { id: 'spor', title: 'Spor ve Antrenman Desteği', description: 'Koşu, yüzme, bisiklet gibi branşlar için çok-bant GPS, su geçirmezlik (5 ATM) ve otomatik antrenman tanıma özellikleri gerekir.', importance: 'important' },
      { id: 'ekran', title: 'Ekran Teknolojisi ve Her Zaman Açık Ekran', description: 'AMOLED ekranlar kesin siyah ve canlı renk sunar; AOD (always-on display) desteği saat yüzünü sürekli görünür kılar ancak pil ömrünü kısaltır.', importance: 'useful' },
      { id: 'bant-ekosistem', title: 'Uygulama ve Bant Ekosistemi', description: 'Üçüncü parti uygulama desteği ve standart bant bağlantısı (20mm/22mm gibi) uzun vadeli kullanım esnekliği sağlar.', importance: 'useful' }
    ],
    checklistItems: [
      { id: 'c1', text: 'Saat benim telefonumun işletim sistemiyle tam özellikli çalışıyor mu kontrol ettim.', importance: 'critical' },
      { id: 'c2', text: 'Bildirim yanıtlama, arama ve ses asistanı özelliklerinin platformumda çalıştığını doğruladım.', importance: 'critical' },
      { id: 'c3', text: 'Pil ömrü iddialarının gerçek kullanıcı deneyimindeki karşılığını araştırdım.', importance: 'critical' },
      { id: 'c4', text: 'İhtiyaç duyduğum sensörlerin (GPS, SpO2, EKG) listede olduğunu kontrol ettim.', importance: 'important' },
      { id: 'c5', text: 'Yüzme kullanımı için 5 ATM su geçirmezlik sertifikasını onayladım.', importance: 'important' },
      { id: 'c6', text: 'Şarj kablosunun manyetik/özel mi yoksa standart mı olduğunu inceledim.', importance: 'useful' }
    ],
    redFlags: [
      { id: 'rf1', title: 'Sahte Sensör İddiaları', explanation: 'Piyasada GPS’ten bile habersiz, adım sayan ucuz bantlar "koşu saati" diye satılır; sensör listesini değil bağımsız testleri esas alın.' },
      { id: 'rf2', title: 'Karşı Platformda Çalışmıyor Uyarısı', explanation: 'Saat telefonunuzun platformuyla uyumsuzsa temel bildirimler bile çalışmayabilir; iade koşullarını öğrenmeden almayın.' },
      { id: 'rf3', title: 'Özel Şarj Aletine Mahkumiyet', explanation: 'Standart olmayan manyetik şarj aygıtı kaybolduğunda saat kullanılamaz hale gelir; yedek şarj aletinin bulunabilirliğini kontrol edin.' }
    ],
    questions: [
      { id: 'q1', question: 'Bu saat benim telefon modelimle hangi özellikleri destekliyor?', whyItMatters: 'Aynı saat, farklı platformlarda farklı yetenekler gösterebilir; kutu dışı bilgisi alış sonrası hayal kırıklığını önler.', target: 'seller' },
      { id: 'q2', question: 'Her zaman açık ekran açıkken pil gerçekten kaç gün gidiyor?', whyItMatters: 'AOD, pil ömrünü önemli ölçüde düşürür; iddia edilen değer genelde ekran kapalı senaryoyu yansıtır.', target: 'seller' },
      { id: 'q3', question: 'Yedek şarj kablosu ve bileklik bulunabilir mi?', whyItMatters: 'Kırılan bileklik veya kaybolan özel kabloyla saat kullanılamaz hale gelebilir.', target: 'seller' }
    ],
    scenarios: [
      { id: 'sporcu', title: 'Koşu ve Triatlon Sporcusu', description: 'Dahili çok-bant GPS, 5 ATM, uzun pil ve antrenman analitiği.', recommendedCriteriaIds: ['spor', 'sensorler', 'pil'] },
      { id: 'gunluk', title: 'Günlük Kullanıcı ve Bildirim Meraklısı', description: 'AMOLED ekran, AOD, hızlı şarj ve zengin uygulama ekosistemi.', recommendedCriteriaIds: ['ekran', 'uyum', 'bant-ekosistem'] },
      { id: 'saglik-takip', title: 'Sağlık Takibi Odaklı', description: 'EKG, SpO2 ve uyku evresi ölçümlerinde doğruluğu kanıtlanmış sensör seti.', recommendedCriteriaIds: ['sensorler', 'pil'] }
    ],
    relatedGuideIds: ['powerbank-alirken', 'e-kitap-okuyucu-alirken', 'laptop-alirken']
  },

  // 25. Wi-Fi Router Alırken
  {
    id: 'wifi-router-alirken',
    slug: 'wifi-router-alirken',
    categorySlug: 'teknoloji',
    title: 'Wi-Fi Router Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Wi-Fi Router Alırken',
    description: 'Wi-Fi standardı (Wi-Fi 6/6E/7), bant genişliği, port hızları ve kapsama alanı kriterleriyle doğru modem-router seçme rehberi. Wi-Fi router alırken nelere dikkat edilmeli, burada.',
    intro: [
      'Ev internetinin yavaşlığının suçlusu çoğu zaman operatör değil, eskiyip yetersiz kalan routerdır. 100 Mbps aboneliğe sahipseniz bile 10 yıl önceki bir modem cihazı bu hızı kablosuz olarak dağıtamaz.',
      'Router seçiminde büyük harflerle yazılan "AX6000" gibi değerler toplam teorik hızdır ve gerçek dünyada paylaşılamaz; asıl bakılacak şeyler Wi-Fi standardı (Wi-Fi 6/6E/7), eşzamanlı bant yapısı ve Ethernet port hızlarıdır.',
      'Evdeki cihaz sayısı da en az metrekaresi kadar önemlidir: 30+ cihazın bulunduğu bir akıllı evde OFDMA ve MU-MIMO destekleyen yeni nesil standartlar fark yaratır.'
    ],
    keywords: ['wifi router', 'modem router', 'wifi 6', 'wifi 7', 'router alırken nelere dikkat edilmeli', 'kablosuz ağ', 'wifi şiddeti'],
    aliases: ['modem', 'modem router', 'kablosuz yönlendirici', 'access point'],
    estimatedReadTimeMinutes: 5,
    lastUpdated: '2026-09-15',
    status: 'published',
    importanceItems: [
      { id: 'standart', title: 'Wi-Fi Standardı (Wi-Fi 6 / 6E / 7)', description: 'Wi-Fi 6 (AX) yoğun cihazlı evlerde temel tercihdir; 6E ve 7, az kalabalık ama geniş bant sunan 6 GHz frekansını kullanır. Yeni alımda en az Wi-Fi 6 önerilir.', importance: 'critical' },
      { id: 'bantlar', title: 'Bant Yapısı (Tek / Çift / Üçlü Bant)', description: 'Çift bantlı (2.4+5 GHz) modeller temel ihtiyacı karşılar; üçlü bant ve 6 GHz destekli routerlar yoğun kullanımda ve mesh kurulumlarında kilit rol oynar.', importance: 'critical' },
      { id: 'portlar', title: 'Ethernet Port Hızları', description: 'Kablolu bağlantı için 1 Gbit portlar standarttır; 2.5G ve üzeri portlar yüksek hızlı abonelik ve NAS kullanımında fark yaratır. WAN portunun da gigabit olduğunu kontrol edin.', importance: 'important' },
      { id: 'kapsama', title: 'Kapsama Alanı ve Anten Gücü', description: 'Büyük ve çok katlı evlerde tek router yerine mesh sistem daha mantıklıdır; anten sayısı yerine cihazın sinyal kararlılığı ve duvar geçişi incelenmelidir.', importance: 'important' },
      { id: 'guvenlik', title: 'Güvenlik ve Yazılım Desteği', description: 'WPA3 desteği ve düzenli firmware güncellemesi veren üreticiler tercih edilmelidir; güncellenmeyen router ağınızı açık kapı haline getirir.', importance: 'useful' },
      { id: 'abonelik', title: 'Operatör Uyumu ve Bridge Modu', description: 'Fiber aboneliğinizin PPPoE/VLAN ayarlarıyla uyum ve bridge modu desteği, kendi routerınızı sorunsuz kullanmanın ön şartıdır.', importance: 'useful' }
    ],
    checklistItems: [
      { id: 'c1', text: 'İnternet aboneliğimin hızının router portları tarafından karşılandığını (en az 1 Gbit) doğruladım.', importance: 'critical' },
      { id: 'c2', text: 'Cihazın en az Wi-Fi 6 standardını desteklediğini kontrol ettim.', importance: 'critical' },
      { id: 'c3', text: 'Evdeki cihaz sayısına göre çift/üçlü bant yapısını değerlendirdim.', importance: 'critical' },
      { id: 'c4', text: 'Ev metrekaresi ve kat planına göre tek routerın yetip yetmeyeceğini (mesh ihtiyacı) düşündüm.', importance: 'important' },
      { id: 'c5', text: 'WPA3 güvenlik desteğinin bulunduğunu onayladım.', importance: 'important' },
      { id: 'c6', text: 'Operatörümün abonelik tipine (PPPoE / VLAN) cihazın uyumunu araştırdım.', importance: 'useful' }
    ],
    redFlags: [
      { id: 'rf1', title: 'Toplam Hız (AX6000) Pazarlaması', explanation: 'Kutudaki devasa sayı iki bandın teorik toplamıdır; cihaz başına düşen gerçek hız bundan çok daha düşüktür, sınıflandırma numarasına değil standarda bakın.' },
      { id: 'rf2', title: '100 Mbps LAN Portlu "Hızlı" Modeller', explanation: 'Kablosuz hızı yüksek görünen bazı ucuz modellerde kablolu portlar 100 Mbps ile sınırlıdır; fiber hızınızı kablo ile hiç kullanamazsınız.' },
      { id: 'rf3', title: 'Firmware Güncellemesi Gelmeyen Cihazlar', explanation: 'Güvenlik açıkları kapatılmayan routerlar tüm ağdaki cihazları riske atar; üreticinin destek süresi politikasını önceden araştırın.' }
    ],
    questions: [
      { id: 'q1', question: 'Bu router fiber aboneliğimdeki PPPoE/VLAN ayarlarını destekliyor mu?', whyItMatters: 'Uyumsuz cihazda internet hiç kurulmayabilir veya sadece operatör modemi arkasında çalışır.', target: 'seller' },
      { id: 'q2', question: 'Cihaz kaç yıl firmware güncellemesi alacak?', whyItMatters: 'Destek süresi kısa olan cihazlar birkaç yıl içinde güvenlik açısından riskli hale gelir.', target: 'seller' },
      { id: 'q3', question: 'İleride mesh ünitesi olarak genişletebiliyor mu?', whyItMatters: 'Bazı routerlar aynı seriden uydu ünitelerle büyütülebilir; bu, yeni baştan sistem almaktan daha ekonomiktir.', target: 'seller' }
    ],
    scenarios: [
      { id: 'kucuk-ev', title: 'Küçük Ev / Apartman Dairesi', description: 'Çift bantlı Wi-Fi 6 router, gigabit portlar, kurulum kolaylığı.', recommendedCriteriaIds: ['standart', 'portlar'] },
      { id: 'cok-katli', title: 'Çok Katlı / Büyük Ev', description: 'Üçlü bant, mesh ile genişletilebilir yapı ve güçlü sinyal kararlılığı.', recommendedCriteriaIds: ['kapsama', 'bantlar'] },
      { id: 'oyuncu', title: 'Oyuncu ve Düşük Gecikme Arayan', description: 'QoS desteği, 2.5G portlar ve kablolu bağlantı önceliği.', recommendedCriteriaIds: ['portlar', 'standart', 'guvenlik'] }
    ],
    relatedGuideIds: ['mesh-wifi-alirken', 'guvenlik-kamerasi-alirken', 'laptop-alirken']
  },

  // 26. Mesh Wi-Fi Alırken
  {
    id: 'mesh-wifi-alirken',
    slug: 'mesh-wifi-alirken',
    categorySlug: 'teknoloji',
    title: 'Mesh Wi-Fi Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Mesh Wi-Fi Alırken',
    description: 'Paket içeriği, bant yapısı (üçlü bant backhaul), kapsama planı ve abonelik kısıtlarıyla doğru mesh Wi-Fi sistemi seçme rehberi. Mesh Wi-Fi alırken nelere dikkat edilmeli, bu yazıda.',
    intro: [
      'Çok katlı evlerde, kalın duvarlı apartmanlarda ve bahçeli evlerde tek routerın yetmediği noktada çözüm mesh sistemlerdir: birden fazla ünite aynı ağ adını taşıyarak ev boyunca kesintisiz dolaşım (roaming) sağlar.',
      'Mesh alımında en kritik konu ünite sayısı ve bant yapısıdır; 2 üniteli paketler 120-150 m² için tasarlanırken, üç ünite ve üzeri paketler ya daha büyük alanlar ya da zorlu duvar yapıları içindir.',
      'Repeater (tekrarlayıcı) ile mesh arasındaki fark performanstır: repeater sinyalin yarısını kaybederek taşır, mesh sistemi ise ayrı bir backhaul kanalından kayıpsız aktarım yapar.'
    ],
    keywords: ['mesh wifi', 'mesh sistem', 'mesh wifi alırken nelere dikkat edilmeli', 'wifi kapsama', 'mesh router', 'wifi genişletici'],
    aliases: ['mesh sistem', 'mesh router', 'kablosuz ağ sistemi'],
    estimatedReadTimeMinutes: 4,
    lastUpdated: '2026-09-15',
    status: 'published',
    importanceItems: [
      { id: 'unite', title: 'Ünite Sayısı ve Ev Planı', description: '90-150 m² için 2 ünite, 150-250 m² ve üzeri için 3 ünite başlangıç noktasıdır; kat planı ve kalın duvarlar ünite sayısını artırır.', importance: 'critical' },
      { id: 'backhaul', title: 'Backhaul Yapısı (Üçlü Bant / Ethernet)', description: 'Üniteler arası iletişim için ayrılmış üçüncü bant veya kablolu Ethernet backhaul, hıza ciddi katkı sağlar; çift bantlı sistemler kullanıcı hızından kısarak iletim yapar.', importance: 'critical' },
      { id: 'standart', title: 'Wi-Fi Standardı ve Portu', description: 'En az Wi-Fi 6 (AX) standardı ve gigabit portlar beklenmelidir; 2.5G WAN portu yüksek hızlı aboneliklerde fark yaratır.', importance: 'important' },
      { id: 'roaming', title: 'Roaming ve Aygıt Yönlendirme', description: '802.11k/v/r destekli hızlı roaming, ev içinde elinizde telefonla dolaşırken kesinti yaşamamanızı sağlar; band steering ise cihazları doğru banda yönlendirir.', importance: 'important' },
      { id: 'abonelik', title: 'Zorunlu Bulut/Abonelik Kısıtları', description: 'Bazı sistemler temel özellikleri bulut hesabına bağlar; yerel yönetim (local admin) desteği olup olmadığını kontrol edin.', importance: 'useful' }
    ],
    checklistItems: [
      { id: 'c1', text: 'Evimin m²sini ve kat planını hesaplayıp gerekli ünite sayısını belirledim.', importance: 'critical' },
      { id: 'c2', text: 'Backhaul için ayrı bant veya Ethernet kablosu çekme imkânımı değerlendirdim.', importance: 'critical' },
      { id: 'c3', text: 'Sistemin en az Wi-Fi 6 ve gigabit portlu olduğunu doğruladım.', importance: 'critical' },
      { id: 'c4', text: '802.11k/v roaming desteğinin bulunduğunu kontrol ettim.', importance: 'important' },
      { id: 'c5', text: 'Modemimden gelen hızı darboğaz etmeyecek WAN port hızını onayladım.', importance: 'important' },
      { id: 'c6', text: 'Yönetim uygulamasının bulut zorunluluğu olup olmadığını araştırdım.', importance: 'useful' }
    ],
    redFlags: [
      { id: 'rf1', title: 'Repeater’ı Mesh Diye Pazarlamak', explanation: 'Kutuda "mesh destekli" yazan bazı repeaterlar gerçek mesh değil; sinyali kayıpla taşır ve cihazlar arasında elle geçiş yapmanız gerekir.' },
      { id: 'rf2', title: 'Çift Bantlı Sistemde Hız Kaybı', explanation: 'Ayrı backhaul bandı olmayan sistemlerde her ünite arası zıplama hızı ciddi düşer; merkezi üniteden uzaklaştıkça fark hissedilir hale gelir.' },
      { id: 'rf3', title: 'Bulut Hesabı Olmadan Çalışmayan Sistemler', explanation: 'Üreticinin bulut servisi kapandığında yönetim paneline erişilemeyen sistemler risklidir; yerel yönetim desteğini önceden sorun.' }
    ],
    questions: [
      { id: 'q1', question: 'Üniteler arası iletişim için ayrılmış backhaul bandı var mı?', whyItMatters: 'Ayrı backhaul olmayan sistemlerde kapsama genişledikçe hız belirgin şekilde düşer.', target: 'seller' },
      { id: 'q2', question: 'Aynı seriden tek ünite satın alıp sistemi sonradan büyütebilir miyim?', whyItMatters: 'Gelecekte sadece bir uydu ekleyerek büyütmek, komple yeni sistem almaktan çok daha ekonomiktir.', target: 'seller' },
      { id: 'q3', question: 'Bulut aboneliği olmadan yerel yönetim yapılabilir mi?', whyItMatters: 'Ücretli abonelik modeline geçen markalar temel özellikleri kilitliyebilir.', target: 'seller' }
    ],
    scenarios: [
      { id: 'cok-katli-ev', title: 'Çok Katlı Ev Sahibi', description: '3 üniteli üçlü bant sistem, Ethernet backhaul imkânı.', recommendedCriteriaIds: ['unite', 'backhaul'] },
      { id: 'buyuk-daire', title: 'Geniş Apartman Dairesi', description: '2 üniteli Wi-Fi 6 sistem, gigabit portlar, kolay kurulum.', recommendedCriteriaIds: ['unite', 'standart'] },
      { id: 'bahce', title: 'Bahçe ve Teras Kapsaması', description: 'Dış mekan dayanıklılığı olan uydu üniteler ve genişletilebilir yapı.', recommendedCriteriaIds: ['backhaul', 'roaming'] }
    ],
    relatedGuideIds: ['wifi-router-alirken', 'guvenlik-kamerasi-alirken', 'televizyon-alirken']
  },

  // 27. Yazıcı Alırken
  {
    id: 'yazici-alirken',
    slug: 'yazici-alirken',
    categorySlug: 'teknoloji',
    title: 'Yazıcı Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Yazıcı Alırken',
    description: 'Mürekkep püskürtmeli mi lazer mi, kartuş mu tank mı, baskı maliyeti ve bağlantı kriterleriyle doğru yazıcı seçme rehberi. Yazıcı alırken nelere dikkat edilmeli, tüm detaylarıyla burada.',
    intro: [
      'Yazıcı alırken bakılması gereken ilk şey cihazın satış fiyatı değil, sayfa başına baskı maliyetidir. Ucuz kartuşlu bir yazıcı, iki kartuş değişiminde kendi fiyatını geri kazanabilecek kadar pahalı tüketim gerektirebilir.',
      'Mürekkep püskürtmeli (inkjet) yazıcılar renkli fotoğraf ve ara sıra baskıda iyidir; lazer yazıcılar ise yoğun siyah-beyaz belge baskısında hız, keskinlik ve düşük sayfa maliyeti sunar.',
      'Tanklı (sürekli mürekkep sistemli) modeller, sık renkli baskı yapan ev kullanıcıları ve öğrenciler için uzun vadede en ekonomik seçenektir.'
    ],
    keywords: ['yazıcı', 'lazer yazıcı', 'tanklı yazıcı', 'yazıcı alırken nelere dikkat edilmeli', 'inkjet', 'kartuş maliyeti', 'fotoğraf yazıcısı'],
    aliases: ['printer', 'lazer yazıcı', 'kartuşlu yazıcı'],
    estimatedReadTimeMinutes: 4,
    lastUpdated: '2026-09-15',
    status: 'published',
    importanceItems: [
      { id: 'baski-teknolojisi', title: 'Baskı Teknolojisi (Lazer / Mürekkep Püskürtmeli / Tanklı)', description: 'Yoğun belge baskısı için lazer; renkli fotoğraf ve az sayıda renkli baskı için inkjet; sık ve ekonomik renkli baskı için tanklı sistem uygundur.', importance: 'critical' },
      { id: 'tuketim-maliyeti', title: 'Sayfa Başına Baskı Maliyeti', description: 'Kartuş/tank verimi (sayfa ömrü) bölü fiyat ile sayfa maliyeti hesaplanmalıdır; lazer ve tanklı sistemler kartuşlulara göre kat kat ucuzdur.', importance: 'critical' },
      { id: 'fonksiyonlar', title: 'Çok Fonksiyonluluk (Tarayıcı / Fotokopi / Faks)', description: 'Evde evrak işleri için tarayıcı ve fotokopi birleşik modeller mantıklıdır; doküman tarayacaksanız otomatik besleyici (ADF) büyük konfor sağlar.', importance: 'important' },
      { id: 'baglanti', title: 'Bağlantı Seçenekleri', description: 'Wi-Fi ve mobil baskı (AirPrint, Mopria) desteği kablosuz kullanımın standartıdır; sadece USB bağlantılı modeller ofis dışında pratik değildir.', importance: 'important' },
      { id: 'otomatik-dupleks', title: 'Çift Yüzlü (Dupleks) Baskı', description: 'Otomatik dupleks, kâğıt ve zaman tasarrufu sağlar; manuel dupleks isteyen modeller sayfayı elle çevirme derdi yaratır.', importance: 'useful' },
      { id: 'hiz', title: 'Baskı Hızı ve İlk Sayfa Süresi', description: 'Lazerlerde 20-30 sayfa/dakika standarttır; yoğun kullanımda ilk sayfa çıkış süresi (FPT) günlük deneyimi belirler.', importance: 'useful' }
    ],
    checklistItems: [
      { id: 'c1', text: 'Baskı ihtiyacımı (belge / fotoğraf / karışık) netleştirdim.', importance: 'critical' },
      { id: 'c2', text: 'Kartuş veya tank fiyatını verimine bölerek sayfa maliyetini hesapladım.', importance: 'critical' },
      { id: 'c3', text: 'Yedek kartuş/tank/mürekkep şişesinin Türkiye’de bulunabilir olduğunu kontrol ettim.', importance: 'critical' },
      { id: 'c4', text: 'Wi-Fi ve telefonumdan direkt baskı (AirPrint/Mopria) desteğini onayladım.', importance: 'important' },
      { id: 'c5', text: 'Otomatik çift yüzlü baskı özelliğinin bulunduğunu doğruladım.', importance: 'important' },
      { id: 'c6', text: 'Tarayıcı ihtiyacım varsa ADF (otomatik besleyici) olup olmadığına baktım.', importance: 'useful' }
    ],
    redFlags: [
      { id: 'rf1', title: 'Region Lock (Bölge Kilidi) Kartuşlar', explanation: 'Yurt dışından getirtilen yazıcılar Türkiye şişe/kartuşlarını reddedebilir; bölge kilidi olan modellerde tüketim maliyeti kontrolsüz şekilde artar.' },
      { id: 'rf2', title: 'Başlangıç Kartuşları Tuzağı', explanation: 'Kutudan çıkan "deneme kartuşları" yarım doludur ve kısa sürede biter; gerçek maliyet hesabı ayrı kartuşla yapılmalıdır.' },
      { id: 'rf3', title: 'DRM’li Üçüncü Parti Kartuş Yasağı', explanation: 'Bazı üreticiler firmware güncellemesiyle uyumlu kartuşları bloke eder; alternatif tüketim kullanma hakkınızı kısıtlar.' }
    ],
    questions: [
      { id: 'q1', question: 'Bu modelin kartuş/tank tüketimi Türkiye’de kolayca bulunuyor mu, fiyatı nedir?', whyItMatters: 'Cihazın kendisinden çok tüketim maliyeti toplam sahip olma maliyetini belirler.', target: 'seller' },
      { id: 'q2', question: 'Yazıcı bölge kilidi (region lock) içeriyor mu?', whyItMatters: 'Bölge kilidi, yurt dışı tüketim malzemesi kullanımını engelleyerek maliyetinizi katlayabilir.', target: 'seller' },
      { id: 'q3', question: 'Firmware güncellemesi uyumlu (üçüncü parti) kartuşları kilitliyor mu?', whyItMatters: 'DRM güncellemeleri sonrası alternatif kartuş kullanamayabilirsiniz.', target: 'seller' }
    ],
    scenarios: [
      { id: 'ogrenci-ev', title: 'Öğrenci / Ev Kullanıcısı', description: 'Tanklı inkjet, Wi-Fi baskı, düşük sayfa maliyeti.', recommendedCriteriaIds: ['baski-teknolojisi', 'tuketim-maliyeti', 'baglanti'] },
      { id: 'ev-ofisi', title: 'Ev Ofisi / Yoğun Belge', description: 'Siyah-beyaz lazer, otomatik dupleks, ADF’li çok fonksiyonlu yapı.', recommendedCriteriaIds: ['baski-teknolojisi', 'hiz', 'otomatik-dupleks'] },
      { id: 'foto', title: 'Fotoğraf Baskısı', description: 'Yüksek dpi inkjet, kenarsız baskı ve ayrı renk kartuşlu sistem.', recommendedCriteriaIds: ['baski-teknolojisi', 'tuketim-maliyeti'] }
    ],
    relatedGuideIds: ['harici-ssd-alirken', 'laptop-alirken', 'usb-c-hub-alirken']
  },

  // 28. Harici SSD Alırken
  {
    id: 'harici-ssd-alirken',
    slug: 'harici-ssd-alirken',
    categorySlug: 'teknoloji',
    title: 'Harici SSD Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Harici SSD Alırken',
    description: 'Gerçek hız sınıfları (USB 10Gbps/20Gbps/40Gbps), dayanıklılık, şifreleme ve kapasite kriterleriyle harici SSD seçme rehberi. Harici SSD alırken nelere dikkat edilmeli, bu yazıda.',
    intro: [
      'Harici SSD pazarında en büyük yanılgı, her SSD’nin aynı hızda olduğu varsayımıdır; aslında hız, içindeki kontrolcü ve NAND türünden çok kutudaki USB arabirimiyle (5, 10, 20 veya 40 Gbps) sınırlanır.',
      '2026 şartlarında 1 TB, fiyat/gigabyte dengesinde tatlı noktadır; 500 GB altı modeller doluluk oranı arttıkça yavaşlar ve kısa sürede dar gelir.',
      'Taşıma ve yedekleme senaryolarında hız kadar dayanıklılık, termik tasarım ve donanım şifreleme desteği de güvenliği belirler.'
    ],
    keywords: ['harici ssd', 'dış ssd', 'portable ssd', 'harici ssd alırken nelere dikkat edilmeli', 'usb-c ssd', 'nvme ssd kutusu', 'taşınabilir ssd'],
    aliases: ['portable ssd', 'dış disk', 'taşınabilir ssd', 'external ssd'],
    estimatedReadTimeMinutes: 4,
    lastUpdated: '2026-09-15',
    status: 'published',
    importanceItems: [
      { id: 'arabirim', title: 'USB Arabirimi ve Gerçek Hız', description: 'USB 3.2 Gen2 (10 Gbps) pratikte 1000 MB/s, Gen2x2 (20 Gbps) ~2000 MB/s, Thunderbolt/USB4 (40 Gbps) 3000+ MB/s demektir. Bilgisayarınızın portunun bu hızları desteklemesi şarttır.', importance: 'critical' },
      { id: 'kapasite', title: 'Kapasite ve Ömür (TBW)', description: '1 TB başlangıç noktasıdır. TBW (Toplam Yazılan Byte) değeri SSD’nin yazma ömrünü gösterir; yoğun kullanımda 600 TBW altı değerler sınırlayıcı olabilir.', importance: 'critical' },
      { id: 'sifreleme', title: 'Donanım Şifreleme', description: 'Hassas veri taşıyanlar için AES-256 donanım şifreleme ve parola/fiziksel tuş kilidi, yazılımsal çözümlerden çok daha güvenlidir.', importance: 'important' },
      { id: 'dayaniklilik', title: 'Dayanıklılık ve Termik Tasarım', description: 'Düşmeye karşı dayanıklılık sertifikası ve pasif soğutmalı (alüminyum gövde) modeller uzun süreli aktarımlarda hız düşüşünü engeller.', importance: 'important' },
      { id: 'uyumluluk', title: 'Cihaz Uyumu (Telefon / Konsol / Laptop)', description: 'Telefondan veya konsoldan kullanacaksanız exFAT desteği, UASP ve düşük güç tüketimi (bus-powered) kontrol edilmelidir.', importance: 'useful' }
    ],
    checklistItems: [
      { id: 'c1', text: 'Bilgisayarımın USB portunun desteklediği hızı ve SSD’nin arabirim seviyesini karşılaştırdım.', importance: 'critical' },
      { id: 'c2', text: 'Kapasite için en az 1 TB hedefledim ve TBW değerini kontrol ettim.', importance: 'critical' },
      { id: 'c3', text: 'Kutudan çıkan kablonun hız sınıfını (USB 3.2 / Thunderbolt) doğruladım.', importance: 'critical' },
      { id: 'c4', text: 'Uzun aktarımlarda ısınma ve hız düşüşü konusundaki kullanıcı deneyimlerini okudum.', importance: 'important' },
      { id: 'c5', text: 'Hassas veri için donanım şifreleme özelliğini değerlendirdim.', importance: 'important' },
      { id: 'c6', text: 'Telefon/konsol bağlantısı için dosya sistemi (exFAT) uyumunu onayladım.', importance: 'useful' }
    ],
    redFlags: [
      { id: 'rf1', title: 'Kapasite Şişirme / Sahte Kapasite Ürünleri', explanation: 'Pazar yerlerinde çok ucuz "2 TB" SSDler sahte flash bellek içerebilir; teslim alırken hemen tam kapasite testi (H2testw) yapın.' },
      { id: 'rf2', title: 'USB 2.0 Kablolu 10Gbps İddiası', explanation: 'Kutuda USB 2.0 kablosu gelen ürünlerde iddia edilen hıza ulaşmak imkansızdır; kablo dahil arabirimin tamamı aynı sınıfta olmalıdır.' },
      { id: 'rf3', title: 'Plastik Gövdeli Isınan Modeller', explanation: 'Soğutucusuz plastik gövdeli bazı SSDler büyük dosya aktarımında ısınıp hızını düşürür; termik testleri inceleyin.' }
    ],
    questions: [
      { id: 'q1', question: 'Bu SSD hangi USB standardında çalışıyor ve kutudan hangi sınıf kablo çıkıyor?', whyItMatters: 'Yanlış kablo veya düşük arabirim, ödediğiniz hızın tamamını almanızı engeller.', target: 'seller' },
      { id: 'q2', question: 'TBW (yazma ömrü) değeri nedir?', whyItMatters: 'Yoğun yedekleme kullanımında TBW, diskin kaç yıl sağlıklı kalacağını belirler.', target: 'seller' },
      { id: 'q3', question: 'Donanım şifreleme ve parola kilidi var mı?', whyItMatters: 'Kayıp durumunda verinizin güvenliği için yazılım yerine donanım seviyesinde koruma gerekir.', target: 'seller' }
    ],
    scenarios: [
      { id: 'video-kurgu', title: 'Video Kurgu / Yaratıcı İşler', description: '20Gbps+ arabirim, alüminyum gövde, yüksek TBW.', recommendedCriteriaIds: ['arabirim', 'dayaniklilik', 'kapasite'] },
      { id: 'yedek', title: 'Yedekleme Odaklı', description: '1-2 TB, 10Gbps arabirim, şifreleme desteği.', recommendedCriteriaIds: ['kapasite', 'sifreleme'] },
      { id: 'cep-kullanimi', title: 'Telefon / Konsol Genişletmesi', description: 'exFAT uyumlu, düşük güç tüketimli kompakt model.', recommendedCriteriaIds: ['uyumluluk', 'kapasite'] }
    ],
    relatedGuideIds: ['usb-c-hub-alirken', 'laptop-alirken', 'yazici-alirken']
  },

  // 29. USB-C Hub Alırken
  {
    id: 'usb-c-hub-alirken',
    slug: 'usb-c-hub-alirken',
    categorySlug: 'teknoloji',
    title: 'USB-C Hub Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'USB-C Hub Alırken',
    description: 'Port ihtiyacı, PD şarj geçişi (Power Delivery), veri hızları ve ısınma kriterleriyle doğru USB-C hub seçme rehberi. USB-C hub alırken nelere dikkat edilmeli, bu yazıda.',
    intro: [
      'Modern laptoplarda tek USB-C portuyla hayatı idame ettirmek zorunda kalanların kurtarıcısı hublardır; ancak yanlış hub almak, şarj yavaşlığından monitör titremesine kadar bir dizi sorunu beraberinde getirir.',
      'Hub seçiminde en kritik ayrım, cihazın içindeki çip setinin yönetebildiği toplam bant genişliğidir: tüm portlar aynı anda kullanıldığında hızlar bölünür ve zayıf çipli ürünlerde bağlantılar düşer.',
      'Ayrıca laptop şarjını hub üzerinden geçirecekseniz PD geçiş gücü (65W, 100W) ve HDMI çıkışının hangi çözünürlük/Hz değerini gerçekten desteklediği mutlaka doğrulanmalıdır.'
    ],
    keywords: ['usb-c hub', 'usb hub', 'type-c hub', 'usb-c hub alırken nelere dikkat edilmeli', 'power delivery hub', 'dock station', 'usb dönüştürücü'],
    aliases: ['usb hub', 'type-c dönüştürücü', 'docking station', 'usb adaptör'],
    estimatedReadTimeMinutes: 3,
    lastUpdated: '2026-09-15',
    status: 'published',
    importanceItems: [
      { id: 'portlar', title: 'Port Seti ve Gerçek İhtiyaç', description: 'Kullanacağınız cihazları listeleyip (HDMI, USB-A, SD kart, Ethernet) port setini belirleyin; gereksiz portlu kalın hublar ısınır ve pahalıdır.', importance: 'critical' },
      { id: 'pd-gecis', title: 'Power Delivery (PD) Şarj Geçişi', description: 'Laptop şarjını hub üzerinden geçirecekseniz en az 60W, oyun laptopları için 100W PD geçişi gerekir; 30W geçişli hublar laptopı şarj edemez.', importance: 'critical' },
      { id: 'veri-hizi', title: 'Veri Hızları (USB 2.0 vs 3.0)', description: 'Bazı ucuz hublarda USB-A portları gizlice USB 2.0’dır (480 Mbps); harici SSD bağlayacaksanız portların USB 3.0/5Gbps+ olduğundan emin olun.', importance: 'critical' },
      { id: 'hdmi', title: 'HDMI/DisplayPort Çıkışı', description: 'Ekran bağlayacaksanız 4K30 ile 4K60 arasındaki fark büyük; toplantılarda 30Hz ekran fare imlecinde takılma hissi yaratır.', importance: 'important' },
      { id: 'kart-okuyucu', title: 'SD/microSD Kart Okuyucu Hızı', description: 'Fotoğraf aktarımı için UHS-II (312 MB/s) destekli okuyucular fark yaratır; UHS-I ile sınırlı modeller yavaş kalır.', importance: 'useful' },
      { id: 'isisozdurme', title: 'Isı ve Kablo Kalitesi', description: 'Çok portlu hublar ısınır; alüminyum gövde ve kısa kalın kablo, uzun ömür ve kararlı bağlantı sağlar.', importance: 'useful' }
    ],
    checklistItems: [
      { id: 'c1', text: 'Bağlayacağım cihazların listesini çıkarıp gerekli port setini belirledim.', importance: 'critical' },
      { id: 'c2', text: 'Laptopımın şarj gücü için yeterli PD geçişi (60W/100W) olduğunu doğruladım.', importance: 'critical' },
      { id: 'c3', text: 'USB-A portlarının USB 3.0+ hızında olduğunu spec sayfasından kontrol ettim.', importance: 'critical' },
      { id: 'c4', text: 'HDMI çıkışının kaç Hz desteklediğini (4K60 vs 4K30) onayladım.', importance: 'important' },
      { id: 'c5', text: 'SD kart okuyucunun UHS desteğini inceledim.', importance: 'useful' },
      { id: 'c6', text: 'Kablo kalitesi ve gövde malzemesiyle ilgili kullanıcı yorumlarını okudum.', importance: 'useful' }
    ],
    redFlags: [
      { id: 'rf1', title: 'Gizli USB 2.0 Portları', explanation: 'Ucuz hublarda bazı portlar USB 2.0 hızındadır; harici disk bağlandığında 40 MB/s kopyalama hızıyla karşılaşabilirsiniz.' },
      { id: 'rf2', title: '4K İddiası ama 30Hz', explanation: '"4K destekler" ifadesi çoğu zaman 4K30 anlamına gelir; 60 Hz desteği açıkça yazılmıyorsa sorgulayın.' },
      { id: 'rf3', title: 'PD Geçişi Olmayan Hublar', explanation: 'Hub takılıyken laptopın şarjı kesilirse her seferinde kabloyu değiştirmek zorunda kalırsınız; PD geçişi olmayan model almayın.' }
    ],
    questions: [
      { id: 'q1', question: 'USB-A portları USB 3.0 mı yoksa 2.0 mı?', whyItMatters: '2.0 portlar harici disk ve SSD hızını dramatik şekilde düşürür.', target: 'seller' },
      { id: 'q2', question: 'HDMI çıkışı 4K60 destekliyor mu, hangi Hz’de çalışıyor?', whyItMatters: '30Hz ekranlarda imleç takılması ve göz yorgunluğu yaşanır.', target: 'seller' },
      { id: 'q3', question: 'PD geçişi kaç watt destekliyor?', whyItMatters: 'Laptopınızın adapter gücünün altındaki PD geçişi cihazı şarj etmez, sadece yavaşlatır.', target: 'seller' }
    ],
    scenarios: [
      { id: 'ofis-masa', title: 'Ofis Masaüstü Kurulumu', description: 'Ethernet + HDMI + USB-A seti, 100W PD geçişi.', recommendedCriteriaIds: ['pd-gecis', 'portlar', 'hdmi'] },
      { id: 'fotografci', title: 'Fotoğrafçı / İçerik Üretici', description: 'UHS-II SD okuyucu, USB 3.0+ portlar, HDMI çıkışı.', recommendedCriteriaIds: ['kart-okuyucu', 'veri-hizi', 'portlar'] },
      { id: 'ogrenci', title: 'Öğrenci / Hafif Kullanım', description: '2-3 USB-A + HDMI içeren kompakt, uygun fiyatlı model.', recommendedCriteriaIds: ['portlar', 'hdmi'] }
    ],
    relatedGuideIds: ['harici-ssd-alirken', 'monitor-alirken', 'laptop-alirken']
  },

  // 30. Kulaklık Alırken
  {
    id: 'kulaklik-alirken',
    slug: 'kulaklik-alirken',
    categorySlug: 'ses-muzik-creator',
    title: 'Kulaklık Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Kulaklık Alırken',
    description: 'Sürücü ve frekans dengesi, gürültü engelleme (ANC), kablosuz kodekler ve konfor kriterleriyle doğru kulaklık seçme rehberi. Kulaklık alırken nelere dikkat edilmeli, tüm detaylarıyla burada.',
    intro: [
      'Kulaklık seçimi, kullanım senaryosundan bağımsız düşünülemez: metroda müzik dinleyen biri ile evde müzik prodüksiyonu yapan kişinin doğru kulaklığı birbirinden tamamen farklıdır.',
      'Kablosuz kulaklıklarda ANC (Aktif Gürültü Engelleme) ve kodek desteği (LDAC, aptX) deneyimi belirlerken; oyun ve prodüksiyon tarafında gecikme (latency) ve ses dengesi (sound signature) öne çıkar.',
      'Uzun süreli kullanımda teknik özelliklerden çok konfor belirleyicidir: kulak yastığı malzemesi, ağırlık dağılımı ve kafa bandı baskısı, saatler sonunda fark edilir.'
    ],
    keywords: ['kulaklık', 'bluetooth kulaklık', 'kulaklık alırken nelere dikkat edilmeli', 'anc kulaklık', 'gürültü engelleyen kulaklık', 'ldac', 'oyun kulaklığı', 'tws kulaklık'],
    aliases: ['kulakiçi kulaklık', 'tws', 'bluetooth kulaklık', 'headphone'],
    estimatedReadTimeMinutes: 5,
    lastUpdated: '2026-09-15',
    status: 'published',
    importanceItems: [
      { id: 'tur', title: 'Kulaklık Türü ve Kullanım Senaryosu', description: 'Kulakiçi (TWS) taşınabilirlik, over-ear konfor ve sahne hissi, oyun için mikrofonlu kablolu modeller öne çıkar. İlk karar verilecek şey budur.', importance: 'critical' },
      { id: 'surucu', title: 'Sürücü ve Frekans Dengesi', description: '40mm+ dinamik sürücüler over-ear’larda standarttır; frekans grafiği V-shaped (bas öne çıkan) ile nötr (flat) arasında seçim, müzik zevkinize ve kullanım amacınıza bağlıdır.', importance: 'critical' },
      { id: 'anc', title: 'Gürültü Engelleme (ANC) ve Pasif İzolasyon', description: 'ANC düşük frekanslı gürültüde (motor, klima) etkilidir; yüksek frekanslarda pasif izolasyon (kapalı tasarım, köpük uç) daha çok işe yarar. Aktif ulaşımda ANC ciddi konfor sağlar.', importance: 'important' },
      { id: 'kodekler', title: 'Kablosuz Kodek Desteği (LDAC / aptX / AAC)', description: 'Telefonunuz LDAC destekliyorsa kulaklığın da desteklemesi yüksek bitrekte dinleme sağlar; iPhone tarafında AAC standarttır. Oyun için ayrıca düşük gecikme modu (LL) aranmalıdır.', importance: 'important' },
      { id: 'gecikme', title: 'Gecikme (Latency)', description: 'Video ve oyunda ses-dudak senkronu için gecikme 100ms altı olmalıdır; oyun kulaklıklarında kablolu veya 2.4GHz kablosuz bağlantı tercih edilir.', importance: 'important' },
      { id: 'konfor-pil', title: 'Konfor ve Pil Ömrü', description: 'Over-ear’da 25-30 saat, TWS’de kasa dahil 20+ saat pil standarttır; değiştirilebilir yastık ve katlanır tasarım uzun kullanımda değer katar.', importance: 'useful' }
    ],
    checklistItems: [
      { id: 'c1', text: 'Birincil kullanım senaryomu (ulaşım / ofis / oyun / prodüksiyon) netleştirdim.', importance: 'critical' },
      { id: 'c2', text: 'Kablosuzsa telefonumun desteklediği kodekle (LDAC/aptX/AAC) uyumunu kontrol ettim.', importance: 'critical' },
      { id: 'c3', text: 'Uzun süreli kullanımda kulak yastığı konforunu (malzeme, ağırlık) test ettim.', importance: 'critical' },
      { id: 'c4', text: 'ANC etkinliği hakkında bağımsız test sonuçlarını okudum.', importance: 'important' },
      { id: 'c5', text: 'Oyun/video kullanımı için gecikme değerini inceledim.', importance: 'important' },
      { id: 'c6', text: 'Pil ömrü iddialarının (ANC açık/kapalı) gerçek değerlerini karşılaştırdım.', importance: 'important' },
      { id: 'c7', text: 'Çok noktalı bağlantı (multipoint) desteği olup olmadığını kontrol ettim.', importance: 'useful' }
    ],
    redFlags: [
      { id: 'rf1', title: 'Süper Bas İddialı V-Shaped Kulaklıklar', explanation: 'Aşırı bas vurgulu kulaklıklar mağazada etkileyici gelir ama uzun dinlemede yorar; dengeyi hiç dinlemeden almayın.' },
      { id: 'rf2', title: 'Sözde ANC (Pasif İzolasyonu ANC Diye Satmak)', explanation: 'Bazı ürünler fiziksel izolasyonu "gürültü engelleme" diye pazarlar; gerçek ANC mikrofonlu aktif iptal sistemidir.' },
      { id: 'rf3', title: 'Değişmeyen Pil ve Yastıklar', explanation: 'TWS kulaklıklarda pil ömrü 2-3 yılda ciddi düşer ve pil değişmez; over-ear’da yastık bulunmayan modeller hijyen ve konfor açısından risklidir.' }
    ],
    questions: [
      { id: 'q1', question: 'Bu kulaklık telefonumun kodeklerini (LDAC/aptX) destekliyor mu?', whyItMatters: 'Kodek uyumsuzluğu, kablosuz ses kalitesini düşürür ve gecikme artırır.', target: 'seller' },
      { id: 'q2', question: 'Multipoint (aynı anda iki cihaz) bağlantı destekliyor mu?', whyItMatters: 'Bilgisayar ve telefon arasında geçiş yapacaklar için günlük kullanımı ciddi kolaylaştırır.', target: 'seller' },
      { id: 'q3', question: 'Kulak yastıkları ve kablosu değiştirilebilir mi, yedek parça bulunuyor mu?', whyItMatters: 'Yıpranan yastık veya kırılan kablo, kulaklığı kullanılamaz hale getirebilir.', target: 'seller' }
    ],
    scenarios: [
      { id: 'ulasim', title: 'Ulaşım / Gürültülü Ortam', description: 'Etkili ANC, kapalı tasarım, uzun pil ömrü.', recommendedCriteriaIds: ['anc', 'konfor-pil', 'tur'] },
      { id: 'oyun', title: 'Oyuncu', description: 'Düşük gecikme (2.4GHz/kablolu), mikrofonlu, sahne hissi veren tasarım.', recommendedCriteriaIds: ['gecikme', 'surucu', 'tur'] },
      { id: 'muzik-dinleyici', title: 'Müzik Tutkunu / Nötr Dinleyici', description: 'Nötre yakın denge, yüksek çözünürlüklü kodek, geniş sahne.', recommendedCriteriaIds: ['surucu', 'kodekler', 'konfor-pil'] }
    ],
    relatedGuideIds: ['kablosuz-mikrofon-alirken', 'mikrofon-alirken', 'ses-karti-alirken', 'oyuncu-monitoru-alirken']
  },

  // 31. Kablosuz Mikrofon Alırken
  {
    id: 'kablosuz-mikrofon-alirken',
    slug: 'kablosuz-mikrofon-alirken',
    categorySlug: 'ses-muzik-creator',
    title: 'Kablosuz Mikrofon Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Kablosuz Mikrofon Alirken',
    description: 'Frekans bandı (2.4GHz / UHF / Bluetooth), menzil, pil yapısı ve gecikme kriterleriyle doğru kablosuz mikrofon seçme rehberi. Kablosuz mikrofon alırken nelere dikkat edilmeli, burada.',
    intro: [
      'Kablosuz mikrofonlar vlogger’ların, sunucuların ve eğitmenlerin en kritik ekipmanıdır; çünkü ses kalitesi izleyiciyi elinde tutan en önemli öğedir ve kablolu çekimlerde hareket özgürlüğünü sınırlar.',
      'Piyasada üç ana teknoloji vardır: 2.4GHz dijital sistemler, UHF sistemler ve Bluetooth tabanlı mini vericiler. Her birinin gecikme, menzil ve girişim davranışı farklıdır.',
      'Verici ve alıcı arasındaki kesintisiz bağlantı, pil ömrü ve kamera/telefona bağlantı yöntemi (3.5mm TRS, USB-C, Lightning) satın alma kararını doğrudan etkiler.'
    ],
    keywords: ['kablosuz mikrofon', 'wireless mic', 'kablosuz mikrofon alırken nelere dikkat edilmeli', '2.4ghz mikrofon', 'uhf mikrofon', 'kol mikrofonu', 'vlog mikrofonu'],
    aliases: ['wireless microphone', 'kablosuz lapel', 'telsiz mikrofon', 'vericili mikrofon'],
    estimatedReadTimeMinutes: 4,
    lastUpdated: '2026-09-15',
    status: 'published',
    importanceItems: [
      { id: 'band', title: 'Frekans Bandı (2.4GHz / UHF / Bluetooth)', description: '2.4GHz dijital sistemler pratik ve lisanssızdır ama kalabalık Wi-Fi ortamlarında girişime açıktır; UHF sistemler daha güvenilir menzil sunar. Bluetooth modeller gecikme nedeniyle yayına değil, konuşmaya uygundur.', importance: 'critical' },
      { id: 'menzil', title: 'Gerçek Menzil ve Kesintisiz Bağlantı', description: 'Kutuda yazan 200m menzil açık alan değeridir; duvarlı iç mekanlarda menzil ciddi düşer. İç mekan kullanımı için girişim direnci daha önemlidir.', importance: 'critical' },
      { id: 'gecikme', title: 'Gecikme (Latency)', description: 'Video çekiminde ses ile görüntü arasındaki kayma 40ms’yi aşarsa dudak senkronu bozulur; dijital sistemlerde latency değeri spec’ten kontrol edilmelidir.', importance: 'critical' },
      { id: 'baglanti', title: 'Cihaz Bağlantısı (TRS / USB-C / Lightning)', description: 'Kameranıza (3.5mm TRS), telefonunuza (USB-C/Lightning) veya bilgisayara (USB) doğrudan bağlanabilen alıcı seçimi, dönüştürücü karmaşasını önler.', importance: 'important' },
      { id: 'pil', title: 'Pil Yapısı ve Şarj Kasası', description: 'Vericilerde dahili şarjlı pil (5-8 saat) pratiktir; AA pil kullanan sistemler uzun çekimlerde değişim avantajı sunar. Şarj kasası saha kullanımını kolaylaştırır.', importance: 'important' },
      { id: 'gurultu-kontrolu', title: 'Gürültü Sınırlayıcı ve Kazanç (Gain) Ayarı', description: 'Vericide kazanç ayarı ve güvenli (safety) mod, rüzgâr ve ani ses patlamalarına karşı kaydı korur; gömme (lavalier) mikrofon desteği artı puandır.', importance: 'useful' }
    ],
    checklistItems: [
      { id: 'c1', text: 'Kullanacağım ortamın Wi-Fi yoğunluğuna göre bant tipini (2.4GHz/UHF) seçtim.', importance: 'critical' },
      { id: 'c2', text: 'Alıcının kamera ve telefonuma doğrudan bağlanabildiğini doğruladım.', importance: 'critical' },
      { id: 'c3', text: 'Gecikme değerinin video senkronuna uygun olduğunu kontrol ettim.', importance: 'critical' },
      { id: 'c4', text: 'İç mekan ve duvar arkası menzil testlerinin sonuçlarını okudum.', importance: 'important' },
      { id: 'c5', text: 'Pil süresinin çekim süreme yetip yetmediğini hesapladım.', importance: 'important' },
      { id: 'c6', text: 'Yedek gömme mikrofon (lavalier) girişi olup olmadığını kontrol ettim.', importance: 'useful' }
    ],
    redFlags: [
      { id: 'rf1', title: 'Bluetooth Ürünleri "Kablosuz Mikrofon" Diye Satmak', explanation: 'Bluetooth ses protokolü 100-200ms gecikme üretir; bu değerler video senkronu için kullanılamaz, sadece konuşma/görüşme amaçlıdır.' },
      { id: 'rf2', title: 'Açık Alan Menzil Pazarlaması', explanation: 'Kutudaki 100-200m menzil değerleri engelsiz açık alan ölçümüdür; iç mekanda 20-30 metreye düşebilir.' },
      { id: 'rf3', title: 'Pili Değişmeyen Vericilerde Garansi Kıskacı', explanation: 'Dahili pilli vericilerde pil ömrü 2-3 yılda düşer ve pil değişimi garantinin dışında tutulur.' }
    ],
    questions: [
      { id: 'q1', question: 'Gecikme (latency) değeri kaç milisaniye?', whyItMatters: 'Dudak senkronu için kritik eşiği belirler; yüksek gecikme kaydı ileride düzeltmeyi zorlaştırır.', target: 'seller' },
      { id: 'q2', question: 'İç mekan ve Wi-Fi yoğun ortamlarda kesinti yaşanıyor mu?', whyItMatters: '2.4GHz sistemler kalabalık ortamlarda girişime girer; gerçek kullanıcı deneyimi belirleyicidir.', target: 'seller' },
      { id: 'q3', question: 'Vericiler dahili pilli mi, pil ömrü kaç saat ve değişiyor mu?', whyItMatters: 'Uzun çekim günlerinde pil bitmesi kayıp demektir; değişebilir pil saha avantajıdır.', target: 'seller' }
    ],
    scenarios: [
      { id: 'vlogger', title: 'Vlogger / İçerik Üretici', description: 'Telefona USB-C doğrudan bağlanan, şarj kasalı 2.4GHz sistem.', recommendedCriteriaIds: ['baglanti', 'pil', 'band'] },
      { id: 'sunucu', title: 'Sunucu / Eğitmen', description: 'Gömme mikrofonlu, yüksek menzilli, gürültü sınırlayıcılı sistem.', recommendedCriteriaIds: ['menzil', 'gurultu-kontrolu', 'gecikme'] },
      { id: 'kamera-kayit', title: 'Kamera ile Çeken', description: '3.5mm TRS çıkışlı alıcı, düşük gecikme, UHF alternatifi.', recommendedCriteriaIds: ['baglanti', 'gecikme', 'band'] }
    ],
    relatedGuideIds: ['mikrofon-alirken', 'podcast-mikseri-alirken', 'ses-karti-alirken', 'kamera-alirken']
  },

  // 32. Podcast Mikseri Alırken
  {
    id: 'podcast-mikseri-alirken',
    slug: 'podcast-mikseri-alirken',
    categorySlug: 'ses-muzik-creator',
    title: 'Podcast Mikseri Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Podcast Mikseri Alırken',
    description: 'Kanal sayısı, USB-C/aranabilir arabirim, DSP efektler (gate, compressor, de-esser) ve telefon bağlantısı kriterleriyle podcast mikseri seçme rehberi. Podcast mikseri alırken nelere dikkat edilmeli, burada.',
    intro: [
      'Podcast yayıncılığında ses kalitesi izleyici tutmanın en temel aracıdır ve doğru mikser, kayıt zincirindeki en kritik halkadır. Mikrofon kalitesinden sonra en çok fark yaratan bileşen budur.',
      'Klasik müzik miksleri ile podcast miksleri aynı şey değildir: podcast tarafında dahili DSP efektler (noise gate, compressor, de-esser), ses efekti padleri ve telefon bağlantı hattı gibi yayına özel özellikler ön plana çıkar.',
      'Kaç kişilik bir ekip kaydedeceğiniz, hangi platformda yayınlayacağınız (canlı yayın mı, kayıt mı) ve mevcut mikrofonlarınıza uyum, seçilecek modeli doğrudan belirler.'
    ],
    keywords: ['podcast mikseri', 'podcast mikseri alırken nelere dikkat edilmeli', 'usb mikser', 'broadcast mikser', 'canlı yayın mikseri', 'dsp mikser'],
    aliases: ['usb mikser', 'broadcast mikser', 'canlı yayın mikseri', 'podcast konsolu'],
    estimatedReadTimeMinutes: 4,
    lastUpdated: '2026-09-15',
    status: 'published',
    importanceItems: [
      { id: 'kanal', title: 'Kanal Sayısı ve Mikrofon Kapasitesi', description: 'Kaç kişi kaydedecekseniz o kadar XLR girişli (her biri +48V fantom beslemeli) kanal gerekir; 2 kişi için 2-3 kanal, 4 kişi için 4+ kanal modeller araştırılmalıdır.', importance: 'critical' },
      { id: 'arabirim', title: 'USB Arabirimi ve Sürücü Desteği', description: 'Bilgisayara USB-C ile bağlanan modeller hem kayıt hem izleme (headphone out) sağlar; düşük gecikmeli sürükleme (loopback) desteği canlı yayın için kritik özelliktir.', importance: 'critical' },
      { id: 'dsp', title: 'Dahili DSP Efektler (Gate / Compressor / De-esser)', description: 'Yayın kalitesini mikrofondan çıkan ham sesten iyi hale getiren işlemcidir; gate gürültüyü, compressor ses dalgalanmasını, de-esser sert "s" seslerini yumuşatır.', importance: 'important' },
      { id: 'telefon', title: 'Telefon Bağlantısı (TRRS / Bluetooth)', description: 'Uzak konuk bağlamak için telefon hattı girişi (TRRS) veya Bluetooth bağlantısı, kayıt kalitesini düşürmeden görüşmeyi yayına almanızı sağlar.', importance: 'important' },
      { id: 'pad', title: 'Ses Efekti Padleri ve Sound Pads', description: 'Jingle, intro ve efekt tuşları (sound pads) yayına profesyonel hava katar; özelleştirilebilir pad yapısı esneklik sağlar.', importance: 'useful' },
      { id: 'izleme', title: 'Kulaklık İzleme ve Geri Bildirim', description: 'Düşük gecikmeli kulaklık çıkışı her konuşmacının kendini duyabilmesi için şarttır; ayrı izleme çıkışları (monitor mix) profesyonel kullanımın parçasıdır.', importance: 'useful' }
    ],
    checklistItems: [
      { id: 'c1', text: 'Kaydedeceğim kişi sayısına göre yeterli XLR kanal sayısını belirledim.', importance: 'critical' },
      { id: 'c2', text: 'Tüm kanalların +48V fantom besleme verdiğini kontrol ettim.', importance: 'critical' },
      { id: 'c3', text: 'USB loopback desteğinin canlı yayın araçlarımıza uyumlu olduğunu doğruladım.', importance: 'critical' },
      { id: 'c4', text: 'Dahili DSP efektlerin (gate/compressor) kalitesi hakkında inceleme okudum.', importance: 'important' },
      { id: 'c5', text: 'Telefon konuk bağlantısı için TRRS/Bluetooth seçeneklerini inceledim.', importance: 'important' },
      { id: 'c6', text: 'Kulaklık izleme çıkışlarının sayı ve gecikme değerlerini kontrol ettim.', importance: 'useful' }
    ],
    redFlags: [
      { id: 'rf1', title: 'Müzik Mikserini Podcast Mikseri Diye Satmak', explanation: 'Müzik miksleri DSP efektler, telefon hattı ve loopback özellikleri olmadan podcast iş akışına uygun değildir.' },
      { id: 'rf2', title: 'Eski USB-B Portu ve Sürücü Sorunları', explanation: 'USB-B portlu eski modellerde sürücü desteği sorun çıkarabilir; yeni alımda USB-C ve sürücüsüz (class-compliant) çalışma tercih edilmelidir.' },
      { id: 'rf3', title: 'Fantom Beslemesi Tek Tuşta Tüm Kanallarda', explanation: 'Tek tuşla tüm kanallara +48V uygulayan mikslerde dinamik ve kondenser mikrofon karışımı sorun yaşatır; kanal bazlı fantom kontrolü olmalıdır.' }
    ],
    questions: [
      { id: 'q1', question: 'Her kanal için ayrı +48V fantom besleme kontrolü var mı?', whyItMatters: 'Dinamik ve kondenser mikrofonları birlikte kullanırken kanal bazlı kontrol şarttır.', target: 'seller' },
      { id: 'q2', question: 'USB loopback özelliği hangi yayın yazılımlarıyla sorunsuz çalışıyor?', whyItMatters: 'Canlı yayın sırasında müzik ve efekt paylaşımını doğrudan etkiler.', target: 'seller' },
      { id: 'q3', question: 'Cihaz sürücüsüz (class-compliant) çalışıyor mu?', whyItMatters: 'Sürücü gerektiren cihazlar, işletim sistemi güncellemelerinde bağlantı sorunu çıkarabilir.', target: 'seller' }
    ],
    scenarios: [
      { id: 'solo', title: 'Solo Yayıncı', description: '2 kanallı, DSP efektli kompakt USB-C mikser.', recommendedCriteriaIds: ['kanal', 'dsp', 'arabirim'] },
      { id: 'ekip', title: 'Çok Kişilik Ekip', description: '4+ XLR kanal, kanal bazlı fantom ve ayrı izleme çıkışları.', recommendedCriteriaIds: ['kanal', 'izleme'] },
      { id: 'canli', title: 'Canlı Yayın Odaklı', description: 'Loopback, telefon hattı ve sound pad’leri olan yayın miksörü.', recommendedCriteriaIds: ['telefon', 'pad', 'arabirim'] }
    ],
    relatedGuideIds: ['mikrofon-alirken', 'kablosuz-mikrofon-alirken', 'ses-karti-alirken', 'midi-klavye-alirken']
  },

  // 33. MIDI Klavye Alırken
  {
    id: 'midi-klavye-alirken',
    slug: 'midi-klavye-alirken',
    categorySlug: 'ses-muzik-creator',
    title: 'MIDI Klavye Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'MIDI Klavye Alırken',
    description: 'Tuş sayısı, tuş aksiyonu (yarı/sarı ağırlıklı), aftertouch, pad ve kontrol yüzeyi kriterleriyle doğru MIDI klavye seçme rehberi. MIDI klavye alırken nelere dikkat edilmeli, bu yazıda.',
    intro: [
      'MIDI klavye, müzik üretiminde bilgisayara çalılan notaları aktaran temel giriş aracıdır; piyano çalmak için mi, beat üretmek için mi yoksa sadece kontrol için mi kullanılacağı, seçilecek modeli baştan belirler.',
      'Tuş sayısı ve tuş aksiyonu en kritik ikilidir: 25 tuşlu kompakt modeller taşınabilir ama melodik çalış için dar kalırken; 49-88 tuşlu yarı ağırlıklı (semi-weighted) veya çekiçlemeli (hammer action) modeller piyanistlere gerçekçi dokunuş sunar.',
      'Pad’ler, fader’lar ve programmable knob’lar ise DAW kontrolünü hızlandırır; yazılım desteği (bundle) de başlangıç maliyetini düşüren önemli bir etmendir.'
    ],
    keywords: ['midi klavye', 'midi keyboard', 'midi klavye alırken nelere dikkat edilmeli', 'kontrolcü klavye', 'midi controller', '25 tuş midi', '88 tuş midi'],
    aliases: ['midi keyboard', 'midi controller', 'kontrolcü klavye'],
    estimatedReadTimeMinutes: 4,
    lastUpdated: '2026-09-15',
    status: 'published',
    importanceItems: [
      { id: 'tussayisi', title: 'Tuş Sayısı (25 / 49 / 61 / 88)', description: 'Beat ve bas üretimi için 25-49 tuş yeterliyken; piyano eserleri ve iki el çalış için 61-88 tuş gerekir. Kompaktlık ihtiyacıyla tuş sayısı arasında denge kurulmalıdır.', importance: 'critical' },
      { id: 'aksiyon', title: 'Tuş Aksiyonu (Synth / Semi-Weighted / Hammer)', description: 'Synth aksiyon hafif ve hızlıdır; semi-weighted orta yol; hammer action (çekiçli) akustik piyano hissini en iyi veren seçenektir. Piyano geçiş yapacaklar hammer action aramalıdır.', importance: 'critical' },
      { id: 'hassasiyet', title: 'Velo (Velocity) Hassasiyeti ve Aftertouch', description: 'Tuşların basış şiddetine tepkisi (velocity curve) ve aftertouch (basılı tutma kontrolü) ifadeli çalış için şarttır; en ucuz modellerde velocity sabit olabilir.', importance: 'important' },
      { id: 'pad-knob', title: 'Pad, Fader ve Knob Seti', description: '8 pad + 8 knob kombinasyonu DAW’daki drum rack ve plugin parametrelerini elle kontrol etmeyi sağlar; MPC stili pad’ler beat üretimini hızlandırır.', importance: 'important' },
      { id: 'baglanti', title: 'Bağlantı ve Entegrasyon (USB-C / MIDI DIN / Bluetooth)', description: 'USB-C ile bilgisayara bağlanma, klasik 5-pin MIDI DIN ile donanım synth’lere bağlanma ve iPad desteği (Class Compliant) kullanım alanını genişletir.', importance: 'useful' },
      { id: 'yazilim', title: 'Yazılım Bundle ve DAW Entegrasyonu', description: 'Kutuda gelen DAW ve plugin’ler başlangıç maliyetini düşürür; DAW’a özel derin entegrasyon (otomatik haritalama) iş akışını hızlandırır.', importance: 'useful' }
    ],
    checklistItems: [
      { id: 'c1', text: 'Birincil kullanım amacımı (beat / piyano / DAW kontrol) netleştirdim.', importance: 'critical' },
      { id: 'c2', text: 'Tuş sayısının çalacağım repertuvara yetip yetmeyeceğini değerlendirdim.', importance: 'critical' },
      { id: 'c3', text: 'Tuş aksiyon tipinin (synth/semi-weighted/hammer) ihtiyacımıza uygun olduğunu doğruladım.', importance: 'critical' },
      { id: 'c4', text: 'Velocity hassasiyeti ve aftertouch desteğini kontrol ettim.', importance: 'important' },
      { id: 'c5', text: 'Pad/fader/knob setinin DAW’ımla otomatik haritalandığını araştırdım.', importance: 'important' },
      { id: 'c6', text: 'USB-C bağlantı ve iPad class-compliant desteğini onayladım.', importance: 'useful' }
    ],
    redFlags: [
      { id: 'rf1', title: 'Velocity’siz (Basit) Tuşlar', explanation: 'En ucuz 25 tuşlu modellerde tuşlar basış şiddetini algılamaz; kayıtlar mekanik ve cansız dinlenir.' },
      { id: 'rf2', title: 'Plastik Yapraklı Tuşlar (Kırılma Riski)', explanation: 'Aşırı hafif plastik mekanizmalı tuşlar yoğun kullanımda yapışır veya kırılır; tuş hissini bizzat denemek en iyi testtir.' },
      { id: 'rf3', title: 'Sürücü Güncellemesi Gelmeyen Modeller', explanation: 'DAW’lar güncellendikçe eski kontrolcüler uyumsuzlaşabilir; aktif yazılım desteği olan üreticiler tercih edilmelidir.' }
    ],
    questions: [
      { id: 'q1', question: 'Tuşlar velocity (basış şiddeti) algılıyor mu, aftertouch var mı?', whyItMatters: 'İfade edici çalış için bu iki özellik belirleyicidir; eksiklerinde kayıtlar cansız olur.', target: 'seller' },
      { id: 'q2', question: 'Benim DAW’ımla otomatik haritalama (auto-map) desteği var mı?', whyItMatters: 'Elle MIDI eşleme yapmak saatler alır; hazır entegrasyon iş akışını ciddi hızlandırır.', target: 'seller' },
      { id: 'q3', question: 'Cihaz iPad/telefona class-compliant bağlanıyor mu?', whyItMatters: 'Mobil üretim yapanlar için sürücüsüz bağlantı esneklik sağlar.', target: 'seller' }
    ],
    scenarios: [
      { id: 'beat', title: 'Beatmaker / Elektronik Müzik', description: '25-49 tuş, MPC stili pad’ler, knob kontrolü.', recommendedCriteriaIds: ['pad-knob', 'tussayisi', 'baglanti'] },
      { id: 'piyanist', title: 'Piyano Geçen Üretici', description: '88 tuş hammer action, triple pedal desteği.', recommendedCriteriaIds: ['aksiyon', 'tussayisi', 'hassasiyet'] },
      { id: 'daw-kontrol', title: 'DAW Kontrol Odaklı', description: 'Fader’lı, transport kontrollü, derin DAW entegrasyonlu model.', recommendedCriteriaIds: ['pad-knob', 'yazilim', 'baglanti'] }
    ],
    relatedGuideIds: ['ses-karti-alirken', 'podcast-mikseri-alirken', 'kulaklik-alirken']
  },

  // 34. Kamera Alırken
  {
    id: 'kamera-alirken',
    slug: 'kamera-alirken',
    categorySlug: 'ses-muzik-creator',
    title: 'Kamera Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Kamera Alırken',
    description: 'Sensör boyutu, 4K/60fps ve 10-bit kayıt, IBIS stabilizasyon, otofokus ve lens ekosistemi kriterleriyle doğru kamera seçme rehberi. Kamera alırken nelere dikkat edilmeli, burada.',
    intro: [
      '2026’da "kamera almak" denince tek bir ürün tipi yoktur: aynasız (mirrorless) sistemler, aksiyon kameraları, sinema kameraları ve compact modeller birbirinden farklı ihtiyaçlara hitap eder.',
      'Megapiksel sayısı en abartılan değerdir; görüntü kalitesini asıl belirleyen sensör boyutu (Micro 4/3, APS-C, full-frame), kayıt bit derinliği (8-bit/10-bit) ve dinamik aralıktır.',
      'İçerik üreticileri için otofokus performansı, IBIS (sensör sabitleme) ve uzun kayıt süreleri; fotoğrafçılar için seri çekim hızı ve lens ekosistemi ön plana çıkar.'
    ],
    keywords: ['kamera', 'mirrorless kamera', 'kamera alırken nelere dikkat edilmeli', 'aps-c', 'full frame', '4k kamera', 'ibis', 'vlog kamerası'],
    aliases: ['fotoğraf makinesi', 'mirrorless', 'vlog kamera', 'sistem kamera'],
    estimatedReadTimeMinutes: 6,
    lastUpdated: '2026-09-15',
    status: 'published',
    importanceItems: [
      { id: 'sensor', title: 'Sensör Boyutu (Micro 4/3 / APS-C / Full-Frame)', description: 'Sensör büyüdükçe düşük ışık performansı, dinamik aralık ve bokeh (arka plan bulanıklığı) iyileşir; APS-C fiyat Performans dengesinde tatlı noktadır.', importance: 'critical' },
      { id: 'video-kayit', title: 'Video Kayıt Yetenekleri (4K60 / 10-bit / Log)', description: 'İçerik üreticileri için 4K 60fps, 10-bit renk derinliği ve Log profil desteği kurgu esnekliği sağlar; ısı nedeniyle kayıt süresi limitleri kontrol edilmelidir.', importance: 'critical' },
      { id: 'otofokus', title: 'Otofokus Sistemi ve Göz Takibi', description: 'Yüz/göz takibi (eye-AF) vlog ve portre çekimlerinde kritik fark yaratır; konu takip performansı bağımsız testlerle doğrulanmalıdır.', importance: 'critical' },
      { id: 'stabilizasyon', title: 'IBIS (Sensör Sabitleme) ve Elektronik Stabilizasyon', description: 'IBIS’li gövde elde çekimde titreşimi büyük ölçüde azaltır; lens sabitleme (OIS) ile birleşince en iyi sonuç alınır.', importance: 'important' },
      { id: 'lens-ekosistemi', title: 'Lens Ekosistemi ve Mount Uyumu', description: 'Kamera gövdesi bir sisteme giriş anahtarıdır; mount’un lens çeşitliliği, üçüncü parti destek ve ikinci el pazarı uzun vadeli maliyeti belirler.', importance: 'important' },
      { id: 'ergonomi-pil', title: 'Ergonomi, Pil Ömrü ve Çift Slot', description: 'Uzun çekimlerde pil ömrü, çekim modu tuşları ve çift SD slot (yedek kayıt) profesyonel iş akışının parçasıdır.', importance: 'useful' }
    ],
    checklistItems: [
      { id: 'c1', text: 'Birincil kullanım amacımı (foto / video / vlog / ikisi birden) netleştirdim.', importance: 'critical' },
      { id: 'c2', text: 'Sensör boyutunun ihtiyacım olan düşük ışık ve derinlik kontrolünü sağladığını doğruladım.', importance: 'critical' },
      { id: 'c3', text: 'Video için 4K60 ve 10-bit kayıt desteğini kontrol ettim.', importance: 'critical' },
      { id: 'c4', text: 'Otofokus göz takip performansının test sonuçlarını okudum.', importance: 'important' },
      { id: 'c5', text: 'IBIS stabilizasyonun varlığını ve lens uyumunu onayladım.', importance: 'important' },
      { id: 'c6', text: 'Seçtiğim mount için lens çeşitliliğini ve fiyat aralığını araştırdım.', importance: 'important' },
      { id: 'c7', text: 'Pil ömrü ve yedek pil maliyetini hesapladım.', importance: 'useful' },
      { id: 'c8', text: 'Çift kart slotu ihtiyacımı değerlendirdim.', importance: 'useful' }
    ],
    redFlags: [
      { id: 'rf1', title: 'Megapiksel Pazarlaması', explanation: '108 MP’lik telefon sensörleriyle 24 MP’lik APS-C kamera arasındaki fark megapikselde değil sensör boyutundadır; MP sayısını tek kriter yapmayın.' },
      { id: 'rf2', title: 'Dijital Zoom / Crop 4K Kayıt', explanation: 'Bazı modeller 4K’yı sensörün bir bölümünü kırparak (crop) kaydeder; bu, geniş açı kaybı ve daha az ışık demektir.' },
      { id: 'rf3', title: '15/30 Dakikalık Kayıt Limiti', explanation: 'Bazı gövdeler ısınma nedeniyle uzun kayıtları keser; seminer, düğün ve uzun çekimler için sınırsız kayıt destekli model seçin.' }
    ],
    questions: [
      { id: 'q1', question: '4K kayıt tam genişlikte mi yoksa crop mu yapılıyor?', whyItMatters: 'Crop 4K, geniş açınızı daraltır ve düşük ışık performansını düşürür.', target: 'seller' },
      { id: 'q2', question: 'Uzun kayıtta ısınma limiti var mı, süre kaç dakika?', whyItMatters: 'Uzun etkinlik çekimlerinde kayıt kesintisi telafi edilemez kayıplara yol açar.', target: 'seller' },
      { id: 'q3', question: 'Bu mount için üçüncü parti lens seçenekleri ve fiyatları nasıl?', whyItMatters: 'Sisteme devam etmek istediğinizde lens maliyeti gövdeden fazla olabilir.', target: 'seller' }
    ],
    scenarios: [
      { id: 'vlog-creator', title: 'Vlogger / İçerik Üretici', description: 'Yüz/göz AF, IBIS, 4K60, flip-out ekran, harici mikrofon girişi.', recommendedCriteriaIds: ['otofokus', 'stabilizasyon', 'video-kayit'] },
      { id: 'fotografci', title: 'Fotoğraf Odaklı', description: 'APS-C/full-frame sensör, hızlı seri çekim, geniş lens ekosistemi.', recommendedCriteriaIds: ['sensor', 'lens-ekosistemi', 'otofokus'] },
      { id: 'gezi', title: 'Gezi / Hafif Kurulum', description: 'Kompakt APS-C gövde, pancake lens, uzun pil ömrü.', recommendedCriteriaIds: ['sensor', 'ergonomi-pil', 'stabilizasyon'] }
    ],
    relatedGuideIds: ['tripod-alirken', 'video-isigi-alirken', 'kablosuz-mikrofon-alirken', 'teleprompter-alirken']
  },

  // 35. Tripod Alırken
  {
    id: 'tripod-alirken',
    slug: 'tripod-alirken',
    categorySlug: 'ses-muzik-creator',
    title: 'Tripod Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Tripod Alırken',
    description: 'Taşıma kapasitesi, malzeme (alüminyum/karbon fiber), baş tipi (balhead/pan-tilt) ve yükseklik kriterleriyle doğru tripod seçme rehberi. Tripod alırken nelere dikkat edilmeli, bu yazıda.',
    intro: [
      'Tripod, kamera kurulumunun en az dikkat edilen ama en çok fark yaratan parçasıdır; yanlış tripod, ağır lensle devrilme riskinden titreşimli uzun pozlamalara kadar bir dizi soruna yol açar.',
      'Seçimde ilk kural taşıma kapasitesidir: tripod + kafa toplamı, kamera ve en ağır lensinizin ağırlığını rahatça aşmalıdır. İkinci kural ise kullanım senaryosudur; stüdyo mı, doğada mı, yoksa sırt çantasında mı taşınacak?',
      'Karbon fiber titreşim absorbe eder ve hafiftir ama pahalıdır; alüminyum uygun fiyatlı ve sağlamdır ama ağırdır. Baş tipi (ballhead / pan-tilt / gimbal) de kullanım konforunu belirleyen ana etmendir.'
    ],
    keywords: ['tripod', 'tripod alırken nelere dikkat edilmeli', 'sehpa', 'ballhead', 'karbon fiber tripod', 'kamera sehpası', 'video tripod'],
    aliases: ['kamera sehpası', 'sehpa', 'tripod kafa', 'statif'],
    estimatedReadTimeMinutes: 4,
    lastUpdated: '2026-09-15',
    status: 'published',
    importanceItems: [
      { id: 'kapasite', title: 'Taşıma Kapasitesi', description: 'Tripodun toplam taşıma kapasitesi, kamera + en ağır lens + flaş kurulumunuzun en az 1.5 katı olmalıdır; sınırda çalışan tripodlar titreşir ve devrilir.', importance: 'critical' },
      { id: 'malzeme', title: 'Malzeme (Alüminyum / Karbon Fiber)', description: 'Karbon fiber hafif ve titreşim absorbe edicidir (uzun pozlama avantajı) ama pahalıdır; alüminyum ağır ama ekonomik ve dayanıklıdır. Doğa/fotoğrafçılık için karbon, stüdyo için alüminyum mantıklıdır.', importance: 'critical' },
      { id: 'bas-tipi', title: 'Baş Tipi (Ballhead / Pan-Tilt / Gimbal)', description: 'Fotoğraf için hızlı ballhead, video için akıcı pan-tilt (fluid head), telefoto wildlife için gimbal baş seçilmelidir; Arca-Swiss tipi hızlı bağlantı plakası standarttır.', importance: 'critical' },
      { id: 'yukseklik', title: 'Yükseklik ve Ağırlık Dengesi', description: 'Kullanım yüksekliği (göz seviyesi ~160-175cm) bacaklar tam açılarak sağlanmalıdır; merkez kolunu kaldırarak ulaşılan yükseklik titreşim demektir.', importance: 'important' },
      { id: 'bacak-kilit', title: 'Bacak Kilidi Sistemi ve Ayak Uçları', description: 'Flip-lock hızlı, twist-lock (manivela) kompakt ve toza dayanıklıdır; değiştirilebilir ayak uçları (lastik/spike) zemin çeşidine göre konfor sağlar.', importance: 'useful' },
      { id: 'portability', title: 'Kapalı Uzunluk ve Taşınabilirlik', description: 'Sırt çantasına girecek modeller için kapalı uzunluk 45-50cm altı olmalıdır; 3-Way veya 5-section bacaklar kompaktlık sağlar ama biraz stabiliteden ödün verir.', importance: 'useful' }
    ],
    checklistItems: [
      { id: 'c1', text: 'Kamera + en ağır lens kurulumumun toplam ağırlığını hesapladım.', importance: 'critical' },
      { id: 'c2', text: 'Taşıma kapasitesinin kurulum ağırlığının belirgin üzerinde olduğunu doğruladım.', importance: 'critical' },
      { id: 'c3', text: 'Kullanım amacıma uygun baş tipini (ballhead/pan-tilt/gimbal) seçtim.', importance: 'critical' },
      { id: 'c4', text: 'Bacaklar tam açıldığında göz seviyesi yüksekliğe ulaştığını kontrol ettim.', importance: 'important' },
      { id: 'c5', text: 'Malzeme seçimini (alüminyum/karbon) kullanım yerime göre yaptım.', importance: 'important' },
      { id: 'c6', text: 'Arca-Swiss uyumlu hızlı bağlantı plakası sistemi olup olmadığına baktım.', importance: 'useful' },
      { id: 'c7', text: 'Kapalı uzunluğun taşıma ihtiyacıma (sırt çantası/valiz) uygunluğunu ölçtüm.', importance: 'useful' }
    ],
    redFlags: [
      { id: 'rf1', title: 'Plastik Gövdeli Süper Hafif Modeller', explanation: 'Aşırı hafif plastik tripodlar ağır lensle titreşir ve rüzgarda devrilir; uzun pozlama çekimlerinde keskinlik tamamen kaybolur.' },
      { id: 'rf2', title: 'Sınırda Taşıma Kapasitesi Oynama', explanation: 'Kapasitesi tam ağırlığınızla sınırda olan tripod, zamanla kilidi gevşer ve kamera düşme riski oluşur.' },
      { id: 'rf3', title: 'Değişmeyen ve Bulunamayan Bağlantı Plakası', explanation: 'Kilitli sisteme özel plaka kullanan ucuz tripodlarda yedek plaka bulunamaz; plaka kaybolduğunda tripod çöpe döner.' }
    ],
    questions: [
      { id: 'q1', question: 'Bu tripod-kafa kombinasyonu kaç kilogram taşıyor?', whyItMatters: 'Kurulumunuzun ağırlığına göre güvenlik payı olmadan titreşim ve devrilme riski doğar.', target: 'seller' },
      { id: 'q2', question: 'Bağlantı plakası Arca-Swiss uyumlu mu, yedeği satılıyor mu?', whyItMatters: 'Standart plaka sistemi hem güvenlik hem de ikinci kafa ile uyumluluk sağlar.', target: 'seller' },
      { id: 'q3', question: 'Yedek bacak kilidi ve ayak uçları bulunabiliyor mu?', whyItMatters: 'Aşınan parçaların değişebilmesi tripodun ömrünü yıllarca uzatır.', target: 'seller' }
    ],
    scenarios: [
      { id: 'stüdyo', title: 'Stüdyo / Sabit Kullanım', description: 'Ağır alüminyum, yüksek kapasite, fluid head video tripod.', recommendedCriteriaIds: ['kapasite', 'bas-tipi', 'malzeme'] },
      { id: 'doga-fotograf', title: 'Doğa / Manzara Fotoğrafçısı', description: 'Karbon fiber, twist-lock bacaklar, düşük açı çekim desteği.', recommendedCriteriaIds: ['malzeme', 'yukseklik', 'bacak-kilit'] },
      { id: 'vlogger', title: 'Vlogger / Seyahat', description: 'Kompakt katlanan, hafif, ballhead’li travel tripod.', recommendedCriteriaIds: ['portability', 'bas-tipi', 'kapasite'] }
    ],
    relatedGuideIds: ['kamera-alirken', 'video-isigi-alirken', 'teleprompter-alirken']
  },

  // 36. Video Işığı Alırken
  {
    id: 'video-isigi-alirken',
    slug: 'video-isigi-alirken',
    categorySlug: 'ses-muzik-creator',
    title: 'Video Işığı Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Video Işığı Alırken',
    description: 'Lümen ve CRI/TLCI değerleri, renk sıcaklığı aralığı, güç kaynağı ve yumuşatıcı (softbox) kriterleriyle doğru video ışığı seçme rehberi. Video ışığı alırken nelere dikkat edilmeli, burada.',
    intro: [
      'Video kalitesini belirleyen üç öğeden biri ışıktır ve doğru ışık, pahalı bir kameradan daha çok fark yaratır. Kötü aydınlatma, en iyi sensörün bile performansını örter.',
      'Işık seçiminde watt değil lümen ve renk doğruluğu (CRI/TLCI) esas alınır: CRI 95+ değerinde bir ışık ten rengini ve ürün renklerini doğru gösterir, düşük CRI’lı ışıklar renkleri sapıtır.',
      'Sabit mi değişken renk sıcaklığı mı (bi-color), pille mi adaptörle mü çalışacağı, hangi yumuşatıcılarla (softbox, umbrella) genişletilebileceği de günlük kullanım konforunu belirler.'
    ],
    keywords: ['video ışığı', 'video ışığı alırken nelere dikkat edilmeli', 'led video ışığı', 'cri', 'softbox', 'panel ışık', 'bi-color ışık'],
    aliases: ['led panel', 'softbox ışık', 'stüdyo ışığı', 'aydınlatma'],
    estimatedReadTimeMinutes: 4,
    lastUpdated: '2026-09-15',
    status: 'published',
    importanceItems: [
      { id: 'parlaklik', title: 'Parlaklık (Lümen) ve Güç', description: '1 metreden 2000+ lümen değerleri portre çekimi için yeterli başlangıçtır; büyük sahne için 5000+ lümen gerekir. Watt değil lümen ve lux değeri kıyaslanmalıdır.', importance: 'critical' },
      { id: 'renk-dogrulugu', title: 'Renk Doğruluğu (CRI 95+ / TLCI)', description: 'CRI 95 ve TLCI 90 altındaki ışıklar ten tonunu ve ürün renklerini bozar; kurguda düzeltilmesi zordur. Spec sayfasında CRI değerini mutlaka arayın.', importance: 'critical' },
      { id: 'renk-sicakligi', title: 'Renk Sıcaklığı Aralığı (Bi-color)', description: '2700K-6500K ayarlanabilen (bi-color) modeller hem gün ışığı hem tungsten ortamla uyum sağlar; sabit 5600K modeller tek senaryoya mahkumdur.', importance: 'important' },
      { id: 'guc-kaynagi', title: 'Güç Kaynağı (Pil / Adaptör / USB-C PD)', description: 'Saha çekimleri için V-mount/F970 pil veya USB-C PD desteği şarttır; sadece prize bağlı modeller loş ortamlarda esneklik kaybı yaşatır.', importance: 'important' },
      { id: 'yumusatma', title: 'Yumuşatıcılar ve Aksesuar Uyumu', description: 'Işığı yumuşatmak için softbox, diffusion ve grid uyumu gerekir; standart bagnet (Bowens) montaj geniş aksesuar ekosistemi sunar.', importance: 'useful' },
      { id: 'ozellikler', title: 'Efektler ve Kontrol (Dimmer / App / DMX)', description: 'Kademeli dimmer, özel efekt modları (şimşek, TV) ve uygulama/DMX kontrolü profesyonel kullanımda iş akışını hızlandırır.', importance: 'useful' }
    ],
    checklistItems: [
      { id: 'c1', text: 'Çekim mesafeme ve alan büyüklüğüme göre gerekli lümen değerini hesapladım.', importance: 'critical' },
      { id: 'c2', text: 'CRI 95+ / TLCI 90+ değerini spec sayfasından doğruladım.', importance: 'critical' },
      { id: 'c3', text: 'Bi-color (2700K-6500K) ayar aralığını kontrol ettim.', importance: 'critical' },
      { id: 'c4', text: 'Pil ile çalışma süresi ve pil tipini (V-mount/F970) araştırdım.', importance: 'important' },
      { id: 'c5', text: 'Softbox/diffusion aksesuar uyumunu ve montaj tipini kontrol ettim.', importance: 'important' },
      { id: 'c6', text: 'Isınma ve uzun kayıttaki kararlılık hakkında kullanıcı yorumlarını okudum.', importance: 'useful' }
    ],
    redFlags: [
      { id: 'rf1', title: 'CRI Değeri Yazmayan Ürünler', explanation: 'CRI değeri belirtilmeyen ucuz LED’ler genelde 80 altıdır; ten rengi yeşilimsi çıkar ve kurguda düzeltmesi zordur.' },
      { id: 'rf2', title: 'Sadece Prize Bağlı Saha Işıkları', explanation: 'Pil desteği olmayan modeller dış çekimlerde pratik değildir; güçbank ile çalışma (USB-C PD) esneklik sağlar.' },
      { id: 'rf3', title: 'Flicker (Titreme) Riski', explanation: 'Kötü sürücülü LED’ler yüksek shutter hızlarında görüntüde titreme yapar; dimmer seviyesinde de flicker testi yapılmalıdır.' }
    ],
    questions: [
      { id: 'q1', question: 'CRI ve TLCI değerleri kaç?', whyItMatters: 'Renk doğruluğu düşük ışıklar ten ve ürün renklerini bozar; kurguda telafisi zordur.', target: 'seller' },
      { id: 'q2', question: 'Pil ile kaç saat çalışıyor, hangi pil tipiyle uyumlu?', whyItMatters: 'Saha çekimlerinde pil süresi ve bulunabilirliği belirleyicidir.', target: 'seller' },
      { id: 'q3', question: 'Yüksek shutter hızında flicker yapıyor mu?', whyItMatters: 'Titreme yapan ışık kaydı kullanılamaz hale getirir; özellikle 50Hz şebekesine dikkat edin.', target: 'seller' }
    ],
    scenarios: [
      { id: 'portre-stüdyo', title: 'Stüdyo Portre / Ürün Çekimi', description: 'Yüksek lümen, Bowens montajlı COB ışık + softbox sistemi.', recommendedCriteriaIds: ['parlaklik', 'renk-dogrulugu', 'yumusatma'] },
      { id: 'vlog-saha', title: 'Vlog / Saha Çekimi', description: 'Pilli, bi-color, kompakt LED panel.', recommendedCriteriaIds: ['guc-kaynagi', 'renk-sicakligi', 'renk-dogrulugu'] },
      { id: 'canli-yayin', title: 'Canlı Yayın / Podcast', description: 'Yumuşak, sessiz ve app/DMX kontrollü panel ışıklar.', recommendedCriteriaIds: ['renk-dogrulugu', 'ozellikler', 'yumusatma'] }
    ],
    relatedGuideIds: ['kamera-alirken', 'tripod-alirken', 'teleprompter-alirken']
  },

  // 37. Teleprompter Alırken
  {
    id: 'teleprompter-alirken',
    slug: 'teleprompter-alirken',
    categorySlug: 'ses-muzik-creator',
    title: 'Teleprompter Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Teleprompter Alırken',
    description: 'Beam-splitter cam kalitesi, okuma mesafesi, telefon/tablet yuvası ve tripod uyumu kriterleriyle doğru teleprompter seçme rehberi. Teleprompter alırken nelere dikkat edilmeli, bu yazıda.',
    intro: [
      'Kameraya bakarak akıcı konuşmak, içerik üreticilerinin en büyük zorluklarından biridir ve teleprompter bu sorunun en doğrudan çözümüdür. Doğru model, metni lensin tam önüne yansıtarak göz temasını korur.',
      'Teleprompter seçiminde belirleyici olan üç şey vardır: camın yansıma kalitesi (beam-splitter), kullanılacak cihazın (telefon/tablet) yuva uyumu ve okuma mesafesine göre metnin okunabilirliği.',
      'Ucuz plastik çerçeveli modellerde görüntü çift görünebilir veya metin soluk kalır; profesyonel kullanım için cam kalitesi ve lens uyumu (adaptor halkaları) en az fiyat kadar önemlidir.'
    ],
    keywords: ['teleprompter', 'teleprompter alırken nelere dikkat edilmeli', 'teleprompter uygulaması', 'teleprompter tableti', 'video teleprompter', 'sunum ekrani'],
    aliases: ['prompter', 'sunum ekranı', 'teleprompter cihazı'],
    estimatedReadTimeMinutes: 3,
    lastUpdated: '2026-09-15',
    status: 'published',
    importanceItems: [
      { id: 'cam', title: 'Beam-Splitter Cam Kalitesi', description: '70/30 oranlı beam-splitter cam metni net yansıtır ve kameraya geçen ışığı minimum kayıplı aktarır; düz cam veya ayna kullanılan modellerde görüntü kararır.', importance: 'critical' },
      { id: 'yuva', title: 'Telefon/Tablet Yuvası Uyumu', description: 'Kullanacağınız cihazın (telefon, 11" tablet) yuvaya sığıp sığmadığı ve kilitleme mekanizması kontrol edilmelidir; genişleyen yuvalar esneklik sağlar.', importance: 'critical' },
      { id: 'lens-uyumu', title: 'Lens Adaptör Halkaları', description: 'Prompter’ın lensin önüne monte edilebilmesi için lens çapınıza uygun adaptör halkası kutuda bulunmalı ya da ayrıca alınmalıdır.', importance: 'important' },
      { id: 'okuma-mesafesi', title: 'Okuma Mesafesi ve Metin Görünürlüğü', description: '2-3 metreden okunacak metin için tablet boyutu gerekir; telefondan okunan metin yakın çekimlerde yeterli olur. Uzak planlarda metin küçük kalır.', importance: 'important' },
      { id: 'montaj', title: 'Tripod Montajı ve Ağırlık Dengesi', description: 'Prompter + tablet + lens toplamı ağırlık merkezini öne kaydırır; sağlam tripod ve yüksek taşıma kapasitesi olmadan devrilme riski vardır.', importance: 'useful' },
      { id: 'uygulama', title: 'Uygulama ve Kumanda Ekosistemi', description: 'Metni kaydıran uygulamanın uzaktan kumanda (bluetooth) desteği ve hız ayarı, tek kişilik çekimlerde iş akışını belirler.', importance: 'useful' }
    ],
    checklistItems: [
      { id: 'c1', text: 'Beam-splitter camlı (düz cam/ayna değil) bir model seçtiğimi doğruladım.', importance: 'critical' },
      { id: 'c2', text: 'Kullandığım telefon/tablet yuvaya uyuyor ve sağlam kilitleniyor mu kontrol ettim.', importance: 'critical' },
      { id: 'c3', text: 'Lens çapıma uygun adaptör halkasının kutuda olduğunu onayladım.', importance: 'important' },
      { id: 'c4', text: 'Okuma mesafeme göre ekran boyutunun yeterliliğini değerlendirdim.', importance: 'important' },
      { id: 'c5', text: 'Tripodumun taşıma kapasitesinin prompter + tablet + lens toplamına yettiğini kontrol ettim.', importance: 'useful' },
      { id: 'c6', text: 'Uygulamanın hız/kumanda ayarlarının ihtiyacımı karşıladığını test ettim.', importance: 'useful' }
    ],
    redFlags: [
      { id: 'rf1', title: 'Düz Cam / Aynalı Modeller', explanation: 'Beam-splitter olmayan düz cam veya ayna kullanan ucuz prompterlar metni soluk gösterir ve kameraya geçen görüntüyü karartır.' },
      { id: 'rf2', title: 'Tablet Yerine Sadece Telefon Yuvalı Olması', explanation: 'Uzak planlarda telefon ekranındaki metin okunamayabilir; tablet desteği olmayan modeller kullanım alanını daraltır.' },
      { id: 'rf3', title: 'Adaptör Halkası Satılmayan Modeller', explanation: 'Lens adaptör halkası bulunmayan prompterlar farklı lenslerle kullanılamaz; standart halka seti (49-82mm) tercih edilmelidir.' }
    ],
    questions: [
      { id: 'q1', question: 'Cam beam-splitter mı, yansıma oranı nedir?', whyItMatters: 'Cam kalitesi hem metin netliğini hem kamera görüntüsünün parlaklığını doğrudan etkiler.', target: 'seller' },
      { id: 'q2', question: 'Lens çapıma uygun adaptör halkası kutuda var mı, ayrı satılıyor mu?', whyItMatters: 'Halka eksikse prompter lensinize monte edilemez ve ek masraf doğar.', target: 'seller' },
      { id: 'q3', question: 'Hangi uygulamalarla uyumlu çalışıyor, kumanda dahil mi?', whyItMatters: 'Uygun olmayan uygulamalar hız kontrolü veya uzaktan kaydırma desteği sunmaz.', target: 'seller' }
    ],
    scenarios: [
      { id: 'ev-studyo', title: 'Ev Stüdyosu / Sabit Kurulum', description: 'Tablet yuvalı, beam-splitter camlı, tripod montajlı tam boy prompter.', recommendedCriteriaIds: ['cam', 'yuva', 'montaj'] },
      { id: 'mobil', title: 'Mobil / Saha Kullanımı', description: 'Kompakt, telefon yuvalı, hafif seyahat prompterı.', recommendedCriteriaIds: ['yuva', 'okuma-mesafesi', 'uygulama'] },
      { id: 'egitim', title: 'Eğitim / Sunum Videoları', description: 'Tablet desteği, geniş okuma alanı ve kumandalı uygulama.', recommendedCriteriaIds: ['okuma-mesafesi', 'uygulama', 'cam'] }
    ],
    relatedGuideIds: ['kamera-alirken', 'tripod-alirken', 'video-isigi-alirken', 'kablosuz-mikrofon-alirken']
  }
];
