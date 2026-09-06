const guides = [
  {
    id: "bedensel",
    group: "Savaşçı",
    name: "Bedensel Savaşçı",
    accent: "#e45445",
    role: "Zirve düz vuruş DPS'i, en hızlı Metin/Boss kesimi ve agresif farm temposu.",
    tags: ["Zirve DPS", "Öfke yenilendi", "Durdurulamaz Hamle"],
    stats: { STR: 100, INT: 0, DEX: 0 },
    overview: [
      "Bedensel Savaşçı, özellikle at üstünden savaşırken oyunun en yüksek DPS üreten sınıfıdır. Bir Metin Taşını en hızlı yok eden ve farm konusunda zirvede yer alan karakter kimliğini korur.",
      "Bu hasar potansiyelinin bedeli kırılgan savunmadır. Yeni sistemde Öfke seviyesi yükseldikçe alınan hasar cezası azalır; saldırı hızı sınırını aşan değerler de Öfke aktifken Saldırı Değerine dönüşür."
    ],
    pros: ["Rakipsiz Metin TTK süresi", "Hava Kılıcı ile yüksek temel hasar", "Hamle sırasında sersemletme ve düşürmeye bağışıklık"],
    cons: ["Savunması en kırılgan sınıflardan biridir", "Öfke erken seviyelerde dikkatli kullanılmalıdır", "At üstü düz vuruş yapısı doğru efsun ister"],
    updates: [
      ["Yenilendi", "Öfke", "Alınan hasar cezası artık beceri seviyesi arttıkça azalır; P seviyesinde minimum cezaya iner."],
      ["Yeni Mekanik", "Saldırı Hızı Sınırı", "Sınırı aşan her ek saldırı hızı puanı, Öfke aktifken doğrudan Saldırı Değerine dönüşür."],
      ["Güçlendirme", "Hamle", "Animasyon boyunca durdurulamaz olur; sersemletme ve yere düşmeye karşı tam bağışıklık sağlar."],
      ["PvE Hasarı", "Kılıç Çevirme & Üç Yönlü", "Metin Taşlarına ve Boss'lara karşı ekstra hasar çarpanına sahiptir."],
      ["Şart", "Zırhlı At", "Beceri hasarı güçlendirmesi yalnızca Zırhlı At alındıktan sonra aktifleşir."]
    ],
    builds: {
      skill: {
        title: "Beceri Odaklı (Yerden)",
        intro: "Hava Kılıcı ile temel hasarı kurup Öfke yerine saldırı becerilerine öncelik vererek daha güvenli alan hasarı ve PvP geçişi sağlar.",
        early: "Hava Kılıcı, Kılıç Çevirme, Üç Yönlü Kesme ve Hamleye 1'er puan verin.",
        order: ["Hava Kılıcı", "Kılıç Çevirme", "Üç Yönlü Kesme", "Hamle veya Öfke", "Kalan son beceri"],
        details: [
          ["Silah", "Başlangıçta Kılıç; Kılıç Çevirme ve Üç Yönlü Kesme Master olduktan sonra Çift El silaha geçilebilir. 65'te PvM için Elektromanyetik Pala, PvP için Partizan."],
          ["Takılar", "Beceri Saldırı Değeri, Büyü Hızı, Hızlı Yenilenme; Hava Kılıcı sebebiyle ortalama zarar ve saldırı hızı da değerlidir."],
          ["Efsunlar", "Güç (STR), Büyü Hızı, Beceri Hasarı, hasarın HP ile absorbe edilmesi, vuruşun HP ile emilmesi, HP, Yarı insanlara karşı güç."],
          ["Destek", "İyileştirmeci Şaman; alternatif olarak hayatta kalmak için Ejderha Gücü Şaman."]
        ],
        copy: "Hava Kılıcı > Kılıç Çevirme > Üç Yönlü Kesme > Hamle/Öfke | STR, Büyü Hızı, Beceri Hasarı, HP Çalma, HP"
      },
      mount: {
        title: "At Üstü (Düz Vuruş)",
        intro: "Bedensel Savaşçı'nın en güçlü PvM tarzıdır. Hava Kılıcı ve Öfke ile Metinleri ve Bossları rekor sürede parçalar.",
        early: "Hava Kılıcı'nı ana güç kaynağı olarak erkenden Master yapın; Öfke P seviyesine taşındıkça cezası azalır.",
        order: ["Hava Kılıcı", "Öfke", "Kılıç Çevirme", "Hamle", "Üç Yönlü Kesme"],
        details: [
          ["Silah", "Başlangıçta Kılıç; Zırhlı At sonrası yüksek menzil için Çift El. 65'te PvM için Elektromanyetik Pala veya Peri Kılıcı; PvP için Muharebe Kılıcı veya Partizan."],
          ["Takılar", "Ortalama Saldırı Değeri, Kritik Vuruş Şansı, Delici Vuruş Şansı, Kritik Gücü ve Saldırı Hızı."],
          ["Efsunlar", "Ortalama Zarar, STR, Saldırı Hızı, vuruşun HP ile emilmesi, HP, Zehirleme, Sersemletme, Kritik/Delici, Yarı insan."],
          ["Destek", "Ejderha Gücü Şaman, özellikle Kutsama ve Ejderha Yardımı ile neredeyse zorunludur."]
        ],
        copy: "Hava Kılıcı > Öfke > Kılıç Çevirme > Hamle/Üç Yönlü | Ortalama Zarar, STR, Saldırı Hızı, Kritik/Delici, HP Çalma"
      }
    },
    summary: [
      ["Beceri Sırası", "Hava Kılıcı > Kılıç Çevirme > Üç Yönlü > Hamle/Öfke", "Hava Kılıcı > Öfke > Kılıç Çevirme > Hamle/Üç Yönlü"],
      ["Statü & Efsun", "STR, Beceri Hasarı, Büyü Hızı, HP Çalma, HP", "STR, Ortalama Zarar, Saldırı Hızı, Kritik/Delici, HP"],
      ["65 Lv. Silahı", "PvM: Elektromanyetik Pala - PvP: Partizan", "PvM: Elektromanyetik/Peri - PvP: Muharebe/Partizan"],
      ["Destek", "İyileştirmeci Şaman", "Ejderha Gücü Şaman"],
      ["Avantaj", "Daha güvenli alan hasarı ve PvP gücü", "Maksimum farm hızı"]
    ]
  },
  {
    id: "zihinsel",
    group: "Savaşçı",
    name: "Zihinsel Savaşçı",
    accent: "#d7a03f",
    role: "Yüksek dayanıklılık, güçlü anlık alan hasarı ve sersemletme kontrolü.",
    tags: ["Tank PvM", "Ruh Vuruşu pasifi", "Büyü savunması"],
    stats: { STR: 100, INT: 0, DEX: 0 },
    overview: [
      "Zihinsel Savaşçı, muazzam savunma ve yüksek beceri hasarıyla PvM alanında en dayanıklı sınıflardan biridir.",
      "Güçlü Beden artık hareket hızı cezası olmadan fiziksel ve büyü savunması kazandırır. Ruh Vuruşu ise canavarlara karşı düz vuruşları güçlendirerek at üstü farmı güçlü bir alternatif yapar."
    ],
    pros: ["Çok yüksek hayatta kalma", "Güçlü anlık alan hasarı", "Zorlu haritalara erken giriş"],
    cons: ["Düzenli DPS yerine patlamalı hasar üretir", "Bekleme süreleri nispeten uzundur", "Metin kesimi Bedensel kadar hızlı değildir"],
    updates: [
      ["Güncellendi", "Güçlü Beden", "Hareket hızı düşürme cezası kaldırıldı ve büyü savunması eklendi."],
      ["Yeni Pasif", "Ruh Vuruşu", "Silahınızı güçlendirerek canavarlara karşı ekstra düz vuruş hasarı sağlar."],
      ["Güçlendirme", "PvE Hasarı", "Ruh Vuruşu ve Şiddetli Vuruş Metin/Boss hedeflerine ekstra çarpanla vurur."],
      ["Şart", "Zırhlı At", "Beceri hasarı güçlendirmesi 11. seviye at sonrası devreye girer."]
    ],
    builds: {
      skill: {
        title: "Beceri Odaklı (Yerden)",
        intro: "Alan temizleme gücüne ve PvP geçişine odaklanır; ana saldırılar açıldıktan sonra Çift El silaha geçilir.",
        early: "Ruh Vuruşu, Şiddetli Vuruş, Güçlü Vuruş ve Kılıç Darbesine 1'er puan verin.",
        order: ["Ruh Vuruşu", "Şiddetli Vuruş", "Güçlü Beden", "Kılıç Darbesi veya Güçlü Vuruş", "Kalan son beceri"],
        details: [
          ["Silah", "Başlangıçta Kılıç; Ruh Vuruşu ve Şiddetli Vuruş Master olduktan sonra Çift El. 30'da beceri hasarlı KDP, 65'te PvM için Elektromanyetik Pala, PvP için Partizan."],
          ["Takılar", "Beceri Saldırı Değeri, Büyü Hızı ve Hızlı Yenilenme."],
          ["Efsunlar", "STR, Büyü Hızı, Beceri Hasarı, hasarın HP ile absorbe edilmesi, HP, Yarı insanlara karşı güç."],
          ["Destek", "İyileştirmeci Şaman ve beceri hasarı odaklı sular."]
        ],
        copy: "Ruh Vuruşu > Şiddetli Vuruş > Güçlü Beden > Darbe/Güçlü | STR, Beceri Hasarı, Büyü Hızı, HP Çalma"
      },
      mount: {
        title: "At Üstü (Düz Vuruş)",
        intro: "Ruh Vuruşu pasifi ve Güçlü Beden zırhıyla güvenli, düşük maliyetli ve istikrarlı farm sunar.",
        early: "Ruh Vuruşu ilk Master olmalı; Güçlü Beden erken hasarınızı düşürmemeli.",
        order: ["Ruh Vuruşu", "Güçlü Beden", "Şiddetli Vuruş", "Kılıç Darbesi", "Güçlü Vuruş"],
        details: [
          ["Silah", "Başlangıçta Kılıç; Zırhlı At sonrası Çift El. 65'te PvM için Elektromanyetik Pala."],
          ["Takılar", "Ortalama Saldırı Değeri, Kritik, Delici, Kritik Gücü ve Saldırı Hızı."],
          ["Efsunlar", "Ortalama Zarar, STR, Saldırı Hızı, vuruş HP emişi, HP, Zehirleme, Sersemletme, Kritik/Delici, Yarı insan."],
          ["Destek", "Ejderha Gücü Şaman, kritik ve Kutsama ile farmı hızlandırır."]
        ],
        copy: "Ruh Vuruşu > Güçlü Beden > Şiddetli Vuruş > Darbe/Güçlü | Ortalama Zarar, STR, Saldırı Hızı, Kritik/Delici"
      }
    },
    summary: [
      ["Beceri Sırası", "Ruh Vuruşu > Şiddetli V. > Güçlü Beden > Darbe/Güçlü", "Ruh Vuruşu > Güçlü Beden > Şiddetli V. > Darbe/Güçlü"],
      ["Statü & Efsun", "STR, Beceri Hasarı, Büyü Hızı, HP Çalma", "STR, Ortalama Zarar, Saldırı Hızı, Kritik/Delici"],
      ["65 Lv. Silahı", "PvM: Elektromanyetik - PvP: Partizan", "PvM/PvP: Elektromanyetik/Partizan"],
      ["Destek", "İyileştirmeci Şaman", "Ejderha Gücü Şaman"],
      ["Avantaj", "Güçlü alan hasarı ve PvP adaptasyonu", "Masrafsız, güvenli PvM"]
    ]
  },
  {
    id: "buyulu-silah",
    group: "Sura",
    name: "Büyülü Silah Sura",
    accent: "#8e6fff",
    role: "HP çalma, Dehşet ve Büyülü Zırh ile zirve PvM hayatta kalma.",
    tags: ["HP Çalma", "Hedef çekme", "%80 INT"],
    stats: { STR: 20, INT: 80, DEX: 0 },
    overview: [
      "Büyülü Silah Sura, Dehşet, Büyülü Zırh ve Büyülü Keskinlik sayesinde PvM hayatta kalma konusunda zirvededir.",
      "Büyülü Keskinlik P seviyesindeki maksimum HP çalma %10'a çekildi. Büyülü Zırh artık alınan beceri hasarını bir sonraki becerinin gücüne dönüştüren yeni pasif kazandı."
    ],
    pros: ["Sıfır pota yakın rahat farm", "Güçlü savunma ve HP çalma", "Parmak Darbesi ile hedef çekme"],
    cons: ["En yüksek saf DPS sınıfı değildir", "PvP için doğru beceri tercihi gerekir", "INT ana statüsüne bağımlıdır"],
    updates: [
      ["Yeni Mekanik", "Parmak Darbesi", "Seçilen hedefi doğrudan kendinize çeker ve artırılmış menzil sunar."],
      ["Yeni Pasif", "Büyülü Zırh", "Alınan beceri hasarını soğurup sonraki becerinin gücünü P seviyesinde %20'ye kadar artırır."],
      ["Revize", "Büyü Çözme", "Destekleri her zaman kaldırır; etki geçicidir ve süre beceri seviyesine göre artar."],
      ["PvE Hasarı", "Parmak & Ejderha Dönüşü", "Metin Taşlarına ve Boss'lara karşı ekstra hasar çarpanı alır."],
      ["Statü", "%80 INT / %20 STR", "Saldırı değerinin ana payı INT üzerinden sağlanır."]
    ],
    builds: {
      skill: {
        title: "Beceri Odaklı (Yerden)",
        intro: "Saldırı becerilerini öne çıkarır; Büyülü Zırh ve Çözme ile PvP avantajı sağlar.",
        early: "Büyülü Keskinlik, Parmak Darbesi ve Ejderha Dönüşüne 1'er puan verin.",
        order: ["Büyülü Keskinlik", "Parmak Darbesi", "Büyülü Zırh veya Ejderha Dönüşü", "Ejderha Dönüşü/Büyülü Zırh/Büyü Çözme", "Kalan son beceriler"],
        details: [
          ["Silah", "65'te PvM için Hortlak Dişi Kılıcı veya Peri Kılıcı; PvP saf hasarı için Muharebe Kılıcı."],
          ["Takılar", "Beceri Saldırı Değeri, Büyü Hızı ve Hızlı Yenilenme."],
          ["Efsunlar", "INT, Büyü Hızı, Beceri Hasarı, hasarın HP ile absorbe edilmesi, HP, Yarı insan."],
          ["Destek", "İyileştirmeci Şaman; dengeli hayatta kalma için Ejderha Şamanı."]
        ],
        copy: "B. Keskinlik > Parmak > B. Zırh/Dönüş > Çözme | INT, Büyü Hızı, Beceri Hasarı, HP Çalma"
      },
      mount: {
        title: "At Üstü (Düz Vuruş)",
        intro: "Büyülü Keskinlik ve Dehşet ile devasa slot gruplarını güvenli şekilde kesen klasik PvM tarzıdır.",
        early: "Büyülü Keskinlik tartışmasız ilk Master; Dehşet ikinci savunma dayanağıdır.",
        order: ["Büyülü Keskinlik", "Dehşet", "Büyülü Zırh veya Parmak Darbesi", "Ejderha Dönüşü", "Parmak Darbesi"],
        details: [
          ["Silah", "30'da yüksek ortalamalı Dolunay Kılıcı; 65'te PvM için Peri Kılıcı, PvP için Muharebe Kılıcı."],
          ["Takılar", "Ortalama Saldırı Değeri, Kritik, Delici, Kritik Gücü ve Saldırı Hızı."],
          ["Efsunlar", "Ortalama Zarar, INT, Saldırı Hızı, vuruş HP emişi, HP, Zehirleme, Sersemletme, Kritik/Delici, Yarı insan."],
          ["Destek", "Ejderha Gücü Şaman kritik ihtiyacı için elzemdir."]
        ],
        copy: "B. Keskinlik > Dehşet > B. Zırh > Parmak/Dönüş | Ortalama Zarar, INT, Kritik, HP"
      }
    },
    summary: [
      ["Beceri Sırası", "B. Keskinlik > Parmak > B. Zırh/Dönüş > Çözme", "B. Keskinlik > Dehşet > B. Zırh > Parmak/Dönüş"],
      ["Statü & Efsun", "%80 INT/%20 STR, Beceri Hasarı, Büyü Hızı", "%80 INT/%20 STR, Ortalama Zarar, Kritik, HP"],
      ["65 Lv. Silahı", "PvM: Peri/Hortlak - PvP: Muharebe", "PvM: Peri - PvP: Muharebe"],
      ["Destek", "İyileştirmeci Şaman", "Ejderha Gücü Şaman"],
      ["Avantaj", "Hedef çekme ve PvP üstünlüğü", "Zirve PvM tanklığı"]
    ]
  },
  {
    id: "kara-buyu",
    group: "Sura",
    name: "Kara Büyü Sura",
    accent: "#6b7dff",
    role: "1v1 PvP ve açık alan lideri; artık PvM tarafında da güçlü.",
    tags: ["Ateş Hayaleti", "SP optimizasyonu", "Karanlık Koruma"],
    stats: { STR: 20, INT: 80, DEX: 0 },
    overview: [
      "Kara Büyü Sura, Karanlık Koruma ve Ateş Hayaleti ile 1v1 düellolarında ve açık alan PvP'sinde en zorlu sınıflardan biridir.",
      "PvM tarafı ciddi güçlendirildi: Ateş Hayaleti açılıp kapatılabilir hale geldi, binek üstünde çalışır ve SP tüketimi azaltıldı."
    ],
    pros: ["Zirve 1v1 PvP", "Yüksek dayanıklılık", "Kiting ve uzaktan kilit becerileri"],
    cons: ["SP yönetimi hala önemlidir", "At üstü farm saf DPS sınıfları kadar hızlı değildir", "Doğru hedef seçimi ister"],
    updates: [
      ["Yeni Mekanik", "Ateş Hayaleti", "Toggle çalışır, binek üzerindeyken saldırır ve seçili hedefe öncelik verir."],
      ["Yenilendi", "Karanlık Koruma", "Zamanla SP tüketimi kaldırıldı; hasar azaltma beceri seviyesiyle ölçeklenir."],
      ["Yeni Etki", "Ateş Vuruş", "Rakiplere ve canavarlara doğrudan Yanma uygular."],
      ["PvE Hasarı", "Hayalet & Karanlık Vuruş", "Metin Taşları ve Boss'lara karşı ekstra çarpan kazanır."],
      ["Statü", "%80 INT / %20 STR", "Saldırı değerinin ana payı INT üzerinden gelir."]
    ],
    builds: {
      skill: {
        title: "Beceri Odaklı (Yerden)",
        intro: "Karanlık Vuruş'un düşük bekleme süresi ve Karanlık Küre'nin gücüyle yüksek hasar, kiting ve PvP hakimiyeti sunar.",
        early: "Ateş Hayaleti, Ateş Vuruş, Karanlık Vuruş ve Karanlık Küreye 1'er puan verin.",
        order: ["Ateş Hayaleti", "Karanlık Vuruş", "Karanlık Koruma veya Karanlık Küre", "Seçilmeyen Koruma/Küre", "Ateş Vuruş veya Hayalet Vuruş"],
        details: [
          ["Silah", "30'da beceri hasarlı Dolunay Kılıcı; 65'te PvM için Şeytan Çıkarma Kılıcı, PvP için Hortlak Dişi Kılıcı."],
          ["Takılar", "Beceri Saldırı Değeri, Büyü Hızı ve Hızlı Yenilenme."],
          ["Efsunlar", "INT, Büyü Hızı, Beceri Hasarı, SP Üretimi/SP Çalma, HP Çalma, HP, Yarı insan."],
          ["Destek", "İyileştirmeci Şaman ve beceri odaklı sular."]
        ],
        copy: "Ateş Hayaleti > K. Vuruş > Koruma/Küre > Ateş V. | INT, Beceri Hasarı, SP Üretimi, HP"
      },
      mount: {
        title: "At Üstü (Düz Vuruş)",
        intro: "Ateş Hayaleti'nin binek üstü hasarı ve Karanlık Koruma ile rahat, dayanıklı PvM farmı sağlar.",
        early: "Ateş Hayaleti at üstünde de vurduğu için ilk Master yapılır.",
        order: ["Ateş Hayaleti", "Karanlık Koruma", "Karanlık Vuruş", "Karanlık Küre", "Ateş Vuruş veya Hayalet Vuruş"],
        details: [
          ["Silah", "30'da yüksek ortalamalı Dolunay Kılıcı; 65'te PvM için Şeytan Çıkarma Kılıcı, PvP için Hortlak Dişi Kılıcı."],
          ["Takılar", "Ortalama Saldırı Değeri, Kritik, Delici, Kritik Gücü ve Saldırı Hızı."],
          ["Efsunlar", "Ortalama Zarar, INT, Saldırı Hızı, SP Üretimi, vuruş HP emişi, HP, Zehirleme, Sersemletme, Kritik/Delici, Yarı insan."],
          ["Destek", "Ejderha Gücü Şaman, kritik hasarı zirveye çıkarır."]
        ],
        copy: "Ateş Hayaleti > Karanlık Koruma > K. Vuruş > Küre > Ateş V. | Ortalama Zarar, INT, SP Üretimi"
      }
    },
    summary: [
      ["Beceri Sırası", "Hayalet > K. Vuruş > Koruma/Küre > Ateş V.", "Hayalet > Koruma > K. Vuruş > Küre > Ateş V."],
      ["Statü & Efsun", "%80 INT/%20 STR, Beceri Hasarı, SP Üretimi", "INT, Ortalama Zarar, Saldırı Hızı, Kritik/Delici"],
      ["65 Lv. Silahı", "PvM: Şeytan Çıkarma - PvP: Hortlak Dişi", "PvM: Şeytan Çıkarma - PvP: Hortlak Dişi"],
      ["Destek", "İyileştirmeci Şaman", "Ejderha Gücü Şaman"],
      ["Avantaj", "1v1 ve açık alan PvP hakimiyeti", "Ateş Hayaleti destekli rahat farm"]
    ]
  },
  {
    id: "okcu",
    group: "Ninja",
    name: "Okçu Ninja",
    accent: "#f08d42",
    role: "Menzil üstünlüğü, kiting ve zehir sinerjisiyle stratejik PvM/PvP.",
    tags: ["Kıvılcım", "Çoklu hedef", "%60 DEX"],
    stats: { STR: 40, INT: 0, DEX: 60 },
    overview: [
      "Okçu Ninja, menzil üstünlüğünü beceriler ve düz vuruşlarla birleştirerek zorlu içeriklere erken girebilir.",
      "Ateşli Ok'un yeni pasifi her 3. düz ok atışını güçlendirir. Kıvılcım yakın dövüşte geri itme ve zehirleme ile güvenli menzile dönmenizi sağlar."
    ],
    pros: ["Eşsiz kiting", "Zorlu haritalara erken giriş", "Çift zehir baskısı"],
    cons: ["Saf DPS lideri değildir", "Konumlanma hataları cezalandırır", "At üstü TTK beceri yapısına göre düşüktür"],
    updates: [
      ["Yenilendi", "Hafif Adım", "Beceri animasyon hızını artırır ve hayalet geçiş etkisi kazandırır."],
      ["Yeni Beceri", "Kıvılcım", "Ok Yağmuru yerine eklendi; yakın dövüşte geri iter, zehirler ve kiting sağlar."],
      ["Yeni Mekanik", "Çoklu Hedef & Sadak", "Düz vuruşlar birden çok canavarı vurabilir; sadak geliştikçe menzil cezası azalır."],
      ["Yeni Pasif", "Ateşli Ok", "Her 3. düz ok atışı canavarlara karşı ciddi güçlenir."],
      ["Statü", "%60 DEX / %40 STR", "Beceri hasarı güçlendirmesi Zırhlı At sonrası aktifleşir."]
    ],
    builds: {
      skill: {
        title: "Beceri Odaklı (Yerden)",
        intro: "Ateşli Ok, Zehirli Ok ve Kıvılcım ile yerden kiting, alan hasarı ve açık alan PvP avantajı sağlar.",
        early: "Ateşli Ok, Zehirli Ok, Hafif Adım ve Kıvılcıma 1'er puan verin.",
        order: ["Ateşli Ok", "Zehirli Ok", "Hafif Adım veya Kıvılcım", "Kalan beceriler", "Tekrarlanan Atış"],
        details: [
          ["Silah", "Her senaryoda Yay. 30'da beceri hasarlı Geyik Boynuzu Yay, 65'te Sarı Ejderha Yayı veya canavar ortalamalı yaylar."],
          ["Takılar", "Beceri Saldırı Değeri, Büyü Hızı, Hızlı Yenilenme; ortalama zarar ve saldırı hızı da değerlidir."],
          ["Efsunlar", "DEX, Büyü Hızı, Beceri Hasarı, hasarın HP ile absorbe edilmesi, HP, Yarı insan."],
          ["Destek", "İyileştirmeci Şaman, Yüksek Saldırı ve Hızlılık ile öne çıkar."]
        ],
        copy: "Ateşli Ok > Zehirli Ok > Hafif Adım/Kıvılcım | DEX, Beceri Hasarı, Büyü Hızı, HP"
      },
      mount: {
        title: "At Üstü (Düz Vuruş)",
        intro: "Ateşli Ok'un 3. vuruş pasifi ve at üstü ok vuruşlarıyla daha konforlu PvM deneyimi sağlar.",
        early: "Ateşli Ok pasifi nedeniyle ilk Master; Hafif Adım ikinci sırada farmı rahatlatır.",
        order: ["Ateşli Ok", "Hafif Adım", "Kıvılcım veya Zehirli Ok", "Kalan beceriler", "Tekrarlanan Atış"],
        details: [
          ["Silah", "30'da yüksek ortalamalı Geyik Boynuzu Yay; yüksek seviyelerde en iyi yay."],
          ["Takılar", "Ortalama Saldırı Değeri, Kritik, Delici, Kritik Gücü ve Saldırı Hızı."],
          ["Efsunlar", "Ortalama Zarar, DEX, Saldırı Hızı, vuruş HP emişi, HP, Zehirleme, Sersemletme, Kritik/Delici, Yarı insan."],
          ["Destek", "Ejderha Gücü Şaman at üstü kritik ve savunma için neredeyse zorunludur."]
        ],
        copy: "Ateşli Ok > Hafif Adım > Kıvılcım/Zehirli Ok | Ortalama Zarar, DEX, Saldırı Hızı, Kritik/Delici"
      }
    },
    summary: [
      ["Beceri Sırası", "Ateşli Ok > Zehirli Ok > Hafif Adım/Kıvılcım", "Ateşli Ok > Hafif Adım > Kıvılcım/Zehirli Ok"],
      ["Statü & Efsun", "%60 DEX/%40 STR, Beceri Hasarı, Büyü Hızı", "DEX, Ortalama Zarar, Saldırı Hızı, Kritik/Delici"],
      ["Silah", "Yay: GBY/Sarı Ejderha Yayı", "Yüksek ortalamalı GBY/üst düzey yay"],
      ["Destek", "İyileştirmeci Şaman", "Ejderha Gücü Şaman"],
      ["Avantaj", "Kiting ve PvP menzili", "Rahat farm ve çoklu hedef"]
    ]
  },
  {
    id: "bicakci",
    group: "Ninja",
    name: "Bıçakçı Ninja",
    accent: "#4fca8b",
    role: "1v1 suikast, Boss katilliği, arkadan vuruş ve hızlı kombo.",
    tags: ["Backstab", "3x kombo", "Hançer farm"],
    stats: { STR: 40, INT: 0, DEX: 60 },
    overview: [
      "Bıçakçı Ninja, tek hedefe kilitlendiğinde muazzam hasarıyla oyunun en ölümcül 1v1 suikastçısıdır.",
      "Suikast arkadan vuruş göstergesi, Bıçak Çevirme zehirlemesi ve Metinlere daima 3x kombo vurmasıyla Boss ve Metin kesiminde ilk sıralardadır."
    ],
    pros: ["Zirve Boss DPS'i", "Çok güçlü 1v1 patlama", "Yerden seri hançer vuruşları"],
    cons: ["Ustalaşması zordur", "Alan hasarı kısıtlıdır", "Kısa menzil ve düşük savunma risk yaratır"],
    updates: [
      ["Yeni Mekanik", "Kamuflaj", "Hareket halindeyken açılır; ilk sonraki beceriye ekstra hasar ve özel güçlendirme verir."],
      ["Yenilendi", "Suikast", "Canavar ve Metinlerde arkadan vuruş göstergesi; arkadan vuruşta silaha canavar bonusu."],
      ["Güçlendirme", "Bıçak Çevirme", "Zehirleme uygular ve Metin Taşlarına karşı her zaman 3x kombo hasarı vurur."],
      ["İyileştirme", "Hızlı Saldırı", "Hareket eden hedeflere karşı ıskalamaz; kusursuz hedef kitleme sağlar."],
      ["Binek", "At Üstü Hançer", "Hançer animasyonu kılıçla eşitlendi ve vuruş menzili artırıldı."]
    ],
    builds: {
      skill: {
        title: "Beceri Odaklı (Yerden)",
        intro: "Yerden seri hançer vuruşları, arkadan Suikast ve kombolarla bossları ve rakipleri eritir.",
        early: "Suikast, Bıçak Çevirme, Hızlı Saldırı ve Zehirli Buluta 1'er puan verin.",
        order: ["Suikast", "Bıçak Çevirme", "Hızlı Saldırı + Kamuflaj'a 1 puan", "Zehirli Bulut veya Kamuflaj", "Kalan son beceri"],
        details: [
          ["Silah", "Yerden dövüşte Hançer. Slot toplamak için geçici Yay kullanılabilir, hasar Hançer ile verilir."],
          ["Takılar", "Beceri Saldırı Değeri, Büyü Hızı ve Hızlı Yenilenme."],
          ["Efsunlar", "DEX, Büyü Hızı, Beceri Hasarı, hasarın HP ile absorbe edilmesi, HP, Yarı insan."],
          ["Destek", "İyileştirmeci Şaman, Yüksek Saldırı ve Hızlılık ile idealdir."]
        ],
        copy: "Suikast > Bıçak Çevirme > Hızlı Saldırı > Bulut/Kamuflaj | DEX, Beceri Hasarı, HP Çalma"
      },
      mount: {
        title: "At Üstü (Düz Vuruş)",
        intro: "Suikast arkadan vuruş pasifi ve geliştirilmiş binek üstü hançer menziliyle daha pratik farm sağlar.",
        early: "Suikast pasifi nedeniyle ilk Master; Bıçak Çevirme ikinci sırada güçlü katkı verir.",
        order: ["Suikast", "Bıçak Çevirme", "Hızlı Saldırı", "Zehirli Bulut", "Kamuflaj"],
        details: [
          ["Silah", "Binek üstünde de Hançer; örnek olarak yüksek ortalamalı Siyah Yaprak Hançeri."],
          ["Takılar", "Ortalama Saldırı Değeri, Kritik, Delici, Kritik Gücü ve Saldırı Hızı."],
          ["Efsunlar", "Ortalama Zarar, DEX, Saldırı Hızı, vuruş HP emişi, HP, Zehirleme, Sersemletme, Kritik/Delici, Yarı insan."],
          ["Destek", "Ejderha Gücü Şaman, hayatta kalma ve kritik ihtiyacı için neredeyse zorunludur."]
        ],
        copy: "Suikast > Bıçak Çevirme > Hızlı Saldırı > Bulut | Ortalama Zarar, DEX, Saldırı Hızı, Kritik/Delici"
      }
    },
    summary: [
      ["Beceri Sırası", "Suikast > Bıçak Çevirme > Hızlı Saldırı > Bulut", "Suikast > Bıçak Çevirme > Hızlı Saldırı > Bulut"],
      ["Statü & Efsun", "%60 DEX/%40 STR, Beceri Hasarı, HP Çalma", "DEX, Ortalama Zarar, Saldırı Hızı, Kritik/Delici"],
      ["Silah", "Hançer: SYH/Şimşek/Ejderha Bıçağı", "Yüksek ortalamalı Hançer"],
      ["Destek", "İyileştirmeci Şaman", "Ejderha Gücü Şaman"],
      ["Avantaj", "Zirve Boss DPS ve 1v1", "Daha az eforla stabil farm"]
    ]
  },
  {
    id: "iyilestirmeci",
    group: "Şaman",
    name: "İyileştirmeci Şaman",
    accent: "#29bfd2",
    role: "Yüksek mobilite, hızlı büyü yenilenmesi, iyileştirme ve felç kontrolü.",
    tags: ["Yüksek Saldırı %", "Felç", "Hızlılık"],
    stats: { STR: 20, INT: 80, DEX: 0 },
    overview: [
      "İyileştirmeci Şaman, pozisyon odaklı oynamayı sevenler için yüksek hareket ve büyü hızı sunar.",
      "Yüksek Saldırı artık yüzdelik beceri hasarı verir. Şimşek Çağırma canavarlara felç uygular ve Hızlı Büyü Yenilenmesi bekleme sürelerini rahatlatır."
    ],
    pros: ["Yüksek büyü DPS'i", "Kiting ve iyileşme", "Erken PvM/PvP dengesi"],
    cons: ["At üstü farm TTK'sı daha düşüktür", "Yelpaze/Çan ayrımına dikkat ister", "Beceri isabeti ve konumlanma önemlidir"],
    updates: [
      ["Yenilendi", "Yüksek Saldırı", "Doğrudan yüzdelik Beceri Hasarı artışı kazandırır."],
      ["Yeni Pasif", "Hızlı Büyü Yenilenmesi", "Bir beceri oyuncuya isabet etmediğinde bekleme süresini hızla yeniler."],
      ["Yeni Pasif", "Şimşek Atma", "Kullanıldığında silaha canavarlara karşı ekstra düz vuruş güçlendirmesi verir."],
      ["PvE Hasarı", "Şimşek Atma & Çağırma", "Metin/Boss çarpanı ve canavarlara felç kontrolü sağlar."],
      ["Destek Sistemi", "%100 Kendi Gücü", "Kendi destekleri %100, diğer oyuncularda %70 etki eder; 1 puan P gücünün %30'unu verir."]
    ],
    builds: {
      skill: {
        title: "Beceri Odaklı (Yerden)",
        intro: "Yelpaze ile düşük bekleme süreli büyü patlamaları ve güçlü anlık alan hasarı üretir.",
        early: "Şimşek Çağırma, Şimşek Atma, Yüksek Saldırı ve Hızlılığa 1'er puan verin.",
        order: ["Şimşek Atma", "Şimşek Çağırma", "Yüksek Saldırı / Şimşek Pençesi / İyileştirme", "Kalan destek ve hasar becerileri", "Hızlılık"],
        details: [
          ["Silah", "Büyülü saldırı değeri yüksek olduğu için Yelpaze tercih edilir."],
          ["Takılar", "Beceri Saldırı Değeri, Büyü Hızı ve Hızlı Yenilenme."],
          ["Efsunlar", "INT, Büyü Hızı, Beceri Hasarı, HP Çalma, HP, Zehirleme, Yarı insan."],
          ["Destek", "Kendi Yüksek Saldırı ve Hızlılık yeterlidir; zorlu içerikte Kutsama için Ejderha Şamanı eklenebilir."]
        ],
        copy: "Şimşek Atma > Çağırma > Yüksek Saldırı/İyileştirme > Hızlılık | INT, Beceri Hasarı, Büyü Hızı"
      },
      mount: {
        title: "At Üstü (Düz Vuruş)",
        intro: "Çan kullanarak at sırtından standart ve daha az eforlu farm yapar.",
        early: "Şimşek Atma ve Şimşek Çağırma hasar temelini kurar; desteklerden 1 puanda bile yüksek verim alınır.",
        order: ["Şimşek Atma", "Şimşek Çağırma", "Yüksek Saldırı / İyileştirme", "Kalan beceriler", "Hızlılık"],
        details: [
          ["Silah", "Yüksek fiziksel saldırı değeri ve saldırı hızı nedeniyle Çan; örnek Antik Çan."],
          ["Takılar", "Ortalama Saldırı Değeri, Kritik, Delici, Kritik Gücü ve Saldırı Hızı."],
          ["Efsunlar", "Ortalama Zarar, INT, Saldırı Hızı, vuruş HP emişi, HP, Zehirleme, Sersemletme, Kritik/Delici, Yarı insan."],
          ["Destek", "Ejderha Gücü Şaman at üstü farm için neredeyse zorunludur."]
        ],
        copy: "Şimşek Atma > Çağırma > Yüksek Saldırı/İyileştirme | Ortalama Zarar, INT, Saldırı Hızı, Kritik/Delici"
      }
    },
    summary: [
      ["Beceri Sırası", "Şimşek Atma > Çağırma > Yüksek Saldırı/İyileştirme", "Şimşek Atma > Çağırma > Yüksek Saldırı/İyileştirme"],
      ["Statü & Efsun", "%80 INT/%20 STR, Beceri Hasarı, Büyü Hızı", "INT, Ortalama Zarar, Saldırı Hızı, Kritik/Delici"],
      ["Silah", "Yelpaze", "Çan: Antik Çan vb."],
      ["Destek", "Kendi destekleri", "Ejderha Gücü Şaman"],
      ["Avantaj", "Büyü DPS, kiting ve PvP", "Standart rahat farm"]
    ]
  },
  {
    id: "ejderha",
    group: "Şaman",
    name: "Ejderha Gücü Şaman",
    accent: "#ff5a46",
    role: "Kutsama, kritik, yanma ve yansıtma ile dengeli bağımsız farm.",
    tags: ["Kendi destekleri", "Yanma", "Yansıtma"],
    stats: { STR: 20, INT: 80, DEX: 0 },
    overview: [
      "Ejderha Gücü Şaman, tek bir alanda mutlak lider olmasa da oyunun en dengeli ve masrafsız karakterlerinden biridir.",
      "Kendi üzerinde %100 çalışan Kutsama ve Ejderha Yardımı, 1 puanda bile güçlü destek değeri sağlar. Ejderha Atışı'nın yanması Bosslarda yüzdelik can üzerinden baskı kurar."
    ],
    pros: ["Ek hesapsız bağımsız farm", "Yüksek at üstü DPS", "Kutsama ve yansıtma ile güvenlik"],
    cons: ["En yüksek saf DPS değildir", "Beceri yapısı daha fazla yatırım ister", "Yelpaze/Çan ayrımı önemlidir"],
    updates: [
      ["Yeni Pasif", "Ejderha Kükremesi", "Kullanıldığında silaha canavarlara karşı ekstra düz vuruş güçlendirmesi verir."],
      ["Yeni Mekanik", "Ejderha Yardımı", "Kritik vuruş yapıldığında düşman üzerindeki Yanma süresini uzatır."],
      ["Güçlendirme", "Yansıtma", "Hem düz vuruş hem beceri hasarını yansıtır; P seviyesinde %20+ beceri yansıtma."],
      ["Yeni Kontrol", "Uçan Tılsım", "İsabet ettiği rakiplere yavaşlatma uygular ve 1v1 PvP'de etkilidir."],
      ["Destek Sistemi", "%100 Kendi Gücü", "Kendi destekleri tam güç, diğer oyunculara %70 etki eder."]
    ],
    builds: {
      skill: {
        title: "Beceri Odaklı (Yerden)",
        intro: "Yelpaze ile güçlü alan patlamaları, Uçan Tılsım ve Yansıtma sayesinde erken PvP geçişi sağlar.",
        early: "Ejderha Kükremesi, Ejderha Atışı, Kutsama ve Ejderha Yardımına 1'er puan verin.",
        order: ["Ejderha Kükremesi", "Ejderha Atışı", "Ejderha Yardımı / Kutsama / Uçan Tılsım", "Kutsama/Yardım veya Yansıtma/Tılsım", "Kalan beceriler"],
        details: [
          ["Silah", "Büyülü saldırı değeri yüksek olduğu için Yelpaze."],
          ["Takılar", "Beceri Saldırı Değeri, Büyü Hızı ve Hızlı Yenilenme."],
          ["Efsunlar", "INT, Büyü Hızı, Beceri Hasarı, HP Çalma, HP, Zehirleme, Yarı insan."],
          ["Destek", "İyileştirmeci Şaman'ın Yüksek Saldırı ve Hızlılığı beceri yapısını güçlendirir."]
        ],
        copy: "Kükreme > E. Atışı > Kutsama/Yardım/Tılsım | INT, Beceri Hasarı, Büyü Hızı, HP Çalma"
      },
      mount: {
        title: "At Üstü (Düz Vuruş)",
        intro: "Kendi Kutsama ve Kritik destekleriyle sıfır ek hesapla rahat farm yapar.",
        early: "Destekler 1 puanda P değerinin %30'unu verdiği için saldırı becerilerini erkenden geliştirmek rahattır.",
        order: ["Ejderha Kükremesi", "Ejderha Yardımı", "Kutsama veya Ejderha Atışı", "Kalan destek/hasar becerileri"],
        details: [
          ["Silah", "Yüksek fiziksel saldırı değeri ve saldırı hızı sebebiyle Çan; örnek Antik Çan."],
          ["Takılar", "Ortalama Saldırı Değeri, Kritik, Delici, Kritik Gücü ve Saldırı Hızı."],
          ["Efsunlar", "Ortalama Zarar, INT, Saldırı Hızı, vuruş HP emişi, HP, Zehirleme, Sersemletme, Kritik/Delici, Yarı insan."],
          ["Destek", "Kendi Kutsama ve Ejderha Yardımı yeterlidir; ayrı destek şamanı gerektirmez."]
        ],
        copy: "Kükreme > E. Yardımı > Kutsama/Atış | Ortalama Zarar, INT, Saldırı Hızı, Kritik/Delici"
      }
    },
    summary: [
      ["Beceri Sırası", "Kükreme > E. Atışı > Kutsama/Yardım/Tılsım", "Kükreme > E. Yardımı > Kutsama/Atış"],
      ["Statü & Efsun", "INT, Beceri Hasarı, Büyü Hızı, HP Çalma", "%80 INT/%20 STR, Ortalama Zarar, Kritik"],
      ["Silah", "Yelpaze", "Çan: Antik Çan vb."],
      ["Destek", "İyileştirmeci Şaman", "Kendi destekleri"],
      ["Avantaj", "Alan hasarı, yanma, yansıtma", "Ek hesapsız yüksek at üstü DPS"]
    ]
  }
];

const systemGuide = {
  id: "sistem",
  name: "Genel Sistem Değişiklikleri",
  group: "Sistem",
  accent: "#e7bd6f",
  role: "Arthion sınıf dengesi, PvM mekanikleri, statü dağılımı ve PvP sistemleri.",
  stats: { STR: 34, INT: 33, DEX: 33 },
  tags: ["Statü dengesi", "Zırhlı At şartı", "PvP revizyonu"],
  overview: [
    "Arthion sistemlerinin amacı, her sınıfın kendi benzersiz rolünü ve oynanış tarzını korurken tek başına rekabetçi kalabilmesini sağlamaktır.",
    "Tüm sınıflar hem yerden beceri PvM hem de at üstü düz vuruş PvM yapısında etkili olacak şekilde güncellenmiştir."
  ],
  systems: [
    ["Statüden Saldırı Değeri", "Savaşçı %100 STR; Sura ve Şaman %80 INT + %20 STR; Ninja %60 DEX + %40 STR ile toplamda 180 azami saldırı değerine ulaşır."],
    ["Zırhlı At Şartı", "PvE beceri hasarı güçlendirmeleri Zırhlı At, yani 11. seviye at alındığında aktifleşir. Atı çağırmak şart değildir."],
    ["Yerden Beceri PvM", "Her sınıfın ilk Master yaptığı iki ana saldırı becerisine PvE Beceri Hasarı Bonusu tanımlanmıştır."],
    ["At Üstü PvM", "Beceri odaklı sınıflara silaha ek canavar düz vuruş hasarı kazandıran bir pasif verilmiştir."],
    ["15 Saniye Kilit", "At üstünde Metin/Boss'a düz vurmak PvE beceri hasarı bonusunu 15 saniyeliğine kapatır; yeni vuruş süreyi sıfırlar."],
    ["Şaman Destekleri", "Destekler şamanın kendisinde %100, diğer oyuncularda en fazla %70 çalışır. 1 puan bile P seviyesinin %30 gücünü verir."],
    ["Sersemlik Bağışıklığı", "PvP'de sersemletmeyi tamamen engellemez; 30 saniye içinde tekrar eden sersemletmeler %100, %50, %25 süreye düşer."],
    ["Dayanıklılık ve Yavaşlatma", "Stamina artık PvP'de oyunculara vurulduğunda harcanır. Hızlı karakterler daha hızlı yorulur ve yavaşlatmadan daha fazla etkilenir."]
  ],
  summary: [
    ["Savaşçı", "%100 STR", "180 saldırı değeri"],
    ["Sura", "%80 INT + %20 STR", "144 INT + 36 STR"],
    ["Şaman", "%80 INT + %20 STR", "144 INT + 36 STR"],
    ["Ninja", "%60 DEX + %40 STR", "108 DEX + 72 STR"]
  ]
};

const allItems = [...guides, systemGuide];
const sourceFiles = {
  "bedensel": "Bedensel_Savasci_Rehberi_Temiz.pdf",
  "zihinsel": "Zihinsel_Savasci_Rehberi.pdf",
  "buyulu-silah": "Buyulu_Silah_Sura_Rehberi_Temiz.pdf",
  "kara-buyu": "Kara_Buyu_Sura_Rehberi_Temiz.pdf",
  "okcu": "Okcu_Ninja_Rehberi.pdf",
  "bicakci": "Bicakci_Ninja_Rehberi.pdf",
  "iyilestirmeci": "Iyilestirmeci_Saman_Rehberi.pdf",
  "ejderha": "Ejderha_Gucu_Saman_Rehberi.pdf",
  "sistem": "Genel_Sinif_Degisiklikleri_Temiz.pdf"
};
let activeId = "bedensel";
let activeMode = "skill";

const navList = document.querySelector("#navList");
const quickGrid = document.querySelector("#quickGrid");
const guidePanel = document.querySelector("#guidePanel");
const rightRail = document.querySelector("#rightRail");
const searchInput = document.querySelector("#searchInput");
const toast = document.querySelector("#toast");

function setAccent(item) {
  document.documentElement.style.setProperty("--accent", item.accent);
}

function renderNavigation() {
  navList.innerHTML = allItems.map(item => `
    <button class="nav-button ${item.id === activeId ? "active" : ""}" style="--accent:${item.accent}" data-id="${item.id}">
      <span>${item.name}</span>
    </button>
  `).join("");

  quickGrid.innerHTML = guides.map(item => `
    <button class="quick-card ${item.id === activeId ? "active" : ""}" style="--accent:${item.accent}" data-id="${item.id}">
      <small>${item.group}</small>
      <h2>${item.name}</h2>
      <p>${item.role}</p>
    </button>
  `).join("");
}

function renderGuide() {
  const item = allItems.find(entry => entry.id === activeId) || guides[0];
  setAccent(item);
  renderNavigation();

  if (item.id === "sistem") {
    activeMode = "skill";
    renderSystem(item);
  } else {
    renderClass(item);
  }
  renderRail(item);
}

function renderClass(item) {
  const build = item.builds[activeMode];
  guidePanel.innerHTML = `
    <header class="guide-head">
      <p class="eyebrow">${item.group} rehberi</p>
      <h2>${item.name}</h2>
      <p>${item.role}</p>
      <div class="tagline">${item.tags.map(tag => `<span class="chip">${tag}</span>`).join("")}</div>
    </header>

    <section class="section">
      <h3>Genel Bakış & Sınıf Rolü</h3>
      <div class="text-grid">
        <div class="info-card">
          <h4>Rol Özeti</h4>
          ${item.overview.map(text => `<p>${text}</p>`).join("")}
        </div>
        <div class="info-card">
          <h4>Artılar / Eksiler</h4>
          <ul>${item.pros.map(text => `<li>${text}</li>`).join("")}</ul>
          <ul>${item.cons.map(text => `<li>${text}</li>`).join("")}</ul>
        </div>
      </div>
    </section>

    <section class="section">
      <h3>Önemli Güncellemeler & Yeni Mekanikler</h3>
      <div class="update-grid">
        ${item.updates.map(([badge, title, text]) => `
          <article class="update-item">
            <span class="badge">${badge}</span>
            <h4>${title}</h4>
            <p>${text}</p>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="section">
      <h3>İnteraktif Oynanış Seçici</h3>
      <div class="mode-tabs" role="tablist" aria-label="Oynanış yapılandırması">
        <button class="mode-tab ${activeMode === "skill" ? "active" : ""}" data-mode="skill" role="tab">Beceri Odaklı</button>
        <button class="mode-tab ${activeMode === "mount" ? "active" : ""}" data-mode="mount" role="tab">At Üstü</button>
      </div>
      <div class="build-grid">
        <div class="info-card">
          <h4>${build.title}</h4>
          <p>${build.intro}</p>
          <p><strong>Erken aşama:</strong> ${build.early}</p>
          <ol class="steps">${build.order.map(step => `<li>${step}</li>`).join("")}</ol>
          <div class="copy-row">
            <button class="copy-btn" data-copy="${escapeAttr(build.copy)}">Beceri/Efsun Kopyala</button>
          </div>
        </div>
        <div class="detail-list">
          ${build.details.map(([title, text]) => `
            <article>
              <h4>${title}</h4>
              <p>${text}</p>
            </article>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <h3>Karşılaştırma & Hızlı Referans</h3>
      ${summaryTable(item.summary, "Beceri Odaklı", "At Üstü")}
    </section>
  `;
}

function renderSystem(item) {
  guidePanel.innerHTML = `
    <header class="guide-head">
      <p class="eyebrow">Arthion genel kılavuz</p>
      <h2>${item.name}</h2>
      <p>${item.role}</p>
      <div class="tagline">${item.tags.map(tag => `<span class="chip">${tag}</span>`).join("")}</div>
    </header>
    <section class="section">
      <h3>Genel Bakış ve Temel Amaç</h3>
      ${item.overview.map(text => `<p>${text}</p>`).join("")}
      <div class="copy-row">
        <button class="copy-btn" data-copy="${escapeAttr(item.systems.map(([a, b]) => `${a}: ${b}`).join(" | "))}">Sistem Özetini Kopyala</button>
      </div>
    </section>
    <section class="section">
      <h3>Sistem Değişiklikleri</h3>
      <div class="system-grid">
        ${item.systems.map(([title, text]) => `
          <article class="system-card">
            <h4>${title}</h4>
            <p>${text}</p>
          </article>
        `).join("")}
      </div>
    </section>
    <section class="section">
      <h3>Statü Dağılım Tablosu</h3>
      ${summaryTable(item.summary, "Saldırı Değeri Oranı", "Azami Karşılık")}
    </section>
  `;
}

function renderRail(item) {
  rightRail.innerHTML = `
    <h3>Statü Görselleştirici</h3>
    <div class="stat-bars">
      ${Object.entries(item.stats).map(([stat, value]) => `
        <div class="stat-row">
          <span>${stat}</span>
          <div class="bar" aria-label="${stat} ${value}%"><span style="--value:${value}%"></span></div>
          <strong>${value}%</strong>
        </div>
      `).join("")}
    </div>
    <div class="rail-list">
      <div><strong>Aktif Başlık</strong><span>${item.name}</span></div>
      <div><strong>Rol</strong><span>${item.role}</span></div>
      <div><strong>Etiketler</strong><span>${item.tags.join(", ")}</span></div>
      <div><strong>Kaynak PDF</strong><span>${sourceFiles[item.id]}</span></div>
    </div>
  `;
}

function summaryTable(rows, leftLabel, rightLabel) {
  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Kategori</th>
            <th>${leftLabel}</th>
            <th>${rightLabel}</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map(row => `
            <tr>
              <td>${row[0]}</td>
              <td>${row[1]}</td>
              <td>${row[2]}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function escapeAttr(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
}

function setActive(id) {
  activeId = id;
  activeMode = "skill";
  renderGuide();
  applySearchFilter(searchInput.value);
  document.querySelector(".content-layout").scrollIntoView({ behavior: "smooth", block: "start" });
}

function applySearchFilter(query) {
  const needle = query.trim().toLocaleLowerCase("tr");
  document.querySelectorAll(".quick-card, .nav-button").forEach(button => {
    const item = allItems.find(entry => entry.id === button.dataset.id);
    const haystack = JSON.stringify(item).toLocaleLowerCase("tr");
    button.classList.toggle("hidden", Boolean(needle) && !haystack.includes(needle));
  });
}

function performSearch(query) {
  const needle = query.trim().toLocaleLowerCase("tr");
  applySearchFilter(query);

  if (needle) {
    const match = allItems.find(item => JSON.stringify(item).toLocaleLowerCase("tr").includes(needle));
    if (match && match.id !== activeId) {
      activeId = match.id;
      activeMode = "skill";
      renderGuide();
      searchInput.value = query;
      applySearchFilter(query);
    }
  }
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const area = document.createElement("textarea");
    area.value = text;
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
  }
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 1400);
}

document.addEventListener("click", event => {
  const navButton = event.target.closest("[data-id]");
  if (navButton) {
    setActive(navButton.dataset.id);
    return;
  }

  const modeButton = event.target.closest("[data-mode]");
  if (modeButton) {
    activeMode = modeButton.dataset.mode;
    renderGuide();
    applySearchFilter(searchInput.value);
    return;
  }

  const copyButton = event.target.closest("[data-copy]");
  if (copyButton) {
    copyText(copyButton.dataset.copy);
  }
});

searchInput.addEventListener("input", event => performSearch(event.target.value));

renderGuide();
