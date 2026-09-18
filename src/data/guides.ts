import { Guide } from '@/types/guide';

export const GUIDES: Guide[] = [
  // 1. Laptop Alırken
  {
    id: 'laptop-alirken',
    slug: 'laptop-alirken',
    categorySlug: 'teknoloji',
    title: 'Laptop Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Laptop Alırken',
    description: 'Kullanım amacınıza göre işlemci, RAM, pil ömrü, ekran kalitesi ve taşınabilirlik kriterlerini doğru değerlendirerek ideal dizüstü bilgisayarı seçme rehberi.',
    intro: [
      'Laptop seçimi yaparken en sık yapılan hata, ihtiyacın çok üzerinde pahalı bir donanım veya yetersiz bir konfigürasyon almaktır. Doğru cihaz; günlük kullanım senaryonuza, bütçenize ve cihazın gelecekte yükseltilebilir olup olmamasına bağlıdır.',
      'Özellikle RAM miktarının lehimli olup olmadığı, ekran parlaklık değeri (nits) ve soğutma performansı gibi detaylar uzun vadeli memnuniyeti doğrudan etkiler.',
      'Aşağıdaki kontrol listesini ve kıstasları inceleyerek bütçenizi en verimli şekilde kullanabilirsiniz.'
    ],
    keywords: ['laptop', 'bilgisayar', 'dizüstü', 'notebook', 'ram', 'işlemci', 'macbook', 'oyun laptopu'],
    aliases: ['bilgisayar', 'notebook', 'dizüstü bilgisayar', 'pc'],
    estimatedReadTimeMinutes: 5,
    lastUpdated: '2026-09-14',
    status: 'published',
    importanceItems: [
      {
        id: 'purpose',
        title: '1. Kullanım Amacı ve İş Yükü',
        description: 'Günlük ofis işleri için harici ekran kartına gerek yokken; 3D modelleme, video kurgu ve güncel oyunlar güçlü bir GPU ve çok çekirdekli işlemci gerektirir.',
        importance: 'critical',
        scenarios: ['student', 'office', 'gaming', 'software', 'video-editing', 'music-production']
      },
      {
        id: 'ram',
        title: '2. RAM Miktarı ve Yükseltilebilirlik',
        description: '2026 şartlarında akıcı bir çalışma için minimum 16 GB RAM önerilir. RAM lehimli (on-board) ise gelecekte artırılamayacağını unutmayın.',
        importance: 'critical',
        scenarios: ['gaming', 'software', 'video-editing', 'music-production']
      },
      {
        id: 'processor',
        title: '3. İşlemci (CPU) Nesli ve Model Kodu',
        description: 'İşlemcide sadece i7 veya Ryzen 7 ismine değil; model sonundaki U (düşük güç), H/HS/HX (yüksek performans) takılarına dikkat edilmelidir.',
        importance: 'critical'
      },
      {
        id: 'storage',
        title: '4. Depolama Tipi ve Kapasitesi (NVMe SSD)',
        description: 'En az 512 GB veya 1 TB NVMe SSD tercih edilmeli; okuma/yazma hızları ve ikinci M.2 slotu varlığı kontrol edilmelidir.',
        importance: 'important'
      },
      {
        id: 'screen',
        title: '5. Ekran Paneli, Parlaklık ve Renk Gamı',
        description: 'TN panellerden kaçının. En az IPS panel, 300+ nits parlaklık ve en az %100 sRGB renk doğruluğu tercih edilmelidir.',
        importance: 'important',
        scenarios: ['video-editing']
      },
      {
        id: 'battery',
        title: '6. Pil Ömrü ve Şarj Adaptörü Taşınabilirliği',
        description: 'Mobil çalışanlar için Whr kapasitesi ve Type-C Power Delivery (PD) şarj desteği büyük kolaylık sağlar.',
        importance: 'useful',
        scenarios: ['student', 'office']
      },
      {
        id: 'ports',
        title: '7. Bağlantı Portları ve Kasa Kalitesi',
        description: 'Type-C, Thunderbolt, HDMI 2.1 ve USB-A portlarının yeterliliği, dönüştürücü ihtiyacınızı belirler.',
        importance: 'useful'
      }
    ],
    checklistItems: [
      { id: 'c1', text: 'Kullanım amacımı (Ofis / Oyun / Yazılım / Kurgu) netleştirdim.', importance: 'critical' },
      { id: 'c2', text: 'Minimum 16 GB RAM tercih ettiğimden emin oldum.', importance: 'critical' },
      { id: 'c3', text: 'RAM ileride yükseltilebilir mi yoksa anakarta lehimli mi kontrol ettim.', importance: 'critical' },
      { id: 'c4', text: 'İşlemci model kodunu ve TDP değerini kontrol ettim.', importance: 'critical' },
      { id: 'c5', text: 'SSD kapasitesinin (en az 512 GB) ve okuma/yazma hızlarının yeterliliğini onayladım.', importance: 'important' },
      { id: 'c6', text: 'Ekranın IPS/OLED panel olduğunu ve parlaklığın 300 nits üzerinde olduğunu gördüm.', importance: 'important' },
      { id: 'c7', text: 'Klavye aydınlatması ve Türkçe karakter dizilimini kontrol ettim.', importance: 'useful' },
      { id: 'c8', text: 'Garanti süresi ve yetkili servis ağını araştırdım.', importance: 'useful' }
    ],
    redFlags: [
      { id: 'rf1', title: 'Lehimli 8 GB RAM', explanation: 'Gelecekte artırılamayan 8 GB RAM, işletim sistemi ve taranan web sayfaları ile kısa sürede yetersiz kalacaktır.' },
      { id: 'rf2', title: 'Düşük Ekran Parlaklığı (220-250 nits TN Panel)', explanation: 'Açık renkli veya ışıklı ortamlarda ekranı görmeyi neredeyse imkansız kılar ve renkler solgundur.' },
      { id: 'rf3', title: 'Kötü Termal Tasarım ve Tek Fanlı Soğutma', explanation: 'Yüksek performanslı işlemcilerin ısınarak thermal throttling ile hız düşürmesine ve erken yıpranmasına yol açar.' }
    ],
    questions: [
      { id: 'q1', question: 'RAM lehimli mi yoksa boş SO-DIMM slotu var mı?', whyItMatters: 'Gelecekte belleği yükseltme şansınızı belirler.', target: 'seller' },
      { id: 'q2', question: 'İkinci bir M.2 SSD yuvası mevcut mu?', whyItMatters: 'Depolamayı harici diske gerek kalmadan artırmanızı sağlar.', target: 'seller' },
      { id: 'q3', question: 'Garanti bataryayı kaç yıl kapsıyor?', whyItMatters: 'Bazı markalar cihaz 2 yıl olsa bile bataryaya 1 yıl garanti verir.', target: 'seller' }
    ],
    scenarios: [
      { id: 'student', title: 'Öğrenci', description: 'Hafif, uzun pil ömrüne sahip, Type-C şarjlı ofis modeli.', recommendedCriteriaIds: ['battery', 'ports'] },
      { id: 'office', title: 'Ofis / İş', description: 'Yüksek RAM, sessiz çalışan, kaliteli klavye ve ekran.', recommendedCriteriaIds: ['ram', 'screen'] },
      { id: 'gaming', title: 'Oyun', description: 'Yüksek watt değerli GPU, 144Hz+ ekran, çift fan soğutma.', recommendedCriteriaIds: ['purpose', 'processor', 'ram'] },
      { id: 'software', title: 'Yazılım', description: 'Çok çekirdekli CPU, minimum 32 GB RAM desteği, yüksek çözünürlüklü ekran.', recommendedCriteriaIds: ['processor', 'ram'] },
      { id: 'video-editing', title: 'Video Kurgu', description: 'Renk doğru IPS/OLED ekran (%100 DCI-P3), güçlü GPU, hızlı SSD.', recommendedCriteriaIds: ['screen', 'storage'] },
      { id: 'music-production', title: 'Müzik Prodüksiyonu', description: 'Sessiz soğutma, düşük latans, bol USB/Thunderbolt portu.', recommendedCriteriaIds: ['ports', 'processor'] }
    ],
    relatedGuideIds: ['televizyon-alirken', 'powerbank-alirken', 'mikrofon-alirken', 'calisma-koltugu-alirken'],
    journeyIds: ['home-office-kuruyorum']
  },

  // 2. Televizyon Alırken
  {
    id: 'televizyon-alirken',
    slug: 'televizyon-alirken',
    categorySlug: 'teknoloji',
    title: 'Televizyon Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Televizyon Alırken',
    description: 'Ekran boyutu, panel teknolojisi (OLED, QLED, LED), yenileme hızı, işletim sistemi ve bağlantı standartlarına göre TV seçimi.',
    intro: [
      'Televizyon satın alırken sadece ekran boyutuna bakmak en büyük hatalardan biridir. Odanın izleme mesafesi, ortamın ışık alma derecesi ve izleme alışkanlıklarınız (film, spor, konsol oyunu) seçeceğiniz panel tipini doğrudan belirler.',
      'OLED paneller kusursuz siyahlar ve sonsuz kontrast sunarken; parlak salonlarda yüksek nits değerine sahip Mini-LED veya QLED paneller daha performanslı sonuç verir.'
    ],
    keywords: ['televizyon', 'tv', 'oled', 'qled', 'smart tv', '4k', 'hdmi 2.1'],
    aliases: ['tv', 'televizyonlar', 'smart tv', 'ekran'],
    estimatedReadTimeMinutes: 4,
    lastUpdated: '2026-09-14',
    status: 'published',
    importanceItems: [
      { id: 'panel', title: '1. Panel Teknolojisi (OLED / Mini-LED / QLED / LED)', description: 'OLED siyah başarısında rakipsizdir; Mini-LED ise yüksek parlaklık ve sıfır yanma riski sunar.', importance: 'critical' },
      { id: 'size', title: '2. İzleme Mesafesi ve Ekran Boyutu', description: 'İzleme mesafesine uygun inç seçilmelidir (örneğin 2.5 metre için 55-65 inç idealdir).', importance: 'critical' },
      { id: 'refresh', title: '3. Yenileme Hızı (Hz) ve Oyun Özellikleri', description: 'Konsol oyunları ve hareketli spor yayınları için gerçek 120Hz panel ve HDMI 2.1 şarttır.', importance: 'important' },
      { id: 'os', title: '4. İşletim Sistemi ve Akıcılık', description: 'Google TV, webOS veya Tizen işletim sistemlerinin uygulama desteği ve menü hızı kontrol edilmelidir.', importance: 'important' }
    ],
    checklistItems: [
      { id: 'tv1', text: 'Salon izleme mesafesini ölçüp ideal ekran boyutunu belirledim.', importance: 'critical' },
      { id: 'tv2', text: 'Gerçek 100Hz/120Hz panel olup olmadığını kontrol ettim (yazılımsal Hz yanıltmasın).', importance: 'critical' },
      { id: 'tv3', text: 'HDMI 2.1 port sayısı ve VRR/ALLM desteğini inceledim.', importance: 'important' },
      { id: 'tv4', text: 'Ses gücünü ve Dolby Atmos desteğini değerlendirdim.', importance: 'useful' }
    ],
    redFlags: [
      { id: 'rf_tv1', title: 'Yazılımsal 120Hz Kanması', explanation: 'Bazı markalar 60Hz panelleri yazılımla 120Hz gibi pazarlar, gerçek paneli kontrol edin.' },
      { id: 'rf_tv2', title: 'OLED TV Yansıma ve Yanma (Burn-in) Riski', explanation: 'Doğrudan güneş alan pencerelerin karşısındaki OLED paneller yansıma yapar ve sabit logolarda iz kalabilir.' }
    ],
    relatedGuideIds: ['laptop-alirken', 'guvenlik-kamerasi-alirken'],
    journeyIds: ['home-office-kuruyorum']
  },

  // 3. İkinci El iPhone Alırken
  {
    id: 'ikinci-el-iphone-alirken',
    slug: 'ikinci-el-iphone-alirken',
    categorySlug: 'teknoloji',
    title: 'İkinci El iPhone Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'İkinci El iPhone',
    description: 'iCloud kilidi, pil sağlığı, değişen parça (True Tone / Face ID), IMEI kaydı ve kozmetik kontrolleri.',
    intro: [
      'İkinci el telefon pazarında iPhone modelleri değerini korusa da, orijinal olmayan parça değişimleri ve iCloud kilitleri büyük risk oluşturur.',
      'Cihazı satın almadan önce seri numarasından Apple garanti durumunu incelemek ve 3uTools veya cihaz içi Parça ve Servis Geçmişi bölümünü kontrol etmek zorunludur.'
    ],
    keywords: ['iphone', 'ikinci el iphone', 'apple', 'pil sağlığı', 'face id', 'imei'],
    aliases: ['apple telefon', 'ikinci el telefon', 'kullanılmış iphone'],
    estimatedReadTimeMinutes: 5,
    lastUpdated: '2026-09-14',
    status: 'published',
    importanceItems: [
      { id: 'icloud', title: '1. iCloud Çıkışı ve Sıfırlama', description: 'Cihazın iCloud hesabından tamamen çıkış yapıldığından ve Bul (Find My) özelliğinin kapatıldığından emin olun.', importance: 'critical' },
      { id: 'imei', title: '2. IMEI Kaydı ve BTK Durumu', description: '*#06# yazarak ekrandaki IMEI ile kasa/kutu ve e-Devlet BTK kaydını birebir karşılaştırın.', importance: 'critical' },
      { id: 'parts', title: '3. Parça Geçmişi (Ekran, Batarya, Kamera)', description: 'Ayarlar > Genel > Hakkında bölümünde "Bilinmeyen Parça" uyarısı olup olmadığını kontrol edin.', importance: 'critical' },
      { id: 'battery_health', title: '4. Pil Sağlığı ve Şarj Döngüsü', description: '%80 altındaki pil sağlığı kısa süre sonra orijinal batarya değişimi gerektirecektir.', importance: 'important' }
    ],
    checklistItems: [
      { id: 'ip1', text: 'iCloud hesabının kapatıldığını ve cihazın sıfırlandığını bizzat gördüm.', importance: 'critical' },
      { id: 'ip2', text: 'Face ID / Touch ID çalışmasını test ettim.', importance: 'critical' },
      { id: 'ip3', text: 'True Tone özelliğinin aktif olduğunu (orijinal ekran göstergesi) kontrol ettim.', importance: 'critical' },
      { id: 'ip4', text: 'Kamera odaklamasını, ahize ve mikrofon sesini arama yaparak denedim.', importance: 'important' }
    ],
    redFlags: [
      { id: 'rf_ip1', title: 'Çalışmayan Face ID / True Tone', explanation: 'Ekranın veya ön kamera modülünün kalitesiz yan sanayi parça ile değiştirildiğinin kesin kanıtıdır.' },
      { id: 'rf_ip2', title: 'Yurt Dışı (Pasaport Kayıtsız) Kullanım Süresi Dolmuş Cihaz', explanation: 'Kapanan hat erişimi nedeniyle SIM kart takarak arama yapamazsınız.' }
    ],
    questions: [
      { id: 'q_ip1', question: 'Cihaz hiç tamir gördü mü veya içi açıldı mı?', whyItMatters: 'Su geçirmezlik contalarının durumunu ve orijinal parçaları anlamak için.', target: 'seller' },
      { id: 'q_ip2', question: 'Fatura ve kutusu mevcut mu?', whyItMatters: 'Mülkiyet hakkı ve olası çalıntı durumlarının önüne geçer.', target: 'seller' }
    ],
    relatedGuideIds: ['powerbank-alirken', 'laptop-alirken']
  },

  // 4. Güvenlik Kamerası Alırken
  {
    id: 'guvenlik-kamerasi-alirken',
    slug: 'guvenlik-kamerasi-alirken',
    categorySlug: 'teknoloji',
    title: 'Güvenlik Kamerası Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Güvenlik Kamerası',
    description: 'Ev ve iş yeri için IP kameralar, gece görüşü, çözünürlük, bulut/SD kart kayıt ve hareket algılama özellikleri.',
    intro: [
      'Güvenlik kameraları iç mekan ve dış mekan kullanımına göre farklı IP koruma sınıfları gerektirir.',
      'Sadece çözünürlüğe değil; gece görüş teknolojisine (IR LED mi ColorVu mu), bant genişliği kullanımına ve kayıt depolama maliyetlerine dikkat edilmelidir.'
    ],
    keywords: ['güvenlik kamerası', 'ip kamera', 'gece görüşü', 'wifi kamera', 'dış mekan kamera'],
    aliases: ['ip kamera', 'kamera sistemi', 'ev kamerası'],
    estimatedReadTimeMinutes: 4,
    lastUpdated: '2026-09-14',
    status: 'published',
    importanceItems: [
      { id: 'resolution', title: '1. Çözünürlük ve Lens Açısı', description: 'En az 2K (3MP/4MP) çözünürlük ve geniş açı (100°+) plaka ve yüz tanıma için gereklidir.', importance: 'critical' },
      { id: 'night_vision', title: '2. Gece Görüş Tipi (Kızılötesi vs. Renkli Gece Görüşü)', description: 'Zifiri karanlıkta net görüntü için akıllı projektörlü renkli gece görüşü tercih edilmelidir.', importance: 'important' },
      { id: 'storage_type', title: '3. Kayıt Seçenekleri (SD Kart / NVR / Bulut)', description: 'Aylık bulut abonelik ücretleri yerine yerel MicroSD veya NVR kayıt cihazı uyumluluğu kontrol edilmelidir.', importance: 'important' }
    ],
    checklistItems: [
      { id: 'gk1', text: 'Dış mekan için IP66 veya IP67 su/toz geçirmezlik sertifikasını kontrol ettim.', importance: 'critical' },
      { id: 'gk2', text: 'Yapay zeka destekli insan/araç hareket algılama uyarısı var mı inceledim.', importance: 'important' },
      { id: 'gk3', text: 'Çift taraflı ses iletimi (konuşma ve dinleme) özelliğini onayladım.', importance: 'useful' }
    ],
    redFlags: [
      { id: 'rf_gk1', title: 'Zorunlu Ücretli Bulut Aboneliği', explanation: 'SD kart takılmasına izin vermeyip aylık dolar bazlı aboneliğe zorlayan markalardan uzak durun.' }
    ],
    relatedGuideIds: ['televizyon-alirken', 'klima-alirken']
  },

  // 5. Powerbank Alırken
  {
    id: 'powerbank-alirken',
    slug: 'powerbank-alirken',
    categorySlug: 'teknoloji',
    title: 'Powerbank Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Powerbank Alırken',
    description: 'Batarya kapasitesi (mAh), gerçek verim, şarj protokolleri (PD / QC), Çıkış Gücü (Watt) ve havayolu kuralları.',
    intro: [
      'Powerbank alırken üzerindeki mAh değerinin tamamının telefona aktarılamayacağını bilmek önemlidir. Voltaj dönüşümündeki kayıplar nedeniyle gerçek verimlilik %65-75 civarındadır.',
      'Laptop şarj etmek istiyorsanız en az 45W-65W Power Delivery (PD) çıkış gücüne sahip modeller seçilmelidir.'
    ],
    keywords: ['powerbank', 'taşınabilir şarj cihazı', 'magsafe', 'pd şarj', '20000 mah'],
    aliases: ['taşınabilir şarj', 'harici batarya', 'yedek pil'],
    estimatedReadTimeMinutes: 3,
    lastUpdated: '2026-09-14',
    status: 'published',
    importanceItems: [
      { id: 'wattage', title: '1. Çıkış Gücü (Watt) ve PD Desteği', description: 'Hızlı şarj için telefonlarda en az 20W, laptoplarda 45W-65W+ Type-C PD şarttır.', importance: 'critical' },
      { id: 'capacity', title: '2. Gerçek Hücre Kapasitesi (Wh ve mAh)', description: '20.000 mAh bir powerbank ortalama 13.000-14.000 mAh kullanılabilir net enerji verir.', importance: 'critical' },
      { id: 'safety', title: '3. Güvenlik Devreleri (Overcharge & Thermal Protection)', description: 'CE sertifikalı, aşırı ısınma ve kısa devre korumalı lityum-polimer modeller tercih edilmelidir.', importance: 'important' }
    ],
    checklistItems: [
      { id: 'pb1', text: 'Cihazımın desteklediği maksimum şarj protokolünü (PD 3.0 / QC 4.0) kontrol ettim.', importance: 'critical' },
      { id: 'pb2', text: 'Havayolu kabin taşıma sınırı olan 100Wh (yaklaşık 27.000 mAh) altında olduğunu doğruladım.', importance: 'important' },
      { id: 'pb3', text: 'Powerbank’in kendisinin kaç saatte şarj olduğunu (giriş watt değeri) inceledim.', importance: 'important' }
    ],
    redFlags: [
      { id: 'rf_pb1', title: 'Markasız Ucuza 50.000 mAh İddialı Taşınabilir Şarjlar', explanation: 'İçinde kum doldurulmuş pil hücreleri barındırabilen yangın riski taşıyan sahte ürünlerdir.' }
    ],
    relatedGuideIds: ['laptop-alirken', 'ikinci-el-iphone-alirken']
  },

  // 6. İkinci El Araba Alırken
  {
    id: 'ikinci-el-araba-alirken',
    slug: 'ikinci-el-araba-alirken',
    categorySlug: 'otomobil-motosiklet',
    title: 'İkinci El Araba Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'İkinci El Araba',
    description: 'Eksper kontrolü, Tramer tramer kaydı, kilometre sorgulama, şase/podye/direk bütünlüğü ve noter süreçleri.',
    intro: [
      'İkinci el otomobil alımında en kritik konu aracın kaportasındaki boya değil; şase, podye, direkler ve hava yastıklarının (airbag) orijinalliğidir.',
      'Satıcının beyanına güvenmeyip bağımsız ve TSE belgeler kurumsal bir ekspertiz merkezinde detaylı inceleme yaptırmak şarttır.'
    ],
    keywords: ['ikinci el araba', 'otomobil', 'ekspertiz', 'tramer', 'kilometre sorgulama', 'noter'],
    aliases: ['araba alırken', 'ikinci el araç', 'otomobil alırken'],
    estimatedReadTimeMinutes: 6,
    lastUpdated: '2026-09-14',
    status: 'published',
    importanceItems: [
      { id: 'chassis', title: '1. Şase, Podye, Tavan ve Airbag Durumu', description: 'Aracın ana taşıyıcı iskeletinde işlem, kaynak veya airbag direnç uygulaması olup olmadığı incelenmelidir.', importance: 'critical' },
      { id: 'km', title: '2. Gerçek Kilometre ve Muayene Kayıtları', description: 'e-Devlet ve HGS muayene geçmişi üzerinden km düşürme olup olmadığını kontrol edin.', importance: 'critical' },
      { id: 'tramer', title: '3. Tramer (Hasar) Kaydı ve Ağır Hasar / Pert Durumu', description: '5664 SMS sorgusu ve sigorta geçmişiyle hasar tutarlarını inceleyin.', importance: 'critical' },
      { id: 'engine_trans', title: '4. Motor Mekanik ve Şanzıman Sağlığı', description: 'Otomatik şanzıman vites geçişleri, yağ kaçakları ve kompresyon değerleri test edilmelidir.', importance: 'important' }
    ],
    checklistItems: [
      { id: 'ar1', text: 'TSE kurumsal belgeli bağımsız ekspertize arabayı bizzat götürdüm.', importance: 'critical' },
      { id: 'ar2', text: '5664 üzerinden Tramer ve detay sorgusunu yaptım.', importance: 'critical' },
      { id: 'ar3', text: 'HGS muayene km kayıtları ile göstergeyi kıyasladım.', importance: 'critical' },
      { id: 'ar4', text: 'Motor numarası ve şase numarasının ruhsatla eşleştiğini gördüm.', importance: 'important' },
      { id: 'ar5', text: 'Noter satışı öncesi aracın üzerinde haciz/ipotek olmadığını doğruladım.', importance: 'critical' }
    ],
    redFlags: [
      { id: 'rf_ar1', title: 'Ekspertiz Merkezini Satıcının Seçmesi', explanation: 'Taraflı rapor düzenleyen anlaşmalı merdiven altı ekspertizlere yönlendirmelere kanmayın.' },
      { id: 'rf_ar2', title: 'Airbag Direnç Atılması', explanation: 'Patlamış hava yastıklarının elektronik beyin kandırılarak tamir edilmeden kapatılması ölümcül risktir.' }
    ],
    questions: [
      { id: 'q_ar1', question: 'Son periyodik bakım ne zaman ve nerede yapıldı?', whyItMatters: 'Triger seti, şanzıman yağı gibi ağır bakımların masrafını öngörmek için.', target: 'seller' },
      { id: 'q_ar2', question: 'Yedek anahtarı ve kitapçıkları mevcut mu?', whyItMatters: 'Kasko değeri ve olası kilit değişim masrafı için önemlidir.', target: 'seller' }
    ],
    relatedGuideIds: ['motosiklet-alirken', 'ikinci-el-motosiklet-alirken', 'oto-koltugu-alirken']
  },

  // 7. Motosiklet Alırken
  {
    id: 'motosiklet-alirken',
    slug: 'motosiklet-alirken',
    categorySlug: 'otomobil-motosiklet',
    title: 'Motosiklet Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Motosiklet Alırken',
    description: 'Sürücü tecrübesine uygun motor hacmi (cc), fren sistemi (ABS), kullanım amacı (Scooter / Commuter / Naked / Enduro) seçimi.',
    intro: [
      'İlk kez motosiklet alacak kişilerin en sık yaptığı hata, yüksek motor hacmine (cc) sahip ve ağır bir motosikletle başlamaktır.',
      'Sürüş güvenliği için çift kanal ABS fren sistemine sahip ve yedek parça erişimi kolay modeller tercih edilmelidir.'
    ],
    keywords: ['motosiklet', 'motor alırken', 'abs fren', 'scooter', '250cc motor'],
    aliases: ['motor', 'moped', 'scooter alırken'],
    estimatedReadTimeMinutes: 5,
    lastUpdated: '2026-09-14',
    status: 'published',
    importanceItems: [
      { id: 'abs', title: '1. Çift Kanal ABS Fren Sistemi', description: 'Islak ve kaygan zeminlerde tekerleklerin kilitlenmesini önleyen ABS hayati önem taşır.', importance: 'critical' },
      { id: 'cc', title: '2. Sürücü Tecrübesine Uygun cc ve Beygir Gücü', description: 'Başlangıç seviyesindeki sürücüler için 125cc - 250cc hafif modeller önerilir.', importance: 'critical' },
      { id: 'parts_network', title: '3. Servis Ağı ve Yedek Parça Fiyatları', description: 'Düşme/devrilme durumlarında plastik grenaj ve yedek parça temin süreleri incelenmelidir.', importance: 'important' }
    ],
    checklistItems: [
      { id: 'mo1', text: 'Motosikletin sele yüksekliğini ve kendi boyuma uygunluğunu durarak denedim.', importance: 'critical' },
      { id: 'mo2', text: 'Çift kanal ABS fren sistemi standart olarak var mı kontrol ettim.', importance: 'critical' },
      { id: 'mo3', text: 'Ekipman (Kask, Mont, Eldiven) için bütçe ayırdığımdan emin oldum.', importance: 'critical' }
    ],
    redFlags: [
      { id: 'rf_mo1', title: 'ABS Bulunmayan Yüksek Güçlü Motorlar', explanation: 'Panik fren anında ön tekerin kilitlenerek sürücünün düşmesine yol açar.' }
    ],
    relatedGuideIds: ['ikinci-el-motosiklet-alirken', 'motosiklet-kaski-alirken', 'ikinci-el-araba-alirken'],
    journeyIds: ['ilk-motosikletimi-aliyorum']
  },

  // 8. İkinci El Motosiklet Alırken
  {
    id: 'ikinci-el-motosiklet-alirken',
    slug: 'ikinci-el-motosiklet-alirken',
    categorySlug: 'otomobil-motosiklet',
    title: 'İkinci El Motosiklet Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'İkinci El Motosiklet',
    description: 'Şasi eğikliği, blok yağ kaçakları, zincir/dişli durumu, ekspertiz kontrolü ve devrilme izleri.',
    intro: [
      'İkinci el motosikletlerde küçük devrilmeler dahi şaside gizli çatlaklara ve gidon eğikliğine yol açabilir.',
      'Motor bloğundan gelen garip sesler, egzoz duman rengi ve vites geçişleri bizzat usta veya ekspertiz tarafından incelenmelidir.'
    ],
    keywords: ['ikinci el motosiklet', 'motor ekspertiz', 'şasi kontrolü', 'hasar kaydı'],
    aliases: ['ikinci el motor', 'kullanılmış motosiklet'],
    estimatedReadTimeMinutes: 5,
    lastUpdated: '2026-09-14',
    status: 'published',
    importanceItems: [
      { id: 'frame', title: '1. Şasi ve Maşa Doğruluğu (Çatlak ve Kaynak İzleri)', description: 'Gidon bilyası ve ön maşada kaza sonrası düzeltme veya şasi kaynağı bulunmamalıdır.', importance: 'critical' },
      { id: 'engine_sound', title: '2. Motor Bloğu Sesleri ve Yağ Kaçakları', description: 'Soğuk çalıştırmada eksantrik zinciri ve supap sesleri dinlenmelidir.', importance: 'critical' },
      { id: 'tires_brakes', title: '3. Lastik Tarihi ve Fren Disk Kalınlığı', description: '4 yılı geçmiş lastikler sertleşir ve yol tutuşunu kaybeder, değişim bütçesi hesaplanmalıdır.', importance: 'important' }
    ],
    checklistItems: [
      { id: 'imo1', text: 'Motosikleti usta veya motor ekspertizine gösterdim.', importance: 'critical' },
      { id: 'imo2', text: 'Gidon stoperlerinde devrilme/darbe izi var mı inceledim.', importance: 'critical' },
      { id: 'imo3', text: 'Egzozdan mavi veya yoğun beyaz duman gelmediğini soğuk motorda doğruladım.', importance: 'critical' }
    ],
    redFlags: [
      { id: 'rf_imo1', title: 'Şasisinde Kaynak veya Boya Olan Motosiklet', explanation: 'Kaza sonrası doğrultulmuş şasi yüksek süratlerde yalpalama yapar ve hayati tehlike saçar.' }
    ],
    questions: [
      { id: 'q_imo1', question: 'Motosiklet hiç yan yattı mı veya piste çıktı mı?', whyItMatters: 'Grenaj altındaki gizli kırıkları öğrenmek için.', target: 'seller' },
      { id: 'q_imo2', question: 'Son yağ ve filtre bakımı ne zaman yapıldı?', whyItMatters: 'Motor ömrünü ve düzenli bakımı anlamak için.', target: 'seller' }
    ],
    relatedGuideIds: ['motosiklet-alirken', 'motosiklet-kaski-alirken'],
    journeyIds: ['ilk-motosikletimi-aliyorum']
  },

  // 9. Motosiklet Kaskı Alırken
  {
    id: 'motosiklet-kaski-alirken',
    slug: 'motosiklet-kaski-alirken',
    categorySlug: 'otomobil-motosiklet',
    title: 'Motosiklet Kaskı Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Motosiklet Kaskı',
    description: 'Güvenlik sertifikaları (ECE 22.06 / SHARP / DOT), kafa yapısına uygun beden seçimi, kabuk malzemesi ve Pinlock.',
    intro: [
      'Kask, motosiklet sürücüsünün en hayati koruyucu ekipmanıdır. İkinci el kask kesinlikle alınmamalıdır çünkü darbe almış bir kaskın dış kabuğu sağlam görünse de iç köpüğü koruyuculuğunu yitirir.',
      '2026 yılı itibarıyla en güncel güvenlik standardı ECE 22.06 sertifikasıdır.'
    ],
    keywords: ['motosiklet kaskı', 'kask alırken', 'ece 22.06', 'full face kask', 'shoei', 'agv'],
    aliases: ['kask', 'motor kaskı'],
    estimatedReadTimeMinutes: 4,
    lastUpdated: '2026-09-14',
    status: 'published',
    importanceItems: [
      { id: 'cert', title: '1. ECE 22.06 Güvenlik Sertifikası', description: 'Eski ECE 22.05 yerine çok açılı darbe testlerinden geçen ECE 22.06 sertifikalı kasklar seçilmelidir.', importance: 'critical' },
      { id: 'type', title: '2. Kask Tipi (Full-Face Kapalı Kask)', description: 'Çene açılır veya yarım kasklar çene bölgesini korumaz. En yüksek koruma Full-Face modellerdedir.', importance: 'critical' },
      { id: 'fit', title: '3. Doğru Beden ve Yanak Yastıkları Uyanlığı', description: 'Kask kafayı sıkmalı ancak ağrı yapmamalıdır. Kafayı salladığınızda kask oynamamalıdır.', importance: 'critical' },
      { id: 'pinlock', title: '4. Pinlock (Buğu Önleyici Cam) Desteği', description: 'Soğuk ve yağmurlu havalarda visörün buğulanmasını önleyen Pinlock yuvası şarttır.', importance: 'important' }
    ],
    checklistItems: [
      { id: 'ka1', text: 'Kaskın üzerinde ECE 22.06 onay etiketini gördüm.', importance: 'critical' },
      { id: 'ka2', text: 'Kafama tam oturduğunu, kafamı salladığımda kaymadığını test ettim.', importance: 'critical' },
      { id: 'ka3', text: 'İkinci el kask almaktan kaçındım, sıfır ürün seçtim.', importance: 'critical' },
      { id: 'ka4', text: 'Çift D-Halkalı (Double D-Ring) veya kaliteli mikro-metrik çene bağlantısını kontrol ettim.', importance: 'important' }
    ],
    redFlags: [
      { id: 'rf_ka1', title: 'İkinci El Kask Kullanmak', explanation: 'Daha önce düşürülmüş bir kaskın strafor yapısı deforme olmuş olabilir ve bir sonraki darbeyi ememez.' },
      { id: 'rf_ka2', title: 'Sahte Sertifikalı Plastik Kasklar', explanation: 'Pazarda satılan oyuncak standartlı ince kasklar kaza anında kafa tasını korumak yerine parçalanır.' }
    ],
    relatedGuideIds: ['motosiklet-alirken', 'ikinci-el-motosiklet-alirken'],
    journeyIds: ['ilk-motosikletimi-aliyorum']
  },

  // 10. Klima Alırken
  {
    id: 'klima-alirken',
    slug: 'klima-alirken',
    categorySlug: 'ev-yasam',
    title: 'Klima Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Klima Alırken',
    description: 'BTU hesaplaması, Inverter motor teknolojisi, enerji verimliliği sınıfı (A+++), filtre sistemleri ve gaz tipi.',
    intro: [
      'Klima seçiminde en önemli adım, oda metrekaresi ve cephesine uygun BTU kapasitesini hesaplamaktır.',
      'Yetersiz BTU’lu bir klima sürekli maksimumda çalışarak çok elektrik yakar; fazla BTU’lu bir klima ise ortamı aşırı hızlı soğutup rutubet yapar.'
    ],
    keywords: ['klima', 'inverter klima', 'btu hesabı', '12000 btu', 'enerji tasarrufu'],
    aliases: ['klima alırken', 'inverter klima', 'ev kliması'],
    estimatedReadTimeMinutes: 4,
    lastUpdated: '2026-09-14',
    status: 'published',
    importanceItems: [
      { id: 'btu', title: '1. Oda Metrekaresine Uygun BTU Hesabı', description: 'Yaklaşık 20 m² salon için 12.000 BTU, 30 m² üstü için 18.000-24.000 BTU gereklidir.', importance: 'critical' },
      { id: 'inverter', title: '2. True Inverter Kompresör', description: 'Sabit hızlı eski klimalar yerine dur-kalk yapmayan inverter motorlar %40’a varan elektrik tasarrufu sağlar.', importance: 'critical' },
      { id: 'refrigerant', title: '3. R32 Çevre Dostu Gaz Teknolojisi', description: 'Eski R410A gazı yerine daha yüksek ısı transfer verimi sunan R32 gazlı modeller tercih edilmelidir.', importance: 'important' }
    ],
    checklistItems: [
      { id: 'kl1', text: 'Odamın m²’sini, tavan yüksekliğini ve güneş alma durumunu hesapladım.', importance: 'critical' },
      { id: 'kl2', text: 'Klimanın Inverter motorlu ve A++ / A+++ enerji sınıfında olduğunu gördüm.', importance: 'critical' },
      { id: 'kl3', text: 'Ücretsiz keşif ve montaj hizmeti dahil mi teyit ettim.', importance: 'important' }
    ],
    redFlags: [
      { id: 'rf_kl1', title: 'On-Off (Non-Inverter) Klima Almak', explanation: 'Kompresörü sürekli durup tekrar yüksek akımla çalıştığı için elektrik faturasını kabartır.' }
    ],
    relatedGuideIds: ['robot-supurge-alirken', 'ev-kiralarken', 'calisma-koltugu-alirken'],
    journeyIds: ['home-office-kuruyorum']
  },

  // 11. Robot Süpürge Alırken
  {
    id: 'robot-supurge-alirken',
    slug: 'robot-supurge-alirken',
    categorySlug: 'ev-yasam',
    title: 'Robot Süpürge Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Robot Süpürge',
    description: 'LiDAR navigasyon (LDS), emiş gücü (Pa), mop fonksiyonu, halı tanıma sensörü ve istasyon özellikleri.',
    intro: [
      'Robot süpürgelerde navigasyon teknolojisi cihazın akıllılığını belirleyen ana unsurdur. Kamera veya rastgele çarpan modeller yerine LiDAR (LDS) lazer navigasyonlu cihazlar karanlıkta bile kusursuz haritalama yapar.',
      'Evde evcil hayvan veya kalın halılar varsa emiş gücü (minimum 4000-5000 Pa) ön plana çıkar.'
    ],
    keywords: ['robot süpürge', 'lidar haritalama', 'roborock', 'mop özellikli robot', 'emiş gücü pa'],
    aliases: ['akıllı süpürge', 'robot supurge'],
    estimatedReadTimeMinutes: 4,
    lastUpdated: '2026-09-14',
    status: 'published',
    importanceItems: [
      { id: 'nav', title: '1. LiDAR (LDS) Lazer Haritalama', description: 'Evin tam 2D/3D haritasını çıkararak oda oda temizlik ve yasaklı bölge tanımlama imkanı sunar.', importance: 'critical' },
      { id: 'suction', title: '2. Emiş Gücü (Pa Pascal Değeri)', description: 'Halı aralarındaki tozları çekmek için minimum 4000 Pa emiş gücü önerilir.', importance: 'important' },
      { id: 'station', title: '3. Otomatik Toz Boşaltma ve Mop Yıkama İstasyonu', description: 'Haftalarca toz haznesine dokunmama konforu sağlar.', importance: 'useful' }
    ],
    checklistItems: [
      { id: 'rs1', text: 'LiDAR kule lazer haritalama sensörü olduğunu teyit ettim.', importance: 'critical' },
      { id: 'rs2', text: 'Evimdeki eşik yükseklikleri ile robotun tırmanma engel aşma sınırını (genelde 2 cm) kıyasladım.', importance: 'critical' },
      { id: 'rs3', text: 'Yedek fırça ve filtre parçalarının piyasadaki bulunabilirliğini kontrol ettim.', importance: 'important' }
    ],
    redFlags: [
      { id: 'rf_rs1', title: 'Jiroskop / Çarpmalı Navigasyonlu Robotlar', explanation: 'Rastgele gezerek temizlenmemiş alanlar bırakır, sürekli bir yerlere takılır ve haritayı sık sık kaybeder.' }
    ],
    relatedGuideIds: ['klima-alirken', 'calisma-koltugu-alirken', 'ev-kiralarken']
  },

  // 12. Çalışma Koltuğu Alırken
  {
    id: 'calisma-koltugu-alirken',
    slug: 'calisma-koltugu-alirken',
    categorySlug: 'ev-yasam',
    title: 'Çalışma Koltuğu Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Çalışma Koltuğu',
    description: 'Ergonomi, bel desteği (lumbar support), file kumas havalandırması, 3D/4D kolçak ayarı ve mekanizma kalitesi.',
    intro: [
      'Günde 6-10 saat masa başında çalışan biri için yanlış sandalye seçimi zamanla bel fıtığı ve boyun düzleşmesine yol açabilir.',
      'Sünger dolgulu suni deri koltuklar terletme yaparken; ayarlanabilir bel destekli tam file (mesh) koltuklar en iyi omurga desteğini sunar.'
    ],
    keywords: ['çalışma koltuğu', 'ergonomik sandalye', 'ofis koltuğu', 'bel desteği', 'file koltuk'],
    aliases: ['ofis sandalyesi', 'oyuncu koltuğu', 'ergonomik koltuk'],
    estimatedReadTimeMinutes: 4,
    lastUpdated: '2026-09-14',
    status: 'published',
    importanceItems: [
      { id: 'lumbar', title: '1. Ayarlanabilir Yükseklik ve Derinlikli Bel Desteği', description: 'Omurganın doğal S kavisini destekleyerek bel boşluğunu tam doldurmalıdır.', importance: 'critical' },
      { id: 'mesh', title: '2. Nefes Alabilir File (Mesh) Kumaş', description: 'Yaz aylarında terlemeyi önler ve vücut ağırlığını eşit dağıtır.', importance: 'important' },
      { id: 'armrest', title: '3. 3D / 4D Ayarlanabilir Kolçaklar', description: 'Omuz kaslarının zorlanmaması için kolçakların masa seviyesine tam hizalanması gerekir.', importance: 'important' }
    ],
    checklistItems: [
      { id: 'ck1', text: 'Bel desteğinin yüksekliğinin ayarlanabilir olduğunu kontrol ettim.', importance: 'critical' },
      { id: 'ck2', text: 'Oturma derinliği ayarı var mı inceledim.', importance: 'important' },
      { id: 'ck3', text: 'Amortisörün Class-4 sertifikalı (yüksek kilo taşıma kapasiteli) olduğunu doğruladım.', importance: 'important' }
    ],
    redFlags: [
      { id: 'rf_ck1', title: 'Ergonomik Olmayan Gösterişli Ucuz Oyuncu Koltukları', explanation: 'Düz sırt yapısı ve terleten suni derisiyle omurga sağlığına zarar verir.' }
    ],
    relatedGuideIds: ['laptop-alirken', 'klima-alirken', 'mikrofon-alirken'],
    journeyIds: ['home-office-kuruyorum']
  },

  // 13. Ev Kiralarken
  {
    id: 'ev-kiralarken',
    slug: 'ev-kiralarken',
    categorySlug: 'ev-yasam',
    title: 'Ev Kiralarken Nelere Dikkat Edilmeli?',
    shortTitle: 'Ev Kiralarken',
    description: 'Deprem dayanıklılığı, rutubet ve tesisat kontrolü, kira sözleşmesi maddeleri, depozito koşulları ve aidat tutarı.',
    intro: [
      'Ev kiralarken sadece odaların büyüklüğüne veya boyanın yeniliğine aldanmamak gerekir.',
      'Binanın yapım yılı, deprem yönetmeliğine uygunluğu, rutubet/küf durumu ve kira kontratındaki tahliye taahhütnamesi detayları hukuki ve hayati önem taşır.'
    ],
    keywords: ['ev kiralarken', 'kira sözleşmesi', 'depozito', 'tahliye taahhütnamesi', 'aidat', 'rutubet'],
    aliases: ['kiralık ev', 'kiralık daire', 'ev tutarken'],
    estimatedReadTimeMinutes: 6,
    lastUpdated: '2026-09-14',
    status: 'published',
    importanceItems: [
      { id: 'structure', title: '1. Bina Deprem Dayanıklılığı ve Yaşı', description: '2000 sonrası deprem yönetmeliğine uygun yapılmış binalar ve kolon/kiriş bütünlüğü incelenmelidir.', importance: 'critical' },
      { id: 'damp', title: '2. Rutubet, Isı Yalıtımı ve Su Tesisatı', description: 'Duvar dip köşe diplerinde küf izi ve musluk su basıncı bizzat kontrol edilmelidir.', importance: 'critical' },
      { id: 'contract', title: '3. Kontrat Maddeleri ve Tahliye Taahhütnamesi', description: 'Kira artış oranı, depozito şartları ve contata tarihsiz imzasız taahhütname zorlamalarına dikkat edilmelidir.', importance: 'critical' },
      { id: 'dues', title: '4. Aidat Tutarı ve Isınma Maliyeti', description: 'Kira dışında her ay ödenecek bina aidatı ve ısı yalıtım durumu öğrenilmelidir.', importance: 'important' }
    ],
    checklistItems: [
      { id: 'ek1', text: 'Evi gündüz gözüyle ziyaret edip güneş alma ve rutubet durumunu inceledim.', importance: 'critical' },
      { id: 'ek2', text: 'Ev sahibi ile görüşüp tapu fotokopisi ile kimliğini eşleştirdim.', importance: 'critical' },
      { id: 'ek3', text: 'Kira artış oranını resmi TÜFE sınırı olarak sözleşmeye yazdırdım.', importance: 'critical' },
      { id: 'ek4', text: 'Depozitonun kaç kira bedeli olduğunu ve iade şartlarını netleştirdim.', importance: 'important' },
      { id: 'ek5', text: 'Bina aidatını ve geçmiş borç olup olmadığını yöneticiye sordum.', importance: 'important' }
    ],
    redFlags: [
      { id: 'rf_ek1', title: 'Boş ve Tarihsiz Tahliye Taahhütnamesi İmzalamak', explanation: 'Ev sahibinin sizi istediği an sebepsiz evden çıkarmasına imkan tanır.' },
      { id: 'rf_ek2', title: 'Taze Boyanmış Küflü Duvarlar', explanation: 'Rutubet boya ile geçici kapatılır; birkaç ay sonra ağır koku ve mantar olarak geri döner.' }
    ],
    questions: [
      { id: 'q_ek1', question: 'Binada fiber internet altyapısı mevcut mu?', whyItMatters: 'Evden çalışanlar için hayati altyapı gereksinimidir.', target: 'seller' },
      { id: 'q_ek2', question: 'Daireye ait sığınak veya depo alanı var mı?', whyItMatters: 'Fazla eşya depolama imkanını öğrenmek için.', target: 'seller' }
    ],
    relatedGuideIds: ['klima-alirken', 'robot-supurge-alirken', 'calisma-koltugu-alirken']
  },

  // 14. Bebek Arabası Alırken
  {
    id: 'bebek-arabasi-alirken',
    slug: 'bebek-arabasi-alirken',
    categorySlug: 'anne-bebek',
    title: 'Bebek Arabası Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Bebek Arabası',
    description: 'Travel sistem vs. Baston puset, ağırlık, katlanma mekanizması, süspansiyon kalitesi ve bagaj kaplama hacmi.',
    intro: [
      'Bebek arabasında ebeveynlerin en çok zorlandığı konu, arabanın ağırlığı ve tek elle katlanabilme pratikliğidir.',
      'Asansörsüz bir evde yaşıyorsanız veya araba bagajınız küçükse ağır travel sistemler kısa sürede eziyete dönüşebilir.'
    ],
    keywords: ['bebek arabası', 'travel sistem', 'puset', 'baston bebek arabası', 'katlanır puset'],
    aliases: ['puset alırken', 'bebek arabalari'],
    estimatedReadTimeMinutes: 5,
    lastUpdated: '2026-09-14',
    status: 'published',
    importanceItems: [
      { id: 'fold_weight', title: '1. Ağırlık ve Tek Elle Katlanma', description: 'Arabanın boş ağırlığı (ideal 6-9 kg) ve kucakta bebek varken tek elle katlanabilmesi şarttır.', importance: 'critical' },
      { id: 'suspension', title: '2. Tekerlek Süspansiyonu ve Bilye Yapısı', description: 'Bozuk kaldırımlarda bebeğin sarsılmaması için kaliteli rulmanlı tekerlekler gereklidir.', importance: 'important' },
      { id: 'trunk_space', title: '3. Bagaj Kaplama Hacmi', description: 'Katlandığında aracınızın bagajına sığıp sığmadığı bizzat denenmelidir.', importance: 'important' }
    ],
    checklistItems: [
      { id: 'ba1', text: 'Bebek arabasını tek elle katlayıp açmayı bizzat mağazada denedim.', importance: 'critical' },
      { id: 'ba2', text: 'Aracımın bagajına sığıp sığmadığını ölçtüm.', importance: 'critical' },
      { id: 'ba3', text: 'Emniyet kemerinin 5 nokta bağlantılı olduğunu doğruladım.', importance: 'critical' }
    ],
    redFlags: [
      { id: 'rf_ba1', title: '12 kg Üzeri Aşırı Ağır Arabalar', explanation: 'Kısa süre sonra günlük kullanımda taşıması imkansız hale gelir ve yeni kabin boy araba aldırmak zorunda bırakır.' }
    ],
    relatedGuideIds: ['oto-koltugu-alirken', 'bebek-bezi-alirken'],
    journeyIds: ['bebek-geliyor']
  },

  // 15. Oto Koltuğu Alırken
  {
    id: 'oto-koltugu-alirken',
    slug: 'oto-koltugu-alirken',
    categorySlug: 'anne-bebek',
    title: 'Oto Koltuğu Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Oto Koltuğu',
    description: 'i-Size (ECE R129) güvenlik standardı, Isofix bağlantı, ADAC çarpışma testi puanları ve yatış açısı.',
    intro: [
      'Oto koltuğu konfor eşyası değil, bir araç güvenlik ekipmanıdır. Eski R44 standartlı koltuklar yerine i-Size (R129) sertifikalı koltuklar tercih edilmelidir.',
      'Almanya bağımsız otomobil kulübü ADAC’ın çarpışma ve toksik madde testlerinden yüksek puan almış modeller seçilmelidir.'
    ],
    keywords: ['oto koltuğu', 'isofix', 'i-size r129', 'adac testi', 'bebek oto koltuğu'],
    aliases: ['bebek oto koltuğu', 'araç koltuğu'],
    estimatedReadTimeMinutes: 5,
    lastUpdated: '2026-09-14',
    status: 'published',
    importanceItems: [
      { id: 'r129', title: '1. i-Size (ECE R129) Standardı ve Isofix', description: 'Yan darbe testlerini zorunlu kılan i-Size standardı ve araca sabitlenen Isofix ayakları hayati önem taşır.', importance: 'critical' },
      { id: 'adac', title: '2. ADAC Çarpışma Test Puanı', description: 'ADAC test puanı ne kadar düşükse (örneğin 1.6 - 2.0 arası) koltuk o kadar güvenlidir.', importance: 'critical' },
      { id: 'rear_facing', title: '3. Arkaya Dönük Kullanım Süresi', description: 'Bebeğin en az 15 aylık olana kadar arkaya dönük seyahat etmesi boyun omurga sağlığı için şarttır.', importance: 'critical' }
    ],
    checklistItems: [
      { id: 'ok1', text: 'i-Size ECE R129 sertifikasını koltuk etiketi üzerinde gördüm.', importance: 'critical' },
      { id: 'ok2', text: 'ADAC test raporundaki güvenlik puanını inceledim.', importance: 'critical' },
      { id: 'ok3', text: 'Aracımda Isofix bağlantı noktaları var mı kontrol ettim.', importance: 'critical' }
    ],
    redFlags: [
      { id: 'rf_ok1', title: 'İkinci El Oto Koltuğu Almak', explanation: 'Kaza geçirmiş bir oto koltuğunun iç plastik yapısında gözle görülmeyen mikro çatlaklar oluşur ve bir sonraki kazada korumaz.' }
    ],
    relatedGuideIds: ['bebek-arabasi-alirken', 'ikinci-el-araba-alirken', 'bebek-bezi-alirken'],
    journeyIds: ['bebek-geliyor']
  },

  // 16. Bebek Bezi Seçerken
  {
    id: 'bebek-bezi-alirken',
    slug: 'bebek-bezi-alirken',
    categorySlug: 'anne-bebek',
    title: 'Bebek Bezi Seçerken Nelere Dikkat Edilmeli?',
    shortTitle: 'Bebek Bezi',
    description: 'Cilt dostu malzemeler (paraben/klorsuz), sıvı emicilik, elastik yan bantlar ve sızdırmazlık bariyerleri.',
    intro: [
      'Bebek bezi seçiminde bebeğin kilosuna tam uyum ve ciltte pişik yapmayan hipoalerjenik içerik esastır.',
      'Sıvıyı jel taneciklerinde hızla hapsederek bebeğin cildine geri vermeyen yüksek emicilikli bezler gece uykusunu kesintisiz kılar.'
    ],
    keywords: ['bebek bezi', 'pişik önleyici bez', 'sızdırmaz bez', 'bebek bakımı'],
    aliases: ['bezi', 'bebek bezi alırken'],
    estimatedReadTimeMinutes: 3,
    lastUpdated: '2026-09-14',
    status: 'published',
    importanceItems: [
      { id: 'skin', title: '1. Paraben, Parfüm ve Klor İçermeyen Dokuma', description: 'Hassas yenidoğan cildini korumak için doğal pamuk lifli bezler tercih edilmelidir.', importance: 'critical' },
      { id: 'absorb', title: '2. Hızlı Sıvı Emicilik ve Kuruluş Hissi', description: 'Sıvının alt tabakaya geçmesini sağlayan kanal teknolojisi pişikleri önler.', importance: 'critical' }
    ],
    checklistItems: [
      { id: 'bb1', text: 'Bebeğimin güncel kilo aralığına uygun beden numarasını seçtim.', importance: 'critical' },
      { id: 'bb2', text: 'Esnek cırt cırtlı yan bant yapısını kontrol ettim.', importance: 'important' }
    ],
    redFlags: [
      { id: 'rf_bb1', title: 'Aşırı Parfümlü Ağartılmış Bezler', explanation: 'Bebeğin cildinde alerjik reaksiyonlara ve pişiğe neden olur.' }
    ],
    relatedGuideIds: ['bebek-arabasi-alirken', 'oto-koltugu-alirken'],
    journeyIds: ['bebek-geliyor']
  },

  // 17. Kaykay Alırken
  {
    id: 'kaykay-alirken',
    slug: 'kaykay-alirken',
    categorySlug: 'spor-outdoor',
    title: 'Kaykay Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Kaykay Alırken',
    description: 'Kaykay türleri (Custom / Complete), tahta (deck) genişliği, truck sertliği, tekerlek sertliği (Durometre A) ve rulmanlar (ABEC).',
    intro: [
      'Kaykay alırken hazır satılan kalitesiz plastik/oyuncak kaykaylar yerine gerçek akçaağaç (Canadian Maple) katmanlı tahtalar tercih edilmelidir.',
      'Sokak hareketleri için sert ve küçük tekerlekler; ulaşım ve sürüş konforu için yumuşak Cruiser tekerlekleri seçilmelidir.'
    ],
    keywords: ['kaykay', 'skate', 'kaykay alırken', 'truck', 'abec rulman', 'deck genişliği'],
    aliases: ['skate', 'skateboard', 'kaykaylar'],
    estimatedReadTimeMinutes: 4,
    lastUpdated: '2026-09-14',
    status: 'published',
    importanceItems: [
      { id: 'deck', title: '1. Tahta Genişliği ve Katman Kalitesi (7 Kat Akçaağaç)', description: 'Ayak numaranıza ve sürüş tarzınıza göre 7.75" ile 8.25" arası deck genişliği seçilmelidir.', importance: 'critical' },
      { id: 'wheels', title: '2. Tekerlek Sertliği (Durometre A) ve Çapı (mm)', description: 'Park/Sokak için 99A-101A sertlik; bozuk asfalt ve gezinti için 78A-85A yumuşak tekerlekler şarttır.', importance: 'critical' },
      { id: 'trucks', title: '3. Truck (Aks) Genişliği ve Dayanıklılığı', description: 'Truck genişliği tahtanın genişliği ile birebir aynı hizada olmalıdır.', importance: 'important' }
    ],
    checklistItems: [
      { id: 'ky1', text: 'Ayak numarama uygun deck genişliğini belirledim.', importance: 'critical' },
      { id: 'ky2', text: 'Kullanacağım zemine uygun tekerlek durometre sertliğini seçtim.', importance: 'critical' },
      { id: 'ky3', text: 'Kask ve dizlik koruma ekipmanlarını bütçeme ekledim.', importance: 'important' }
    ],
    redFlags: [
      { id: 'rf_ky1', title: 'Marketlerde Satılan Plastik / Sunta Oyuncak Kaykaylar', explanation: 'Rulmanları dönmez, truckları dönemeçlerde bükülmez ve tehlikeli düşüşlere yol açar.' }
    ],
    relatedGuideIds: ['kamp-cadiri-alirken', 'motosiklet-kaski-alirken']
  },

  // 18. Kamp Çadırı Alırken
  {
    id: 'kamp-cadiri-alirken',
    slug: 'kamp-cadiri-alirken',
    categorySlug: 'spor-outdoor',
    title: 'Kamp Çadırı Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Kamp Çadırı',
    description: 'Mevsim derecesi (3 Mevsim / 4 Mevsim / 5 Mevsim), su sütunu direnci (mm), bagaj alanı (bagajlı tente) ve pol malzemesi.',
    intro: [
      'Kamp çadırında en kritik husus, yağmurda su geçirmeyen kumaş kaplaması (mm su sütunu) ve rüzgara dayanıklı alüminyum pol yapısıdır.',
      'Yaz ve bahar kampları için nefes alabilir 3 mevsim çadırlar yeterliyken; kar ve şiddetli fırtınada 4 veya 5 mevsim çadırlar hayati önem taşır.'
    ],
    keywords: ['kamp çadırı', 'çadır alırken', 'su geçirmez çadır', '4 mevsim çadır', 'alüminyum pol'],
    aliases: ['çadır', 'kamp cadiri'],
    estimatedReadTimeMinutes: 5,
    lastUpdated: '2026-09-14',
    status: 'published',
    importanceItems: [
      { id: 'seasons', title: '1. Mevsim Derecelendirmesi ve Kullanım Amacı', description: 'Yaz/İlkbahar için 3 mevsim; fırtınalı ve karlı yüksek irtifa için 4-5 mevsim çadır seçilmelidir.', importance: 'critical' },
      { id: 'waterproof', title: '2. Su Sütunu Direnci (mm H2O)', description: 'Taban kumaşında en az 3000 mm, dış tente kumaşında en az 2000 mm su geçirmezlik aranmalıdır.', importance: 'critical' },
      { id: 'poles', title: '3. Pol Malzemesi (Alüminyum vs. Fiberglas)', description: 'Rüzgarda kırılmayan hafif ve esnek 7001 alüminyum poller tercih edilmelidir.', importance: 'important' }
    ],
    checklistItems: [
      { id: 'kc1', text: 'Kişi sayısına +1 ekleyerek çadır kapasitesini seçtim (2 kişi için 3 kişilik çadır).', importance: 'critical' },
      { id: 'kc2', text: 'Dış tentede dikiş bantlama (tape sealed) su koruması var mı inceledim.', importance: 'critical' },
      { id: 'kc3', text: 'Çift kapılı ve havalandırma pencereli olduğunu kontrol ettim.', importance: 'important' }
    ],
    redFlags: [
      { id: 'rf_kc1', title: 'Tek Tente (Dış Tentesi Olmayan) Çadırlar', explanation: 'İçeride nefes alıp verdikçe terleme (kondensasyon) yapar ve sabah ıslak uyanmanıza neden olur.' }
    ],
    relatedGuideIds: ['kaykay-alirken', 'powerbank-alirken']
  },

  // 19. Mikrofon Alırken
  {
    id: 'mikrofon-alirken',
    slug: 'mikrofon-alirken',
    categorySlug: 'ses-muzik-creator',
    title: 'Mikrofon Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Mikrofon Alırken',
    description: 'USB vs. XLR bağlantısı, Kondenser ve Dinamik kapsül farkları, Kutup deseni (Cardioid) ve dip gürültüsü.',
    intro: [
      'Yayıncılık, podcast veya müzik kaydı için mikrofon seçerken oda akustiği en belirleyici etkendir.',
      'Yalıtımsız ve yankılı bir odada Kondenser mikrofonlar tüm ortam gürültüsünü toplarken; Dinamik mikrofonlar sadece ağzınıza yakın sesleri alarak tertemiz kayıt sağlar.'
    ],
    keywords: ['mikrofon', 'usb mikrofon', 'xlr mikrofon', 'dinamik mikrofon', 'kondenser mikrofon', 'shure', 'rode'],
    aliases: ['yayıncı mikrofonu', 'podcast mikrofonu', 'stüdyo mikrofonu'],
    estimatedReadTimeMinutes: 4,
    lastUpdated: '2026-09-14',
    status: 'published',
    importanceItems: [
      { id: 'type', title: '1. Kapsül Tipi (Dinamik vs. Kondenser)', description: 'Yankılı/gürültülü odalar için Dinamik; akustiği düzenlenmiş stüdyolar için Kondenser mikrofon seçilmelidir.', importance: 'critical' },
      { id: 'connection', title: '2. Bağlantı Türü (USB vs. XLR)', description: 'Tak-çalıştır pratiklik için USB; ses kartı ile profesyonel kontrol için XLR bağlantı tercih edilir.', importance: 'critical' },
      { id: 'polar', title: '3. Kutup Deseni (Kardioid / Cardioid)', description: 'Arka ve yan sesleri engelleyip sadece ön taraftan gelen sesi alan kardioid kapsül şarttır.', importance: 'important' }
    ],
    checklistItems: [
      { id: 'mi1', text: 'Odamın ses yalıtım durumuna göre Dinamik veya Kondenser seçimimi yaptım.', importance: 'critical' },
      { id: 'mi2', text: 'XLR seçeceksem harici ses kartı bütçesini hesaba kattım.', importance: 'critical' },
      { id: 'mi3', text: 'Pop filtre ve şok emici (shock mount) desteği var mı kontrol ettim.', importance: 'important' }
    ],
    redFlags: [
      { id: 'rf_mi1', title: 'Yalıtımsız Odada Hassas Kondenser Mikrofon Kullanmak', explanation: 'Klavye sesleri, sokaktaki araçlar ve oda ortam yankısı kayda biner.' }
    ],
    questions: [
      { id: 'q_mi1', question: 'Gain Boost / Cloudlifter gibi ek ön amfiye ihtiyaç duyuyor mu?', whyItMatters: 'Shure SM7B gibi dinamik mikrofonların ekstra güç harcamasını önceden bilmek için.', target: 'seller' }
    ],
    relatedGuideIds: ['ses-karti-alirken', 'laptop-alirken', 'calisma-koltugu-alirken'],
    journeyIds: ['home-office-kuruyorum']
  },

  // 20. Ses Kartı Alırken
  {
    id: 'ses-karti-alirken',
    slug: 'ses-karti-alirken',
    categorySlug: 'ses-muzik-creator',
    title: 'Ses Kartı Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Ses Kartı Alırken',
    description: 'Preamp kalitesi, dBRms dip gürültüsü, Örnekleme Hızı (24-bit / 192kHz), Phantom Power (+48V) ve doğrudan izleme (Direct Monitor).',
    intro: [
      'Ses kartı, enstrüman ve XLR mikrofonlardan gelen analojik sinyalleri sıfır kayıpla dijitale çeviren stüdyo beynidir.',
      'Düşük kaliteli preamplatörler dip ses tıslaması (noise floor) oluşturur. Temiz kayıt için yüksek EIN (-128 dBu) ve +48V Phantom Power desteği şarttır.'
    ],
    keywords: ['ses kartı', 'audio interface', 'focusrite', 'preamp', '48v phantom power', 'xlr ses kartı'],
    aliases: ['audio interface', 'harici ses kartı', 'stüdyo ses kartı'],
    estimatedReadTimeMinutes: 4,
    lastUpdated: '2026-09-14',
    status: 'published',
    importanceItems: [
      { id: 'preamp', title: '1. Preamp Kalitesi ve Düşük Dip Gürültüsü (EIN)', description: 'Mikrofon sinyalini yükseltirken tıslama yapmayan temiz preamp katı kritik önem taşır.', importance: 'critical' },
      { id: 'phantom', title: '2. +48V Phantom Power Desteği', description: 'Kondenser mikrofonları beslemek için bağımsız +48V güç anahtarı bulunmalıdır.', importance: 'critical' },
      { id: 'direct_monitor', title: '3. Donanımsal Sıfır Gecikmeli İzleme (Direct Monitoring)', description: 'Kendi sesinizi bilgisayar yazılımı gecikmesi olmadan kulaklıktan anında duymanızı sağlar.', importance: 'important' }
    ],
    checklistItems: [
      { id: 'sk1', text: 'Kullanacağım enstrüman ve mikrofon sayısına göre giriş/çıkış (2 in / 2 out) sayısını belirledim.', importance: 'critical' },
      { id: 'sk2', text: '+48V Phantom Power anahtarı olduğunu teyit ettim.', importance: 'critical' },
      { id: 'sk3', text: 'İşletim sistemimle (macOS / Windows ASIO) sürücü uyumluluğunu kontrol ettim.', importance: 'important' }
    ],
    redFlags: [
      { id: 'rf_sk1', title: 'ASIO Sürücü Desteği Olmayan Ucuz Ses Kartları', explanation: 'Windows sistemlerde yüksek gecikmeye (latency) neden olur ve müzik kaydını imkansızlaştırır.' }
    ],
    relatedGuideIds: ['mikrofon-alirken', 'laptop-alirken'],
    journeyIds: ['home-office-kuruyorum']
  },

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
  },

// 1. Çamaşır Makinesi Alırken
  {
    id: 'camasir-makinesi-alirken',
    slug: 'camasir-makinesi-alirken',
    categorySlug: 'ev-yasam',
    title: 'Çamaşır Makinesi Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Çamaşır Makinesi Alırken',
    description: 'Tambur kapasitesi, sıkma devri, enerji ve su tüketimi, ses seviyesi ve program çeşitliliğine göre doğru çamaşır makinesini seçme rehberi.',
    intro: [
      'Çamaşır makinesi, evde en sık kullanılan ve ortalama 10 yıl ve üzeri hizmet veren beyaz eşyalardan biridir. Yanlış kapasite veya yüksek tüketimli bir model seçmek, hem konforunuzu hem de faturalarınızı yıllar boyu etkiler.',
      'Kapasite ihtiyacı hane büyüklüğüne, sıkma devri ise kurutma sürenize ve kumaş türlerinize göre değişir. 1600 devirli bir makine çamaşırı daha kuru sıkarken, hassas kumaşlarda düşük devirli programların varlığı da o kadar önemlidir.',
      'Ses seviyesi, özellikle açık mutfaklı evlerde ve gece tarifesinde yıkama yapanlar için belirleyici kriterlerden biridir.'
    ],
    keywords: ['çamaşır makinesi', 'çamaşır makinesi seçimi', 'tambur kapasitesi', 'sıkma devri', 'enerji sınıfı', 'yıkama makinesi', 'sessiz çamaşır makinesi'],
    aliases: ['çamaşır makinesi', 'yıkama makinesi', 'washing machine'],
    estimatedReadTimeMinutes: 5,
    lastUpdated: '2026-09-15',
    status: 'published',
    importanceItems: [
      {
        id: 'kapasite',
        title: 'Tambur Kapasitesi (kg)',
        description: '1-2 kişilik haneye 6-7 kg, 3-4 kişilik haneye 8 kg, 5+ kişilik haneye 9-10 kg uygundur. Kapasitenin üzerini doldurmak yıkama kalitesini düşürür, makineyi yıpratır.',
        importance: 'critical'
      },
      {
        id: 'sikma-devri',
        title: 'Sıkma Devri (rpm)',
        description: 'Maksimum sıkma devri ne kadar yüksekse çamaşır o kadar kuru çıkar. 1200 devir günlük kullanım için yeterliyken, 1400-1600 devir kalın kumaşlarda kurutma süresini kısaltır.',
        importance: 'critical'
      },
      {
        id: 'enerji-tuketim',
        title: 'Enerji Sınıfı ve Yıllık Tüketim',
        description: 'Yeni enerji etiketinde A en verimli sınıftır. Yıllık kWh ve litre cinsinden su tüketimi değerlerini modeller arasında doğrudan karşılaştırın; 10 yılda fark ciddi bir tutara ulaşır.',
        importance: 'critical'
      },
      {
        id: 'ses-seviyesi',
        title: 'Ses Seviyesi (dB)',
        description: 'Yıkama sesi 55 dB, sıkma sesi 75 dB altındaki modeller sessiz sınıfta kabul edilir. Açık mutfakta veya yatak odasına yakın konumda kullanılacaksa 50 dB ve altı idealdir.',
        importance: 'important'
      },
      {
        id: 'programlar',
        title: 'Program Sayısı ve Çeşitliliği',
        description: 'Program sayısından çok içerik önemlidir: hızlı program (30-60 dk), hassas/yonca programı, yün programu, buhar/tau programı ve yarım yükleme seçeneği günlük kullanımı kolaylaştırır.',
        importance: 'important'
      },
      {
        id: 'tambur-ozellikleri',
        title: 'Tambur Tipi ve Kazan Malzemesi',
        description: 'Bal peteği desenli tamburlar kumaşa daha nazık davranır. Tambur iç aydınlatması ve kalan süre göstergesi gibi detaylar kullanım konforunu artırır.',
        importance: 'useful'
      }
    ],
    checklistItems: [
      { id: 'c1', text: 'Hane büyüklüğüne göre tambur kapasitesini (kg) belirledim.', importance: 'critical' },
      { id: 'c2', text: 'Sıkma devrinin en az 1200 rpm olduğunu kontrol ettim.', importance: 'critical' },
      { id: 'c3', text: 'Enerji etiketindeki yıllık kWh ve su tüketimini karşılaştırdım.', importance: 'critical' },
      { id: 'c4', text: 'Yıkama ve sıkma ses seviyelerinin (dB) ihtiyacımıza uygun olduğunu gördüm.', importance: 'important' },
      { id: 'c5', text: 'Hızlı program, hassas program ve yarım yükleme seçeneklerinin varlığını doğruladım.', importance: 'important' },
      { id: 'c6', text: 'Makinenin yerleşeceği nişin genişlik, derinlik ve yükseklik ölçülerini aldım.', importance: 'critical' },
      { id: 'c7', text: 'Kapı açılım yönünün yerleşime uygun olduğunu kontrol ettim.', importance: 'important' },
      { id: 'c8', text: 'Garanti süresi ve yetkili servis ağının yoğunluğunu araştırdım.', importance: 'useful' }
    ],
    redFlags: [
      { id: 'rf1', title: 'Eski Enerji Etiketi ile Reklam', explanation: 'Eski A+++ etiketli modeller yeni sistemde C-D sınıfına denk gelebilir; etiket üzerindeki yıllık kWh değerini sormadan kıyaslama yapmayın.' },
      { id: 'rf2', title: 'Aşırı Yüksek Devir Vurgusu', explanation: 'Bazı satıcılar 2000 devir gibi abartılı değerlerle öne çıkar; bu devirler pratikte pek çok kumaşta kullanılamaz ve motor ömrünü kısaltır.' },
      { id: 'rf3', title: 'Ses Değeri Belirtilmeyen Modeller', explanation: 'dB değerini paylaşmayan modelde sessizlik iddiası anlamsızdır; teknik föyde ayrı ayrı yıkama ve sıkma dB değerleri yazmalıdır.' }
    ],
    questions: [
      { id: 'q1', question: 'Bu modelin yıkama ve sıkma ses seviyesi kaç desibeldir?', whyItMatters: 'Açık mutfak veya gece kullanımında 5-10 dB fark bile rahatsız edici olabilir.', target: 'seller' },
      { id: 'q2', question: 'Yıllık su ve elektrik tüketimi etiketteki ile aynı mı?', whyItMatters: 'Vitrindeki etiket bazen farklı varyantın etiketi olur; kutu üzerinden doğrulama gerekir.', target: 'seller' },
      { id: 'q3', question: 'Motor garanti süresi kaç yıl?', whyItMatters: 'Bazı üreticiler motora gövde garantisinden daha uzun garanti verir.', target: 'seller' }
    ],
    scenarios: [
      { id: 'kisi-az', title: 'Tek Kişi / Çift', description: '6-7 kg kapasite, kompakt derinlik, hızlı program ağırlıklı kullanım.', recommendedCriteriaIds: ['kapasite', 'programlar'] },
      { id: 'kalabalik-hane', title: 'Kalabalık Aile', description: '9-10 kg kapasite, 1400+ rpm sıkma, dayanıklı kazan ve geniş program çeşitliliği.', recommendedCriteriaIds: ['kapasite', 'sikma-devri', 'enerji-tuketim'] },
      { id: 'acik-mutfak', title: 'Açık Mutfak / Stüdyo', description: '55 dB altı yıkama sesi, titreşim kontrolü ve gece programı desteği.', recommendedCriteriaIds: ['ses-seviyesi', 'programlar'] }
    ],
    relatedGuideIds: ['kurutma-makinesi-alirken', 'bulasik-makinesi-alirken', 'buzdolabi-alirken'],
  },

  // 2. Kurutma Makinesi Alırken
  {
    id: 'kurutma-makinesi-alirken',
    slug: 'kurutma-makinesi-alirken',
    categorySlug: 'ev-yasam',
    title: 'Kurutma Makinesi Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Kurutma Makinesi Alırken',
    description: 'Isı pompalı, kondenserli ve havalandırmalı kurutma makineleri arasındaki farkları; kapasite, enerji tüketimi ve program özellikleriyle birlikte değerlendirme rehberi.',
    intro: [
      'Kurutma makinesi seçiminde ilk karar teknolojidir: havalandırmalı modeller ucuz ama yüksek tüketimlidir, kondenserli modeller esnek yerleşir, ısı pompalı modeller ise elektrik tüketimini yarıya indirir.',
      'Isı pompalı bir model başlangıçta pahalı görünse de yoğun kullanımda birkaç yıl içinde farkını elektrik faturasından çıkarır. Kapasite seçiminde çamaşır makinenizle aynı veya bir üst kg değerini hedeflemek ikisini ardışık kullanımı kolaylaştırır.',
      'Yün ve hassas kumaş kurutma programları, nem sensörlü otomatik durdurma ve tambur malzemesi gibi detaylar kumaş ömrünü doğrudan etkiler.'
    ],
    keywords: ['kurutma makinesi', 'ısı pompalı kurutma makinesi', 'kondenserli kurutma', 'kurutucu', 'enerji sınıfı', 'çamaşır kurutma'],
    aliases: ['kurutucu', 'çamaşır kurutma makinesi', 'dryer'],
    estimatedReadTimeMinutes: 4,
    lastUpdated: '2026-09-15',
    status: 'published',
    importanceItems: [
      {
        id: 'teknoloji',
        title: 'Kurutma Teknolojisi (Isı Pompası / Kondenser / Havalandırmalı)',
        description: 'Isı pompalı modeller A sınıfı enerjiyle çalışır ve tüketimi kondenserliye göre %40-50 düşüktür. Havalandırmalı modeller dışarı hava bacası gerektirir ve en yüksek tüketimlidir.',
        importance: 'critical'
      },
      {
        id: 'kapasite',
        title: 'Kapasite (kg)',
        description: 'Çamaşır makinenizin kapasitesine eşit veya bir üst kg seçilmelidir; 8 kg yıkama yapan bir makineden çıkan çamaşır 8 kg kurutma kapasitesini tam doldurur.',
        importance: 'critical'
      },
      {
        id: 'nem-sensoru',
        title: 'Nem Sensörü ve Otomatik Durdurma',
        description: 'Çamaşır istenen nem seviyesine ulaştığında makinenin kendini durdurması hem enerji hem kumaş ömrü tasarrufu sağlar. Zaman bazlı modeller ya fazla ya az kurutur.',
        importance: 'critical'
      },
      {
        id: 'enerji',
        title: 'Enerji Sınıfı ve Yıllık Tüketim',
        description: 'Isı pompalı modellerde B-A aralığı, kondenserli modellerde ise genellikle C ve altı sınıflar görülür. Yıllık kWh değeri gerçek maliyet karşılaştırmasının anahtarıdır.',
        importance: 'important'
      },
      {
        id: 'programlar',
        title: 'Program Çeşitliliği',
        description: 'Pamuklu, sentetik, yün/hassas, spor giysi, yastık ve "ekstra kuru" gibi programlar; ayrıca düşük ısı seçeneği kumaş çeşitliliğine uyum sağlar.',
        importance: 'important'
      },
      {
        id: 'bakim',
        title: 'Filtre ve Kondenser Bakım Kolaylığı',
        description: 'Toz filtresi kolay erişilebilir olmalı; kondenserli modellerde kondenser ünitesi çıkarılabilir ve yıkanabilir tasarlanmalıdır. Isı pompalı modellerde kondenser genelde kendini temizler.',
        importance: 'useful'
      }
    ],
    checklistItems: [
      { id: 'c1', text: 'Isı pompalı, kondenserli veya havalandırmalı arasından tercihi bilinçli yaptım.', importance: 'critical' },
      { id: 'c2', text: 'Kapasitenin çamaşır makineme eşit veya üzerinde olduğunu kontrol ettim.', importance: 'critical' },
      { id: 'c3', text: 'Nem sensörlü otomatik durdurma özelliğinin var olduğunu doğruladım.', importance: 'critical' },
      { id: 'c4', text: 'Yıllık enerji tüketimi (kWh) değerlerini modeller arasında karşılaştırdım.', importance: 'important' },
      { id: 'c5', text: 'Hassas ve yün kurutma programlarının mevcut olduğunu gördüm.', importance: 'important' },
      { id: 'c6', text: 'Dış hava bacası gerekiyorsa yerleşim planımı kontrol ettim.', importance: 'critical' },
      { id: 'c7', text: 'Su tahliye hortumunun giderine bağlanabileceğini veya hazne kullanacağımı netleştirdim.', importance: 'useful' }
    ],
    redFlags: [
      { id: 'rf1', title: 'Havalandırmalı Modeli "Uygun Fiyatlı" Sunmak', explanation: 'Bacasız yerleşimde havalandırmalı makine kullanılamaz; satıcı bacayı sormadan satış yapıyorsa sonradan iade süreci doğar.' },
      { id: 'rf2', title: 'Tüketim Değeri Verilmeyen İndirim', explanation: 'Kondenserli modeller düşük etiket fiyatıyla öne çıkarken yıllık elektrik farkı ısı pompalı modeli uzun vadede daha ucuz yapabilir.' },
      { id: 'rf3', title: 'Yüksek Kapasite Abartısı', explanation: '8 kg kurutma kapasitesi, 5 kg yıkama yapan bir hane için gereksizdir; büyük tambur düşük dolulukta da verimsiz çalışır.' }
    ],
    questions: [
      { id: 'q1', question: 'Bu model ısı pompalı mı, kondenser ünitesi kullanıcı tarafından temizlenebiliyor mu?', whyItMatters: 'Bakımı zor modellerde tıkanma verimi düşürür ve arıza riski artar.', target: 'seller' },
      { id: 'q2', question: 'Nem sensörü hangi programlarda devrede?', whyItMatters: 'Bazı ekonomik modellerde sensör yalnızca belirli programlarda etkindir.', target: 'seller' },
      { id: 'q3', question: 'Kurutma sırasında ortalama çevrim süresi ne kadar?', whyItMatters: 'Isı pompalı modeller düşük ısıyla daha uzun kurutur; bu normaldir ve tüketimi düşürür.', target: 'service' }
    ],
    scenarios: [
      { id: 'apartman', title: 'Bacasız Apartman Dairesi', description: 'Isı pompalı veya kondenserli model; düşük tüketim ve sessiz çalışma önceliği.', recommendedCriteriaIds: ['teknoloji', 'enerji'] },
      { id: 'kapali-balkon', title: 'Kapalı Balkon / Zemin Kat', description: 'Nem sensörlü, kendini temizleyen kondenserli yapı ve kış kullanımına uygun çalışma aralığı.', recommendedCriteriaIds: ['nem-sensoru', 'bakim'] },
      { id: 'cocuklu-hane', title: 'Çocuklu / Yoğun Kullanım', description: 'Yüksek kapasite, yastık-peluş programı ve hızlı kurutma seçeneği.', recommendedCriteriaIds: ['kapasite', 'programlar'] }
    ],
    relatedGuideIds: ['camasir-makinesi-alirken', 'bulasik-makinesi-alirken', 'yastik-alirken'],
  },

  // 3. Bulaşık Makinesi Alırken
  {
    id: 'bulasik-makinesi-alirken',
    slug: 'bulasik-makinesi-alirken',
    categorySlug: 'ev-yasam',
    title: 'Bulaşık Makinesi Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Bulaşık Makinesi Alırken',
    description: 'Kurset sayısı, su ve enerji tüketimi, ses seviyesi, program seçenekleri ve kurutma sistemi ile doğru bulaşık makinesini seçme rehberi.',
    intro: [
      'Bulaşık makinesi, elle yıkamaya göre hem su hem zaman tasarrufu sağlayan en verimli beyaz eşyalardan biridir. Ancak yanlış kapasite veya yüksek tüketimli bir model, bu avantajı ortadan kaldırır.',
      'Kurset sayısı (12-16) makinenin tek seferde yıkayabileceği takım adedini gösterir; hane büyüklüğüne göre doğru seçim, makinenin verimli dolulukta çalışmasını sağlar.',
      'Ses seviyesi ve kurutma sistemi ise günlük kullanım konforunu belirleyen iki kritik başlıktır.'
    ],
    keywords: ['bulaşık makinesi', 'bulaşık makinesi seçimi', 'kurset', 'sessiz bulaşık makinesi', 'enerji sınıfı', 'su tüketimi'],
    aliases: ['bulaşık makinesi', 'bulasik makinesi', 'dishwasher'],
    estimatedReadTimeMinutes: 4,
    lastUpdated: '2026-09-15',
    status: 'published',
    importanceItems: [
      {
        id: 'kurset',
        title: 'Kurset Sayısı (Kapasite)',
        description: '12-13 kurset küçük haneye, 14-16 kurset kalabalık veya misafir ağırlayan haneye uygundur. Üçüncü sepet (tezgah üstü araçlar için) ekstra kullanışlılık sağlar.',
        importance: 'critical'
      },
      {
        id: 'su-tuketim',
        title: 'Su ve Enerji Tüketimi',
        description: 'Çevrim başına 9-12 litre su tüketen modeller verimli sınıftadır. Yıllık kWh değeriyle birlikte değerlendirildiğinde gerçek işletme maliyeti ortaya çıkar.',
        importance: 'critical'
      },
      {
        id: 'ses',
        title: 'Ses Seviyesi (dB)',
        description: '42-45 dB çok sessiz, 46-49 dB sessiz, 50 dB üzeri belirgindir. Açık mutfakta kullanılacaksa 45 dB ve altı tercih edilmelidir.',
        importance: 'important'
      },
      {
        id: 'kurutma',
        title: 'Kurutma Sistemi',
        description: 'Yoğuşmalı kurutma standarttır; ısı pompalı veya kapıyı otomatık açan sistemler plastik saklama kaplarını da kuru çıkarır. Zeolit kurutma üst segmentte bulunur.',
        importance: 'important'
      },
      {
        id: 'programlar',
        title: 'Program ve Hız Seçenekleri',
        description: 'Hızlı program (30-60 dk), yoğun kirli program, cam-koruma programı, sessiz/gece programı ve yarım yükleme seçeneği günlük esnekliği artırır.',
        importance: 'important'
      },
      {
        id: 'ic-duzen',
        title: 'İç Düzen ve Sepet Esnekliği',
        description: 'Katlanır destekler, ayarlanabilir üst sepet ve bıçak-çatal sepetinin esnekliği; tencereler, fırın tepsileri gibi büyük parçaların yerleşimini belirler.',
        importance: 'useful'
      }
    ],
    checklistItems: [
      { id: 'c1', text: 'Hane büyüklüğüne uygun kurset sayısını (12-16) belirledim.', importance: 'critical' },
      { id: 'c2', text: 'Çevrim başına su tüketiminin 12 litrenin altında olduğunu kontrol ettim.', importance: 'critical' },
      { id: 'c3', text: 'Enerji etiketindeki yıllık kWh değerini karşılaştırdım.', importance: 'critical' },
      { id: 'c4', text: 'Ses seviyesinin kullanım alanıma uygun (45 dB altı) olduğunu gördüm.', importance: 'important' },
      { id: 'c5', text: 'Hızlı program ve yarım yükleme seçeneklerinin varlığını doğruladım.', importance: 'important' },
      { id: 'c6', text: 'Niş ölçülerini (60 cm standart / 45 cm kompakt) aldım.', importance: 'critical' },
      { id: 'c7', text: 'Kurutma sisteminin plastik kapları da kuruttuğunu araştırdım.', importance: 'useful' },
      { id: 'c8', text: 'Kurulum için gerekli tesisat (su, gider, priz) yerlerini kontrol ettim.', importance: 'important' }
    ],
    redFlags: [
      { id: 'rf1', title: 'Kurset Sayısının Abartılması', explanation: 'Aynı gövde boyutunda 16 kurset iddiası, sepet aralıklarının daraltıldığını gösterir; pratikte büyük tabaklar sığmayabilir.' },
      { id: 'rf2', title: 'Tüketim Etiketiyle Vitrin Farkı', explanation: 'Sergilenen etiket farklı bir modelin olabilir; satın almadan önce kutu üzerindeki etiket doğrulanmalıdır.' },
      { id: 'rf3', title: 'Kurutma Performansı Belirsiz Modeller', explanation: 'Yalnızca yoğuşmalı kurutması olan ekonomik modellerde plastik saklamalar ıslak kalır; "tam kuru" iddiası teknik föyle desteklenmelidir.' }
    ],
    questions: [
      { id: 'q1', question: 'Üst sepet yükseklik ayarı, alt sepetteki tabaklar yerleşikken yapılabiliyor mu?', whyItMatters: 'Pratikte en sık kullanılan ayarın boşaltma gerektirmemesi kullanım kolaylığı sağlar.', target: 'seller' },
      { id: 'q2', question: 'Hızlı programın su ve enerji tüketimi normal programa göre nasıl?', whyItMatters: 'Bazı hızlı programlar daha az verimli yıkar; kısa süre avantajı faturaya yansıyabilir.', target: 'seller' },
      { id: 'q3', question: 'Hangi parçalar garanti kapsamı dışındadır?', whyItMatters: 'Sepet tekerlekleri, conta gibi parçalar genelde normal yıpranma kabul edilir.', target: 'service' }
    ],
    scenarios: [
      { id: 'kucuk-hane', title: 'Tek Kişi / Çift', description: '45 cm kompakt veya 12-13 kurset, hızlı program ve düşük tüketim.', recommendedCriteriaIds: ['kurset', 'su-tuketim'] },
      { id: 'kalabalik-aile', title: 'Kalabalık Aile', description: '14-16 kurset, üçüncü sepet, yoğun program ve dayanıklı iç gövde.', recommendedCriteriaIds: ['kurset', 'ic-duzen', 'programlar'] },
      { id: 'acik-mutfak', title: 'Açık Mutfak / Yaşam Alanına Komşu', description: '45 dB altı sessizlik ve sessiz/gece programı.', recommendedCriteriaIds: ['ses', 'programlar'] }
    ],
    relatedGuideIds: ['camasir-makinesi-alirken', 'kurutma-makinesi-alirken', 'ankastre-firin-alirken'],
  },

  // 4. Buzdolabı Alırken
  {
    id: 'buzdolabi-alirken',
    slug: 'buzdolabi-alirken',
    categorySlug: 'ev-yasam',
    title: 'Buzdolabı Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Buzdolabı Alırken',
    description: 'Soğutma teknolojisi, hacim, enerji sınıfı, ses seviyesi ve iç düzen özelliklerine göre doğru buzdolabı seçme rehberi.',
    intro: [
      'Buzdolabı günün 24 saati fişte takılı kalan tek beyaz eşyadır; bu yüzden enerji sınıfı ve yıllık tüketim, satın alma fiyatı kadar önemlidir.',
      'Kar tipi (no-frost) ve statik soğutma arasındaki fark, hem buz çözme derdi hem de gıdaların daha dengeli korunması anlamına gelir. Hacim seçimi ise hane büyüklüğü ve alışveriş alışkanlıklarıyla doğrudan ilgilidir.',
      'Ayrıca buzdolabının kapıdan geçip geçmeyeceğini ve mutfak nişine oturup oturmayacağını önceden ölçmek, teslimatta yaşanacak en büyük sürprizi önler.'
    ],
    keywords: ['buzdolabı', 'buzdolabı seçimi', 'no frost buzdolabı', 'enerji sınıfı', 'sessiz buzdolabı', 'derin dondurucu'],
    aliases: ['buzdolabı', 'buz dolabı', 'refrijeratör', 'fridge'],
    estimatedReadTimeMinutes: 5,
    lastUpdated: '2026-09-15',
    status: 'published',
    importanceItems: [
      {
        id: 'sogutma-tipi',
        title: 'Soğutma Teknolojisi (No-Frost / Statik)',
        description: 'No-frost modellerde kar oluşmaz, sıcaklık homojen dağılır ve buz çözme ihtiyacı ortadan kalkar. Statik modeller daha sessiz ve ucuz olabilir ama periyodik buz çözme gerektirir.',
        importance: 'critical'
      },
      {
        id: 'hacim',
        title: 'Toplam Hacim ve Bölüm Dağılımı',
        description: 'Kişi başına 100-150 litre genel kuraldır. 1-2 kişiye 250-300 litre, 3-4 kişiye 350-450 litre uygundur. Dondurucu oranının ihtiyacınıza uygunluğunu kontrol edin.',
        importance: 'critical'
      },
      {
        id: 'enerji',
        title: 'Enerji Sınıfı ve Yıllık Tüketim',
        description: '7/24 çalışan cihazda yıllık 100-150 kWh fark, 10 yılda belirgin bir maliyet oluşturur. Yeni etikette F-G sınıfı eski etiketlerin C-D seviyesine denk gelir.',
        importance: 'critical'
      },
      {
        id: 'ses',
        title: 'Ses Seviyesi (dB)',
        description: '38-40 dB çok sessiz kabul edilir. Stüdyo daire veya salon-birleşik mutfakta 42 dB üstü modeller kompresör sesiyle rahatsız edebilir.',
        importance: 'important'
      },
      {
        id: 'olculer',
        title: 'Ölçüler ve Kapı Açılım Düzeni',
        description: 'Niş ölçüsüne ek olarak buzdolabının derinliğinin tezgah taşmasını, kapının açılırken etrafındaki dolap kapılarına çarpıp çarpmadığını ve mutfağa girişte kapıdan geçip geçmediğini kontrol edin.',
        importance: 'critical'
      },
      {
        id: 'ic-duzen',
        title: 'İç Düzen ve Nem Kontrolü',
        description: 'Ayarlanabilir raflar, sebzelik hacmi, kapaklı saklama alanları ve nem kontrollü kasa (meyve-sebze daha uzun dayanır) kullanım kalitesini belirler.',
        importance: 'useful'
      }
    ],
    checklistItems: [
      { id: 'c1', text: 'No-frost ve statik soğutma arasında tercihim ihtiyacıma göre yaptım.', importance: 'critical' },
      { id: 'c2', text: 'Hane büyüklüğüne uygun toplam hacmi (litre) belirledim.', importance: 'critical' },
      { id: 'c3', text: 'Yıllık enerji tüketimini (kWh) benzer hacimli modellerle karşılaştırdım.', importance: 'critical' },
      { id: 'c4', text: 'Ses seviyesinin kullanım alanıma uygun olduğunu kontrol ettim.', importance: 'important' },
      { id: 'c5', text: 'Niş, koridor, kapı ve asansör ölçülerini aldım.', importance: 'critical' },
      { id: 'c6', text: 'Kapı açılım yönünün ve menteşe yerleşiminin mutfağıma uyduğunu doğruladım.', importance: 'important' },
      { id: 'c7', text: 'Dondurucu kapasitesinin dondurma alışkanlığıma yetip yetmediğini değerlendirdim.', importance: 'important' },
      { id: 'c8', text: 'Kompresör garanti süresini araştırdım.', importance: 'useful' }
    ],
    redFlags: [
      { id: 'rf1', title: 'Kapıdan Geçmeyen Dev Cihaz', explanation: 'Mağazada küçük görünen 70 cm gövde genişliği, dairenin kapısından veya dar koridordan geçmeyebilir; teslimat ölçüsü mutlaka alınmalıdır.' },
      { id: 'rf2', title: 'Eski Etiket Sınıfıyla Övünme', explanation: 'Eski A+ ibaresi yeni etikette E-F\'ye denk gelebilir; yalnızca yıllık kWh ile kıyaslama yapın.' },
      { id: 'rf3', title: 'Süper Fiyatlı Statik Model Pazarlaması', explanation: 'Statik soğutmalı ucuz modelde dondurucunun elle buz çözme gerektirmesi pratikte büyük külfettir; bu açıkça ifade edilmelidir.' }
    ],
    questions: [
      { id: 'q1', question: 'Kapı menteşeleri yerinde değiştirilebiliyor mu ve bu ücretli mi?', whyItMatters: 'Yerleşim sonrası kapı yönü değişikliği gerekebilir; bazı modellerde bu servis işlemdir.', target: 'seller' },
      { id: 'q2', question: 'Kompresör ve soğutma gazı garanti süresi kaç yıl?', whyItMatters: 'Kompresör arızası buzdolabında en pahalı onarımdır; uzun garanti önemli bir güvencedir.', target: 'seller' },
      { id: 'q3', question: 'İlk çalıştırmada kaç saat sonra gıdalar yerleştirilebilir?', whyItMatters: 'Taşıma sonrası yağ dengesinin oturması beklenmelidir; kullanım kılavuzu değeri servisçe doğrulanabilir.', target: 'service' }
    ],
    scenarios: [
      { id: 'kisi-az', title: 'Tek Kişi / Çift', description: '250-300 litre, tek kapılı veya alt donduruculu, kompakt derinlik.', recommendedCriteriaIds: ['hacim', 'enerji'] },
      { id: 'aile', title: 'Aile (3-4 kişi)', description: '350-450 litre, no-frost, nem kontrollü kasa ve bol raf düzeni.', recommendedCriteriaIds: ['sogutma-tipi', 'hacim', 'ic-duzen'] },
      { id: 'stüdyo', title: 'Stüdyo / Salon Birleşik', description: '38-42 dB sessiz kompresör, sıcaklık bağımsız kontrolü.', recommendedCriteriaIds: ['ses', 'enerji'] }
    ],
    relatedGuideIds: ['camasir-makinesi-alirken', 'bulasik-makinesi-alirken', 'kurutma-makinesi-alirken'],
  },

  // 5. Airfryer Alırken
  {
    id: 'airfryer-alirken',
    slug: 'airfryer-alirken',
    categorySlug: 'ev-yasam',
    title: 'Airfryer Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Airfryer Alırken',
    description: 'Kapasite, watt gücü, kontrol paneli, kızartma performansı ve temizlik kolaylığına göre doğru airfryer seçme rehberi.',
    intro: [
      'Airfryer, hızlı sıcak hava dolaşımıyla az yağda pişirme sağlayan popeler arasına girmiş bir mutfak cihazıdır. Ancak kapasite ve watt uyumsuzluğu, "az pişen, dışı yanan" sonuçların en yaygın sebebidir.',
      'Evdeki kişilik sayısı ve mutfak tezgahındaki alan, doğru kase hacmini belirler. 2 kişilik bir hane için 4-5 litre yeterliyken, 4+ kişilik haneler 7-8 litre veya çift bölmeli modelleri gerektirir.',
      'Isıtma gücü ve fan hızı kontrolü, çıtır sonuç alınmasında belirleyici iki teknik faktördür.'
    ],
    keywords: ['airfryer', 'fritöz', 'hava fritözü', 'airfryer seçimi', 'yağsız kızartma', 'konveksiyonlu pişirme'],
    aliases: ['hava fritözü', 'yağsız kızartma makinesi', 'air fryer', 'fritöz'],
    estimatedReadTimeMinutes: 4,
    lastUpdated: '2026-09-15',
    status: 'published',
    importanceItems: [
      {
        id: 'kapasite',
        title: 'Kase Kapasitesi (Litre)',
        description: '1-2 kişi için 3-5 litre, 3-4 kişi için 5-7 litre, kalabalık hane için 8+ litre veya çift bölmeli modeller uygundur. Litre başına yaklaşık 200 g patates hesabı yapılabilir.',
        importance: 'critical'
      },
      {
        id: 'guc',
        title: 'Güç (Watt) ve Isıtma Performansı',
        description: '1400-1700 W aralığı standarttır. Düşük wattlı büyük kase, hızı ve çıtırlığı kaybeder. Sıcaklık aralığının en az 200°C\'ye çıkabilmesi gerekir.',
        importance: 'critical'
      },
      {
        id: 'kontrol',
        title: 'Kontrol Paneli ve Presetler',
        description: 'Dijital dokunmatik panel, sıcaklık ve süre hassasiyeti ile program hafızası sunar. Analog model basit ama esnektir; zamanlayıcı hassasiyeti önemli farktır.',
        importance: 'important'
      },
      {
        id: 'kase-ozellikleri',
        title: 'Kase Yapısı ve Çıkarılabilirlik',
        description: 'Seramik veya pürüzsüz kaplamalı, bulaşık makinesinde yıkanabilen kase temizlik konforunu belirler. Tel ızgara altlığı pişirme dengesi için önemlidir.',
        importance: 'important'
      },
      {
        id: 'guvenlik',
        title: 'Güvenlik Özellikleri',
        description: 'Aşırı ısınma koruması, kaymaz taban, soğuk tutulan kol ve kase çıkarıldığında otomatik durma güvenliği artırır.',
        importance: 'important'
      },
      {
        id: 'hacim-gurultu',
        title: 'Tezgah Alanı ve Çalışma Sesi',
        description: 'Airfryer çalışırken fan sesi üretir ve buhar çıkışının üstünde dolap olmamalıdır. Tezgah ölçüsü ve havalandırma boşluğu önceden planlanmalıdır.',
        importance: 'useful'
      }
    ],
    checklistItems: [
      { id: 'c1', text: 'Kişi sayısına uygun kase kapasitesini (litre) belirledim.', importance: 'critical' },
      { id: 'c2', text: 'Gücün en az 1400 W ve sıcaklığın 200°C\'ye ulaştığını kontrol ettim.', importance: 'critical' },
      { id: 'c3', text: 'Zamanlayıcı ve sıcaklık ayarının hassas olduğunu gördüm.', importance: 'important' },
      { id: 'c4', text: 'Kasenin bulaşık makinesinde yıkanabilir olduğunu doğruladım.', importance: 'important' },
      { id: 'c5', text: 'Aşırı ısınma koruması ve otomatik kapanma özelliklerini kontrol ettim.', importance: 'important' },
      { id: 'c6', text: 'Cihazın kaplayacağı tezgah alanını ve buhar çıkış boşluğunu ölçtüm.', importance: 'useful' },
      { id: 'c7', text: 'Yedek parça (kase, ızgara) bulunabilirliğini araştırdım.', importance: 'useful' }
    ],
    redFlags: [
      { id: 'rf1', title: 'Abartı Kapasite, Düşük Watt', explanation: '8 litre kase + 1200 W gibi kombinasyonlar hacmi doldurunca verim düşürür; orta kısım pişmez, üst kısım kurur.' },
      { id: 'rf2', title: 'Yıkanamayan veya Kaplaması Çabuk Dökülen Kase', explanation: 'Ucuz kaplama birkaç ayda soyulur; bu kalıntı riski taşır ve kase değişimi parça bulunamadığı için imkansız olabilir.' },
      { id: 'rf3', title: 'Sertifikasız İthal Ürünler', explanation: 'Elektrik güvenlik belgesi (CE/LVD) gösterilemeyen modellerde aşırı ısınma ve yangın riski yükselir.' }
    ],
    questions: [
      { id: 'q1', question: 'Kase ve ızgara için yedek parça satışı var mı?', whyItMatters: 'En sık yıpranan parçalar bunlardır; bulunamıyorsa cihaz tümüyle çöpe gider.', target: 'seller' },
      { id: 'q2', question: 'Garanti kapsamı rezistans ve fanı da kapsıyor mu?', whyItMatters: 'Isıtma elemanı arızası en pahalı parçadır; bazı garantiler yalnızca işçilik kapsar.', target: 'seller' },
      { id: 'q3', question: 'İlk kullanımda koku veya ses normal mi, ne kadar sürer?', whyItMatters: 'İlk ısınmada hafif koku normaldir; sürekli koku veya gürültü arıza habercisidir.', target: 'service' }
    ],
    scenarios: [
      { id: 'kucuk-hane', title: 'Tek Kişi / Öğrenci', description: '3-5 litre kompakt model, hızlı ısıtma, az tezgah alanı.', recommendedCriteriaIds: ['kapasite', 'hacim-gurultu'] },
      { id: 'aile', title: 'Aile', description: '7-8 litre veya çift bölmeli, 1700 W üstü güç, program hafızası.', recommendedCriteriaIds: ['kapasite', 'guc', 'kontrol'] },
      { id: 'saglikli-pisirme', title: 'Sağlıklı Pişirme Odaklı', description: 'Hassas sıcaklık kontrolü, az yağ programları ve kaplamasız/seramik kase.', recommendedCriteriaIds: ['kontrol', 'kase-ozellikleri'] }
    ],
    relatedGuideIds: ['ankastre-firin-alirken', 'espresso-makinesi-alirken', 'bulasik-makinesi-alirken'],
  },

  // 6. Espresso Makinesi Alırken
  {
    id: 'espresso-makinesi-alirken',
    slug: 'espresso-makinesi-alirken',
    categorySlug: 'ev-yasam',
    title: 'Espresso Makinesi Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Espresso Makinesi Alırken',
    description: 'Basınç değeri, kazan tipi, öğütücü entegrasyonu ve buhar gücü kriterleriyle evde doğru espresso makinesini seçme rehberi.',
    intro: [
      'Ev tipi espresso makineleri, kahve zincirlerinin o yoğun aromasını evde yakalamanın kapısını açar. Ancak 9 bar çekirdek basıncı, kazanın ısı kararlılığı ve öğütüm tazeliği bu lezzetin teknik temelini oluşturur.',
      'Hazır paket (kapsül/pod) kullanan makineler pratiklik sunarken, öğütücü dahil yarım/otomatik makineler aroma kontrolünü tamamen size bırakır. Bu seçim, kullanım rutininizi belirleyen ilk karardır.',
      'Ayrıca buhar gücü ve pid kontrollü sıcaklık, süt bazlı içeceklerde köpürme kalitesini doğrudan etkiler.'
    ],
    keywords: ['espresso makinesi', 'kahve makinesi', 'espresso', 'buharlı kahve makinesi', 'öğütücü', '9 bar'],
    aliases: ['kahve makinesi', 'espresso cihazı', 'coffee machine'],
    estimatedReadTimeMinutes: 5,
    lastUpdated: '2026-09-15',
    status: 'published',
    importanceItems: [
      {
        id: 'basinc',
        title: 'Pompa Basıncı (Bar)',
        description: 'Gerçek espresso için 9 bar çekim basıncı gerekir. "15-20 bar" pazarlama ifadesidir; genelde 15 bar pompa kullanılıp 9 bara ayarlanır. Anlık basınç dengesi lekeli aroma çıkarır.',
        importance: 'critical'
      },
      {
        id: 'kazan',
        title: 'Kazan / Isıtma Sistemi',
        description: 'Termoblok hızlı ısınır ama ısı dalgalanır; tek kazan kararlı ama süt buharı için bekleme yapar; çift kazan ve ısı değiştirici (HX) profesyonel kararlılık sunar. PID kontrolü sıcaklığı ±1°C tutar.',
        importance: 'critical'
      },
      {
        id: 'ogutucu',
        title: 'Öğütücü Var mı / Uyumlu mu',
        description: 'En taze aroma için çekirdek öğütmek şarttır. Dahili konik bıçaklı öğütücü veya harici kaliteli bir öğütücü, hazır pakete göre çok daha iyi sonuç verir. Öğütüm inceliği ayarlanabilir olmalıdır.',
        importance: 'critical'
      },
      {
        id: 'buhar',
        title: 'Süt Buharı Gücü ve Piston Tipi',
        description: 'Latte/cappuccino için güçlü buhar gerekir. Basit makinelerde pannerello (hava karıştıran) ucun yerine gerçek buhar ucu mikro köpük kalitesini belirler.',
        importance: 'important'
      },
      {
        id: 'filtre',
        title: 'Filtre Sepeti ve Boyutu',
        description: '54-58 mm sepetler standarttır; presleme (tamper) ve sepet kalitesi eşit dağılım sağlar. Basınçsız (dual wall) sepetler kolay ama gerçek krema kalitesi vermez.',
        importance: 'important'
      },
      {
        id: 'boyut-bakim',
        title: 'Tezgah Alanı ve Temizlik',
        description: 'Su haznesi hacmi, damlama tepsisi, kireç çözme programı ve grup başı temizlik kolaylığı, günlük rutini belirleyen faktörlerdir.',
        importance: 'useful'
      }
    ],
    checklistItems: [
      { id: 'c1', text: 'Çekim basıncının 9 bar olduğunu ve pompanın kalitesini kontrol ettim.', importance: 'critical' },
      { id: 'c2', text: 'Termoblok / tek kazan / çift kazan ayrımını anladım ve tercihim net.', importance: 'critical' },
      { id: 'c3', text: 'Dahili öğütücü var mı, yoksa harici öğütücü bütçemde mi kontrol ettim.', importance: 'critical' },
      { id: 'c4', text: 'Süt buhar ucunun gerçek buhar mı, pannerello mu olduğunu ayırt ettim.', importance: 'important' },
      { id: 'c5', text: 'Sıcaklık kontrolünün (PID/sabit termostat) nasıl çalıştığını araştırdım.', importance: 'important' },
      { id: 'c6', text: 'Tezgah yüksekliği ve makinenin üst kapak boşluğunu ölçtüm.', importance: 'important' },
      { id: 'c7', text: 'Yedek parça (grup contası, sepet, tamper) bulunabilirliğini kontrol ettim.', importance: 'useful' },
      { id: 'c8', text: 'Kireç çözme ve grup temizlik rutinini öğrendim.', importance: 'useful' }
    ],
    redFlags: [
      { id: 'rf1', title: '"20 Bar Profesyonel" Vurgusu', explanation: 'Yüksek bar pazarlama numarasıdır; espresso standardı 9 bardır ve daha fazlası aşırı ekstraksiyon (acı tat) üretir.' },
      { id: 'rf2', title: 'Yalnızca Hazır Pod Kullanan Ucuz Sistemler', explanation: 'Pod/paket makinelerde kahve önceden öğütüldüğü için aroma kaybı kalıcıdır; "espresso" tadı karamelle taklit edilir.' },
      { id: 'rf3', title: 'Buhar ve Espresso Aynı Anda Kullanılamayan Tek Termoblok', explanation: 'Kapasitesi düşük termobloklar buhara geçişte dakikalar bekletir ve sütü yakar; pratikte hayal kırıklığı yaratır.' }
    ],
    questions: [
      { id: 'q1', question: 'Grup contası ve sepet gibi sarf malzemeleri kolay bulunuyor mu?', whyItMatters: 'Contalar 6-12 ayda bir değişir; bulunmayan parça makineyi kullanılmaz hale getirir.', target: 'seller' },
      { id: 'q2', question: 'Sıcaklık PID ile kontrol edilebiliyor mu, termostat kaç derecede?', whyItMatters: 'Espresso için 92-96°C aralığı kritiktir; ayarlanamayan makinede deneme-yanılma maliyeti yüksek olur.', target: 'seller' },
      { id: 'q3', question: 'Kireç çözme hangi sıklıkla ve hangi malzemeyle yapılmalı?', whyItMatters: 'Sert su bölgelerinde kazan kireci en sık arıza sebebidir; doğru rutin ömrü uzatır.', target: 'service' }
    ],
    scenarios: [
      { id: 'gunluk-kahve', title: 'Günlük Filtre/Amerikano İçen', description: 'Dahili öğütücülü, haznesi geniş, hızlı ısınan model; espresso-nötr kullanım.', recommendedCriteriaIds: ['ogutucu', 'kazan'] },
      { id: 'sutlu-kahve', title: 'Latte / Cappuccino Sever', description: 'Güçlü buhar ucu, geniş buhar kazanı veya HX sistem, mikro köpük kontrolü.', recommendedCriteriaIds: ['buhar', 'kazan'] },
      { id: 'hobi-barista', title: 'Hobi Barista / Yolculuğa Başlayan', description: 'PID kontrollü tek kazan, preslanabilir sepet, manuel incelik ayarı olan öğütücü kombinasyonu.', recommendedCriteriaIds: ['basinc', 'kazan', 'ogutucu'] }
    ],
    relatedGuideIds: ['airfryer-alirken', 'hava-temizleyici-alirken', 'avize-alirken'],
  },

  // 7. Dikey Süpürge Alırken
  {
    id: 'dikey-supurge-alirken',
    slug: 'dikey-supurge-alirken',
    categorySlug: 'ev-yasam',
    title: 'Dikey Süpürge Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Dikey Süpürge Alırken',
    description: 'Emiş gücü (AW), filtre sistemi, batarya süresi, ağırlık ve toz hazne tipine göre doğru dikey (stick) süpürge seçme rehberi.',
    intro: [
      'Dikey süpürge, halısız veya az halılı modern evlerde günlük hızlı temizliğin en pratik aracıdır. Ancak zayıf emişli veya 15 dakikada şarjı biten bir model, pratiklik vaadini hızla kaybeder.',
      'Emiş gücünü değerlendirirken watt yerine hava wattı (AW) değerine bakılmalıdır; aynı 450 W motor iki farklı verimlilikle çalışabilir. Kablo ya da kablosuz seçimi, kullanım alışkanlığınıza göre netleştirilmelidir.',
      'HEPA filtre ve çok katmanlı filtrasyon, evde alerjisi olan bireyler varsa belirleyici kriterdir.'
    ],
    keywords: ['dikey süpürge', 'stick süpürge', 'kablosuz süpürge', 'hepa filtre', 'emiş gücü', 'elektrikli süpürge'],
    aliases: ['stick süpürge', 'kablosuz süpürge', ' elektrikli süpürge'],
    estimatedReadTimeMinutes: 4,
    lastUpdated: '2026-09-15',
    status: 'published',
    importanceItems: [
      {
        id: 'emis',
        title: 'Emiş Gücü (AW / AirWatt)',
        description: 'AirWatt, hava akış hızı ile basıncın bileşimidir ve gerçek emiş performansını yansıtır. Halıdan toz kaldırmak için en az 100 AW, güçlü modda 150+ AW önerilir.',
        importance: 'critical'
      },
      {
        id: 'batarya',
        title: 'Batarya Süresi ve Değiştirilebilirlik',
        description: 'Standart modda en az 30-40 dk, turbo modda 10-15 dk çalışma süresi gerekir. Değiştirilebilir bataryalı modellerde ikinci batarya ile kesintisiz kullanım mümkündür.',
        importance: 'critical'
      },
      {
        id: 'filtre',
        title: 'Filtre Sistemi (HEPA)',
        description: 'H13-H14 sınıfı HEPA filtre, alerjen ve ince tozun egzoza kaçmasını engeller. Yıkanabilir HEPA ve ara filtre uzun vadeli sarf maliyetini düşürür.',
        importance: 'critical'
      },
      {
        id: 'agirlik-ergonomi',
        title: 'Ağırlık ve Ergonomi',
        description: '2-3 kg aralığı tek elde kullanım için uygundur. Ayarlanabilir teleskopik boru, dönebilen başlık ve düşük ağırlık merkezi manevra kolaylığı sağlar.',
        importance: 'important'
      },
      {
        id: 'hazne',
        title: 'Toz Hazne Sistemi',
        description: '0.4-0.8 litre arası hazne pratiktir; tek dokunuşla boşaltılan, hava sızmayan sistemler toz temasını azaltır. Kullan-at torbalı modellerde tıkanma verimi düşürür.',
        importance: 'important'
      },
      {
        id: 'aksesuar',
        title: 'Aksesuar ve Mod Çeşitliliği',
        description: 'Halı/floor ana başlık, mini motorlu başlık (evcil hayvan tüyü için), yatak ucu ve koltuk ucu pratik kullanım alanını genişletir. Duvar askı-şarj istasyonu standart olmalıdır.',
        importance: 'useful'
      }
    ],
    checklistItems: [
      { id: 'c1', text: 'Emiş gücünün AW (AirWatt) değerini kontrol ettim.', importance: 'critical' },
      { id: 'c2', text: 'Batarya çalışma süresinin (standart/turbo mod) ihtiyacımı karşıladığını gördüm.', importance: 'critical' },
      { id: 'c3', text: 'H13+ HEPA filtre ve çok katmanlı filtrasyonun varlığını doğruladım.', importance: 'critical' },
      { id: 'c4', text: 'Ağırlığın tek elle kullanıma uygun (2-3 kg) olduğunu kontrol ettim.', importance: 'important' },
      { id: 'c5', text: 'Toz haznesinin kolay ve temiz boşaltıldığını gördüm.', importance: 'important' },
      { id: 'c6', text: 'Halı ve parke için ayrı başlık seçeneklerinin mevcudiyetini kontrol ettim.', importance: 'important' },
      { id: 'c7', text: 'Filtre ve batarya yedek parça bulunabilirliğini araştırdım.', importance: 'useful' }
    ],
    redFlags: [
      { id: 'rf1', title: 'Yüksek Motor Wattı = Yüksek Emiş Algısı', explanation: 'Motor wattı elektrik tüketimidir; 600 W motorlu bir model 150 AW altında kalabilir. Karşılaştırma AW ile yapılmalıdır.' },
      { id: 'rf2', title: 'Yalnızca Turbo Süresi Verilmesi', explanation: 'Reklamlarda belirtilen 45 dk genelde eco moddur; turbo (gerçek temizlik) modu 8-12 dk olabilir. İki değer de sorulmalıdır.' },
      { id: 'rf3', title: 'HEPA Yazmayan "Hepa Benzeri" Filtreler', explanation: 'Sertifikasız filtreler ince tozu tutamaz; alerjik bireyler için bu ayrım kriter seviyesindedir.' }
    ],
    questions: [
      { id: 'q1', question: 'Batarya kullanıcı tarafından değiştirilebilir mi, yedeği satılıyor mu?', whyItMatters: 'Li-ion batarya 2-3 yılda kapasite kaybeder; değişemiyorsa cihaz tümüyle değersizleşir.', target: 'seller' },
      { id: 'q2', question: 'HEPA filtre sınıfı nedir (H10-H14) ve yıkanabilir mi?', whyItMatters: 'Sınıf ne kadar yüksekse alerjen tutma oranı o kadar yüksektir; yıkanabilirlik sarf maliyetini düşürür.', target: 'seller' },
      { id: 'q3', question: 'Mini motorlu başlık ayrı mı satılıyor, fiyatı ne kadar?', whyItMatters: 'Evcil hayvan tüyü veya halı yoğun evde bu başlık asıl ihtiyaçtır.', target: 'seller' }
    ],
    scenarios: [
      { id: 'halisiz-ev', title: 'Halısız / Parke Ağırlıklı Ev', description: 'Orta AW (100-150), hafif gövde, uzun eco süresi, yumuşak fırçalı başlık.', recommendedCriteriaIds: ['agirlik-ergonomi', 'batarya'] },
      { id: 'evcil-hayvan', title: 'Evcil Hayvanlı Ev', description: 'Yüksek AW, mini motorlu başlık, H13 HEPA ve kolay yıkanabilir hazne.', recommendedCriteriaIds: ['emis', 'filtre', 'aksesuar'] },
      { id: 'alerjik', title: 'Alerjik Bireyli Ev', description: 'H14 HEPA, tam kapalı sistem, egzoz filtresi ve düşük toz temaslı boşaltım.', recommendedCriteriaIds: ['filtre', 'hazne'] }
    ],
    relatedGuideIds: ['robot-supurge-alirken', 'hava-temizleyici-alirken', 'hali-alirken'],
  },

  // 8. Hava Temizleyici Alırken
  {
    id: 'hava-temizleyici-alirken',
    slug: 'hava-temizleyici-alirken',
    categorySlug: 'ev-yasam',
    title: 'Hava Temizleyici Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Hava Temizleyici Alirken',
    description: 'CADR değeri, oda ölçüsü uyumu, HEPA sınıfı, ses seviyesi ve filtre maliyetiyle doğru hava temizleyici seçme rehberi.',
    intro: [
      'Hava temizleyici alırken en kritik kavram CADR (Clean Air Delivery Rate) değeridir: cihazın dakikada ne kadar temiz hava ürettiğini gösterir. Oda ölçüsüyle uyumsuz CADR, cihazın hiçbir şey yapmadığı hissine yol açar.',
      'İkinci kritik konu filtre sınıfıdır: gerçek HEPA H13-H14 filtreler 0.3 mikron partikülleri %99.95 oranında tutar. "HEPA benzeri" ifadeleri pazarlama dili olabilir.',
      'Ses seviyesi, özellikle yatak odasında gece kullanımı planlayanlar için belirleyici kriterdir.'
    ],
    keywords: ['hava temizleyici', 'air purifier', 'hepa filtre', 'cadr', 'alerjen', 'hava kalitesi', 'toz'],
    aliases: ['hava temizleme cihazı', 'air purifier', 'hava filtresi'],
    estimatedReadTimeMinutes: 4,
    lastUpdated: '2026-09-15',
    status: 'published',
    importanceItems: [
      {
        id: 'cadr',
        title: 'CADR Değeri ve Oda Ölçüsü Uyumu',
        description: 'Oda alanının (m²) yaklaşık 2 katı CADR (m³/saat veya CADR ft³/dk) hedeflenmelidir; 25 m² oda için 300+ m³/saat verimli çalışma sağlar. Hava değişimi saatte 2-3 kez olmalıdır.',
        importance: 'critical'
      },
      {
        id: 'filtre',
        title: 'HEPA Filtre Sınıfı ve Ön Filtre',
        description: 'EN 1822 standardına göre H13-H14 "gerçek HEPA"dır. Yıkanabilir ön filtre, ana HEPA\'nın ömrünü uzatır. Aktif karbon katmanı gaz koku ve VOC için gereklidir.',
        importance: 'critical'
      },
      {
        id: 'oda-alani',
        title: 'Önerilen Oda Alanı Doğruluğu',
        description: 'Üretici önerdiği m² değerini yüksek modda verir; sessiz modda etkin alan yarıya düşebilir. Yatak odası için sessiz mod CADR değeri sorulmalıdır.',
        importance: 'critical'
      },
      {
        id: 'ses',
        title: 'Ses Seviyesi (dB)',
        description: 'Gece modunda 25-30 dB fısıltı seviyesine yakın olmalıdır; yüksek modda 50-55 dB normaldir. Uyku ritmi hassas kişilerde 30 dB üstü rahatsız edici olabilir.',
        importance: 'important'
      },
      {
        id: 'filtre-maliyeti',
        title: 'Filtre Değişim Maliyeti',
        description: 'Filtreler 6-12 ayda bir değişir. Cihaz fiyatı ucuzken yıllık filtre seti cihazın yarısına ulaşabilir; sahte filtre riskine karşı resmi satış kanalı kontrol edilmelidir.',
        importance: 'important'
      },
      {
        id: 'sensor-akilli',
        title: 'Hava Kalitesi Sensörü ve Otomatik Mod',
        description: 'Partikül (PM2.5) sensörlü otomatik mod, kirlilik arttığında fanı hızlandırır ve tüketimi optimize eder. Uygulama desteği ve filtre ömrü göstergesi konfor ekler.',
        importance: 'useful'
      }
    ],
    checklistItems: [
      { id: 'c1', text: 'CADR değerinin oda alanımla uyumlu olduğunu hesapladım.', importance: 'critical' },
      { id: 'c2', text: 'H13-H14 sınıfı gerçek HEPA filtrenin varlığını doğruladım.', importance: 'critical' },
      { id: 'c3', text: 'Üreticinin önerdiği m² değerinin hangi modda verildiğini sordum.', importance: 'critical' },
      { id: 'c4', text: 'Gece/sessiz mod ses seviyesinin 30 dB altında olduğunu gördüm.', importance: 'important' },
      { id: 'c5', text: 'Yıllık filtre seti maliyetini hesapladım.', importance: 'important' },
      { id: 'c6', text: 'Koku/gaz için aktif karbon katmanının olup olmadığını kontrol ettim.', importance: 'important' },
      { id: 'c7', text: 'Otomatik mod ve partikül sensörü özelliğini değerlendirdim.', importance: 'useful' },
      { id: 'c8', text: 'Cihazın yerleşeceği yerde hava giriş-çıkışının kapanmayacağını kontrol ettim.', importance: 'useful' }
    ],
    redFlags: [
      { id: 'rf1', title: 'İyonizer/Plasma Teknolojisi Vurgusu', explanation: 'Yalnızca iyonizerli ve HEPA\'sız cihazlar ince partikül tutmada zayıftır; bazıları ozon üretir ve hassas akciğerler için risk oluşturur.' },
      { id: 'rf2', title: 'Oda Alanı Abartısı', explanation: '60 m² önerisi genelde en yüksek (gürültülü) mod içindir; sessiz modda etkin alan üçte bire düşebilir.' },
      { id: 'rf3', title: 'CADR Değeri Paylaşılmayan Modeller', explanation: 'Verimsiz bir fan ve filtre kombinasyonunu gizlemek için CADR belirtilmez; bu durumda karşılaştırma bilimsel temelden yoksundur.' }
    ],
    questions: [
      { id: 'q1', question: 'Filtre seti ne kadar, resmi satışı var mı ve taklit riskine karşı doğrulama nasıl?', whyItMatters: 'Sarf maliyeti uzun vadede cihaz fiyatını geçebilir; sahte filtre performansı düşürür.', target: 'seller' },
      { id: 'q2', question: 'Otomatik mod sensörü PM2.5 ölçüyor mu, kalibrasyon gerekiyor mu?', whyItMatters: 'Kalibrasyonsuz sensörler zamanla sapar ve otomatik mod yanlış hızda çalışır.', target: 'seller' },
      { id: 'q3', question: 'Ozon yayma testi/sertifikası var mı?', whyItMatters: 'İyonizer özellikli modellerde ozon seviyesi güvenlik sınırının altında olmalıdır.', target: 'service' }
    ],
    scenarios: [
      { id: 'yatak-odasi', title: 'Yatak Odası', description: '30 dB altı gece modu, sessiz mod CADR yeterliliği, küçük ayak izi.', recommendedCriteriaIds: ['ses', 'oda-alani'] },
      { id: 'salon', title: 'Salon / Geniş Alan', description: 'Yüksek CADR (400+ m³/s), otomatik mod, geniş hava giriş geometrisi.', recommendedCriteriaIds: ['cadr', 'sensor-akilli'] },
      { id: 'alerjik-astim', title: 'Alerji / Astım Hassasiyeti', description: 'H14 HEPA, tam kapalı gövde, ozon üretmeyen yapı ve düzenli filtre takvimi.', recommendedCriteriaIds: ['filtre', 'filtre-maliyeti'] }
    ],
    relatedGuideIds: ['dikey-supurge-alirken', 'su-aritma-cihazi-alirken', 'robot-supurge-alirken'],
  },

  // 9. Su Arıtma Cihazı Alırken
  {
    id: 'su-aritma-cihazi-alirken',
    slug: 'su-aritma-cihazi-alirken',
    categorySlug: 'ev-yasam',
    title: 'Su Arıtma Cihazı Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Su Arıtma Cihazı Alirken',
    description: 'Aritma teknolojisi (ters ozmoz/ultrafiltrasyon), filtre aşamaları, atık su oranı ve kapasite kriterleriyle doğru su arıtma cihazı seçme rehberi.',
    intro: [
      'Su arıtma cihazı seçiminde ilk adım, bölgenizdeki su kaynak analizini yapmaktır: kireç (sertlik), ağır metal, klor ve mikrobiyolojik yük, hangi teknolojinin gerekli olduğunu belirler.',
      'Ters ozmoz (RO) en kapsamlı arıtmayı sağlarken atık su üretir ve mineralleri de tutar; ultrafiltrasyon (UF) mineralleri korur ama çözünmüş tuzları arıtamayabilir. İhtiyaca göre doğru sistem seçilmelidir.',
      'Filtre değişim maliyeti ve servisin bölgenizde bulunması, uzun vadeli kullanımın iki belirleyici faktörüdür.'
    ],
    keywords: ['su arıtma cihazı', 'ters ozmoz', 'su filtresi', 'atık su oranı', 'mineral', 'arıtılmış su'],
    aliases: ['su arıtma', 'su filtreleme cihazı', 'ters ozmoz sistemi'],
    estimatedReadTimeMinutes: 5,
    lastUpdated: '2026-09-15',
    status: 'published',
    importanceItems: [
      {
        id: 'teknoloji',
        title: 'Aritma Teknolojisi (RO / UF / Nano)',
        description: 'Ters ozmoz (RO) 0.0001 mikron gözenekle ağır metal ve nitratı arıtır; ultrafiltrasyon 0.01 mikronla bakteri tutar ama mineral bırakır. Suyunuzun analizine göre teknoloji belirlenmelidir.',
        importance: 'critical'
      },
      {
        id: 'atik-su',
        title: 'Atık Su Oranı',
        description: 'Standart RO sistemler 1 litre temiz su için 2-3 litre atık üretir; su tasarruflu modeller bu oranı 1:1\'e indirir. Ev şebekesindeki basınç atık oranını etkiler.',
        importance: 'critical'
      },
      {
        id: 'filtre-asama',
        title: 'Filtre Aşama Yapısı',
        description: '5-7 aşamalı sistemlerde sediment, ön karbon, RO membranı, tat/mineral aşaması (alkalin) ve son karbon sıralanır. Her aşamanın değişim periyodu farklıdır (3-24 ay).',
        importance: 'critical'
      },
      {
        id: 'kapasite-basinc',
        title: 'Günlük Kapasite ve Şebeke Basıncı Uyumu',
        description: 'Membran kapasitesi (gallon/gün) hane tüketimini karşılamalıdır. Şebeke basıncı 3 bar altındaysa pompa Destegi (pompalı RO) gerekir.',
        importance: 'important'
      },
      {
        id: 'filtre-maliyet',
        title: 'Yıllık Filtre Maliyeti ve Servis Ağı',
        description: 'Yıllık filtre seti maliyeti cihaz fiyatına yaklaşabilir. Bölgenizde servis ve orijinal filtre bulunmuyorsa sistem zamanla işlevsizleşir.',
        importance: 'important'
      },
      {
        id: 'kurulum',
        title: 'Kurulum Yeri ve Ölçüler',
        description: 'Alt dolap içi yerleşim için gövde ölçüsü ve tank çapı ölçülmelidir. Tanksız (direct-flow) modeller yer tasarrufu sunar.',
        importance: 'useful'
      }
    ],
    checklistItems: [
      { id: 'c1', text: 'Bölgemdeki su analizini (sertlik, klor, ağır metal) yaptırdım veya verilerini inceledim.', importance: 'critical' },
      { id: 'c2', text: 'RO ve UF arasındaki tercihi su analizine göre yaptım.', importance: 'critical' },
      { id: 'c3', text: 'Atık su oranını ve tasarruf özelliklerini karşılaştırdım.', importance: 'critical' },
      { id: 'c4', text: 'Filtre aşamalarını ve her aşamanın değişim periyodunu netleştirdim.', importance: 'important' },
      { id: 'c5', text: 'Membran kapasitesinin hane tüketimine yettiğini kontrol ettim.', importance: 'important' },
      { id: 'c6', text: 'Şebeke basıncımı ölçtüm, pompalı modele ihtiyacım olup olmadığını belirledim.', importance: 'important' },
      { id: 'c7', text: 'Yıllık filtre seti maliyetini ve servis bulunabilirliğini araştırdım.', importance: 'important' },
      { id: 'c8', text: 'Kurulum yerinin (alt dolap/tezgah altı) ölçülerini aldım.', importance: 'useful' }
    ],
    redFlags: [
      { id: 'rf1', title: 'Su Analizi Yapılmadan Satış', explanation: 'Suyu analiz etmeden satılan RO sistemi, gerek yoksa mineralleri gereksiz yere eler; UF gerekirken satılan RO ağır metal riskini bırakabilir.' },
      { id: 'rf2', title: 'Atık Su Oranını Belirtmeyen Sistemler', explanation: 'Verimsiz membranlar 1 litre temiz su için 4 litre atık üretebilir; bu gider ve fatura farkı yıllık ciddi tutara ulaşır.' },
      { id: 'rf3', title: 'Filtresi Bulunmayan Ucuz İthal Ürünler', explanation: 'Markası belirsiz sistemlerin filtre setleri 1-2 yıl sonra bulunamaz hale gelir; sistem çöpe döner.' }
    ],
    questions: [
      { id: 'q1', question: 'Bu sistem bölgemin su analizine (sertlik, klor, nitrat) uygun mu?', whyItMatters: 'Yanlış teknoloji hem yetersiz arıtma hem gereksiz maliyet demektir.', target: 'seller' },
      { id: 'q2', question: 'Membran ve filtre setleri için yıllık maliyet nedir, stokta sürekli bulunuyor mu?', whyItMatters: 'Filtre bulunamadığında sistem kullanılamaz; maliyet öngörüsü bütçe planı için şarttır.', target: 'seller' },
      { id: 'q3', question: 'Kurulum ve ilk yıl bakım servisi ücrete tabi mi?', whyItMatters: 'Membran değişimi ve sanitasyon periyodik işlemlerdir; servis ücreti toplam maliyete eklenmelidir.', target: 'service' }
    ],
    scenarios: [
      { id: 'kirecli-su', title: 'Kireçli / Sert Su Bölgesi', description: 'Yüksek sertlikte ön filtre + RO; mineralleri geri kazanan alkalin son aşama.', recommendedCriteriaIds: ['teknoloji', 'filtre-asama'] },
      { id: 'sehir-suyu', title: 'Klorlu Şehir Suyu', description: 'Aktif karbon ağırlıklı sistem; tat ve koku düzelir, RO zorunlu olmayabilir.', recommendedCriteriaIds: ['teknoloji', 'filtre-maliyet'] },
      { id: 'kuyu-suyu', title: 'Kuyu / Kaynak Suyu', description: 'Mikrobiyolojik risk için UF veya RO + UV; nitrat ve ağır metal analizi zorunlu.', recommendedCriteriaIds: ['teknoloji', 'kapasite-basinc'] }
    ],
    relatedGuideIds: ['hava-temizleyici-alirken', 'buzdolabi-alirken', 'espresso-makinesi-alirken'],
  },

  // 10. Ankastre Fırın Alırken
  {
    id: 'ankastre-firin-alirken',
    slug: 'ankastre-firin-alirken',
    categorySlug: 'ev-yasam',
    title: 'Ankastre Fırın Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Ankastre Fırın Alırken',
    description: 'Isı dağılımı, fonksiyon çeşitliliği, buhar desteği, temizlik sistemi ve dolap ölçüleriyle doğru ankastre fırın seçme rehberi.',
    intro: [
      'Ankastre fırın seçiminde en kritik teknik konu ısı dağılımıdır: statik (alt-üst rezistans), turbo fan ve buhar destekli sistemler arasında pişirme sonucu ciddi fark yaratır.',
      '60 cm standart niş ölçüsüne rağmen dolap kapağı, buhar çıkış boşluğu ve elektrik bağlantısı gibi detaylar kurulumda sorun çıkarabilir. Ölçü kontrolü mutlaka dolap firmasıyla birlikte yapılmalıdır.',
      'Pirotik (kendi kendini temizleyen) sistem, ekran ve kablolu bağlantı gibi üst segment özellikler kullanım kolaylığını artırırken fiyatta da belirleyici olur.'
    ],
    keywords: ['ankastre fırın', 'ankastre set', 'turbo fırın', 'buharlı fırın', 'pirotik temizlik', 'fırın seçimi'],
    aliases: ['gömme fırın', 'ankastre fırın', 'built-in oven'],
    estimatedReadTimeMinutes: 5,
    lastUpdated: '2026-09-15',
    status: 'published',
    importanceItems: [
      {
        id: 'isi-dagilimi',
        title: 'Isı Dağılım Teknolojisi',
        description: 'Statik ısıda tek tepsi kararlı sonuç verir; turbo (fanlı) ısı çok tepsiyi dengeler; buhar destekli sistem hamur işlerinde iç nem ve kabuk dengesini iyileştirir. Çok katlı pişiren için turbo şarttır.',
        importance: 'critical'
      },
      {
        id: 'fonksiyonlar',
        title: 'Fonksiyon Çeşitliliği ve Programlar',
        description: 'Alt-üst ısı, turbo, turbo+alt ısı, grill, pizza, hamur işi, ayarlanabilir buhar seviyesi ve hızlı ön ısıtma günlük kullanımın temel fonksiyonlarıdır. Otomatik program sayısından çok doğruluk önemlidir.',
        importance: 'critical'
      },
      {
        id: 'olculer',
        title: 'Niş ve Dolap Ölçüleri',
        description: 'Standart ankastre fırın 60x60 nişa oturur ama derinlik, buhar çıkış boşluğu ve kapak-menteşe yerleşimi dolabın iç yapısına göre değişir. Elektrik bağlantısı (16A hat) önceden planlanmalıdır.',
        importance: 'critical'
      },
      {
        id: 'temizlik',
        title: 'Temizlik Sistemi',
        description: 'Pirotik (yüksek sıcaklıkla yakma) en etkili ama enerji tüketimlidir; katalitik paneller yağı parçalar; buharlı temizleme (aquaClean) pratik ve ekonomiktir.',
        importance: 'important'
      },
      {
        id: 'kapi-cam',
        title: 'Kapak Yalıtımı ve Cam Sayısı',
        description: '2-3 katlı kapak camı dış yüzey ısısını düşürür (çocuk güvenliği için kritik); tam çekme ray ve soft-close menteşe kullanım konforu sağlar.',
        importance: 'important'
      },
      {
        id: 'sicaklik-kontrol',
        title: 'Sıcaklık Hassasiyeti ve Gösterge',
        description: 'Dijital termostat ±5°C hassasiyetle pişirme kararlılığı sağlar; et probu (core temperature sensor) et pişirmede aşırı pişmeyi engeller.',
        importance: 'useful'
      }
    ],
    checklistItems: [
      { id: 'c1', text: 'Isı dağılım tipinin (statik/turbo/buhar) pişirme alışkanlığıma uygun olduğunu belirledim.', importance: 'critical' },
      { id: 'c2', text: 'Temel fonksiyonların (turbo, grill, pizza, ön ısıtma) tamamının mevcut olduğunu kontrol ettim.', importance: 'critical' },
      { id: 'c3', text: 'Dolap niş ölçülerini üretim firmasıyla doğruladım.', importance: 'critical' },
      { id: 'c4', text: 'Elektrik hattının (16A/priz veya direkt bağlantım) uygunluğunu kontrol ettim.', importance: 'critical' },
      { id: 'c5', text: 'Temizlik sisteminin (pirotik/katalitik/buhar) türünü ve maliyetini araştırdım.', importance: 'important' },
      { id: 'c6', text: 'Kapak camı sayısını ve dış yüzey ısısı güvenliğini kontrol ettim.', importance: 'important' },
      { id: 'c7', text: 'Ray ve tepsi aksesuarlarının (derin tepsi, ızgara) dahil olduğunu doğruladım.', importance: 'useful' },
      { id: 'c8', text: 'Ankastre setteki diğer ürünlerle (ocak/aspire) tasarım uyumunu değerlendirdim.', importance: 'useful' }
    ],
    redFlags: [
      { id: 'rf1', title: 'Niş Ölçüsü Doğrulanmadan Satış', explanation: 'Dolap firması ankastre ölçüsünü revize etmediyse 59.5 cm gövde bile yerleşimde sorun çıkarabilir; montajdan önce teknik föy ölçüleri paylaşılmalıdır.' },
      { id: 'rf2', title: 'Buharlı Fırın Algısı (Su Püskürten Ürünler)', explanation: 'Gerçek buharlı fırın kazan ve buhar jeneratörüne sahiptir; ufak su haznesiyle nem veren modeller "buharlı" diye satılır ama sonuç vermez.' },
      { id: 'rf3', title: 'Enerji Sınıfı Belirsiz Modeller', explanation: 'Fırında enerji sınıfı ısı yalıtımıyla ilgilidir; D-F sınıfı modeller hem yavaş ısınır hem dışarıya ısı kaybeder.' }
    ],
    questions: [
      { id: 'q1', question: 'Fırının tam model ölçüleri için teknik föy paylaşılabilir mi?', whyItMatters: 'Dolap üreticisi nişi bu ölçüye göre keser; yanlış ölçü montajı imkansız hale getirir.', target: 'seller' },
      { id: 'q2', question: 'Tepsi ve ray gibi aksesuarlar dahil mi, yedekleri bulunuyor mu?', whyItMatters: 'Eksik gelen aksesuarlar ayrıca alınması gereken maliyet kalemleridir.', target: 'seller' },
      { id: 'q3', question: 'İlk kullanım ön temizliği ve ilk yanma kokusu için ne öneriliyor?', whyItMatters: 'Rezistans koruyucu kaplama ilk çalıştırmada koku yapar; doğru prosedür güvenliği etkiler.', target: 'service' }
    ],
    scenarios: [
      { id: 'hamur-isi', title: 'Hamur İşi / Ekmek Ağırlıklı', description: 'Buhar destekli sistem, alt ısı güçlendirme, hassas termostat.', recommendedCriteriaIds: ['isi-dagilimi', 'sicaklik-kontrol'] },
      { id: 'gunluk-aile', title: 'Günlük Aile Mutfağı', description: 'Turbo fan, çok tepsi pişirme, kolay temizlik (buharlı), dayanıklı kapak.', recommendedCriteriaIds: ['isi-dagilimi', 'temizlik', 'kapi-cam'] },
      { id: 'mutfak-yenileme', title: 'Mutfak Yenileme / Ankastre Set', description: 'Ocak, aspire ve davlumbaz ile tasarım ve ölçü uyumu; 16A elektrik planı.', recommendedCriteriaIds: ['olculer', 'fonksiyonlar'] }
    ],
    relatedGuideIds: ['bulasik-makinesi-alirken', 'buzdolabi-alirken', 'airfryer-alirken'],
  },

  // 11. Yatak Alırken
  {
    id: 'yatak-alirken',
    slug: 'yatak-alirken',
    categorySlug: 'ev-yasam',
    title: 'Yatak Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Yatak Alırken',
    description: 'Yay sistemi, sünger yoğunluğu, sertlik seviyesi, ölçüler ve kalite belgeleri ile doğru yatak seçme rehberi.',
    intro: [
      'Yatak, günde 7-8 saat geçirilen ve omurga sağlığını doğrudan etkileyen mobilyadır. Yanlış sertlik veya kalitesiz sünger, bel ve boyun ağrılarının en sık ev içi sebeplerinden biridir.',
      'Yatak seçiminde üç teknik başlık belirleyicidir: yay sistemi (bonell, pocket yay, sünger yatak), sünger yoğunluğu (dns) ve sertlik seviyesi (yumuşak-orta-sert). Uyku pozisyonunza göre ideal sertlik farklıdır.',
      'Ayrıca kumaşın içerdiği dolgu, kenar desteği ve hijyen sertifikaları (OEKO-TEX, LGA) kalite göstergesidir.'
    ],
    keywords: ['yatak', 'yatak seçimi', 'pocket yay', 'sünger yoğunluğu', 'visko yatak', 'bel ağrısı yatak'],
    aliases: ['şilte', 'yatak', 'mattress'],
    estimatedReadTimeMinutes: 5,
    lastUpdated: '2026-09-15',
    status: 'published',
    importanceItems: [
      {
        id: 'yay-sistemi',
        title: 'Yay Sistemi Tipi',
        description: 'Bonell yay ucuz ama hareketi tüm yatağa yayar; pocket (bağımsız) yay her yayı ayrı çalıştırır, partner hareketini izole eder ve destek kalitesi yüksektir. Visko/lateks katmanlar basınç dağılımını iyileştirir.',
        importance: 'critical'
      },
      {
        id: 'sunger-yogunluk',
        title: 'Sünger Yoğunluğu (DNS)',
        description: 'Üst katman sünger yoğunluğu en az 28-32 DNS olmalıdır; 25 DNS altı sünger 1-2 yılda çöker. Visko katmanlarda yoğunluk 50+ DNS kalite göstergesidir.',
        importance: 'critical'
      },
      {
        id: 'sertlik',
        title: 'Sertlik Seviyesi ve Uyku Pozisyonu',
        description: 'Yan uyuyanlar orta-yumuşak, sırt üstü uyuyanlar orta-sert, yüzükoyun uyuyanlar sert yatakta omurga hizası korur. 80-90 kg üstü kullanıcılar destek artırıcı sert modelleri tercih etmelidir.',
        importance: 'critical'
      },
      {
        id: 'olculer',
        title: 'Ölçüler ve Yatak Tabanı Uyumu',
        description: 'Tek kişilik 90x200, çift kişilik 160x200 standarttır. Yatak yüksekliği ve taban (bazalı/akordiyon/düz) seçimi yatak odası ölçüsüne göre planlanmalıdır.',
        importance: 'important'
      },
      {
        id: 'kumas-hijyen',
        title: 'Kumaş, Dolgu ve Hijyen Sertifikaları',
        description: 'OEKO-TEX 100 (zararlı madde testi) ve benzeri belgeler kumaş güvenliğini gösterir. Yıkanabilir fermuarlı dış kılıf uzun vadeli hijyen sağlar.',
        importance: 'important'
      },
      {
        id: 'deneme',
        title: 'Mağazada Deneme ve İade Hakkı',
        description: 'En az 10-15 dakika gerçek uyku pozisyonunda deneme yapılmalıdır. Bazı üreticiler 30-100 gece evde deneme imkanı sunar; bu hak sözleşmede yer almalıdır.',
        importance: 'useful'
      }
    ],
    checklistItems: [
      { id: 'c1', text: 'Yay sistemi tipini (bonell/pocket/visko) ve katman yapısını inceledim.', importance: 'critical' },
      { id: 'c2', text: 'Sünger yoğunluğunun (DNS) etikette yazdığını ve 28+ olduğunu kontrol ettim.', importance: 'critical' },
      { id: 'c3', text: 'Uyku pozisyonuma uygun sertlik seviyesini belirledim.', importance: 'critical' },
      { id: 'c4', text: 'Yatak ölçüsünün oda ve taban yapısıyla uyumunu kontrol ettim.', importance: 'important' },
      { id: 'c5', text: 'OEKO-TEX veya benzeri hijyen/zararlı madde sertifikasını sorguladım.', importance: 'important' },
      { id: 'c6', text: 'En az 10-15 dakika gerçek pozisyonumda yatakta deneme yaptım.', importance: 'critical' },
      { id: 'c7', text: 'Eşimle birlikte yatağı denedim, hareket izolasyonunu test ettim.', importance: 'important' },
      { id: 'c8', text: 'Garanti süresini (yatak gövdesi ve sünger için ayrı) öğrendim.', importance: 'useful' }
    ],
    redFlags: [
      { id: 'rf1', title: 'Yoğunluk Belgesi Gösterilmeyen Sünger', explanation: 'Yoğunluk yazılmadan "yüksek kalite sünger" ifadesi anlam taşımaz; 1 yıl içinde çöken yataklar genelde 22-25 DNS sünger içerir.' },
      { id: 'rf2', title: 'Aşırı Yumuşak "Otel Konforu" Pazarlaması', explanation: 'Çok yumuşak yatak yan uyuyanda omurga hizasını bozar; mağazada 2 dakikalık deneme yanıltıcı olabilir.' },
      { id: 'rf3', title: 'Aşırı İndirimli Visko İddiaları', explanation: 'Gerçek visko (50+ DNS) pahalıdır; "visko" adını taşıyan 28 DNS süngerler kısa sürede kalıcı iz oluşturur.' }
    ],
    questions: [
      { id: 'q1', question: 'Kullandığınız süngerin yoğunluk (DNS) değeri ve üreticisi nedir?', whyItMatters: 'Yoğunluk yatağın ömrünü belirleyen ana teknik veridir; belge gösterilemiyorsa kalite şüphelidir.', target: 'seller' },
      { id: 'q2', question: 'Yatakta çökme olması garanti kapsamında mı, çökme eşiği kaç mm?', whyItMatters: 'Birçok garanti yalnızca 20-30 mm üzeri çökmeyi kusur sayar; altındaki deformasyon kapsam dışı kalır.', target: 'seller' },
      { id: 'q3', question: 'Evde deneme süresi ve iade şartları nedir?', whyItMatters: 'Yatak konforu ancak haftalarla anlaşılır; deneme hakkı olmayan satın alma risklidir.', target: 'seller' }
    ],
    scenarios: [
      { id: 'bel-agrisi', title: 'Bel Ağrısı Olan', description: 'Sert-orta pocket yay + destek artırıcı zonlar; bel bölgesinde ekstra takviye.', recommendedCriteriaIds: ['yay-sistemi', 'sertlik'] },
      { id: 'cift', title: 'Çift / Farklı Kilolar', description: 'Hareket izolasyonu yüksek pocket yay; gerekirse çift zonlu (dual) yapı.', recommendedCriteriaIds: ['yay-sistemi', 'deneme'] },
      { id: 'yan-uyuyan', title: 'Yan Uyuyan', description: 'Orta-yumuşak üst katman, basınç dağıtan visko/lateks, omuz-kalça bölgesi esnekliği.', recommendedCriteriaIds: ['sertlik', 'sunger-yogunluk'] }
    ],
    relatedGuideIds: ['yastik-alirken', 'koltuk-alirken', 'perde-alirken'],
  },

  // 12. Koltuk Alırken
  {
    id: 'koltuk-alirken',
    slug: 'koltuk-alirken',
    categorySlug: 'ev-yasam',
    title: 'Koltuk Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Koltuk Alırken',
    description: 'İskelet malzemesi, dolgu kalitesi, kumaş dayanıklılığı (Martindale), ölçüler ve modülerlik kriterleriyle doğru koltuk seçme rehberi.',
    intro: [
      'Koltuk, evin en çok kullanılan ve en pahalı mobilya parçalarından biridir. Görsel çekiciliğin arkasında iskelet, dolgu ve kumaş kalitesi, 5 yıl sonraki memnuniyeti belirler.',
      'Kumaş dayanıklılığı Martindale (sürtünme) testiyle ölçülür: günlük kullanım için 20.000, yoğun kullanım ve evcil hayvan için 40.000+ çevrim gerekir. Dolguda 32+ DNS yüksek elastik (HR) sünger formülü araştırılmalıdır.',
      'Salon ölçüsü, kapıdan giriş imkânı ve modülerlik ihtiyacı, satın almadan önce netleştirilmesi gereken pratik konulardır.'
    ],
    keywords: ['koltuk', 'koltuk takımı', 'martindale', 'chester koltuk', 'modüler koltuk', 'kanepe'],
    aliases: ['kanepe', 'sedir', 'koltuk takımı', 'sofa'],
    estimatedReadTimeMinutes: 5,
    lastUpdated: '2026-09-15',
    status: 'published',
    importanceItems: [
      {
        id: 'iskelet',
        title: 'İskelet Malzemesi ve Üretim Şekli',
        description: 'Masif ahşap veya kontrplak iskelet uzun ömürlüdür; yonga levha (MDF) iskelet nem ve yük altında zamanla esner. İskelet garantisi 5+ yıl olmalıdır.',
        importance: 'critical'
      },
      {
        id: 'dolgu',
        title: 'Dolgu Kalitesi (Sünger DNS / Elastikiyet)',
        description: 'Oturum süngeri 32-35 DNS yüksek dayanıklı (HR) olmalıdır. Sırt ve kol desteklerinde elyaf/sünger kombinasyonu konforu dengeler. 25 DNS altı dolgu 2-3 yılda çöker.',
        importance: 'critical'
      },
      {
        id: 'kumas',
        title: 'Kumaş Dayanıklılığı (Martindale) ve Temizlik',
        description: '20.000+ Martindale günlük kullanım standardıdır. Leke tutmaz, su itici ve çıkarılabilir kılıf seçenekleri bakım kolaylığı sağlar; evcil hayvanlı evde tüy tutmayan dokuma tercih edilmelidir.',
        importance: 'critical'
      },
      {
        id: 'olcu',
        title: 'Salon Ölçüsü ve Yerleşim Planı',
        description: 'Koltuk derinliği ve yüksekliği oturma konforunu, toplam ölçü ise yürüme alanını etkiler. Kapı, koridor ve asansör ölçüsü teslimat için kritik kontrol noktalarıdır.',
        importance: 'critical'
      },
      {
        id: 'modulerlik',
        title: 'Modülerlik ve Dönüştürülebilirlik',
        description: 'Modüler koltuklar taşınma ve yerleşim değişikliğinde esneklik sağlar. Mekanizmalı (yatak olabilen) modellerde mekanizma tipi ve garanti süresi sorulmalıdır.',
        importance: 'important'
      },
      {
        id: 'ergonomi',
        title: 'Oturum Yüksekliği ve Sırt Desteği',
        description: 'Oturum yüksekliği 42-45 cm, derinlik 50-55 cm çoğu kullanıcı için ergonomiktir. Yaşlı bireylerin kalkması için daha yüksek ve sert oturum uygundur.',
        importance: 'useful'
      }
    ],
    checklistItems: [
      { id: 'c1', text: 'İskelet malzemesinin masif/kontrplak olduğunu ve garanti süresini sorguladım.', importance: 'critical' },
      { id: 'c2', text: 'Oturum süngerinin 32+ DNS ve yüksek elastik (HR) olduğunu kontrol ettim.', importance: 'critical' },
      { id: 'c3', text: 'Kumaşın Martindale değerinin 20.000+ olduğunu doğruladım.', importance: 'critical' },
      { id: 'c4', text: 'Salon ölçüsünü çıkardım, koltuğun yerleşim planını çizdim.', importance: 'critical' },
      { id: 'c5', text: 'Kapı, koridor ve asansörden geçiş ölçülerini kontrol ettim.', importance: 'important' },
      { id: 'c6', text: 'Oturup en az 10 dakika deneme yaptım.', importance: 'important' },
      { id: 'c7', text: 'Kılıf çıkarılabilir mi, yıkanabilir mi kontrol ettim.', importance: 'important' },
      { id: 'c8', text: 'Mekanizma (yataklı) varsa mekanizma garantisini ayrıca sordum.', importance: 'useful' }
    ],
    redFlags: [
      { id: 'rf1', title: 'Martindale Değeri Paylaşılmayan Kumaş', explanation: 'Dayanım testi verisi olmayan kumaş birkaç yılda aşınır ve lekelenir; değer yazılı teknik föy istenmelidir.' },
      { id: 'rf2', title: 'Aşırı Yumuşak Gösterim Odası Konforu', explanation: 'Mağazada yumuşacık görünen 25 DNS dolgu kısa sürede oturur; gerçek konfor yoğunluk verisiyle birlikte değerlendirilmelidir.' },
      { id: 'rf3', title: 'Ölçüsüz Sipariş ve Girişte Kalan Takım', explanation: 'Vitrinden alınan takımın kapıdan veya asansörden geçmemesi iade sürecini doğurur; modüler geçiş ölçüleri önceden hesaplanmalıdır.' }
    ],
    questions: [
      { id: 'q1', question: 'Oturum süngerinin DNS değeri ve tipi (HR/visko) nedir?', whyItMatters: 'Yoğunluk verisi olmayan dolgu 1-2 yıl içinde çöker ve garanti kapsamına girmez.', target: 'seller' },
      { id: 'q2', question: 'Kumaşın Martindale (sürtünme dayanımı) değeri kaç çevrim?', whyItMatters: 'Günlük kullanımda 15.000 altı kumaş kısa sürede keçeleşir.', target: 'seller' },
      { id: 'q3', question: 'İskelet ve mekanizma garantisi birbirinden ayrı mı, süreleri nedir?', whyItMatters: 'Genel garanti iskeleti dışlar; net süreler yazılı garanti kapsamında alınmalıdır.', target: 'seller' }
    ],
    scenarios: [
      { id: 'aile-salonu', title: 'Aile Salonu', description: '40.000+ Martindale kumaş, dayanıklı HR dolgu, leke tutmaz yüzey, geniş modüler yapı.', recommendedCriteriaIds: ['kumas', 'dolgu', 'modulerlik'] },
      { id: 'kucuk-ev', title: 'Küçük Ev / Stüdyo', description: 'Kompakt ölçü, yatak olabilen mekanizma, depolama alanı.', recommendedCriteriaIds: ['olcu', 'modulerlik'] },
      { id: 'evcil-hayvan', title: 'Evcil Hayvanlı Ev', description: 'Tüy tutmayan sık dokuma, çıkarılabilir yıkanabilir kılıf, pençe direnci yüksek kumaş.', recommendedCriteriaIds: ['kumas', 'ergonomi'] }
    ],
    relatedGuideIds: ['yatak-alirken', 'yemek-masasi-alirken', 'hali-alirken'],
  },

  // 13. Yemek Masası Alırken
  {
    id: 'yemek-masasi-alirken',
    slug: 'yemek-masasi-alirken',
    categorySlug: 'ev-yasam',
    title: 'Yemek Masası Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Yemek Masası Alırken',
    description: 'Masa üstü malzemesi, ayak sağlamlığı, ölçü-kişi hesabı ve genişletme mekanizması kriterleriyle doğru yemek masası seçme rehberi.',
    intro: [
      'Yemek masası, hem günlük kullanım hem misafir ağırlama kapasitesi açısından doğru ölçülendirilmelidir. Kişi başına 60 cm masa kenarı ve 40 cm derinlik, rahat oturmanın temel hesabıdır.',
      'Masa üstü malzemesi (masif ahşap, kaplama, cam, sinterstone/seramik) dayanıklılık, sıcak bardak ve çizilme direnci bakımından ciddi farklar taşır. Ayak yapısı ve dingil sistemi ise stabiliteyi belirler.',
      'Genişletme (butterfly/damalı) mekanizması, nadiren kalabalık sofralar kuran haneler için alan tasarrufu sağlar.'
    ],
    keywords: ['yemek masası', 'yemek masası seçimi', 'masif masa', 'genişleyen masa', 'ayaklı masa', 'sinterstone'],
    aliases: ['yemek takımı', 'masa', 'dining table'],
    estimatedReadTimeMinutes: 4,
    lastUpdated: '2026-09-15',
    status: 'published',
    importanceItems: [
      {
        id: 'olcu-kisi',
        title: 'Ölçü ve Kişi Hesabı',
        description: 'Kişi başına 60 cm en, 40 cm derinlik hesaplanır; 140x80 cm masa 6 kişiyu dar, 160x90 cm 6-8 kişiyi rahat oturtur. Sandalye geri çekme mesafesi için masa çevresinde 75-90 cm boşluk gerekir.',
        importance: 'critical'
      },
      {
        id: 'ust-malzeme',
        title: 'Masa Üstü Malzemesi',
        description: 'Masif ahşap sıcak ve tamir edilebilir; kaplama (lake/mdf) ekonomik ama nem hassasiyeti taşır; temperli cam şık ama parmak izi gösterir; sinterstone/seramik ısı ve çizilme direncinde en üst düzeydedir.',
        importance: 'critical'
      },
      {
        id: 'ayak-saglamlık',
        title: 'Ayak Yapısı ve Stabilite',
        description: 'Tek ayak (pedestal) merkezde bacak alanı geniştir; 4 ayaklı yapıda iskelet bağlantılarının sağlamlığı sarkmayı önler. Ahşap ayak-kasa birleşimlerinde kavela/lama kalınlığı sorulmalıdır.',
        importance: 'critical'
      },
      {
        id: 'genisleme',
        title: 'Genişletme Mekanizması',
        description: 'Butterfly veya dara kayar mekanizma misafir kapasitesini artırır. Ray kalitesi, kilit sistemi ve genişletilmiş halde stabilite test edilmelidir.',
        importance: 'important'
      },
      {
        id: 'sandalye-uyum',
        title: 'Sandalye Yükseklik Uyumu',
        description: 'Masa yüksekliği standart 75 cm, sandalye oturumu 45 cm olmalı; aradaki 28-30 cm fark dirsek konforu için idealdir. Kolçaklı sandalyeler masa altına girebilmelidir.',
        importance: 'important'
      },
      {
        id: 'bakim',
        title: 'Yüzey İşlemi ve Bakım',
        description: 'Vernik/cila tipi leke ve su direncini belirler; yağ bazlı işlem bakım ister ama çizikleri tamir eder. Sinterstone ve laminate bakım gerektirmez.',
        importance: 'useful'
      }
    ],
    checklistItems: [
      { id: 'c1', text: 'Hane ve misafir sayısına göre kişi başı 60 cm hesabıyla ölçü belirledim.', importance: 'critical' },
      { id: 'c2', text: 'Masa üstü malzemesinin ısı/leke/çizilme direncini karşılaştırdım.', importance: 'critical' },
      { id: 'c3', text: 'Ayak yapısını ve bağlantı noktalarının sağlamlığını kontrol ettim.', importance: 'critical' },
      { id: 'c4', text: 'Masa çevresinde sandalye çekme boşluğunu (75-90 cm) ölçtüm.', importance: 'critical' },
      { id: 'c5', text: 'Genişletme mekanizmasını mağazada test ettim.', importance: 'important' },
      { id: 'c6', text: 'Sandalye-masa yükseklik uyumunu (28-30 cm fark) kontrol ettim.', importance: 'important' },
      { id: 'c7', text: 'Kapı, koridor ve asansörden geçiş ölçülerini doğruladım.', importance: 'important' },
      { id: 'c8', text: 'Yüzey bakım gereksinimlerini (cila/yağ) öğrendim.', importance: 'useful' }
    ],
    redFlags: [
      { id: 'rf1', title: 'İnce Lameli "Masif" Sunmak', explanation: 'Yalnızca 0.6 mm kaplamalı MDF üzeri ürünler masif gibi satılır; kenar profilinden ve ağırlıkdan anlaşılabilir, tamir hakkı yoktur.' },
      { id: 'rf2', title: 'Genişletme Rayı Test Edilmemesi', explanation: 'Ucuz raylı daralar zamanla sıkışır ve genişletilmiş halde masa dengesiz durur; mağazada en az 5 kez aç-kapa test edilmelidir.' },
      { id: 'rf3', title: 'Kapıdan Geçmeyen Tek Parça Gövde', explanation: 'Bazı geniş masalar demonte girmez; dairenin girişini ve dönüşleri ölçek hesaplamadan sipariş vermek teslimatta geri dönüş demektir.' }
    ],
    questions: [
      { id: 'q1', question: 'Masa üstü tam masif mi, kaplama mı; kalınlığı kaç mm?', whyItMatters: 'Masiflik fiyatı ve ömrü doğrudan etkiler; kaplama masiften daha az tamir edilebilir.', target: 'seller' },
      { id: 'q2', question: 'Genişletme mekanizması garantisi var mı, yedek parçası bulunuyor mu?', whyItMatters: 'Ray arızası masayı sabit ölçüye hapseder.', target: 'seller' },
      { id: 'q3', question: 'Cila/vernik yüzeyde sıcak tabak ve leke garantisi nasıl?', whyItMatters: 'Bakım koşulları yerine getirilmezse garanti geçersiz sayılabilir.', target: 'service' }
    ],
    scenarios: [
      { id: 'cekirdek-aile', title: 'Çekirdek Aile (4 kişi)', description: '140x80 cm, dayanıklı üst yüzey, kompakt ayak yapısı.', recommendedCriteriaIds: ['olcu-kisi', 'ust-malzeme'] },
      { id: 'misafirci', title: 'Misafir Ağırlayan / Kalabalık Aile', description: '160 cm+ genişleyen dara, güçlü dingil, 8+ kişi kapasitesi.', recommendedCriteriaIds: ['genisleme', 'ayak-saglamlık'] },
      { id: 'kucuk-mutfak', title: 'Küçük Mutfak / Stüdyo', description: '90-110 cm yuvarlak veya katlanır yapı, tek pedestal ayak.', recommendedCriteriaIds: ['olcu-kisi', 'sandalye-uyum'] }
    ],
    relatedGuideIds: ['koltuk-alirken', 'gardirop-alirken', 'calisma-masasi-alirken'],
  },

  // 14. Gardırop Alırken
  {
    id: 'gardirop-alirken',
    slug: 'gardirop-alirken',
    categorySlug: 'ev-yasam',
    title: 'Gardırop Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Gardırop Alırken',
    description: 'İç hacim planı, gövde malzemesi, ray ve menteşe kalitesi, kapak sistemi ve ölçü uyumuyla doğru gardırop seçme rehberi.',
    intro: [
      'Gardırop alırken en sık yapılan hata dış görünüşe karar verip iç hacmi düşünmemektir. Askı çubuğu yüksekliği, raf derinliği ve çekmece düzeni, günlük kullanım konforunu belirleyen asıl kriterlerdir.',
      'Gövde malzemesi (suntalam, MDF-lake, masif kapak) ve aksesuar kalitesi (ray, menteşe, yavaşlatıcılı kapanma) gardırobun 10 yıl sonraki durumunu tayin eder.',
      'Kayar kapaklı (sürgülü) modeller dar odalarda alan kazandırır; iki kapaklı klasik sistemler daha geniş eşzamanlı erişim sağlar.'
    ],
    keywords: ['gardirop', 'gardırop seçimi', 'kayar kapaklı gardırop', 'gömme gardırop', 'mefe gardırop', 'iç düzenleme'],
    aliases: ['şifonyer', 'elbise dolabı', 'gömme dolap'],
    estimatedReadTimeMinutes: 4,
    lastUpdated: '2026-09-15',
    status: 'published',
    importanceItems: [
      {
        id: 'ic-hacim',
        title: 'İç Hacim Planı ve Bölümleme',
        description: 'Uzun elbise bölümü 150+ cm, ceket-gömlek askısı 100-110 cm yükseklik gerektirir. Raf derinliği 50-55 cm optimumdur; çekmece yüksekliği 15-25 cm arası pratiktir. Kişi başı 80-100 cm askı alanı hesaplanır.',
        importance: 'critical'
      },
      {
        id: 'govde-malzeme',
        title: 'Gövde ve Kapak Malzemesi',
        description: '18 mm suntalam (yonga levha) standart ve ekonomiktir; MDF-lake kapaklar ağır ve pürüzsüzdür. Kapak ağırlığına uygun menteşe taşıma kapasitesi (7 kg+) kontrol edilmelidir.',
        importance: 'critical'
      },
      {
        id: 'aksesuar',
        title: 'Ray, Menteşe ve Yavaşlatıcı Kalitesi',
        description: 'Fırça kayar kapak rayları sessiz ve uzun ömürlüdür. Menteşelerde yavaşlatıcı (soft-close) ve ayar imkânı olmalıdır. Aksesuarın değiştirilebilir ve piyasada bulunur olması kritik ömür faktörüdür.',
        importance: 'critical'
      },
      {
        id: 'olcu',
        title: 'Ölçü ve Yerleşim Uyumu',
        description: 'Gardırop derinliği dahili 55-60 cm olmalı; kayar kapaklı modellerde kapak alanı için ek 10 cm hesaba katılır. Tavan yüksekliği, süpürgelik çıkıntısı ve radyatör konumu ölçümde dikkate alınmalıdır.',
        importance: 'critical'
      },
      {
        id: 'kapak-sistemi',
        title: 'Kapak Sistemi Seçimi (Açılır / Kayar)',
        description: 'Kayar kapak dar odada kapı önünde alan bırakmaz ama aynı anda tek bölüme erişim verir. Açılır kapak tam görünürlük sağlar ama önünde 70-90 cm açıklık gerektirir.',
        importance: 'important'
      },
      {
        id: 'aydinlatma-aksesuar',
        title: 'Aydınlatma ve Modüler Aksesuarlar',
        description: 'LED iç aydınlatma, otomatik sensörlü açma, kravat-kuşak bölücü ve pantolon askıcı gibi eklemeler kullanım kalitesini artırır; sonradan eklenme imkânı olup olmadığı sorulmalıdır.',
        importance: 'useful'
      }
    ],
    checklistItems: [
      { id: 'c1', text: 'Askı, raf ve çekmece bölmelerini giyim alışkanlığıma göre planladım.', importance: 'critical' },
      { id: 'c2', text: 'Gövde ve kapak malzemesinin tipini (suntalam/MDF-lake) ve kalınlığını kontrol ettim.', importance: 'critical' },
      { id: 'c3', text: 'Ray ve menteşe markasını/kalitesini ve yedek bulunabilirliğini sorguladım.', importance: 'critical' },
      { id: 'c4', text: 'Duvar ölçülerini (yükseklik, genişlik, süpürgelik, tavan eğimi) aldım.', importance: 'critical' },
      { id: 'c5', text: 'Kapak sistemi tercihinin (kayar/açılır) oda düzenine uyduğunu doğruladım.', importance: 'important' },
      { id: 'c6', text: 'Menteşelerde soft-close (yavaşlatıcı) olup olmadığını kontrol ettim.', importance: 'important' },
      { id: 'c7', text: 'Kapak ve modül geçiş renk seçeneklerini değerlendirdim.', importance: 'useful' },
      { id: 'c8', text: 'Montaj ücreti ve süresinin kapsamını netleştirdim.', importance: 'useful' }
    ],
    redFlags: [
      { id: 'rf1', title: 'Aksesuar Markası Belirsiz Modeller', explanation: 'Kayar kapak rayı veya menteşe arızalandığında muadili bulunamayan ürünlerde onarım tüm modülü işlevsiz kılar; aksesuarın cinsi yazılı olmalıdır.' },
      { id: 'rf2', title: 'Dahili Derinlik ile Dış Derinlik Karışıklığı', explanation: '60 cm dış derinlik, dolap içi 50 cm\'ye karşılık gelebilir; montajdan sonra askıların tam sığmaması sık yaşanan sorundur.' },
      { id: 'rf3', title: 'Süpürgelik ve Tavan Eğimi Ölçüsü Alınmadan Sipariş', explanation: 'Duvarda 2 cm çıkıntı gardırobun düz oturmasını engeller; yerinde ölçüm hizmeti olmadan verilen sipariş iade sürecine dönüşebilir.' }
    ],
    questions: [
      { id: 'q1', question: 'Ray ve menteşeler hangi marka/standarttır, yedekleri nasıl bulunur?', whyItMatters: 'Gardırobun ömrünü en çok aksesuar belirler; bilinen aksesuar garantisi değişim imkânı verir.', target: 'seller' },
      { id: 'q2', question: 'Verilen derinlik dış mı dahili mi ölçüdür?', whyItMatters: 'Askı ve raf planı dahili ölçüye göre yapılır; yanlış yorum yerleşim hatasına yol açar.', target: 'seller' },
      { id: 'q3', question: 'Yerinde ölçüm ve montaj hizmeti ücrete dahil mi?', whyItMatters: 'Duvar düzgünsüzlükleri standart modülle kapanmaz; ölçüm hizmeti ek maliyet kalemi olabilir.', target: 'service' }
    ],
    scenarios: [
      { id: 'kisi-az', title: 'Tek Kişi / Az Kıyafet', description: '120-150 cm genişlik, uzun elbise + raf dengesi, ekonomik suntalam gövde.', recommendedCriteriaIds: ['ic-hacim', 'govde-malzeme'] },
      { id: 'cift', title: 'Çift / Yoğun Gardırop', description: '240 cm+ genişlik, çift askı sırası, bol çekmece, soft-close aksesuar.', recommendedCriteriaIds: ['ic-hacim', 'aksesuar'] },
      { id: 'dar-oda', title: 'Dar Oda / Küçük Yatak Odası', description: 'Kayar kapaklı sistem, dahili 55 cm derinlik, ayna kapak seçeneği.', recommendedCriteriaIds: ['kapak-sistemi', 'olcu'] }
    ],
    relatedGuideIds: ['yatak-alirken', 'yemek-masasi-alirken', 'perde-alirken'],
  },

  // 15. Çalışma Masası Alırken
  {
    id: 'calisma-masasi-alirken',
    slug: 'calisma-masasi-alirken',
    categorySlug: 'ev-yasam',
    title: 'Çalışma Masası Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Çalışma Masası Alırken',
    description: 'Masa ölçüsü, yükseklik ayarı, malzeme dayanıklılığı, kablo yönetimi ve ergonomi kriterleriyle doğru çalışma masası seçme rehberi.',
    intro: [
      'Uzun saatler geçirilen çalışma masasında ölçü ve ergonomi, verimliliği ve boyun-bel sağlığını doğrudan etkiler. Otururken dirsek yüksekliğiyle masa yüksekliği uyumsuzsa omuz ve bilek zorlanması kaçınılmazdır.',
      'Yükseklik ayarlı (sit-stand) masalar, gün içinde pozisyon değiştirerek hareketli çalışmayı mümkün kılar; sabit masada ise 72-76 cm standart yükseklik aralığına dikkat edilmelidir.',
      'Kablo yönetimi, ayak stabilitesi ve malzemenin uzun süreli yük altındaki davranışı, günün sonunda fark edilen detaylardır.'
    ],
    keywords: ['çalışma masası', 'yükseklik ayarlı masa', 'ergonomik masa', 'bilgisayar masası', 'home office', 'sit-stand masa'],
    aliases: ['bilgisayar masası', 'ofis masası', 'home office masası'],
    estimatedReadTimeMinutes: 4,
    lastUpdated: '2026-09-15',
    status: 'published',
    importanceItems: [
      {
        id: 'olcu',
        title: 'Masa Ölçüsü ve Derinliği',
        description: 'Çift monitör veya geniş ekran için 140x70 cm alt sınır, 160x80 cm rahat kullanım ölçüsüdür. 60 cm altı derinlik monitörü göze yaklaştırır; en az 70 cm derinlik önerilir.',
        importance: 'critical'
      },
      {
        id: 'yukseklik',
        title: 'Yükseklik ve Ayarlanabilirlik',
        description: 'Sabit masa 72-76 cm standardındadır. Elektrikli/pnömatik sit-stand masalar 65-125 cm arası ayarlanarak oturma ve ayakta çalışmayı birleştirir; kol dayama yüksekliği dirsek hizasında olmalıdır.',
        importance: 'critical'
      },
      {
        id: 'ayak-stabilite',
        title: 'Ayak Yapısı ve Yük Taşıma Kapasitesi',
        description: 'TekgetColumn (tek dikme) tasarımlar minimalist ama çift monitör + konsol yükünde titreşebilir. T tipi veya H tipi ayak, yüksek kapasiteli motor (100 kg+) ile birleştiğinde stabilize kalır.',
        importance: 'critical'
      },
      {
        id: 'kablo-yonetim',
        title: 'Kablo Yönetimi ve Prize Erişim',
        description: 'Masa altı kablo kanalı, üst yüzey prize/giriş modülü ve monitor arm uyumu masayı düzenli tutar. Sit-stand masada uzatma kablosunun hareket mesafesi hesaba katılmalıdır.',
        importance: 'important'
      },
      {
        id: 'malzeme',
        title: 'Malzeme ve Yüzey Dayanıklılığı',
        description: 'Laminat yüzeyler çizilmeye dayanıklı ve ekonomiktir; ahşap dokulu doğal malzeme sıcak görünür ama bakım ister. Nem ve leke direnci, güneş gören konum için önemlidir.',
        importance: 'important'
      },
      {
        id: 'motor',
        title: 'Sit-Stand Motor Gücü ve Hafıza',
        description: 'Elektrikli modellerde motor sayısı (tek/çift), ses seviyesi ve programlanabilir yükseklik hafızası konfor farkı yaratır. El çarklı mekanizma sessiz ama yavaştır.',
        importance: 'useful'
      }
    ],
    checklistItems: [
      { id: 'c1', text: 'Monitör/ekran sayıma göre masa ölçüsünü (en az 140x70 cm) belirledim.', importance: 'critical' },
      { id: 'c2', text: 'Masa yüksekliğinin oturma pozisyonumla uyumunu kontrol ettim.', importance: 'critical' },
      { id: 'c3', text: 'Sit-stand tercih ediyorsam ayar aralığının (65-125 cm) boyuma uygun olduğunu doğruladım.', importance: 'critical' },
      { id: 'c4', text: 'Ayak yapısının ve motor kapasitesinin (100 kg+) ekipman yükümü taşıdığını kontrol ettim.', importance: 'critical' },
      { id: 'c5', text: 'Kablo kanalı ve prize erişim çözümünün varlığını gördüm.', importance: 'important' },
      { id: 'c6', text: 'Yüzey malzemesinin çizilme ve leke direncini değerlendirdim.', importance: 'important' },
      { id: 'c7', text: 'Odaya giriş ve kapı geçiş ölçülerini kontrol ettim.', importance: 'important' },
      { id: 'c8', text: 'Motor garantisi (sit-stand modellerde) ve servis ağını sorguladım.', importance: 'useful' }
    ],
    redFlags: [
      { id: 'rf1', title: 'Zayıf Motorlu Geniş Sit-Stand Masalar', explanation: '80 cm derinlikte 120 cm genişlikte masayı tek motor kaldırırken yorulur; asimetrik yükte takılma ve erken arıza yapar.' },
      { id: 'rf2', title: 'Kablo Düzeni Düşünülmemiş Tasarımlar', explanation: 'Kablo deliği olmayan masalarda kablolar yüzeyden sarkar; sit-stand modelde uzatma kablosu kopma riski taşır.' },
      { id: 'rf3', title: 'Aşırı Yüksek/Sıfır Ayarlı Sabit Masalar', explanation: 'Sabit 80 cm masa 160 cm boyundaki kullanıcıda omuz yükseltir; ayar imkânı olmayan ölçülerde sandalye telafisi sınırlı kalır.' }
    ],
    questions: [
      { id: 'q1', question: 'Motor garanti süresi kaç yıl ve Türkiye\'de servisi var mı?', whyItMatters: 'Sit-stand motoru masanın en pahalı parçasıdır; servisi olmayan modelde arıza tüm masayı çalışmaz hale getirir.', target: 'seller' },
      { id: 'q2', question: 'Ayar aralığı kaç cm, yükseklik hafızası kaç program saklıyor?', whyItMatters: 'Ortak kullanılan masalarda hafıza özelliği günlük ayar süresini kısaltır.', target: 'seller' },
      { id: 'q3', question: 'Masa yüzeyinde sıcak Laptop veya kahve lekesi garanti kapsamında mı?', whyItMatters: 'Yüzey hasarları genelde kullanıcı hatası sayılır; dayanım sınırları netleştirilmelidir.', target: 'service' }
    ],
    scenarios: [
      { id: 'home-office', title: 'Home Office / Uzaktan Çalışan', description: '140-160 cm genişlik, kablo modülü, monitor arm uyumu, dayanıklı laminat.', recommendedCriteriaIds: ['olcu', 'kablo-yonetim', 'malzeme'] },
      { id: 'sit-stand', title: 'Aşırı Oturmayan / Sağlık Odaklı', description: 'Elektrikli ayarlı 65-125 cm, çift motor, hafızalı kontrol paneli.', recommendedCriteriaIds: ['yukseklik', 'motor', 'ayak-stabilite'] },
      { id: 'ogrenci', title: 'Öğrenci / Küçük Oda', description: '100-120 cm kompakt ölçü, sağlam ayak, ekonomik sabit yükseklik.', recommendedCriteriaIds: ['olcu', 'ayak-stabilite'] }
    ],
    relatedGuideIds: ['calisma-koltugu-alirken', 'monitor-alirken', 'gardirop-alirken'],
  },

  // 16. Yastık Alırken
  {
    id: 'yastik-alirken',
    slug: 'yastik-alirken',
    categorySlug: 'ev-yasam',
    title: 'Yastık Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Yastık Alırken',
    description: 'Uyku pozisyonuna göre yükseklik ve sertlik, dolgu malzemesi, yıkanabilirlik ve alerjen kriterleriyle doğru yastık seçme rehberi.',
    intro: [
      'Yastık, boyun hizasını koruyan ve uyku kalitesini doğrudan etkileyen üründür. Yanlış yükseklikte yastık, boyun ağrısının ve uykuda dönme sıklığının birinci sebebidir.',
      'Seçimin temel kuralı uyku pozisyonudur: yan uyuyan yüksekçe, sırt üstü uyuyan orta, yüzükoyun uyuyan ince yastığa ihtiyaç duyar. Dolgu malzemesi ise destek ve nefes alabilirlik dengesini belirler.',
      'Yıkanabilirlik ve alerjen koruma, hijyen açısından uzun vadeli kullanımın iki kilit noktasıdır.'
    ],
    keywords: ['yastık', 'yastık seçimi', 'visko yastık', 'boyun ağrısı yastığı', 'pamuk yastık', 'uyku pozisyonu'],
    aliases: ['baş yastığı', 'boyun yastığı', 'pillow'],
    estimatedReadTimeMinutes: 3,
    lastUpdated: '2026-09-15',
    status: 'published',
    importanceItems: [
      {
        id: 'uyku-pozisyonu',
        title: 'Uyku Pozisyonuna Göre Yükseklik',
        description: 'Yan uyuyan 12-14 cm, sırt üstü uyuyan 8-10 cm, yüzükoyun uyuyan 6-8 cm yastık yüksekliğinde boyun hizası korunur. Yükseklik başvurusu için omuz genişliği de dikkate alınmalıdır.',
        importance: 'critical'
      },
      {
        id: 'dolgu',
        title: 'Dolgu Malzemesi ve Destek',
        description: 'Visko (bellek) sünger basıncı eşit dağıtır ama sıcak tutabilir; lateks nefes alır ve kalıcıdır; mikroelyaf yumuşak ve yıkanabilir; kuş tüyü hafif ama alerjen riski taşır.',
        importance: 'critical'
      },
      {
        id: 'sertlik',
        title: 'Sertlik ve Baş Dönüşü Direnci',
        description: 'Yastık çok yumuşaksa gece içinde çöker, çok sertse boynu yukarı iter. Orta sertlikte, bastığında hızla geri dönen dolgu ideal dengeyi sağlar.',
        importance: 'important'
      },
      {
        id: 'hijyen',
        title: 'Yıkanabilirlik ve Alerjen Koruma',
        description: 'Tamamen yıkanabilir dolgular (mikroelyaf) ve 60°C yıkama kabiliyeti akar bakteriyel yükü azaltır. Kılıfın OEKO-TEX sertifikalı olması kimyasal güvenlik sağlar.',
        importance: 'important'
      },
      {
        id: 'kalinlik-olcu',
        title: 'Ölçü ve Vücut Uyumu',
        description: 'Standart 50x70 cm tek kişilik kullanım için yeterlidir. Geniş omuzlu kullanıcılar yan uykuda ekstra yüksekliğe; çocuklarda daha küçük ölçü ve ince dolguya ihtiyaç vardır.',
        importance: 'useful'
      },
      {
        id: 'koku-hava',
        title: 'Nefes Alabilirlik ve Isı Dengesi',
        description: 'Visko yastıklarda jel-katman veya hava kanalı olan modeller ısı birikimini azaltır. Nefes alabilir kılıf kumaşı (pamuk/bambu) gece terlemesini hafifletir.',
        importance: 'useful'
      }
    ],
    checklistItems: [
      { id: 'c1', text: 'Ana uyku pozisyonuma göre hedef yükseklik aralığını belirledim.', importance: 'critical' },
      { id: 'c2', text: 'Dolgu malzemesinin (visko/lateks/mikroelyaf/tüy) artılarını eksilerini değerlendirdim.', importance: 'critical' },
      { id: 'c3', text: 'Yastığın yıkanabilir olup olmadığını ve yıkama sıcaklığını kontrol ettim.', importance: 'important' },
      { id: 'c4', text: 'Bastırdığımda hızla geri dönen orta sert destek verdiğini denedim.', importance: 'critical' },
      { id: 'c5', text: 'Kılıfın OEKO-TEX veya benzeri sertifikasını sorguladım.', importance: 'important' },
      { id: 'c6', text: 'Isıya hassas isem nefes alabilir/jel katmanlı yapıyı araştırdım.', importance: 'useful' },
      { id: 'c7', text: 'Deneme/iade hakkının olup olmadığını kontrol ettim.', importance: 'useful' }
    ],
    redFlags: [
      { id: 'rf1', title: 'Her Pozisyona Uygun Tek Yastık İddiası', explanation: 'Yan ve yüzükoyun uykunun yükseklik ihtiyacı zıttır; tek ürünle her pozisyonu kapsamak teknik olarak mümkün değildir.' },
      { id: 'rf2', title: 'Yoğunluğu Yazılmayan Visko Yastıklar', explanation: '40 DNS altı visko çöker ve yastık kısa sürede şekil kaybeder; gerçek visko yoğunluğu etikette yer almalıdır.' },
      { id: 'rf3', title: 'Yıkanamayan Dolgu + Antibakteriyel Vaadi', explanation: 'Yıkanamayan dolguda hijyen ancak kimyasal katkıyla sağlanabilir; bu da hassas ciltte tahriş riski taşır.' }
    ],
    questions: [
      { id: 'q1', question: 'Bu yastığın dolgu yoğunluğu ve yüksekliği kaç cm?', whyItMatters: 'Visko/lateks yastıklarda yoğunluk ömür göstergesidir; yükseklik pozisyon uygunluğunu belirler.', target: 'seller' },
      { id: 'q2', question: 'Dolgu tamamen mi yıkanıyor, kaç derecede yıkanabiliyor?', whyItMatters: 'Yalnızca kılıf yıkanabilen modellerde iç hijyen sağlanamaz.', target: 'seller' },
      { id: 'q3', question: 'Uyuma testi için deneme süresi var mı?', whyItMatters: 'Yastık konforu ancak birkaç gecelik kullanımla anlaşılır; deneme hakkı risksiz seçim sağlar.', target: 'seller' }
    ],
    scenarios: [
      { id: 'yan-uyuyan', title: 'Yan Uyuyan', description: '12-14 cm yüksek, omuzu dengeleyen dolgu (lateks/visko).', recommendedCriteriaIds: ['uyku-pozisyonu', 'sertlik'] },
      { id: 'sirt-ustu', title: 'Sırt Üstü Uyuyan', description: '8-10 cm orta yükseklik, boyun eğrisini dolduran visko yapı.', recommendedCriteriaIds: ['uyku-pozisyonu', 'dolgu'] },
      { id: 'alerjik', title: 'Alerjik / Hassas', description: 'Tam yıkanabilir mikroelyaf, OEKO-TEX kılıf, tüy içermez yapı.', recommendedCriteriaIds: ['hijyen', 'koku-hava'] }
    ],
    relatedGuideIds: ['yatak-alirken', 'perde-alirken', 'hali-alirken'],
  },

  // 17. Perde Alırken
  {
    id: 'perde-alirken',
    slug: 'perde-alirken',
    categorySlug: 'ev-yasam',
    title: 'Perde Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Perde Alırken',
    description: 'Işık geçirgenliği, kumaş tipi, ölçü alma, mekanizma ve ses/ısı yalıtımı kriterleriyle doğru perde seçme rehberi.',
    intro: [
      'Perde hem ışık kontrolü hem mekanın karakterini belirleyen bir öğedir. Karartma ihtiyacı, gündüz Mahremiyeti ve ses/ısı yalıtımı beklentisi, seçilecek kumaş ve mekanizmayı doğrudan belirler.',
      'Ölçü alma, en sık hata yapılan adımdır: perde kolunun yüksekliği ve kumaş genişliğinin pencere ölçüsüne oranı, nasıl drape (döküm) yapacağını belirler. Genişlik pencerenin en az 2 katı alınmalıdır.',
      'Mekanizma (korniş, ray, zebra-stor) kullanım kolaylığı ve görünümü etkiler; motorlu sistemler uzaktan kumandalı konfor sağlar.'
    ],
    keywords: ['perde', 'karartma perde', 'zebra perde', 'stor perde', 'perde ölçüsü', 'perde kumaşı'],
    aliases: ['tül', 'stor', 'zebra perde', 'karartma perde'],
    estimatedReadTimeMinutes: 4,
    lastUpdated: '2026-09-15',
    status: 'published',
    importanceItems: [
      {
        id: 'isik-kontrol',
        title: 'Işık Geçirgenliği ve Karartma Oranı',
        description: 'Blackout kumaş %95-99 ışık keser; dimout %70-80 kısıtlar; tül filtreler. Yatak odası için blackout, salon için dimout+tül kombinasyonu standart çözümdür.',
        importance: 'critical'
      },
      {
        id: 'kumas',
        title: 'Kumaş Tipi ve Ağırlık (g/m²)',
        description: 'Kumaşın gramajı dökümünü ve yalıtımını etkiler; 280+ g/m² blackout kumaşlar hem ışığı hem sesi daha iyi keser. Renk haslığı ve güneşte solma direnci güney cepheli odalarda kritiktir.',
        importance: 'critical'
      },
      {
        id: 'olcu',
        title: 'Ölçü Alma ve Döküm Hesabı',
        description: 'Perde genişliği pencere/delik genişliğinin 2-2.5 katı alınmalı tam döküm için; boy kolun üstünden zemine 1-2 cm payla hesaplanır. Zebra/stor perdede montaj yüzeyi (duvar/tavan) ve kasa derinliği ölçülmelidir.',
        importance: 'critical'
      },
      {
        id: 'mekanizma',
        title: 'Mekanizma ve Montaj Sistemi',
        description: 'Raylı sistem yumuşak döküm verir; zebra-stor pratik ışık kademesi sağlar; motorlu mekanizmalar yüksek pencerelerde konfor sunar. Mekanizmanın sessizliği ve çocuğu olan evlerde güvenlik kilidi önemlidir.',
        importance: 'important'
      },
      {
        id: 'yalitim',
        title: 'Ses ve Isı Yalıtım Katkısı',
        description: 'Ağır, astarlı blackout kumaşlar kışın ısı kaybını, yazın güneş ısısını azaltır. Çift katman (tül+perde) yalıtımda en etkili düzenektir.',
        importance: 'important'
      },
      {
        id: 'bakim',
        title: 'Temizlik ve Bakım',
        description: 'Kumaşın yıkanabilir mi kuru temizleme mi gerektirdiği uzun vadeli maliyeti belirler. Zebra perde silinebilir yapısıyla pratiktir; tül perde sık yıkanabilir olmalıdır.',
        importance: 'useful'
      }
    ],
    checklistItems: [
      { id: 'c1', text: 'Odanın ışık kontrolü ihtiyacını (blackout/dimout/tül) belirledim.', importance: 'critical' },
      { id: 'c2', text: 'Kumaş gramajını ve karartma oranını karşılaştırdım.', importance: 'critical' },
      { id: 'c3', text: 'Pencere ölçüsünü aldım; genişliği 2-2.5 kat hesapladım.', importance: 'critical' },
      { id: 'c4', text: 'Montaj yüzeyini (duvar/tavan/kasa) ve mekanizma uyumunu kontrol ettim.', importance: 'critical' },
      { id: 'c5', text: 'Mekanizma tipinin (ray/stor/zebra/motorlu) kullanım kolaylığını değerlendirdim.', importance: 'important' },
      { id: 'c6', text: 'Temizlik gereksinimini (yıkanabilir/kuru temizleme) öğrendim.', importance: 'useful' },
      { id: 'c7', text: 'Renk haslık/solma direnci bilgisi aldım.', importance: 'useful' },
      { id: 'c8', text: 'Montaj hizmetinin dahil olup olmadığını netleştirdim.', importance: 'useful' }
    ],
    redFlags: [
      { id: 'rf1', title: 'Ölçüsüz Sipariş ve Kısa Gelen Perde', explanation: 'Hazır ölçü perdeler çoğu pencereye ya kısa ya dökümsüz gelir; yerinde ölçü alınmadan yapılan siparişte iade zorlaşır.' },
      { id: 'rf2', title: '"Karartma" Etiketli %70 Dimout Kumaş', explanation: 'Gerçek blackout %95+ ışık keser; dimout kumaş sabah ışığını geçirir ve uyku bölünmesi yaşatır.' },
      { id: 'rf3', title: 'Zayıf Zebra Mekanizması', explanation: 'Ucuz zincirli mekanizmalar kısa sürede saplanır; kumaşın makaradan kayması onarımı güç ve maliyetlidir.' }
    ],
    questions: [
      { id: 'q1', question: 'Bu kumaşın karartma oranı yüzde kaç, blackout mu dimout mu?', whyItMatters: 'Yatak odasında dimout kumaş sabah ışığını geçirir; yanlış seçim uykuyu böler.', target: 'seller' },
      { id: 'q2', question: 'Kumaş gramajı (g/m²) nedir ve güneşte solma garantisi var mı?', whyItMatters: 'Ağır kumaş daha iyi yalıtır ama soluyorsa görünüm hızla bozulur; haslık test bilgisi alınmalıdır.', target: 'seller' },
      { id: 'q3', question: 'Montaj ve ölçü hizmeti ücrete dahil mi?', whyItMatters: 'Yanlış ölçüde tamiri olmayan ürün iade süreci doğurur; profesyonel ölçü riski sıfıra indirir.', target: 'service' }
    ],
    scenarios: [
      { id: 'yatak-odasi', title: 'Yatak Odası', description: 'Blackout %95+ kumaş, çift katman tül+perde, sessiz ray sistemi.', recommendedCriteriaIds: ['isik-kontrol', 'kumas', 'yalitim'] },
      { id: 'salon', title: 'Salon / Geniş Pencere', description: 'Dimout + tül kombinasyonu, motorlu mekanizma, solmaya dayanıklı renk.', recommendedCriteriaIds: ['isik-kontrol', 'mekanizma'] },
      { id: 'calisma-odasi', title: 'Çalışma Odası / Ekran Yansıması', description: 'Zebra kademe kontrolü, ekran parlamasını kesen yönlü kumaş.', recommendedCriteriaIds: ['isik-kontrol', 'mekanizma'] }
    ],
    relatedGuideIds: ['avize-alirken', 'hali-alirken', 'yatak-alirken'],
  },

  // 18. Halı Alırken
  {
    id: 'hali-alirken',
    slug: 'hali-alirken',
    categorySlug: 'ev-yasam',
    title: 'Halı Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Halı Alırken',
    description: 'Malzeme türü, dokuma sıklığı, yumuşaklık, kaymaz taban ve bakım kolaylığı kriterleriyle doğru halı seçme rehberi.',
    intro: [
      'Halı, salonun sıcaklığını ve akustiğini belirleyen en etkili yumuşak yüzeydir. Yanlış malzeme veya kaydırıcısız taban, hem konforu hem güvenliği olumsuz etkiler.',
      'Sentetik (polipropilen, polyester) halılar lekelenmeye dayanıklı ve ekonomiktir; yün halı doğal, uzun ömürlü ve pahalıdır; viskon/pamuk karışımları orta noktada konumlanır.',
      'Dokuma sıklığı (metrekareye düşen nokta/ilmik sayısı) hem görünüm keskinliğini hem dayanıklılığı belirler; yoğun dokuma daha uzun ömürlüdür.'
    ],
    keywords: ['halı', 'halı seçimi', 'yün halı', 'makine halısı', 'kaymaz taban', 'shaggy halı'],
    aliases: ['carpet', 'kilim', 'makine halısı'],
    estimatedReadTimeMinutes: 4,
    lastUpdated: '2026-09-15',
    status: 'published',
    importanceItems: [
      {
        id: 'malzeme',
        title: 'Malzeme Türü (Sentetik / Yün / Viskon)',
        description: 'Polipropilen leke tutmaz ve çocuklu/evcil hayvanlı eve uygundur; yün doğal ve elastik ama bakım ister; viskon ipek hissi verir ancak ıslaklığa hassastır.',
        importance: 'critical'
      },
      {
        id: 'dokuma',
        title: 'Dokuma Sıklığı ve Yüksekliği',
        description: 'Metrekarede 1 milyon nokta üzeri dokuma keskin desen ve uzun ömür sağlar. Shaggy (uzun tüy) yumuşaktır ama toz tutar; kısa ilmikli halı temizliği kolaydır.',
        importance: 'critical'
      },
      {
        id: 'taban',
        title: 'Kaymaz Taban ve Güvenlik',
        description: 'Kaydırmaz lateks/jüt taban halının yerinde sabit durmasını sağlar; yoksa ayrıca halı kaydırıcı alınmalıdır. Çocuk ve yaşlı bireyler için bu güvenlik kalemidir.',
        importance: 'critical'
      },
      {
        id: 'olcu',
        title: 'Ölçü ve Yerleşim Uyumu',
        description: 'Salon halısı oturma grubunun ön ayaklarını içine alacak genişlikte (min. 160x230 cm) seçilmelidir. Yemek masası halısında sandalye çekme payı (masadan 60-70 cm taşma) hesaba katılmalıdır.',
        importance: 'important'
      },
      {
        id: 'renk-desen',
        title: 'Renk, Desen ve Işık Dayanımı',
        description: 'Açık renkler mekanı büyütür ama kir gösterir; koyu ve desenli halılar lekeyi gizler. Güneş gören odada UV haslığı olan boyalar hızla solabilir.',
        importance: 'important'
      },
      {
        id: 'bakim',
        title: 'Temizlik ve Bakım',
        description: 'Makine yıkamaya uygun halılar bakımı kolaylaştırır. Tüy atma (shedding) oranı yeni halıda ilk aylarda yüksektir; kaliteli dokuma bu süreyi kısaltır.',
        importance: 'useful'
      }
    ],
    checklistItems: [
      { id: 'c1', text: 'Malzeme türünü (sentetik/yün/viskon) kullanım alışkanlığıma göre seçtim.', importance: 'critical' },
      { id: 'c2', text: 'Dokuma sıklığı (nokta/m²) bilgisini aldım ve karşılaştırdım.', importance: 'critical' },
      { id: 'c3', text: 'Kaymaz taban özelliğinin varlığını kontrol ettim.', importance: 'critical' },
      { id: 'c4', text: 'Halı ölçüsünün oturma düzenine uyduğunu yerde denedim/planladım.', importance: 'important' },
      { id: 'c5', text: 'Renk ve desenin kirlenme eğilimimi göz önüne aldığını değerlendirdim.', importance: 'important' },
      { id: 'c6', text: 'Makine yıkamaya uygun olup olmadığını sorguladım.', importance: 'useful' },
      { id: 'c7', text: 'İlk günlerde tüy atma (shedding) durumunu ve süresini öğrendim.', importance: 'useful' },
      { id: 'c8', text: 'Koku ve kimyasal işlem (formaldehit) bilgisi aldım.', importance: 'useful' }
    ],
    redFlags: [
      { id: 'rf1', title: 'Aşırı Kokulu Yeni Halı', explanation: 'Yoğun kimyasal koku, ucuz yapıştırıcı/boya kullanımına işaret eder; kapalı alanda baş ağrısı ve alerji yapabilir.' },
      { id: 'rf2', title: 'Dokuma Sıklığı Yazılmayan Ürünler', explanation: 'Sıklık değeri olmadan "yoğun dokuma" iddiası anlamsızdır; düşük dokumalı halılar hızla yürünme izi oluşturur.' },
      { id: 'rf3', title: 'Kaydırıcısız Satış', explanation: 'Tabanı kaydırıcısız halı parke üzerinde tehlike oluşturur; kaydırıcı maliyeti ilk gün eklenmelidir.' }
    ],
    questions: [
      { id: 'q1', question: 'Bu halının dokuma sıklığı (m² nokta sayısı) nedir?', whyItMatters: 'Sıklık hem desen keskinliğini hem yıpranma direncini belirleyen ana teknik veridir.', target: 'seller' },
      { id: 'q2', question: 'Malzeme içeriği tam olarak nedir (polipropilen/yün karışım oranı)?', whyItMatters: 'Karışım oranı temizlik yöntemini ve ömrü doğrudan etkiler.', target: 'seller' },
      { id: 'q3', question: 'Makine yıkamasında çekme oranı ne kadar?', whyItMatters: 'Yüksek çekme yapan halı ilk yıkamada ölçüsünden ciddi kaybeder.', target: 'service' }
    ],
    scenarios: [
      { id: 'cocuklu-ev', title: 'Çocuklu / Yoğun Kullanım', description: 'Polipropilen, kısa ilmik, leke tutmaz, koyu-desenli, kaymaz taban.', recommendedCriteriaIds: ['malzeme', 'taban', 'bakim'] },
      { id: 'salon-dekor', title: 'Dekoratif Salon', description: 'Yüksek dokuma sıklığı, viskon karışım, desen ve renk bütünlüğü.', recommendedCriteriaIds: ['dokuma', 'renk-desen'] },
      { id: 'yatak-odasi', title: 'Yatak Odası', description: 'Shaggy yumuşak yüzey, orta ölçü, sessiz adım hissi.', recommendedCriteriaIds: ['malzeme', 'olcu'] }
    ],
    relatedGuideIds: ['dikey-supurge-alirken', 'koltuk-alirken', 'perde-alirken'],
  },

  // 19. Bahçe Mobilyası Alırken
  {
    id: 'bahce-mobilyasi-alirken',
    slug: 'bahce-mobilyasi-alirken',
    categorySlug: 'ev-yasam',
    title: 'Bahçe Mobilyası Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Bahçe Mobilyası Alırken',
    description: 'Malzeme hava direnci, UV koruması, yastık kumaşı, katlanabilirlik ve bakım gereksinimleriyle doğru bahçe mobilyası seçme rehberi.',
    intro: [
      'Bahçe mobilyası yıl boyunca güneş, yağmur ve nemle başa çıkmak zorundadır. Bu yüzden estetikten önce malzemenin hava koşullarına dayanımı gelir: alüminyum iskelet, teak ahşap ve sentetik rattan en dayanıklı üç seçenektir.',
      'UV koruması olmayan plastik mobilyalar bir sezonda solup kırılganlaşır. Yastık ve minderlerin dış mekan kumaşı (quick-dry, UV sabit) olup olmadığı uzun vadeli görünümü belirler.',
      'Kış saklama imkânı, katlanabilir yapı ve ağırlık da pratik seçim kriterleridir.'
    ],
    keywords: ['bahçe mobilyası', 'bahçe takımı', 'teak mobilya', 'sentetik rattan', 'dış mekan mobilyası', 'sırtlı sandalye'],
    aliases: ['dış mekan mobilyası', 'balkon takımı', 'garden furniture'],
    estimatedReadTimeMinutes: 4,
    lastUpdated: '2026-09-15',
    status: 'published',
    importanceItems: [
      {
        id: 'malzeme',
        title: 'Ana Malzeme ve Hava Dayanımı',
        description: 'Alüminyum iskelet paslanmaz ve hafiftir; teak (tik) ahşap yağlı yapısıyla doğaya dayanıklıdır; sentetik rattan (HDPE) UV katkılıysa 5+ sezon dayanır. Çelik iskelet toz boya ile korunmalı, pas riski olan bölgelerde tercih edilmemelidir.',
        importance: 'critical'
      },
      {
        id: 'uv-koruma',
        title: 'UV Koruması ve Renk Haslığı',
        description: 'Plastik ve rattan dokumada UV katkısı yoksa malzeme bir sezonda solsar ve kırılganlaşır. Kumaşlarda UV sabit ( solution dyed) ipek kullanımı renk haslığını artırır.',
        importance: 'critical'
      },
      {
        id: 'yastik',
        title: 'Minder/Yastık Kumaşı ve Dolgusu',
        description: 'Dış mekan kumaşında quick-dry dolgu ve su itici yüzey bulunmalıdır; iç mekan süngeri suyu tutar ve küflenir. Fermuarlı, çıkarılabilir kılıf temizlik kolaylığı sağlar.',
        importance: 'critical'
      },
      {
        id: 'yapisal-güç',
        title: 'Taşıma Kapasitesi ve Iskelet Stabilitesi',
        description: 'Kaynak noktaları ve birleşimler korozyon direncine sahip olmalı (paslanmaz vida). Rüzgarlı balkonda hafif mobulya devrilir; taban genişliği ve ağırlık dengeyi belirler.',
        importance: 'important'
      },
      {
        id: 'katlanabilir',
        title: 'Katlanabilirlik ve Saklama',
        description: 'Kışın kapalı alana taşınacak mobilyalarda katlanır veya istiflenebilir yapı değerlidir. Şemsiye/kemerli setlerde bağlantı mekanizmasının sağlamlığı kontrol edilmelidir.',
        importance: 'important'
      },
      {
        id: 'bakim',
        title: 'Bakım Gereksinimi',
        description: 'Teak ahşap yılda 1-2 kez yağlanmalı; alüminyum sabunlu suyla silinmelidir. Bakım yapılmayacaksa düşük bakımlı malzeme (alüminyum/HDPE rattan) tercih edilmelidir.',
        importance: 'useful'
      }
    ],
    checklistItems: [
      { id: 'c1', text: 'Ana malzemenin (alüminyum/teak/HDPE rattan) iklimime uygunluğunu değerlendirdim.', importance: 'critical' },
      { id: 'c2', text: 'UV katkısı ve renk haslığı bilgisi aldım.', importance: 'critical' },
      { id: 'c3', text: 'Minderlerin quick-dry dolgu ve su itici kumaşla üretilmiş olduğunu kontrol ettim.', importance: 'critical' },
      { id: 'c4', text: 'Iskelet kaynak noktalarının ve vidaların paslanmaz olduğunu sorguladım.', importance: 'important' },
      { id: 'c5', text: 'Taşıma kapasitesi ve rüzgarda stabiliteyi değerlendirdim.', importance: 'important' },
      { id: 'c6', text: 'Kış saklama planıma göre katlanabilir/istiflenebilir yapıyı kontrol ettim.', importance: 'important' },
      { id: 'c7', text: 'Yıllık bakım gereksinimini (yağlama/silme) öğrendim.', importance: 'useful' },
      { id: 'c8', text: 'Kılıf/brandı sete dahil mi kontrol ettim.', importance: 'useful' }
    ],
    redFlags: [
      { id: 'rf1', title: 'UV Korumasız Ucuz Plastik Setler', explanation: 'Bir sezon güneş alan plastik koltuk rengini kaybeder ve otururken kırılma riski oluşturur.' },
      { id: 'rf2', title: 'İç Mekan Minderli Setler', explanation: 'Normal sünger ve kumaşla gelen minderler yağmurda su emer, küflenir ve kokar; değişimi ciddi maliyettir.' },
      { id: 'rf3', title: 'Galvanizsiz Çelik İskellet', explanation: 'Toz boyası çizilen çelik iskelet, nemle içeriden paslanır ve taşıma gücünü kaybeder; kenar ve kaynak noktaları kontrol edilmelidir.' }
    ],
    questions: [
      { id: 'q1', question: 'Rattan dokuma HDPE mi, UV katkısı oranı nedir?', whyItMatters: 'PVC bazlı ucuz rattan bir sezonda kırılır; HDPE ve UV katkısı 5+ sezon ömür sağlar.', target: 'seller' },
      { id: 'q2', question: 'Minder dolgusu quick-dry mi, kılıf çıkarılabilir mi?', whyItMatters: 'Su tutan dolgu küf yapar; çıkarılamayan kılıf temizliği zorlaştırır.', target: 'seller' },
      { id: 'q3', question: 'Kış bakımı için hangi işlemler öneriliyor?', whyItMatters: 'Teak yağlama ve vidaların sıkılması gibi rutinler garanti şartı olabilir.', target: 'service' }
    ],
    scenarios: [
      { id: 'acik-bahce', title: 'Açık Bahçe / Yağmur Alan', description: 'Alüminyum veya teak iskelet, quick-dry minder, branda ile birlikte.', recommendedCriteriaIds: ['malzeme', 'yastik', 'bakim'] },
      { id: 'kapali-balkon', title: 'Kapalı Balkon / Teras', description: 'HDPE rattan, UV korumalı orta ağırlıkta set, katlanabilir masa.', recommendedCriteriaIds: ['uv-koruma', 'katlanabilir'] },
      { id: 'ruzgarli', title: 'Rüzgarlı Teras / Üst Kat', description: 'Ağır taban, geniş ayak izi, devrilmeye dirençli yapı.', recommendedCriteriaIds: ['yapisal-güç', 'malzeme'] }
    ],
    relatedGuideIds: ['yemek-masasi-alirken', 'avize-alirken', 'koltuk-alirken'],
  },

  // 20. Avize Alırken
  {
    id: 'avize-alirken',
    slug: 'avize-alirken',
    categorySlug: 'ev-yasam',
    title: 'Avize Alırken Nelere Dikkat Edilmeli?',
    shortTitle: 'Avize Alırken',
    description: 'Lümen değeri, renk sıcaklığı, abajur şiddeti, sarkıt yüksekliği, dimmer uyumu ve IP sınıfıyla doğru avize seçme rehberi.',
    intro: [
      'Avize seçiminde en sık hata watt yerine ışık miktarını (lümen) düşünmemektir. Bir odayı aydınlatmak için gereken lümen, oda metrekaresiyle orantılıdır; 20 m² salon için 3000-4000 lümen genel kuraldır.',
      'Renk sıcaklığı (Kelvin) mekânın ruh halini belirler: 2700-3000 K sıcak ve rahat, 4000 K nötr, 5000+ K uyanıklık veren soğuk ışıktır. Banyo ve dış mekân için IP (su-toz koruma) sınıfı kritik kriterdir.',
      'Dimmer (kademe) uyumu ve sarkıt yüksekliği, hem konforu hem güvenliği etkileyen detaylardır.'
    ],
    keywords: ['avize', 'avize seçimi', 'lümen', 'kelvin', 'sarkıt avize', 'dış mekan aydınlatması'],
    aliases: ['lambader', 'sarkıt', 'tavan lambası', 'chandelier'],
    estimatedReadTimeMinutes: 4,
    lastUpdated: '2026-09-15',
    status: 'published',
    importanceItems: [
      {
        id: 'lumen',
        title: 'Lümen Değeri ve Oda Ölçüsü Uyumu',
        description: 'Oda başına genel kural: m² başına 150-200 lümen. 20 m² salon 3000-4000 lümen, 10 m² yatak odası 1500-2000 lümen ister. Tek avize yerine katmanlı (general+spot+ambient) plan daha dengeli sonuç verir.',
        importance: 'critical'
      },
      {
        id: 'kelvin',
        title: 'Renk Sıcaklığı (Kelvin)',
        description: '2700-3000 K oturma ve yatak odası için sıcak; 3500-4000 K mutfak/banyo için nötr; 5000 K üzeri çalışma alanı ve dış güvenlik için uygundur. Aynı mekânda karışık Kelvin karışımı görsel rahatsızlık yaratır.',
        importance: 'critical'
      },
      {
        id: 'cRI-renk',
        title: 'Renk Geri Verim Endeksi (CRI)',
        description: 'CRI 80+ ev içi standarttır; mutfak ve ayna karşısı (makyaj/tıraş) için 90+ önerilir. Düşük CRI\'da renkler soluk ve doğal olmayan görünür.',
        importance: 'important'
      },
      {
        id: 'ip-sinifi',
        title: 'IP Koruma Sınıfı (Nem / Dış Mekân)',
        description: 'Banyo duş yakınında IP44 (sıçrama), duş içi IP65; dış mekân ve yağmur alan noktalarda IP54-IP65 gerekir. Yanlış IP sınıfı elektrik güvenliği riskidir.',
        importance: 'critical'
      },
      {
        id: 'dimmer-boyut',
        title: 'Dimmer Uyumu ve Sarkıt Yüksekliği',
        description: 'LED ampuller dimmer ile uyumlu (dimlanabilir) işaretli olmalı, aksi halde titrer. Yemek masası üstü sarkıt, masa yüzeyinden 70-90 cm yukarıda; tavan yüksekliği düşükse flushmount tercih edilmelidir.',
        importance: 'important'
      },
      {
        id: 'malzeme-bakim',
        title: 'Gövde Malzemesi, Ağırlık ve Montaj',
        description: 'Kristal ve metal avizeler ağır olabilir; tavan montaj kelepçesinin taşıma kapasitesi kontrol edilmelidir. Parça temizliği (kristal sökümü) ve ampul değişim kolaylığı bakım açısından önemlidir.',
        importance: 'useful'
      }
    ],
    checklistItems: [
      { id: 'c1', text: 'Oda ölçüsüne göre hedef lümen aralığını hesapladım.', importance: 'critical' },
      { id: 'c2', text: 'Mekâna uygun renk sıcaklığını (Kelvin) belirledim.', importance: 'critical' },
      { id: 'c3', text: 'CRI değerinin 80+ (ayna/mutfak için 90+) olduğunu kontrol ettim.', importance: 'important' },
      { id: 'c4', text: 'Nem/dış mekân kullanımında IP sınıfının uygun olduğunu doğruladım.', importance: 'critical' },
      { id: 'c5', text: 'Dimmer kullanacaksam ampul ve avizenin dimlanabilir olduğunu kontrol ettim.', importance: 'important' },
      { id: 'c6', text: 'Sarkıt yüksekliğini (masadan 70-90 cm) ve tavan taşıma kapasitesini değerlendirdim.', importance: 'important' },
      { id: 'c7', text: 'Ampul soket tipinin (E27/GU10) bulunabilir olduğunu kontrol ettim.', importance: 'useful' },
      { id: 'c8', text: 'Montaj kurulumunun (elektrik bağlantısı) profesyonel gerektirip gerektirmediğini netleştirdim.', importance: 'useful' }
    ],
    redFlags: [
      { id: 'rf1', title: 'Watt ile Lümen Karıştırmak', explanation: '"60 W eşdeğeri" ifadesi lümen vermez; gerçek karşılaştırma lümen (lm) değeridir ve teknik etikette yazmalıdır.' },
      { id: 'rf2', title: 'Banyoda IP Sınıfı Olmayan Avize', explanation: 'Duş veya lavabo yakınına IP44 altı ürün monte etmek su sıçramasında elektrik riski oluşturur; bu bir güvenlik kusurudur.' },
      { id: 'rf3', title: 'Uyumlu Olmayan Dimmer Titremesi', explanation: 'Dimlanamaz LED ampul dimmerde titrer; ampul ve dimmer uyumu satın almadan önce doğrulanmalıdır.' }
    ],
    questions: [
      { id: 'q1', question: 'Bu avizenin toplam lümen ve Kelvin değeri nedir?', whyItMatters: 'Watt değil lümen aydınlığı belirler; Kelvin mekânın karakterini tayin eder.', target: 'seller' },
      { id: 'q2', question: 'Ampul soket tipi nedir, ampul dahil mi, değiştirilebilir mi?', whyItMatters: 'Özel soketli/entegre LED\'li ürünlerde ampul ömrü bitince tüm avize değişmek zorunda kalabilir.', target: 'seller' },
      { id: 'q3', question: 'Montaj için tavan bağlantısı nasıl olmalı, elektrikçi gerekiyor mu?', whyItMatters: 'Ağır avizeler özel kelepçe ve güçlendirme gerektirebilir; yanlış montaj düşme riski taşır.', target: 'service' }
    ],
    scenarios: [
      { id: 'salon', title: 'Salon / Oturma Alanı', description: '3000-4000 lümen, 2700-3000 K, katmanlı aydınlatma (sarkıt+spot+abajur).', recommendedCriteriaIds: ['lumen', 'kelvin', 'dimmer-boyut'] },
      { id: 'yemek-masasi', title: 'Yemek Masası Üstü', description: 'Sarkıt yüksekliği 70-90 cm, CRI 80+, dimmer ile kademe.', recommendedCriteriaIds: ['cRI-renk', 'dimmer-boyut'] },
      { id: 'banyo-dis-mekan', title: 'Banyo / Dış Mekân', description: 'IP44-IP65 sınıfı, nem dirençli gövde, nötr-sıcak ışık.', recommendedCriteriaIds: ['ip-sinifi', 'kelvin'] }
    ],
    relatedGuideIds: ['perde-alirken', 'yemek-masasi-alirken', 'bahce-mobilyasi-alirken'],
  },

// Yeni 18. Otomobil Lastiği
  {
    "id": "otomobil-lastigi-alirken",
    "slug": "otomobil-lastigi-alirken",
    "categorySlug": "otomobil-motosiklet",
    "title": "Otomobil Lastiği Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Otomobil Lastiği Alırken",
    "description": "Otomobil Lastiği alırken nelere dikkat edilmeli? Ebat, yük/hız endeksi, mevsim tipi, ab etiketi, dot tarihi ve üretim koşulları kriterlerine göre marka/model önermeden doğru seçim rehberi.",
    "intro": [
      "Otomobil Lastiği seçiminde yalnız fiyat veya tek bir katalog değeri karar vermek için yeterli değildir. Ebat, yük/hız endeksi, mevsim tipi, ab etiketi, dot tarihi ve üretim koşulları birlikte değerlendirilmelidir.",
      "Kullanım senaryonuzu önceden belirlemek gereksiz özelliklere para ödemeyi ve kritik bir uyumluluk ayrıntısını atlamayı önler. Aşağıdaki kontrol listesi ürünü satın almadan önce satıcı bilgilerini doğrulamanıza yardımcı olur."
    ],
    "keywords": [
      "otomobil lastiği",
      "otomobil lastiği alırken nelere dikkat edilmeli",
      "otomobil lastiği seçimi",
      "araba lastiği",
      "oto lastik",
      "yaz lastiği"
    ],
    "aliases": [
      "araba lastiği",
      "oto lastik",
      "yaz lastiği"
    ],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      {
        "id": "size",
        "title": "Doğru Ebat",
        "description": "Taban genişliği, yanak oranı ve jant çapı ruhsat/üretici onayıyla uyumlu olmalıdır.",
        "importance": 'critical'
      },
      {
        "id": "indices",
        "title": "Yük ve Hız Endeksi",
        "description": "Araç üreticisinin belirlediği minimum yük ve hız endeksinin altına inilmemelidir.",
        "importance": 'critical'
      },
      {
        "id": "season",
        "title": "Yaz, Kış ve Dört Mevsim",
        "description": "İklim, sıcaklık ve sürüş koşulu seçimi belirler; 3PMSF işareti gerçek kış performansı için önemlidir.",
        "importance": 'important'
      },
      {
        "id": "label",
        "title": "Islak Fren ve Gürültü Etiketi",
        "description": "AB etiketinde ıslak zeminde A sınıfına yakın fren ve dış gürültü değeri güvenlik/konfor göstergesidir.",
        "importance": 'important'
      },
      {
        "id": "dot",
        "title": "DOT Üretim Tarihi",
        "description": "Son dört hane hafta/yılı gösterir; doğru saklanmış yeni üretim ve garanti başlangıcı birlikte değerlendirilmelidir.",
        "importance": 'useful'
      }
    ],
    "checklistItems": [
      {
        "id": "c1",
        "text": "Doğru Ebat kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c2",
        "text": "Yük ve Hız Endeksi kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c3",
        "text": "Yaz, Kış ve Dört Mevsim kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c4",
        "text": "Islak Fren ve Gürültü Etiketi kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c5",
        "text": "DOT Üretim Tarihi kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'useful'
      }
    ],
    "redFlags": [
      {
        "id": "rf1",
        "title": "Eski DOT’u Kampanyalı Satmak",
        "explanation": "Uzun süre yanlış depolanmış lastik sertleşebilir; tarih ve saklama koşulu gizlenmemelidir."
      },
      {
        "id": "rf2",
        "title": "Yanlış Ebatla Görsel Değişim",
        "explanation": "Üretici toleransı dışındaki ebat fren, hız göstergesi ve süspansiyonu etkiler."
      }
    ],
    "questions": [
      {
        "id": "q1",
        "question": "Doğru Ebat için ürünün teknik değeri ve kullanım sınırı nedir?",
        "whyItMatters": "Taban genişliği, yanak oranı ve jant çapı ruhsat/üretici onayıyla uyumlu olmalıdır.",
        "target": 'seller'
      },
      {
        "id": "q2",
        "question": "Yük ve Hız Endeksi için ürünün teknik değeri ve kullanım sınırı nedir?",
        "whyItMatters": "Araç üreticisinin belirlediği minimum yük ve hız endeksinin altına inilmemelidir.",
        "target": 'seller'
      },
      {
        "id": "q3",
        "question": "Yaz, Kış ve Dört Mevsim için ürünün teknik değeri ve kullanım sınırı nedir?",
        "whyItMatters": "İklim, sıcaklık ve sürüş koşulu seçimi belirler; 3PMSF işareti gerçek kış performansı için önemlidir.",
        "target": 'seller'
      }
    ],
    "scenarios": [
      {
        "id": "temel",
        "title": "Günlük / Temel Kullanım",
        "description": "Dengeli özellik, kolay bakım ve toplam maliyet önceliklidir.",
        "recommendedCriteriaIds": [
          "size",
          "indices"
        ]
      },
      {
        "id": "ileri",
        "title": "Yoğun / İleri Kullanım",
        "description": "Performans, dayanıklılık ve genişletilebilirlik önceliklidir.",
        "recommendedCriteriaIds": [
          "indices",
          "season",
          "label"
        ]
      }
    ],
    "relatedGuideIds": [
      "ikinci-el-araba-alirken",
      "arac-kompresoru-alirken",
      "arac-akusu-alirken"
    ]
  },

// Yeni 19. Araç Aküsü
  {
    "id": "arac-akusu-alirken",
    "slug": "arac-akusu-alirken",
    "categorySlug": "otomobil-motosiklet",
    "title": "Araç Aküsü Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Araç Aküsü Alırken",
    "description": "Araç Aküsü alırken nelere dikkat edilmeli? Ah kapasitesi, cca marş gücü, kasa ölçüsü, kutup yönü ve start-stop uyumu kriterlerine göre marka/model önermeden doğru seçim rehberi.",
    "intro": [
      "Araç Aküsü seçiminde yalnız fiyat veya tek bir katalog değeri karar vermek için yeterli değildir. Ah kapasitesi, cca marş gücü, kasa ölçüsü, kutup yönü ve start-stop uyumu birlikte değerlendirilmelidir.",
      "Kullanım senaryonuzu önceden belirlemek gereksiz özelliklere para ödemeyi ve kritik bir uyumluluk ayrıntısını atlamayı önler. Aşağıdaki kontrol listesi ürünü satın almadan önce satıcı bilgilerini doğrulamanıza yardımcı olur."
    ],
    "keywords": [
      "araç aküsü",
      "araç aküsü alırken nelere dikkat edilmeli",
      "araç aküsü seçimi",
      "otomobil aküsü",
      "marş aküsü",
      "agm akü"
    ],
    "aliases": [
      "otomobil aküsü",
      "marş aküsü",
      "agm akü"
    ],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      {
        "id": "capacity",
        "title": "Kapasite (Ah)",
        "description": "Üretici önerisinden belirgin düşük Ah marş ve elektroniklerde sorun; aşırı yüksek kapasite şarj sistemiyle uyumsuzluk yaratabilir.",
        "importance": 'critical'
      },
      {
        "id": "cca",
        "title": "Soğuk Marş Akımı (CCA)",
        "description": "Soğuk iklim ve dizel motorlarda yüksek CCA güvenli çalıştırma sağlar.",
        "importance": 'critical'
      },
      {
        "id": "technology",
        "title": "Akü Teknolojisi",
        "description": "Start-stop araçta AGM/EFB zorunluluğu vardır; standart sulu akü kısa sürede bozulabilir.",
        "importance": 'important'
      },
      {
        "id": "dimensions",
        "title": "Kasa ve Kutup Yönü",
        "description": "Boyut, taban sabitleme ve artı kutup yönü araç yuvasıyla birebir eşleşmelidir.",
        "importance": 'important'
      },
      {
        "id": "warranty",
        "title": "Üretim Tarihi ve Garanti",
        "description": "Rafta bekleme, açık devre voltajı ve garanti başlangıç koşulu kontrol edilmelidir.",
        "importance": 'useful'
      }
    ],
    "checklistItems": [
      {
        "id": "c1",
        "text": "Kapasite (Ah) kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c2",
        "text": "Soğuk Marş Akımı (CCA) kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c3",
        "text": "Akü Teknolojisi kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c4",
        "text": "Kasa ve Kutup Yönü kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c5",
        "text": "Üretim Tarihi ve Garanti kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'useful'
      }
    ],
    "redFlags": [
      {
        "id": "rf1",
        "title": "Start-Stop Araca Standart Akü",
        "explanation": "Ucuz standart akü sık çevrime dayanmaz ve araç enerji yönetiminde hata doğurabilir."
      },
      {
        "id": "rf2",
        "title": "Sadece Ah ile Satış",
        "explanation": "CCA, teknoloji ve fiziksel uyum kontrol edilmeden yalnız kapasiteye göre akü seçilemez."
      }
    ],
    "questions": [
      {
        "id": "q1",
        "question": "Kapasite (Ah) için ürünün teknik değeri ve kullanım sınırı nedir?",
        "whyItMatters": "Üretici önerisinden belirgin düşük Ah marş ve elektroniklerde sorun; aşırı yüksek kapasite şarj sistemiyle uyumsuzluk yaratabilir.",
        "target": 'seller'
      },
      {
        "id": "q2",
        "question": "Soğuk Marş Akımı (CCA) için ürünün teknik değeri ve kullanım sınırı nedir?",
        "whyItMatters": "Soğuk iklim ve dizel motorlarda yüksek CCA güvenli çalıştırma sağlar.",
        "target": 'seller'
      },
      {
        "id": "q3",
        "question": "Akü Teknolojisi için ürünün teknik değeri ve kullanım sınırı nedir?",
        "whyItMatters": "Start-stop araçta AGM/EFB zorunluluğu vardır; standart sulu akü kısa sürede bozulabilir.",
        "target": 'seller'
      }
    ],
    "scenarios": [
      {
        "id": "temel",
        "title": "Günlük / Temel Kullanım",
        "description": "Dengeli özellik, kolay bakım ve toplam maliyet önceliklidir.",
        "recommendedCriteriaIds": [
          "capacity",
          "cca"
        ]
      },
      {
        "id": "ileri",
        "title": "Yoğun / İleri Kullanım",
        "description": "Performans, dayanıklılık ve genişletilebilirlik önceliklidir.",
        "recommendedCriteriaIds": [
          "cca",
          "technology",
          "dimensions"
        ]
      }
    ],
    "relatedGuideIds": [
      "aku-takviye-cihazi-alirken",
      "arac-kompresoru-alirken",
      "ikinci-el-araba-alirken"
    ]
  },

// Yeni 20. Araç Kamerası
  {
    "id": "arac-kamerasi-alirken",
    "slug": "arac-kamerasi-alirken",
    "categorySlug": "otomobil-motosiklet",
    "title": "Araç Kamerası Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Araç Kamerası Alırken",
    "description": "Araç Kamerası alırken nelere dikkat edilmeli? Sensör ve gece görüntüsü, çözünürlük, hdr, park modu, kondansatör ve hafıza kartı dayanımı kriterlerine göre marka/model önermeden doğru seçim rehberi.",
    "intro": [
      "Araç Kamerası seçiminde yalnız fiyat veya tek bir katalog değeri karar vermek için yeterli değildir. Sensör ve gece görüntüsü, çözünürlük, hdr, park modu, kondansatör ve hafıza kartı dayanımı birlikte değerlendirilmelidir.",
      "Kullanım senaryonuzu önceden belirlemek gereksiz özelliklere para ödemeyi ve kritik bir uyumluluk ayrıntısını atlamayı önler. Aşağıdaki kontrol listesi ürünü satın almadan önce satıcı bilgilerini doğrulamanıza yardımcı olur."
    ],
    "keywords": [
      "araç kamerası",
      "araç kamerası alırken nelere dikkat edilmeli",
      "araç kamerası seçimi",
      "dashcam",
      "yol kamerası",
      "otomobil kamera"
    ],
    "aliases": [
      "dashcam",
      "yol kamerası",
      "otomobil kamera"
    ],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      {
        "id": "image",
        "title": "Sensör ve Gece Kalitesi",
        "description": "Plaka okunabilirliği pikselden çok sensör, lens ve HDR işleme kalitesine bağlıdır.",
        "importance": 'critical'
      },
      {
        "id": "resolution",
        "title": "Çözünürlük ve Kare Hızı",
        "description": "1440p/30 veya 1080p/60 dengelidir; sahte interpolasyonlu 4K depolamayı tüketir.",
        "importance": 'critical'
      },
      {
        "id": "power",
        "title": "Kondansatör ve Güç",
        "description": "Sıcak araç içinde süper kapasitör, lityum bataryadan daha güvenli ve uzun ömürlüdür.",
        "importance": 'important'
      },
      {
        "id": "parking",
        "title": "Park Modu",
        "description": "Düşük voltaj korumalı hardwire kit, darbe/hareket kaydı ve time-lapse akü tüketimini sınırlar.",
        "importance": 'important'
      },
      {
        "id": "storage",
        "title": "Hafıza Kartı",
        "description": "High-endurance microSD sürekli döngüsel yazma için gereklidir; kapasite ve maksimum kart desteği kontrol edilmelidir.",
        "importance": 'useful'
      }
    ],
    "checklistItems": [
      {
        "id": "c1",
        "text": "Sensör ve Gece Kalitesi kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c2",
        "text": "Çözünürlük ve Kare Hızı kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c3",
        "text": "Kondansatör ve Güç kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c4",
        "text": "Park Modu kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c5",
        "text": "Hafıza Kartı kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'useful'
      }
    ],
    "redFlags": [
      {
        "id": "rf1",
        "title": "Sahte 4K",
        "explanation": "Düşük çözünürlüklü sensörü yazılımla büyütmek plaka detayını artırmaz."
      },
      {
        "id": "rf2",
        "title": "Bataryalı Modeli Sıcakta Bırakmak",
        "explanation": "Kabin sıcaklığında lityum pil şişebilir; kondansatörlü model tercih edilmelidir."
      }
    ],
    "questions": [
      {
        "id": "q1",
        "question": "Sensör ve Gece Kalitesi için ürünün teknik değeri ve kullanım sınırı nedir?",
        "whyItMatters": "Plaka okunabilirliği pikselden çok sensör, lens ve HDR işleme kalitesine bağlıdır.",
        "target": 'seller'
      },
      {
        "id": "q2",
        "question": "Çözünürlük ve Kare Hızı için ürünün teknik değeri ve kullanım sınırı nedir?",
        "whyItMatters": "1440p/30 veya 1080p/60 dengelidir; sahte interpolasyonlu 4K depolamayı tüketir.",
        "target": 'seller'
      },
      {
        "id": "q3",
        "question": "Kondansatör ve Güç için ürünün teknik değeri ve kullanım sınırı nedir?",
        "whyItMatters": "Sıcak araç içinde süper kapasitör, lityum bataryadan daha güvenli ve uzun ömürlüdür.",
        "target": 'seller'
      }
    ],
    "scenarios": [
      {
        "id": "temel",
        "title": "Günlük / Temel Kullanım",
        "description": "Dengeli özellik, kolay bakım ve toplam maliyet önceliklidir.",
        "recommendedCriteriaIds": [
          "image",
          "resolution"
        ]
      },
      {
        "id": "ileri",
        "title": "Yoğun / İleri Kullanım",
        "description": "Performans, dayanıklılık ve genişletilebilirlik önceliklidir.",
        "recommendedCriteriaIds": [
          "resolution",
          "power",
          "parking"
        ]
      }
    ],
    "relatedGuideIds": [
      "ikinci-el-araba-alirken",
      "arac-akusu-alirken",
      "powerbank-alirken"
    ]
  },

// Yeni 21. Elektrikli Scooter
  {
    "id": "elektrikli-scooter-alirken",
    "slug": "elektrikli-scooter-alirken",
    "categorySlug": "otomobil-motosiklet",
    "title": "Elektrikli Scooter Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Elektrikli Scooter Alırken",
    "description": "Elektrikli Scooter alırken nelere dikkat edilmeli? Motor gücü, gerçek menzil, batarya hücresi, fren, lastik, süspansiyon ve ip koruması kriterlerine göre marka/model önermeden doğru seçim rehberi.",
    "intro": [
      "Elektrikli Scooter seçiminde yalnız fiyat veya tek bir katalog değeri karar vermek için yeterli değildir. Motor gücü, gerçek menzil, batarya hücresi, fren, lastik, süspansiyon ve ip koruması birlikte değerlendirilmelidir.",
      "Kullanım senaryonuzu önceden belirlemek gereksiz özelliklere para ödemeyi ve kritik bir uyumluluk ayrıntısını atlamayı önler. Aşağıdaki kontrol listesi ürünü satın almadan önce satıcı bilgilerini doğrulamanıza yardımcı olur."
    ],
    "keywords": [
      "elektrikli scooter",
      "elektrikli scooter alırken nelere dikkat edilmeli",
      "elektrikli scooter seçimi",
      "e scooter",
      "elektrikli skuter",
      "mobilite aracı"
    ],
    "aliases": [
      "e scooter",
      "elektrikli skuter",
      "mobilite aracı"
    ],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      {
        "id": "motor",
        "title": "Motor Gücü ve Yokuş",
        "description": "Nominal watt sürekli gücü, tepe watt kısa süreli gücü gösterir; kullanıcı ağırlığı ve eğimle değerlendirilmelidir.",
        "importance": 'critical'
      },
      {
        "id": "range",
        "title": "Gerçek Menzil",
        "description": "Katalog menzili hafif sürücü ve düşük hız içindir; soğuk, yokuş ve yüksek hız menzili ciddi azaltır.",
        "importance": 'critical'
      },
      {
        "id": "battery",
        "title": "Batarya ve Servis",
        "description": "Wh kapasitesi, hücre kalitesi, BMS ve değişim maliyeti toplam ömrün ana unsurudur.",
        "importance": 'important'
      },
      {
        "id": "brakes",
        "title": "Fren ve Lastik",
        "description": "Ön-arka etkili fren, 10 inç pnömatik/tubeless lastik ve kaymaz taban güvenliği belirler.",
        "importance": 'important'
      },
      {
        "id": "water",
        "title": "IP Koruması ve Gövde",
        "description": "IPX5 civarı yağmura dayanım; menteşe boşluğu, kaynak ve katlama kilidi düzenli kontrol ister.",
        "importance": 'useful'
      }
    ],
    "checklistItems": [
      {
        "id": "c1",
        "text": "Motor Gücü ve Yokuş kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c2",
        "text": "Gerçek Menzil kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c3",
        "text": "Batarya ve Servis kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c4",
        "text": "Fren ve Lastik kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c5",
        "text": "IP Koruması ve Gövde kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'useful'
      }
    ],
    "redFlags": [
      {
        "id": "rf1",
        "title": "Tepe Gücünü Nominal Gibi Sunmak",
        "explanation": "Kısa süreli peak watt sürekli tırmanma performansı değildir."
      },
      {
        "id": "rf2",
        "title": "Gerçek Dışı Menzil",
        "explanation": "En düşük hız modu ve 60 kg sürücüyle ölçülen değer günlük kullanımı temsil etmez."
      }
    ],
    "questions": [
      {
        "id": "q1",
        "question": "Motor Gücü ve Yokuş için ürünün teknik değeri ve kullanım sınırı nedir?",
        "whyItMatters": "Nominal watt sürekli gücü, tepe watt kısa süreli gücü gösterir; kullanıcı ağırlığı ve eğimle değerlendirilmelidir.",
        "target": 'seller'
      },
      {
        "id": "q2",
        "question": "Gerçek Menzil için ürünün teknik değeri ve kullanım sınırı nedir?",
        "whyItMatters": "Katalog menzili hafif sürücü ve düşük hız içindir; soğuk, yokuş ve yüksek hız menzili ciddi azaltır.",
        "target": 'seller'
      },
      {
        "id": "q3",
        "question": "Batarya ve Servis için ürünün teknik değeri ve kullanım sınırı nedir?",
        "whyItMatters": "Wh kapasitesi, hücre kalitesi, BMS ve değişim maliyeti toplam ömrün ana unsurudur.",
        "target": 'seller'
      }
    ],
    "scenarios": [
      {
        "id": "temel",
        "title": "Günlük / Temel Kullanım",
        "description": "Dengeli özellik, kolay bakım ve toplam maliyet önceliklidir.",
        "recommendedCriteriaIds": [
          "motor",
          "range"
        ]
      },
      {
        "id": "ileri",
        "title": "Yoğun / İleri Kullanım",
        "description": "Performans, dayanıklılık ve genişletilebilirlik önceliklidir.",
        "recommendedCriteriaIds": [
          "range",
          "battery",
          "brakes"
        ]
      }
    ],
    "relatedGuideIds": [
      "motosiklet-kaski-alirken",
      "bisiklet-alirken",
      "powerbank-alirken"
    ]
  },

// Yeni 22. Bisiklet
  {
    "id": "bisiklet-alirken",
    "slug": "bisiklet-alirken",
    "categorySlug": "otomobil-motosiklet",
    "title": "Bisiklet Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Bisiklet Alırken",
    "description": "Bisiklet alırken nelere dikkat edilmeli? Kadro boyu ve geometri, kullanım türü, fren sistemi, aktarma organları, tekerlek ve servis ağı kriterlerine göre marka/model önermeden doğru seçim rehberi.",
    "intro": [
      "Bisiklet seçiminde yalnız fiyat veya tek bir katalog değeri karar vermek için yeterli değildir. Kadro boyu ve geometri, kullanım türü, fren sistemi, aktarma organları, tekerlek ve servis ağı birlikte değerlendirilmelidir.",
      "Kullanım senaryonuzu önceden belirlemek gereksiz özelliklere para ödemeyi ve kritik bir uyumluluk ayrıntısını atlamayı önler. Aşağıdaki kontrol listesi ürünü satın almadan önce satıcı bilgilerini doğrulamanıza yardımcı olur."
    ],
    "keywords": [
      "bisiklet",
      "bisiklet alırken nelere dikkat edilmeli",
      "bisiklet seçimi",
      "şehir bisikleti",
      "dağ bisikleti",
      "trekking bisikleti"
    ],
    "aliases": [
      "şehir bisikleti",
      "dağ bisikleti",
      "trekking bisikleti"
    ],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      {
        "id": "fit",
        "title": "Kadro Boyu ve Geometri",
        "description": "Boydan çok iç bacak ölçüsü, reach ve stack değerleri doğru oturuşu belirler; test sürüşü yapılmalıdır.",
        "importance": 'critical'
      },
      {
        "id": "type",
        "title": "Bisiklet Türü",
        "description": "Şehir, yol, dağ ve gravel bisikletlerinin geometri, lastik ve aktarımı farklı amaçlara göre tasarlanır.",
        "importance": 'critical'
      },
      {
        "id": "brakes",
        "title": "Fren Sistemi",
        "description": "Hidrolik disk ıslak ve inişte güçlü; mekanik disk bakımı kolay; jant fren hafif ve ekonomiktir.",
        "importance": 'important'
      },
      {
        "id": "drivetrain",
        "title": "Aktarma ve Vites Aralığı",
        "description": "Yokuş için en hafif dişli oranı, şehirde bakım kolaylığı; parça standardı ve yedek bulunabilirliği önemlidir.",
        "importance": 'important'
      },
      {
        "id": "wheels",
        "title": "Tekerlek ve Lastik",
        "description": "Jant çapı, lastik genişliği, tubeless uyumu ve delinme koruması zeminle eşleşmelidir.",
        "importance": 'useful'
      }
    ],
    "checklistItems": [
      {
        "id": "c1",
        "text": "Kadro Boyu ve Geometri kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c2",
        "text": "Bisiklet Türü kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c3",
        "text": "Fren Sistemi kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c4",
        "text": "Aktarma ve Vites Aralığı kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c5",
        "text": "Tekerlek ve Lastik kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'useful'
      }
    ],
    "redFlags": [
      {
        "id": "rf1",
        "title": "Yanlış Kadroyu Seleyle Düzeltmek",
        "explanation": "Büyük/küçük kadro yalnız sele yüksekliğiyle düzeltilemez; kontrol ve ağrı sorunu yaratır."
      },
      {
        "id": "rf2",
        "title": "Vites Sayısını Kalite Sanmak",
        "explanation": "Daha fazla vites düşük kalite aktarma organını iyi yapmaz; oran ve grup seviyesi önemlidir."
      }
    ],
    "questions": [
      {
        "id": "q1",
        "question": "Kadro Boyu ve Geometri için ürünün teknik değeri ve kullanım sınırı nedir?",
        "whyItMatters": "Boydan çok iç bacak ölçüsü, reach ve stack değerleri doğru oturuşu belirler; test sürüşü yapılmalıdır.",
        "target": 'seller'
      },
      {
        "id": "q2",
        "question": "Bisiklet Türü için ürünün teknik değeri ve kullanım sınırı nedir?",
        "whyItMatters": "Şehir, yol, dağ ve gravel bisikletlerinin geometri, lastik ve aktarımı farklı amaçlara göre tasarlanır.",
        "target": 'seller'
      },
      {
        "id": "q3",
        "question": "Fren Sistemi için ürünün teknik değeri ve kullanım sınırı nedir?",
        "whyItMatters": "Hidrolik disk ıslak ve inişte güçlü; mekanik disk bakımı kolay; jant fren hafif ve ekonomiktir.",
        "target": 'seller'
      }
    ],
    "scenarios": [
      {
        "id": "temel",
        "title": "Günlük / Temel Kullanım",
        "description": "Dengeli özellik, kolay bakım ve toplam maliyet önceliklidir.",
        "recommendedCriteriaIds": [
          "fit",
          "type"
        ]
      },
      {
        "id": "ileri",
        "title": "Yoğun / İleri Kullanım",
        "description": "Performans, dayanıklılık ve genişletilebilirlik önceliklidir.",
        "recommendedCriteriaIds": [
          "type",
          "brakes",
          "drivetrain"
        ]
      }
    ],
    "relatedGuideIds": [
      "elektrikli-bisiklet-alirken",
      "elektrikli-scooter-alirken",
      "motosiklet-kaski-alirken",
      "elektrikli-scooter-alirken"
    ]
  },

// Eksik güçlü küme 1. Projeksiyon Cihazı
  {
    "id": "projeksiyon-cihazi-alirken",
    "slug": "projeksiyon-cihazi-alirken",
    "categorySlug": "teknoloji",
    "title": "Projeksiyon Cihazı Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Projeksiyon Cihazı Alırken",
    "description": "Projeksiyon Cihazı alırken nelere dikkat edilmeli? Teknik uyumluluk, güvenlik, kullanım senaryosu ve toplam maliyet için uygulanabilir kontrol rehberi.",
    "intro": [
      "Projeksiyon Cihazı seçiminde fiyat veya tek bir katalog değeri yeterli değildir. Kullanım koşulu, uyumluluk ve bakım maliyeti birlikte değerlendirilmelidir.",
      "Satın almadan önce teknik değerleri üretici belgesiyle doğrulamak, gereksiz özelliğe ödeme yapmayı ve yanlış ürün seçimini önler."
    ],
    "keywords": [
      "projeksiyon cihazı",
      "projeksiyon cihazı alırken nelere dikkat edilmeli",
      "projeksiyon cihazı seçimi",
      "çalışma parlaklığı (ansi lümen)",
      "doğal çözünürlük",
      "atım oranı ve mesafe"
    ],
    "aliases": [
      "projeksiyon cihazı",
      "projeksiyon cihazi"
    ],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      {
        "id": "parlaklik",
        "title": "Çalışma Parlaklığı (ANSI Lümen)",
        "description": "Odanın ışığı ve perde boyutuna göre gerçek ANSI lümen ölçümü seçilmelidir; LED lümen pazarlama değerleriyle karıştırılmamalıdır.",
        "importance": 'critical'
      },
      {
        "id": "cozunurluk",
        "title": "Doğal Çözünürlük",
        "description": "Giriş kabul ettiği çözünürlük değil panelin doğal çözünürlüğü önemlidir; film ve metin için en az 1080p tercih edilir.",
        "importance": 'critical'
      },
      {
        "id": "throw",
        "title": "Atım Oranı ve Mesafe",
        "description": "Throw ratio, istenen perde genişliği için gerekli cihaz-mesafe ilişkisini belirler; kısa mesafede short-throw gerekebilir.",
        "importance": 'important'
      },
      {
        "id": "contrast",
        "title": "Kontrast ve Siyah Seviyesi",
        "description": "Karanlık oda film kullanımında doğal kontrast, aydınlık sunumda parlaklık daha belirleyicidir.",
        "importance": 'important'
      },
      {
        "id": "lamp",
        "title": "Işık Kaynağı ve Ömür",
        "description": "Lamba, LED ve lazer sistemlerin parlaklık düşüşü, değişim maliyeti ve fan sesi farklıdır.",
        "importance": 'useful'
      }
    ],
    "checklistItems": [
      {
        "id": "c1",
        "text": "Çalışma Parlaklığı (ANSI Lümen) kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c2",
        "text": "Doğal Çözünürlük kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c3",
        "text": "Atım Oranı ve Mesafe kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c4",
        "text": "Kontrast ve Siyah Seviyesi kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c5",
        "text": "Işık Kaynağı ve Ömür kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'useful'
      }
    ],
    "redFlags": [
      {
        "id": "rf1",
        "title": "ANSI Yerine LED Lümen",
        "explanation": "Standart olmayan yüksek lümen sayılarını ANSI lümenle doğrudan kıyaslamak yanıltıcıdır."
      },
      {
        "id": "rf2",
        "title": "1080p Destekli Ama 720p Panel",
        "explanation": "Cihaz sinyali kabul ederken görüntüyü daha düşük doğal çözünürlükte gösterebilir."
      }
    ],
    "questions": [
      {
        "id": "q1",
        "question": "Çalışma Parlaklığı (ANSI Lümen) için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Odanın ışığı ve perde boyutuna göre gerçek ANSI lümen ölçümü seçilmelidir; LED lümen pazarlama değerleriyle karıştırılmamalıdır.",
        "target": 'seller'
      },
      {
        "id": "q2",
        "question": "Doğal Çözünürlük için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Giriş kabul ettiği çözünürlük değil panelin doğal çözünürlüğü önemlidir; film ve metin için en az 1080p tercih edilir.",
        "target": 'seller'
      },
      {
        "id": "q3",
        "question": "Atım Oranı ve Mesafe için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Throw ratio, istenen perde genişliği için gerekli cihaz-mesafe ilişkisini belirler; kısa mesafede short-throw gerekebilir.",
        "target": 'seller'
      }
    ],
    "scenarios": [
      {
        "id": "gunluk",
        "title": "Günlük Kullanım",
        "description": "Uyumluluk, kolay kullanım ve maliyet dengesi önceliklidir.",
        "recommendedCriteriaIds": [
          "parlaklik",
          "cozunurluk"
        ]
      },
      {
        "id": "yogun",
        "title": "Yoğun / Uzun Süreli Kullanım",
        "description": "Dayanıklılık, güvenlik ve servis edilebilirlik önceliklidir.",
        "recommendedCriteriaIds": [
          "cozunurluk",
          "throw",
          "contrast"
        ]
      }
    ],
    "relatedGuideIds": [
      "televizyon-alirken",
      "tripod-alirken",
      "kamera-alirken"
    ]
  },

  // Eksik güçlü küme 2. Stüdyo Monitörü
  {
    "id": "studyo-monitoru-alirken",
    "slug": "studyo-monitoru-alirken",
    "categorySlug": "ses-muzik-creator",
    "title": "Stüdyo Monitörü Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Stüdyo Monitörü Alırken",
    "description": "Stüdyo Monitörü alırken nelere dikkat edilmeli? Teknik uyumluluk, güvenlik, kullanım senaryosu ve toplam maliyet için uygulanabilir kontrol rehberi.",
    "intro": [
      "Stüdyo Monitörü seçiminde fiyat veya tek bir katalog değeri yeterli değildir. Kullanım koşulu, uyumluluk ve bakım maliyeti birlikte değerlendirilmelidir.",
      "Satın almadan önce teknik değerleri üretici belgesiyle doğrulamak, gereksiz özelliğe ödeme yapmayı ve yanlış ürün seçimini önler."
    ],
    "keywords": [
      "stüdyo monitörü",
      "stüdyo monitörü alırken nelere dikkat edilmeli",
      "stüdyo monitörü seçimi",
      "oda boyutu ve dinleme mesafesi",
      "frekans yanıtı ve doğrusallık",
      "girişler ve seviye"
    ],
    "aliases": [
      "stüdyo monitörü",
      "stüdyo monitörü"
    ],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      {
        "id": "room",
        "title": "Oda Boyutu ve Dinleme Mesafesi",
        "description": "Yakın alan dinlemede oda hacmi ve masa mesafesi woofer çapından önce belirlenmelidir.",
        "importance": 'critical'
      },
      {
        "id": "response",
        "title": "Frekans Yanıtı ve Doğrusallık",
        "description": "Geniş aralıktan çok düzgün frekans yanıtı ve düşük bozulma doğru miks kararları sağlar.",
        "importance": 'critical'
      },
      {
        "id": "ports",
        "title": "Girişler ve Seviye",
        "description": "Dengeli XLR/TRS girişler paraziti azaltır; ses kartının çıkış seviyesiyle uyum gerekir.",
        "importance": 'important'
      },
      {
        "id": "placement",
        "title": "Yerleşim ve Oda Ayarları",
        "description": "Arka port duvara mesafe ister; boundary EQ ve masa filtreleri yerleşim sorunlarını azaltır.",
        "importance": 'important'
      },
      {
        "id": "noise",
        "title": "Öz Gürültü ve Güç",
        "description": "Yakın mesafede hiss duyulmamalı; otomatik bekleme davranışı ve sınıf-D amplifikasyon kontrol edilmelidir.",
        "importance": 'useful'
      }
    ],
    "checklistItems": [
      {
        "id": "c1",
        "text": "Oda Boyutu ve Dinleme Mesafesi kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c2",
        "text": "Frekans Yanıtı ve Doğrusallık kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c3",
        "text": "Girişler ve Seviye kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c4",
        "text": "Yerleşim ve Oda Ayarları kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c5",
        "text": "Öz Gürültü ve Güç kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'useful'
      }
    ],
    "redFlags": [
      {
        "id": "rf1",
        "title": "Büyük Woofer Her Odaya Uygun Değildir",
        "explanation": "Küçük ve akustiksiz odada fazla bas, modları büyütüp yanlış miks kararları doğurur."
      },
      {
        "id": "rf2",
        "title": "Tek Adet Fiyatı",
        "explanation": "Profesyonel monitörler çoğu zaman adet fiyatıyla satılır; çift maliyeti doğrulanmalıdır."
      }
    ],
    "questions": [
      {
        "id": "q1",
        "question": "Oda Boyutu ve Dinleme Mesafesi için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Yakın alan dinlemede oda hacmi ve masa mesafesi woofer çapından önce belirlenmelidir.",
        "target": 'seller'
      },
      {
        "id": "q2",
        "question": "Frekans Yanıtı ve Doğrusallık için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Geniş aralıktan çok düzgün frekans yanıtı ve düşük bozulma doğru miks kararları sağlar.",
        "target": 'seller'
      },
      {
        "id": "q3",
        "question": "Girişler ve Seviye için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Dengeli XLR/TRS girişler paraziti azaltır; ses kartının çıkış seviyesiyle uyum gerekir.",
        "target": 'seller'
      }
    ],
    "scenarios": [
      {
        "id": "gunluk",
        "title": "Günlük Kullanım",
        "description": "Uyumluluk, kolay kullanım ve maliyet dengesi önceliklidir.",
        "recommendedCriteriaIds": [
          "room",
          "response"
        ]
      },
      {
        "id": "yogun",
        "title": "Yoğun / Uzun Süreli Kullanım",
        "description": "Dayanıklılık, güvenlik ve servis edilebilirlik önceliklidir.",
        "recommendedCriteriaIds": [
          "response",
          "ports",
          "placement"
        ]
      }
    ],
    "relatedGuideIds": [
      "ses-karti-alirken",
      "kulaklik-alirken",
      "mikrofon-alirken"
    ]
  },

  // Eksik güçlü küme 3. Kamera Lensi
  {
    "id": "kamera-lensi-alirken",
    "slug": "kamera-lensi-alirken",
    "categorySlug": "ses-muzik-creator",
    "title": "Kamera Lensi Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Kamera Lensi Alırken",
    "description": "Kamera Lensi alırken nelere dikkat edilmeli? Teknik uyumluluk, güvenlik, kullanım senaryosu ve toplam maliyet için uygulanabilir kontrol rehberi.",
    "intro": [
      "Kamera Lensi seçiminde fiyat veya tek bir katalog değeri yeterli değildir. Kullanım koşulu, uyumluluk ve bakım maliyeti birlikte değerlendirilmelidir.",
      "Satın almadan önce teknik değerleri üretici belgesiyle doğrulamak, gereksiz özelliğe ödeme yapmayı ve yanlış ürün seçimini önler."
    ],
    "keywords": [
      "kamera lensi",
      "kamera lensi alırken nelere dikkat edilmeli",
      "kamera lensi seçimi",
      "bayonet ve sensör uyumu",
      "odak uzaklığı ve görüş açısı",
      "diyafram ve işık geçirgenliği"
    ],
    "aliases": [
      "kamera lensi",
      "kamera lensi"
    ],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      {
        "id": "mount",
        "title": "Bayonet ve Sensör Uyumu",
        "description": "Lens yuvası, sensör kapsama alanı ve adaptörle otomatik netleme performansı gövdeyle eşleşmelidir.",
        "importance": 'critical'
      },
      {
        "id": "focal",
        "title": "Odak Uzaklığı ve Görüş Açısı",
        "description": "Crop faktörü hesaba katılarak portre, manzara, ürün veya vlog kullanımına uygun eşdeğer odak seçilmelidir.",
        "importance": 'critical'
      },
      {
        "id": "aperture",
        "title": "Diyafram ve Işık Geçirgenliği",
        "description": "Düşük f değeri düşük ışık ve alan derinliği sağlar; zoom boyunca sabit diyafram video için avantajdır.",
        "importance": 'important'
      },
      {
        "id": "af",
        "title": "Netleme Motoru ve Soluma",
        "description": "Sessiz AF motoru, takip performansı ve focus breathing video çekiminde kritiktir.",
        "importance": 'important'
      },
      {
        "id": "stabilization",
        "title": "Optik Sabitleme ve Optik Kalite",
        "description": "Gövde sabitlemesiyle uyum, köşe keskinliği, renk saçılması ve flare birlikte değerlendirilmelidir.",
        "importance": 'useful'
      }
    ],
    "checklistItems": [
      {
        "id": "c1",
        "text": "Bayonet ve Sensör Uyumu kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c2",
        "text": "Odak Uzaklığı ve Görüş Açısı kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c3",
        "text": "Diyafram ve Işık Geçirgenliği kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c4",
        "text": "Netleme Motoru ve Soluma kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c5",
        "text": "Optik Sabitleme ve Optik Kalite kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'useful'
      }
    ],
    "redFlags": [
      {
        "id": "rf1",
        "title": "Uyumsuz Sensör Kapsaması",
        "explanation": "APS-C lens full-frame gövdede kırpma veya köşe kararması yapabilir."
      },
      {
        "id": "rf2",
        "title": "F/Değeri ile T-Değerini Karıştırmak",
        "explanation": "Video ışık geçirgenliği aynı f değerli lensler arasında değişebilir."
      }
    ],
    "questions": [
      {
        "id": "q1",
        "question": "Bayonet ve Sensör Uyumu için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Lens yuvası, sensör kapsama alanı ve adaptörle otomatik netleme performansı gövdeyle eşleşmelidir.",
        "target": 'seller'
      },
      {
        "id": "q2",
        "question": "Odak Uzaklığı ve Görüş Açısı için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Crop faktörü hesaba katılarak portre, manzara, ürün veya vlog kullanımına uygun eşdeğer odak seçilmelidir.",
        "target": 'seller'
      },
      {
        "id": "q3",
        "question": "Diyafram ve Işık Geçirgenliği için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Düşük f değeri düşük ışık ve alan derinliği sağlar; zoom boyunca sabit diyafram video için avantajdır.",
        "target": 'seller'
      }
    ],
    "scenarios": [
      {
        "id": "gunluk",
        "title": "Günlük Kullanım",
        "description": "Uyumluluk, kolay kullanım ve maliyet dengesi önceliklidir.",
        "recommendedCriteriaIds": [
          "mount",
          "focal"
        ]
      },
      {
        "id": "yogun",
        "title": "Yoğun / Uzun Süreli Kullanım",
        "description": "Dayanıklılık, güvenlik ve servis edilebilirlik önceliklidir.",
        "recommendedCriteriaIds": [
          "focal",
          "aperture",
          "af"
        ]
      }
    ],
    "relatedGuideIds": [
      "kamera-alirken",
      "tripod-alirken",
      "video-isigi-alirken"
    ]
  },

  // Eksik güçlü küme 4. Tavan Bagajı
  {
    "id": "tavan-bagaji-alirken",
    "slug": "tavan-bagaji-alirken",
    "categorySlug": "otomobil-motosiklet",
    "title": "Tavan Bagajı Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Tavan Bagajı Alırken",
    "description": "Tavan Bagajı alırken nelere dikkat edilmeli? Teknik uyumluluk, güvenlik, kullanım senaryosu ve toplam maliyet için uygulanabilir kontrol rehberi.",
    "intro": [
      "Tavan Bagajı seçiminde fiyat veya tek bir katalog değeri yeterli değildir. Kullanım koşulu, uyumluluk ve bakım maliyeti birlikte değerlendirilmelidir.",
      "Satın almadan önce teknik değerleri üretici belgesiyle doğrulamak, gereksiz özelliğe ödeme yapmayı ve yanlış ürün seçimini önler."
    ],
    "keywords": [
      "tavan bagajı",
      "tavan bagajı alırken nelere dikkat edilmeli",
      "tavan bagajı seçimi",
      "araç tavan yük sınırı",
      "bar ve montaj uyumu",
      "hacim ve boyut"
    ],
    "aliases": [
      "tavan bagajı",
      "tavan bagaji"
    ],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      {
        "id": "load",
        "title": "Araç Tavan Yük Sınırı",
        "description": "Araç, bar ve kutu sınırlarından en düşük olan dinamik yük sınırı aşılmamalıdır.",
        "importance": 'critical'
      },
      {
        "id": "fit",
        "title": "Bar ve Montaj Uyumu",
        "description": "Tavan rayı tipi, sabitleme ayağı ve bar genişliği araçla birebir uyumlu olmalıdır.",
        "importance": 'critical'
      },
      {
        "id": "volume",
        "title": "Hacim ve Boyut",
        "description": "Bagaj kapağını engellemeyen, taşınacak ekipmana uygun litre ve iç uzunluk seçilmelidir.",
        "importance": 'important'
      },
      {
        "id": "aero",
        "title": "Aerodinamik ve Gürültü",
        "description": "Düşük profil ve aerodinamik bar yakıt tüketimini ve rüzgâr sesini azaltır.",
        "importance": 'important'
      },
      {
        "id": "security",
        "title": "Kilit ve Su Koruması",
        "description": "Çok noktadan kilit, çift taraflı açılma ve sızdırmazlık uzun yol güvenliğini belirler.",
        "importance": 'useful'
      }
    ],
    "checklistItems": [
      {
        "id": "c1",
        "text": "Araç Tavan Yük Sınırı kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c2",
        "text": "Bar ve Montaj Uyumu kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c3",
        "text": "Hacim ve Boyut kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c4",
        "text": "Aerodinamik ve Gürültü kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c5",
        "text": "Kilit ve Su Koruması kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'useful'
      }
    ],
    "redFlags": [
      {
        "id": "rf1",
        "title": "Statik Yükü Sürüş Yükü Sanmak",
        "explanation": "Araç dururken izin verilen yük, hareket halindeki dinamik tavan sınırından farklı olabilir."
      },
      {
        "id": "rf2",
        "title": "Uyumsuz Evrensel Ayak",
        "explanation": "Kapı çerçevesine yanlış basan ayak boya ve gövde hasarı oluşturabilir."
      }
    ],
    "questions": [
      {
        "id": "q1",
        "question": "Araç Tavan Yük Sınırı için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Araç, bar ve kutu sınırlarından en düşük olan dinamik yük sınırı aşılmamalıdır.",
        "target": 'seller'
      },
      {
        "id": "q2",
        "question": "Bar ve Montaj Uyumu için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Tavan rayı tipi, sabitleme ayağı ve bar genişliği araçla birebir uyumlu olmalıdır.",
        "target": 'seller'
      },
      {
        "id": "q3",
        "question": "Hacim ve Boyut için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Bagaj kapağını engellemeyen, taşınacak ekipmana uygun litre ve iç uzunluk seçilmelidir.",
        "target": 'seller'
      }
    ],
    "scenarios": [
      {
        "id": "gunluk",
        "title": "Günlük Kullanım",
        "description": "Uyumluluk, kolay kullanım ve maliyet dengesi önceliklidir.",
        "recommendedCriteriaIds": [
          "load",
          "fit"
        ]
      },
      {
        "id": "yogun",
        "title": "Yoğun / Uzun Süreli Kullanım",
        "description": "Dayanıklılık, güvenlik ve servis edilebilirlik önceliklidir.",
        "recommendedCriteriaIds": [
          "fit",
          "volume",
          "aero"
        ]
      }
    ],
    "relatedGuideIds": [
      "arac-brandasi-alirken",
      "otomobil-lastigi-alirken",
      "tavan-bagaji-alirken"
    ]
  },

  // Eksik güçlü küme 5. Akü Takviye Cihazı
  {
    "id": "aku-takviye-cihazi-alirken",
    "slug": "aku-takviye-cihazi-alirken",
    "categorySlug": "otomobil-motosiklet",
    "title": "Akü Takviye Cihazı Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Akü Takviye Cihazı Alırken",
    "description": "Akü Takviye Cihazı alırken nelere dikkat edilmeli? Teknik uyumluluk, güvenlik, kullanım senaryosu ve toplam maliyet için uygulanabilir kontrol rehberi.",
    "intro": [
      "Akü Takviye Cihazı seçiminde fiyat veya tek bir katalog değeri yeterli değildir. Kullanım koşulu, uyumluluk ve bakım maliyeti birlikte değerlendirilmelidir.",
      "Satın almadan önce teknik değerleri üretici belgesiyle doğrulamak, gereksiz özelliğe ödeme yapmayı ve yanlış ürün seçimini önler."
    ],
    "keywords": [
      "akü takviye cihazı",
      "akü takviye cihazı alırken nelere dikkat edilmeli",
      "akü takviye cihazı seçimi",
      "tepe ve marş akımı",
      "voltaj ve koruma",
      "hücre ve saklama"
    ],
    "aliases": [
      "akü takviye cihazı",
      "akü takviye cihazi"
    ],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      {
        "id": "current",
        "title": "Tepe ve Marş Akımı",
        "description": "Benzin/dizel motor hacmine uygun gerçek marş akımı seçilmeli; yalnız şişirilmiş peak değere bakılmamalıdır.",
        "importance": 'critical'
      },
      {
        "id": "voltage",
        "title": "Voltaj ve Koruma",
        "description": "12 V/24 V uyumu, ters kutup, kısa devre ve aşırı akım koruması bulunmalıdır.",
        "importance": 'critical'
      },
      {
        "id": "battery",
        "title": "Hücre ve Saklama",
        "description": "Lityum hücre kalitesi, kendi kendine boşalma ve soğuk hava performansı acil durumda güvenilirliği belirler.",
        "importance": 'important'
      },
      {
        "id": "clamps",
        "title": "Kablo ve Kıskaç",
        "description": "Kalın bakır kablo ve tam metal temaslı kıskaç marş anındaki gerilim düşümünü azaltır.",
        "importance": 'important'
      },
      {
        "id": "extras",
        "title": "Şarj ve Acil İşlevler",
        "description": "USB-C şarj, fener ve güç bankası işlevleri yararlıdır ancak marş performansının yerine geçmez.",
        "importance": 'useful'
      }
    ],
    "checklistItems": [
      {
        "id": "c1",
        "text": "Tepe ve Marş Akımı kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c2",
        "text": "Voltaj ve Koruma kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c3",
        "text": "Hücre ve Saklama kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c4",
        "text": "Kablo ve Kıskaç kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c5",
        "text": "Şarj ve Acil İşlevler kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'useful'
      }
    ],
    "redFlags": [
      {
        "id": "rf1",
        "title": "Peak Amper Şişirmesi",
        "explanation": "Çok yüksek kısa anlık sayı gerçek krank akımını ve motor uyumunu göstermeyebilir."
      },
      {
        "id": "rf2",
        "title": "Aylarca Şarjsız Bekletme",
        "explanation": "Boşalmış takviye cihazı acil anda işe yaramaz; düzenli doluluk kontrolü gerekir."
      }
    ],
    "questions": [
      {
        "id": "q1",
        "question": "Tepe ve Marş Akımı için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Benzin/dizel motor hacmine uygun gerçek marş akımı seçilmeli; yalnız şişirilmiş peak değere bakılmamalıdır.",
        "target": 'seller'
      },
      {
        "id": "q2",
        "question": "Voltaj ve Koruma için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "12 V/24 V uyumu, ters kutup, kısa devre ve aşırı akım koruması bulunmalıdır.",
        "target": 'seller'
      },
      {
        "id": "q3",
        "question": "Hücre ve Saklama için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Lityum hücre kalitesi, kendi kendine boşalma ve soğuk hava performansı acil durumda güvenilirliği belirler.",
        "target": 'seller'
      }
    ],
    "scenarios": [
      {
        "id": "gunluk",
        "title": "Günlük Kullanım",
        "description": "Uyumluluk, kolay kullanım ve maliyet dengesi önceliklidir.",
        "recommendedCriteriaIds": [
          "current",
          "voltage"
        ]
      },
      {
        "id": "yogun",
        "title": "Yoğun / Uzun Süreli Kullanım",
        "description": "Dayanıklılık, güvenlik ve servis edilebilirlik önceliklidir.",
        "recommendedCriteriaIds": [
          "voltage",
          "battery",
          "clamps"
        ]
      }
    ],
    "relatedGuideIds": [
      "arac-akusu-alirken",
      "arac-kamerasi-alirken",
      "powerbank-alirken"
    ]
  },

  // Eksik güçlü küme 6. Araç Kompresörü
  {
    "id": "arac-kompresoru-alirken",
    "slug": "arac-kompresoru-alirken",
    "categorySlug": "otomobil-motosiklet",
    "title": "Araç Kompresörü Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Araç Kompresörü Alırken",
    "description": "Araç Kompresörü alırken nelere dikkat edilmeli? Teknik uyumluluk, güvenlik, kullanım senaryosu ve toplam maliyet için uygulanabilir kontrol rehberi.",
    "intro": [
      "Araç Kompresörü seçiminde fiyat veya tek bir katalog değeri yeterli değildir. Kullanım koşulu, uyumluluk ve bakım maliyeti birlikte değerlendirilmelidir.",
      "Satın almadan önce teknik değerleri üretici belgesiyle doğrulamak, gereksiz özelliğe ödeme yapmayı ve yanlış ürün seçimini önler."
    ],
    "keywords": [
      "araç kompresörü",
      "araç kompresörü alırken nelere dikkat edilmeli",
      "araç kompresörü seçimi",
      "basınç ve debi",
      "çalışma döngüsü",
      "manometre doğruluğu"
    ],
    "aliases": [
      "araç kompresörü",
      "araç kompresörü"
    ],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      {
        "id": "pressure",
        "title": "Basınç ve Debi",
        "description": "Otomobil için gerekli PSI kadar litre/dakika debi de lastiği ne kadar sürede dolduracağını belirler.",
        "importance": 'critical'
      },
      {
        "id": "duty",
        "title": "Çalışma Döngüsü",
        "description": "Kesintisiz çalışma süresi ve soğuma gereksinimi büyük lastiklerde önemlidir.",
        "importance": 'critical'
      },
      {
        "id": "gauge",
        "title": "Manometre Doğruluğu",
        "description": "Dijital/analog göstergenin toleransı ve otomatik durdurma doğru basınç sağlar.",
        "importance": 'important'
      },
      {
        "id": "power",
        "title": "Güç Bağlantısı",
        "description": "12 V soket akım sınırı, doğrudan akü kıskacı veya bataryalı kullanım araçla uyumlu olmalıdır.",
        "importance": 'important'
      },
      {
        "id": "hose",
        "title": "Hortum ve Aksesuar",
        "description": "Hortum uzunluğu tüm tekerlere erişmeli; supap başlığı ve sigorta yedeği bulunmalıdır.",
        "importance": 'useful'
      }
    ],
    "checklistItems": [
      {
        "id": "c1",
        "text": "Basınç ve Debi kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c2",
        "text": "Çalışma Döngüsü kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c3",
        "text": "Manometre Doğruluğu kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c4",
        "text": "Güç Bağlantısı kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c5",
        "text": "Hortum ve Aksesuar kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'useful'
      }
    ],
    "redFlags": [
      {
        "id": "rf1",
        "title": "Maksimum PSI Pazarlaması",
        "explanation": "Yüksek PSI düşük debili cihazın lastiği hızlı dolduracağı anlamına gelmez."
      },
      {
        "id": "rf2",
        "title": "Sürekli Çalışma Süresi Gizli",
        "explanation": "Isınma koruması olmayan küçük kompresör ikinci lastikte durabilir."
      }
    ],
    "questions": [
      {
        "id": "q1",
        "question": "Basınç ve Debi için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Otomobil için gerekli PSI kadar litre/dakika debi de lastiği ne kadar sürede dolduracağını belirler.",
        "target": 'seller'
      },
      {
        "id": "q2",
        "question": "Çalışma Döngüsü için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Kesintisiz çalışma süresi ve soğuma gereksinimi büyük lastiklerde önemlidir.",
        "target": 'seller'
      },
      {
        "id": "q3",
        "question": "Manometre Doğruluğu için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Dijital/analog göstergenin toleransı ve otomatik durdurma doğru basınç sağlar.",
        "target": 'seller'
      }
    ],
    "scenarios": [
      {
        "id": "gunluk",
        "title": "Günlük Kullanım",
        "description": "Uyumluluk, kolay kullanım ve maliyet dengesi önceliklidir.",
        "recommendedCriteriaIds": [
          "pressure",
          "duty"
        ]
      },
      {
        "id": "yogun",
        "title": "Yoğun / Uzun Süreli Kullanım",
        "description": "Dayanıklılık, güvenlik ve servis edilebilirlik önceliklidir.",
        "recommendedCriteriaIds": [
          "duty",
          "gauge",
          "power"
        ]
      }
    ],
    "relatedGuideIds": [
      "otomobil-lastigi-alirken",
      "arac-akusu-alirken",
      "aku-takviye-cihazi-alirken"
    ]
  },

  // Eksik güçlü küme 7. Araç Brandası
  {
    "id": "arac-brandasi-alirken",
    "slug": "arac-brandasi-alirken",
    "categorySlug": "otomobil-motosiklet",
    "title": "Araç Brandası Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Araç Brandası Alırken",
    "description": "Araç Brandası alırken nelere dikkat edilmeli? Teknik uyumluluk, güvenlik, kullanım senaryosu ve toplam maliyet için uygulanabilir kontrol rehberi.",
    "intro": [
      "Araç Brandası seçiminde fiyat veya tek bir katalog değeri yeterli değildir. Kullanım koşulu, uyumluluk ve bakım maliyeti birlikte değerlendirilmelidir.",
      "Satın almadan önce teknik değerleri üretici belgesiyle doğrulamak, gereksiz özelliğe ödeme yapmayı ve yanlış ürün seçimini önler."
    ],
    "keywords": [
      "araç brandası",
      "araç brandası alırken nelere dikkat edilmeli",
      "araç brandası seçimi",
      "araç ölçüsü ve kesim",
      "nefes alabilirlik",
      "i̇ç astar"
    ],
    "aliases": [
      "araç brandası",
      "araç brandasi"
    ],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      {
        "id": "size",
        "title": "Araç Ölçüsü ve Kesim",
        "description": "Gövdeyi gergin ama zorlamadan örten, ayna ve anten yapısına uygun kalıp seçilmelidir.",
        "importance": 'critical'
      },
      {
        "id": "breath",
        "title": "Nefes Alabilirlik",
        "description": "Su geçirmez dış yüzeyle birlikte nemi atan katman yoğuşma, küf ve boya matlaşmasını önler.",
        "importance": 'critical'
      },
      {
        "id": "lining",
        "title": "İç Astar",
        "description": "Yumuşak ve temiz astar rüzgârda boya üzerinde zımpara etkisini azaltır.",
        "importance": 'important'
      },
      {
        "id": "weather",
        "title": "UV ve Hava Dayanımı",
        "description": "Güneş, dolu, kar ve yağmur kullanımına göre katman ve UV stabilitesi seçilmelidir.",
        "importance": 'important'
      },
      {
        "id": "fastening",
        "title": "Sabitleme ve Güvenlik",
        "description": "Alt kayış, elastik etek ve kilit deliği brandanın rüzgârda çıkmasını önler.",
        "importance": 'useful'
      }
    ],
    "checklistItems": [
      {
        "id": "c1",
        "text": "Araç Ölçüsü ve Kesim kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c2",
        "text": "Nefes Alabilirlik kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c3",
        "text": "İç Astar kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c4",
        "text": "UV ve Hava Dayanımı kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c5",
        "text": "Sabitleme ve Güvenlik kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'useful'
      }
    ],
    "redFlags": [
      {
        "id": "rf1",
        "title": "PVC Naylonla Boyayı Hapsetmek",
        "explanation": "Nefes almayan ucuz branda nemi içeride tutarak boya ve verniğe zarar verebilir."
      },
      {
        "id": "rf2",
        "title": "Kirli Araca Branda Takmak",
        "explanation": "Toz ve kum rüzgârla hareket edip astarın altında çizik oluşturur."
      }
    ],
    "questions": [
      {
        "id": "q1",
        "question": "Araç Ölçüsü ve Kesim için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Gövdeyi gergin ama zorlamadan örten, ayna ve anten yapısına uygun kalıp seçilmelidir.",
        "target": 'seller'
      },
      {
        "id": "q2",
        "question": "Nefes Alabilirlik için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Su geçirmez dış yüzeyle birlikte nemi atan katman yoğuşma, küf ve boya matlaşmasını önler.",
        "target": 'seller'
      },
      {
        "id": "q3",
        "question": "İç Astar için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Yumuşak ve temiz astar rüzgârda boya üzerinde zımpara etkisini azaltır.",
        "target": 'seller'
      }
    ],
    "scenarios": [
      {
        "id": "gunluk",
        "title": "Günlük Kullanım",
        "description": "Uyumluluk, kolay kullanım ve maliyet dengesi önceliklidir.",
        "recommendedCriteriaIds": [
          "size",
          "breath"
        ]
      },
      {
        "id": "yogun",
        "title": "Yoğun / Uzun Süreli Kullanım",
        "description": "Dayanıklılık, güvenlik ve servis edilebilirlik önceliklidir.",
        "recommendedCriteriaIds": [
          "breath",
          "lining",
          "weather"
        ]
      }
    ],
    "relatedGuideIds": [
      "tavan-bagaji-alirken",
      "ikinci-el-araba-alirken",
      "arac-kamerasi-alirken"
    ]
  },

  // Eksik güçlü küme 8. Elektrikli Araç Ev Şarj İstasyonu
  {
    "id": "ev-sarj-istasyonu-alirken",
    "slug": "ev-sarj-istasyonu-alirken",
    "categorySlug": "otomobil-motosiklet",
    "title": "Elektrikli Araç Ev Şarj İstasyonu Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Elektrikli Araç Ev Şarj İstasyonu Alırken",
    "description": "Elektrikli Araç Ev Şarj İstasyonu alırken nelere dikkat edilmeli? Teknik uyumluluk, güvenlik, kullanım senaryosu ve toplam maliyet için uygulanabilir kontrol rehberi.",
    "intro": [
      "Elektrikli Araç Ev Şarj İstasyonu seçiminde fiyat veya tek bir katalog değeri yeterli değildir. Kullanım koşulu, uyumluluk ve bakım maliyeti birlikte değerlendirilmelidir.",
      "Satın almadan önce teknik değerleri üretici belgesiyle doğrulamak, gereksiz özelliğe ödeme yapmayı ve yanlış ürün seçimini önler."
    ],
    "keywords": [
      "elektrikli araç ev şarj i̇stasyonu",
      "elektrikli araç ev şarj i̇stasyonu alırken nelere dikkat edilmeli",
      "elektrikli araç ev şarj i̇stasyonu seçimi",
      "şarj gücü ve faz",
      "soket ve kablo",
      "elektriksel koruma"
    ],
    "aliases": [
      "elektrikli araç ev şarj i̇stasyonu",
      "elektrikli araç ev sarj i̇stasyonu"
    ],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      {
        "id": "power",
        "title": "Şarj Gücü ve Faz",
        "description": "Araç içi AC şarj cihazı, tesisatın tek/üç faz kapasitesi ve abonelik gücü wallbox hızını sınırlar.",
        "importance": 'critical'
      },
      {
        "id": "connector",
        "title": "Soket ve Kablo",
        "description": "Type 2 soket, sabit kablo uzunluğu ve araç park yönü günlük kullanımı belirler.",
        "importance": 'critical'
      },
      {
        "id": "protection",
        "title": "Elektriksel Koruma",
        "description": "DC kaçak algılama, uygun RCD, topraklama ve ayrı sigorta hattı yetkili elektrikçi tarafından kurulmalıdır.",
        "importance": 'important'
      },
      {
        "id": "smart",
        "title": "Akıllı Yük Yönetimi",
        "description": "Dinamik load balancing ev tüketimine göre gücü ayarlayıp ana sigortanın atmasını önler.",
        "importance": 'important'
      },
      {
        "id": "billing",
        "title": "Erişim ve Ölçüm",
        "description": "RFID, zamanlama, enerji sayacı ve yerel ağ yönetimi ortak otopark ve tarife kullanımı için önemlidir.",
        "importance": 'useful'
      }
    ],
    "checklistItems": [
      {
        "id": "c1",
        "text": "Şarj Gücü ve Faz kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c2",
        "text": "Soket ve Kablo kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c3",
        "text": "Elektriksel Koruma kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c4",
        "text": "Akıllı Yük Yönetimi kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c5",
        "text": "Erişim ve Ölçüm kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'useful'
      }
    ],
    "redFlags": [
      {
        "id": "rf1",
        "title": "Araçtan Fazla Güç Satmak",
        "explanation": "22 kW wallbox, araç 11 kW AC kabul ediyorsa daha hızlı şarj etmez."
      },
      {
        "id": "rf2",
        "title": "Korumasız Ucuz Kurulum",
        "explanation": "Doğru RCD ve topraklama olmadan yapılan montaj yangın ve çarpılma riski taşır."
      }
    ],
    "questions": [
      {
        "id": "q1",
        "question": "Şarj Gücü ve Faz için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Araç içi AC şarj cihazı, tesisatın tek/üç faz kapasitesi ve abonelik gücü wallbox hızını sınırlar.",
        "target": 'seller'
      },
      {
        "id": "q2",
        "question": "Soket ve Kablo için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Type 2 soket, sabit kablo uzunluğu ve araç park yönü günlük kullanımı belirler.",
        "target": 'seller'
      },
      {
        "id": "q3",
        "question": "Elektriksel Koruma için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "DC kaçak algılama, uygun RCD, topraklama ve ayrı sigorta hattı yetkili elektrikçi tarafından kurulmalıdır.",
        "target": 'seller'
      }
    ],
    "scenarios": [
      {
        "id": "gunluk",
        "title": "Günlük Kullanım",
        "description": "Uyumluluk, kolay kullanım ve maliyet dengesi önceliklidir.",
        "recommendedCriteriaIds": [
          "power",
          "connector"
        ]
      },
      {
        "id": "yogun",
        "title": "Yoğun / Uzun Süreli Kullanım",
        "description": "Dayanıklılık, güvenlik ve servis edilebilirlik önceliklidir.",
        "recommendedCriteriaIds": [
          "connector",
          "protection",
          "smart"
        ]
      }
    ],
    "relatedGuideIds": [
      "ikinci-el-elektrikli-otomobil-alirken",
      "arac-akusu-alirken",
      "elektrikli-scooter-alirken"
    ]
  },

  // Eksik güçlü küme 9. İkinci El Elektrikli Otomobil
  {
    "id": "ikinci-el-elektrikli-otomobil-alirken",
    "slug": "ikinci-el-elektrikli-otomobil-alirken",
    "categorySlug": "otomobil-motosiklet",
    "title": "İkinci El Elektrikli Otomobil Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "İkinci El Elektrikli Otomobil Alırken",
    "description": "İkinci El Elektrikli Otomobil alırken nelere dikkat edilmeli? Teknik uyumluluk, güvenlik, kullanım senaryosu ve toplam maliyet için uygulanabilir kontrol rehberi.",
    "intro": [
      "İkinci El Elektrikli Otomobil seçiminde fiyat veya tek bir katalog değeri yeterli değildir. Kullanım koşulu, uyumluluk ve bakım maliyeti birlikte değerlendirilmelidir.",
      "Satın almadan önce teknik değerleri üretici belgesiyle doğrulamak, gereksiz özelliğe ödeme yapmayı ve yanlış ürün seçimini önler."
    ],
    "keywords": [
      "i̇kinci el elektrikli otomobil",
      "i̇kinci el elektrikli otomobil alırken nelere dikkat edilmeli",
      "i̇kinci el elektrikli otomobil seçimi",
      "batarya sağlık durumu (soh)",
      "ac/dc şarj testi",
      "batarya garantisi"
    ],
    "aliases": [
      "i̇kinci el elektrikli otomobil",
      "i̇kinci el elektrikli otomobil"
    ],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      {
        "id": "soh",
        "title": "Batarya Sağlık Durumu (SoH)",
        "description": "Servis raporu, hücre dengeleme ve kullanılabilir kapasite gerçek menzil ve değer için temel göstergedir.",
        "importance": 'critical'
      },
      {
        "id": "charging",
        "title": "AC/DC Şarj Testi",
        "description": "Araç hem AC hem hızlı DC istasyonda denenmeli; port kilidi, eğri ve hata kayıtları kontrol edilmelidir.",
        "importance": 'critical'
      },
      {
        "id": "warranty",
        "title": "Batarya Garantisi",
        "description": "Yıl, kilometre ve minimum kapasite şartı VIN ile doğrulanmalı; ithal araçta kapsam ayrıca incelenmelidir.",
        "importance": 'important'
      },
      {
        "id": "history",
        "title": "Hasar ve Alt Gövde",
        "description": "Batarya muhafazası, soğutma devresi ve alt gövde darbesi uzman ekspertizle incelenmelidir.",
        "importance": 'important'
      },
      {
        "id": "software",
        "title": "Yazılım ve Bağlantı",
        "description": "Güncelleme, uygulama, eSIM ve ücretli özelliklerin yeni sahibine devri netleştirilmelidir.",
        "importance": 'useful'
      }
    ],
    "checklistItems": [
      {
        "id": "c1",
        "text": "Batarya Sağlık Durumu (SoH) kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c2",
        "text": "AC/DC Şarj Testi kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c3",
        "text": "Batarya Garantisi kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c4",
        "text": "Hasar ve Alt Gövde kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c5",
        "text": "Yazılım ve Bağlantı kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'useful'
      }
    ],
    "redFlags": [
      {
        "id": "rf1",
        "title": "Menzil Ekranını Batarya Raporu Sanmak",
        "explanation": "Tahmini menzil sürüş geçmişine bağlıdır; SoH ölçümü yerine geçmez."
      },
      {
        "id": "rf2",
        "title": "Alt Batarya Hasarını Gizlemek",
        "explanation": "Kaldırmadan yapılan standart ekspertiz batarya kasası darbesini kaçırabilir."
      }
    ],
    "questions": [
      {
        "id": "q1",
        "question": "Batarya Sağlık Durumu (SoH) için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Servis raporu, hücre dengeleme ve kullanılabilir kapasite gerçek menzil ve değer için temel göstergedir.",
        "target": 'seller'
      },
      {
        "id": "q2",
        "question": "AC/DC Şarj Testi için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Araç hem AC hem hızlı DC istasyonda denenmeli; port kilidi, eğri ve hata kayıtları kontrol edilmelidir.",
        "target": 'seller'
      },
      {
        "id": "q3",
        "question": "Batarya Garantisi için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Yıl, kilometre ve minimum kapasite şartı VIN ile doğrulanmalı; ithal araçta kapsam ayrıca incelenmelidir.",
        "target": 'seller'
      }
    ],
    "scenarios": [
      {
        "id": "gunluk",
        "title": "Günlük Kullanım",
        "description": "Uyumluluk, kolay kullanım ve maliyet dengesi önceliklidir.",
        "recommendedCriteriaIds": [
          "soh",
          "charging"
        ]
      },
      {
        "id": "yogun",
        "title": "Yoğun / Uzun Süreli Kullanım",
        "description": "Dayanıklılık, güvenlik ve servis edilebilirlik önceliklidir.",
        "recommendedCriteriaIds": [
          "charging",
          "warranty",
          "history"
        ]
      }
    ],
    "relatedGuideIds": [
      "ev-sarj-istasyonu-alirken",
      "ikinci-el-araba-alirken",
      "otomobil-lastigi-alirken"
    ]
  },

  // Eksik güçlü küme 10. Hibrit Otomobil
  {
    "id": "hibrit-otomobil-alirken",
    "slug": "hibrit-otomobil-alirken",
    "categorySlug": "otomobil-motosiklet",
    "title": "Hibrit Otomobil Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Hibrit Otomobil Alırken",
    "description": "Hibrit Otomobil alırken nelere dikkat edilmeli? Teknik uyumluluk, güvenlik, kullanım senaryosu ve toplam maliyet için uygulanabilir kontrol rehberi.",
    "intro": [
      "Hibrit Otomobil seçiminde fiyat veya tek bir katalog değeri yeterli değildir. Kullanım koşulu, uyumluluk ve bakım maliyeti birlikte değerlendirilmelidir.",
      "Satın almadan önce teknik değerleri üretici belgesiyle doğrulamak, gereksiz özelliğe ödeme yapmayı ve yanlış ürün seçimini önler."
    ],
    "keywords": [
      "hibrit otomobil",
      "hibrit otomobil alırken nelere dikkat edilmeli",
      "hibrit otomobil seçimi",
      "hibrit türü",
      "güzergâh ve tüketim",
      "batarya durumu ve garanti"
    ],
    "aliases": [
      "hibrit otomobil",
      "hibrit otomobil"
    ],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      {
        "id": "type",
        "title": "Hibrit Türü",
        "description": "Mild, tam hibrit ve plug-in hibritlerin elektrikli sürüş, şarj ve tüketim davranışı farklıdır.",
        "importance": 'critical'
      },
      {
        "id": "usage",
        "title": "Güzergâh ve Tüketim",
        "description": "Şehir içi dur-kalk tam hibrite, düzenli şarj edilen kısa rota plug-in hibrite daha uygundur.",
        "importance": 'critical'
      },
      {
        "id": "battery",
        "title": "Batarya Durumu ve Garanti",
        "description": "Kapasite, soğutma kanalı bakımı ve garanti koşulu ikinci el değerini etkiler.",
        "importance": 'important'
      },
      {
        "id": "charging",
        "title": "Şarj İmkânı",
        "description": "Plug-in model düzenli şarj edilmezse ağır benzinli araç gibi tüketebilir.",
        "importance": 'important'
      },
      {
        "id": "service",
        "title": "Servis ve Fren Sistemi",
        "description": "Yüksek voltaj yetkinliği, rejeneratif fren ve 12 V sistem bakım geçmişi incelenmelidir.",
        "importance": 'useful'
      }
    ],
    "checklistItems": [
      {
        "id": "c1",
        "text": "Hibrit Türü kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c2",
        "text": "Güzergâh ve Tüketim kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c3",
        "text": "Batarya Durumu ve Garanti kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c4",
        "text": "Şarj İmkânı kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c5",
        "text": "Servis ve Fren Sistemi kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'useful'
      }
    ],
    "redFlags": [
      {
        "id": "rf1",
        "title": "Şarjsız Plug-in Tasarruf Vaadi",
        "explanation": "PHEV düzenli şarj edilmediğinde katalog tüketimini yakalayamaz."
      },
      {
        "id": "rf2",
        "title": "Hibriti Elektrikli Araç Gibi Sunmak",
        "explanation": "Mild hibrit çoğunlukla yalnız motoru destekler; elektrikle bağımsız sürüş yapmaz."
      }
    ],
    "questions": [
      {
        "id": "q1",
        "question": "Hibrit Türü için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Mild, tam hibrit ve plug-in hibritlerin elektrikli sürüş, şarj ve tüketim davranışı farklıdır.",
        "target": 'seller'
      },
      {
        "id": "q2",
        "question": "Güzergâh ve Tüketim için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Şehir içi dur-kalk tam hibrite, düzenli şarj edilen kısa rota plug-in hibrite daha uygundur.",
        "target": 'seller'
      },
      {
        "id": "q3",
        "question": "Batarya Durumu ve Garanti için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Kapasite, soğutma kanalı bakımı ve garanti koşulu ikinci el değerini etkiler.",
        "target": 'seller'
      }
    ],
    "scenarios": [
      {
        "id": "gunluk",
        "title": "Günlük Kullanım",
        "description": "Uyumluluk, kolay kullanım ve maliyet dengesi önceliklidir.",
        "recommendedCriteriaIds": [
          "type",
          "usage"
        ]
      },
      {
        "id": "yogun",
        "title": "Yoğun / Uzun Süreli Kullanım",
        "description": "Dayanıklılık, güvenlik ve servis edilebilirlik önceliklidir.",
        "recommendedCriteriaIds": [
          "usage",
          "battery",
          "charging"
        ]
      }
    ],
    "relatedGuideIds": [
      "ikinci-el-elektrikli-otomobil-alirken",
      "ev-sarj-istasyonu-alirken",
      "ikinci-el-araba-alirken"
    ]
  },

  // Eksik güçlü küme 11. Elektrikli Bisiklet
  {
    "id": "elektrikli-bisiklet-alirken",
    "slug": "elektrikli-bisiklet-alirken",
    "categorySlug": "otomobil-motosiklet",
    "title": "Elektrikli Bisiklet Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Elektrikli Bisiklet Alırken",
    "description": "Elektrikli Bisiklet alırken nelere dikkat edilmeli? Teknik uyumluluk, güvenlik, kullanım senaryosu ve toplam maliyet için uygulanabilir kontrol rehberi.",
    "intro": [
      "Elektrikli Bisiklet seçiminde fiyat veya tek bir katalog değeri yeterli değildir. Kullanım koşulu, uyumluluk ve bakım maliyeti birlikte değerlendirilmelidir.",
      "Satın almadan önce teknik değerleri üretici belgesiyle doğrulamak, gereksiz özelliğe ödeme yapmayı ve yanlış ürün seçimini önler."
    ],
    "keywords": [
      "elektrikli bisiklet",
      "elektrikli bisiklet alırken nelere dikkat edilmeli",
      "elektrikli bisiklet seçimi",
      "motor konumu ve tork",
      "batarya kapasitesi ve hücre",
      "gerçek menzil"
    ],
    "aliases": [
      "elektrikli bisiklet",
      "elektrikli bisiklet"
    ],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      {
        "id": "motor",
        "title": "Motor Konumu ve Tork",
        "description": "Orta motor doğal sürüş ve yokuş, göbek motor düşük bakım sunar; Nm tork kullanıcı ve eğimle eşleşmelidir.",
        "importance": 'critical'
      },
      {
        "id": "battery",
        "title": "Batarya Kapasitesi ve Hücre",
        "description": "Wh değeri gerçek enerji kapasitesidir; hücre üreticisi, BMS ve sökülebilirlik önemlidir.",
        "importance": 'critical'
      },
      {
        "id": "range",
        "title": "Gerçek Menzil",
        "description": "Destek seviyesi, ağırlık, eğim ve sıcaklık katalog menzilini ciddi değiştirir.",
        "importance": 'important'
      },
      {
        "id": "legal",
        "title": "Güç ve Hız Sınıfı",
        "description": "250 W ve 25 km/s destek sınırı gibi yerel sınıflar ehliyet ve trafik durumunu belirler.",
        "importance": 'important'
      },
      {
        "id": "bike",
        "title": "Bisiklet Donanımı",
        "description": "Kadro uyumu, hidrolik fren, lastik, aktarma ve servis ağı motor kadar önemlidir.",
        "importance": 'useful'
      }
    ],
    "checklistItems": [
      {
        "id": "c1",
        "text": "Motor Konumu ve Tork kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c2",
        "text": "Batarya Kapasitesi ve Hücre kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c3",
        "text": "Gerçek Menzil kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c4",
        "text": "Güç ve Hız Sınıfı kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c5",
        "text": "Bisiklet Donanımı kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'useful'
      }
    ],
    "redFlags": [
      {
        "id": "rf1",
        "title": "Wh Yerine Yalnız Ah",
        "explanation": "Voltaj bilinmeden Ah değeri batarya kapasitesini karşılaştırmaya yetmez."
      },
      {
        "id": "rf2",
        "title": "Servissiz Kapalı Batarya",
        "explanation": "Hücre veya BMS arızasında komple pahalı batarya değişimi gerekebilir."
      }
    ],
    "questions": [
      {
        "id": "q1",
        "question": "Motor Konumu ve Tork için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Orta motor doğal sürüş ve yokuş, göbek motor düşük bakım sunar; Nm tork kullanıcı ve eğimle eşleşmelidir.",
        "target": 'seller'
      },
      {
        "id": "q2",
        "question": "Batarya Kapasitesi ve Hücre için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Wh değeri gerçek enerji kapasitesidir; hücre üreticisi, BMS ve sökülebilirlik önemlidir.",
        "target": 'seller'
      },
      {
        "id": "q3",
        "question": "Gerçek Menzil için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Destek seviyesi, ağırlık, eğim ve sıcaklık katalog menzilini ciddi değiştirir.",
        "target": 'seller'
      }
    ],
    "scenarios": [
      {
        "id": "gunluk",
        "title": "Günlük Kullanım",
        "description": "Uyumluluk, kolay kullanım ve maliyet dengesi önceliklidir.",
        "recommendedCriteriaIds": [
          "motor",
          "battery"
        ]
      },
      {
        "id": "yogun",
        "title": "Yoğun / Uzun Süreli Kullanım",
        "description": "Dayanıklılık, güvenlik ve servis edilebilirlik önceliklidir.",
        "recommendedCriteriaIds": [
          "battery",
          "range",
          "legal"
        ]
      }
    ],
    "relatedGuideIds": [
      "bisiklet-alirken",
      "elektrikli-scooter-alirken",
      "motosiklet-kaski-alirken"
    ]
  },

  // Eksik güçlü küme 12. Motosiklet Lastiği
  {
    "id": "motosiklet-lastigi-alirken",
    "slug": "motosiklet-lastigi-alirken",
    "categorySlug": "otomobil-motosiklet",
    "title": "Motosiklet Lastiği Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Motosiklet Lastiği Alırken",
    "description": "Motosiklet Lastiği alırken nelere dikkat edilmeli? Teknik uyumluluk, güvenlik, kullanım senaryosu ve toplam maliyet için uygulanabilir kontrol rehberi.",
    "intro": [
      "Motosiklet Lastiği seçiminde fiyat veya tek bir katalog değeri yeterli değildir. Kullanım koşulu, uyumluluk ve bakım maliyeti birlikte değerlendirilmelidir.",
      "Satın almadan önce teknik değerleri üretici belgesiyle doğrulamak, gereksiz özelliğe ödeme yapmayı ve yanlış ürün seçimini önler."
    ],
    "keywords": [
      "motosiklet lastiği",
      "motosiklet lastiği alırken nelere dikkat edilmeli",
      "motosiklet lastiği seçimi",
      "ebat ve yapı",
      "yük ve hız endeksi",
      "hamur ve kullanım"
    ],
    "aliases": [
      "motosiklet lastiği",
      "motosiklet lastigi"
    ],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      {
        "id": "size",
        "title": "Ebat ve Yapı",
        "description": "Genişlik, yanak, jant çapı, radial/diagonal yapı üretici onayıyla uyumlu olmalıdır.",
        "importance": 'critical'
      },
      {
        "id": "indices",
        "title": "Yük ve Hız Endeksi",
        "description": "Motosiklet ve kullanım hızının altında endeks seçilmemeli; ön/arka yön ve konum işaretleri doğru olmalıdır.",
        "importance": 'critical'
      },
      {
        "id": "compound",
        "title": "Hamur ve Kullanım",
        "description": "Touring ömür, sport tutuş, adventure karma zemin dengesi sunar; sıcaklık ve yol koşulu belirleyicidir.",
        "importance": 'important'
      },
      {
        "id": "dot",
        "title": "DOT ve Depolama",
        "description": "Üretim haftası/yılı, kauçuk sertliği ve saklama koşulu birlikte kontrol edilmelidir.",
        "importance": 'important'
      },
      {
        "id": "pressure",
        "title": "Basınç ve Isınma",
        "description": "Soğuk basınç üretici değerine göre ayarlanmalı; pist/yük/iki kişi için ayrı değerlendirilmelidir.",
        "importance": 'useful'
      }
    ],
    "checklistItems": [
      {
        "id": "c1",
        "text": "Ebat ve Yapı kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c2",
        "text": "Yük ve Hız Endeksi kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c3",
        "text": "Hamur ve Kullanım kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c4",
        "text": "DOT ve Depolama kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c5",
        "text": "Basınç ve Isınma kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'useful'
      }
    ],
    "redFlags": [
      {
        "id": "rf1",
        "title": "Eski DOT Kampanyası",
        "explanation": "Yanlış depolanmış eski lastik görünüşte yeni olsa da sertleşmiş olabilir."
      },
      {
        "id": "rf2",
        "title": "Uyumsuz Ön-Arka Set",
        "explanation": "Farklı profil ve hamur kombinasyonu motosikletin yönlendirme davranışını bozabilir."
      }
    ],
    "questions": [
      {
        "id": "q1",
        "question": "Ebat ve Yapı için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Genişlik, yanak, jant çapı, radial/diagonal yapı üretici onayıyla uyumlu olmalıdır.",
        "target": 'seller'
      },
      {
        "id": "q2",
        "question": "Yük ve Hız Endeksi için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Motosiklet ve kullanım hızının altında endeks seçilmemeli; ön/arka yön ve konum işaretleri doğru olmalıdır.",
        "target": 'seller'
      },
      {
        "id": "q3",
        "question": "Hamur ve Kullanım için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Touring ömür, sport tutuş, adventure karma zemin dengesi sunar; sıcaklık ve yol koşulu belirleyicidir.",
        "target": 'seller'
      }
    ],
    "scenarios": [
      {
        "id": "gunluk",
        "title": "Günlük Kullanım",
        "description": "Uyumluluk, kolay kullanım ve maliyet dengesi önceliklidir.",
        "recommendedCriteriaIds": [
          "size",
          "indices"
        ]
      },
      {
        "id": "yogun",
        "title": "Yoğun / Uzun Süreli Kullanım",
        "description": "Dayanıklılık, güvenlik ve servis edilebilirlik önceliklidir.",
        "recommendedCriteriaIds": [
          "indices",
          "compound",
          "dot"
        ]
      }
    ],
    "relatedGuideIds": [
      "motosiklet-alirken",
      "motosiklet-kaski-alirken",
      "motosiklet-montu-alirken"
    ]
  },

  // Eksik güçlü küme 13. Motosiklet İnterkomu
  {
    "id": "motosiklet-interkomu-alirken",
    "slug": "motosiklet-interkomu-alirken",
    "categorySlug": "otomobil-motosiklet",
    "title": "Motosiklet İnterkomu Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Motosiklet İnterkomu Alırken",
    "description": "Motosiklet İnterkomu alırken nelere dikkat edilmeli? Teknik uyumluluk, güvenlik, kullanım senaryosu ve toplam maliyet için uygulanabilir kontrol rehberi.",
    "intro": [
      "Motosiklet İnterkomu seçiminde fiyat veya tek bir katalog değeri yeterli değildir. Kullanım koşulu, uyumluluk ve bakım maliyeti birlikte değerlendirilmelidir.",
      "Satın almadan önce teknik değerleri üretici belgesiyle doğrulamak, gereksiz özelliğe ödeme yapmayı ve yanlış ürün seçimini önler."
    ],
    "keywords": [
      "motosiklet i̇nterkomu",
      "motosiklet i̇nterkomu alırken nelere dikkat edilmeli",
      "motosiklet i̇nterkomu seçimi",
      "grup ve ağ teknolojisi",
      "gerçek menzil",
      "kask uyumu"
    ],
    "aliases": [
      "motosiklet i̇nterkomu",
      "motosiklet i̇nterkomu"
    ],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      {
        "id": "group",
        "title": "Grup ve Ağ Teknolojisi",
        "description": "Bluetooth zincir bağlantı ile mesh ağın grup kapasitesi ve yeniden bağlanma davranışı farklıdır.",
        "importance": 'critical'
      },
      {
        "id": "range",
        "title": "Gerçek Menzil",
        "description": "Açık alan katalog menzili şehir, viraj ve araçlar arasında düşer; grup aralığına göre seçilmelidir.",
        "importance": 'critical'
      },
      {
        "id": "helmet",
        "title": "Kask Uyumu",
        "description": "Hoparlör yuvası, mikrofon tipi ve kelepçe/yapıştırma montajı kaskla uyumlu olmalıdır.",
        "importance": 'important'
      },
      {
        "id": "audio",
        "title": "Ses ve Gürültü Kontrolü",
        "description": "Hızda anlaşılır konuşma, otomatik ses ve mikrofon gürültü bastırma önemlidir.",
        "importance": 'important'
      },
      {
        "id": "battery",
        "title": "Pil ve Su Koruması",
        "description": "Konuşma süresi, sürüşte şarj ve IP derecesi uzun tur kullanımını belirler.",
        "importance": 'useful'
      }
    ],
    "checklistItems": [
      {
        "id": "c1",
        "text": "Grup ve Ağ Teknolojisi kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c2",
        "text": "Gerçek Menzil kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c3",
        "text": "Kask Uyumu kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c4",
        "text": "Ses ve Gürültü Kontrolü kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c5",
        "text": "Pil ve Su Koruması kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'useful'
      }
    ],
    "redFlags": [
      {
        "id": "rf1",
        "title": "Sonsuz Grup İddiası",
        "explanation": "Bluetooth zincirde bir bağlantının kopması sonraki sürücüleri de düşürebilir."
      },
      {
        "id": "rf2",
        "title": "Kask Güvenliğini Bozan Montaj",
        "explanation": "EPS köpüğünü kesmek veya delmek kaskın korumasını zayıflatır."
      }
    ],
    "questions": [
      {
        "id": "q1",
        "question": "Grup ve Ağ Teknolojisi için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Bluetooth zincir bağlantı ile mesh ağın grup kapasitesi ve yeniden bağlanma davranışı farklıdır.",
        "target": 'seller'
      },
      {
        "id": "q2",
        "question": "Gerçek Menzil için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Açık alan katalog menzili şehir, viraj ve araçlar arasında düşer; grup aralığına göre seçilmelidir.",
        "target": 'seller'
      },
      {
        "id": "q3",
        "question": "Kask Uyumu için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Hoparlör yuvası, mikrofon tipi ve kelepçe/yapıştırma montajı kaskla uyumlu olmalıdır.",
        "target": 'seller'
      }
    ],
    "scenarios": [
      {
        "id": "gunluk",
        "title": "Günlük Kullanım",
        "description": "Uyumluluk, kolay kullanım ve maliyet dengesi önceliklidir.",
        "recommendedCriteriaIds": [
          "group",
          "range"
        ]
      },
      {
        "id": "yogun",
        "title": "Yoğun / Uzun Süreli Kullanım",
        "description": "Dayanıklılık, güvenlik ve servis edilebilirlik önceliklidir.",
        "recommendedCriteriaIds": [
          "range",
          "helmet",
          "audio"
        ]
      }
    ],
    "relatedGuideIds": [
      "motosiklet-kaski-alirken",
      "motosiklet-alirken",
      "motosiklet-topcase-alirken"
    ]
  },

  // Eksik güçlü küme 14. Motosiklet Montu
  {
    "id": "motosiklet-montu-alirken",
    "slug": "motosiklet-montu-alirken",
    "categorySlug": "otomobil-motosiklet",
    "title": "Motosiklet Montu Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Motosiklet Montu Alırken",
    "description": "Motosiklet Montu alırken nelere dikkat edilmeli? Teknik uyumluluk, güvenlik, kullanım senaryosu ve toplam maliyet için uygulanabilir kontrol rehberi.",
    "intro": [
      "Motosiklet Montu seçiminde fiyat veya tek bir katalog değeri yeterli değildir. Kullanım koşulu, uyumluluk ve bakım maliyeti birlikte değerlendirilmelidir.",
      "Satın almadan önce teknik değerleri üretici belgesiyle doğrulamak, gereksiz özelliğe ödeme yapmayı ve yanlış ürün seçimini önler."
    ],
    "keywords": [
      "motosiklet montu",
      "motosiklet montu alırken nelere dikkat edilmeli",
      "motosiklet montu seçimi",
      "ce giysi sertifikası",
      "koruyucu bölgeler",
      "aşınma ve dikiş"
    ],
    "aliases": [
      "motosiklet montu",
      "motosiklet montu"
    ],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      {
        "id": "ce",
        "title": "CE Giysi Sertifikası",
        "description": "EN 17092 A/AA/AAA sınıfı tüm montu; yalnız koruyucu etiketi giysinin aşınma dayanımını göstermez.",
        "importance": 'critical'
      },
      {
        "id": "armor",
        "title": "Koruyucu Bölgeler",
        "description": "Omuz ve dirsek EN 1621-1, sırt EN 1621-2 korumaları ve seviye 1/2 değerleri kontrol edilmelidir.",
        "importance": 'critical'
      },
      {
        "id": "abrasion",
        "title": "Aşınma ve Dikiş",
        "description": "Darbe bölgelerinde dayanıklı kumaş/deri, çift dikiş ve güvenli cep yapısı gerekir.",
        "importance": 'important'
      },
      {
        "id": "climate",
        "title": "Mevsim ve Havalandırma",
        "description": "Mesh yaz, membran yağmur, çıkarılabilir termal astar geçiş mevsimi için farklı dengeler sunar.",
        "importance": 'important'
      },
      {
        "id": "fit",
        "title": "Sürüş Pozisyonu Uyumu",
        "description": "Korumalar gidon pozisyonunda yerinde kalmalı; eldiven ve pantolon bağlantıları denenmelidir.",
        "importance": 'useful'
      }
    ],
    "checklistItems": [
      {
        "id": "c1",
        "text": "CE Giysi Sertifikası kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c2",
        "text": "Koruyucu Bölgeler kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c3",
        "text": "Aşınma ve Dikiş kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c4",
        "text": "Mevsim ve Havalandırma kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c5",
        "text": "Sürüş Pozisyonu Uyumu kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'useful'
      }
    ],
    "redFlags": [
      {
        "id": "rf1",
        "title": "Sadece Koruma CE Etiketi",
        "explanation": "Omuz pedinin CE olması montun bütününün motosiklet giysisi sertifikalı olduğu anlamına gelmez."
      },
      {
        "id": "rf2",
        "title": "Moda Montunu Motosiklet Montu Sanmak",
        "explanation": "Görünüşü benzer günlük mont düşmede aşınma ve dikiş dayanımı sunmaz."
      }
    ],
    "questions": [
      {
        "id": "q1",
        "question": "CE Giysi Sertifikası için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "EN 17092 A/AA/AAA sınıfı tüm montu; yalnız koruyucu etiketi giysinin aşınma dayanımını göstermez.",
        "target": 'seller'
      },
      {
        "id": "q2",
        "question": "Koruyucu Bölgeler için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Omuz ve dirsek EN 1621-1, sırt EN 1621-2 korumaları ve seviye 1/2 değerleri kontrol edilmelidir.",
        "target": 'seller'
      },
      {
        "id": "q3",
        "question": "Aşınma ve Dikiş için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Darbe bölgelerinde dayanıklı kumaş/deri, çift dikiş ve güvenli cep yapısı gerekir.",
        "target": 'seller'
      }
    ],
    "scenarios": [
      {
        "id": "gunluk",
        "title": "Günlük Kullanım",
        "description": "Uyumluluk, kolay kullanım ve maliyet dengesi önceliklidir.",
        "recommendedCriteriaIds": [
          "ce",
          "armor"
        ]
      },
      {
        "id": "yogun",
        "title": "Yoğun / Uzun Süreli Kullanım",
        "description": "Dayanıklılık, güvenlik ve servis edilebilirlik önceliklidir.",
        "recommendedCriteriaIds": [
          "armor",
          "abrasion",
          "climate"
        ]
      }
    ],
    "relatedGuideIds": [
      "motosiklet-kaski-alirken",
      "motosiklet-eldiveni-alirken",
      "motosiklet-botu-alirken"
    ]
  },

  // Eksik güçlü küme 15. Motosiklet Eldiveni
  {
    "id": "motosiklet-eldiveni-alirken",
    "slug": "motosiklet-eldiveni-alirken",
    "categorySlug": "otomobil-motosiklet",
    "title": "Motosiklet Eldiveni Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Motosiklet Eldiveni Alırken",
    "description": "Motosiklet Eldiveni alırken nelere dikkat edilmeli? Teknik uyumluluk, güvenlik, kullanım senaryosu ve toplam maliyet için uygulanabilir kontrol rehberi.",
    "intro": [
      "Motosiklet Eldiveni seçiminde fiyat veya tek bir katalog değeri yeterli değildir. Kullanım koşulu, uyumluluk ve bakım maliyeti birlikte değerlendirilmelidir.",
      "Satın almadan önce teknik değerleri üretici belgesiyle doğrulamak, gereksiz özelliğe ödeme yapmayı ve yanlış ürün seçimini önler."
    ],
    "keywords": [
      "motosiklet eldiveni",
      "motosiklet eldiveni alırken nelere dikkat edilmeli",
      "motosiklet eldiveni seçimi",
      "ce standardı",
      "kalıp ve kontrol",
      "avuç ve eklem koruması"
    ],
    "aliases": [
      "motosiklet eldiveni",
      "motosiklet eldiveni"
    ],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      {
        "id": "ce",
        "title": "CE Standardı",
        "description": "EN 13594 sertifikası, koruma seviyesi ve KP eklem koruması gerçek motosiklet eldivenini ayırır.",
        "importance": 'critical'
      },
      {
        "id": "fit",
        "title": "Kalıp ve Kontrol",
        "description": "Parmaklar bükülü sürüş pozisyonunda sıkmamalı; avuç içinde kumaş toplanıp gaz/fren hissini bozmamalıdır.",
        "importance": 'critical'
      },
      {
        "id": "protection",
        "title": "Avuç ve Eklem Koruması",
        "description": "Darbe koruması, avuç kaydırıcı ve serçe parmak bağlantısı yaralanma riskini azaltır.",
        "importance": 'important'
      },
      {
        "id": "season",
        "title": "Mevsim ve Membran",
        "description": "Yazda havalandırma, kışta yalıtım, yağmurda su geçirmez ama kontrollere duyarlı membran gerekir.",
        "importance": 'important'
      },
      {
        "id": "closure",
        "title": "Bilek Kapatma",
        "description": "Düşmede eldivenin çıkmasını önleyen ayrı bilek kayışı ve manşet kapatma bulunmalıdır.",
        "importance": 'useful'
      }
    ],
    "checklistItems": [
      {
        "id": "c1",
        "text": "CE Standardı kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c2",
        "text": "Kalıp ve Kontrol kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c3",
        "text": "Avuç ve Eklem Koruması kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c4",
        "text": "Mevsim ve Membran kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c5",
        "text": "Bilek Kapatma kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'useful'
      }
    ],
    "redFlags": [
      {
        "id": "rf1",
        "title": "Dokunmatik Uçtan İbaret Ürün",
        "explanation": "Telefon uyumu güvenlik sertifikası ve avuç korumasının yerine geçmez."
      },
      {
        "id": "rf2",
        "title": "Bilek Kayışsız Kısa Eldiven",
        "explanation": "Düşme anında eldiven elden sıyrılabilir."
      }
    ],
    "questions": [
      {
        "id": "q1",
        "question": "CE Standardı için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "EN 13594 sertifikası, koruma seviyesi ve KP eklem koruması gerçek motosiklet eldivenini ayırır.",
        "target": 'seller'
      },
      {
        "id": "q2",
        "question": "Kalıp ve Kontrol için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Parmaklar bükülü sürüş pozisyonunda sıkmamalı; avuç içinde kumaş toplanıp gaz/fren hissini bozmamalıdır.",
        "target": 'seller'
      },
      {
        "id": "q3",
        "question": "Avuç ve Eklem Koruması için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Darbe koruması, avuç kaydırıcı ve serçe parmak bağlantısı yaralanma riskini azaltır.",
        "target": 'seller'
      }
    ],
    "scenarios": [
      {
        "id": "gunluk",
        "title": "Günlük Kullanım",
        "description": "Uyumluluk, kolay kullanım ve maliyet dengesi önceliklidir.",
        "recommendedCriteriaIds": [
          "ce",
          "fit"
        ]
      },
      {
        "id": "yogun",
        "title": "Yoğun / Uzun Süreli Kullanım",
        "description": "Dayanıklılık, güvenlik ve servis edilebilirlik önceliklidir.",
        "recommendedCriteriaIds": [
          "fit",
          "protection",
          "season"
        ]
      }
    ],
    "relatedGuideIds": [
      "motosiklet-montu-alirken",
      "motosiklet-kaski-alirken",
      "motosiklet-botu-alirken"
    ]
  },

  // Eksik güçlü küme 16. Motosiklet Botu
  {
    "id": "motosiklet-botu-alirken",
    "slug": "motosiklet-botu-alirken",
    "categorySlug": "otomobil-motosiklet",
    "title": "Motosiklet Botu Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Motosiklet Botu Alırken",
    "description": "Motosiklet Botu alırken nelere dikkat edilmeli? Teknik uyumluluk, güvenlik, kullanım senaryosu ve toplam maliyet için uygulanabilir kontrol rehberi.",
    "intro": [
      "Motosiklet Botu seçiminde fiyat veya tek bir katalog değeri yeterli değildir. Kullanım koşulu, uyumluluk ve bakım maliyeti birlikte değerlendirilmelidir.",
      "Satın almadan önce teknik değerleri üretici belgesiyle doğrulamak, gereksiz özelliğe ödeme yapmayı ve yanlış ürün seçimini önler."
    ],
    "keywords": [
      "motosiklet botu",
      "motosiklet botu alırken nelere dikkat edilmeli",
      "motosiklet botu seçimi",
      "ce ayakkabı standardı",
      "bilek ve kaval koruması",
      "taban ve burulma"
    ],
    "aliases": [
      "motosiklet botu",
      "motosiklet botu"
    ],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      {
        "id": "ce",
        "title": "CE Ayakkabı Standardı",
        "description": "EN 13634 etiketi; aşınma, kesilme ve enine sertlik seviyeleriyle okunmalıdır.",
        "importance": 'critical'
      },
      {
        "id": "ankle",
        "title": "Bilek ve Kaval Koruması",
        "description": "İki yandan bilek desteği, topuk/burun sertliği ve uzun modelde kaval koruması gerekir.",
        "importance": 'critical'
      },
      {
        "id": "sole",
        "title": "Taban ve Burulma",
        "description": "Yağda kaymayan taban, burulma direnci ve motosiklet peg/fren kontrolü arasında denge kurulmalıdır.",
        "importance": 'important'
      },
      {
        "id": "water",
        "title": "Su Koruması ve Nefes",
        "description": "Membran yağmurda korur; sıcak havada havalandırmalı model daha güvenli kontrol hissi sunabilir.",
        "importance": 'important'
      },
      {
        "id": "closure",
        "title": "Kapatma ve Vites Pedi",
        "description": "Fermuar/toka düşmede açılmamalı; vites pedi ve pantolonla uyum denenmelidir.",
        "importance": 'useful'
      }
    ],
    "checklistItems": [
      {
        "id": "c1",
        "text": "CE Ayakkabı Standardı kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c2",
        "text": "Bilek ve Kaval Koruması kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c3",
        "text": "Taban ve Burulma kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c4",
        "text": "Su Koruması ve Nefes kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c5",
        "text": "Kapatma ve Vites Pedi kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'useful'
      }
    ],
    "redFlags": [
      {
        "id": "rf1",
        "title": "Günlük Bot Görünümü",
        "explanation": "CE sertifikasız moda botu bilek burulması ve aşınmaya karşı motosiklet koruması sağlamaz."
      },
      {
        "id": "rf2",
        "title": "Aşırı Kalın Taban",
        "explanation": "Vites ve arka fren hissini azaltarak kontrolü bozar."
      }
    ],
    "questions": [
      {
        "id": "q1",
        "question": "CE Ayakkabı Standardı için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "EN 13634 etiketi; aşınma, kesilme ve enine sertlik seviyeleriyle okunmalıdır.",
        "target": 'seller'
      },
      {
        "id": "q2",
        "question": "Bilek ve Kaval Koruması için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "İki yandan bilek desteği, topuk/burun sertliği ve uzun modelde kaval koruması gerekir.",
        "target": 'seller'
      },
      {
        "id": "q3",
        "question": "Taban ve Burulma için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Yağda kaymayan taban, burulma direnci ve motosiklet peg/fren kontrolü arasında denge kurulmalıdır.",
        "target": 'seller'
      }
    ],
    "scenarios": [
      {
        "id": "gunluk",
        "title": "Günlük Kullanım",
        "description": "Uyumluluk, kolay kullanım ve maliyet dengesi önceliklidir.",
        "recommendedCriteriaIds": [
          "ce",
          "ankle"
        ]
      },
      {
        "id": "yogun",
        "title": "Yoğun / Uzun Süreli Kullanım",
        "description": "Dayanıklılık, güvenlik ve servis edilebilirlik önceliklidir.",
        "recommendedCriteriaIds": [
          "ankle",
          "sole",
          "water"
        ]
      }
    ],
    "relatedGuideIds": [
      "motosiklet-montu-alirken",
      "motosiklet-eldiveni-alirken",
      "motosiklet-kaski-alirken"
    ]
  },

  // Eksik güçlü küme 17. Motosiklet Kilidi
  {
    "id": "motosiklet-kilidi-alirken",
    "slug": "motosiklet-kilidi-alirken",
    "categorySlug": "otomobil-motosiklet",
    "title": "Motosiklet Kilidi Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Motosiklet Kilidi Alırken",
    "description": "Motosiklet Kilidi alırken nelere dikkat edilmeli? Teknik uyumluluk, güvenlik, kullanım senaryosu ve toplam maliyet için uygulanabilir kontrol rehberi.",
    "intro": [
      "Motosiklet Kilidi seçiminde fiyat veya tek bir katalog değeri yeterli değildir. Kullanım koşulu, uyumluluk ve bakım maliyeti birlikte değerlendirilmelidir.",
      "Satın almadan önce teknik değerleri üretici belgesiyle doğrulamak, gereksiz özelliğe ödeme yapmayı ve yanlış ürün seçimini önler."
    ],
    "keywords": [
      "motosiklet kilidi",
      "motosiklet kilidi alırken nelere dikkat edilmeli",
      "motosiklet kilidi seçimi",
      "kilit katmanları",
      "güvenlik sertifikası",
      "sabit noktaya bağlama"
    ],
    "aliases": [
      "motosiklet kilidi",
      "motosiklet kilidi"
    ],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      {
        "id": "type",
        "title": "Kilit Katmanları",
        "description": "Disk kilidi kısa duruş, zincir+sabit nokta uzun park; alarm ve takip cihazı katmanlı güvenlik sağlar.",
        "importance": 'critical'
      },
      {
        "id": "security",
        "title": "Güvenlik Sertifikası",
        "description": "Bağımsız kesme/delme testleri ve sertleştirilmiş çelik çapı pazarlama alarmından daha önemlidir.",
        "importance": 'critical'
      },
      {
        "id": "anchor",
        "title": "Sabit Noktaya Bağlama",
        "description": "Motosikleti taşınamaz bir ankraja, şasi/salıncak üzerinden bağlamak gerekir.",
        "importance": 'important'
      },
      {
        "id": "usability",
        "title": "Ağırlık ve Taşıma",
        "description": "Kalın zincir daha güvenli fakat ağırdır; topcase/sele altı taşıma ve kaplama çizik riski düşünülmelidir.",
        "importance": 'important'
      },
      {
        "id": "reminder",
        "title": "Hatırlatma ve Alarm",
        "description": "Disk kilidi unutma kablosu ve güvenilir hareket alarmı sürüş öncesi hasarı ve caydırıcılığı etkiler.",
        "importance": 'useful'
      }
    ],
    "checklistItems": [
      {
        "id": "c1",
        "text": "Kilit Katmanları kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c2",
        "text": "Güvenlik Sertifikası kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c3",
        "text": "Sabit Noktaya Bağlama kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c4",
        "text": "Ağırlık ve Taşıma kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c5",
        "text": "Hatırlatma ve Alarm kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'useful'
      }
    ],
    "redFlags": [
      {
        "id": "rf1",
        "title": "Sadece Disk Kilidine Güvenmek",
        "explanation": "Hırsızlar motosikleti kaldırıp araca yükleyebilir; sabit noktaya zincir gerekir."
      },
      {
        "id": "rf2",
        "title": "Kalın Görünümlü Yumuşak Metal",
        "explanation": "Dış kaplama zincirin gerçek çelik çapını gizleyebilir."
      }
    ],
    "questions": [
      {
        "id": "q1",
        "question": "Kilit Katmanları için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Disk kilidi kısa duruş, zincir+sabit nokta uzun park; alarm ve takip cihazı katmanlı güvenlik sağlar.",
        "target": 'seller'
      },
      {
        "id": "q2",
        "question": "Güvenlik Sertifikası için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Bağımsız kesme/delme testleri ve sertleştirilmiş çelik çapı pazarlama alarmından daha önemlidir.",
        "target": 'seller'
      },
      {
        "id": "q3",
        "question": "Sabit Noktaya Bağlama için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Motosikleti taşınamaz bir ankraja, şasi/salıncak üzerinden bağlamak gerekir.",
        "target": 'seller'
      }
    ],
    "scenarios": [
      {
        "id": "gunluk",
        "title": "Günlük Kullanım",
        "description": "Uyumluluk, kolay kullanım ve maliyet dengesi önceliklidir.",
        "recommendedCriteriaIds": [
          "type",
          "security"
        ]
      },
      {
        "id": "yogun",
        "title": "Yoğun / Uzun Süreli Kullanım",
        "description": "Dayanıklılık, güvenlik ve servis edilebilirlik önceliklidir.",
        "recommendedCriteriaIds": [
          "security",
          "anchor",
          "usability"
        ]
      }
    ],
    "relatedGuideIds": [
      "motosiklet-alirken",
      "motosiklet-topcase-alirken",
      "arac-kamerasi-alirken"
    ]
  },

  // Eksik güçlü küme 18. Motosiklet Topcase
  {
    "id": "motosiklet-topcase-alirken",
    "slug": "motosiklet-topcase-alirken",
    "categorySlug": "otomobil-motosiklet",
    "title": "Motosiklet Topcase Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Motosiklet Topcase Alırken",
    "description": "Motosiklet Topcase alırken nelere dikkat edilmeli? Teknik uyumluluk, güvenlik, kullanım senaryosu ve toplam maliyet için uygulanabilir kontrol rehberi.",
    "intro": [
      "Motosiklet Topcase seçiminde fiyat veya tek bir katalog değeri yeterli değildir. Kullanım koşulu, uyumluluk ve bakım maliyeti birlikte değerlendirilmelidir.",
      "Satın almadan önce teknik değerleri üretici belgesiyle doğrulamak, gereksiz özelliğe ödeme yapmayı ve yanlış ürün seçimini önler."
    ],
    "keywords": [
      "motosiklet topcase",
      "motosiklet topcase alırken nelere dikkat edilmeli",
      "motosiklet topcase seçimi",
      "hacim ve yük sınırı",
      "tabla ve şasi uyumu",
      "ağırlık dağılımı"
    ],
    "aliases": [
      "motosiklet topcase",
      "motosiklet topcase"
    ],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      {
        "id": "capacity",
        "title": "Hacim ve Yük Sınırı",
        "description": "Kask/adet ihtiyacı litreyi; motosiklet taşıyıcı tablasının kg sınırı güvenli yükü belirler.",
        "importance": 'critical'
      },
      {
        "id": "mount",
        "title": "Tabla ve Şasi Uyumu",
        "description": "Monokey/monolock gibi sistem, arka taşıyıcı ve üretici bağlantı noktaları uyumlu olmalıdır.",
        "importance": 'critical'
      },
      {
        "id": "handling",
        "title": "Ağırlık Dağılımı",
        "description": "Arka ve yüksek yük yönlendirmeyi etkiler; ağır eşya aşağıda ve öne yakın taşınmalıdır.",
        "importance": 'important'
      },
      {
        "id": "security",
        "title": "Kilit ve Çıkarma",
        "description": "Tek anahtar, tabla kilidi ve metal/plastik gövde güvenlik ile taşınabilirlik dengesini belirler.",
        "importance": 'important'
      },
      {
        "id": "weather",
        "title": "Su Sızdırmazlık ve Görünürlük",
        "description": "Conta, tahliye ve reflektör gece/yağmur kullanımında önemlidir.",
        "importance": 'useful'
      }
    ],
    "checklistItems": [
      {
        "id": "c1",
        "text": "Hacim ve Yük Sınırı kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c2",
        "text": "Tabla ve Şasi Uyumu kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'critical'
      },
      {
        "id": "c3",
        "text": "Ağırlık Dağılımı kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c4",
        "text": "Kilit ve Çıkarma kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'important'
      },
      {
        "id": "c5",
        "text": "Su Sızdırmazlık ve Görünürlük kriterini kullanım amacıma göre kontrol ettim.",
        "importance": 'useful'
      }
    ],
    "redFlags": [
      {
        "id": "rf1",
        "title": "Taşıyıcı Sınırını Yok Saymak",
        "explanation": "Büyük hacim, tablanın ve motosiklet şasisinin daha fazla kg taşıyabileceği anlamına gelmez."
      },
      {
        "id": "rf2",
        "title": "Evrensel Tabla Zorlaması",
        "explanation": "Uymayan tabla delme/kaynakla takılırsa şasi ve kilit güvenliği bozulabilir."
      }
    ],
    "questions": [
      {
        "id": "q1",
        "question": "Hacim ve Yük Sınırı için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Kask/adet ihtiyacı litreyi; motosiklet taşıyıcı tablasının kg sınırı güvenli yükü belirler.",
        "target": 'seller'
      },
      {
        "id": "q2",
        "question": "Tabla ve Şasi Uyumu için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Monokey/monolock gibi sistem, arka taşıyıcı ve üretici bağlantı noktaları uyumlu olmalıdır.",
        "target": 'seller'
      },
      {
        "id": "q3",
        "question": "Ağırlık Dağılımı için doğrulanabilir teknik değer nedir?",
        "whyItMatters": "Arka ve yüksek yük yönlendirmeyi etkiler; ağır eşya aşağıda ve öne yakın taşınmalıdır.",
        "target": 'seller'
      }
    ],
    "scenarios": [
      {
        "id": "gunluk",
        "title": "Günlük Kullanım",
        "description": "Uyumluluk, kolay kullanım ve maliyet dengesi önceliklidir.",
        "recommendedCriteriaIds": [
          "capacity",
          "mount"
        ]
      },
      {
        "id": "yogun",
        "title": "Yoğun / Uzun Süreli Kullanım",
        "description": "Dayanıklılık, güvenlik ve servis edilebilirlik önceliklidir.",
        "recommendedCriteriaIds": [
          "mount",
          "handling",
          "security"
        ]
      }
    ],
    "relatedGuideIds": [
      "motosiklet-kilidi-alirken",
      "motosiklet-interkomu-alirken",
      "motosiklet-kaski-alirken"
    ]
  },

{
    "id": "bebek-besigi-alirken",
    "slug": "bebek-besigi-alirken",
    "categorySlug": "anne-bebek",
    "title": "Bebek Beşiği Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Bebek Beşiği Alırken",
    "description": "Bebek beşiği alırken nelere dikkat edilmeli? Güvenlik standartları, sarsıntı mekanizması, yatak yüzeyi, eğim ayarı ve yaş/kilo limiti kriterlerine göre doğru seçim rehberi.",
    "intro": [
      "Bebek beşiği seçiminde sallanma özelliği veya tasarım tek başına karar için yeterli değildir. Güvenlik sertifikaları, mekanizma sessizliği, yatak yüzeyi ve yaş-kilo sınırları birlikte değerlendirilmelidir.",
      "Satın almadan önce üretici yaş ve kilo limitlerini belgeyle doğrulamak, hem güvenlik riskini hem de ürünün kullanım ömrünü kısaltan yanlış seçimleri önler."
    ],
    "keywords": ["bebek beşiği", "bebek beşiği alırken nelere dikkat edilmeli", "sallanan beşik", "beşik seçimi", "bebek beşiği güvenlik", "otomatik sallanan beşik"],
    "aliases": ["beşik", "sallanan beşik", "otomatik beşik"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "guvenlik-standarti", "title": "Güvenlik Sertifikası", "description": "EN 1130 veya eşdeğer test belgesi; parmak aralıkları 6 cm'den küçük, dönen/kilitlenen parçalar çocuk erişimine kapalı olmalıdır.", "importance": 'critical' },
      { "id": "yatak-yuzeyi", "title": "Yatak Yüzeyi ve Nefes Alabilirlik", "description": "Sert, boşluk bırakmayan yatak; yumuşak pedler, koruyucular ve gevşek kumaşlar boğulma riski nedeniyle kullanılmamalıdır.", "importance": 'critical' },
      { "id": "yas-kilo-limiti", "title": "Yaş ve Kilo Limiti", "description": "Çoğu beşik yaklaşık 6 ay / 9 kg ile sınırlıdır; oturmayı öğrenen bebek için beşik güvenli değildir.", "importance": 'critical' },
      { "id": "sarsma-mekanizmasi", "title": "Sarsıntı Mekanizması", "description": "Sessiz motor, süreye ve şiddete ayarlı sarsma; otomatik kapanma zamanlayıcısı uyku düzeni için faydalıdır.", "importance": 'important' },
      { "id": "temizlik-tasinabilirlik", "title": "Temizlik ve Taşınabilirlik", "description": "Sökülüp yıkanabilir kılıf, katlanır gövde ve şarjlı/pil seçeneği günlük kullanımı kolaylaştırır.", "importance": 'useful' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Ürünün güvenlik test belgesini (EN 1130 veya eşdeğeri) satıcıdan doğruladım.", "importance": 'critical' },
      { "id": "c2", "text": "Yatak yüzeyinin sert, tam oturan ve ek ped içermeyen olduğunu kontrol ettim.", "importance": 'critical' },
      { "id": "c3", "text": "Bebeğimin yaşına ve kilosuna uygun limitleri okudum; oturma dönemine kalan süreyi hesapladım.", "importance": 'critical' },
      { "id": "c4", "text": "Sarsma mekanizmasının ses seviyesini ve süre ayarını test ettim.", "importance": 'important' },
      { "id": "c5", "text": "Kılıfın yıkanabilir ve gövdenin katlanabilir olduğunu kontrol ettim.", "importance": 'useful' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Sertifikasız İkinci El Beşikler", "explanation": "Eski modellerde parmak aralıkları veya emniyet kilitleri güncel standartlara uymayabilir; parçası eksik beşik kullanılmamalıdır." },
      { "id": "rf2", "title": "Yumuşak Ped ve Yastık Satışı", "explanation": "Beşiğe ayrı satılan yumuşak başlık ve yastık aksesuarları boğulma riski oluşturur; güvenli uyku ilkeleriyle çelişir." }
    ],
    "questions": [
      { "id": "q1", "question": "Bu model hangi güvenlik standardına göre test edildi ve belgesi görülebilir mi?", "whyItMatters": "Sertifikasız ürünlerde parmak aralığı, kilit ve dengesiz taban gibi riskler önceden anlaşılamaz.", "target": 'seller' },
      { "id": "q2", "question": "Maksimum kilo ve yaş sınırı nedir; oturmayı öğrenen bebek için öneriniz nedir?", "whyItMatters": "Limit aşımı devrilme ve sıkışma riski doğurur; kullanım ömrü beklentisini belirler.", "target": 'seller' },
      { "id": "q3", "question": "Bebeğim beşikte hangi süreyle ve hangi pozisyonda uyutulmalı?", "whyItMatters": "Beşik düz sırt üstü uyku için tasarlanır; uzun süreli ve gözetimsiz kullanım güvenli değildir.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Yeni Doğan / Temel Kullanım", "description": "Güvenlik, sessizlik ve kolay temizlik önceliklidir.", "recommendedCriteriaIds": ["guvenlik-standarti", "yatak-yuzeyi", "yas-kilo-limiti"] },
      { "id": "ileri", "title": "Yoğun Kullanım / Taşınabilirlik", "description": "Katlanabilirlik, şarjlı kullanım ve dayanıklı mekanizma önceliklidir.", "recommendedCriteriaIds": ["sarsma-mekanizmasi", "temizlik-tasinabilirlik"] }
    ],
    "relatedGuideIds": ["bebek-yatagi-alirken", "park-yatak-alirken", "bebek-telsizi-alirken", "bebek-arabasi-alirken"]
  },
  {
    "id": "bebek-yatagi-alirken",
    "slug": "bebek-yatagi-alirken",
    "categorySlug": "anne-bebek",
    "title": "Bebek Yatağı Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Bebek Yatağı Alırken",
    "description": "Bebek yatağı alırken nelere dikkat edilmeli? Parmaklık aralıkları, yatak yüksekliği ayarı, matras uyumu, malzeme kalitesi ve parça bulunabilirliği kriterlerine göre seçim rehberi.",
    "intro": [
      "Bebek yatağı seçiminde görünümden çok güvenlik ölçüleri belirleyicidir. Parmaklık aralıkları, yatak tabanının ayarlanabilirliği ve matras uyumu birlikte değerlendirilmelidir.",
      "Doğru yatak, bebeğin ayakta durma dönemine kadar güvenle kullanılabilir; yan korkuluk dönüşümü ve yedek parça bulunabilirliği ürünün ömrünü uzatır."
    ],
    "keywords": ["bebek yatağı", "bebek yatağı alırken nelere dikkat edilmeli", "bebek karyolası", "parmaklık aralığı", "bebek yatağı güvenlik", "bebek matrası"],
    "aliases": ["bebek karyolası", "bebek yatağı", "parmaklıklı yatak"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "parmaklik-araligi", "title": "Parmaklık Aralıkları", "description": "Dikey parmaklar arası boşluk 6 cm'den az, 2,5 cm'den fazla olmalı; bebek kafası geçmemeli, kolu takılmamalıdır.", "importance": 'critical' },
      { "id": "taban-ayari", "title": "Yatak Tabanı Yükseklik Ayarı", "description": "Üç seviyeli ayar; yeni doğanda yüksek, oturma döneminden sonra en alt seviyeye indirilebilmelidir.", "importance": 'critical' },
      { "id": "matras-uyumu", "description": "Matras yatak iç ölçüsüne milimetrik oturmalı; kenarda iki parmak sığacak boşluk boğulma riski oluşturur.", "title": "Matras Uyumu ve Sertliği", "importance": 'critical' },
      { "id": "malzeme-boya", "title": "Malzeme ve Boya Güvenliği", "description": "Su bazlı, kanserojen içermeyen boya; keskin kenar ve çıkıntılar bulunmamalıdır.", "importance": 'important' },
      { "id": "donusum-parca", "title": "Dönüşüm ve Yedek Parça", "description": "Yan korkuluğa/ottomana dönüşüm kitinin mevcudiyeti ve ileride parça bulunabilirliği toplam değeri artırır.", "importance": 'useful' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Parmaklık aralıklarını ölçtüm; 2,5-6 cm aralığında olduğunu doğruladım.", "importance": 'critical' },
      { "id": "c2", "text": "Taban yüksekliğinin ayarlanabildiğini ve ayarın kilitlendiğini kontrol ettim.", "importance": 'critical' },
      { "id": "c3", "text": "Matrasın iç ölçüye tam oturduğunu ve sert olduğunu test ettim.", "importance": 'critical' },
      { "id": "c4", "text": "Boya ve yüzey işleminin bebek güvenliğine uygun olduğunu sordum.", "importance": 'important' },
      { "id": "c5", "text": "Dönüşüm kitinin dahil olup olmadığını ve parça bulunabilirliğini öğrendim.", "importance": 'useful' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Ayarlanamaz Sabit Taban", "explanation": "Tek seviyeli yataklar bebek büyüdüğünde düşme riski doğurur; taban indirilemiyorsa ürün kısa sürede kullanılamaz hale gelir." },
      { "id": "rf2", "title": "Yataktan Küçük/Büyük Matras", "explanation": "Boşluk bırakan matras boğulma riski, çok sıkı matras ise düzgün yatış yüzeyi bozar; ölçüler mutlaka eşleşmelidir." }
    ],
    "questions": [
      { "id": "q1", "question": "Yatağın iç ölçüleri nedir ve hangi matras ölçüsü öneriliyor?", "whyItMatters": "Standart dışı ölçülerde matras bulmak zorlaşır; uyumsuz matras güvenlik riskidir.", "target": 'seller' },
      { "id": "q2", "question": "Yan korkuluk dönüşümü sonrası ek parça gerekiyor mu, maliyeti nedir?", "whyItMatters": "Dönüşüm maliyeti sonradan çıkarsa ürünün toplam maliyeti ciddi artar.", "target": 'seller' },
      { "id": "q3", "question": "Yatağa yastık, yorgan veya koruyucu eklemeli miyim?", "whyItMatters": "Sert ve boş yatak güvenli uyku için yeterlidir; ek yumuşak ürünler bir yaş altında risklidir.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Yeni Doğan Dönemi", "description": "Güvenlik ölçüleri ve yüksek taban önceliklidir.", "recommendedCriteriaIds": ["parmaklik-araligi", "taban-ayari", "matras-uyumu"] },
      { "id": "ileri", "title": "Uzun Ömürlü Kullanım", "description": "Dönüşüm özelliği ve parça sürdürülebilirliği önceliklidir.", "recommendedCriteriaIds": ["malzeme-boya", "donusum-parca"] }
    ],
    "relatedGuideIds": ["bebek-besigi-alirken", "park-yatak-alirken", "bebek-kuveti-alirken", "bebek-telsizi-alirken"]
  },
  {
    "id": "mama-sandalyesi-alirken",
    "slug": "mama-sandalyesi-alirken",
    "categorySlug": "anne-bebek",
    "title": "Mama Sandalyesi Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Mama Sandalyesi Alırken",
    "description": "Mama sandalyesi alırken nelere dikkat edilmeli? Emniyet kemeri, taban stabilitesi, ayarlanabilirlik, temizlik ve yaş aralığı kriterlerine göre seçim rehberi.",
    "intro": [
      "Mama sandalyesi seçiminde taşınabilirlik veya estetik değil, devrilme güvenliği ve temizlik kolaylığı belirleyicidir. Emniyet kemeri, taban genişliği ve ayar mekanizmaları birlikte değerlendirilmelidir.",
      "Doğru model 6 aylıktan 3 yaşına kadar kullanılabilir; katlanabilirlik ve tabla ayarı günlük kullanım konforunu belirler."
    ],
    "keywords": ["mama sandalyesi", "mama sandalyesi alırken nelere dikkat edilmeli", "beslenme sandalyesi", "mama sandalyesi güvenlik", "katlanır mama sandalyesi"],
    "aliases": ["beslenme sandalyesi", "high chair", "mama sandalyesi"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "emniyet-kemeri", "title": "Emniyet Kemeri", "description": "Beş noktalı kemer; kemer kilidi çocuğun açamayacağı tipte ve omuz-kucak bağlantıları sağlam olmalıdır.", "importance": 'critical' },
      { "id": "taban-stabilitesi", "title": "Taban Stabilitesi", "description": "Geniş taban ve T biçimli ayak yapısı devrilmeyi önler; tekerlekli modellerde kilitli teker şarttır.", "importance": 'critical' },
      { "id": "ayarlanabilirlik", "title": "Tabla ve Yükseklik Ayarı", "description": "Tek elle açılan çıkarılabilir tabla, yükseklik ve ayaklık ayarı; büyüyen çocuğa uyum sağlar.", "importance": 'important' },
      { "id": "temizlik", "title": "Temizlik Kolaylığı", "description": "Sökülüp yıkanabilir kılıf, bulaşık makinesinde yıkanabilir tabla ve dikişsiz gövde yüzeyleri hijyeni kolaylaştırır.", "importance": 'important' },
      { "id": "kilo-limiti", "title": "Yaş ve Kilo Sınırı", "description": "Modeller çoğunlukla 15 kg'a kadar kullanılır; kitten masaya bağlanan modellerin tabla ve bağlama güvenliği ayrıca kontrol edilmelidir.", "importance": 'useful' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Beş noktalı emniyet kemerin kilit mekanizmasını test ettim.", "importance": 'critical' },
      { "id": "c2", "text": "Sandalyeyi hafifçe iterek taban stabilitesini ve tekerlek kilidini kontrol ettim.", "importance": 'critical' },
      { "id": "c3", "text": "Tablanın tek elle çıkabildiğini ve yükseklik ayarının çalıştığını denedim.", "importance": 'important' },
      { "id": "c4", "text": "Kılıfın sökülüp yıkanabildiğini ve tablanın makinede yıkanabildiğini doğruladım.", "importance": 'important' },
      { "id": "c5", "text": "Kilo sınırını ve masa üstü modelde bağlama güvenliğini kontrol ettim.", "importance": 'useful' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Üç Noktalı Kemer veya Kemer Yok", "explanation": "Yalnız kucak kemerli modellerde bebek öne kayarak düşebilir; beş noktalı kemer standarttır." },
      { "id": "rf2", "title": "Dar Tabanlı Sivrilen Gövde", "explanation": "Ayakları içe doğru daralan modeller çocuk ayağa kalkınca devrilebilir; taban her zaman koltuktan geniş olmalıdır." }
    ],
    "questions": [
      { "id": "q1", "question": "Sandalye hangi kilo ve yaş aralığı için sertifikalı?", "whyItMatters": "Limit dışı kullanım devrilme ve kırılma riski doğurur.", "target": 'seller' },
      { "id": "q2", "question": "Tabla ve kılıf için yedek parça bulunabiliyor mu?", "whyItMatters": "En sık yıpranan parçalar tabla ve kılıftır; bulunamaması ürünü erken eskitir.", "target": 'seller' },
      { "id": "q3", "question": "Sandalyeye bağlanan oyuncak/mama kabının çıkarılabilir olduğunu kontrol ettim mi?", "whyItMatters": "Sabit aksesuarlar temizliği zorlaştırır ve düşme anında risk oluşturur.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Ek Gıdaya Geçiş Dönemi", "description": "Güvenlik ve kolay temizlik önceliklidir.", "recommendedCriteriaIds": ["emniyet-kemeri", "taban-stabilitesi", "temizlik"] },
      { "id": "ileri", "title": "Uzun Süreli / Yol Kullanımı", "description": "Katlanabilirlik, hafiflik ve ayar aralığı önceliklidir.", "recommendedCriteriaIds": ["ayarlanabilirlik", "kilo-limiti"] }
    ],
    "relatedGuideIds": ["oto-koltugu-alirken", "bebek-bakim-cantasi-alirken", "bebek-kuveti-alirken", "bebek-arabasi-alirken"]
  },
  {
    "id": "bebek-tasiyici-alirken",
    "slug": "bebek-tasiyici-alirken",
    "categorySlug": "anne-bebek",
    "title": "Bebek Taşıyıcı (Kanguru) Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Bebek Taşıyıcı Alırken",
    "description": "Bebek taşıyıcı ve kanguru alırken nelere dikkat edilmeli? Kalça ergonomisi, bel desteği, yaş desteği, kumaş havalanması ve emniyet kilidi kriterlerine göre seçim rehberi.",
    "intro": [
      "Bebek taşıyıcı seçiminde en kritik konu kalça ergonomisidir. Bebeğin bacakları M pozisyonunda, dizleri yukarıda ve sırt desteği doğal kıvrımda olmalıdır.",
      "Taşıyıcıyı kullanacak kişinin bel ve omuz yükü dengesi ile kumaşın havalanması, özellikle uzun taşımalarda konforu belirler."
    ],
    "keywords": ["bebek taşıyıcı", "kanguru alırken nelere dikkat edilmeli", "bebek kangurusu", "ergonomik taşıyıcı", "kalça sağlığı kanguru", "sling taşıyıcı"],
    "aliases": ["kanguru", "bebek taşıyıcı", "sling"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "kalca-ergonomisi", "title": "Kalça Ergonomisi (M Pozisyonu)", "description": "Geniş oturak, dizden diz destek ve doğal sırt kıvrımı; kalça gelişimini destekleyen yapı International Hip Dysplasia Institute onaylı olmalıdır.", "importance": 'critical' },
      { "id": "yas-destegi", "title": "Yaş ve Boy Desteği", "description": "Yeni doğan için iç destek kit veya ayarlanabilir panel; baş desteği ve ayarlanabilir panel yüksekliği büyüyen bebeğe uyum sağlar.", "importance": 'critical' },
      { "id": "bel-omuz-dengesi", "title": "Bel ve Omuz Yükü Dengeleme", "description": "Geniş, dolgulu bel kemeri ağırlığı kalçaya aktarır; çapraz bağlar tek omuz yüklenmesini önler.", "importance": 'important' },
      { "id": "kumas-hava", "title": "Kumaş ve Havalandırma", "description": "Ağ dokulu veya pamuk karışımlı kumaş sıcak havalarda terlemeyi azaltır; yaz kış kullanım farkı gözetilmelidir.", "importance": 'important' },
      { "id": "emniyet-kilit", "title": "Emniyet Kilitleri", "description": "Kolay açılır ama kazara açılmayan kilitler; taşıma pozisyonu değişiminde çift güvenlik mekanizması aramak gerekir.", "importance": 'useful' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Oturma alanının geniş ve dizleri destekleyen M pozisyonu sağladığını kontrol ettim.", "importance": 'critical' },
      { "id": "c2", "text": "Bebeğimin yaşına uygun baş ve sırt desteğinin bulunduğunu doğruladım.", "importance": 'critical' },
      { "id": "c3", "text": "Bel kemerini takıp ağırlık aktarımını kendi vücudumda test ettim.", "importance": 'important' },
      { "id": "c4", "text": "Kumaşın havalanmasını ve uzun kullanımda terleme riskini değerlendirdim.", "importance": 'important' },
      { "id": "c5", "text": "Kilitlerin tek elle açılabilir ama güvenli yapıda olduğunu denedim.", "importance": 'useful' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Darı Oturaklı Asılı Pozisyon", "explanation": "Bacakların aşağı sarktığı dar oturaklar kalça gelişimini olumsuz etkiler; bebek kasıklarla değil kuyruk sokumuyla asılı kalır." },
      { "id": "rf2", "title": "Yüzü Dışa Dönük Taşıma", "explanation": "Sürekli dışa dönük taşıma kalça pozisyonunu bozar ve aşırı uyaran yaratır; ergonomik modellerde dışa dönük süre sınırlıdır." }
    ],
    "questions": [
      { "id": "q1", "question": "Bu model hangi kilo aralığında ve yeni doğan ekiyle kullanılabiliyor?", "whyItMatters": "Yaş desteği olmayan taşıyıcılar ilk aylarda kullanılamaz; ek kit maliyeti sonradan çıkar.", "target": 'seller' },
      { "id": "q2", "question": "Kullanıcı kılavuzundaki taşıma pozisyonları neler ve hangi pozisyon kaç aylıktan itibaren güvenli?", "whyItMatters": "Yanlış pozisyon hem kalça hem solunum güvenliği açısından risklidir.", "target": 'seller' },
      { "id": "q3", "question": "Taşımadan önce bebeğin çenesinin göğsüne değmediğini ve hava yolunun açık olduğunu kontrol ediyor muyum?", "whyItMatters": "Çene-göğüs teması solunumu kısıtlar; yüz her zaman görünür olmalıdır.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Yeni Doğan / Kısa Taşıma", "description": "Yaş desteği ve doğru pozisyon önceliklidir.", "recommendedCriteriaIds": ["kalca-ergonomisi", "yas-destegi"] },
      { "id": "ileri", "title": "Uzun Taşıma / Seyahat", "description": "Bel desteği, havalandırma ve hızlı açılıp kapanma önceliklidir.", "recommendedCriteriaIds": ["bel-omuz-dengesi", "kumas-hava", "emniyet-kilit"] }
    ],
    "relatedGuideIds": ["bebek-arabasi-alirken", "bebek-bakim-cantasi-alirken", "sirt-cantasi-alirken", "oto-koltugu-alirken"]
  },
  {
    "id": "biberon-alirken",
    "slug": "biberon-alirken",
    "categorySlug": "anne-bebek",
    "title": "Biberon Seçerken Nelere Dikkat Edilmeli?",
    "shortTitle": "Biberon Seçerken",
    "description": "Biberon seçerken nelere dikkat edilmeli? Meme akış hızı, anti-kolik sistemi, malzeme sağlamlığı, temizlik ve göğüs pompası uyumu kriterlerine göre seçim rehberi.",
    "intro": [
      "Biberon seçiminde meme başı akış hızı ve anti-kolik sistemi beslenme konforunu doğrudan etkiler. Yanlış akış hızı hava yutma, kolik ve memeden soğuma yaratabilir.",
      "Malzeme türü, geniş boyun yapısı ve göğüs pompasıyla uyum günlük kullanım pratiğini belirleyen diğer ölçütlerdir."
    ],
    "keywords": ["biberon", "biberon seçerken nelere dikkat edilmeli", "anti kolik biberon", "biberon memesinde akış hızı", "ppsu biberon", "biberon malzemesi"],
    "aliases": ["biberon", "mama şişesi", "anti kolik biberon"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "akis-hizi", "title": "Meme Akış Hızı", "description": "Yaşa göre yavaş (0-3 ay), orta (3-6 ay) ve hızlı akış; hızlı meme yeni doğanda öksürük ve hava yutma yapar.", "importance": 'critical' },
      { "id": "anti-kolik", "title": "Anti-Kolik Sistemi", "description": "Meme başındaki hava kanalı veya vantilatör, bebeğin yuttuğu havayı azaltarak gaz sancısını hafifletir.", "importance": 'critical' },
      { "id": "malzeme", "title": "Malzeme Sağlamlığı", "description": "PP hafif ve ekonomik, PPSU ısıl şoka dayanıklı ve uzun ömürlü, cam kimyasal açıdan en inert seçenektir; hepsi BPA içermemelidir.", "importance": 'important' },
      { "id": "temizlik-steril", "title": "Temizlik ve Geniş Boyun", "description": "Geniş boyun formül karıştırmayı ve fırçalamayı kolaylaştırır; tüm parçalar sterilizatöre ve bulaşık makinesine uymalıdır.", "importance": 'important' },
      { "id": "pomp-uyumu", "title": "Göğüs Pompası Uyumu", "description": "Anne sütü sağılıyorsa pompa memesinin şişeye vidalanabilmesi aktarma kaybını ve bulaşık yükünü azaltır.", "importance": 'useful' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Meme akış hızının bebeğimin yaşına uygun numara olduğunu kontrol ettim.", "importance": 'critical' },
      { "id": "c2", "text": "Anti-kolik hava kanalının bulunduğunu ve çalışma mantığını inceledim.", "importance": 'critical' },
      { "id": "c3", "text": "Malzeme türünü (PP/PPSU/cam) kullanım alışkanlığıma göre seçtim.", "importance": 'important' },
      { "id": "c4", "text": "Şişenin geniş boyunlu olduğunu ve parçaların sökülüp temizlenebildiğini kontrol ettim.", "importance": 'important' },
      { "id": "c5", "text": "Kullandığım göğüs pompasıyla meme uyumunu doğruladım.", "importance": 'useful' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Numarasız/Generic Meme Başları", "explanation": "Akış hızı belirtilmemiş meme başlarında performans öngörülemez; zamanından önce hızlı akış memeden ayrılmaya neden olur." },
      { "id": "rf2", "title": "Çatlak veya Bulanık Şişe", "explanation": "Çatlak şişe bakteri yuvası olur; ısıl sterilizasyon sonrası bulanıklaşan plastikler değiştirilmelidir." }
    ],
    "questions": [
      { "id": "q1", "question": "Bu seriye ait farklı akış hızlarında memeler bulunuyor mu ve fiyatları nedir?", "whyItMatters": "Meme başları 2-3 ayda bir değişir; aksesuar maliyeti ve bulunabilirliği toplam maliyeti belirler.", "target": 'seller' },
      { "id": "q2", "question": "Şişeler ve memeler sterilizatöre ve bulaşık makinesine uygun mu?", "whyItMatters": "Uyumsuz malzeme ısıyla deforme olur.", "target": 'seller' },
      { "id": "q3", "question": "Biberon meme karışımını denedim mi; bebeğim memeyi reddediyor mu?", "whyItMatters": "Emzirilen bebekte biberon geciktirilirse sonradan reddedebilir; doğru meme şekli geçişi kolaylaştırır.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Anne Sütü ile Beslenme", "description": "Yavaş akış ve pompa uyumu önceliklidir.", "recommendedCriteriaIds": ["akis-hizi", "anti-kolik", "pomp-uyumu"] },
      { "id": "ileri", "title": "Formül / Ek Gıda Dönemi", "description": "Geniş boyun, dayanıklı malzeme ve hızlı akış önceliklidir.", "recommendedCriteriaIds": ["malzeme", "temizlik-steril"] }
    ],
    "relatedGuideIds": ["gogus-pompasi-alirken", "bebek-bezi-alirken", "bebek-bakim-cantasi-alirken", "bebek-kuveti-alirken"]
  },
  {
    "id": "gogus-pompasi-alirken",
    "slug": "gogus-pompasi-alirken",
    "categorySlug": "anne-bebek",
    "title": "Göğüs Pompası Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Göğüs Pompası Alırken",
    "description": "Göğüs pompası alırken nelere dikkat edilmeli? Pompa tipi, emme gücü ve ritim, kapalı sistem hijyeni, parça maliyeti ve sessizlik kriterlerine göre seçim rehberi.",
    "intro": [
      "Göğüs pompası seçiminde kullanım sıklığı belirleyicidir. Ara sıra sağımla elektrikli çift pompa arasında büyük fiyat ve konfor farkı vardır.",
      "Kapalı sistem hijyeni, emme ritminin doğallığı ve yedek parça bulunabilirliği, uzun süreli kullanımda ön plana çıkan ölçütlerdir."
    ],
    "keywords": ["göğüs pompası", "göğüs pompası alırken nelere dikkat edilmeli", "elektrikli göğüs pompası", "çift pompa", "süt sağma makinesi", "kapalı sistem pompa"],
    "aliases": ["süt pompası", "süt sağma makinesi", "göğüs pompası"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "pompa-tipi", "title": "Pompa Tipi", "description": "Manuel pompa ara sıra sağım için yeterlidir; işe dönüşte veya sık sağımda elektrikli çift pompa süreyi yarıya indirir.", "importance": 'critical' },
      { "id": "kapali-sistem", "title": "Kapalı Sistem Hijyeni", "description": "Süt ile motor arasındaki bariyer sızmayı önler; açık sistemlerde memeye giden boruda küf riski doğar.", "importance": 'critical' },
      { "id": "emme-ritim", "title": "Emme Gücü ve Ritim Ayarı", "description": "Doğal emme ritmini taklit eden masaj + sağım kipleri, kademeli güç ayarı konfor ve verimi birlikte artırır.", "importance": 'important' },
      { "id": "parca-maliyeti", "title": "Yedek Parça Maliyeti", "description": "Diyafram, meme haznesi ve valfler periyodik değişir; parça bulunabilirliği ve fiyatı toplam maliyeti belirler.", "importance": 'important' },
      { "id": "ses-tasinabilirlik", "title": "Sessizlik ve Taşınabilirlik", "description": "İş yerinde sağımda 50 dB altı ses ve bataryalı/göğüslü kılıf gibi taşınabilir seçenekler kullanım özgürlüğü sağlar.", "importance": 'useful' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Kullanım sıklığıma göre pompa tipini (manuel/tek/çift) belirledim.", "importance": 'critical' },
      { "id": "c2", "text": "Kapalı sistem olduğunu ve süt-motor ayrımını doğruladım.", "importance": 'critical' },
      { "id": "c3", "text": "Güç ve ritim ayarlarını, masaj kipini test ettim.", "importance": 'important' },
      { "id": "c4", "text": "Yedek parça fiyatlarını ve bulunabilirliğini araştırdım.", "importance": 'important' },
      { "id": "c5", "text": "Ses seviyesini ve batarya/şarj seçeneğini kontrol ettim.", "importance": 'useful' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Açık Sistem Ucuz Elektrikli Pompalar", "explanation": "Sütün motora sızdığı sistemlerde hijyen sağlanamaz; boru ve diyafram küflenerek kullanım dışı kalır." },
      { "id": "rf2", "title": "Sabit Güçlü Emme", "explanation": "Güç ayarı olmayan pompalar meme dokusunda travma yapabilir; emme her zaman en düşük seviyeden başlatılmalıdır." }
    ],
    "questions": [
      { "id": "q1", "question": "Bu modelin meme haznesi boyut seçenekleri neler ve ayrı satılıyor mu?", "whyItMatters": "Yanlış boyut hazne verimi düşürür ve meme başında zedelenme yapar.", "target": 'seller' },
      { "id": "q2", "question": "Hangi parçalar ne sıklıkla değiştirilmeli ve stokta var mı?", "whyItMatters": "Valf ve diyafram yıprandıkça emme gücü düşer; kullanıcı bunu üründen değil süt miktarından anlar.", "target": 'seller' },
      { "id": "q3", "question": "Pompayı kullanmadan önce meme başı boyutumu ölçümle belirledim mi?", "whyItMatters": "Doğru hazne boyutu hem konfor hem verim için şarttır.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Ara Sıra Sağım", "description": "Ekonomik ve pratik çözüm önceliklidir.", "recommendedCriteriaIds": ["pompa-tipi", "kapali-sistem"] },
      { "id": "ileri", "title": "İşe Dönüş / Sık Sağım", "description": "Çift pompa, sessizlik ve batarya önceliklidir.", "recommendedCriteriaIds": ["emme-ritim", "parca-maliyeti", "ses-tasinabilirlik"] }
    ],
    "relatedGuideIds": ["biberon-alirken", "bebek-bakim-cantasi-alirken", "bebek-besigi-alirken"]
  },
  {
    "id": "bebek-telsizi-alirken",
    "slug": "bebek-telsizi-alirken",
    "categorySlug": "anne-bebek",
    "title": "Bebek Telsizi Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Bebek Telsizi Alırken",
    "description": "Bebek telsizi alırken nelere dikkat edilmeli? Menzil ve bağlantı türü, gece görüşü kalitesi, pil ömrü, şifreli iletim ve ek sensörler kriterlerine göre seçim rehberi.",
    "intro": [
      "Bebek telsizi seçiminde görüntü kalitesi kadar bağlantı güvenilirliği önemlidir. Analog ucuz modellerde girişim ve cızırtı sık görülür.",
      "Dijital (DECT/2,4 GHz) modellerde gece görüşü menzili, VOX ses tetikleme ve şifreli bağlantı günlük kullanımın belirleyici ölçütleridir."
    ],
    "keywords": ["bebek telsizi", "bebek telsizi alırken nelere dikkat edilmeli", "bebek kamerası", "gece görüşü bebek telsizi", "dijital bebek telsizi", "bebek monitörü"],
    "aliases": ["bebek monitörü", "bebek kamerası", "bebek telsizi"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "baglanti-turu", "title": "Bağlantı Türü ve Menzil", "description": "DECT ses için en temiz ve uzun menzilli bant; 2,4 GHz görüntülü modellerde ev içi menzil duvar kaybına göre değerlendirilmelidir.", "importance": 'critical' },
      { "id": "gece-gorusu", "title": "Gece Görüşü ve Kamera Açısı", "description": "IR gece görüşü en az 4-5 m net görmeli; uzaktan kumandalı pan/tilt ve geniş açı beşiği tam kadraja alır.", "importance": 'critical' },
      { "id": "pil-ekran", "title": "Pil Ömrü ve Ekran", "description": "Ekranlı ünitede en az 5-6 saat şarj ömrü; VOX modu ekranı uyandırarak gece boyu bekleme sağlar.", "importance": 'important' },
      { "id": "guvenlik-sifre", "title": "Şifreli ve Güvenli Bağlantı", "description": "Uygulama üzerinden izleyen modellerde uçtan uca şifreleme, güçlü şifre ve iki adımlı doğrulama dış erişimi engeller.", "importance": 'important' },
      { "id": "ek-sensorler", "title": "Ek Sensör ve Özellikler", "description": "Oda sıcaklığı/nem göstergesi, ninni, iki yönlü konuşma ve hareketli alt tabla sensörü kullanım senaryosuna göre değerlendirilir.", "importance": 'useful' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Evimin duvar yapısına göre bağlantı türünü ve menzilini test ettim.", "importance": 'critical' },
      { "id": "c2", "text": "Gece görüşünün karanlık odada net olduğunu ve açının beşiği kapsadığını kontrol ettim.", "importance": 'critical' },
      { "id": "c3", "text": "Şarj ömrünü ve VOX ile ekran uyandırma özelliğini inceledim.", "importance": 'important' },
      { "id": "c4", "text": "Bağlantı şifrelemesini ve uygulama izinlerini araştırdım.", "importance": 'important' },
      { "id": "c5", "text": "Sıcaklık sensörü, ninni ve iki yönlü ses gibi ek özellikleri karşılaştırdım.", "importance": 'useful' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Şifresiz Ucuz Wi-Fi Kameralar", "explanation": "Varsayılan şifreli ve güncellenmeyen kameralar kısa sürede internet üzerinden izlenebilir hale gelir." },
      { "id": "rf2", "title": "Sürekli Bağlantı Kopması", "explanation": "Menzil sınırındaki cihazlar uyarı üretir; gece uyanmasına neden olan yanlış alarm, cihazın en büyük maliyetidir." }
    ],
    "questions": [
      { "id": "q1", "question": "Görüntülü ünitenin kapalı alan menzili kaç metre ve duvar kaybı oranında test edildi mi?", "whyItMatters": "Açık alan değeri pazarlama ölçüsüdür; gerçek kullanım iç mekan performansıyla belirlenir.", "target": 'seller' },
      { "id": "q2", "question": "Uygulama izinleri neler, veri nerede saklanıyor ve iki adımlı doğrulama var mı?", "whyItMatters": "Bebek görüntüsü hassas veridir; bulut depolama politikası güvenlik açısından netleştirilmelidir.", "target": 'seller' },
      { "id": "q3", "question": "Kamera ve kabloyu bebeğin erişemeyeceği şekilde konumlandırdım mı?", "whyItMatters": "Kablo ve kamera beşik içinde/dibinde dahil edilmemeli; boğulma ve devrilme riski oluşturur.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Aynı Kat / Gece İzleme", "description": "Temiz ses, gece görüşü ve ekonomik çözüm önceliklidir.", "recommendedCriteriaIds": ["baglanti-turu", "gece-gorusu"] },
      { "id": "ileri", "title": "Uzaktan / Katlar Arası İzleme", "description": "Wi-Fi uygulama, şifreleme ve sensörler önceliklidir.", "recommendedCriteriaIds": ["guvenlik-sifre", "ek-sensorler", "pil-ekran"] }
    ],
    "relatedGuideIds": ["guvenlik-kamerasi-alirken", "bebek-yatagi-alirken", "bebek-besigi-alirken", "wifi-router-alirken"]
  },
  {
    "id": "park-yatak-alirken",
    "slug": "park-yatak-alirken",
    "categorySlug": "anne-bebek",
    "title": "Park Yatak Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Park Yatak Alırken",
    "description": "Park yatak alırken nelere dikkat edilmeli? Montaj kolaylığı, yatak yüksekliği, matras standardı, kilit güvenliği ve file dokuma kriterlerine göre seçim rehberi.",
    "intro": [
      "Park yatak seçiminde hem gece kullanımı hem seyahat senaryosu birlikte düşünülmelidir. Hızlı katlanma, yatak seviyesi ve matras standardı güvenliği belirler.",
      "File dokusunun parmak takılmayan yapıda olması ve kilitlerin çocuk tarafından açılamaması en sık atlanan iki ölçüttür."
    ],
    "keywords": ["park yatak", "park yatak alırken nelere dikkat edilmeli", "seyahat park yatağı", "bebek parkı", "katlanır park yatak", "portatif beşik"],
    "aliases": ["bebek parkı", "portatif beşik", "park yatak"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "guvenlik-olculer", "title": "Güvenlik Ölçüleri", "description": "EN 713 / ASTM F406 standardına uygunluk; yan duvar yüksekliği bebek ayakta dururken 60 cm'den az olmamalıdır.", "importance": 'critical' },
      { "id": "kilit-mekanizmasi", "title": "Kilit Mekanizması", "description": "Açılır taban kilitleri ve teker kilitleri iki aşamalı olmalı; çocuk unlock simgesini ezberleyip açabildiği modellerden kaçınılmalıdır.", "importance": 'critical' },
      { "id": "matras-standardi", "title": "Matras Standardı", "description": "Ürünle gelen ince matras standarttır; kalın yatak veya ek ped yerleştirmek düşme ve boğulma riski doğurur.", "importance": 'critical' },
      { "id": "montaj-tasinma", "title": "Montaj ve Taşınma", "description": "Tek kişiyle saniyeler içinde katlanan yapı, taşıma çantası ve toka şeritleri seyahat kullanımını belirler.", "importance": 'important' },
      { "id": "file-dokuma", "title": "File Dokuma ve Havalandırma", "description": "İnce dokuma file parmak ve giysi düğmesi takılmamalı; yan fileler hava sirkülasyonu sağlamalıdır.", "importance": 'useful' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Standart belgesini ve yan duvar yüksekliğini kontrol ettim.", "importance": 'critical' },
      { "id": "c2", "text": "Kilit mekanizmalarını kendim açmayı deneyerek test ettim.", "importance": 'critical' },
      { "id": "c3", "text": "Ürünle gelen matras dışında ek yatak kullanmayacağımı not ettim.", "importance": 'critical' },
      { "id": "c4", "text": "Katlama-açma akışını tek başıma denedim, çantası var mı baktım.", "importance": 'important' },
      { "id": "c5", "text": "File dokusunun ince ve parmak takılmayan yapıda olduğunu kontrol ettim.", "importance": 'useful' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Ortası Yumuşayan İkinci El Matraslar", "explanation": "Yıpranmış matras yüzeyi bebeğin yüzünü kapatma riski oluşturur; matras zamanla deforme olur ve değiştirilmelidir." },
      { "id": "rf2", "title": "Kolay Açılan Taban Kilidi", "explanation": "Tek hareketle açılan kilitler bebek emekleme döneminde ciddi düşme riski yaratır; çift aşamalı kilit tercih edilmelidir." }
    ],
    "questions": [
      { "id": "q1", "question": "Bu model hangi standarda göre test edildi ve yatak kapasitesi kaç kg?", "whyItMatters": "Yan duvar yüksekliği ve kilo sınırı kullanım güvenliğini belirler.", "target": 'seller' },
      { "id": "q2", "question": "Yedek matras ve parça bulunabiliyor mu?", "whyItMatters": "Matras yıpranması ürünün tamamını değiştirmeyi gerektirmemelidir.", "target": 'seller' },
      { "id": "q3", "question": "Park yatağa oyuncak, yastık veya kalın battaniye koyuyor muyum?", "whyItMatters": "Dolgu malzemeleri güvenli uyku yüzeyini bozar; park yatak boş ve sade kullanılmalıdır.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Ev İçi / Gündüz Kullanımı", "description": "Güvenlik ölçüleri ve kilit önceliklidir.", "recommendedCriteriaIds": ["guvenlik-olculer", "kilit-mekanizmasi", "matras-standardi"] },
      { "id": "ileri", "title": "Seyahat / Tatil Kullanımı", "description": "Hızlı katlanma, ağırlık ve çanta önceliklidir.", "recommendedCriteriaIds": ["montaj-tasinma", "file-dokuma"] }
    ],
    "relatedGuideIds": ["bebek-yatagi-alirken", "bebek-besigi-alirken", "bebek-bakim-cantasi-alirken", "valiz-alirken"]
  },
  {
    "id": "bebek-bakim-cantasi-alirken",
    "slug": "bebek-bakim-cantasi-alirken",
    "categorySlug": "anne-bebek",
    "title": "Bebek Bakım Çantası Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Bebek Bakım Çantası Alırken",
    "description": "Bebek bakım çantası alırken nelere dikkat edilmeli? Bölme düzeni, ıslak-kuru ayrımı, kumaş dayanımı, bebek arabasına asılabilme ve hacim kriterlerine göre seçim rehberi.",
    "intro": [
      "Bebek bakım çantası seçiminde kapasiteden çok erişim düzeni önemlidir. Islak-kuru ayrımı, biberon bölmesi ve tek elle açılan bölmeler günlük pratiği kolaylaştırır.",
      "Arabaya asılabilme, su geçirmez kumaş ve geniş açılır ağız, kısa ve uzun çıkışlarda kullanım konforunu belirleyen ölçütlerdir."
    ],
    "keywords": ["bebek bakım çantası", "bebek bakım çantası alırken nelere dikkat edilmeli", "bebek çantası", "diaper bag", "bebek çantası bölmeleri", "sırt çantası bebek"],
    "aliases": ["bebek çantası", "diaper bag", "bakım çantası"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "bolme-duzeni", "title": "Bölme Düzeni ve Erişim", "description": "Geniş açılır ağız, dıştan erişilebilir ıslık kılıfı ve biberon bölmeleri; aradığını tek elle bulmak en büyük konfor ölçütüdür.", "importance": 'critical' },
      { "id": "islatilan-bolum", "title": "Islak/Kuru Ayrımı", "description": "Kirli kıyafet ve bez için su geçirmez ayrı bölme; izotermik biberon bölmesi sıcaklık koruması sağlar.", "importance": 'critical' },
      { "id": "kumas-dayanim", "title": "Kumaş ve Kolay Silinebilirlik", "description": "Su itici dış yüzey, silinebilir iç astar ve fermuar kalitesi; dikiş güçlendirilmesi uzun ömürlülük sağlar.", "importance": 'important' },
      { "id": "asilma-sistemi", "title": "Arabaya Asılma ve Askı", "description": "Bebe arabası koluna asılabilir kancalar, omuz askısı pedi ve sırt çantası dönüştürme olanağı taşıma esnekliği verir.", "importance": 'important' },
      { "id": "hacim-sekil", "title": "Hacim ve Şekil", "description": "Günlük çıkış için 10-15 L, uzun gün için 20 L+; ayakta duran taban ve taban gergisi kullanışlılık ekler.", "importance": 'useful' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Bölme düzenini günlük çıktımın içeriğiyle (bez, ıslak mendil, biberon, kıyafet) kafamda simüle ettim.", "importance": 'critical' },
      { "id": "c2", "text": "Islak bölme ve izotermik biberon bölmesinin varlığını kontrol ettim.", "importance": 'critical' },
      { "id": "c3", "text": "Kumaşın su itici ve iç yüzeyin silinebilir olduğunu kontrol ettim.", "importance": 'important' },
      { "id": "c4", "text": "Bebe arabası kancalarını ve askı pedini denedim.", "importance": 'important' },
      { "id": "c5", "text": "Hacmin günlük/uzun kullanım ihtiyacıma uygun olduğunu değerlendirdim.", "importance": 'useful' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Tek Büyük Bölmeli Çantalar", "explanation": "Bölmesi olmayan çantada her şey dibe çöker; aranılan şey bulunamaz ve fermuar tamamen boşaltılır." },
      { "id": "rf2", "title": "Zayıf Fermuar ve İnce Askı", "explanation": "Dolu çantanın ağırlığını taşıyan fermuar ve askılar ilk yıpranan noktalardır; metal fermuar ve geniş ped şarttır." }
    ],
    "questions": [
      { "id": "q1", "question": "Islak bölme ve alt değiştirme matı dahil mi, ayrı satılıyor mu?", "whyItMatters": "Aksesuar eksikliği toplam maliyeti artırır; değiştirme matı en kullanışlı parçadır.", "target": 'seller' },
      { "id": "q2", "question": "Fermuar ve askı dikişleri garanti kapsamında mı?", "whyItMatters": "En sık arıza noktaları bu bölgelerdir.", "target": 'seller' },
      { "id": "q3", "question": "Çantayı her gece topluyor ve acil seti (yedek kıyafet, torba) dolduruyor muyum?", "whyItMatters": "Düzenli hazırlık, çanta seçiminden daha fazla zaman kazandırır.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Günlük Kısa Çıkış", "description": "Kompakt hacim ve hızlı erişim önceliklidir.", "recommendedCriteriaIds": ["bolme-duzeni", "islatilan-bolum"] },
      { "id": "ileri", "title": "Uzun Gün / Seyahat", "description": "Hacim, dayanım ve asılma sistemi önceliklidir.", "recommendedCriteriaIds": ["kumas-dayanim", "asilma-sistemi", "hacim-sekil"] }
    ],
    "relatedGuideIds": ["bebek-tasiyici-alirken", "bebek-arabasi-alirken", "biberon-alirken", "sirt-cantasi-alirken"]
  },
  {
    "id": "bebek-kuveti-alirken",
    "slug": "bebek-kuveti-alirken",
    "categorySlug": "anne-bebek",
    "title": "Bebek Küveti Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Bebek Küveti Alırken",
    "description": "Bebek küveti alırken nelere dikkat edilmeli? Kaymaz taban, ısı göstergesi, yaşa uygun boyut, tahliye kolaylığı ve malzeme güvenliği kriterlerine göre seçim rehberi.",
    "intro": [
      "Bebek küveti seçiminde güvenlik ve pratiklik bir arada değerlendirilmelidir. Kaymaz yüzey, yeni doğan desteği ve ergonomik form ilk ayları belirler.",
      "Alt tahliye tapası, katlanabilir veya büyüyen yapı ve malzeme kalitesi kullanım ömrünü uzatan ölçütlerdir."
    ],
    "keywords": ["bebek küveti", "bebek küveti alırken nelere dikkat edilmeli", "bebek banyo küveti", "katlanır bebek küveti", "yeni doğan küveti", "banyo filesi"],
    "aliases": ["bebek banyo küveti", "yeni doğan küveti"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "kaymaz-yuzey", "title": "Kaymaz Yüzey ve Destek", "description": "Taban kaymaz dokuya sahip olmalı; yeni doğan hamak veya destek aparatı bebeğin kaymasını ve ellerini boşaltmasını engeller.", "importance": 'critical' },
      { "id": "olcu-form", "title": "Ölçü ve Ergonomik Form", "description": "Anne-babanın belini kırmadan kullanacağı yükseklik ve genişlik; küvet küçük olursa bebek sıkışır, büyük olursa su soğur.", "importance": 'critical' },
      { "id": "malzeme-guvenlik", "title": "Malzeme Güvenliği", "description": "BPA ve ftalat içermeyen, kokusuz plastik; keskin kenar ve buruşuk dikiş izi olmamalıdır.", "importance": 'important' },
      { "id": "tahliye-temizlik", "title": "Tahliye ve Temizlik", "description": "Alt tahliye tapası boşaltmayı kolaylaştırır; iç yüzey silinebilir ve kireç biriktirmeyen yapıda olmalıdır.", "importance": 'important' },
      { "id": "buyuyen-yapi", "title": "Büyüyen/Katlanır Yapı", "description": "6 aydan sonra küvet küçük gelir; katlanır veya büyük banyoya asılan modeller ikinci dönem çözümü sağlar.", "importance": 'useful' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Kaymaz tabanı ve yeni doğan desteğini kontrol ettim.", "importance": 'critical' },
      { "id": "c2", "text": "Küvet ölçüsünü banyo tezgahı/zemini ve kullanım yüksekliğimle karşılaştırdım.", "importance": 'critical' },
      { "id": "c3", "text": "Malzemenin kokusuz ve sertifikalı olduğunu sordum.", "importance": 'important' },
      { "id": "c4", "text": "Tahliye tapasının çalıştığını ve silinebilir yüzeyi kontrol ettim.", "importance": 'important' },
      { "id": "c5", "text": "İkinci dönem için büyüyen/katlanır seçeneği değerlendirdim.", "importance": 'useful' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Standart Dışı Yumuşak Plastik Kokusu", "explanation": "Güçlü kimyasal kokusu, içerikte sertifikasız plastik katkıları olabileceğine işaret eder." },
      { "id": "rf2", "title": "Sabit Durmayan Taban", "explanation": "Kaygan zeminde salınan küvet bebekle birlikte devrilebilir; taban emniyeti su testinde kontrol edilmelidir." }
    ],
    "questions": [
      { "id": "q1", "question": "Yeni doğan desteği/hamak dahil mi ve kaç aya kadar kullanılıyor?", "whyItMatters": "İlk aylarda destek olmadan banyo zor ve risklidir.", "target": 'seller' },
      { "id": "q2", "question": "Isı göstergesi veya termometre ile mi geliyor?", "whyItMatters": "Su sıcaklığı 37-38 santigrat derece aralığında tutulmalıdır; gösterge yardımcıdır ama termometre esas ölçümdür.", "target": 'seller' },
      { "id": "q3", "question": "Banyoda asla bebeği tek başına bırakmadığımı biliyor muyum?", "whyItMatters": "Birkaç santim su bile gözetimsiz bebek için boğulma riskidir.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Yeni Doğan Dönemi", "description": "Destek, kaymazlık ve ölçü önceliklidir.", "recommendedCriteriaIds": ["kaymaz-yuzey", "olcu-form", "malzeme-guvenlik"] },
      { "id": "ileri", "title": "Oturma Dönemi ve Sonrası", "description": "Büyüyen yapı ve pratik boşaltma önceliklidir.", "recommendedCriteriaIds": ["tahliye-temizlik", "buyuyen-yapi"] }
    ],
    "relatedGuideIds": ["bebek-yatagi-alirken", "mama-sandalyesi-alirken", "bebek-bakim-cantasi-alirken"]
  },

  {
    "id": "kosu-ayakkabisi-alirken",
    "slug": "kosu-ayakkabisi-alirken",
    "categorySlug": "giyim-aksesuar",
    "title": "Koşu Ayakkabısı Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Koşu Ayakkabısı Alırken",
    "description": "Koşu ayakkabısı alırken nelere dikkat edilmeli? Ayak tipi ve pronasyon, amortisman dengesi, beden ölçüsü, haftalık kilometre ve zemin kriterlerine göre seçim rehberi.",
    "intro": [
      "Koşu ayakkabısı seçiminde markadan çok ayağa uyum belirleyicidir. Pronasyon tipi, amortisman düzeyi ve beden ölçüsü birlikte değerlendirilmelidir.",
      "Yanlış ayakkabı; tırnak kararması, diz ve topuk ağrısı gibi sorunlara yol açar. Mağazada akşam ölçümü ve deneme koşusu yapmak en güvenli yoldur."
    ],
    "keywords": ["koşu ayakkabısı", "koşu ayakkabısı alırken nelere dikkat edilmeli", "running shoes seçimi", "pronasyon ayakkabısı", "amortisman koşu", "maraton ayakkabısı"],
    "aliases": ["running shoes", "koşu ayakkabısı", "jogging ayakkabı"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "pronasyon", "title": "Ayak Tipi ve Pronasyon", "description": "Esnemez (süpination), nötr ve içe çöküş (overpronasyon) tipine göre nötr veya destekli (stability/motion control) model seçilmelidir.", "importance": 'critical' },
      { "id": "amortisman-denge", "title": "Amortisman ve Drop", "description": "Günlük antrenman için 8-12 mm drop ve yüksek yastıklama; yarış ve tempo için düşük drop hafif modeller ayrışır.", "importance": 'critical' },
      { "id": "beden-olcu", "title": "Beden Ölçüsü ve Parmak Boşluğu", "description": "Ayak gün içinde şişer; akşam ölçümünde başparmakla burun arasında bir başparmak boşluk bırakılmalıdır.", "importance": 'critical' },
      { "id": "km-omur", "title": "Haftalık Kilometre ve Ömür", "description": "Ayakkabılar 600-800 km arasında yastıklama kaybeder; haftalık km bazında yıllık yenileme planı yapılmalıdır.", "importance": 'important' },
      { "id": "zemin-form", "title": "Zemin ve Üst Yapı", "importance": 'important', "description": "Asfalt için yumuşak taban, patika için derin diş; üst yapıda nefes alan örgü ve topuk kabı sertliği konforu belirler." }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Pronasyon tipimi (ıslak ayak testi/geçmiş ayakkabı aşınması) belirledim.", "importance": 'critical' },
      { "id": "c2", "text": "Amortisman düzeyini ve drop değerini kullanım amacıma göre seçtim.", "importance": 'critical' },
      { "id": "c3", "text": "Akşam saatlerinde ölçüm yaptım; parmak boşluğunu başparmak genişliğinde kontrol ettim.", "importance": 'critical' },
      { "id": "c4", "text": "Haftalık kilometreme göre model sınıfını (antrenman/yarış) belirledim.", "importance": 'important' },
      { "id": "c5", "text": "Koşacağım zemine uygun taban yapısını kontrol ettim.", "importance": 'important' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Yarış Ayakkabısını Günlük Kullanmak", "explanation": "Karbon plakalı süper ayakkabılar 200 km ömürlüdür ve antrenmanda ayak adaptation riski doğurur." },
      { "id": "rf2", "title": "Tam İnen Fiyat Çünkü Geçen Sezon", "explanation": "Model yenilense bile 1-2 yıl raflarda kalmış ayakkabının köpüğü sertleşmiş olabilir; üretim tarihi kontrol edilmelidir." }
    ],
    "questions": [
      { "id": "q1", "question": "Bu modelin eski ayakkabımdan farkı hangi yastıklama sınıfında?", "whyItMatters": "Sıfırdan çok farklı sınıfa geçiş sakatlık riski doğurur; kademeli geçiş gerekir.", "target": 'seller' },
      { "id": "q2", "question": "Üretim tarihi kutuda görülebilir mi?", "whyItMatters": "Köpük zamanla dejenere olur; eski stok ayakkabı yeni gibi davranmaz.", "target": 'seller' },
      { "id": "q3", "question": "Yeni ayakkabıyı ilk haftalarda kısa koşularla denedim mi?", "whyItMatters": "Geçiş döneminde uzun koşu ayak ve baldır adapte olmadan yüklenir.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Başlangıç / Kısa Mesafe", "description": "Yastıklama ve uyum önceliklidir.", "recommendedCriteriaIds": ["pronasyon", "amortisman-denge", "beden-olcu"] },
      { "id": "ileri", "title": "Yarış / Uzun Mesafe", "description": "Ağırlık, taban verimi ve ömür yönetimi önceliklidir.", "recommendedCriteriaIds": ["km-omur", "zemin-form"] }
    ],
    "relatedGuideIds": ["trekking-ayakkabisi-alirken", "kislik-mont-alirken", "paten-alirken", "sirt-cantasi-alirken"]
  },
  {
    "id": "trekking-ayakkabisi-alirken",
    "slug": "trekking-ayakkabisi-alirken",
    "categorySlug": "giyim-aksesuar",
    "title": "Trekking Ayakkabısı Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Trekking Ayakkabısı Alırken",
    "description": "Trekking ayakkabısı alırken nelere dikkat edilmeli? Su geçirmezlik, taban grip, bilek desteği, ağırlık ve kırılış süresi kriterlerine göre seçim rehberi.",
    "intro": [
      "Trekking ayakkabısı seçiminde kullanım arazisi belirleyicidir. Günlük yürüyüş, uzun mesafe ve dağ patikaları farklı taban ve destek istidadı gerektirir.",
      "Su geçirmez membran, taban deseni ve bilek yüksekliği; konfor ve güvenliği birlikte belirleyen üç ana ölçüttür."
    ],
    "keywords": ["trekking ayakkabısı", "trekking ayakkabısı alırken nelere dikkat edilmeli", "yürüyüş ayakkabısı", "hiking botu", "su geçirmez ayakkabı", "dağ botu"],
    "aliases": ["yürüyüş ayakkabısı", "hiking bot", "trekking botu"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "su-gecirmezlik", "title": "Su Geçirmezlik ve Nefes Alabilirlik", "description": "Membranlı (GORE-TEX vb.) modeller yağmur ve çiy koruması verir; sıcak iklimde hızlı kuruyan örgü üstler daha ferahlatıcıdır.", "importance": 'critical' },
      { "id": "taban-grip", "title": "Taban Grip ve Desen", "description": "Derin, çok yönlü dişli, yumuşak kauçuk karışımı (Vibram tipi) ıslak taş ve toprakta tutuş sağlar.", "importance": 'critical' },
      { "id": "bilek-destegi", "title": "Bilek Desteği (Low/Mid/High)", "description": "Sırt çantalı uzun yürüyüşlerde mid-high bilek desteği burkulmayı azaltır; hafif günübirlik yürüyüşte low-cut yeterlidir.", "importance": 'important' },
      { "id": "agirlik-kirilis", "title": "Ağırlık ve Kırılış Süresi", "description": "Her ayakkabıda ekstra ~100 g, uzun yürüyüşte yorucudur; sert botların 30-50 km kırılış süresi hesaba katılmalıdır.", "importance": 'important' },
      { "id": "fit-olcu", "title": "Fit ve Ölçü", "description": "İnişte parmak önü boşluğu, geniş toe-box ve doğru numara; kalın yürüyüş çorabıyla deneme yapılmalıdır.", "importance": 'useful' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Kullanım arazime göre membranlı/membransız üst seçtim.", "importance": 'critical' },
      { "id": "c2", "text": "Taban desenini ve kauçuk yumuşaklığını ıslak zemin mantalitesiyle değerlendirdim.", "importance": 'critical' },
      { "id": "c3", "text": "Yükümü ve parkur süresimi düşünerek bilek yüksekliğini seçtim.", "importance": 'important' },
      { "id": "c4", "text": "Ağırlığı denedim ve kırılış süresini araştırdım.", "importance": 'important' },
      { "id": "c5", "text": "Yürüyüş çorabıyla numara ve toe-box kontrolü yaptım.", "importance": 'useful' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Şehir Amaçlı 'Outdoor' Görünümlü Ayakkabı", "explanation": "Moda amaçlı modellerde taban kauçuğu sert ve dişleri sığdır; gerçek patikada kayma riski yüksektir." },
      { "id": "rf2", "title": "Yeni Botla Uzun Parkur", "explanation": "Kırılmamış bot; bilek ve topukta aşırı sürtünme yarası yapar. İlk kullanımlar kısa parkurlarda olmalıdır." }
    ],
    "questions": [
      { "id": "q1", "question": "Bu modelin membranı hangi marka ve yüzey ömrü nedir?", "whyItMatters": "Membran performansı zamanla düşer; bilinen membranlar yeniden keplerken daha uzun ömürlüdür.", "target": 'seller' },
      { "id": "q2", "question": "Taban değişimi (resoling) yapılabiliyor mu?", "whyItMatters": "Kaliteli botlarda üst ömürlü, taban değişimi ile toplam maliyet düşer.", "target": 'seller' },
      { "id": "q3", "question": "Çorap kalınlığımı ve iniş eğimini hesaba katarak numara seçtim mi?", "whyItMatters": "İnişte parmak tırnağı vuruşu, en sık görülen trekking sakatlığıdır.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Günübirlik / Kolay Parkur", "description": "Hafiflik ve nefes alabilirlik önceliklidir.", "recommendedCriteriaIds": ["su-gecirmezlik", "fit-olcu"] },
      { "id": "ileri", "title": "Sırt Çantalı / Zorlu Parkur", "description": "Bilek desteği ve taban grip önceliklidir.", "recommendedCriteriaIds": ["taban-grip", "bilek-destegi", "agirlik-kirilis"] }
    ],
    "relatedGuideIds": ["kosu-ayakkabisi-alirken", "trekking-batonlari-alirken", "kislik-mont-alirken", "kamp-cadiri-alirken"]
  },
  {
    "id": "kislik-mont-alirken",
    "slug": "kislik-mont-alirken",
    "categorySlug": "giyim-aksesuar",
    "title": "Kışlık Mont Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Kışlık Mont Alırken",
    "description": "Kışlık mont alırken nelere dikkat edilmeli? Dolgu türü ve oranı, nefes alabilirlik, kapüşon tasarımı, dikiş yapısı ve kullanım amaçlı denge kriterlerine göre seçim rehberi.",
    "intro": [
      "Kışlık mont seçiminde en büyük ayrım dolgu türüdür: kuş tüyü mi, sentetik mi? Nem ve kullanım biçimi bu kararı belirler.",
      "Şehir kullanımı ile dağ kullanımı farklı denge ister; nefes alabilirlik, kapüşon ve pardesü uzunluğu amaca göre seçilmelidir."
    ],
    "keywords": ["kışlık mont", "kışlık mont alırken nelere dikkat edilmeli", "down mont", "kuş tüyü mont", "sentetik dolgu", "kış montu seçimi"],
    "aliases": ["kış montu", "down mont", "mont"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "dolgu-turu", "title": "Dolgu Türü", "description": "Kuş tüyü (down) en yüksek ısı/ağırlık oranını verir ama ıslanınca çöker; sentetik dolgu nemde çalışır ve hızlı kurur.", "importance": 'critical' },
      { "id": "dolgu-gucu", "title": "Dolgu Gücü ve Gramaj", "description": "Down montlarda fill power 600+ istenir; hacim değil gram ve FP değeri birlikte değerlendirilmelidir.", "importance": 'critical' },
      { "id": "nefes-dis", "title": "Nefes Alabilirlik ve Dış Yüzey", "description": "Aktif kullanımda (kayak, yürüyüş) membranlı/pit zip'li modeller; şehirde rüzgar kesicilik yeterlidir.", "importance": 'important' },
      { "id": "kapuson-detay", "title": "Kapüşon ve Astar", "description": "Ayarlanabilir kapüşon, kürk/visör opsiyonları; astarın kaymaz yapısı ve fermuar protectörü konforu belirler.", "importance": 'important' },
      { "id": "dikiş-baffle", "title": "Dikiş ve Baffle Yapısı", "description": "Soğuk noktalar dikişlerden kaçar; kutu dikiş (baffle) yapısı soğuk köprüleri engeller, dış dikiş ise hafiflik sağlar.", "importance": 'useful' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Kullanım nem koşullarıma göre down/sentetik kararı verdim.", "importance": 'critical' },
      { "id": "c2", "text": "Fill power ve dolgu gramajını etiketten kontrol ettim.", "importance": 'critical' },
      { "id": "c3", "text": "Aktif/şehir kullanımıma göre dış yüzey ve astar seçtim.", "importance": 'important' },
      { "id": "c4", "text": "Kapüşon ayarını ve başımdaki hareketle uyumunu denedim.", "importance": 'important' },
      { "id": "c5", "text": "Dikiş yapısını soğuk köprü açısından inceledim.", "importance": 'useful' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Yüksek FP İddiası Ucuz Montlarda", "explanation": "900 FP iddiası bulunan düşük fiyatlı montlarda dolgu karışımı ve menşei belirsizdir; performans ölçülemez." },
      { "id": "rf2", "title": "Yağmurluk Giyip Altına Kalın Mont", "explanation": "Nefes almayan dış katman altında biriken nem, kuş tüyü dolgunun çökmesine ve soğumaya yol açar." }
    ],
    "questions": [
      { "id": "q1", "question": "Dolgu içeriği, FP değeri ve dolgu oranları etikette belirtilmiş mi?", "whyItMatters": "Belirtilmeyen dolgu performansı değerlendirilemez; RDS benzeri sertifikalar hayvan refahı açısından ek ölçüttür.", "target": 'seller' },
      { "id": "q2", "question": "Fermuar yolu ve kapüşon kürkü değiştirilebilir/onarılabilir mi?", "whyItMatters": "Yıpranan parçaların değişimi montun ömrünü uzatır.", "target": 'seller' },
      { "id": "q3", "question": "Montumu katlayarak değil asarak saklıyor muyum?", "whyItMatters": "Uzun süre sıkıştırılan kuş tüyü dolgu loft kaybeder.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Şehir / Günlük Kullanım", "description": "Görünüm, uzunluk ve rüzgar kesicilik önceliklidir.", "recommendedCriteriaIds": ["dolgu-turu", "kapuson-detay"] },
      { "id": "ileri", "title": "Doğa / Aktif Kullanım", "description": "Nefes alabilirlik, ağırlık ve baffle yapısı önceliklidir.", "recommendedCriteriaIds": ["dolgu-gucu", "nefes-dis", "dikiş-baffle"] }
    ],
    "relatedGuideIds": ["yagmurluk-alirken", "kosu-ayakkabisi-alirken", "trekking-ayakkabisi-alirken", "gunes-gozlugu-alirken"]
  },
  {
    "id": "yagmurluk-alirken",
    "slug": "yagmurluk-alirken",
    "categorySlug": "giyim-aksesuar",
    "title": "Yağmurluk Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Yağmurluk Alırken",
    "description": "Yağmurluk alırken nelere dikkat edilmeli? Su kolonu ve nefes değerleri, bantlı dikiş, kapüşon ayarı, fermuar koruması ve paket boyutu kriterlerine göre seçim rehberi.",
    "intro": [
      "Yağmurluk seçiminde su geçirmezlik kadar nefes alabilirlik belirleyicidir; iki değer birlikte (mm/mvp) okunmalıdır.",
      "Dikiş bantları, kapüşon ayarı ve fermuar koruması gibi ayrıntılar, gerçek yağmurda performansı belirleyen detaylardır."
    ],
    "keywords": ["yağmurluk", "yağmurluk alırken nelere dikkat edilmeli", "su geçirmez mont", "membran yağmurluk", "bantlı dikiş", "yağmurluk mm değeri"],
    "aliases": ["su geçirmez mont", "rain jacket", "yağmurluk"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "membran-deger", "title": "Su Kolonu ve Nefes Değeri", "description": "10.000 mm üzeri su kolonu sağanak yağmura yeterlidir; 5.000 mvp üzeri nefes değeri teri dışarı atar.", "importance": 'critical' },
      { "id": "diksi-bant", "title": "Bantlı Dikiş", "description": "Kumaş su geçirmese bile dikiş delikleri geçirir; tüm dikişlerin bantlandığından emin olunmalıdır.", "importance": 'critical' },
      { "id": "kapuson-ayar", "title": "Kapüşon ve Vizör", "description": "Yan ayarlı, öne vizörlü kapüşon rüzgarda yüzü korur; miğfer uyumlu modeller bisiklet/motosiklet için esneklik sağlar.", "importance": 'important' },
      { "id": "fermuar-koruma", "title": "Fermuar Koruması", "description": "Çift kapak (storm flap) veya suya dayanıklı fermuar; ön fermuar en kritik su giriş noktasıdır.", "importance": 'important' },
      { "id": "paket-agirlik", "title": "Paket Boyutu ve Ağırlık", "description": "Cebinize giren 150-250 g modeller şehir pratiktir; uzun doğa kullanımında daha kalın membran tercih edilir.", "importance": 'useful' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Su kolonu ve nefes değerlerini etiketten karşılaştırdım.", "importance": 'critical' },
      { "id": "c2", "text": "İç yüzeydeki dikiş bantlarını kontrol ettim.", "importance": 'critical' },
      { "id": "c3", "text": "Kapüşonun yüzü kapattığını ve yan ayarların çalıştığını denedim.", "importance": 'important' },
      { "id": "c4", "text": "Fermuar korumasını ve çift kapak yapısını inceledim.", "importance": 'important' },
      { "id": "c5", "text": "Katlanınca kapladığı hacmi ve ağırlığı değerlendirdim.", "importance": 'useful' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Kaplama (Coating) Teknolojili Ucuz Modeller", "explanation": "PÜ kaplamalı yağmurluklar ilk yıkamalarda kabarıp soyulur; membran yerine geçmez." },
      { "id": "rf2", "title": "Nefessiz Plastik Önlük Tipi", "explanation": "Tam nefessiz katman altında biriken ter, dışarıdaki yağmurdan daha çok ıslaklık yaratır." }
    ],
    "questions": [
      { "id": "q1", "question": "Bu ürünün su kolonu ve nefes değerleri laboratuvar ölçümü mü, pazarlama değeri mi?", "whyItMatters": "Değerler karşılaştırılabilir standart (JIS/ASTM) ile verilmelidir.", "target": 'seller' },
      { "id": "q2", "question": "DWR kaplama bittiğinde yenileme mümkün mü, ürün bakım önerisi nedir?", "whyItMatters": "Yağmurluk ömrü DWR bakımıyla uzar; ütü/curu ayarı yanlışsa membran zarar görür.", "target": 'seller' },
      { "id": "q3", "question": "Yağmurluğu sırt çantasımla birlikte denedim mi?", "whyItMatters": "Sırt çantası kapüşon ve fermuar hattını iter; kapüşon uyumsuzluğu görüşü kapatır.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Şehir / Seyahat", "description": "Paket boyutu ve günlük konfor önceliklidir.", "recommendedCriteriaIds": ["membran-deger", "paket-agirlik"] },
      { "id": "ileri", "title": "Doğa / Uzun Süreli Yağmur", "description": "Bant, fermuar koruması ve kapüşon önceliklidir.", "recommendedCriteriaIds": ["diksi-bant", "kapuson-ayar", "fermuar-koruma"] }
    ],
    "relatedGuideIds": ["kislik-mont-alirken", "trekking-ayakkabisi-alirken", "sirt-cantasi-alirken", "kamp-cadiri-alirken"]
  },
  {
    "id": "takim-elbise-alirken",
    "slug": "takim-elbise-alirken",
    "categorySlug": "giyim-aksesuar",
    "title": "Takım Elbise Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Takım Elbise Alırken",
    "description": "Takım elbise alırken nelere dikkat edilmeli? Kumaş gramajı ve yün oranı, kalıp uyumu, astar yapısı, dikiş kalitesi ve terzi düzeltme bütçesi kriterlerine göre seçim rehberi.",
    "intro": [
      "Takım elbise seçiminde beden numarasından çok omuz uyumu ve kumaş kalitesi belirleyicidir. Omuz dikişi tam omuz ucunda bitmelidir.",
      "Hazır takımda terzi düzeltmesi (paça, kol, bel) maliyeti fiyatla birlikte düşünülmalı; kalın kumaş ve yün oranı ürünün ömrünü belirler."
    ],
    "keywords": ["takım elbise", "takım elbise alırken nelere dikkat edilmeli", "erkek takım elbise", "damatlık", "yün takım elbise", "takım elbise kalıp"],
    "aliases": ["suit", "damatlık", "takım elbise"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "omuz-uyumu", "title": "Omuz ve Kalıp Uyumu", "description": "Omuz dikişi omuz ucunda, yaka arkaya yatıyor, düğme kapandığında X çekilmesi olmadan oturmalıdır; omuz terzide düzeltilemez.", "importance": 'critical' },
      { "id": "kumas-kalite", "title": "Kumaş ve Yün Oranı", "description": "Süper 110-150 s yünler parlak ve hafiftir; mevsime göre gramaj (240-280 g) ve keten/yün karışımı seçilmelidir.", "importance": 'critical' },
      { "id": "dikkat-detay", "title": "Dikiş ve Detay Kalitesi", "description": "Sık ve düzgün dikiş, gerçek nep döngü (yelek düğmesi), kolların elle dikilmesi kalite göstergesidir.", "importance": 'important' },
      { "id": "astar-yapi", "title": "Astar ve Hareket Konforu", "description": "Tam/yarı astar terlemeyi ve kumaşın vücuda yapışmasını engeller; sırt yürüyüş pensesi hareket alanı sağlar.", "importance": 'important' },
      { "id": "terzi-butce", "title": "Terzi Düzeltme Bütçesi", "description": "Paça, kol, bel ve yaka düzeltmeleri toplam maliyeti artırır; ücretsiz düzeltme kampanyaları takviye değerdir.", "importance": 'useful' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Omuz dikişinin tam omuz ucunda bittiğini aynada kontrol ettim.", "importance": 'critical' },
      { "id": "c2", "text": "Kumaş etiketinden yün oranı ve gramaj bilgilerini okudum.", "importance": 'critical' },
      { "id": "c3", "text": "Dikiş sıklığını ve iç işçiliği (astar, pence) inceledim.", "importance": 'important' },
      { "id": "c4", "text": "Kolları kaldırıp oturarak hareket konforunu test ettim.", "importance": 'important' },
      { "id": "c5", "text": "Terzi düzeltme ücretlerini ve süresini öğrendim.", "importance": 'useful' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "%100 Polyester 'Yün Görünümlü'", "explanation": "Polyester parlaklığı ve nefessizliği fotoğrafta belli olmaz; uzun kullanımda parlama ve keçeleşme yapar." },
      { "id": "rf2", "title": "Kapalı Düğme Delikleri", "explanation": "Sahte düğme deliği ve yapıştırmalı lapel, düşük işçilik göstergesidir." }
    ],
    "questions": [
      { "id": "q1", "question": "Bu kumaşın gramajı ve bileşimi nedir, hangi mevsim için uygun?", "whyItMatters": "Yanlış gramaj mevsim dışı kullanımı imkansız kılar.", "target": 'seller' },
      { "id": "q2", "question": "Düzeltmeler dahil midir, kaç gün içinde teslim edilir?", "whyItMatters": "Düğün/mülakat gibi tarihli kullanımda süre kritiktir.", "target": 'seller' },
      { "id": "q3", "question": "Terziye omuz ve yaka uyumunu ayrıca sordum mu?", "whyItMatters": "Omuz düzeltilemez; omuz uymayan takım terzide de kurtarılamaz.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Günlük / İş Kullanımı", "description": "Dayanıklı kumaş ve çok yönlü renk önceliklidir.", "recommendedCriteriaIds": ["omuz-uyumu", "kumas-kalite"] },
      { "id": "ileri", "title": "Düğün / Özel Gün", "description": "Kumaş kalitesi ve detay işçiliği önceliklidir.", "recommendedCriteriaIds": ["dikkat-detay", "astar-yapi", "terzi-butce"] }
    ],
    "relatedGuideIds": ["kot-pantolon-alirken", "deri-canta-alirken", "gunes-gozlugu-alirken"]
  },
  {
    "id": "kot-pantolon-alirken",
    "slug": "kot-pantolon-alirken",
    "categorySlug": "giyim-aksesuar",
    "title": "Kot Pantolon Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Kot Pantolon Alırken",
    "description": "Kot pantolon alırken nelere dikkat edilmeli? Denim gramajı, kesim ve bel yüksekliği, elastan oranı, yıkama tipi ve dikiş sağlamlığı kriterlerine göre seçim rehberi.",
    "intro": [
      "Kot pantolon seçiminde kesim adı (slim, straight) kadar kumaş bileşimi belirleyicidir. Elastan oranı konforu, ham denim ise kalıcı formu etkiler.",
      "Denim gramajı mevsime ve kullanıma göre seçilmeli; dikiş vemetal aksam kalitesi ürünün ömrünü belirler."
    ],
    "keywords": ["kot pantolon", "kot pantolon alırken nelere dikkat edilmeli", "jean seçimi", "denim gramaj", "slim fit kot", "ham denim"],
    "aliases": ["jean", "denim pantolon", "kot"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "gramaj-mevsim", "title": "Denim Gramajı", "description": "10-12 oz yazlık hafif; 13-14 oz klasik; 15+ oz ham/ağır denim form tutar ama kırılış süresi uzundur.", "importance": 'critical' },
      { "id": "kesim-bel", "title": "Kesim ve Bel Yüksekliği", "description": "Slim/straight/relaxed kesimle birlikte mid/high/low bel seçimi vücut tipine göre yapılmalı; oturup kalkma testi şarttır.", "importance": 'critical' },
      { "id": "elastan-orani", "title": "Elastan Oranı", "description": "%2 elastan günlük konfor sağlar; %100 pamuk rigid denim zamanla vücuda oturur ama ilk gün dar hissedilir.", "importance": 'important' },
      { "id": "yikama-renk", "title": "Yıkama ve Renk Sabitliği", "description": "Koyu yıkamalar daha uzun ömürlü görünür; ham denim ve ağır pigmentler ilk yıkamalarda renk verir.", "importance": 'important' },
      { "id": "dikiş-saglam", "title": "Dikiş ve Metal Aksam", "description": "Step dikişi, bel ilik dikişleri ve fermuar kalitesi ilk yıpranma noktalarıdır; iç dikiş sarım sıklığı kontrol edilmelidir.", "importance": 'useful' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Gramajı ve mevsim uyumunu etiketten kontrol ettim.", "importance": 'critical' },
      { "id": "c2", "text": "Oturup kalkarak bel ve kalça uyumunu test ettim.", "importance": 'critical' },
      { "id": "c3", "text": "Elastan oranını ve esneme hissini değerlendirdim.", "importance": 'important' },
      { "id": "c4", "text": "Yıkama talimatını ve renk sabitliği riskini sordum.", "importance": 'important' },
      { "id": "c5", "text": "İç dikişleri ve fermuar/logar aksamı inceledim.", "importance": 'useful' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Aşırı Yırtık/Delinik Detay", "explanation": "Ripedetaylı kotlarda yırtık kenarları zamanla büyür; diz arkası ve kalça bölgelerinde hızla yırtılır." },
      { "id": "rf2", "title": "Kaplamalı 'Süper Esnek' Kotlar", "explanation": "Yüksek elastanlı kaplamalı kumaşlar birkaç yıkamada sarkar ve toparlanmaz." }
    ],
    "questions": [
      { "id": "q1", "question": "Bu kotun gramajı ve kumaş bileşimi nedir?", "whyItMatters": "Bileşim, konfor-ömür dengesini belirler; etiketteki değerler karşılaştırma ölçüsüdür.", "target": 'seller' },
      { "id": "q2", "question": "Yıkama sonrası çekme oranı belirtilmiş mi?", "whyItMatters": "Ham denim %3-5 çekebilir; numara seçimini etkiler.", "target": 'seller' },
      { "id": "q3", "question": "Yıkamadan sonra asarak mı kurutuyorum?", "whyItMatters": "Kurutucu kotun hem ölçüsünü hem elastanını hızla yıpratır.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Günlük / Rahat Kullanım", "description": "Elastan konforu ve orta gramaj önceliklidir.", "recommendedCriteriaIds": ["kesim-bel", "elastan-orani"] },
      { "id": "ileri", "title": "Kalıcı Form / Ham Denim", "description": "Gramaj ve dikiş kalitesi önceliklidir.", "recommendedCriteriaIds": ["gramaj-mevsim", "yikama-renk", "dikiş-saglam"] }
    ],
    "relatedGuideIds": ["takim-elbise-alirken", "deri-canta-alirken", "kosu-ayakkabisi-alirken"]
  },
  {
    "id": "gunes-gozlugu-alirken",
    "slug": "gunes-gozlugu-alirken",
    "categorySlug": "giyim-aksesuar",
    "title": "Güneş Gözlüğü Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Güneş Gözlüğü Alırken",
    "description": "Güneş gözlüğü alırken nelere dikkat edilmeli? UV-400 koruma, cam kategorisi, polarizasyon, çerçeve uyumu ve cam malzemesi kriterlerine göre seçim rehberi.",
    "intro": [
      "Güneş gözlüğünde karartma değil UV koruması esastır. UV-400 etiketi olmadan koyu cam, bebeekteki göz bebeğini büyüterek daha fazla zararlı ışık alımına yol açar.",
      "Polarize camlar yansımaları keser; kullanım alanı (trafik, deniz, spor) cam kategorisi ve çerçeve seçimini belirler."
    ],
    "keywords": ["güneş gözlüğü", "güneş gözlüğü alırken nelere dikkat edilmeli", "polarize gözlük", "uv400 koruma", "cam kategorisi", "spor güneş gözlüğü"],
    "aliases": ["sunglass", "polarize gözlük", "uv gözlük"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "uv-koruma", "title": "UV-400 Koruma", "description": "Cam rengi ne olursa olsun 100% UVA/UVB koruma (UV-400) olmalı; sahte/etiketsiz ürünlerde bu garanti yoktur.", "importance": 'critical' },
      { "id": "cam-kategorisi", "title": "Cam Kategorisi (0-4)", "description": "Kategori 2-3 günlük kullanım; kategori 4 yalnız yüksek dağ/deniz içindir ve araç kullanımında yasaktır.", "importance": 'critical' },
      { "id": "polarizasyon", "title": "Polarizasyon", "description": "Yansımaları (su, asfalt, kaput) keserek kontrastı artırır; bazı LCD ekranlarda karartma yapabilir.", "importance": 'important' },
      { "id": "cerceve-fit", "title": "Çerçeve ve Yüz Uyumu", "description": "Geniş kapanan, kaş hizasında oturan çerçeve üstten ve yandan gelen ışığı keser; spor modellerde kaymaz burun pedi gerekir.", "importance": 'important' },
      { "id": "cam-malzeme", "title": "Cam Malzemesi", "description": "Polikarbonat darbeye dayanıklı ve hafif; mineral cam çizilmeye dayanıklıdır ama ağırdır; kaplama kalitesi (yansıma önleyici) görüntü netliğini etkiler.", "importance": 'useful' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "UV-400 / 100% UV koruma etiketini kontrol ettim.", "importance": 'critical' },
      { "id": "c2", "text": "Cam kategorisini kullanım alanıma göre seçtim.", "importance": 'critical' },
      { "id": "c3", "text": "Polarizasyon ihtiyacımı (trafik/deniz/spor) değerlendirdim.", "importance": 'important' },
      { "id": "c4", "text": "Çerçevenin yüzümü ve kaşlarımı kapattığını denedim.", "importance": 'important' },
      { "id": "c5", "text": "Cam malzemesini ve kaplamalarını karşılaştırdım.", "importance": 'useful' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Etiketsiz Sokak/Sepet Gözlükleri", "explanation": "Koyu cam + UV koruması yok kombinasyonu, korumasız açık gözden daha fazla UV alımına yol açar." },
      { "id": "rf2", "title": "Aşırı Kaplama Ucuz 'Mirror' Camlar", "explanation": "Ucuz yansıma kaplamaları kısa sürede soyulur; çizik cam görüntü kalitesini kalıcı bozar." }
    ],
    "questions": [
      { "id": "q1", "question": "Ürünün UV koruma belgesi ve cam kategorisi nedir?", "whyItMatters": "Koruma iddiası belgeyle doğrulanmalı; kategori 4 trafikte güvenlik riskidir.", "target": 'seller' },
      { "id": "q2", "question": "Camda yansıma önleyici/sertleştirici kaplama var mı?", "whyItMatters": "Kaplamalar konfor ve dayanıklılığı artırır; eksikse cam hızla çizilir.", "target": 'seller' },
      { "id": "q3", "question": "Gözlüğü araç kullanırken LCD ekranla test ettim mi?", "whyItMatters": "Polarize camlar bazı ekranları karartabilir;önceden kontrol sürüş güvenliği için önemlidir.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Günlük / Şehir Kullanımı", "description": "UV koruma ve çerçeve uyumu önceliklidir.", "recommendedCriteriaIds": ["uv-koruma", "cerceve-fit"] },
      { "id": "ileri", "title": "Deniz / Dağ / Spor", "description": "Kategori, polarizasyon ve cam malzemesi önceliklidir.", "recommendedCriteriaIds": ["cam-kategorisi", "polarizasyon", "cam-malzeme"] }
    ],
    "relatedGuideIds": ["takim-elbise-alirken", "kislik-mont-alirken", "teleskop-alirken", "durbin-alirken"]
  },
  {
    "id": "sirt-cantasi-alirken",
    "slug": "sirt-cantasi-alirken",
    "categorySlug": "giyim-aksesuar",
    "title": "Sırt Çantası Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Sırt Çantası Alırken",
    "description": "Sırt çantası alırken nelere dikkat edilmeli? Hacim ölçüsü, sırt ve kalça sistemi, yük taşıma dengesi, kumaş dayanımı ve bölme erişimi kriterlerine göre seçim rehberi.",
    "intro": [
      "Sırt çantası seçiminde litre değil sırt sistemine uygunluk belirleyicidir. Omuz askısı ve kalça kemerinin uzun kullanımdaki rahatlığı ağırlık aktarımını belirler.",
      "Günlük kullanım (20-30 L) ile trekking (40 L+) farklı yapı ister; kumaş dayanımı ve su iticilik ömür ölçütleridir."
    ],
    "keywords": ["sırt çantası", "sırt çantası alırken nelere dikkat edilmeli", "trekking çantası", "günlük sırt çantası", "kalça kemerli çanta", "laptop çantası"],
    "aliases": ["backpack", "trekking çantası", "okul çantası"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "hacim-kullanim", "title": "Hacim ve Kullanım Alanı", "description": "Günlük/okul için 20-30 L, hafta sonu 40-50 L, uzun seyahat 60 L+; hacim büyüdükçe sırt sistemi daha kritik hale gelir.", "importance": 'critical' },
      { "id": "sirt-sistemi", "title": "Sırt Sistemi ve Havalandırma", "description": "Sırt boyuna göre ayarlanabilir omuz askıları, havalandırmalı (mesh) sırt plakası ve ergonomik kalça kemeri ağırlığı bele aktarır.", "importance": 'critical' },
      { "id": "yuk-dengesi", "title": "Yük Dengesi ve Askı Yapısı", "description": "Ağırlık merkezi sırtın üst kısmına yakın ve vücuda yakın olmalı; geniş dolgulu askılar ve göğüs kilidi dengeyi kilitler.", "importance": 'important' },
      { "id": "kumas-dayanim", "title": "Kumaş Dayanımı", "description": "Ripstop dokuma, yüksek denier değerleri ve su itici kaplama; fermuar markası (YKK benzeri) ömür göstergesidir.", "importance": 'important' },
      { "id": "bolme-erisim", "title": "Bölme ve Erişim Düzeni", "description": "Ön erişim fermuarı, laptop bölmesi, su şişesi cebi ve dış bağlantı noktaları günlük pratikliği belirler.", "importance": 'useful' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Hacmi kullanım amacıma göre belirledim.", "importance": 'critical' },
      { "id": "c2", "text": "Sırt boyuma göre askı ayarını denedim, kalça kemerini kilitledim.", "importance": 'critical' },
      { "id": "c3", "text": "Ağırlık yükünü simüle edip omuz/bel dengesini test ettim.", "importance": 'important' },
      { "id": "c4", "text": "Kumaş, dikiş ve fermuar kalitesini inceledim.", "importance": 'important' },
      { "id": "c5", "text": "Bölme düzenini günlük eşyalarımla kafamda simüle ettim.", "importance": 'useful' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Kalça Kemeri Olmayan Büyük Hacim", "explanation": "40 L+ çantada omuz askısı tüm yükü taşır; uzun yürüyüşte omuz ve boyun ağrısı kaçınılmaz olur." },
      { "id": "rf2", "title": "Dikişsiz Alt Kalite Fermuar", "explanation": "Bilinmeyen marka fermuarlar ilk yıl kopar; çanta gövdesi sağlam olsa bile kullanılamaz hale gelir." }
    ],
    "questions": [
      { "id": "q1", "question": "Sırt boyu ayarı var mı, kaç cm aralığında?", "whyItMatters": "Ayarlanamayan sırt plakası farklı boylarda yanlış yük aktarımı yapar.", "target": 'seller' },
      { "id": "q2", "question": "Yağmurluk kılıfı dahil mi, kumaş su itici mi?", "whyItMatters": "Su iticilik zamanla azalır; kılıf uzun yağmurda güvenlik sağlar.", "target": 'seller' },
      { "id": "q3", "question": "Ağır eşyayı çantanın üst ve sırt yakınına yerleştiriyor muyum?", "whyItMatters": "Yanlış yükleme dengeyi bozar ve bel yükünü artırır.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Günlük / Laptop Kullanımı", "description": "Bölme düzeni ve laptop koruması önceliklidir.", "recommendedCriteriaIds": ["hacim-kullanim", "bolme-erisim"] },
      { "id": "ileri", "title": "Trekking / Uzun Yürüyüş", "description": "Sırt sistemi, yük dengesi ve dayanım önceliklidir.", "recommendedCriteriaIds": ["sirt-sistemi", "yuk-dengesi", "kumas-dayanim"] }
    ],
    "relatedGuideIds": ["valiz-alirken", "kamp-cadiri-alirken", "trekking-ayakkabisi-alirken", "bebek-bakim-cantasi-alirken"]
  },
  {
    "id": "deri-canta-alirken",
    "slug": "deri-canta-alirken",
    "categorySlug": "giyim-aksesuar",
    "title": "Deri Çanta Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Deri Çanta Alırken",
    "description": "Deri çanta alırken nelere dikkat edilmeli? Deri türü ve tabaklama, dikiş işçiliği, metal aksam, iç yapı ve bakım gereksinimi kriterlerine göre seçim rehberi.",
    "intro": [
      "Deri çanta seçiminde görünüm değil deri türü belirleyicidir. Tam tanecikli (full grain) deri yıllar içinde güzelleşir; kaplama deri kısa sürede soyulur.",
      "Dikiş sıklığı, iç astar ve metal aksam kalitesi çantanın gerçek ömrünü belirleyen ayrıntılardır."
    ],
    "keywords": ["deri çanta", "deri çanta alırken nelere dikkat edilmeli", "tam tanecikli deri", "full grain deri", "deri çanta bakımı", "bitkisel tabaklama"],
    "aliases": ["deri çanta", "leather bag", "postacı çantası"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "deri-turu", "title": "Deri Türü ve Tabaklama", "description": "Full grain ve top grain deri dayanıklıdır; split/bond deri kaplamadır ve soyulur; bitkisel tabaklama zamanla patina geliştirir.", "importance": 'critical' },
      { "id": "dikiş-isci", "title": "Dikiş İşçiliği", "description": "Kenar dikişleri sık ve düzgün olmalı; saddle stitch (çift iğne) dikiş bir iplik kopsa bile açılmaz.", "importance": 'critical' },
      { "id": "metal-aksam", "title": "Metal Aksam Kalitesi", "description": "Fermuar markası, tokalar ve d-ringler kaplama değil kütle metal olmalı; kaplama aksam soyulur.", "importance": 'important' },
      { "id": "ic-yapi", "title": "İç Yapı ve Bölmeler", "description": "Astar kumaşının cinsi, dikişli kart bölmeleri ve laptop/korporaj desteği günlük kullanım konforudur.", "importance": 'important' },
      { "id": "bakim", "title": "Bakım Gereksinimi", "description": "Deri düzenli nem ve krem bakımı ister; kullanım bölgesine (yağmur, güneş) uygun renk ve yüzey seçilmelidir.", "importance": 'useful' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Deri türünün full grain/top grain olduğunu ve kaplama olmadığını doğruladım.", "importance": 'critical' },
      { "id": "c2", "text": "Kenar dikişlerini ve iplik kalitesini inceledim.", "importance": 'critical' },
      { "id": "c3", "text": "Tokaları ve fermuarı metal kalitesi açısından kontrol ettim.", "importance": 'important' },
      { "id": "c4", "text": "İç astarı ve bölme düzenini günlük eşyamla değerlendirdim.", "importance": 'important' },
      { "id": "c5", "text": "Bakım ürünlerini ve talimatlarını araştırdım.", "importance": 'useful' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "'Genuine Leather' Etiketli Kaplama Deri", "explanation": "Genuine leather ifadesi düşük sınıf split deriyi de kapsar; kenar katmanına bakıldığında üstte ince film, altta keçe görülür." },
      { "id": "rf2", "title": "Kenarsız (Raw Edge) Ucuz Modeller", "explanation": "Kenar boyası işlenmemiş deri nemi emer, açılır ve dağılır; kaliteli üretimde kenarlar boyalı/cilalıdır." }
    ],
    "questions": [
      { "id": "q1", "question": "Deri tabaklama yöntemi nedir, koku ve esneklik nasıl?", "whyItMatters": "Krom tabaklama yumuşak ama bazı ciltlerde hassasiyet yapar; bitkisel tabaklama sert başlar ama patina geliştirir.", "target": 'seller' },
      { "id": "q2", "question": "Kulpu ve taşıyıcı dikişleri güçlendirilmiş mi, garanti kapsamı nedir?", "whyItMatters": "En sık kopma noktası kulak dikişleridir.", "target": 'seller' },
      { "id": "q3", "question": "Çantayı düzenli deri kremi/nem bakımıyla koruyor muyum?", "whyItMatters": "Bakımsız deri kurur, çatlar; ömür bakımla 2-3 katına çıkar.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Günlük / İş Kullanımı", "description": "İç yapı ve aksam sağlamlığı önceliklidir.", "recommendedCriteriaIds": ["deri-turu", "ic-yapi", "metal-aksam"] },
      { "id": "ileri", "title": "Uzun Ömür / Koleksiyon Parçası", "description": "Tabaklama, dikiş ve bakım önceliklidir.", "recommendedCriteriaIds": ["dikiş-isci", "bakim"] }
    ],
    "relatedGuideIds": ["takim-elbise-alirken", "kot-pantolon-alirken", "sirt-cantasi-alirken"]
  },

  {
    "id": "paten-alirken",
    "slug": "paten-alirken",
    "categorySlug": "spor-outdoor",
    "title": "Paten Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Paten Alırken",
    "description": "Paten alırken nelere dikkat edilmeli? Paten türü, bot sertliği ve numara, tekerlek büyüklüğü/yumuşaklığı, rulman sınıfı ve fren sistemi kriterlerine göre seçim rehberi.",
    "intro": [
      "Paten seçiminde ilk karar türdür: fitness (yumuşak bot), agresif (sokak) mı yokla buzk pateni mi? Her tür farklı bot ve teker ister.",
      "Numara, tekerlek sertliği ve rulman sınıfı (ABEC) birlikte değerlendirilmelidir; yanlış numara ayakta kalıcı rahatsızlık yapar."
    ],
    "keywords": ["paten", "paten alırken nelere dikkat edilmeli", "inline paten", "tekerlekli paten", "paten numarası", "agresif paten"],
    "aliases": ["inline paten", "tekerlekli paten", "rollerblade"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "tur-kullanim", "title": "Tür ve Kullanım Amacı", "description": "Fitness/rekreasyon için yumuşak botlu inline; agresif sokak pateni için kısa ve sert teker; çocuklarda büyüyen ayarlı modeller praticktir.", "importance": 'critical' },
      { "id": "bot-numara", "title": "Bot Sertliği ve Numara", "description": "Bot günlük ayakkabı numarasıyla aynı veya yarım büyük olmalı; yumuşak iç bot ilk kullanımda ayağı sıkı sarmalıdır.", "importance": 'critical' },
      { "id": "teker-oz", "title": "Tekerlek Büyüklüğü ve Sertliği", "description": "Büyük çap (90-100 mm) hız ve stabilite, küçük çap (72-80 mm) manevra verir; sertlik 78A-85A arası zemin tutuşunu belirler.", "importance": 'critical' },
      { "id": "rulman-sinif", "title": "Rulman Sınıfı (ABEC)", "description": "ABEC 5-7 günlük kullanım için yeterli ve bakımı kolaydır; ABEC 9+ yarış odaklıdır ve kirde hızla yıpranır.", "importance": 'important' },
      { "id": "fren-koruma", "title": "Fren ve Koruma Ekipmanı", "description": "Çıkarılabilir arka fren başlangıç seviyesinde şarttır; kask, dizlik ve bileklik güvenlik setiyle birlikte alınmalıdır.", "importance": 'important' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Kullanım amacıma uygun paten türünü belirledim.", "importance": 'critical' },
      { "id": "c2", "text": "Botu giyip bağlayarak numara uyumunu ve bilek desteğini test ettim.", "importance": 'critical' },
      { "id": "c3", "text": "Tekerlek çapı ve sertlik değerini zemin türüme göre seçtim.", "importance": 'critical' },
      { "id": "c4", "text": "Rulman sınıfını ve değiştirilebilirliğini kontrol ettim.", "importance": 'important' },
      { "id": "c5", "text": "Fren ve koruma ekipmanı (kask/dizlik) planımı yaptım.", "importance": 'important' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Ayarlı 'Büyüyen' Numara Yanlış Ayarlanmış", "explanation": "Ayarlı çocuk patenlerinde ayak, bot içinde ileri kaymışsa bilek desteği kaybolur ve devrilme riski artar." },
      { "id": "rf2", "title": "Plastik Gövdeli Süpermarket Pateni", "explanation": "Ucuz plastik gövdeli modellerde rulman ve teker değişimi imkansızdır; bir parça kırılınca ürün biter." }
    ],
    "questions": [
      { "id": "q1", "question": "Tekerlek ve rulmanlar standart ölçüde mi, yedek parça bulunuyor mu?", "whyItMatters": "Tekerler aşınan parçalardır; değişememe ürünü sezon içinde kullanılamaz hale getirir.", "target": 'seller' },
      { "id": "q2", "question": "Bot içi ayarlanabilir mi, kaç numara aralığını kapsıyor?", "whyItMatters": "Çocuklarda ayar aralığı ürünün ekonomik ömrünü belirler.", "target": 'seller' },
      { "id": "q3", "question": "İlk sürüşü açık ve düz bir alanda koruma ekipmanıyla yapıyor muyum?", "whyItMatters": "Paten öğrenirken bilek ve el bileği kırıkları en sık yaralanmalardır.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Başlangıç / Rekreasyon", "description": "Stabilite, fren ve konfor önceliklidir.", "recommendedCriteriaIds": ["tur-kullanim", "bot-numara", "fren-koruma"] },
      { "id": "ileri", "title": "İleri Seviye / Şehir İçi Hız", "description": "Teker çapı, rulman sınıfı ve bilek sertliği önceliklidir.", "recommendedCriteriaIds": ["teker-oz", "rulman-sinif"] }
    ],
    "relatedGuideIds": ["kaykay-alirken", "kosu-ayakkabisi-alirken", "motosiklet-kaski-alirken"]
  },
  {
    "id": "sup-board-alirken",
    "slug": "sup-board-alirken",
    "categorySlug": "spor-outdoor",
    "title": "SUP Board Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "SUP Board Alırken",
    "description": "SUP board alırken nelere dikkat edilmeli? Şişirme ve katı tahta seçimi, hacim ve taşıma kapasitesi, genişlik/stabilite, pompa ve aksesuar kriterlerine göre seçim rehberi.",
    "intro": [
      "SUP seçiminde ilk ayrım şişme (iSUP) ve katı tahtadır. Taşıma ve saklama kolaylığı çoğu kullanıcı için iSUP'ı mantıklı kılar.",
      "Hacim, genişlik ve kalınlık stabilite ile hız arasındaki dengeyi kurar; kullanıcının boyu ve kilosu seçimde belirleyicidir."
    ],
    "keywords": ["sup board", "sup board alırken nelere dikkat edilmeli", "şişme sup", "isup seçimi", "sup hacim hesaplama", "paddleboard"],
    "aliases": ["şişme sup", "isup", "paddleboard", "sup tahtası"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "sisme-kati", "title": "Şişme mi Katı mı", "description": "iSUP taşınabilir ve saklanabilir; katı tahta performans ve kayma veriminde üstündür. Başlangıç ve aile kullanımı için iSUP yaygın tercihtir.", "importance": 'critical' },
      { "id": "hacim-kilo", "title": "Hacim ve Taşıma Kapasitesi", "description": "Board hacmi (L) kullanıcının kilosuna göre seçilmelidir; hacim yetmezse board suya gömülür, kararsızlaşır.", "importance": 'critical' },
      { "id": "genislik-stabil", "title": "Genişlik ve Stabilite", "description": "32-34 cm genişlik başlangıç için stabil; 26-28 cm hız odaklıdır. Uzunluk arttıkça iz sürme (tracking) iyileşir.", "importance": 'critical' },
      { "id": "fin-kurgu", "title": "Fin Sistemi", "description": "Üç fin (2+1) yaygın kurulum; sökülebilir travel fin paket küçültme ve taşımada avantaj sağlar.", "importance": 'important' },
      { "id": "paket-erken", "title": "Paket İçeriği ve Malzeme", "description": "Çift katmanlı (double layer) drop-stitch yapı, yüksek PSI dayanımı, pompa-kayık-çanta-kemer seti toplam değeri belirler.", "importance": 'important' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Taşıma ve saklama koşullarıma göre şişme/katı kararını verdim.", "importance": 'critical' },
      { "id": "c2", "text": "Kilom ve boyuma göre hacim değerini kontrol ettim.", "importance": 'critical' },
      { "id": "c3", "text": "Genişlik değerini deneyim seviyeme göre değerlendirdim.", "importance": 'critical' },
      { "id": "c4", "text": "Fin sisteminin sökülebilir olduğunu kontrol ettim.", "importance": 'important' },
      { "id": "c5", "text": "Paket içeriğini (pompa, kürek, çanta, kurtarma kemer) karşılaştırdım.", "importance": 'important' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Tek Katmanlı Ucuz iSUP'lar", "explanation": "Tek katmanlı gövdeler yüksek basınçta esner ve dikişlerde sızıntı yapar; board yumuşar ve stabilite kaybolur." },
      { "id": "rf2", "title": "Belirtilmemiş Taşıma Kapasitesi", "explanation": "Kilo kapasitesi belirtilmeyen boardlar ağır kullanıcıda suya gömülür; performans ve güvenlik riski doğar." }
    ],
    "questions": [
      { "id": "q1", "question": "Bu boardun maksimum basınç (PSI) ve taşıma kapasitesi nedir?", "whyItMatters": "Düşük PSI sınırı yumuşak board demektir; kapasite altındaki kullanım dengesizlik yaratır.", "target": 'seller' },
      { "id": "q2", "question": "Yama kiti ve pompa arıza durumunda servis süreci nasıl?", "whyItMatters": "Sızıntı onarımı ilk sezonda çıkabilir; yerinde tamir seti boardu kurtarır.", "target": 'seller' },
      { "id": "q3", "question": "Rüzgar ve akıntı koşullarında yedek planım ve kemerim hazır mı?", "whyItMatters": "SUP'ta en büyük risk boarddan kopmaktır; kemer ve leash güvenlik zincirinin parçasıdır.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Başlangıç / Aile Eğlencesi", "description": "Stabil genişlik ve tam paket önceliklidir.", "recommendedCriteriaIds": ["sisme-kati", "genislik-stabil", "paket-erken"] },
      { "id": "ileri", "title": "Tur / Uzun Mesafe", "description": "Hacim, iz sürme ve fin sistemi önceliklidir.", "recommendedCriteriaIds": ["hacim-kilo", "fin-kurgu"] }
    ],
    "relatedGuideIds": ["kamp-cadiri-alirken", "kafa-lambasi-alirken", "trekking-ayakkabisi-alirken"]
  },
  {
    "id": "uyku-tulumu-alirken",
    "slug": "uyku-tulumu-alirken",
    "categorySlug": "spor-outdoor",
    "title": "Uyku Tulumu Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Uyku Tulumu Alırken",
    "description": "Uyku tulumu alırken nelere dikkat edilmeli? Konfor ve limit sıcaklık değerleri, dolgu türü, form (mumya/dikdörtgen), ağırlık ve boy uyumu kriterlerine göre seçim rehberi.",
    "intro": [
      "Uyku tulumu seçiminde pazarlama değeri değil EN/ISO sıcaklık test değerleri okunmalıdır: konfor (Tcomfort) ve limit (Tlimit) ayrı ayrı değerlendirilir.",
      "Dolgu türü (kuş tüyü/sentetik) nem koşullarına göre seçilir; form ve boy uyumu ısı kaybını belirleyen diğer ölçütlerdir."
    ],
    "keywords": ["uyku tulumu", "uyku tulumu alırken nelere dikkat edilmeli", "down tulum", "sentetik uyku tulumu", "konfor sıcaklığı", "mumya tulum"],
    "aliases": ["sleeping bag", "kamp tulumu", "bivak tulumu"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "sicaklik-deger", "title": "Sıcaklık Değerleri (EN 13537)", "description": "Konfor değeri kadın standartı, limit değeri erkek standartıdır; satın alırken hedef mevsimin gece sıcaklığına 3-5 derece pay eklenmelidir.", "importance": 'critical' },
      { "id": "dolgu-turu", "title": "Dolgu Türü", "description": "Kuş tüyü hafif ve paket küçüktür ama ıslanınca ısı tutmaz; sentetik dolgu nemde çalışır ve bakımı kolaydır.", "importance": 'critical' },
      { "id": "form-boy", "title": "Form ve Boy Uyumu", "description": "Mumya formu ısı verimli, dikdörtgen ferah; tulum boyu boydan 10-15 cm uzun olmalı, fazla boşluk soğuk hava cebi yaratır.", "importance": 'critical' },
      { "id": "agirlik-paket", "title": "Ağırlık ve Paket Hacmi", "description": "Sırt çantalı kullanımda ısı/ağırlık dengesi kritiktir; araba kampı için hacim değil konfor önceliklidir.", "importance": 'important' },
      { "id": "detay-kapuz", "title": "Kapüşon ve Detaylar", "description": "Boyun bariyeri (draft collar), fermuar tasma perdesi ve ısı yansıtıcı şerit soğuk noktaları kapatır.", "importance": 'useful' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Hedef mevsimin gece sıcaklığına göre konfor/limit değerlerini kontrol ettim.", "importance": 'critical' },
      { "id": "c2", "text": "Nem koşullarıma göre down/sentetik kararını verdim.", "importance": 'critical' },
      { "id": "c3", "text": "Formu ve boy uyumunu içine girerek test ettim.", "importance": 'critical' },
      { "id": "c4", "text": "Ağırlığını ve paket boyutunu kullanım biçimime göre değerlendirdim.", "importance": 'important' },
      { "id": "c5", "text": "Kapüşon, boyun bariyeri ve fermuar perdesi detaylarını inceledim.", "importance": 'useful' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "'4 Mevsim' İddialı Etiketsiz Tulumlar", "explanation": "Test standardı belirtilmeyen ürünlerde sıcaklık iddiası ölçülemez; gerçek performans iddianın çok altında çıkar." },
      { "id": "rf2", "title": "Aşırı Büyük Boy Tulum", "explanation": "Vücut ısıtması gereken hava hacmi büyüdükçe verim düşer; bol tulum soğuk hissettirir." }
    ],
    "questions": [
      { "id": "q1", "question": "Tulumun EN/ISO test değerleri (konfor, limit, ekstrem) nedir?", "whyItMatters": "Standart test olmadan mevsim iddiası pazarlama dilidir.", "target": 'seller' },
      { "id": "q2", "question": "Dolgu FP değeri ve iç yüzey kumaşı nedir?", "whyItMatters": "FP ve kumaş kalitesi ısı/ağırlık oranını ve ömrü belirler.", "target": 'seller' },
      { "id": "q3", "question": "Tulumu kullanımdan sonra havalandırıp uzun süre sıkışık saklamıyor muyum?", "whyItMatters": "Nem ve sürekli sıkışıklık dolgunun çökmesini hızlandırır.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Yaz / Ara Mevsim Kampı", "description": "Paket hacmi ve fiyat dengesi önceliklidir.", "recommendedCriteriaIds": ["dolgu-turu", "agirlik-paket"] },
      { "id": "ileri", "title": "Kış / Sırt Çantalı Kamp", "description": "Sıcaklık testi ve ağırlık verimi önceliklidir.", "recommendedCriteriaIds": ["sicaklik-deger", "form-boy", "detay-kapuz"] }
    ],
    "relatedGuideIds": ["kamp-mati-alirken", "kamp-cadiri-alirken", "kamp-ocagi-alirken", "kafa-lambasi-alirken"]
  },
  {
    "id": "kamp-mati-alirken",
    "slug": "kamp-mati-alirken",
    "categorySlug": "spor-outdoor",
    "title": "Kamp Matı Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Kamp Matı Alırken",
    "description": "Kamp matı alırken nelere dikkat edilmeli? R-değeri (yalıtım), kalınlık ve konfor, ağırlık/paket hacmi, şişme/köpük tipi ve boy kriterlerine göre seçim rehberi.",
    "intro": [
      "Kamp matı seçiminde konfor değil yalıtım önceliklidir: R-değeri zemin soğuğuna karşı direnci ölçer. Kış için 4+, yaz için 2 altı yeterlidir.",
      "Şişme matlar konforlu ve kompakt; köpük (foam) matlar delinme derdi yoktur ve uzun ömürlüdür."
    ],
    "keywords": ["kamp matı", "kamp matı alırken nelere dikkat edilmeli", "r değeri mat", "şişme kamp matı", "foam mat", "camping mat"],
    "aliases": ["sleeping pad", "mat", "yalıtım matı"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "r-deger", "title": "R-Değeri (Yalıtım)", "description": "Yaz 1-2, 3 mevsim 2-4, kış 4+; mat ile tulum birlikte sistemin yalıtımını oluşturur.", "importance": 'critical' },
      { "id": "kalinlik-konfor", "title": "Kalınlık ve Konfor", "description": "7-10 cm şişme mat yan/ense konforu verir; köpük matlarda oluklu (ridges) yapı hem yalıtım hem konfor sağlar.", "importance": 'critical' },
      { "id": "agirlik-hacim", "title": "Ağırlık ve Paket Hacmi", "description": "Sırt çantalı kullanımda 500 g altı matlar tercih edilir; araç kampında hacim kaygısı olmadan kalın mat seçilebilir.", "importance": 'important' },
      { "id": "tip-sisme", "title": "Şişme/Köpük Tipi", "description": "Kendinden şişen (self-inflating) denge sunar; hava matları (air chamber) hafiftir ama delinme riski taşır.", "importance": 'important' },
      { "id": "boy-yuzey", "title": "Boy ve Yüzey Dokusu", "description": "Boy uzunluği kullanıcının boyuna göre (regular/long); kaymaz yüzey dokusu gece kaymayı önler.", "importance": 'useful' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Hedef mevsime göre R-değerini kontrol ettim.", "importance": 'critical' },
      { "id": "c2", "text": "Kalınlığı ve yüzey dokusunu konfor ihtiyacıma göre seçtim.", "importance": 'critical' },
      { "id": "c3", "text": "Ağırlık ve paket hacmini taşıma biçimimle karşılaştırdım.", "importance": 'important' },
      { "id": "c4", "text": "Şişme tipini ve delinme onarım setinin dahil olup olmadığını kontrol ettim.", "importance": 'important' },
      { "id": "c5", "text": "Boy seçeneğini ve kaymaz yüzeyi değerlendirdim.", "importance": 'useful' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "R-Değeri Belirtilmemiş Matlar", "explanation": "Yalıtım değeri yazılmayan matlar soğuk zeminde yetersiz kalır; kullanıcı bunu gece üşüyerek anlar." },
      { "id": "rf2", "title": "Havuz Şişirme Matı", "explanation": "Havuz ürünleri güneş ve aşınmaya dayanıksızdır; birkaç kullanımda dikiş açılır." }
    ],
    "questions": [
      { "id": "q1", "question": "Bu matın R-değeri ve test standardı nedir ASTM/ISO)?", "whyItMatters": "R-değeri olmayan matın yalıtım performansı tahmin edilemez.", "target": 'seller' },
      { "id": "q2", "question": "Onarım kiti dahil mi, delinme durumunda garanti süreci nasıl işler?", "whyItMatters": "Hava matlarında delinme en sık arızadır; hızlı onarım kampı kurtarır.", "target": 'seller' },
      { "id": "q3", "question": "Matı tulumumla birlikte bütün sistem olarak değerlendirdim mi?", "whyItMatters": "Tulum konfor değerine rağmen soğuk zeminde mat yalıtımı olmadan verim düşer.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Yaz / Arazi Dışı Kamp", "description": "Konfor ve ekonomi önceliklidir.", "recommendedCriteriaIds": ["kalinlik-konfor", "tip-sisme"] },
      { "id": "ileri", "title": "Kış / Sırt Çantalı Kamp", "description": "R-değeri ve ağırlık önceliklidir.", "recommendedCriteriaIds": ["r-deger", "agirlik-hacim"] }
    ],
    "relatedGuideIds": ["uyku-tulumu-alirken", "kamp-cadiri-alirken", "kafa-lambasi-alirken"]
  },
  {
    "id": "kamp-ocagi-alirken",
    "slug": "kamp-ocagi-alirken",
    "categorySlug": "spor-outdoor",
    "title": "Kamp Ocağı Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Kamp Ocağı Alırken",
    "description": "Kamp ocağı alırken nelere dikkat edilmeli? Yakıt türü, watt gücü, rüzgar direnci, ağırlık ve destek stabilitesi kriterlerine göre seçim rehberi.",
    "intro": [
      "Kamp ocağı seçiminde yakıt türü ilk karardır: gaz kartuş mu, sıvı yakıt mı, alkol ocağı mı? Her birinin iklim ve maliyet avantajı farklıdır.",
      "Isı gücü (watt), rüzgar direnci ve ocak desteği gerçek saha performansını belirleyen ölçütlerdir."
    ],
    "keywords": ["kamp ocağı", "kamp ocağı alırken nelere dikkat edilmeli", "gaz ocağı", "kamp gazı", "portatif ocak", "trekking ocağı"],
    "aliases": ["camping stove", "gaz ocağı", "trekking ocağı"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "yakit-turu", "title": "Yakıt Türü", "description": "Kartuş gaz pratik ve temiz; sıvı yakıt (benzin) soğukta ve yüksek irtifada güçlü; alkol ocağı sessiz ve hafif ama düşük güçlüdür.", "importance": 'critical' },
      { "id": "isi-gucu", "title": "Isı Gücü (Watt)", "description": "1,5-3 kW aralığı yaygındır; rüzgarda ve soğukta kaynama süresi uzadığından güç payı bırakılmalıdır.", "importance": 'critical' },
      { "id": "ruzgar-destek", "title": "Rüzgar Direnci ve Deste", "description": "Entegre rüzgar ekranı ve geniş tencere desteği; dar desteli ocaklar büyük tencerede devrilme riski yaratır.", "importance": 'important' },
      { "id": "turler-agirlik", "title": "Tip ve Ağırlık", "description": "Uzaktan hortumlu sistemler soğuk havalarda kartuşu çevirerek performansı korur; micro ocaklar hafif ama yavaş pişirir.", "importance": 'important' },
      { "id": "kartus-uyum", "title": "Kartuş Uyumu ve Bulunabilirlik", "description": "Engram/valve standardı (en yaygın 7/16 inç) seyahat bölgesinde kartuş bulma şansını belirler.", "importance": 'useful' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Yakıt türünü iklim ve kullanım amacıma göre seçtim.", "importance": 'critical' },
      { "id": "c2", "text": "Watt değerini ve kaynama süresi verisini karşılaştırdım.", "importance": 'critical' },
      { "id": "c3", "text": "Rüzgar ekranı ve tencere desteği stabilitesini inceledim.", "importance": 'important' },
      { "id": "c4", "text": "Ağırlığını ve paket boyutunu taşıma planımla karşılaştırdım.", "importance": 'important' },
      { "id": "c5", "text": "Kartuş standardının seyahat bölgemde bulunabilir olduğunu doğruladım.", "importance": 'useful' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Devrik Kartuş Ucuz Ocaklar", "explanation": "Kartuşu yatan konumda kullanan ucuz modeller alev kontrolünü kaybeder ve kartuş ısınıp risk yaratır." },
      { "id": "rf2", "title": "Isı Kontrolü Olmayan Tek Mod", "explanation": "Yalnız tam güç yanan ocak ince pişirme yapamaz; regulasyon vanası olmayan model pratik değildir." }
    ],
    "questions": [
      { "id": "q1", "question": "Bu ocağın soğuk hava performansı ve kartuş tüketimi (g/saat) verisi var mı?", "whyItMatters": "Soğukta kartuş basıncı düşer; veri olmadan kamp planlaması yapılamaz.", "target": 'seller' },
      { "id": "q2", "question": "Yedek contalar ve bakım kiti bulunuyor mu?", "whyItMatters": "Sıvı yakıt ocaklarında conta ve temizlik periyodik bakım ister.", "target": 'seller' },
      { "id": "q3", "question": "Ocağı çadır içinde asla çalıştırmıyor muyum?", "whyItMatters": "Karbonmonoksit riski ve yangın riski nedeniyle ocak çadır içinde kullanılmaz.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Aile / Araç Kampı", "description": "Güç ve stabilite önceliklidir.", "recommendedCriteriaIds": ["isi-gucu", "ruzgar-destek"] },
      { "id": "ileri", "title": "Trekking / Sırt Çantalı", "description": "Ağırlık ve yakıt verimi önceliklidir.", "recommendedCriteriaIds": ["yakit-turu", "turler-agirlik"] }
    ],
    "relatedGuideIds": ["kamp-cadiri-alirken", "uyku-tulumu-alirken", "kafa-lambasi-alirken", "valiz-alirken"]
  },
  {
    "id": "trekking-batonlari-alirken",
    "slug": "trekking-batonlari-alirken",
    "categorySlug": "spor-outdoor",
   
    "title": "Trekking Batonları Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Trekking Batonları Alırken",
    "description": "Trekking batonları alırken nelere dikkat edilmeli? Malzeme ve kilo, kilitleme sistemi, grip ve kayış tasarımı, şok emiş ve sepette kapanma uzunluğu kriterlerine göre seçim rehberi.",
    "intro": [
      "Trekking batonu seçiminde malzeme kararı ön plandadır: alüminyum dayanıklı ve ekonomik, karbon hafif ama darbeye karşı hassastır.",
      "Kilit mekanizması (dış/iç kilit), tutuş konforu ve toprak sepetinin değişebilirliği uzun vadeli kullanım ölçütleridir."
    ],
    "keywords": ["trekking batonu", "trekking batonları alırken nelere dikkat edilmeli", "nordic walking", "yürüyüş batonu", "karbon baton", "teleskopik baton"],
    "aliases": ["yürüyüş batonu", "trekking poles", "nordic baton"],
    "estimatedReadTimeMinutes": 4,
       "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "malzeme-agirlik", "title": "Malzeme ve Ağırlık", "description": "Alüminyum 6061/7075 darbe tolere eder; karbon titreşimi düşürür ve hafiftir ama kaya darbesinde kırılabilir.", "importance": 'critical' },
      { "id": "kilit-sistemi", "title": "Kilitleme Sistemi", "description": "Dış kilit (flip lock) kolay ayarlanır, kar ve tozda güvenilirdir; iç kilit (twist lock) kompakt ama zor koşullarda kayabilir.", "importance": 'critical' },
      { "id": "grip-kayis", "title": "Grip ve Kayış", "description": "Doğal mantar/köpük tutuş terlemeyi azaltır; kayış uzunluğu avuç içinden geçmeli ve bileği sıkmamalıdır.", "importance": 'important' },
      { "id": "sok-tip", "title": "Uç Tipleri ve Sepet", "description": "Karbid uç taş zeminde tutuş sağlar; lastik patik ve asfalt uçları ile değişebilir sepetler (kar/bataklık) zemin esnekliği verir.", "importance": 'important' },
      { "id": "kapanma-uzunluk", "title": "Kapanma Uzunluğu", "description": "Valize ve sırt çantasına dış bağlantıya uyacak 60-70 cm kapanma uzunluğu seyahat pratiğinde belirleyicidir.", "importance": 'useful' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Malzeme türünü kullanım arazime göre seçtim.", "importance": 'critical' },
      { "id": "c2", "text": "Kilit mekanizmasını aç-kapa ederek test ettim.", "importance": 'critical' },
      { "id": "c3", "text": "Grip konforunu ve kayış ayarını denedim.", "importance": 'important' },
      { "id": "c4", "text": "Uç ve sepet değişebilirliğini kontrol ettim.", "importance": 'important' },
      { "id": "c5", "text": "Kapanma uzunluğunu taşıma planıma göre değerlendirdim.", "importance": 'useful' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Plastik Gövdeli Teleskopik BatON", "explanation": "Plastik kilit gövdeli ürünler yük altında kayar; baton aniden kapanıp dengenizi bozabilir." },
      { "id": "rf2", "title": "Karbon Batonun Kayaya Vurulması", "explanation": "Karbon gövde yüke dayanır ama yandan darbeye kırılgandır; taşlı arazide alüminyum daha güvenlidir." }
    ],
    "questions": [
      { "id": "q1", "question": "Kilit sistemi kaç kg yüke kadar testli ve yedek kili̇di bulunuyor mu?", "whyItMatters": "Kilit arızası batonu kullanılamaz kılar; yedek parça bulunabilirliği ömrü uzatır.", "target": 'seller' },
      { "id": "q2", "question": "Uç ve sepetler ayrı satılıyor mu, fiyatı nedir?", "whyItMatters": "Uçlar aşınır; bulunamayan uç ürünü erken bitirir.", "target": 'seller' },
      { "id": "q3", "question": "Batonu inişte kısaltıp çıkışta uzatıyor muyum?", "whyItMatters": "Doğru boyut ayarı (dirsek 90 derece) verim ve bilek sağlığı için şarttır.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Günübirlik Yürüyüş", "description": "Ekonomi ve dayanıklılık önceliklidir.", "recommendedCriteriaIds": ["malzeme-agirlik", "grip-kayis"] },
      { "id": "ileri", "title": "Uzun Mesafe / Dağ", "description": "Ağırlık, kilit güvenilirliği ve uç sistemi önceliklidir.", "recommendedCriteriaIds": ["kilit-sistemi", "sok-tip", "kapanma-uzunluk"] }
    ],
    "relatedGuideIds": ["trekking-ayakkabisi-alirken", "kamp-cadiri-alirken", "sirt-cantasi-alirken", "durbin-alirken"]
  },
  {
    "id": "kafa-lambasi-alirken",
    "slug": "kafa-lambasi-alirken",
    "categorySlug": "spor-outdoor",
    "title": "Kafa Lambası Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Kafa Lambası Alırken",
    "description": "Kafa lambası alırken nelere dikkat edilmeli? Lümen ve beam mesafesi, pil tipi, su geçirmezlik, ağırlık ve mod seçenekleri kriterlerine göre seçim rehberi.",
    "intro": [
      "Kafa lambası seçiminde lümen değeri tek başına yeterli değildir; ışık açısı (flood/spot) ve beam mesafesi birlikte değerlendirilmelidir.",
      "Pil mimarisi (AAA/li-ion) ve şarj tipi, uzun kamplarda ve acil kullanımda belirleyici ölçütlerdir."
    ],
    "keywords": ["kafa lambası", "kafa lambası alırken nelere dikkat edilmeli", "headlamp seçimi", "lümen kafa lambası", "kamp lambası", "şarjlı kafa lambası"],
    "aliases": ["headlamp", "alın lambası", "kamp feneri"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "lumen-beam", "title": "Lümen ve Beam Mesafesi", "description": "Kamp içi işler için 100-200 lümen flood; gece yürüyüşü için 300+ lümen spot ve 50 m+ beam mesafesi gerekir.", "importance": 'critical' },
      { "id": "pil-tipi", "title": "Pil Tipi ve Yedek Stratejisi", "description": "AAA piller her yerde bulunur; li-ion şarjlı ekonomiktir ama uzun seyahatte powerbank gerektirir.", "importance": 'critical' },
      { "id": "su-gecirmez", "title": "Su Geçirmezlik (IPX)", "description": "IPX4 yağmur ve ter direnci asgari barajdır; suya düşürme riski olan kullanımda IPX7 tercih edilir.", "importance": 'important' },
      { "id": "agirlik-denge", "title": "Ağırlık ve Denge", "description": "Ön teneke kutu ağırlığı ve arka pil dengesi; 150 g altı modeller uzun kullanımda rahattır.", "importance": 'important' },
      { "id": "mod-kilit", "title": "Mod Seçenekleri ve Kilit", "description": "Kırmızı ışık modu gece görüşü korur; kilitleme özelliği çantada yanlışlıkla açılmayı önler.", "importance": 'useful' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Kullanım amacıma göre lümen ve beam mesafesini karşılaştırdım.", "importance": 'critical' },
      { "id": "c2", "text": "Pil tipini ve yedek planımı belirledim.", "importance": 'critical' },
      { "id": "c3", "text": "IPX derecesini kontrol ettim.", "importance": 'important' },
      { "id": "c4", "text": "Kafamda deneyerek ağırlık dengesini test ettim.", "importance": 'important' },
      { "id": "c5", "text": "Kırmızı ışık ve kilit modlarının varlığını kontrol ettim.", "importance": 'useful' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Aşırı Yüksek Lümen İddiası Ucuz Modeller", "explanation": "Gerçek ölçümlenmemiş '1000 lümen' iddiaları yanıltıcıdır; beam mesafesi ve sürüş süresi verisiyle birlikte okunmalıdır." },
      { "id": "rf2", "title": "Sabit Yapışık Pil Odası", "explanation": "Pili değiştirilemeyen modeller ömür bitiminde çöp olur; pilsiz alanda yedek pil stratejisi kurmak zordur." }
    ],
    "questions": [
      { "id": "q1", "question": "Maksimum modda pil ömrü kaç saat ve hangi pil tipiyle?", "whyItMatters": "Yüksek lümen modu pilleri hızlı tüketir; gerçek kamp planı sürüş süresine göre yapılır.", "target": 'seller' },
      { "id": "q2", "question": "Yedek pil ve ampul/parsel bulunabiliyor mu?", "whyItMatters": "LED'ler nadiren arızalanır ama pil kapağı ve kayış yıpranır.", "target": 'seller' },
      { "id": "q3", "question": "Yedek pilimi soğuk havalarda içimde saklıyor muyum?", "whyItMatters": "Soğuk pil kapasitesini kaybeder; cepte taşıma ömrü uzatır.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Kamp / Ev Yedek Işığı", "description": "Ekonomi, kolay pil ve modlar önceliklidir.", "recommendedCriteriaIds": ["pil-tipi", "mod-kilit"] },
      { "id": "ileri", "title": "Gece Yürüyüşü / Koşu", "description": "Lümen, beam ve su geçirmezlik önceliklidir.", "recommendedCriteriaIds": ["lumen-beam", "su-gecirmez", "agirlik-denge"] }
    ],
    "relatedGuideIds": ["kamp-cadiri-alirken", "uyku-tulumu-alirken", "guvenlik-kamerasi-alirken", "kamp-ocagi-alirken"]
  },
  {
    "id": "olta-alirken",
    "slug": "olta-alirken",
    "categorySlug": "spor-outdoor",
    "title": "Olta Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Olta Alırken",
    "description": "Olta alırken nelere dikkat edilmeli? Kamış tipi ve atış mesafesi, makara sınıfı, misina türü, kullanım suyu (tatlı/tuzlu) ve aksiyon kriterlerine göre seçim rehberi.",
    "intro": [
      "Olta seçiminde ilk soru nerede ve neyi avlayacağınızdır: göl, akarsu, deniz kıyı mı? Her senaryo farklı kamış boyu ve aksiyon ister.",
      "Kamış-aksiyon-misina üçlüsü uyumlu seçilmediğinde atış mesafesi ve oltaya iletilen güç kaybolur."
    ],
    "keywords": ["olta", "olta alırken nelere dikkat edilmeli", "olta kamışı", "spinning kamış", "olta makarası", "balık avı ekipmanı"],
    "aliases": ["spinning", "olta takımı", "balık kamışı"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "kamis-tipi", "title": "Kamış Tipi ve Boy", "description": "Kıyı deniz için 2,7-3,6 m kamış; göl spinning için 1,8-2,4 m; atış ağırlık aralığı (casting weight) yem ağırlığına uymalıdır.", "importance": 'critical' },
      { "id": "aksiyon-guc", "title": "Aksiyon ve Güç (Power)", "description": "Aksiyon kamışın nerede büküldüğünü (fast/moderate), güç taşıyabileceği misina/yem ağırlığını belirtir.", "importance": 'critical' },
      { "id": "makara-sinif", "title": "Makara Sınıfı ve Yatak Sayısı", "description": "1000-4000 arası makara boyu kamışla dengelenir; paslanmaz yatak ve metal gövde ömür ölçütüdür.", "importance": 'critical' },
      { "id": "misina-turu", "title": "Misina Türü", "description": "Monofilament ekonomik ve affedici; fluorocarbon görünmez ve aşınmaya dayanıklı; örme (braid) ince ve uzak atışlıdır.", "importance": 'important' },
      { "id": "tuzlu-su", "title": "Tuzlu Su Kullanımı", "description": "Denizde kullanılacak takımda paslanmaz/kaplamalı makara ve tuzdan arındırma rutini şarttır.", "importance": 'important' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Av tipime göre kamış boyu ve atış ağırlığı aralığını belirledim.", "importance": 'critical' },
      { "id": "c2", "text": "Aksiyon ve güç değerlerini hedef balık türüne göre seçtim.", "importance": 'critical' },
      { "id": "c3", "text": "Makara boyunu ve yatak kalitesini kamışla dengeledim.", "importance": 'critical' },
      { "id": "c4", "text": "Misina türünü ve kg değerini av senaryoma göre seçtim.", "importance": 'important' },
      { "id": "c5", "text": "Tuzlu su kullanımında bakım rutinimi planladım.", "importance": 'important' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Kamış-Makara Seti Uyumsuz Boy", "explanation": "Uzun deniz kamışına küçük göl makarası takmak atış dengesini ve misina kapasitesini bozar." },
      { "id": "rf2", "title": "Plastik Gövdeli Çok Ucuz Makara", "explanation": "Yataksız plastik makaralar bir sezon dayanmaz; dişli ve kolu oyunlu yapıda hızlı arıza verir." }
    ],
    "questions": [
      { "id": "q1", "question": "Bu kamışın atış ağırlığı ve aksiyon değeri nedir?", "whyItMatters": "Yanlış atış aralığı kamışın hem atışını hem balık mücadelesini zayıflatır.", "target": 'seller' },
      { "id": "q2", "question": "Makaranın yatak sayısı ve gövde malzemesi nedir?", "whyItMatters": "Yatak sayısı ve metal gövde pürüzsüz sarım ve ömür sağlar.", "target": 'seller' },
      { "id": "q3", "question": "Her kullanım sonrası takımı tatlı suyla durulayıp kurutuyor muyum?", "whyItMatters": "Tuz kristalleri makara dişlilerini ve kılçüzümleri kısa sürede kilitleyebilir.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Göl / Başlangıç", "description": "Ekonomik dengeli takım ve kolay kullanım önceliklidir.", "recommendedCriteriaIds": ["kamis-tipi", "makara-sinif"] },
      { "id": "ileri", "title": "Deniz / Uzman", "description": "Dayanım, aksiyon ve misina seçimi önceliklidir.", "recommendedCriteriaIds": ["aksiyon-guc", "misina-turu", "tuzlu-su"] }
    ],
    "relatedGuideIds": ["durbin-alirken", "teleskop-alirken", "kafa-lambasi-alirken"]
  },
  {
    "id": "durbin-alirken",
    "slug": "durbin-alirken",
    "categorySlug": "spor-outdoor",
    "title": "Dürbün Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Dürbün Alırken",
    "description": "Dürbün alırken nelere dikkat edilmeli? Büyütme ve objektif çapı, prizma tipi ve optik kalite, çıkış göz bebeği, kaplama ve su geçirmezlik kriterlerine göre seçim rehberi.",
    "intro": [
      "Dürbün seçiminde 10x50 gibi değerler büyütme/objektif çapını gösterir; büyütme arttıkça elde titreme ve görüş alanı daralması artar.",
      "Prizma tipi (roof/porro), optik kaplama ve göz yorgunluğu (çıkış göz bebeği) gerçek kullanım konforunu belirler."
    ],
    "keywords": ["dürbün", "dürbün alırken nelere dikkat edilmeli", "10x50 dürbün", "kuş gözlem dürbünü", "roof prizma", "dürbün kaplama"],
    "aliases": ["binocular", "teleskopik dürbün", "gözlem dürbünü"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "buyutme-cap", "title": "Büyütme ve Objektif Çapı", "description": "8x42 genel gözlem için denge sunar; 10x uzak detay verir ama titreme hassasiyeti ve daha dar görüş alanı getirir.", "importance": 'critical' },
      { "id": "prizma-optik", "title": "Prizma Tipi ve Optik", "description": "Roof prizma kompakt; porro derinlik algısı verir. BAK4 prizma tam parlaklık, BK7 daha ekonomiktir.", "importance": 'critical' },
      { "id": "gorus-alani", "title": "Görüş Alanı ve Çıkış Göz Bebeği", "description": "1000 m'de 100 m+ görüş alanı hareketli nesne takibini kolaylaştırır; çıkış göz bebeği (objektif/büyütme) 4 mm+ rahat görüntü verir.", "importance": 'important' },
      { "id": "kaplama-suz", "title": "Kaplama ve Suya Dayanım", "description": "Tam kaplama (fully coated/multi-coated) netlik ve kontrast artırır; azot doldurulmuş gövde için nemlenmeyi önler.", "importance": 'important' },
      { "id": "govde-fokus", "title": "Gövde ve Odak", "importance": 'useful', "description": "Merkez odak ve dioptri ayarı iki göz farkını dengeler; kauçuk zırh darbe ve tutuş konforu sağlar." }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Büyütme ve objektif çapını kullanım amacıma göre seçtim.", "importance": 'critical' },
      { "id": "c2", "text": "Prizma tipini ve optik kaplama sınıfını kontrol ettim.", "importance": 'critical' },
      { "id": "c3", "text": "Görüş alanı değerini ve göz bebeği konforunu test ettim.", "importance": 'important' },
      { "id": "c4", "text": "Su geçirmezlik ve azot dolgusunu sordum.", "importance": 'important' },
      { "id": "c5", "text": "Odak tekerleği ve dioptri ayarını denedim.", "importance": 'useful' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "'Zoom' Dürbünler", "explanation": "Değişken büyütmeli (zoom) dürbünlerde optik hizalama zayıftır; sabit büyütmeli modeller her bütçede daha net görüntü verir." },
      { "id": "rf2", "title": "Kırmızı Kaplama 'Gece Görüş' İddiası", "explanation": "Kırmızı kaplama gece görüş değildir; pazarlama hilesidir ve görüntü kalitesini düşürür." }
    ],
    "questions": [
      { "id": "q1", "question": "Prizma BAK4 mü BK7 mi, kaplama tam mı (fully multi-coated)?", "whyItMatters": "Prizma ve kaplama, aynı büyütmede bile görüntü farkı yaratır.", "target": 'seller' },
      { "id": "q2", "question": "Gövde azot dolgulu mu, düşürme garantisi var mı?", "whyItMatters": "İç nemlenme küf ve görüntü kaybına yol açar.", "target": 'seller' },
      { "id": "q3", "question": "Uzun gözlemde göz yorgunluğu yaşıyor muyum?", "whyItMatters": "Çıkış göz bebeği küçük dürbünlerde uzun gözlem rahatsızlık verir.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Genel / Seyahat Gözlem", "description": "8x42 dengesi ve kompaktlık önceliklidir.", "recommendedCriteriaIds": ["buyutme-cap", "govde-fokus"] },
      { "id": "ileri", "title": "Kuş Gözlem / Deniz", "description": "Optik kalite ve görüş alanı önceliklidir.", "recommendedCriteriaIds": ["prizma-optik", "gorus-alani", "kaplama-suz"] }
    ],
    "relatedGuideIds": ["teleskop-alirken", "olta-alirken", "gunes-gozlugu-alirken"]
  },
  {
    "id": "teleskop-alirken",
    "slug": "teleskop-alirken",
    "categorySlug": "spor-outdoor",
    "title": "Amatör Teleskop Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Teleskop Alırken",
    "description": "Amatör teleskop alırken nelere dikkat edilmeli? Açıklık (aperture) önceliği, mont türü, odak uzaklığı ve büyütme hesabı, taşınabilirlik ve aksesuar kriterlerine göre seçim rehberi.",
    "intro": [
      "Teleskop seçiminde büyütme değil ayna/lens çapı (aperture) belirleyicidir; ışık toplama gücü görüntü kalitesini oluşturur.",
      "Mont (tripod mekanizması) türü kullanım kolaylığını, odak uzaklığı ise gezegen ve derin uzay gözlemi dengesini belirler."
    ],
    "keywords": ["teleskop", "teleskop alırken nelere dikkat edilmeli", "amatör teleskop", "dobson teleskop", "aperture çapı", "gezegen gözlemi"],
    "aliases": ["astronomi teleskopu", "dobson", "reflektör teleskop"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "aperture", "title": "Açıklık (Aperture) Çapı", "description": "70-130 mm başlangıç için yeterlidir; çap büyüdükçe soluk nesneler ve detay görünür. Büyütme değil çap önceliklidir.", "importance": 'critical' },
      { "id": "mont-turu", "title": "Mont Türü", "description": "Dobson montu ucuz ve sadedir; equatorial mont gökyüzü takibi yapar ama kurulum ister; azimut mont başlangıç için kolaydır.", "importance": 'critical' },
      { "id": "odak-buyutme", "title": "Odak Uzaklığı ve Büyütme", "description": "Büyütme = odak uzaklığı / göz lensi çapı; 50x-150x aralığı gezegen gözlemi için ideal başlangıçtır.", "importance": 'critical' },
      { "id": "optik-tip", "title": "Optik Tip (Refraktör/Reflektör)", "description": "Refraktör bakımı kolay ve keskin; reflektör çap başına daha ucuz ama hizalama (kolimasyon) ister.", "importance": 'important' },
      { "id": "tasinabilir-aksesuar", "title": "Taşınabilirlik ve Aksesuar", "description": "Kurulum ağırlığı, çanta ve göz lensi çeşitliliği (Barlow, ayı filtresi) kullanım pratiğini belirler.", "importance": 'useful' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Açıklık çapını bütçe içinde maksimuma çıkardım.", "importance": 'critical' },
      { "id": "c2", "text": "Mont türünü kullanım kolaylığıma göre seçtim.", "importance": 'critical' },
      { "id": "c3", "text": "Göz lensleriyle pratik büyütme aralığını hesapladım.", "importance": 'critical' },
      { "id": "c4", "text": "Refraktör/reflektör kararını bakım isteğime göre verdim.", "importance": 'important' },
      { "id": "c5", "text": "Taşıma ağırlığını ve dahil aksesuarları değerlendirdim.", "importance": 'useful' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "'575x Büyütme' Katalog Değerleri", "explanation": "Atmosferik sınır nedeniyle 300x üzeri büyütme pratikte kullanılamaz; yüksek büyütme iddiası optik kaliteyi gizler." },
      { "id": "rf2", "title": "Kutudan Çıkan Kısa Masasıltı Tripod", "explanation": "Titrek tripod görüntüyü kullanılmaz kılar; mont ve tripod kalitesi optik kadar önemlidir." }
    ],
    "questions": [
      { "id": "q1", "question": "Teleskobun açıklık çapı ve odak uzaklığı nedir?", "whyItMatters": "Bu iki değer gerçek gözlem kapasitesini belirler; büyütme göz lensiyle sonradan ayarlanır.", "target": 'seller' },
      { "id": "q2", "question": "Kolimasyon için yardımcı alet dahil mi?", "whyItMatters": "Reflektörlerde periyodik hizalama gerekir; araç yoksa görüntü kalitesi düşer.", "target": 'seller' },
      { "id": "q3", "question": "İlk gözlemi ay ve parlak gezegenlerle mi planlıyorum?", "whyItMatters": "Ay-Satürn-Jüpiter en motive edici başlangıç hedefleridir; derin uzay soluk görünebilir.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Çocuk / Başlangıç", "description": "Kolay mont ve ay-gezegen gözlemi önceliklidir.", "recommendedCriteriaIds": ["aperture", "mont-turu"] },
      { "id": "ileri", "title": "Hobi Derinleşme", "description": "Çap, mont takibi ve aksesuar önceliklidir.", "recommendedCriteriaIds": ["odak-buyutme", "optik-tip", "tasinabilir-aksesuar"] }
    ],
    "relatedGuideIds": ["durbin-alirken", "gunes-gozlugu-alirken", "olta-alirken"]
  },

  {
    "id": "ikinci-el-macbook-alirken",
    "slug": "ikinci-el-macbook-alirken",
    "categorySlug": "teknoloji",
    "title": "İkinci El MacBook Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "İkinci El MacBook Alırken",
    "description": "İkinci el MacBook alırken nelere dikkat edilmeli? Pil döngüsü, AppleCare durumu, M1/M2/M3 çip jenerasyonu, ekran ve klavye kontrolü, iCloud kilidi kriterlerine göre seçim rehberi.",
    "intro": [
      "İkinci el MacBook alımında en kritik üç nokta pil döngü sayısı, iCloud/Activation Lock durumu ve çip jenerasyonudur. Bu üçü kontrol edilmeden yapılan alım risklidir.",
      "macOS sürüm desteği ve AppleCare kapsamı, cihazın kaç yıl daha güvenle kullanılabileceğini belirler."
    ],
    "keywords": ["ikinci el macbook", "ikinci el macbook alırken nelere dikkat edilmeli", "macbook pil döngüsü", "activation lock", "macbook air m1 m2", "kullanılmış macbook"],
    "aliases": ["macbook", "kullanılmış macbook", "el değmiş macbook"],
    "estimatedReadTimeMinutes": 5,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "pil-dongusu", "title": "Pil Döngü Sayısı", "description": "Sistem Raporu > Güç'ten okunur; 300 altı iyi, 500-800 orta, 1000 üzeri pil değişimi planlanmalıdır.", "importance": 'critical' },
      { "id": "icloud-kilidi", "title": "iCloud / Activation Lock", "description": "Cihaz önceki sahibin hesabından çıkartılmamışsa kilitli kalır; satıcı önünüzde Apple ID'den çıkış yapmalıdır.", "importance": 'critical' },
      { "id": "cip-jenerasyon", "title": "Çip Jenerasyonu ve macOS Desteği", "description": "Intel modeller macOS desteğini hızla kaybediyor; M1 ve üzeri Apple Silicon uzun ömürlüdür. Seri numarasından üretim yılı doğrulanır.", "importance": 'critical' },
      { "id": "ekran-klavye", "title": "Ekran, Klavye ve Port Kontrolü", "description": "Retina ekranda leke/baskı izi, butterfly klavye takılması, portların (USB-C/Thunderbolt) tamamının çalıştığı test edilmelidir.", "importance": 'important' },
      { "id": "applecare-kayit", "title": "AppleCare ve Çalıntı Kaydı", "description": "Seri numarasıyla Apple coverage sorgusu yapılır; çalıntı kaydı ve garanti durumu buradan görülür.", "importance": 'important' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Pil döngü sayısını Sistem Raporu'ndan kendim okudum.", "importance": 'critical' },
      { "id": "c2", "text": "Satıcının hesaptan çıkışını canlı olarak izledim, cihazı kendi hesabımla aktive ettim.", "importance": 'critical' },
      { "id": "c3", "text": "Seri numarasından üretim yılını ve macOS desteğini sorguladım.", "importance": 'critical' },
      { "id": "c4", "text": "Ekran (tam renk testi), klavye tuşlarının tamamını ve portları test ettim.", "importance": 'important' },
      { "id": "c5", "text": "Apple coverage sorgusunda garanti/çalıntı kaydı kontrolü yaptım.", "importance": 'important' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Hesap Çıkışı Yapılmayan Cihaz", "explanation": "Activation Lock aktif cihaz satın alınırsa önceki sahip uzaktan kilitleyebilir; para iadesi de çok zordur." },
      { "id": "rf2", "title": "Seri Numarası Okunmuyor / Kazınmış", "explanation": "Seri numarası silinmiş cihazlar genellikle çalıntı veya parça birleşimi (frankenstein) ürünlerdir." }
    ],
    "questions": [
      { "id": "q1", "question": "Cihazın pil döngüsü kaç ve ekran değişimi yaşadı mı?", "whyItMatters": "Pil ve ekran, MacBook'ta en pahalı iki değişim kalemidir; ikisi de fiyatı doğrudan etkiler.", "target": 'seller' },
      { "id": "q2", "question": "Fatura veya sahiplik belgesi var mı?", "whyItMatters": "Belgesiz cihaz çalıntı ihtimalini ve el değiştirme riskini artırır.", "target": 'seller' },
      { "id": "q3", "question": "Ödeme öncesi cihazı sıfırlayıp kendi hesabımla kurmayı talep ettim mi?", "whyItMatters": "Temiz kurulum, gizli MDM profili ve kurumsal kilidi ortaya çıkarır.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Öğrenci / Günlük Kullanım", "description": "M1 Air gibi dengeli modeller yeterlidir.", "recommendedCriteriaIds": ["cip-jenerasyon", "pil-dongusu"] },
      { "id": "ileri", "title": "Profesyonel / Yoğun Kullanım", "description": "Pro serisi, RAM/SSD kapasitesi ve servis geçmişi önceliklidir.", "recommendedCriteriaIds": ["ekran-klavye", "applecare-kayit"] }
    ],
    "relatedGuideIds": ["ikinci-el-laptop-alirken", "laptop-alirken", "ikinci-el-monitor-alirken", "harici-ssd-alirken"]
  },
  {
    "id": "ikinci-el-laptop-alirken",
    "slug": "ikinci-el-laptop-alirken",
    "categorySlug": "teknoloji",
    "title": "İkinci El Laptop Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "İkinci El Laptop Alırken",
    "description": "İkinci el laptop alırken nelere dikkat edilmeli? Pil sağlığı, ekran ve menteşe kontrolü, BIOS/Setup kilidi, parça değişim geçmişi ve performans testi kriterlerine göre seçim rehberi.",
    "intro": [
      "İkinci el laptop alımında dış görünüm yanıltıcıdır; asıl kontrol pil sağlığı, ekran bütünlüğü ve BIOS kilidi üzerinden yapılır.",
      "30 dakikalık stress testi ve parça değişim geçmişi sorgusu, gizli arızaları alım öncesinde ortaya çıkarır."
    ],
    "keywords": ["ikinci el laptop", "ikinci el laptop alırken nelere dikkat edilmeli", "kullanılmış dizüstü", "laptop pil sağlığı", "bios şifresi", "ikinci el bilgisayar"],
    "aliases": ["kullanılmış laptop", "ikinci el dizüstü", "el değmiş bilgisayar"],
    "estimatedReadTimeMinutes": 5,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "pil-saglik", "title": "Pil Sağlığı ve Değişim Durumu", "description": "Windows'ta powercfg raporu, macOS'ta döngü sayısı; %80 altı tasarım kapasitesi pil değişim gerekliliğine işaret eder.", "importance": 'critical' },
      { "id": "bios-kilit", "title": "BIOS/Setup ve Kurumsal Kilit", "description": "BIOS şifresi ve MDM/kurumsal yönetim profili cihazı kullanılamaz yapar; kurulumda temiz Windows/Linux yüklenmelidir.", "importance": 'critical' },
      { "id": "ekran-mentese", "title": "Ekran ve Menteşe Kontrolü", "description": "Beyaz ekran testinde leke/baskı, menteşede gevşeklik; kapak tek elle kapanıyor/çözülüyorsa menteşe ömrü bitmiştir.", "importance": 'critical' },
      { "id": "parca-gecmis", "title": "Parça Değişim Geçmişi", "description": "Anakart değişimi su hasarı göstergesidir; SSD/RAM yükseltmesi değer katar ama orijinallik doğrulanmalıdır.", "importance": 'important' },
      { "id": "test-performans", "title": "Canlı Performans Testi", "description": "CPU sıcaklık ve fan sesi altında 15-30 dk stress test; disk SMART raporu ve USB portlarının tamamı kontrol edilir.", "importance": 'important' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Pil sağlığı raporunu kendim aldım ve yorumladım.", "importance": 'critical' },
      { "id": "c2", "text": "BIOS'a girip şifre/MDM kilidi olmadığını doğruladım.", "importance": 'critical' },
      { "id": "c3", "text": "Tam ekran renk testiyle ekranı ve menteşeyi kontrol ettim.", "importance": 'critical' },
      { "id": "c4", "text": "Parça değişim geçmişini ve fatura kaydını sorguladım.", "importance": 'important' },
      { "id": "c5", "text": "Stress testinde sıcaklık, fan sesi ve disk SMART değerlerini gördüm.", "importance": 'important' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Fiyatına Göre Aşırı Ucuz 'Az Kullanılmış'", "explanation": "Piyasanın çok altındaki laptop ya çalıntı, ya su hasarlı ya da parça birleşimidir; test istemeyen satıcıdan uzak durun." },
      { "id": "rf2", "title": "Windows Kurulu Ama Şifresiz Test Edilemiyor", "explanation": "Cihaz açılmadan test yapılamaz; 'evde bakarsın' diyen satıcı gizli arızayı biliyor olabilir." }
    ],
    "questions": [
      { "id": "q1", "question": "Cihazda hangi parçalar değişti, su hasarı veya düşme yaşadı mı?", "whyItMatters": "Anakart değişimi ve su hasarı, ilerleyen dönemde ani arıza riskini artırır.", "target": 'seller' },
      { "id": "q2", "question": "Fatura ve kutu/şarj aleti orijinal mi?", "whyItMatters": "Orijinal şarj aleti olmaması güç devresine zarar riski taşır; fatura sahiplik kanıtıdır.", "target": 'seller' },
      { "id": "q3", "question": "Alım öncesi diski sıfırlayıp temiz sistem kurmayı talep ettim mi?", "whyItMatters": "Temiz kurulum hem güvenlik hem de gizli yazılım arızasını ortaya çıkarır.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Ofis / Öğrenci Kullanımı", "description": "Pil ve ekran kontrolü önceliklidir.", "recommendedCriteriaIds": ["pil-saglik", "ekran-mentese"] },
      { "id": "ileri", "title": "Oyun / Performans Kullanımı", "description": "Stress testi ve parça geçmişi önceliklidir.", "recommendedCriteriaIds": ["test-performans", "parca-gecmis", "bios-kilit"] }
    ],
    "relatedGuideIds": ["ikinci-el-macbook-alirken", "laptop-alirken", "ikinci-el-monitor-alirken", "usb-c-hub-alirken"]
  },
  {
    "id": "ikinci-el-android-telefon-alirken",
    "slug": "ikinci-el-android-telefon-alirken",
    "categorySlug": "teknoloji",
    "title": "İkinci El Android Telefon Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "İkinci El Android Alırken",
    "description": "İkinci el Android telefon alırken nelere dikkat edilmeli? Pil şişmesi, ekran orijinalliği, IMEI kaydı ve Google hesap kilidi, güncelleme desteği kriterlerine göre seçim rehberi.",
    "intro": [
      "İkinci el Android alımında en sık gözden kaçan risk Google hesap kilidi (FRP) ve IMEI kaydı sorunlarıdır; bunlar cihazı kullanılamaz hale getirir.",
      "Ekran orijinalliği ve pil şişmesi kontrolü, ilk günde değil aylar sonra ortaya çıkan maliyetleri önler."
    ],
    "keywords": ["ikinci el android", "ikinci el telefon alırken nelere dikkat edilmeli", "kullanılmış telefon", "imei kontrolü", "frp kilidi", "telefon pil şişmesi"],
    "aliases": ["ikinci el telefon", "kullanılmış android", "el değmiş telefon"],
    "estimatedReadTimeMinutes": 5,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "imei-kayit", "title": "IMEI ve Kayıt Durumu", "description": "*#06# ile IMEI öğrenilir; kayıt dışı (yurtdışinden getirilmiş) cihaz Türkiye'de kapanır. IMEI kutu ve sistemde eşleşmelidir.", "importance": 'critical' },
      { "id": "frp-kilit", "title": "Google Hesap Kilidi (FRP)", "description": "Satıcı önünüzde fabrika ayarına döndürüp kendi hesabından çıkmalı; FRP'li cihaz tuğla gibidir.", "importance": 'critical' },
      { "id": "pil-sisme", "title": "Pil Sağlığı ve Şişme", "description": "Arka kapak/ekran kaldırılıyorsa, cihaz masada düz durmuyorsa pil şişmiştir; şiş pil güvenlik riskidir.", "importance": 'critical' },
      { "id": "ekran-orijinal", "title": "Ekran Orijinalliği", "description": "Servis menüsünden veya renk/parlaklık testiyle orijinallik kontrol edilir; kopma (touch) sorunları kopya ekranda sık görülür.", "importance": 'important' },
      { "id": "guncelleme-destek", "title": "Güncelleme Desteği", "description": "Markanın güvenlik güncellemesi verdiği süre (2-5+ yıl) cihazın kalan ömrünü belirler; model yaşına bakılır.", "importance": 'important' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "IMEI'yi *#06# ile okudum, kutuyla eşleştirdim ve kayıt durumunu sorguladım.", "importance": 'critical' },
      { "id": "c2", "text": "Satıcı önümde fabrika ayarına döndürdü; kendi hesabımla kurulumu tamamladım.", "importance": 'critical' },
      { "id": "c3", "text": "Cihazın düz yatmasını ve ekran-kasa birleşimini (şişme kontrolü) kontrol ettim.", "importance": 'critical' },
      { "id": "c4", "text": "Ekran renk/parlaklık testiyle orijinalliğini değerlendirdim.", "importance": 'important' },
      { "id": "c5", "text": "Modelin güncelleme desteğinin ne kadar sürdüğünü araştırdım.", "importance": 'important' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Kopya Ekran 'Orijinal' Diye Satılıyor", "explanation": "Kopya ekran parlaklık ve dokunmatik hassasiyeti düşük verir; birkaç ay sonra touch kopması başlar." },
      { "id": "rf2", "title": "Kayıt Dışı / Sıfır Paket Yurtdışı Cihaz", "explanation": "Kayıt dışı cihaz 120 gün sonunda şebekeye kapanır; IMEI kaydı yasal değildir." }
    ],
    "questions": [
      { "id": "q1", "question": "Cihazda ekran veya batarya değişimi oldu mu, servis kaydı var mı?", "whyItMatters": "Değişim geçmişi fiyatı etkiler; kalitesiz parça ileride büyük sorun çıkarır.", "target": 'seller' },
      { "id": "q2", "question": "Fatura ve kutu/aksesuarları eksiksiz mi?", "whyItMatters": "Fatura sahiplik kanıtı; kutu IMAI eşleşmesi için ikinci doğrulamadır.", "target": 'seller' },
      { "id": "q3", "question": "Alım yerini ve satıcı kimliğini kayıt altına aldım mı?", "whyItMatters": "Çalıntı çıkarsa belge ve iletişim, şikayet sürecinin temelidir.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Yedek / Günlük Kullanım", "description": "IMEI ve FRP kontrolü önceliklidir.", "recommendedCriteriaIds": ["imei-kayit", "frp-kilit"] },
      { "id": "ileri", "title": "Amiral Gemisi Alımı", "description": "Ekran orijinalliği ve güncelleme desteği önceliklidir.", "recommendedCriteriaIds": ["ekran-orijinal", "pil-sisme", "guncelleme-destek"] }
    ],
    "relatedGuideIds": ["ikinci-el-iphone-alirken", "powerbank-alirken", "akilli-saat-alirken"]
  },
  {
    "id": "ikinci-el-fotograf-makinesi-alirken",
    "slug": "ikinci-el-fotograf-makinesi-alirken",
    "categorySlug": "hobi",
    "title": "İkinci El Fotoğraf Makinesi Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "İkinci El Foto Makinesi",
    "description": "İkinci el fotoğraf makinesi alırken nelere dikkat edilmeli? Deklanşör sayısı, sensör tozu, lens yuvasu ve LCD kontrolü, aksesuar eksiksizliği kriterlerine göre seçim rehberi.",
    "intro": [
      "İkinci el fotoğraf makinesinde kilometre saati deklanşör sayısıdır; profesyonel gövdeler 150-400 bin kadraj ömürlüdür.",
      "Sensör tozu, lens yuvasu pimi ve stabilizasyon kontrolü, fotoğrafta sonradan fark edilen kusurları önceden gösterir."
    ],
    "keywords": ["ikinci el fotoğraf makinesi", "ikinci el kamera alırken nelere dikkat edilmeli", "deklanşör sayısı", "dslr ikinci el", "sensör tozu", "mirrorless ikinci el"],
    "aliases": ["ikinci el kamera", "kullanılmış dslr", "el değmiş fotoğraf makinesi"],
    "estimatedReadTimeMinutes": 5,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "deklansor", "title": "Deklanşör Sayısı", "description": "EXIF verisinden veya servis menüsünden okunur; amatör gövdede 50 bin, profesyonelde 200 bin üstü yüksek sayılır.", "importance": 'critical' },
      { "id": "sensor-toz", "title": "Sensör Tozu ve Leke", "description": "F/16-22'de düz beyaz/düz gökyüzü çekimi; koyu leke ve yağ izleri sensör temizliği/değişim ihtiyacını gösterir.", "importance": 'critical' },
      { "id": "lens-yuvasi", "title": "Lens Yuvasu ve Pimler", "description": "Yuva oyunu, kontak pimlerinde oksidasyon ve autofocus titremesi; lens tak-çıkar testiyle kontrol edilir.", "importance": 'critical' },
      { "id": "lcd-vizor", "title": "LCD, Vizör ve Düğmeler", "description": "Ölü piksel, dokunmatik hassasiyeti, vizör içinde leke; tüm düğme ve kadranlar tek tek denenmelidir.", "importance": 'important' },
      { "id": "aksesuar-kutu", "title": "Aksesuar ve Kutu Eksiksizliği", "description": "Şarj aleti, orijinal batarya, strap, kılavuz ve kutu; eksik her parça pazarlık konusudur.", "importance": 'useful' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Deklanşör sayısını EXIF/servis menüsünden doğruladım.", "importance": 'critical' },
      { "id": "c2", "text": "Kapalı diyaframda düz yüzeyle test çekimi yapıp sensörü kontrol ettim.", "importance": 'critical' },
      { "id": "c3", "text": "Lens takıp çıkararak yuva oyununu ve AF performansını test ettim.", "importance": 'critical' },
      { "id": "c4", "text": "LCD ölü piksel ve tüm düğmeleri tek tek denedim.", "importance": 'important' },
      { "id": "c5", "text": "Aksesuar ve kutu eksiksizliğini listeledim, fiyatı buna göre pazarladım.", "importance": 'useful' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Deklanşör Sayısını 'Bilmiyorum' Cevabı", "explanation": "Sayı okunamıyorsa yoğun profesyonel kullanım gizleniyor olabilir; EXIF'ten ilk-son çekim tarihleri çapraz kontrol edilir." },
      { "id": "rf2", "title": "Kum/Plaj Kullanım İzi", "explanation": "Lens yakasında kum taneciği ve dystörde hışırtı; kum hasarı iç mekanizmaya yayılmış olabilir." }
    ],
    "questions": [
      { "id": "q1", "question": "Cihaz profesyonel (düğün/etkinlik) kullanımda mı kaldı, kaç yıllık?", "whyItMatters": "Yoğun kullanım deklanşör ve iç mekanizma aşınmasını hızlandırır.", "target": 'seller' },
      { "id": "q2", "question": "Servis/temizlik geçmişi var mı, faturası mevcut mu?", "whyItMatters": "Periyodik bakım görmüş gövde daha öngörülebilirdir.", "target": 'seller' },
      { "id": "q3", "question": "Test çekimlerini kendi hafıza kartımla yapıp bilgisayarda inceledim mi?", "whyItMatters": "LCD'de belli olmayan sensör ve AF kusurları %100 büyütmede görülür.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Hobi / Başlangıç", "description": "Deklanşör ve sensör kontrolü önceliklidir.", "recommendedCriteriaIds": ["deklansor", "sensor-toz"] },
      { "id": "ileri", "title": "Yarı Profesyonel Kullanım", "description": "Lens yuvası ve aksesuar eksiksizliği önceliklidir.", "recommendedCriteriaIds": ["lens-yuvasi", "lcd-vizor", "aksesuar-kutu"] }
    ],
    "relatedGuideIds": ["ikinci-el-lens-alirken", "kamera-alirken", "kamera-lensi-alirken", "tripod-alirken"]
  },
  {
    "id": "ikinci-el-lens-alirken",
    "slug": "ikinci-el-lens-alirken",
    "categorySlug": "hobi",
    "title": "İkinci El Lens Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "İkinci El Lens Alırken",
    "description": "İkinci el kamera lensi alırken nelere dikkat edilmeli? Küf ve toz, odak hassasiyeti, diyafram yaprakları, sarsıntı önleyici (IS/VR) ve yuva durumu kriterlerine göre seçim rehberi.",
    "intro": [
      "İkinci el lens alımında en pahalı risk lens içi küftür; arka elemanda beyaz ağ görüntüsü ölüm kararını verdirir.",
      "Odak kayması (front/back focus) ve diyafram yaprak yağlanması, ancak canlı testle ortaya çıkan gizli kusurlardır."
    ],
    "keywords": ["ikinci el lens", "ikinci el kamera lensi alırken nelere dikkat edilmeli", "lens küf kontrolü", "front focus", "diyafram yaprakları", "kullanılmış lens"],
    "aliases": ["ikinci el objektif", "kullanılmış lens", "el değmiş lens"],
    "estimatedReadTimeMinutes": 5,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "kuf-toz", "title": "İç Küf ve Toz Kontrolü", "description": "Arka ve ön elemanlar ışığa tutularak incelenir; ön elemanda birkaç toz normaldir, iç elemanda küf ağı kabul edilemez.", "importance": 'critical' },
      { "id": "odak-hassasiyet", "title": "Odak Hassasiyeti (Front/Back Focus)", "description": "Test çizelgesiyle veya kontrastlı kenarda AF doğruluğu kontrol edilir; ayar (micro-adjust) gerektiren lens pazarlıktadır.", "importance": 'critical' },
      { "id": "diyafram-yaprak", "title": "Diyafram Yaprakları", "description": "Küçük diyaframda çekim yaparkan anlık kapanma testi; yağlanmış yapraklar yavaş kapanır ve 'error' verir.", "importance": 'critical' },
      { "id": "stabilizasyon", "title": "IS/VR Stabilizasyon", "description": "Yarım deklanşörde stabilizasyon sesi ve görüntü sabitleme etkisi; arızalı IS tıkırtı sesi yapar.", "importance": 'important' },
      { "id": "yuva-mekanik", "title": "Yuva, Zoom ve Filtre Yuvası", "description": "Bayonet aşınması, zoom halkasında kum hissi, filtred dişinde çapak; kapak ve güneş siperliği eksiksizliği kontrol edilir.", "importance": 'important' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Her iki elemanı güçlü ışıkta tutup küf/toz taraması yaptım.", "importance": 'critical' },
      { "id": "c2", "text": "AF testini canlı olarak yaptım; front/back focus kontrol ettim.", "importance": 'critical' },
      { "id": "c3", "text": "F/16-22'de diyafram yapraklarının düzgün kapandığını test ettim.", "importance": 'critical' },
      { "id": "c4", "text": "Stabilizasyonu açıp kapatıp ses ve etkisini kontrol ettim.", "importance": 'important' },
      { "id": "c5", "text": "Bayonet oyunu, zoom halkası ve filtred dişini inceledim.", "importance": 'important' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "İç Elemanda Küf Ağı", "explanation": "Küf optik kaplamayı kemirir; temizliği çoğu zaman lensin değerini aşar ve yayılma eğilimindedir." },
      { "id": "rf2", "title": "Düşme İzi: Filtre Dişi Deformasyonu", "explanation": "Ezilmiş filtred dişi düşmeye işaret eder; iç mekanizma hizası bozulmuş olabilir." }
    ],
    "questions": [
      { "id": "q1", "question": "Lens servis/temizlik geçirdi mi, hangi koşullarda saklandı?", "whyItMatters": "Nemli ortamda saklanan lenslerde küf riski yüksek; kuru dolapta tutulan lensler sağlıklı kalır.", "target": 'seller' },
      { "id": "q2", "question": "Fatura/kutu ve ön kapak-arka kapak-siperlik komple mi?", "whyItMatters": "Eksik aksesuar ve belge, hem pazarlık hem ileride elden çıkarma değerini etkiler.", "target": 'seller' },
      { "id": "q3", "question": "Test çekimlerini açık diyafram + yüksek ISO toleransıyla inceledim mi?", "whyItMatters": "Yumuşaklık ve odak kayması ancak tam boyut dosyada anlaşılır.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Kit Lens / Başlangıç", "description": "Küf ve odak kontrolü önceliklidir.", "recommendedCriteriaIds": ["kuf-toz", "odak-hassasiyet"] },
      { "id": "ileri", "title": "Sabit Açıklı / Profesyonel Lens", "description": "Diyafram yaprakları ve mekanik detaylar önceliklidir.", "recommendedCriteriaIds": ["diyafram-yaprak", "stabilizasyon", "yuva-mekanik"] }
    ],
    "relatedGuideIds": ["ikinci-el-fotograf-makinesi-alirken", "kamera-lensi-alirken", "kamera-alirken"]
  },
  {
    "id": "ikinci-el-oyun-konsolu-alirken",
    "slug": "ikinci-el-oyun-konsolu-alirken",
    "categorySlug": "teknoloji",
    "title": "İkinci El Oyun Konsolu Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "İkinci El Konsol",
    "description": "İkinci el oyun konsolu alırken nelere dikkat edilmeli? Fan ve overheat kontrolü, disk sürücü, kontrolcü analizi, hesap/oyun lisansları ve garanti durumu kriterlerine göre seçim rehberi.",
    "intro": [
      "İkinci el konsol alımında en kritik konu ısınma geçmişi; fan sesi ve termal test cihazın ömrünü ele verir.",
      "Diskli modellerde sürücü mekanizması, dijital modellerde hesap ve lisans durumu alım kararını belirler."
    ],
    "keywords": ["ikinci el oyun konsolu", "ikinci el ps5 alırken nelere dikkat edilmeli", "ikinci el xbox", "konsol alırken", "kullanılmış playstation", "konsol fan sesi"],
    "aliases": ["ikinci el ps5", "kullanılmış xbox", "el değmiş konsol"],
    "estimatedReadTimeMinutes": 5,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "termal-fan", "title": "Termal Durum ve Fan", "description": "30 dakika oyun sonrası fan sesi ve kasa sıcaklığı; aşırı ses ve kapanma (overheat shutdown) geçmişi sorgulanır.", "importance": 'critical' },
      { "id": "disk-surucu", "title": "Disk Sürücü ve Portlar", "description": "Disk okuma/yazma testi, HDMI ve USB portlarının tamamı; HDMI pini hasarı onarımı pahalıdır.", "importance": 'critical' },
      { "id": "kontrolcu", "title": "Kontrolcü Analizi", "description": "Joy ve analog stick drift testi, tetik ve mikrofon; kontrolcü başlı başına ciddi maliyettir.", "importance": 'critical' },
      { "id": "hesap-lisans", "title": "Hesap ve Lisans Durumu", "description": "Dijital oyunlar hesaba bağlıdır; 'üzerinde 20 oyun var' ifadesi hesap satışı anlamına gelir ve risklidir.", "importance": 'important' },
      { "id": "garanti-seri", "title": "Garanti ve Seri Kaydı", "description": "Seri numarasıyla servis durumu sorgulanır; açılmış (kırık warranty seal) cihazlarda donanım müdahalesi araştırılır.", "importance": 'important' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Cihazı 30 dk çalıştırıp fan sesi ve ısınmayı test ettim.", "importance": 'critical' },
      { "id": "c2", "text": "Disk takıp okuttum; HDMI görüntü ve USB portlarını denedim.", "importance": 'critical' },
      { "id": "c3", "text": "Kontrolcünün analog/tetik/mikrofon testini oyunda yaptım.", "importance": 'critical' },
      { "id": "c4", "text": "Hesap ve lisans konusunu netleştirdim; fabrika ayarına döndürülmesini istedim.", "importance": 'important' },
      { "id": "c5", "text": "Seri numarasıyla garanti durumunu sorguladım.", "importance": 'important' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Aşılmış (Modifiye) Yazılım", "explanation": "Yasadışı yazılım aşımı online ban riski taşır; cihaz yazılım güncellemesiyle kilitlenebilir." },
      { "id": "rf2", "title": "Hesapyla Birlikte 'Oyunlu' Satış", "explanation": "Hesap satışı kullanıcı sözleşmesine aykırıdır; hesap kapanırsa oyunlar da gider." }
    ],
    "questions": [
      { "id": "q1", "question": "Cihaz hiç kapanma/ısınma sorunu yaşadı mı, servis gördü mü?", "whyItMatters": "Aşırı ısınma geçmişi termal macur kuruluğuna ve GPU ömrünün kısaldığına işaret eder.", "target": 'seller' },
      { "id": "q2", "question": "Kontrolcü ve tüm kablolar orijinal mi, kutu-fatura mevcut mu?", "whyItMatters": "Orijinal aksesuar ve belge, hem güven hem elden çıkarma değeridir.", "target": 'seller' },
      { "id": "q3", "question": "Ödeme öncesi fabrika ayarları ve güncellemeyi canlı test ettim mi?", "whyItMatters": "Güncelleme sonrası açılan cihaz, ban veya sistem arızası gösterebilir.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Aile / Rekreasyon Kullanımı", "description": "Termal ve kontrolcü testi önceliklidir.", "recommendedCriteriaIds": ["termal-fan", "kontrolcu"] },
      { "id": "ileri", "title": "Online / Rekabetçi Kullanım", "description": "Garanti, hesap durumu ve disk sürücü önceliklidir.", "recommendedCriteriaIds": ["hesap-lisans", "garanti-seri", "disk-surucu"] }
    ],
    "relatedGuideIds": ["oyuncu-monitoru-alirken", "televizyon-alirken", "ikinci-el-android-telefon-alirken"]
  },
  {
    "id": "ikinci-el-gitar-alirken",
    "slug": "ikinci-el-gitar-alirken",
    "categorySlug": "hobi",
    "title": "İkinci El Gitar Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "İkinci El Gitar Alırken",
    "description": "İkinci el gitar alırken nelere dikkat edilmeli? Klavye ve tel yüksekliği (aksiyon), sap eğriliği, gövde çatlakları, elektroniği ve fret aşınması kriterlerine göre seçim rehberi.",
    "intro": [
      "İkinci el gitarda görünüm değil çalınabilirlik esastır; sap eğriliği (relief) ve aksiyon yüksekliği tamir gerektirip gerektirmediğini belirler.",
      "Gövde çatlağı ve elektroni-susturucu arızası, fiyat pazarlığında asıl belirleyici kalemlerdir."
    ],
    "keywords": ["ikinci el gitar", "ikinci el gitar alırken nelere dikkat edilmeli", "gitar sap eğriliği", "aksiyon yüksekliği", "kullanılmış gitar", "elektro gitar ikinci el"],
    "aliases": ["kullanılmış gitar", "el değmiş gitar", "ikinci el elektro gitar"],
    "estimatedReadTimeMinutes": 5,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "sap-egri", "title": "Sap Eğriliği (Relief)", "description": "Sap boyunca bakıldığında düz hat; truss rod ile düzeltilemeyen S eğriliği onarım gerektirir.", "importance": 'critical' },
      { "id": "aksiyon-fret", "title": "Aksiyon Yüksekliği ve Fret Aşınması", "description": "12. perde civarında 2-3 mm üstü aksiyon zor çaldırır; aşınmış (çukur) fretler fret taşlama (redress) ister.", "importance": 'critical' },
      { "id": "govde-catlak", "title": "Gövde Çatlağı ve Yapı Bütünlüğü", "description": "Ek yerlerinde ve sap-yuvasında çatlak; kozmetik çatlak sorun değil ama köprü ve sap ayrılması ciddi onarımdır.", "importance": 'critical' },
      { "id": "elektronik-susturucu", "title": "Elektronik ve Susturucu", "description": "Elektrolarda potans ve selektör çıtırtısı, jack temassızlığı; akustiklerde piezo ve preamp test edilir.", "importance": 'important' },
      { "id": "kulak-akort", "title": "Kulaklar (Machine Head) ve Aksesuar", "description": "Akordu tutmayan kulaklar değişir; kılıf, strap ve orijinal parça eksiksizliği değere eklenir.", "importance": 'useful' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Sapı göz hizasında kontrol edip eğriliği değerlendirdim.", "importance": 'critical' },
      { "id": "c2", "text": "Aksiyon yüksekliğini 12. perdede ölçtüm; fret aşınmasına baktım.", "importance": 'critical' },
      { "id": "c3", "text": "Gövde ve sap yuvası birleşimlerini çatlak için inceledim.", "importance": 'critical' },
      { "id": "c4", "text": "Elektronikleri amfiye takıp tüm pozisyonlarda test ettim.", "importance": 'important' },
      { "id": "c5", "text": "Kulakların akordu tutduğunu ve aksesuarları kontrol ettim.", "importance": 'useful' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Kırılıp Yapıştırılmış Sap", "explanation": "Sap kırığı onarımı profesyonel işçilik gerektirir; amateurs onarım akort tutmamasına ve ileride yeniden kırılmaya yol açar." },
      { "id": "rf2", "title": "Nem Şişmesi ve Yerinden Kalkan Köprü", "explanation": "Köprü ayrılması (bridge lift) yapıştırma onarımı ister; nem hasarı genelde tek başına gelmez." }
    ],
    "questions": [
      { "id": "q1", "question": "Gitar bakım/repair geçirdi mi, truss rod sorunsuz dönüyor mu?", "whyItMatters": "Sıkışık truss rod sap düzeltmesini imkansız kılar; onarım maliyeti yüksektir.", "target": 'seller' },
      { "id": "q2", "question": "Nem/kılıf koşulları nasıldı, kılıf dahil mi?", "whyItMatters": "Kılıfsız saklanan gitarlarda nem hasarı ve çarpılma riski artar.", "target": 'seller' },
      { "id": "q3", "question": "Alım öncesi kendi elimle akort edip çaldım mi?", "whyItMatters": "Çalmadan alınan gitarda aksiyon ve ses karakteri sürprizi çıkar.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Başlangıç / Öğrenci", "description": "Çalınabilirlik (aksiyon ve sap) önceliklidir.", "recommendedCriteriaIds": ["sap-egri", "aksiyon-fret"] },
      { "id": "ileri", "title": "Koleksiyon / Sahne Gitarı", "description": "Gövde bütünlüğü ve elektroniği önceliklidir.", "recommendedCriteriaIds": ["govde-catlak", "elektronik-susturucu", "kulak-akort"] }
    ],
    "relatedGuideIds": ["ikinci-el-dijital-piyano-alirken", "midi-klavye-alirken", "ses-karti-alirken"]
  },
  {
    "id": "ikinci-el-dijital-piyano-alirken",
    "slug": "ikinci-el-dijital-piyano-alirken",
    "categorySlug": "hobi",
    "title": "İkinci El Dijital Piyano Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "İkinci El Dijital Piyano",
    "description": "İkinci el dijital piyano alırken nelere dikkat edilmeli? Tuş mekanizması (hammer action), ölü/oyuncu tuşlar, pedal ve hoparlör kontrolü, model yaşı kriterlerine göre seçim rehberi.",
    "intro": [
      "İkinci el dijital piyanoda tuş mekanizması her şeydir; ağırlıklı (hammer action) ve iyi durumda olmayan piyano öğrenim için zararlıdır.",
      "Ölü tuş, gıcırtı ve pedal arızası, yerinde tüm tuşlar tek tek test edilmeden fark edilmez."
    ],
    "keywords": ["ikinci el dijital piyano", "ikinci el piyano alırken nelere dikkat edilmeli", "hammer action", "dijital piyano tuşları", "kullanılmış piyano", "elektronik piyano"],
    "aliases": ["kullanılmış dijital piyano", "el değmiş piyano", "ikinci el keyboard"],
    "estimatedReadTimeMinutes": 5,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "tus-mekanizma", "title": "Tuş Mekanizması (Hammer Action)", "description": "Ağırlıklı ve çekimli (graded) mekanizma akustik piyanoya yakın dokunuş verir; yarı ağırlıklı klavye öğrenim için önerilmez.", "importance": 'critical' },
      { "id": "tus-kontrol", "title": "Tüm Tuşların Tek Tek Testi", "description": "88 tuş kroma dizisiyle çalınır; ölü tuş, takılan tuş, farklı ses seviyesi ve gıcırtı dinlenir.", "importance": 'critical' },
      { "id": "pedal-hoparlor", "title": "Pedal ve Hoparlör", "description": "Sustain pedal etkisi ve hoparlör titreşimi/cızırtı; kulaklık çıkışıyla elektronik yol ayrıca test edilir.", "importance": 'critical' },
      { "id": "model-yas-parca", "title": "Model Yaşı ve Yedek Parça", "description": "Üretimden kalkan modellerde tuş mekanizması parçası bulunmayabilir; 10+ yaş modellerde bu risk büyüktür.", "importance": 'important' },
      { "id": "aksesuar-tasinma", "title": "Aksesuar ve Taşıma", "description": "Nota standı, susturucu pedal ünitesi, tabure ve güç aleti; piyano ağır olduğundan taşıma planı önceden yapılır.", "importance": 'useful' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Tuş mekanizması türünü (hammer/semi-weighted) doğruladım.", "importance": 'critical' },
      { "id": "c2", "text": "88 tuşun tamamını tek tek çalıp dinledim.", "importance": 'critical' },
      { "id": "c3", "text": "Pedal etkisini ve hoparlörleri test ettim.", "importance": 'critical' },
      { "id": "c4", "text": "Model yaşını ve parça bulunabilirliğini araştırdım.", "importance": 'important' },
      { "id": "c5", "text": "Aksesuar listesi ve taşıma planını netleştirdim.", "importance": 'useful' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Plastik Yarı Ağırlıklı 'Piyano' İddiası", "explanation": "Yarı ağırlıklı klavyeler keyboard sınıfıdır; piyano eğitimi için tuş ağırlığı ve dinamik yanıtı yetersizdir." },
      { "id": "rf2", "title": "Nem Alan Kart/Kontak Arızası", "explanation": "Nem hasarı görmüş kartlar aralıklı çalışır; onarım maliyeti piyano değerini aşabilir." }
    ],
    "questions": [
      { "id": "q1", "question": "Tuşlarda herhangi bir takılma, gıcırtı veya ses farkı var mı?", "whyItMatters": "Tuş mekanizması onarımı pahalıdır ve tüm çalım konforunu bozar.", "target": 'seller' },
      { "id": "q2", "question": "Cihaz kaç yıllık, servis kaydı var mı?", "whyItMatters": "Model yaşı parça bulunabilirliğini ve fiyatı doğrudan etkiler.", "target": 'seller' },
      { "id": "q3", "question": "Alım öncesi kulaklıkla da test yaptım mı?", "whyItMatters": "Hoparlör arızası kulaklık çıkışından bağımsız olabilir; ikisini de test etmek gerekir.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Başlangıç / Öğrenci", "description": "Tuş mekanizması ve tam tuş testi önceliklidir.", "recommendedCriteriaIds": ["tus-mekanizma", "tus-kontrol"] },
      { "id": "ileri", "title": "İleri Seviye / Sahne", "description": "Model yaşı, pedal ve aksesuar önceliklidir.", "recommendedCriteriaIds": ["pedal-hoparlor", "model-yas-parca", "aksesuar-tasinma"] }
    ],
    "relatedGuideIds": ["ikinci-el-gitar-alirken", "midi-klavye-alirken", "kulaklik-alirken"]
  },
  {
    "id": "ikinci-el-monitor-alirken",
    "slug": "ikinci-el-monitor-alirken",
    "categorySlug": "teknoloji",
    "title": "İkinci El Monitör Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "İkinci El Monitör",
    "description": "İkinci el monitör alırken nelere dikkat edilmeli? Ölü piksel ve yanık izi, panel banting, saatler (kullanım süresi), giriş portları ve güç devresi kriterlerine göre seçim rehberi.",
    "intro": [
      "İkinci el monitörde en sık gözden kaçan kusur back-light bleed ve panel banting'dir; karanlık odada tam siyah ekran testiyle görülür.",
      "OSD menüsünden kullanım saati ve servis bilgisi okunabilen modellerde pazarlık zemini nettir."
    ],
    "keywords": ["ikinci el monitör", "ikinci el monitör alırken nelere dikkat edilmeli", "ölü piksel kontrolü", "backlight bleed", "kullanılmış monitör", "oyuncu monitörü ikinci el"],
    "aliases": ["kullanılmış monitör", "el değmiş ekran", "ikinci el ekran"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "olum-piksel", "title": "Ölü Piksel ve Yanık İzi", "description": "Tam renk testleriyle (kırmızı/yeşil/mavi/siyah/beyaz) piksel hatası ve OLED'de yanık izi (burn-in) taranır.", "importance": 'critical' },
      { "id": "bleed-banding", "title": "Backlight Bleed ve Banding", "description": "Karanlık odada siyah ekran; köşelerden ışık sızması ve gri geçişlerde banting gradient testiyle görülür.", "importance": 'critical' },
      { "id": "kullanim-saati", "title": "Kullanım Süresi ve Servis Bilgisi", "description": "Bazı markaların OSD/servis menüsünde toplam çalışma saati okunur; yüksek saat panel ömrünün tükendiğini gösterir.", "importance": 'critical' },
      { "id": "port-guc", "title": "Port ve Güç Devresi", "description": "HDMI/DP/USB-C ve USB hub portlarının tamamı; adaptör harici modellerde güç devresi sesi dinlenir.", "importance": 'important' },
      { "id": "ayak-vesa", "title": "Ayak, VESA ve Aksesuar", "description": "Ayak mekanizması (pivot/height) sorunsuz dönmeli, VESA vidaları sağlam olmalı; kablo ve kutu eksiksizliği fiyata yansır.", "importance": 'useful' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Tam renk testleriyle piksel ve yanık izi taraması yaptım.", "importance": 'critical' },
      { "id": "c2", "text": "Karanlık ortamda siyah ekran bleed kontrolü ve gradient testi yaptım.", "importance": 'critical' },
      { "id": "c3", "text": "Kullanım saatini OSD/servis menüsünden okudum.", "importance": 'critical' },
      { "id": "c4", "text": "Tüm portları kendi cihazımla test ettim.", "importance": 'important' },
      { "id": "c5", "text": "Ayak mekanizmasını ve VESA/kablo eksiksizliğini kontrol ettim.", "importance": 'useful' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "OSD Menüsü Şifreli/Kapalı Satış", "explanation": "Servis bilgisini göstermeyen veya menüsü kısıtlanmış monitörde kullanım süresi gizleniyor olabilir." },
      { "id": "rf2", "title": "Hoparlörden veya Adaptörden Tıkırtı", "explanation": "Güç devresi coil whine'ı zamanla büyür; garanti dışı onarımı pratik değildir." }
    ],
    "questions": [
      { "id": "q1", "question": "Monitör kaç yıllık ve günde ortalama kaç saat çalıştı?", "whyItMatters": "Panel parlaklığı ve backlight ömrü kullanım saatiyle doğru orantılı azalır.", "target": 'seller' },
      { "id": "q2", "question": "Piksel hatası için iade garantisi veriyor musunuz?", "whyItMatters": "Yerinde test edilse bile bazı hatalar ancak evde fark edilir.", "target": 'seller' },
      { "id": "q3", "question": "Testleri kendi bilgisayarım ve kabloyla mı yaptım?", "whyItMatters": "Satıcının kablosu/sinyal kaynağı hataları maskeler.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Ofis / Günlük Kullanım", "description": "Piksel ve port testi önceliklidir.", "recommendedCriteriaIds": ["olum-piksel", "port-guc"] },
      { "id": "ileri", "title": "Oyun / Renk Kritik İş", "description": "Bleed/banding ve kullanım saati önceliklidir.", "recommendedCriteriaIds": ["bleed-banding", "kullanim-saati", "ayak-vesa"] }
    ],
    "relatedGuideIds": ["monitor-alirken", "oyuncu-monitoru-alirken", "ikinci-el-laptop-alirken", "usb-c-hub-alirken"]
  },
  {
    "id": "ikinci-el-projeksiyon-alirken",
    "slug": "ikinci-el-projeksiyon-alirken",
    "categorySlug": "teknoloji",
    "title": "İkinci El Projeksiyon Cihazı Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "İkinci El Projeksiyon",
    "description": "İkinci el projeksiyon cihazı alırken nelere dikkat edilmeli? Lamba ömrü, DMD/LCD panel hatası, toz ve honeycomb gölge, fan ve gürültü kriterlerine göre seçim rehberi.",
    "intro": [
      "İkinci el projeksiyonda lamba saatleri toplam maliyeti belirler; yeni lamba fiyatı cihaz fiyatına yaklaşabilir.",
      "Panel tozu ve ölü piksel blokları ancak düz renk test görüntüsüyle fark edilir."
    ],
    "keywords": ["ikinci el projeksiyon", "ikinci el projeksiyon alırken nelere dikkat edilmeli", "projeksiyon lamba ömrü", "kullanılmış projektör", "dmd panel hatası", "projeksiyon toz"],
    "aliases": ["kullanılmış projektör", "el değmiş projeksiyon"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "lamba-saati", "title": "Lamba Saati ve Türü", "description": "Menüden lamba saati okunur; UHP lambalar 2-4 bin saat, lazer/LED kaynaklar 20 bin+ saat ömürlüdür.", "importance": 'critical' },
      { "id": "panel-hata", "title": "DMD/LCD Panel Hataları", "description": "Beyaz/siyah/kırmızı tam ekran testlerinde ölü piksel adacıkları, renk kayması ve bulanık bölgeler taranır.", "importance": 'critical' },
      { "id": "toz-golge", "title": "Toz ve Honeycomb Gölgesi", "description": "İç toz görüntüde benekli gölge yapar; lens ve iç optik temizliği profesyonel ister.", "importance": 'critical' },
      { "id": "fan-ses", "title": "Fan, Gürültü ve Isınma", "description": "30 dk çalıştırmada fan sesi ve otomatik kapanma; tozlanmış gövde aşırı ısınmaya yol açar.", "importance": 'important' },
      { "id": "giris-aksesuar", "title": "Girişler ve Kumanda", "description": "HDMI/VGA girişleri, uzaktan kumanda ve lens kapağı; ayak ve duvar montaj vidası kontrol edilir.", "importance": 'useful' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Menüden lamba saatini okudum, lamba türünün ömrünü karşılaştırdım.", "importance": 'critical' },
      { "id": "c2", "text": "Tam ekran renk testlerinde panel hatası aradım.", "importance": 'critical' },
      { "id": "c3", "text": "Görüntüde toz gölgesi ve benekli alan kontrolü yaptım.", "importance": 'critical' },
      { "id": "c4", "text": "30 dk çalıştırıp fan sesini ve ısınmayı değerlendirdim.", "importance": 'important' },
      { "id": "c5", "text": "Tüm girişleri ve kumandayı test ettim.", "importance": 'useful' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Lamba Saati Sıfırlanmış (Resetlenmiş)", "explanation": "Saat sıfırlama menüden yapılır; gerçek lamba yaşı bilinmiyorsa yakında değişim riski alınıyor demektir." },
      { "id": "rf2", "title": "Sarılaşmış/Rengi Kaymış Görüntü", "explanation": "Renk sapması panel yaşlanması veya filtre bozulması olabilir; maliyeti cihaz değerini aşar." }
    ],
    "questions": [
      { "id": "q1", "question": "Lamba kaç saat çalıştı, orijinal lamba mı?", "whyItMatters": "Lamba değişim maliyeti ikinci el projeksiyon fiyatını aşabilir.", "target": 'seller' },
      { "id": "q2", "question": "Profesyonel kullanımda (sunum/sinema) mı kaldı?", "whyItMatters": "Yoğun kullanım panel ve fan ömrünü tüketir.", "target": 'seller' },
      { "id": "q3", "question": "Karanlık bir duvar/perde ile tam renk testleri yaptım mı?", "whyItMatters": "Panel ve toz hataları normal içerikte fark edilmez.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Ev Sineması / Ara Sıra", "description": "Lamba saati ve panel kontrolü önceliklidir.", "recommendedCriteriaIds": ["lamba-saati", "panel-hata"] },
      { "id": "ileri", "title": "Sık / Sunum Kullanımı", "description": "Isınma, fan ve giriş çeşitliliği önceliklidir.", "recommendedCriteriaIds": ["toz-golge", "fan-ses", "giris-aksesuar"] }
    ],
    "relatedGuideIds": ["projeksiyon-cihazi-alirken", "televizyon-alirken", "ikinci-el-monitor-alirken"]
  },

  {
    "id": "otel-secerken",
    "slug": "otel-secerken",
    "categorySlug": "seyahat",
    "title": "Otel Seçerken Nelere Dikkat Edilmeli?",
    "shortTitle": "Otel Seçerken",
    "description": "Otel seçerken nelere dikkat edilmeli? Konum ve ulaşım, gerçek fotoğraf ve yorum analizi, fiyat takvimi, iptal koşulları ve gizli ücretler kriterlerine göre seçim rehberi.",
    "intro": [
      "Otel seçiminde yıldız sayısı değil konum-yorum dengesi belirleyicidir. Son 6 ayın yorumları ve gerçek fotoğraflar, profesyonel çekimlerden daha güvenilirdir.",
      "Fiyat karşılaştırmasında vergi, kahvaltı ve iptal koşulları birlikte okunmalı; en ucuz liste fiyatı çoğu zaman toplam maliyet değildir."
    ],
    "keywords": ["otel seçerken nelere dikkat edilmeli", "otel rezervasyon", "otel yorumları", "otel konumu", "otel iptal koşulları", "rezervasyon sitesi"],
    "aliases": ["otel rezervasyonu", "hotel seçimi", "konaklama"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "konum-ulasim", "title": "Konum ve Ulaşım", "description": "Merkeze/toplantı alanına yürüme mesafesi ve toplu taşıma erişimi; gece varışta taksi maliyeti ve güvenlik de değerlendirilmelidir.", "importance": 'critical' },
      { "id": "yorum-analiz", "title": "Yorum ve Gerçek Fotoğraf Analizi", "description": "Son 6 ayın Türkçe/yabancı yorumları, orta puanlı (3-4) detaylı yorumlar ve misafir fotoğrafları en gerçekçi veridir.", "importance": 'critical' },
      { "id": "fiyat-takvim", "title": "Fiyat Takvimi ve Kanal Karşılaştırması", "description": "Aynı oda için 2-3 kanal ve otelin kendi sitesi karşılaştırılır; hafta içi/hafta sonu ve sezona göre takvim fiyatı sürprizleri önler.", "importance": 'critical' },
      { "id": "iptal-kosul", "title": "İptal Koşulları ve Saat Dilimleri", "description": "Ücretsiz iptal son saati ve no-show ücreti; plan değişikliğinde esnek tarife farkı sigorta görevi görür.", "importance": 'important' },
      { "id": "gizli-ucret", "title": "Gizli Ücretler ve Dahil Olanlar", "description": "Kesin ücret (vergi+şehir vergisi), kahvaltı, otopark, Wi-Fi ve resort ücretleri toplam maliyeti değiştirir.", "importance": 'important' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Konumu haritada işaretleyip yürüme/toplu taşıma mesafelerini kontrol ettim.", "importance": 'critical' },
      { "id": "c2", "text": "Son 6 ayın yorumlarını ve misafir fotoğraflarını inceledim.", "importance": 'critical' },
      { "id": "c3", "text": "Aynı odayı 2-3 kanaldan ve otel sitesinden karşılaştırdım.", "importance": 'critical' },
      { "id": "c4", "text": "İptal koşulunu ve son iptal saatini okudum.", "importance": 'important' },
      { "id": "c5", "text": "Toplam ücreti (vergi, şehir vergisi, kahvaltı) öğrendim.", "importance": 'important' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Sıfır İptal Haklı Ucuz Tarife", "explanation": "Plan değişikliğinde tüm ücret yanar; esnek tarife farkı genelde riskten ucuzdur." },
      { "id": "rf2", "title": "Tüm Yorumlar 5 Yıldız ve Kısa", "explanation": "Şablon yorum akışı ve yeni açılan sayfa, sahte puanlama göstergesidir; orta detaylı yorumlar azsa dikkat." }
    ],
    "questions": [
      { "id": "q1", "question": "Toplam ücret hangi kalemleri kapsıyor, otopark ve şehir vergisi var mı?", "whyItMatters": "Liste fiyatı karşılaştırması eksik kalemlerle yanıltır.", "target": 'seller' },
      { "id": "q2", "question": "Check-in saatinden önce/sonra bagaj emaneti var mı?", "whyItMatters": "Erken varış ve geç uçuşlarda pratik değeri yüksektir.", "target": 'seller' },
      { "id": "q3", "question": "Rezervasyonu otelin kendi kanalından mi yaptım, kanal ve otel koşulları çelişiyor mu?", "whyItMatters": "Kanal-otel koşul çelişkisinde sorun çözümü uzar.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Şehir Tatili / Bütçe", "description": "Konum ve toplam maliyet önceliklidir.", "recommendedCriteriaIds": ["konum-ulasim", "fiyat-takvim"] },
      { "id": "ileri", "title": "Special Gün / Resort", "description": "Yorum analizi ve esnek iptal önceliklidir.", "recommendedCriteriaIds": ["yorum-analiz", "iptal-kosul", "gizli-ucret"] }
    ],
    "relatedGuideIds": ["ucak-bileti-alirken", "arac-kiralarken", "valiz-alirken", "bungalov-kiralarken"]
  },
  {
    "id": "bungalov-kiralarken",
    "slug": "bungalov-kiralarken",
    "categorySlug": "seyahat",
    "title": "Bungalov Kiralarken Nelere Dikkat Edilmeli?",
    "shortTitle": "Bungalov Kiralarken",
    "description": "Bungalov kiralarken nelere dikkat edilmeli? Mevsimsel yalıtım, ısıtma/soğutma, banyo ve su basıncı, gizli maliyet, çevre ve ulaşım kriterlerine göre seçim rehberi.",
    "intro": [
      "Bungalov kiralamada fotoğraflardaki ahşap romantizmi yanıltıcıdır; mevsim koşullarında yalıtım ve ısıtma gerçek konforu belirler.",
      "Kapora/iptal koşulları ve temizlik/elektrik gibi ek ücretler, tatil bütçesini ciddi biçimde değiştirir."
    ],
    "keywords": ["bungalov kiralarken nelere dikkat edilmeli", "bungalov tatil", "ahşap ev kiralama", "bungalov kapora", "doğa evi kiralama", "bungalov ısıtma"],
    "aliases": ["ahşap bungalov", "doğa evi", "tiny house"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "mevsim-yalitim", "title": "Mevsim ve Yalıtım", "description": "Ahşap yapılar kışın soğur yazın ısınır; hangi mevsimde gidilecekse ısıtma (soba/klima) ve yalıtım o mevsime göre sorgulanmalıdır.", "importance": 'critical' },
      { "id": "isitma-sogutma", "title": "Isıtma/Soğutma ve Sıcak Su", "description": "Soba/klima/şömine durumu, sıcak su kesintisi ve su basıncı; şofben kesme ve elektrik kesintisi senaryoları sorulmalıdır.", "importance": 'critical' },
      { "id": "banyo-mutfak", "title": "Banyo, Mutfak ve İhtiyaç Düzeni", "description": "İç/dış banyo ayrımı, mutfak ekipmanı ve market mesafesi; 'kamp konforu' ile 'otel konforu' arasındaki fark burada ortaya çıkar.", "importance": 'important' },
      { "id": "kapora-iptal", "title": "Kapora, İptal ve Ek Ücretler", "description": "Kapora oranı, iptal koşulu, temizlik/elektrik/soba odunu ücretleri yazılı olarak alınmalıdır.", "importance": 'critical' },
      { "id": "ulasim-cevre", "title": "Ulaşım, Çevre ve Mahremiyet", "description": "Yol durumu (kış lastiği/zincir), komşu bungalov mesafesi, ses yalıtımı ve hayvan/çocuk durumu plana uygun olmalıdır.", "importance": 'important' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Gideceğim mevsime göre yalıtım ve ısıtma durumunu sordum.", "importance": 'critical' },
      { "id": "c2", "text": "Sıcak su, su basıncı ve kesinti senaryolarını netleştirdim.", "importance": 'critical' },
      { "id": "c3", "text": "Kapora/iptal koşullarını ve ek ücretleri yazılı aldım.", "importance": 'critical' },
      { "id": "c4", "text": "Banyo-mutfak düzenini ve market/restoran mesafesini araştırdım.", "importance": 'important' },
      { "id": "c5", "text": "Yol koşullarını ve komşu mesafesini (mahremiyet) değerlendirdim.", "importance": 'important' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Sadece Dış Cephe Fotoğrafları", "explanation": "İç mekan ve banyo fotoğrafı olmayan ilanlarda standart sürprizi yaşanır; misafir fotoğrafı istenmelidir." },
      { "id": "rf2", "title": "Sözlü Kapora / Kişisel Hesap", "explanation": "Yazılı koşul ve kurumsal ödeme kanalı olmayan kiralamalarda anlaşmazlıkta hak iddiası zordur." }
    ],
    "questions": [
      { "id": "q1", "question": "Kış/seni mevsimde ısıtma nasıl sağlanıyor, ek maliyet var mı?", "whyItMatters": "Soba odunu ve elektrik tüketimi bazen gecelik ücrete yakın ek maliyet yaratır.", "target": 'seller' },
      { "id": "q2", "question": "İptal halinde kapora iadesi nasıl işliyor?", "whyItMatters": "Hava koşulları ve sağlık iptallerinde koşul farkı ciddi kayıp yaratır.", "target": 'seller' },
      { "id": "q3", "question": "Gidiş yolunun ve hava koşulunun araçıma uygun olduğunu doğruladım mı?", "whyItMatters": "Dağ/orman yolları kış lastiği, zincir ve yüksek araç ister.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Yaz / Hafta Sonu Kaçamağı", "description": "Mahremiyet, su ve konfor düzeni önceliklidir.", "recommendedCriteriaIds": ["banyo-mutfak", "ulasim-cevre"] },
      { "id": "ileri", "title": "Kış / Uzun Konaklama", "description": "Yalıtım, ısıtma ve iptal koşulları önceliklidir.", "recommendedCriteriaIds": ["mevsim-yalitim", "isitma-sogutma", "kapora-iptal"] }
    ],
    "relatedGuideIds": ["otel-secerken", "tatil-villasi-kiralarken", "kamp-alani-secerken", "valiz-alirken"]
  },
  {
    "id": "tatil-villasi-kiralarken",
    "slug": "tatil-villasi-kiralarken",
    "categorySlug": "seyahat",
    "title": "Tatil Villası Kiralarken Nelere Dikkat Edilmeli?",
    "shortTitle": "Villa Kiralarken",
    "description": "Tatil villası kiralarken nelere dikkat edilmeli? Yetkili agency ve sahtecilik kontrolü, havuz güvenliği, gizli maliyetler, depozito ve çevre olanakları kriterlerine göre seçim rehberi.",
    "intro": [
      "Villa kiralarkada en büyük risk ödeme tarafındadır: sahte ilan ve sosyal medya dolandırıcılığı yaygındır. Yetkili platform ve yerinde/online doğrulama şarttır.",
      "Havuz güvenliği, klimaların oda bazlı olması ve depozito iade koşulları, tatil boyunca huzuru belirleyen detaylardır."
    ],
    "keywords": ["tatil villası kiralarken nelere dikkat edilmeli", "villa kiralama", "havuzlu villa", "villa dolandırıcılığı", "villa depozito", "kısa dönem kiralama"],
    "aliases": ["havuzlu villa", "tatil evi", "kısa dönem villa"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "guvenilirlik", "title": "Yetkili Kanal ve İlan Doğrulama", "description": "Kurumsal platform/acenta, Google Maps yorumları ve sahiplik belgesi; sahte ilanlarda fotoğraflar başka villalardan alınmış olabilir.", "importance": 'critical' },
      { "id": "havuz-guvenlik", "title": "Havuz Güvenliği ve Bakım", "description": "Çocuk için çit/alarm var mı, havuz bakım günü ve temizlik sorumlusu; özel havuzda cankurtaran yoktur, sorumluluk misafirdedir.", "importance": 'critical' },
      { "id": "gizli-maliyet", "title": "Toplam Maliyet ve Depozito", "description": "Temizlik, elektrik (bazı bölgelerde sayaç üzerinden), havuz ısıtma ve depozito koşulları yazılı netleştirilmelidir.", "importance": 'critical' },
      { "id": "konum-olanak", "title": "Konum, Ulaşım ve Olanaklar", "description": "Plaja/merkeze mesafe, araç gerekliliği, market/restoran yakınlığı; klimalı oda sayısı ve Wi-Fi kalitesi de sorgulanır.", "importance": 'important' },
      { "id": "yonetici-iletisim", "description": "Yerinde sorun (su kesintisi, klma arızası) karşısında 7/24 ulaşılabilir yönetici olmalıdır.", "title": "Yönetici ve Acil Destek", "importance": 'important' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "İlanı kurumsal platformdan doğruladım, sahte ilan belirtileri taradım.", "importance": 'critical' },
      { "id": "c2", "text": "Havuz güvenliği önlemlerini ve bakım düzenini sordum.", "importance": 'critical' },
      { "id": "c3", "text": "Toplam maliyet kalemlerini ve depozito iade koşulunu yazılı aldım.", "importance": 'critical' },
      { "id": "c4", "text": "Konum-ulaşım ve günlük ihtiyaç mesafelerini kontrol ettim.", "importance": 'important' },
      { "id": "c5", "text": "Sorun anında ulaşılacak yönetici iletişimini netleştirdim.", "importance": 'important' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Piyasanın Çok Altında Fiyat + Kişisel IBAN", "explanation": "Fotoğrafları çalınmış sahte ilanlar; ön ödeme sonrası iletişim kesilir." },
      { "id": "rf2", "title": "Depozito Sadece Nakit", "explanation": "İadesi belgesiz nakit depozitoda kayıp riski yüksektir; kart/havale + protokol tercih edilir." }
    ],
    "questions": [
      { "id": "q1", "question": "Villanın sahibi/yöneticisi siz mi, tapu veya yönetim belgesi gösterilebilir mi?", "whyItMatters": "Kiralama yetkisi olmayan kişilerden alınan villa tatili para ve tatil kaybı riski taşır.", "target": 'seller' },
      { "id": "q2", "question": "Elektrik/su nasıl ücretlendiriliyor, sayaç okuma nasıl yapılacak?", "whyItMatters": "Klimalı villalarda elektrik, toplam maliyeti %30-50 artırabilir.", "target": 'seller' },
      { "id": "q3", "question": "Çocukla gidiyorsam havuz çiti/alarm ve kapı kilitlerini yerinde kontrol ettim mi?", "whyItMatters": "Boğulma riski dakikalarla ölçülür; güvenlik donanımı tatilin ilk kontrolüdür.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Aile / Yaz Tatili", "description": "Havuz güvenliği ve toplam maliyet önceliklidir.", "recommendedCriteriaIds": ["guvenilirlik", "havuz-guvenlik", "gizli-maliyet"] },
      { "id": "ileri", "title": "Kalabalık Grup / Özel Gün", "description": "Oda sayısı, yönetici desteği ve konum önceliklidir.", "recommendedCriteriaIds": ["konum-olanak", "yonetici-iletisim"] }
    ],
    "relatedGuideIds": ["bungalov-kiralarken", "otel-secerken", "arac-kiralarken"]
  },
  {
    "id": "kamp-alani-secerken",
    "slug": "kamp-alani-secerken",
    "categorySlug": "seyahat",
    "title": "Kamp Alanı Seçerken Nelere Dikkat Edilmeli?",
    "shortTitle": "Kamp Alanı Seçerken",
    "description": "Kamp alanı seçerken nelere dikkat edilmeli? Zemin ve alan ölçüleri, su/WC/duş hijyeni, elektrik ve karavan uyumu, sessizlik ve gölge kriterlerine göre seçim rehberi.",
    "intro": [
      "Kamp alanı seçiminde manzara sonraya bırakılır: zemin drenajı, WC-duş temizliği ve su mesafesi kamp kalitesini belirler.",
      "Çadır ve karavan ihtiyaçları farklıdır; elektrik, giriş saati ve hayvan politikası gibi kurallar önceden netleştirilmelidir."
    ],
    "keywords": ["kamp alanı seçerken nelere dikkat edilmeli", "kamp alanı rezervasyon", "karavan kampı", "çadır kampı", "kamp alanı hijyen", "kamp yeri"],
    "aliases": ["kamping", "karavan park", "çadır alanı"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "zemin-drenaj", "title": "Zemin ve Drenaj", "description": "Çim/toprak zemin ve eğim; yağmurda su birikmeyecek, çadır kazığı tutacak yapı tercih edilir.", "importance": 'critical' },
      { "id": "hijyen-tesis", "title": "WC, Duş ve Su Hijyeni", "description": "Temizlik sıklığı, sıcak su saatleri ve misafir başına düşen kabın sayısı; hafta sonu yoğunluğunda yetersiz kalır.", "importance": 'critical' },
      { "id": "elektrik-karavan", "title": "Elektrik ve Karavan Uyumu", "description": "Karavan için elektrik prizi (16A) ve atık su tahliyesi; çadır kampçıları için paylaşımlı priz sayısı.", "importance": 'important' },
      { "id": "sessizlik-duzen", "title": "Sessizlik, Mesafe ve Düzen", "description": "Sessizlik saati, alan büyüklüğü ve komşu çadırla mesafe; müzik/parti alanları ile aile alanları ayrışmalıdır.", "importance": 'important' },
      { "id": "golge-ruzgar", "title": "Gölge, Rüzgar ve Yangın Kuralları", "description": "Ağaç gölgesi yaz kampında kritiktir; ateş yakma kuralları ve mangal alanları önceden öğrenilir.", "importance": 'useful' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Zemin tipini, eğimi ve drenajını sordum/rezervasyon haritasından baktım.", "importance": 'critical' },
      { "id": "c2", "text": "WC-duş temizlik düzenini ve sıcak su saatlerini öğrendim.", "importance": 'critical' },
      { "id": "c3", "text": "Elektrik/priz ve karavan altyapısını kontrol ettim.", "importance": 'important' },
      { "id": "c4", "text": "Sessizlik saatini ve alan yerleşim düzenini değerlendirdim.", "importance": 'important' },
      { "id": "c5", "text": "Gölge durumu ve ateş/mangal kurallarını netleştirdim.", "importance": 'useful' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Yoğun Sezonda Fazla Çadır/Sqm", "explanation": "Aşırı yoğun alanlar hem hijyeni hem sessizliği düşürür; misafir kapasitesi sınırı sorulmalıdır." },
      { "id": "rf2", "title": "Yağmur Sonrası Çamur Alanı", "explanation": "Drenajı olmayan alanlar yağmurda göl olur; eğimli-çimli alanlar her koşulda daha güvenlidir." }
    ],
    "questions": [
      { "id": "q1", "question": "Alanın misafir kapasitesi ve hafta içi/sonu yoğunluğu nasıl?", "whyItMatters": "Kalabalık, tesis kullanımını ve sessizliği doğrudan etkiler.", "target": 'seller' },
      { "id": "q2", "question": "Elektrik, sıcak su ve market/ buz gibi hizmetler ücrete tabi mi?", "whyItMatters": "Ek ücretler günlük maliyeti değiştirir.", "target": 'seller' },
      { "id": "q3", "question": "Hava durumu planına göre alternatif planım ve ekipman yedeğim hazır mı?", "whyItMatters": "Ani rüzgar/sağanak, doğru alan seçilse bile ekipman gerektirir.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Aile / Hafta Sonu Kampı", "description": "Hijyen, sessizlik ve tesisler önceliklidir.", "recommendedCriteriaIds": ["hijyen-tesis", "sessizlik-duzen"] },
      { "id": "ileri", "title": "Karavan / Uzun Konaklama", "description": "Elektrik, tahliye ve zemin önceliklidir.", "recommendedCriteriaIds": ["zemin-drenaj", "elektrik-karavan", "golge-ruzgar"] }
    ],
    "relatedGuideIds": ["kamp-cadiri-alirken", "kamp-ocagi-alirken", "bungalov-kiralarken", "uyku-tulumu-alirken"]
  },
  {
    "id": "tur-paketi-alirken",
    "slug": "tur-paketi-alirken",
    "categorySlug": "seyahat",
    "title": "Tur Paketi Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Tur Paketi Alırken",
    "description": "Tur paketi alırken nelere dikkat edilmeli? Nelerin dahil olmadığı, acentenin TÜRSAB belgesi, rehber ve ulaşım standardı, gizli alışveriş durakları ve iptal koşulları kriterlerine göre seçim rehberi.",
    "intro": [
      "Tur paketlerinde fiyat değil kapsam listesi belirleyicidir: uçak, transfer, otel sınıfı, yemekler ve ekstralar tek tek yazılı olmalıdır.",
      "TÜRSAB/otop belgesi ve zorunlu mesleki sorumluluk sigortası, acente iflasında paranın dönüşünü korur."
    ],
    "keywords": ["tur paketi alırken nelere dikkat edilmeli", "tatil paketi", "tur acentesi seçimi", "tursab belgesi", "kültür turları", "yurt dışı turu"],
    "aliases": ["tatil paketi", "kültür turu", "tur programı"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "kapsam-listesi", "title": "Dahil/Olanlar ve Hariçler Listesi", "description": "Uçuş sınıfı, bagaj, transfer, otel sınıfı, yemek sayısı, müze ücretleri ve rehber hizmeti yazılı ayrıştırılmalıdır.", "importance": 'critical' },
      { "id": "acente-belge", "title": "Acente Belgeleri", "description": "TÜRSAB (Türkiye) veya yerel turizm otoritesi belgesi ve mesleki sorumluluk sigortası; iflas ve iptal senaryosunda koruma sağlar.", "importance": 'critical' },
      { "id": "gizli-durak", "title": "Zorunlu Alışveriş ve Ekstra Duraklar", "description": "Bazı turlarda müze yerine mağaza durakları vardır; program saati bazında gerçek içerik kontrol edilir.", "importance": 'critical' },
      { "id": "grup-standart", "title": "Grup Büyüklüğü ve Ulaşım Standardı", "description": "Otobüs koltuk aralığı, grup mevcudu, rehber/mezun bilgisi ve otelin konumu tur deneyimini belirler.", "importance": 'important' },
      { "id": "iptal-visa", "title": "İptal Koşulları ve Vize/Sigorta", "description": "İptal kesintileri kademeli yazılır; vize reddi durumunda ücret iadesi ve seyahat sigortası ayrıca netleştirilir.", "importance": 'important' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Dahil/hariç listesini satır satır okudum, belirsiz kalemleri sordum.", "importance": 'critical' },
      { "id": "c2", "text": "Acentenin TÜRSAB/otorite belgesini ve sigortasını doğruladım.", "importance": 'critical' },
      { "id": "c3", "text": "Programı saat bazında inceleyip alışveriş durağı oranını değerlendirdim.", "importance": 'critical' },
      { "id": "c4", "text": "Grup mevcudu, araç standardı ve rehber bilgilerini aldım.", "importance": 'important' },
      { "id": "c5", "text": "İptal kesinti tablosunu ve vize reddi senaryosunu okudum.", "importance": 'important' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Belgesiz 'Tur Düzenleyici' İlanları", "explanation": "Sosyal medya üzerinden belgesiz tur satışı iflas/iptal riski taşır; TÜRSAB sorgusu yapılmalıdır." },
      { "id": "rf2", "title": "Piyasadan Çok Ucuz 'Her Şey Dahil'", "explanation": "Düşük fiyat genelde düşük otel sınıfı, ekstra ücretli müzeler ve mağaza duraklarıyla telafi edilir." }
    ],
    "questions": [
      { "id": "q1", "question": "Bu fiyata otel hangi sınıf ve konumda, müze ve yemekler dahil mi?", "whyItMatters": "Kapsam farkı aynı liste fiyatında binlerce lira fark yaratır.", "target": 'seller' },
      { "id": "q2", "question": "Vize reddi halinde ücretin hangi kısmı iade ediliyor?", "whyItMatters": "Vize reddi turcunun kusuru olmamasına rağmen kesinti tablosu uygulanabilir.", "target": 'seller' },
      { "id": "q3", "question": "Sözleşmeyi ve dahil/hariç listesini yazılı olarak sakladım mı?", "whyItMatters": "Anlaşmazlıkta tek geçerli referans yazılı sözleşmedir.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Yurt İçi / Kültür Turu", "description": "Kapsam listesi ve acente belgesi önceliklidir.", "recommendedCriteriaIds": ["kapsam-listesi", "acente-belge"] },
      { "id": "ileri", "title": "Yurt Dışı / Uzun Tur", "description": "İptal-vize koşulları ve grup standardı önceliklidir.", "recommendedCriteriaIds": ["gizli-durak", "grup-standart", "iptal-visa"] }
    ],
    "relatedGuideIds": ["ucak-bileti-alirken", "otel-secerken", "esim-secerken"]
  },
  {
    "id": "arac-kiralarken",
    "slug": "arac-kiralarken",
    "categorySlug": "seyahat",
    "title": "Araç Kiralarken Nelere Dikkat Edilmeli?",
    "shortTitle": "Araç Kiralarken",
    "description": "Araç kiralarken nelere dikkat edilmeli? Sigorta kapsamı (CDW/SCDW), depozito ve hasar kaydı, kilometre sınırı, yakıt politikası ve gizli ücretler kriterlerine göre seçim rehberi.",
    "intro": [
      "Araç kiralarkada günlük ücret değil sigorta kapsamı ve depozito belirleyicidir; kapı çizikleri SCDW farkıyla binlerce liraya dönüşebilir.",
      "Teslim fotoğrafları ve hasar formu, aracı iade ederken en güçlü savunmanızdır."
    ],
    "keywords": ["araç kiralarken nelere dikkat edilmeli", "rent a car", "kiralık araç sigortası", "scdw farkı", "araç kiralama depozito", "gizli ücret kiralama"],
    "aliases": ["rent a car", "kiralık araç", "filo kiralama"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "sigorta-kapsam", "title": "Sigorta Kapsamı (CDW/SCDW)", "description": "CDW hasarın bir kısmını, SCDW lastik-cam-alt tamponu da içerir; asgari sorumluluk (excess) tutarı mutlaka sorulmalıdır.", "importance": 'critical' },
      { "id": "depozito-hasar", "title": "Depozito ve Hasar Kaydı", "description": "Bloke edilen tutar ve iade süresi; aracı teslim alırken her çizik fotoğraflanır ve hasar formuna işlenir.", "importance": 'critical' },
      { "id": "km-siniri", "title": "Kilometre Sınırı", "description": "Günlük km sınırı ve aşım ücreti; sınır dışı (yurt dışı) çıkış koşulu ayrıca netleştirilir.", "importance": 'critical' },
      { "id": "yakit-politika", "title": "Yakıt Politikası ve Teslim", "description": "Tam depo al-tam depo ver idealdir; 'ödemeli teslim' seçeneğinde litre fiyatı pompanın iki katı olabilir.", "importance": 'important' },
      { "id": "yas-ek-ucret", "title": "Yaş/Kıdem ve Ek Ücretler", "description": "25 yaş altı ve 2 yıl kıdem şartı; havalimanı servis ücreti, ikinci sürücü ve çocuk koltuğu ek maliyetlerdir.", "importance": 'important' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Sigorta kapsamını ve excess tutarını yazılı olarak aldım.", "importance": 'critical' },
      { "id": "c2", "text": "Depozito tutarını, bloke şeklini ve hasar formunu fotoğrafladım.", "importance": 'critical' },
      { "id": "c3", "text": "Km sınırını ve aşım ücretini öğrendim.", "importance": 'critical' },
      { "id": "c4", "text": "Yakıt politikasını ve iade saati esnekliğini netleştirdim.", "importance": 'important' },
      { "id": "c5", "text": "Yaş/kıdem şartlarını ve tüm ek ücretleri listeledim.", "importance": 'important' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Depozitosuz/Sigortasız Ucuz Günlük Fiyat", "explanation": "Düşük fiyat; hasar anında yüksek excess ve depozito bloke tuzağıyla telafi edilir." },
      { "id": "rf2", "title": "Teslimde Fotoğraf/Hasar Formu Yapılmaması", "explanation": "Önceki hasarlar size yansıtılır; fotoğrafsız teslim, iade anında ispatı imkansız kılar." }
    ],
    "questions": [
      { "id": "q1", "question": "Bu fiyat hangi sigorta paketiyle, excess tutarı ne kadar?", "whyItMatters": "Günlük 100 lira fark, hasarda binlerce liralık sorumluluğu ortadan kaldırır.", "target": 'seller' },
      { "id": "q2", "question": "Depozito ne zaman, hangi kanaldan iade ediliyor?", "whyItMatters": "İade süresi 7-30 gün arası değişir; kart limiti planlamasını etkiler.", "target": 'seller' },
      { "id": "q3", "question": "Teslim ve iadede aracın tamamını video ile kayda aldım mı?", "whyItMatters": "Zaman damgalı video, çizik iddialarına karşı en güçlü delildir.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Şehir / Hafta Sonu Kiralama", "description": "Sigorta ve depozito koşulları önceliklidir.", "recommendedCriteriaIds": ["sigorta-kapsam", "depozito-hasar"] },
      { "id": "ileri", "title": "Tatil / Uzun Dönem", "description": "Km sınırı, yakıt ve ek ücretler önceliklidir.", "recommendedCriteriaIds": ["km-siniri", "yakit-politika", "yas-ek-ucret"] }
    ],
    "relatedGuideIds": ["ucak-bileti-alirken", "otel-secerken", "ikinci-el-araba-alirken", "valiz-alirken"]
  },
  {
    "id": "ucak-bileti-alirken",
    "slug": "ucak-bileti-alirken",
    "categorySlug": "seyahat",
    "title": "Uçak Bileti Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Uçak Bileti Alırken",
    "description": "Uçak bileti alırken nelere dikkat edilmeli? Bagaj hakkı ve kabin boyutu, bilet sınıfı değişiklik koşulları, aktarma süreleri, tarifeli/ucuz firmalar dengesi kriterlerine göre seçim rehberi.",
    "intro": [
      "Uçak bileti seçiminde liste fiyatı değil toplam maliyet karşılaştırılır: bagaj, koltuk seçimi ve değişiklik ücretleri ciddi fark yaratır.",
      "Aktarmalı biletlerde minimum bağlantı süresi ve aynı PNR olup olmadığı, gecikme senaryosunda haklarınızı belirler."
    ],
    "keywords": ["uçak bileti alırken nelere dikkat edilmeli", "ucuz uçak bileti", "bagaj hakkı", "aktarma süresi", "bilet değişikliği", "ekonomi bileti"],
    "aliases": ["flight bileti", "ucuz uçuş", "aktarmalı bilet"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "bagaj-hakki", "title": "Bagaj Hakkı ve Kabin Ölçüsü", "description": "Şirket bazlı kabin bagajı ölçüleri ve 15/20/25 kg fiili kontrol; ek bagajÜcreti bilet fiyatını geçebilir.", "importance": 'critical' },
      { "id": "degisiklik-iade", "title": "Değişiklik/İade Koşulları", "description": "Ekonomi sınıfında değişiklik ücreti + tarife farkı; promosyon biletlerde iade genellikle yoktur.", "importance": 'critical' },
      { "id": "aktarma-sure", "title": "Aktarma Süresi ve PNR Bütünlüğü", "description": "Aynı rezervasyonda (PNR) bağlantı kaydı firma sorumluluğundadır; ayrı biletlerde risk yolcudadır.", "importance": 'critical' },
      { "id": "saat-havalimani", "title": "Kalkış Saati ve Havalimanı Mesafesi", "description": "Erken/gece uçuşlar ucuzdur ama ulaşım maliyeti ve otel gecesiyle birlikte hesaplanmalıdır.", "importance": 'important' },
      { "id": "checkin-koltuk", "title": "Check-in ve Koltuk Seçimi", "description": "Online check-in açılış saati, yan yana oturma ücreti ve aile/çocuk konumlandırma kuralları.", "importance": 'useful' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Bagaj hakkını ve kabin ölçülerini firma sayfasından doğruladım.", "importance": 'critical' },
      { "id": "c2", "text": "Değişiklik/iade koşullarını fiyattan önce okudum.", "importance": 'critical' },
      { "id": "c3", "text": "Aktarma sürelerini ve tek rezervasyon (PNR) bütünlüğünü kontrol ettim.", "importance": 'critical' },
      { "id": "c4", "text": "Kalkış saatini ulaşım maliyetiyle birlikte değerlendirdim.", "importance": 'important' },
      { "id": "c5", "text": "Check-in açılış saatini not ettim, koltuk seçimi maliyetini hesapladım.", "importance": 'useful' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Farklı Firmalarla 'Ucuz' Aktarma", "explanation": "Ayrı biletlerle yapılan aktarmada ilk uçuş gecikirse ikinci bilet yanar; sorumluluk yolcudadır." },
      { "id": "rf2", "title": "Sadece Fiyata Bakıp Bagajsız Bilet Almak", "explanation": "Bagaj ek ücreti, bilet farkından yüksek çıkabilir; toplam maliyet karşılaştırılmalıdır." }
    ],
    "questions": [
      { "id": "q1", "question": "Bu bilet kaç kg bagaj içeriyor, ek kg/kabin ücreti nedir?", "whyItMatters": "Bagaj ücretleri bilet fiyatının %30-50'sine ulaşabilir.", "target": 'seller' },
      { "id": "q2", "question": "Bilet değişikliği ve iptal kesintisi ne kadar?", "whyItMatters": "Plan değişikliğinde kesinti + tarife farkı bilet fiyatını geçebilir.", "target": 'seller' },
      { "id": "q3", "question": "Aktarmalı yolculukta tek PNR mi, ayrı biletler mi aldım?", "whyItMatters": "Tek PNR'da gecikme halinde firma yeniden yönlendirme yükümlülüğü taşır.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Şehir İçi / Kısa Mesafe", "description": "Bagaj ve saat dengesi önceliklidir.", "recommendedCriteriaIds": ["bagaj-hakki", "saat-havalimani"] },
      { "id": "ileri", "title": "Yurt Dışı / Aktarmalı", "description": "PNR bütünlüğü ve değişiklik koşulları önceliklidir.", "recommendedCriteriaIds": ["aktarma-sure", "degisiklik-iade", "checkin-koltuk"] }
    ],
    "relatedGuideIds": ["arac-kiralarken", "otel-secerken", "valiz-alirken", "esim-secerken"]
  },
  {
    "id": "esim-secerken",
    "slug": "esim-secerken",
    "categorySlug": "dijital-hizmetler",
    "title": "eSIM Seçerken Nelere Dikkat Edilmeli?",
    "shortTitle": "eSIM Seçerken",
    "description": "eSIM seçerken nelere dikkat edilmeli? Cihaz uyumu, kapsama ve operatör altyapısı, kotanın cihaz bazlı kullanımı, aktive süre ve fiyat modeli kriterlerine göre seçim rehberi.",
    "intro": [
      "eSIM seçiminde ilk kontrol cihaz uyumudur; ikinci kontrol hangi ülke/operatör altyapısını kiraladığıdır.",
      "Kota neye göre hesaplanıyor (haritalama, sosyal medya) ve aktivasyon süresi (genelde 30 gün) sürprizleri önler."
    ],
    "keywords": ["esim seçerken nelere dikkat edilmeli", "yurt dışı esim", "seyahat esim", "esim kota", "esim uyumluluk", "uluslararası veri paketi"],
    "aliases": ["seyahat esim", "uluslararası veri paketi", "dijital sim"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "cihaz-uyum", "title": "Cihaz Uyumu", "description": "iPhone XS sonrası, birçok Android amiral gemisi eSIM destekler; bölgesel kilit ve operatör kısıtı kontrol edilmelidir.", "importance": 'critical' },
      { "id": "kapsama-altyapi", "title": "Kapsama ve Altyapı Operatörü", "description": "eSIM sağlayıcısı yerel operatörden kapasite kiralar; hedef ülkede birden fazla ağa 'multi-network' bağlanan profiller daha güvenilirdir.", "importance": 'critical' },
      { "id": "kota-kullanim", "title": "Kota Tanımı ve Kullanım Alanı", "description": "1 GB sosyal medya + harita + mail için yetebilir ama video streaming 1-2 saatte tüketir; hotspot paylaşımı bazı profillerde kapalıdır.", "importance": 'critical' },
      { "id": "aktivasyon-sure", "title": "Aktivasyon ve Geçerlilik", "description": "QR ilk taramadan mı ilk veri kullanımından mı başlar; 30 gün üstü seyahatlerde uzatma koşulları netleştirilir.", "importance": 'important' },
      { "id": "fiyat-model", "title": "Fiyat Modeli ve Destek", "description": "Ülke bazlı/regional/küresel paket farkı; 7/24 canlı destek ve iade politikası değerlendirmeye alınır.", "importance": 'useful' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Telefonumun eSIM desteğini ve kilit durumunu doğruladım.", "importance": 'critical' },
      { "id": "c2", "text": "Hedef ülkede kullanılan altyapı operatör(ler)ini araştırdım.", "importance": 'critical' },
      { "id": "c3", "text": "Kota tanımını kullanım planımla (harita/streaming) karşılaştırdım.", "importance": 'critical' },
      { "id": "c4", "text": "Aktivasyon başlangıcını ve geçerlilik süresini netleştirdim.", "importance": 'important' },
      { "id": "c5", "text": "Fiyat modelini ve destek/iade koşullarını karşılaştırdım.", "importance": 'useful' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Tek Ağ Bağımlılığı", "explanation": "Yerel partner tek operatörse, o ağın kapsama boşluğunda veri yoktur; multi-network profil tercih edilmelidir." },
      { "id": "rf2", "title": "QR'ı Uçakta Aktive Edip Süre Yakmak", "explanation": "Aktivasyon ilk bağlantıda başlar; havaalanına inmeden tarama süreyi boşa harcatır." }
    ],
    "questions": [
      { "id": "q1", "question": "Bu eSIM hedef ülkede hangi operatör ağını kullanıyor, multi-network mü?", "whyItMatters": "Kapsama kalitesi sağlayıcıdan değil altyapı operatöründen gelir.", "target": 'seller' },
      { "id": "q2", "question": "Kota aşımı ve uzatma nasıl işliyor, hotspot destekleniyor mu?", "whyItMatters": "Aşım anında ek satın alma ve paylaşım desteği kullanım planını değiştirir.", "target": 'seller' },
      { "id": "q3", "question": "Fiziksel SIM'imi yedeğe alıp APN ayarlarını kaydettim mi?", "whyItMatters": "Ana hat gelen çağrı/SMS için ayrı tutulmalı; yanlış APN veri kullanımını engeller.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Tek Ülke / Kısa Seyahat", "description": "Cihaz uyumu ve kota önceliklidir.", "recommendedCriteriaIds": ["cihaz-uyum", "kota-kullanim"] },
      { "id": "ileri", "title": "Çok Ülke / Uzun Seyahat", "description": "Multi-network, aktivasyon ve fiyat modeli önceliklidir.", "recommendedCriteriaIds": ["kapsama-altyapi", "aktivasyon-sure", "fiyat-model"] }
    ],
    "relatedGuideIds": ["internet-paketi-secerken", "ucak-bileti-alirken", "vpn-secerken"]
  },
  {
    "id": "internet-paketi-secerken",
    "slug": "internet-paketi-secerken",
    "categorySlug": "dijital-hizmetler",
    "title": "İnternet Paketi Seçerken Nelere Dikkat Edilmeli?",
    "shortTitle": "İnternet Paketi Seçerken",
    "description": "İnternet paketi seçerken nelere dikkat edilmeli? Altyapı türü ve gerçek hız, taahhüt ve kampanya süresi, kurulum ücreti, fatura kalemleri ve taahhüt sonu fiyat kriterlerine göre seçim rehberi.",
    "intro": [
      "İnternet paketi seçiminde reklam hızı değil altyapı gerçeği esastır: binanın altyapısı (VDSL/fiber) mümkün olan en yüksek hızı belirler.",
      "Kampanya süresi bitiminde gelen gerçek fiyat ve taahhüt kesintisi, toplam maliyetin asıl kalemleridir."
    ],
    "keywords": ["internet paketi seçerken nelere dikkat edilmeli", "fiber internet", "internet taahhüt", "internet kampanya", "hız testi", "internet altyapısı sorgulama"],
    "aliases": ["fiber paketi", "tarife seçimi", "internet aboneliği"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "altyapi-hiz", "title": "Altyapı Türü ve Gerçek Hız", "description": "Binada fiber varsa 100+ Mbps mümkündür; VDSL'de mesafeye göre 20-50 Mbps realistic sınırdaadır. Altyapı sorgusu adres bazlı yapılır.", "importance": 'critical' },
      { "id": "kampanya-taahhut", "title": "Kampanya Süresi ve Taahhüt", "description": "İlk 3-12 ay indirimli fiyat, sonrası liste fiyatı; taahhüt bitişi ve erken iptal kesintisi yazılı öğrenilir.", "importance": 'critical' },
      { "id": "kurulum-ucret", "title": "Kurulum ve Cihaz Ücreti", "description": "Kurulum bedava görünen tarifelerde modem kiraları ve depozito; kendi modem kullanma hakkı maliyeti düşürür.", "importance": 'important' },
      { "id": "fatura-kalemleri", "title": "Fatura Kalemleri ve TV Paketleri", "description": "Veri iletim ücreti, TV/mevcudat paketleri ve kampanya dönüşü; birleşik faturalarda IPTV ücreti sınırlı olabilir.", "importance": 'important' },
      { "id": "destek-kesinti", "title": "Servis Desteği ve Kesinti Geçmişi", "description": "Bölgedeki kullanıcı yorumlarında kesinti sıklığı ve teknik destek kalitesi; sabit IP/iş paketleri ek gereksinimdir.", "importance": 'useful' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Adresimin altyapısını ve mümkün hızları sorguladım.", "importance": 'critical' },
      { "id": "c2", "text": "Kampanya süresini, sonraki fiyatı ve taahhüt şartlarını okudum.", "importance": 'critical' },
      { "id": "c3", "text": "Kurulum/modem ücretlerini ve kendi modem hakkını sordum.", "importance": 'important' },
      { "id": "c4", "text": "Tüm fatura kalemlerini listelettim.", "importance": 'important' },
      { "id": "c5", "text": "Bölge yorumlarında kesinti ve destek deneyimlerini araştırdım.", "importance": 'useful' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "'1 Gbps' Ama Binada Fiber Yok", "explanation": "Reklam hızı bina altyapısıyla sunulamıyorsa abone VDSL hızına düşer; altyapı sorgusu olmadan sözleşme imzalanmamalıdır." },
      { "id": "rf2", "title": "Sonsuz Kampanya Vaadi", "explanation": "Süresiz indirim vaadi genelde 12. aydan sonra liste fiyatına döner; yazılı madde aranmalıdır." }
    ],
    "questions": [
      { "id": "q1", "question": "Adresimde hangi altyapı mevcut ve taahhüt edilen hızın altı yüzde ne olur?", "whyItMatters": "Taahhüt edilen hızın altında kalındığında cayma ve ücret iadesi hakları doğar.", "target": 'seller' },
      { "id": "q2", "question": "Kampanya bitiminde fatura kaç TL olacak, taahhüt kesintisi nasıl işliyor?", "whyItMatters": "Gerçek yıllık maliyet kampanya sonrası fiyatla hesaplanır.", "target": 'seller' },
      { "id": "q3", "question": "Modem ayarlarını ve kanal seçimini teknik destekle optimize ettim mi?", "whyItMatters": "Kablolu/Wi-Fi kanal karmaşası hızın %30'una kadar kaybına yol açar.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Temel Kullanım / Bireysel", "description": "Altyapı gerçekliği ve kampanya koşulları önceliklidir.", "recommendedCriteriaIds": ["altyapi-hiz", "kampanya-taahhut"] },
      { "id": "ileri", "title": "Yoğun Kullanım / Uzaktan Çalışma", "description": "Yüksek hız, sabit IP ve servis kalitesi önceliklidir.", "recommendedCriteriaIds": ["kurulum-ucret", "fatura-kalemleri", "destek-kesinti"] }
    ],
    "relatedGuideIds": ["wifi-router-alirken", "mesh-wifi-alirken", "esim-secerken", "vpn-secerken"]
  },
  {
    "id": "vpn-secerken",
    "slug": "vpn-secerken",
    "categorySlug": "dijital-hizmetler",
    "title": "VPN Seçerken Nelere Dikkat Edilmeli?",
    "shortTitle": "VPN Seçerken",
    "description": "VPN seçerken nelere dikkat edilmeli? Kayıt tutmama (no-log) politikası ve bağımsız denetim, hız kaybı, sunucu ağı, protokol desteği ve fiyat modeli kriterlerine göre seçim rehberi.",
    "intro": [
      "VPN seçiminde ilk soru güven değil kimlik politikasıdır: log tutmayan ve bu iddiayı bağımsız denetimle kanıtlayan sağlayıcı tercih edilmelidir.",
      "Ücretsiz VPN'ler ürün değil sizsinizdir; trafik verisi ve bant genişliği satışı yaygın modeldir."
    ],
    "keywords": ["vpn seçerken nelere dikkat edilmeli", "no log vpn", "vpn hız kaybı", "ücretsiz vpn riskleri", "wireguard vpn", "vpn denetim raporu"],
    "aliases": ["vpn servisi", "sanal özel ağ", "proxy alternatifi"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "no-log-denetim", "title": "No-Log Politikası ve Denetim", "description": "Bağımsız denetim raporu (Big4 veya uzman firma) ve şeffaf geçmiş; mahkeme taleplerinde veri verememe geçmişi güçlü göstergedir.", "importance": 'critical' },
      { "id": "hiz-kayip", "title": "Hız Kaybı ve Protokoller", "description": "WireGuard/OpenVPN desteği; sunucu yoğunluğuna bağlı hız kaybı idealde %20-40 bandında kalır.", "importance": 'critical' },
      { "id": "sunucu-agı", "title": "Sunucu Ağı ve Ülke Dağılımı", "description": "Kullanım amacına göre (coğrafi içerik, gizlilik) hedef ülkelerde yeterli sunucu ve sanal konum desteği.", "importance": 'important' },
      { "id": "cihaz-es-zamanli", "title": "Cihaz Sayısı ve Eş Zamanlı Kullanım", "description": "Aynı anda 5-10 cihaz; router seviyesinde kurulum desteği tüm ağı korur.", "importance": 'important' },
      { "id": "fiyat-iade", "title": "Fiyat Modeli ve İade Penceresi", "description": "Uzun dönem planlar aylık maliyeti düşürür; 30 gün iade garantisi deneme imkânı verir.", "importance": 'useful' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "No-log iddiasının bağımsız denetim raporunu kontrol ettim.", "importance": 'critical' },
      { "id": "c2", "text": "Kendi hız testlerimle hız kaybını ölçtüm.", "importance": 'critical' },
      { "id": "c3", "text": "Hedef ülkelerdeki sunucu varlığını doğruladım.", "importance": 'important' },
      { "id": "c4", "text": "Cihaz limitini ve router desteğini kontrol ettim.", "importance": 'important' },
      { "id": "c5", "text": "Fiyat modelini ve iade penceresini karşılaştırdım.", "importance": 'useful' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Ücretsiz VPN Verilerinizi Satıyor", "explanation": "Ücretsiz modellerde gelir; kullanıcı trafiği ve bant genişliğinin üçüncü taraflara satışıdır." },
      { "id": "rf2", "title": "Denetim Raporsuz 'Askeri Seviye' İddiaları", "explanation": "Pazarlama iddiaları denetimle desteklenmiyorsa teknik değer taşımaz." }
    ],
    "questions": [
      { "id": "q1", "question": "Son bağımsız denetim raporu ne zaman yayımlandı ve kapsamı nedir?", "whyItMatters": "No-log iddiasının kanıtı periyodik denetimdir.", "target": 'seller' },
      { "id": "q2", "question": "Hangi protokoller destekleniyor ve hızı etkileyen faktörler neler?", "whyItMatters": "Eski protokoller hem yavaş hem güvenlik açısından zayıftır.", "target": 'seller' },
      { "id": "q3", "question": "Kill-switch özelliğini ve DNS sızıntı testini yaptım mı?", "whyItMatters": "Bağlantı koptuğunda kill-switch olmayan VPN gerçek IP'yi açığa çıkarır.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Gizlilik / Günlük Kullanım", "description": "No-log ve denetim önceliklidir.", "recommendedCriteriaIds": ["no-log-denetim", "cihaz-es-zamanli"] },
      { "id": "ileri", "title": "Streaming / Yoğun Trafik", "description": "Hız, sunucu ağı ve protokol önceliklidir.", "recommendedCriteriaIds": ["hiz-kayip", "sunucu-agı", "fiyat-iade"] }
    ],
    "relatedGuideIds": ["internet-paketi-secerken", "wifi-router-alirken", "esim-secerken"]
  },

  {
    "id": "nakliyat-firmasi-secerken",
    "slug": "nakliyat-firmasi-secerken",
    "categorySlug": "ev-yasam",
    "title": "Nakliyat Firması Seçerken Nelere Dikkat Edilmeli?",
    "shortTitle": "Nakliyat Firması Seçerken",
    "description": "Nakliyat firması seçerken nelere dikkat edilmeli? UTD yetki belgesi, sigorta kapsamı, keşif ve sabit fiyat, paketleme standardı ve referans kontrolü kriterlerine göre seçim rehberi.",
    "intro": [
      "Nakliyat seçiminde en kritik belge UTD (Ulaştırma ve Taşımacılık Düzenleme) yetki belgesidir; belgesiz firmalarda zarar ihtimalinde hak iddiası zordur.",
      "Telefonla değil yerinde keşif sonrası yazılı sabit fiyat; eşya sigortası ve ambalaj kalitesi riskinizi doğrudan belirler."
    ],
    "keywords": ["nakliyat firması seçerken nelere dikkat edilmeli", "evden eve nakliyat", "utd belgesi nakliyat", "nakliyat sigortası", "nakliyat keşif", "şehiriçi nakliyat"],
    "aliases": ["evden eve nakliyat", "taşımacılık", "nakliye"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "utd-belge", "title": "UTD Yetki Belgesi", "description": "Firmanın resmi taşımacılık yetkisi olduğunu gösterir; Ulaştırma ve Altyapı Bakanlığı sorgusu ile doğrulanır.", "importance": 'critical' },
      { "id": "sigorta-kapsam", "title": "Eşya Sigortası ve Teminat", "description": "Nakliyat sorumluluk sigortası ayrıdır; paket halinde mi, değer beyanına göre mi olduğu netleştirilir.", "importance": 'critical' },
      { "id": "kesif-fiyat", "title": "Yerinde Keşif ve Sabit Fiyat", "description": "Eşya hacmini yerinde gören firma yazılı sabit fiyat verir; telefon fiyatı taşı günü artabilir.", "importance": 'critical' },
      { "id": "paketleme-ekip", "title": "Paketleme Standardı ve Ekip", "description": "Balonlu naylon/karton/oda koruma; personel kendi çalışanları mı sözleşmeli mi, asansörlü taşıma seçeneği.", "importance": 'important' },
      { "id": "referans-yorum", "title": "Referans ve Yorum Kontrolü", "description": "Google/Şikayetvar yorumlarında hasar çözüm hikâyesi; fiziksel ofis ziyareti güven verir.", "importance": 'useful' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "UTD yetki belgesini sorguladım ve görmek istedim.", "importance": 'critical' },
      { "id": "c2", "text": "Sigorta teminatını ve hasar halinde süreci yazılı aldım.", "importance": 'critical' },
      { "id": "c3", "text": "Yerinde keşif istedim; sabit fiyatı yazılı teklif olarak aldım.", "importance": 'critical' },
      { "id": "c4", "text": "Paketleme malzemesini, asansör ve ekip yapısını netleştirdim.", "importance": 'important' },
      { "id": "c5", "text": "Referans yorumlarını ve ofis bilgisini kontrol ettim.", "importance": 'useful' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Telefonla Anlık Fiyat ve Nakit Talebi", "explanation": "Keşifsiz verilen fiyat taşı günü 'ek eşya' bahanesiyle artırılır; peşin nakit talebi de risk sinyalidir." },
      { "id": "rf2", "title": "Sadece Cep Telefonu/İnternet Sayfası Firma", "explanation": "Fiziksel adres ve araç plakası belli olmayan firmalarda hasar sonrası muhatap bulunamaz." }
    ],
    "questions": [
      { "id": "q1", "question": "UTD belge numaranız nedir, sigorta poliçesi kapsamı nedir?", "whyItMatters": "Belge ve sigorta, zarar halinde yasal takibin tek dayanağıdır.", "target": 'seller' },
      { "id": "q2", "question": "Fiyat hangi kalemleri içeriyor, taşı günü ek ücret olabilir mi?", "whyItMatters": "Sabit olmayan teklifler gün içinde değişir; yazılı kapsam şarttır.", "target": 'seller' },
      { "id": "q3", "question": "Kıymetli eşyaları ve evrakları ayrı mı taşıyorum?", "whyItMatters": "Sigorta süreci bile uzun sürebilir; para, takı ve belge asla kamyona girmemelidir.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Şehir İçi / Az Eşya", "description": "Belge ve sabit fiyat önceliklidir.", "recommendedCriteriaIds": ["utd-belge", "kesif-fiyat"] },
      { "id": "ileri", "title": "Şehir Dışı / Kıymetli Eşya", "description": "Sigorta, paketleme ve referans önceliklidir.", "recommendedCriteriaIds": ["sigorta-kapsam", "paketleme-ekip", "referans-yorum"] }
    ],
    "relatedGuideIds": ["tadilat-firmasi-secerken", "ev-kiralarken", "temizlik-sirketi-secerken"]
  },
  {
    "id": "tadilat-firmasi-secerken",
    "slug": "tadilat-firmasi-secerken",
    "categorySlug": "ev-yasam",
    "title": "Tadilat Firması Seçerken Nelere Dikkat Edilmeli?",
    "shortTitle": "Tadilat Firması Seçerken",
    "description": "Tadilat firması seçerken nelere dikkat edilmeli? Kapsam ve metrekare birimi fiyatı, sözleşme ve ödeme planı, sigorta/güvence, referans projeler ve malzeme kalitesi kriterlerine göre seçim rehberi.",
    "intro": [
      "Tadilatta en büyük risk kapsam belirsizliğidir: 'metrekare başı X TL' fiyatının neleri kapsadığı sözleşmede madde madde yazılmalıdır.",
      "Ödeme planı işin aşamalarına bağlanmalı; peşinat yüksekse ve aşama kontrolü yoksa iş yarıda kalma riski büyür."
    ],
    "keywords": ["tadilat firması seçerken nelere dikkat edilmeli", "ev tadilatı", "tadilat sözleşmesi", "metrekare tadilat fiyatı", "tadilat ödeme planı", "mutfak banyo tadilatı"],
    "aliases": ["tadilat", "renovasyon", "inşaat tadilat"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "kapsam-sozlesme", "title": "Kapsam ve Sözleşme", "description": "İş kapsamı (kırım, sıva, boya, tesisat, elektrik), malzeme sahipliği ve bitiş tarihi sözleşmede maddelenir.", "importance": 'critical' },
      { "id": "birim-fiyat", "title": "Birim Fiyat ve Ek İş Kalemleri", "description": "Metrekare birim fiyatının kapsamı ve ek kalemlerin birim fiyatları önceden listelenmelidir; sürpriz kalemler en büyük maliyet kaynağıdır.", "importance": 'critical' },
      { "id": "odeme-plani", "title": "Aşamalı Ödeme Planı", "description": "Peşinat + aşama (kırım, alçı, boya) bazlı ödeme; son ödeme teslim ve temizlik sonrasına bırakılır.", "importance": 'critical' },
      { "id": "referans-saha", "title": "Referans Projeler ve Çalışan Sigortası", "description": "Görülebilen referans ev/daire; iş kazası sigortası olmayan ekipte kaza riski mal sahibine dönebilir.", "importance": 'important' },
      { "id": "malzeme-kalite", "title": "Malzeme Marka ve Kalitesi", "description": "Sözleşmede malzeme markaları (seramik, boya, batarya) yazılır; 'aynı kalite' ifadesi yoruma açıktır.", "importance": 'important' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "İş kapsamını ve malzeme listesini sözleşmeye madde madde yazdırdım.", "importance": 'critical' },
      { "id": "c2", "text": "Birim fiyat tablosunu ve ek iş kalemlerini aldım.", "importance": 'critical' },
      { "id": "c3", "text": "Ödemeyi aşamalara bağladım, son ödemayı teslime bağladım.", "importance": 'critical' },
      { "id": "c4", "text": "Referans proje gezdim/ görsellerini istedim; sigorta sordum.", "importance": 'important' },
      { "id": "c5", "text": "Malzeme markalarını sözleşmeye eklettim.", "importance": 'important' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Yüksek Peşinat Talebi", "explanation": "Malzeme parası dengei yüksek peşinat normaldir ama işin %50'sinden fazlası peşin isteniyorsa risk yüksektir." },
      { "id": "rf2", "title": "Yazılı Sözleşmesiz 'Tamirci' Çalışması", "explanation": "Sözleşmesiz işte fiyat artışı, yarım bırakma ve malzeme değişimi karşısında hukuki zemin yoktur." }
    ],
    "questions": [
      { "id": "q1", "question": "Metrekare fiyatına hangi işler dahil, hangileri ek ücret?", "whyItMatters": "Kapsam dışı işler toplam maliyeti %30-50 artırabilir.", "target": 'seller' },
      { "id": "q2", "question": "Ödeme planı aşamaları neye göre kurgulanıyor?", "whyItMatters": "Aşama kontrolü, işin kalitesini ve süresini güvenceye alır.", "target": 'seller' },
      { "id": "q3", "question": "Ara kontrollerde işin hangi noktalarını kendim kontrol edeceğimi biliyorum muyum?", "whyItMatters": "Su ve elektrik altyapısı kapanmadan kontrol edilmeli; sonradan müdahale pahalıdır.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Boya / Kozmetik Yenileme", "description": "Kapsam ve birim fiyat önceliklidir.", "recommendedCriteriaIds": ["kapsam-sozlesme", "birim-fiyat"] },
      { "id": "ileri", "title": "Komple Tadilat", "description": "Ödeme planı, referans ve malzeme önceliklidir.", "recommendedCriteriaIds": ["odeme-plani", "referans-saha", "malzeme-kalite"] }
    ],
    "relatedGuideIds": ["nakliyat-firmasi-secerken", "boya-ustasi-secerken", "banyo-yaptirirken", "mutfak-yaptirirken"]
  },
  {
    "id": "boya-ustasi-secerken",
    "slug": "boya-ustasi-secerken",
    "categorySlug": "ev-yasam",
    "title": "Boya Ustası Seçerken Nelere Dikkat Edilmeli?",
    "shortTitle": "Boya Ustası Seçerken",
    "description": "Boya ustası seçerken nelere dikkat edilmeli? Yüzey hazırlığı, malzeme markası, metrekare birim fiyat, iş güvencesi ve referans kriterlerine göre seçim rehberi.",
    "intro": [
      "Boya işinin kalitesini %80 yüzey hazırlığı belirler; macun ve zemin hazırlığını atlayan usta, en iyi boyayla bile dalgalı duvar bırakır.",
      "Birim fiyat karşılaştırmasında kaç kat boya, macun ve mastik dahiliyeti netleştirilmelidir."
    ],
    "keywords": ["boya ustası seçerken nelere dikkat edilmeli", "ev boyası", "metrekare boya fiyatı", "boya macun", "plastik silikonlu boya", "boya referansı"],
    "aliases": ["boya badana", "ressam ustası", "boya işçiliği"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "yuzey-hazirlık", "title": "Yüzey Hazırlığı", "description": "Eski boya kabarması kazınmalı, çatlaklar mastiklenmeli, macun sonrası zımpara yapılmalıdır.", "importance": 'critical' },
      { "id": "malzeme-marka", "title": "Malzeme Markası ve Kat Sayısı", "description": "Sözleşmede boya markası (birinci sınıf silikonlu) ve iki kat uygulama yazılmalı; suyla inceltilmiş tek kat işçilik aldatır.", "importance": 'critical' },
      { "id": "birim-fiyat-kapsam", "title": "Birim Fiyat Kapsamı", "description": "Metrekare fiyatına macun, mastik, band ve işçilik dahil mi; tavan ve doğrama ayrı birimle mi fiyatlanır.", "importance": 'critical' },
      { "id": "guvence-temizlik", "title": "Güvence ve Temizlik", "description": "İş sonrası retuş hakkı ve mesai temizliği; mobilya/zemin koruma örtüleri ustalık göstergesidir.", "importance": 'important' },
      { "id": "referans-is", "title": "Referans İşler", "description": "Yakın tarihli bir referans adres görseli; ıslak zemin ve kenar keskinliği işçilik kalitesini ele verir.", "importance": 'useful' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Yüzey hazırlık adımlarını (kazıma, macun, zımpara) sözleşmeye yazdırdım.", "importance": 'critical' },
      { "id": "c2", "text": "Boya markası ve kat sayısını netleştirdim.", "importance": 'critical' },
      { "id": "c3", "text": "Birim fiyatın kapsamını (macun, tavan, doğrama) listelettim.", "importance": 'critical' },
      { "id": "c4", "text": "Retouch/temizlik garantisini ve koruma örtülerini konuştum.", "importance": 'important' },
      { "id": "c5", "text": "Referans iş görsellerini gördüm.", "importance": 'useful' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Macunsuz 'Hızlı ve Ucuz' Teklif", "explanation": "Macun atlanan işte çatlaklar ve gözenekler boya sonrası görünür hale gelir; kısa sürede yeniden boya gerekir." },
      { "id": "rf2", "title": "Markasız/Bidondan Boya", "explanation": "Ambalajsız boya kalitesi bilinmez; solma ve yıkanamaz yüzey riski taşır." }
    ],
    "questions": [
      { "id": "q1", "question": "Fiyata macun, mastik ve kaç kat boya dahil?", "whyItMatters": "Kapsam dışı bırakılan kalemler iş başladıktan sonra ek ücrete dönüşür.", "target": 'seller' },
      { "id": "q2", "question": "Hangi marka boyayı önerirsiniz, fatura kesiyor musunuz?", "whyItMatters": "Faturalı ve markalı malzeme, hem kalite hem sonradan tamamlama garantisidir.", "target": 'seller' },
      { "id": "q3", "question": "İş bitiminde ışık açısıyla duvar kontrolü yaptım mı?", "whyItMatters": "Yan ışıkta dalgalanma ve eksik bölgeler net görünür.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Boya Yenileme", "description": "Yüzey hazırlığı ve malzeme önceliklidir.", "recommendedCriteriaIds": ["yuzey-hazirlık", "malzeme-marka"] },
      { "id": "ileri", "title": "Komple Tadilat Boyası", "description": "Birim fiyat kapsamı ve güvence önceliklidir.", "recommendedCriteriaIds": ["birim-fiyat-kapsam", "guvence-temizlik", "referans-is"] }
    ],
    "relatedGuideIds": ["tadilat-firmasi-secerken", "temizlik-sirketi-secerken", "perde-alirken"]
  },
  {
    "id": "tesisatci-secerken",
    "slug": "tesisatci-secerken",
    "categorySlug": "ev-yasam",
    "title": "Tesisatçı Seçerken Nelere Dikkat Edilmeli?",
    "shortTitle": "Tesisatçı Seçerken",
    "description": "Tesisatçı seçerken nelere dikkat edilmeli? Uzmanlık alanı (su/gaz/ısıtma), birim fiyat ve iş kapsamı, garanti, malzeme kalitesi ve acil müdahale kriterlerine göre seçim rehberi.",
    "intro": [
      "Tesisat seçiminde ilk filtre uzmanlık alanıdır: doğalgaz tesisatı için gaz dağıtım firması yetkili tesisatçısı ister, kombi için yetkili servis avantajlıdır.",
      "Kanal açma ve petek temizliği gibi işlerde birim fiyat ve sonradan 'ek ücret' riski önceden yazılı netleştirilmelidir."
    ],
    "keywords": ["tesisatçı seçerken nelere dikkat edilmeli", "su tesisatçısı", "kanal açma", "petek temizliği", "kombi servisi", "doğalgaz tesisatçısı"],
    "aliases": ["su tesisatçısı", "tesisat ustası", "kombi ustası"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "uzmanlik-alan", "title": "Uzmanlık Alanı", "description": "Su tesisatı, doğalgaz, ısıtma ve kanalizasyon farklı yetkinlik ister; doğalgaz işlerinde gaz firması onayı şarttır.", "importance": 'critical' },
      { "id": "fiyat-kapsam", "title": "Birim Fiyat ve İş Kapsamı", "description": "Kanal açma, petek temizliği gibi işlerde araç/makine ücreti ve işçilik ayrı ayrı yazılmalıdır.", "importance": 'critical' },
      { "id": "garanti-fatura", "title": "Garanti ve Fatura", "description": "İşçilik garantisi (kaç gün/ay) ve faturalı işlem; garantili işte tekrar tıkanma ücretsiz çözülür.", "importance": 'critical' },
      { "id": "malzeme-kalite", "title": "Malzeme Kalitesi", "description": "Pimaş, rakor ve vana kalitesi; ucuz bağlantı parçalarında kısa sürede kaçak tekrarlar.", "importance": 'important' },
      { "id": "acil-mudahale", "title": "Acil Müdahale ve Bölge", "description": "Gece/hafta sonu müdahale koşulları ve bölgeli çalışma; ani kaçaklarda hız esastır.", "importance": 'useful' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "İhtiyacım olan alanda (su/gaz/ısıtma) deneyimli ve yetkili mi kontrol ettim.", "importance": 'critical' },
      { "id": "c2", "text": "İş kapsamını ve birim fiyatları yazılı aldım.", "importance": 'critical' },
      { "id": "c3", "text": "Garanti süresini ve kapsamını konuştum, fatura istedim.", "importance": 'critical' },
      { "id": "c4", "text": "Kullanılacak malzeme markasını öğrendim.", "importance": 'important' },
      { "id": "c5", "text": "Acil durum iletişimini ve çalışma bölgelerini netleştirdim.", "importance": 'useful' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Telefonda Kesin Fiyat Vermeyen 'Bakalım' Modeli", "explanation": "Yerinde gördükten sonra katlanan fiyatlar; kanal açma gibi işlerde makine ücreti sonradan eklenir." },
      { "id": "rf2", "title": "Doğalgaz İşinde Yetkisiz Usta", "explanation": "Doğalgaz tesisatı gaz açma ve denetim gerektirir; yetkisiz iş gaz açtırılamaz ve güvenlik riskidir." }
    ],
    "questions": [
      { "id": "q1", "question": "Bu işe dair işçilik garantisi veriyor musunuz, süre kaç?", "whyItMatters": "Tıkanma ve kaçak tekrarlarsı garanti olmadan her seferinde yeniden ödeme yapılır.", "target": 'seller' },
      { "id": "q2", "question": "Fiyata makine/araç ve malzeme dahil mi?", "whyItMatters": "Robotla kanal açma ücreti işçiliğin katına çıkabilir.", "target": 'seller' },
      { "id": "q3", "question": "Ana su vanasını ve kombi kapama vanalarını biliyor muyum?", "whyItMatters": "Ani kaçakta ilk müdahale kullanıcıyıdır; vana bilgisi hasarı küçültür.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Tıkanıklık / Küçük Onarım", "description": "Fiyat şeffaflığı ve garanti önceliklidir.", "recommendedCriteriaIds": ["fiyat-kapsam", "garanti-fatura"] },
      { "id": "ileri", "title": "Kombi / Doğalgaz İşleri", "description": "Yetkililik ve malzeme kalitesi önceliklidir.", "recommendedCriteriaIds": ["uzmanlik-alan", "malzeme-kalite"] }
    ],
    "relatedGuideIds": ["klima-alirken", "klima-montaji-yaptirirken", "banyo-yaptirirken", "tadilat-firmasi-secerken"]
  },
  {
    "id": "banyo-yaptirirken",
    "slug": "banyo-yaptirirken",
    "categorySlug": "ev-yasam",
    "title": "Banyo Yaptırırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Banyo Yaptırırken",
    "description": "Banyo yaptırırken nelere dikkat edilmeli? Su yalıtımı (sulama/tesisat), zemin eğimi ve süzgeç, havalandırma, malzeme seçimi ve ödeme aşamaları kriterlerine göre seçim rehberi.",
    "intro": [
      "Banyo tadilatının kalbi su yalıtımıdır; yalıtım atlanırsa alt kata sızıntı ve küf, tüm yenileme maliyetini ikiye katlar.",
      "Zemin eğimi, süzgeç konumu ve havalandırma; günlük kullanım konforunu ve koku/nem sorunlarını belirler."
    ],
    "keywords": ["banyo yaptırırken nelere dikkat edilmeli", "banyo tadilatı", "su yalıtımı banyo", "banyo zemin eğimi", "banyo seramik", "duş teknesi"],
    "aliases": ["banyo yenileme", "banyo tadilatı", "wc tadilatı"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "su-yalitim", "title": "Su Yalıtımı (Sulama)", "description": "Zemin ve duvar diplerine malzeme cinsi ve kaç kat; yalıtım sonrası su testi yapılmalıdır.", "importance": 'critical' },
      { "id": "egim-suzgec", "title": "Zemin Eğimi ve Süzgeç", "description": "Duş alanında süzgece doğru 1-2 cm eğim; biriken su küf ve kayma riski demektir.", "importance": 'critical' },
      { "id": "havalendirme", "title": "Havalandırma ve Nem Yönetimi", "description": "Mekanik aspiratör veya pencere; banyo kapısı altı hava boşluğu ve elektrik devresinin topraklaması.", "importance": 'important' },
      { "id": "malzeme-secim", "title": "Malzeme Seçimi", "description": "Kaymaz sınıf seramik, tuğla üstü yüzeyler, batarya ve süzgeç kalitesi; fuga rengi ve temizlik kolaylığı.", "importance": 'important' },
      { "id": "asama-odeme", "title": "Aşama ve Ödeme Planı", "description": "Kırım → tesisat → yalıtım → seramik → montaj sıralaması; her aşamada kontrol ve ona göre ödeme.", "importance": 'useful' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Yalıtım malzemesini, kat sayısını ve su testini sözleşmeye yazdırdım.", "importance": 'critical' },
      { "id": "c2", "text": "Zemin eğiminin süzgece doğru verildiğini aşamada kontrol ettim.", "importance": 'critical' },
      { "id": "c3", "text": "Havalandırma çözümünü ve elektrik güvenliğini konuştum.", "importance": 'important' },
      { "id": "c4", "text": "Seramik, batarya ve süzgeç markalarını netleştirdim.", "importance": 'important' },
      { "id": "c5", "text": "Aşama planını ve ödeme bağlantısını yazılı hale getirdim.", "importance": 'useful' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Yalıtımsız 'Direkt Seramik' Teklifi", "explanation": "Yalıtım kalemini düşüren teklif kısa vadede ucuz, 6 ayda alt komşu faturasıyla pahalıdır." },
      { "id": "rf2", "title": "Eğimsiz Düz Zemin", "explanation": "Su süzgece akmaz; fuga içinde biriken su koku ve küf üretir." }
    ],
    "questions": [
      { "id": "q1", "question": "Yalıtım için hangi malzeme, kaç kat uygulanacak, su testi yapılacak mı?", "whyItMatters": "Yalıtım hatası bütün tadilatı tekrar gerektirir.", "target": 'seller' },
      { "id": "q2", "question": "Seramik ve batarya fiyat farkları nasıl işleniyor?", "whyItMatters": "Malzeme sahipliği ve marka netleştirilmeden fiyat karşılaştırması yanıltıcıdır.", "target": 'seller' },
      { "id": "q3", "question": "Tesisat duvarı kapanmadan vana ve hat kontrolünü yaptım mı?", "whyItMatters": "Kapandıkan sonra müdahale kırım gerektirir.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Kozmetik Yenileme", "description": "Malzeme ve eğim önceliklidir.", "recommendedCriteriaIds": ["egim-suzgec", "malzeme-secim"] },
      { "id": "ileri", "title": "Komple Banyo Tadilatı", "description": "Yalıtım ve aşama planı önceliklidir.", "recommendedCriteriaIds": ["su-yalitim", "havalendirme", "asama-odeme"] }
    ],
    "relatedGuideIds": ["tadilat-firmasi-secerken", "tesisatci-secerken", "mutfak-yaptirirken", "isi-yalitimi-yaptirirken"]
  },
  {
    "id": "mutfak-yaptirirken",
    "slug": "mutfak-yaptirirken",
    "categorySlug": "ev-yasam",
    "title": "Mutfak Yaptırırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Mutfak Yaptırırken",
    "description": "Mutfak yaptırırken nelere dikkat edilmeli? Üçgen planlama ve ölçüler, dolap gövde/kapak malzemesi, tezgah ve evye, elektrik/su noktaları ve bütçe dağılımı kriterlerine göre seçim rehberi.",
    "intro": [
      "Mutfak tadilatında estetikten önce ergonomi gelir; çalışma üçgeni (buzdolabı-tezgah-evye) ve tezgah boşluk uzunluğu kullanım kalitesini belirler.",
      "Dolapta gövde-kapak malzeme farkı, tezgahta dolgu/taş seçimi ve elektrik noktası planı toplam maliyet ve ömrü şekillendirir."
    ],
    "keywords": ["mutfak yaptırırken nelere dikkat edilmeli", "mutfak tadilatı", "mutfak dolabı", "tezgah seçimi", "çalışma üçgeni", "ankastre mutfak"],
    "aliases": ["mutfak yenileme", "modüler mutfak", "mutfak dolapları"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "plan-olcu", "title": "Planlama ve Ölçüler", "description": "Çalışma üçgeni ve tezgah mesafeleri; buzdolabı-kapı açılım boşlukları ve davlumbaz bacası konumu plana işlenmelidir.", "importance": 'critical' },
      { "id": "dolap-malzeme", "title": "Dolap Gövde/Kapak Malzemesi", "description": "Suntalam gövde + lak/ahşap kapak dengesi; su teması olan bölgelerde avantaj ve malzeme sınıfı ömrü belirler.", "importance": 'critical' },
      { "id": "tezgah-evye", "title": "Tezgah ve Evye", "description": "Granit/kuvars/teknik tezgah farkları; evye altı/üstü montaj ve batarya delik konumu erken karar ister.", "importance": 'critical' },
      { "id": "elektrik-su", "title": "Elektrik, Su ve Havalandırma", "description": "Priz sayısı ve konumu (ankastre set için özel noktalar), davlumbaz bacası ve su gideri yerleri; sonradan değişim pahalıdır.", "importance": 'important' },
      { "id": "butce-odeme", "title": "Bütçe Dağılımı ve Ödeme", "description": "Malzeme-işçilik oranı ve aşamalı ödeme; ankastre cihazların bütçe payı önceden ayrılmalıdır.", "importance": 'useful' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Çalışma üçgeni ve tezgah boşluklarını plan üzerinde kontrol ettim.", "importance": 'critical' },
      { "id": "c2", "text": "Gövde ve kapak malzemelerini, sunta sınıfını netleştirdim.", "importance": 'critical' },
      { "id": "c3", "text": "Tezgah türünü ve evye-batarya yerleşimini karar verdim.", "importance": 'critical' },
      { "id": "c4", "text": "Priz-su-baca noktalarını elektrikçi ve tesisatçıyla eş zamanlı planladım.", "importance": 'important' },
      { "id": "c5", "text": "Bütçeyi cihazlar dahil toplam olarak kurguladım.", "importance": 'useful' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Ölçüsüz 'Göz Kararı' Dolap", "explanation": "Yerinde keşif ve lazer ölçüm olmadan verilen fiyat; montaj günü çıkan problemler ek maliyet yaratır." },
      { "id": "rf2", "title": "Cihazsız Bütçe", "explanation": "Ankastre set ve davlumbaz bütçesi sonradan hatırlanınca maliyet %40'a kadar artar." }
    ],
    "questions": [
      { "id": "q1", "question": "Fiyata montaj, tezgah ve aksesuar (menteşe, ray) dahil mi?", "whyItMatters": "Aksesuar ve tezgah kalemleri toplamı dolabın yarı fiyatına ulaşabilir.", "target": 'seller' },
      { "id": "q2", "question": "Gövde ve kapak garantisi nasıl, su şişmesi (kabarma) kapsamda mı?", "whyItMatters": "Mutfak dolaplarının en sık arızası su buharına bağlı şişmedir.", "target": 'seller' },
      { "id": "q3", "question": "Cihaz ölçülerini ve priz planını montaj öncesi yazılı doğruladım mı?", "whyItMatters": "Ankastre fırın boyu ve set genişliği uymazsa yeniden imalat gerekir.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Dolap Yenileme", "description": "Malzeme ve ölçü doğruluğu önceliklidir.", "recommendedCriteriaIds": ["dolap-malzeme", "plan-olcu"] },
      { "id": "ileri", "title": "Komple Mutfak Tadilatı", "description": "Tezgah, altyapı ve bütçe planlaması önceliklidir.", "recommendedCriteriaIds": ["tezgah-evye", "elektrik-su", "butce-odeme"] }
    ],
    "relatedGuideIds": ["banyo-yaptirirken", "tadilat-firmasi-secerken", "ankastre-firin-alirken", "espresso-makinesi-alirken"]
  },
  {
    "id": "pvc-pencere-alirken",
    "slug": "pvc-pencere-alirken",
    "categorySlug": "ev-yasam",
    "title": "PVC Pencere Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "PVC Pencere Alırken",
    "description": "PVC pencere alırken nelere dikkat edilmeli? Profil sınıfı ve oda sayısı, cam paketi (çift/üç katman ve Ug), donanım ve su yalıtımı, montaj kalitesi ve ölçü doğruluğu kriterlerine göre seçim rehberi.",
    "intro": [
      "PVC pencerede fiyatı üç şey belirler: profil sınıfı, cam paketi değeri (Ug) ve montaj kalitesi. En iyi pencere kötü montajla performersını yitirir.",
      "Isı yalıtımı için üç katmanlı düşük emisyonlu (low-e) cam ve argon dolgu; gürültü için asimetrik kalınlık cam tercih edilir."
    ],
    "keywords": ["pvc pencere alırken nelere dikkat edilmeli", "pvc pencere fiyatı", "cam paketi ug değeri", "üç katmanlı cam", "pencere montajı", "ısı yalıtımı pencere"],
    "aliases": ["pvc doğrama", "pencere yenileme", "çift cam"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "profil-sinif", "title": "Profil Sınıfı ve Oda Sayısı", "description": "Profile odacık sayısı (3-6 oda) ve duvar kalınlığı; sınıfı bilinen (ör. A sınıfı) profiller uzun ömürlüdür.", "importance": 'critical' },
      { "id": "cam-paketi", "title": "Cam Paketi ve Ug Değeri", "description": "Çift/üç katman, low-e kaplama ve argon dolgu; Ug 1,0 W/m²K altı iyi yalıtım, asimetrik cam gürültüyü azaltır.", "importance": 'critical' },
      { "id": "donanim-su", "title": "Donanım ve Su Yalıtımı", "description": "Çok noktalı kilit, kollu açılım ve su tahliye kanalları; markalı donanım (ör. Roto/Vorne tipi) ömür garantisidir.", "importance": 'important' },
      { "id": "montaj-olcu", "title": "Montaj Kalitesi ve Ölçü", "description": "Lazer ölçüm, poliütan köpük ve dış denizlik; köpüksüz/silikonsuz montaj ısı köprüsü ve su kaçağı yapar.", "importance": 'critical' },
      { "id": "garanti-servis", "title": "Garanti ve Servis", "description": "Profil-cam-donanım garantileri ve yerel servis; ayar hizmeti 5-10 yıl içinde gerekebilir.", "importance": 'useful' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Profil markasını, oda sayısını ve sınıf belgesini sordum.", "importance": 'critical' },
      { "id": "c2", "text": "Cam paketinin katman, kaplama ve Ug değerini öğrendim.", "importance": 'critical' },
      { "id": "c3", "text": "Donanım markasını ve su tahliye yapısını kontrol ettim.", "importance": 'important' },
      { "id": "c4", "text": "Montaj yöntemini (köpük, denizlik, lazer ölçü) netleştirdim.", "importance": 'critical' },
      { "id": "c5", "text": "Garanti kapsamını ve servis ayar hizmetini yazılı aldım.", "importance": 'useful' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Cam Paketi Değeri Belli Olmayan Teklif", "explanation": "Ug değeri yazılmayan teklifte çift katmanlı cam low-e olmadan gelebilir; ısı farkı ciddi olur." },
      { "id": "rf2", "title": "Köpüksüz/Sadece Silikon Montaj", "explanation": "Boşluk bırakan montaj hem ısı kaybı hem zamanla iç yüzeyde küf yapar." }
    ],
    "questions": [
      { "id": "q1", "question": "Profil sınıfı ve cam paketi Ug değeri yazılı teklifte geçiyor mu?", "whyItMatters": "Aynı görünen pencereler arasındaki fiyat farkının asıl nedeni bu iki değerdir.", "target": 'seller' },
      { "id": "q2", "question": "Montaj köpük + denizlik dahil mi, iç denizlik profili kim yapıyor?", "whyItMatters": "İç denizlik (denizlik silikonu) genelde alçı boyası ustasıyla karışır; sorumluluk netleşmelidir.", "target": 'seller' },
      { "id": "q3", "question": "Isı kamera ya da mum testiyle montaj sonrası hava kaçaklarını kontrol ettim mi?", "whyItMatters": "Kötü montaj ancak uygulamadan sonra fark edilir; erken müdahale ucuzdur.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Standart Yenileme", "description": "Profil sınıfı ve cam paketi önceliklidir.", "recommendedCriteriaIds": ["profil-sinif", "cam-paketi"] },
      { "id": "ileri", "title": "Isı/Ses Yalıtım Odaklı", "description": "Üç katman, donanım ve montaj önceliklidir.", "recommendedCriteriaIds": ["cam-paketi", "donanim-su", "montaj-olcu"] }
    ],
    "relatedGuideIds": ["isi-yalitimi-yaptirirken", "klima-alirken", "tadilat-firmasi-secerken", "perde-alirken"]
  },
  {
    "id": "isi-yalitimi-yaptirirken",
    "slug": "isi-yalitimi-yaptirirken",
    "categorySlug": "ev-yasam",
    "title": "Isı Yalıtımı Yaptırırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Isı Yalıtımı Yaptırırken",
    "description": "Isı yalıtımı yaptırırken nelere dikkat edilmeli? Isı geçiş katsayısı (U) hesabı, malzeme türü ve kalınlık, mantolama uygulaması ve yangın sınıfı, teklif karşılaştırması kriterlerine göre seçim rehberi.",
    "intro": [
      "Isı yalıtımı kararında kalınlık değil hesap konuşur: bölgenizin iklim verisine göre gereken U değeri TS 825 standardıyla belirlenir.",
      "Malzeme türü, yangın sınıfı ve uygulama detayları; yalıtımın hem performansını hem güvenliğini belirleyen ölçütlerdir."
    ],
    "keywords": ["ısı yalıtımı", "ısı yalıtımı yaptırırken nelere dikkat edilmeli", "mantolama", "u değeri", "ts 825", "mantolama fiyatları"],
    "aliases": ["mantolama", "dış cephe yalıtımı", "ısı yalıtımı"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "u-hesap", "title": "U Değeri Hesabı", "description": "Yalıtım kalınlığı dile değil hesaba konuşulur: TS 825'e göre bölgenin U değer hedefi karşılanmalıdır.", "importance": 'critical' },
      { "id": "malzeme-turu", "title": "Malzeme Türü ve Kalınlık", "description": "EPS (karbon katkılı), XPS ve taşyünü; kalınlık arttıkça getiri azalarak artar, optimal aralık 5-8 cm'dir.", "importance": 'critical' },
      { "id": "yangin-sinifi", "title": "Yangın Sınıfı ve Dübel", "description": "Malzemenin yangın tepkisi sınıfı ve dübel tipi; yanmaz taşyünü ile B sınıfı EPS arasında fark vardır.", "importance": 'critical' },
      { "id": "uygulama-detay", "title": "Uygulama Detayları", "description": "Yapıştırıcı + dübel kombinasyonu, köşe profilleri, denizlik ve file; eksik detay yalıtım köprüsü üretir.", "importance": 'important' },
      { "id": "teklif-karsilastir", "title": "Teklif Karşılaştırması", "description": "Aynı malzeme ve kalınlık bazında m² fiyatı; 'mantolama' kelimesi tek başına karşılaştırma ölçüsü değildir.", "importance": 'important' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Bölgem için gerekli U değerini ve hesap tablosunu istedim.", "importance": 'critical' },
      { "id": "c2", "text": "Malzeme türü, yoğunluk ve kalınlığı yazılı teklife aldırdım.", "importance": 'critical' },
      { "id": "c3", "text": "Yangın sınıfı belgesini ve dübel planını kontrol ettim.", "importance": 'critical' },
      { "id": "c4", "text": "Uygulama detaylarını (köşe, denizlik, file) konuştum.", "importance": 'important' },
      { "id": "c5", "text": "Teklifleri aynı malzeme-kalınlık bazında karşılaştırdım.", "importance": 'important' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Kalınlık Belirtilmeyen m² Fiyatı", "explanation": "3 cm ile 8 cm arası fiyat farkı iki katına çıkar; karşılaştırma ölçüsü kalınlık + malzeme olmalıdır." },
      { "id": "rf2", "title": "Dübelsiz Sadece Yapıştırma", "explanation": "Yapıştırma tek başına rüzgar yükü ve deprem senaryosunda yetersizdir; ıslak zemine yapıştırma kayma yapar." }
    ],
    "questions": [
      { "id": "q1", "question": "Hangi malzeme, kaç cm ve hangi U değerini hedefliyorsunuz?", "whyItMatters": "Yalıtım performansı bu üçlüyle tanımlanır; 'mantolama' ifadesi tek başına teknik ölçü değildir.", "target": 'seller' },
      { "id": "q2", "question": "Yangın sınıfı belgesi ve dübel adedi nasıldır?", "whyItMatters": "Yasal zorunluluk ve güvenlik kritik ölçüttür.", "target": 'seller' },
      { "id": "q3", "question": "Cephe detaylarını (denizlik, köşe, lambri) uygulamadan önce fotoğrafladım mı?", "whyItMatters": "Uygulama kapanmadan kontrol edilmezse hata sonradan ispatlanamaz.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Daire / İç Yalıtım", "description": "U değeri ve malzeme seçimi önceliklidir.", "recommendedCriteriaIds": ["u-hesap", "malzeme-turu"] },
      { "id": "ileri", "title": "Bina Dışı Mantolama", "description": "Yangın sınıfı ve uygulama detayı önceliklidir.", "recommendedCriteriaIds": ["yangin-sinifi", "uygulama-detay", "teklif-karsilastir"] }
    ],
    "relatedGuideIds": ["pvc-pencere-alirken", "klima-alirken", "tadilat-firmasi-secerken"]
  },
  {
    "id": "klima-montaji-yaptirirken",
    "slug": "klima-montaji-yaptirirken",
    "categorySlug": "ev-yasam",
    "title": "Klima Montajı Yaptırırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Klima Montajı Yaptırırken",
    "description": "Klima montajı yaptırırken nelere dikkat edilmeli? Montaj yeri ve eğim, bakır boru ve ek yerleri, vakum testi, drenaj ve elektrik hattı kriterlerine göre seçim rehberi.",
    "intro": [
      "Klimanın ömrünü ve verimini montaj belirler: vakum testi atlanan montaj, yıllar içinde gaz kaybı ve kompresör arızası üretir.",
      "İç ünite yeri, drenaj eğimi ve dış ünite gölge durumu; hem konforu hem elektrik tüketimini etkiler."
    ],
    "keywords": ["klima montajı yaptırırken nelere dikkat edilmeli", "klima montajı", "klima vakum testi", "bakır boru klima", "klima drenaj", "klima garantisi"],
    "aliases": ["klima kurulumu", "split klima montajı"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "vakum-testi", "title": "Vakum Testi ve Gaz", "description": "Boru hattı montaj sonrası vakumlanmalıdır; 'gaz salma' yöntemi nem bırakır ve kompresör ömrünü kısaltır.", "importance": 'critical' },
      { "id": "ic-unite-yer", "title": "İç Ünite Yeri ve Drenaj", "description": "Ünite yatak üstüne gelmemeli, hava üflemesi kişiye direkt yönelmemeli; drenaj hattı sürekli eğimli dışarı akmalıdır.", "importance": 'critical' },
      { "id": "bakir-boru", "title": "Bakır Boru ve Yalıtım", "description": "Standart kalınlıkta bakır boru, izoleli hat ve ek noktalarının sızdırmazlığı; kıvrım ve ezik boru verim düşürür.", "importance": 'critical' },
      { "id": "dis-unite-elektrik", "title": "Dış Ünite ve Elektrik Hattı", "description": "Gölge ve hava sirkülasyonu, titreşim takozları; klima için ayrı devre ve uygun kesit kablo şarttır.", "importance": 'important' },
      { "id": "garanti-fiyat", "title": "Montaj Fiyatı ve Garanti", "description": "Metre başı boru, konsol ve ek malzeme kalemleri; montaj garantisi klima garantisi kadar önemlidir.", "importance": 'useful' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Vakum testinin yapılacağını ve süresini montajcıya söyledim, izledim.", "importance": 'critical' },
      { "id": "c2", "text": "İç ünite yerini yatak/hava yönü ve drenaj eğimiyle planladım.", "importance": 'critical' },
      { "id": "c3", "text": "Bakır boru kalınlığını ve yalıtım malzemesini kontrol ettim.", "importance": 'critical' },
      { "id": "c4", "text": "Dış ünite yerini ve elektrik hattını elektrikçiyle koordine ettim.", "importance": 'important' },
      { "id": "c5", "text": "Montaj fiyat kalemlerini ve garanti şartlarını yazılı aldım.", "importance": 'useful' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Vakum Testi Yapılmayan Montaj", "explanation": "Nem ve hava hatta kalırsa kompresör yıllar içinde arızalanır; garanti 'montaj hatası' denerek reddedilir." },
      { "id": "rf2", "title": "Yatağa Bakan İç Ünite", "explanation": "Direkt üfleme kas ağrısı ve rahatsız uyku yaratır; ünite yatak üstüne değil yana yerleştirilmelidir." }
    ],
    "questions": [
      { "id": "q1", "question": "Montaj sonrası vakum testi yapacak mısınız, cihaz hangi süreyle vakumlanacak?", "whyItMatters": "Vakum, hattaki nemi alır; atlanması kompresör arızasının bir numaralı sebebidir.", "target": 'seller' },
      { "id": "q2", "question": "Boru metre fiyatı ve konsol/ek malzeme kalemleri nedir?", "whyItMatters": "Ucuz montaj + pahalı boru kalemleri toplamda pahalıya gelir.", "target": 'seller' },
      { "id": "q3", "question": "İlk çalıştırmada ısıtma/soğutma testi ve drenaj kontrolünü yaptırdım mı?", "whyItMatters": "Drenaj tıkanıklığı iç üniteden su damlaması olarak geri döner.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Standart Oda Montajı", "description": "Vakum ve drenaj önceliklidir.", "recommendedCriteriaIds": ["vakum-testi", "ic-unite-yer"] },
      { "id": "ileri", "title": "Uzun Hat / Yüksek Kat", "description": "Bakır boru ve elektrik altyapısı önceliklidir.", "recommendedCriteriaIds": ["bakir-boru", "dis-unite-elektrik", "garanti-fiyat"] }
    ],
    "relatedGuideIds": ["klima-alirken", "tesisatci-secerken", "klima-montaji-yaptirirken", "airfryer-alirken"]
  },
  {
    "id": "temizlik-sirketi-secerken",
    "slug": "temizlik-sirketi-secerken",
    "categorySlug": "ev-yasam",
    "title": "Temizlik Şirketi Seçerken Nelere Dikkat Edilmeli?",
    "shortTitle": "Temizlik Şirketi Seçerken",
    "description": "Temizlik şirketi seçerken nelere dikkat edilmeli? Personel sigortası ve güvenilirlik, hizmet kapsamı ve malzeme, fiyat modeli, hasar politikası ve düzenli hizmet planı kriterlerine göre seçim rehberi.",
    "intro": [
      "Temizlik hizmetinde en kritik konu personel sigortasıdır: sigortasız personel evde geçirdiği kaza veya verdiği hasar durumunda sorumluluk müşteriye döner.",
      "Hizmet kapsamı (iç/dış cam, dolap içi, fırın) ve malzeme dahiliyeti tek tek netleştirilmelidir."
    ],
    "keywords": ["temizlik şirketi seçerken nelere dikkat edilmeli", "ev temizliği", "temizlik firması", "koltuk yıkama", "personel sigortası temizlik", "derin temizlik"],
    "aliases": ["temizlik firması", "ev temizliği", "günlük temizlik"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "personel-sigorta", "title": "Personel Sigortası ve Güvenilirlik", "description": "SGK'lı personel ve firma sorumluluk sigortası; kimlik/kamera denetimi ve personel devir süresi güven göstergesidir.", "importance": 'critical' },
      { "id": "hizmet-kapsam", "title": "Hizmet Kapsamı ve Malzeme", "description": "Cam, dolap içi, fırın, banyo detayları ve halı/koltuk işlemi; malzeme firmadan mı, fiyat kapsamına dahil mi.", "importance": 'critical' },
      { "id": "fiyat-model", "title": "Fiyat Modeli", "description": "m² bazlı/saat bazlı/kişi bazlı modeller; minimum saat ve ulaşım ücreti kalemleri karşılaştırmada normalize edilir.", "importance": 'critical' },
      { "id": "hasar-politika", "title": "Hasar ve Şikayet Politikası", "description": "Kırılan/çizilen eşya için tazmin süreci ve yazılı taahhüt; hasar anında fotoğraf ve tutanak düzeni.", "importance": 'important' },
      { "id": "duzenli-plan", "title": "Düzenli Hizmet ve Anahtar Güvenliği", "description": "Aynı ekip ile periyodik hizmet; anahtar teslimi ve giriş-çıkış bildirimi protokolü.", "importance": 'useful' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Personel sigortası ve firma sorumluluk sigortasını sordum.", "importance": 'critical' },
      { "id": "c2", "text": "Hizmet kapsamını ve malzeme dahilietini listelettim.", "importance": 'critical' },
      { "id": "c3", "text": "Fiyat modelini, minimum saat ve ek kalemleri netleştirdim.", "importance": 'critical' },
      { "id": "c4", "text": "Hasar halinde süreci yazılı olarak aldım.", "importance": 'important' },
      { "id": "c5", "text": "Düzenli hizmet ve anahtar protokolünü konuştum.", "importance": 'useful' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Sigortasız Günübirlik İlan Personeli", "explanation": "Olmayan kaza ve hasar senaryosunda muhatap yoktur; sorumluluk ev sahibine kalır." },
      { "id": "rf2", "title": "Kapsamsız 'Genel Temizlik' İfadesi", "explanation": "Cam, fırın, dolap içi gibi kalemler hizmet günü 'dahil değil' diye ek ücrete döner." }
    ],
    "questions": [
      { "id": "q1", "question": "Personeliniz SGK'lı mı, firma sorumluluk sigortanız var mı?", "whyItMatters": "Kaza ve hasar riskini firma sigortası karşılamıyorsa bedel müşteriye döner.", "target": 'seller' },
      { "id": "q2", "question": "Bu fiyat hangi kalemleri kapsıyor, malzeme sizden mi geliyor?", "whyItMatters": "Kapsam ve malzeme kalemleri toplam maliyeti %30 değiştirir.", "target": 'seller' },
      { "id": "q3", "question": "Hizmet bitimindekontrol listesiyle kontrol yaptım mı?", "whyItMatters": "Kapsam listesiyle bitiş kontrolü, eksik işçilik iddiasını baştan çözer.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Periyodik / Haftalık", "description": "Sigorta ve fiyat modeli önceliklidir.", "recommendedCriteriaIds": ["personel-sigorta", "fiyat-model"] },
      { "id": "ileri", "title": "Taşınma / Derin Temizlik", "description": "Kapsam, hasar politikası ve plan önceliklidir.", "recommendedCriteriaIds": ["hizmet-kapsam", "hasar-politika", "duzenli-plan"] }
    ],
    "relatedGuideIds": ["nakliyat-firmasi-secerken", "temizlik-sirketi-secerken", "robot-supurge-alirken", "dikey-supurge-alirken"]
  },


  {
    "id": "valiz-alirken",
    "slug": "valiz-alirken",
    "categorySlug": "giyim-aksesuar",
    "title": "Valiz Alırken Nelere Dikkat Edilmeli?",
    "shortTitle": "Valiz Alırken",
    "description": "Valiz alırken nelere dikkat edilmeli? Boyut ve hacim (kabin/check-in), sert yumuşak gövde kararı, tekerlek ve kol sistemi, kilitleme ve malzeme kriterlerine göre seçim rehberi.",
    "intro": [
      "Valiz seçiminde ilk karar boyuttur: kabin (55 cm) mı, check-in (65-75 cm) mi? Havayolu ölçü limitleri ve seyahat süresi bu kararı belirler.",
      "Sert gövde darbeye, yumuşak gövde hacme ve esnekliğe avantaj sağlar; tekerlek, kol ve fermuar kalitesi ürünün gerçek ömrünü belirler."
    ],
    "keywords": ["valiz", "valiz alırken nelere dikkat edilmeli", "kabin valizi", "seyahat valizi", "sert valiz", "alüminyum valiz"],
    "aliases": ["kabin valizi", "suitcase", "seyahat çantası"],
    "estimatedReadTimeMinutes": 4,
    "lastUpdated": "2026-09-15",
    "status": 'published',
    "importanceItems": [
      { "id": "boyut-hacim", "title": "Boyut ve Hacim", "description": "Kabin için 55 cm/36-40 L; 1 hafta üstü için 65-75 cm. Havayolu kabin ölçü limitleri (genelde 55x40x20) kontrol edilmelidir.", "importance": 'critical' },
      { "id": "govde-tipi", "title": "Sert mi Yumuşak mı", "description": "Sert gövde darbe ve nem koruması verir; yumuşak gövde hafif, genişler ve dış cepheye erişim sağlar.", "importance": 'critical' },
      { "id": "tekerlek-kol", "title": "Tekerlek ve Kol Sistemi", "description": "360 derece dönen çift tekerlek seti, teleskopik kolun kilitlenmesi; kol içte kalmalı ve tek elle açılmalıdır.", "importance": 'critical' },
      { "id": "kilit-guvenlik", "title": "Kilitleme ve Güvenlik", "description": "TSA kilidi uluslararası uçuşlarda güvenlik açabilir; fermuar koruma örgüsü (anti-theft) ek güvenlik sağlar.", "importance": 'important' },
      { "id": "malzeme-agirlik", "title": "Malzeme ve Ağırlık", "description": "Polikarbonat hafif ve esnek, ABS ekonomik, alüminyum dayanıklı ama ağır; boş ağırlık bagaj hakkını yer.", "importance": 'important' }
    ],
    "checklistItems": [
      { "id": "c1", "text": "Seyahat süreme ve havayolu limitlerine göre boyutu belirledim.", "importance": 'critical' },
      { "id": "c2", "text": "Sert/yumuşak gövde kararını kullanım biçimime göre verdim.", "importance": 'critical' },
      { "id": "c3", "text": "Tekerlekleri ve kol kilidini yüklü olarak denedim.", "importance": 'critical' },
      { "id": "c4", "text": "TSA kilidi ve fermuar güvenliğini kontrol ettim.", "importance": 'important' },
      { "id": "c5", "text": "Boş ağırlığını ve malzeme türünü karşılaştırdım.", "importance": 'important' }
    ],
    "redFlags": [
      { "id": "rf1", "title": "Ucuz Plastik Tek Kol Mekanizması", "explanation": "Kol yatağı en sık arıza noktasıdır; yüklü valizle kol içe çöker ve taşıma imkansızlaşır." },
      { "id": "rf2", "title": "Kabına Sığmayan 'Kabin' İddiası", "explanation": "Listede kabin yazan bazı modeller tekerlek ve kol dahil ölçüde sınırı aşar; gate'te ek ücret doğurur." }
    ],
    "questions": [
      { "id": "q1", "question": "Tekerlek ve kol dahil dış ölçüler kaç cm, hangi havayolu kabin standardına uyuyor?", "whyItMatters": "Kabin uygunluğu gövde ölçüsü değil tekerlek-kol dahil toplam ölçüyle belirlenir.", "target": 'seller' },
      { "id": "q2", "question": "Tekerlek ve kol mekanizmasının garantisi var mı?", "whyItMatters": "Bu parçaların servisi olmayan valizler bir seasonda kullanılamaz hale gelir.", "target": 'seller' },
      { "id": "q3", "question": "Sık uçtuğum havayolunun kabin ölçü ve ağırlık limitini kontrol ettim mi?", "whyItMatters": "Şirket bazlı farklar 55-56 cm ve 7-10 kg arasında değişir.", "target": 'self' }
    ],
    "scenarios": [
      { "id": "temel", "title": "Kısa / Hafta Sonu Seyahat", "description": "Kabin ölçüleri ve hafiflik önceliklidir.", "recommendedCriteriaIds": ["boyut-hacim", "malzeme-agirlik"] },
      { "id": "ileri", "title": "Uzun / Check-in Seyahat", "description": "Dayanıklılık, tekerlek ve güvenlik önceliklidir.", "recommendedCriteriaIds": ["govde-tipi", "tekerlek-kol", "kilit-guvenlik"] }
    ],
    "relatedGuideIds": ["ucak-bileti-alirken", "arac-kiralarken", "sirt-cantasi-alirken", "park-yatak-alirken"]
  },


  
];

export function getGuideBySlug(categorySlug: string, slug: string): Guide | undefined {
  return GUIDES.find(g => g.categorySlug === categorySlug && g.slug === slug);
}

export function getGuideById(id: string): Guide | undefined {
  return GUIDES.find(g => g.id === id);
}

export function getGuidesByCategory(categorySlug: string): Guide[] {
  return GUIDES.filter(g => g.categorySlug === categorySlug);
}

export function getPopularGuides(limit = 6): Guide[] {
  return GUIDES.slice(0, limit);
}

export function getLatestGuides(limit = 6): Guide[] {
  return [...GUIDES].sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()).slice(0, limit);
}
