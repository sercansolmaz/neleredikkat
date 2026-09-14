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
  }
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
