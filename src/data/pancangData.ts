export * from './types';
import { PricingItem, ServicePriceItem, PileTypeInfo, MethodInfo, AreaInfo, FaqItem, ArticleItem } from './types';
import { GDRIVE_IMAGE_URL } from '../constants/images';
import { KECAMATAN_ARTICLES } from './kecamatanArticles';

export const MINI_PILE_PRICES: PricingItem[] = [
  {
    category: 'Mini Pile Segitiga',
    item: 'Mini Pile Segitiga 28 x 28 cm',
    dimension: '28 x 28 x 28 cm',
    length: '3 m & 6 m',
    concreteQuality: 'K-450 / K-500',
    estimatedPrice: 'Rp 140.000 - Rp 175.000',
    unit: 'meter lari',
    notes: 'Cocok untuk rumah tinggal 2-3 lantai dan ruko lahan terbatas'
  },
  {
    category: 'Mini Pile Kotak',
    item: 'Mini Pile Kotak 20 x 20 cm',
    dimension: '20 x 20 cm',
    length: '3 m & 6 m',
    concreteQuality: 'K-450 / K-500',
    estimatedPrice: 'Rp 130.000 - Rp 160.000',
    unit: 'meter lari',
    notes: 'Ideal untuk pondasi rumah tinggal standar dan pagar panel'
  },
  {
    category: 'Mini Pile Kotak',
    item: 'Mini Pile Kotak 25 x 25 cm',
    dimension: '25 x 25 cm',
    length: '3 m & 6 m',
    concreteQuality: 'K-450 / K-500',
    estimatedPrice: 'Rp 175.000 - Rp 220.000',
    unit: 'meter lari',
    notes: 'Paling banyak digunakan untuk ruko 3-4 lantai, gudang, dan perkantoran'
  },
  {
    category: 'Mini Pile Kotak',
    item: 'Mini Pile Kotak 30 x 30 cm',
    dimension: '30 x 30 cm',
    length: '3 m & 6 m',
    concreteQuality: 'K-450 / K-500',
    estimatedPrice: 'Rp 240.000 - Rp 310.000',
    unit: 'meter lari',
    notes: 'Daya dukung tinggi untuk gedung bertingkat menengah dan warehouse'
  }
];

export const SPUN_PILE_PRICES: PricingItem[] = [
  {
    category: 'Spun Pile Silinder',
    item: 'Spun Pile Dia 300 mm (Class A/B)',
    dimension: 'Diameter 300 mm, tebal 60 mm',
    length: '6 m, 8 m, 10 m, 12 m',
    concreteQuality: 'K-600',
    estimatedPrice: 'Rp 260.000 - Rp 330.000',
    unit: 'meter lari',
    notes: 'Pondasi jembatan skala menengah, gedung 4-6 lantai'
  },
  {
    category: 'Spun Pile Silinder',
    item: 'Spun Pile Dia 350 mm (Class A/B)',
    dimension: 'Diameter 350 mm, tebal 65 mm',
    length: '6 m, 8 m, 10 m, 12 m',
    concreteQuality: 'K-600',
    estimatedPrice: 'Rp 320.000 - Rp 410.000',
    unit: 'meter lari',
    notes: 'Daya dukung aksial tinggi, sering digunakan proyek komersial'
  },
  {
    category: 'Spun Pile Silinder',
    item: 'Spun Pile Dia 400 mm (Class A/B/C)',
    dimension: 'Diameter 400 mm, tebal 70 mm',
    length: '8 m, 10 m, 12 m, 15 m',
    concreteQuality: 'K-600',
    estimatedPrice: 'Rp 410.000 - Rp 520.000',
    unit: 'meter lari',
    notes: 'Pabrik industri berat, flyover, dan apartemen'
  },
  {
    category: 'Spun Pile Silinder',
    item: 'Spun Pile Dia 500 mm (Class A/B/C)',
    dimension: 'Diameter 500 mm, tebal 80 mm',
    length: '10 m, 12 m, 15 m',
    concreteQuality: 'K-600',
    estimatedPrice: 'Rp 580.000 - Rp 730.000',
    unit: 'meter lari',
    notes: 'Infrastruktur pelabuhan, jembatan bentang panjang, high-rise'
  },
  {
    category: 'Spun Pile Silinder',
    item: 'Spun Pile Dia 600 mm (Class A/B/C)',
    dimension: 'Diameter 600 mm, tebal 90 mm',
    length: '12 m, 15 m',
    concreteQuality: 'K-600',
    estimatedPrice: 'Rp 780.000 - Rp 980.000',
    unit: 'meter lari',
    notes: 'Pondasi beban berat ekstrem dan infrastruktur strategis'
  }
];

export const SERVICE_PRICES: ServicePriceItem[] = [
  {
    method: 'Hydraulic Static Pile Driver (HSPD)',
    capacityOrType: 'Mesin Tekan Hidrolik 80 - 120 Ton (Mini Pile)',
    pricePerMeter: 'Rp 45.000 - Rp 75.000',
    minChargeOrSetup: 'Min. charge 500 - 800 meter',
    characteristics: 'Tanpa bising (silent), tanpa getaran merusak, ramah lingkungan perkotaan',
    suitableFor: 'Area padat penduduk Jakarta, samping bangunan eksisting, rumah sakit, perkantoran'
  },
  {
    method: 'Hydraulic Static Pile Driver (HSPD Heavy)',
    capacityOrType: 'Mesin Tekan Hidrolik 240 - 420 Ton (Spun Pile)',
    pricePerMeter: 'Rp 70.000 - Rp 120.000',
    minChargeOrSetup: 'Min. charge 1.000 - 1.500 meter',
    characteristics: 'Gaya tekan hidrolik langsung, monitoring tekanan manometer real-time',
    suitableFor: 'Proyek gedung bertingkat, pabrik, kawasan industri di Jabodetabek'
  },
  {
    method: 'Drop Hammer / Tripod Rig',
    capacityOrType: 'Mesin Pancang Derek Jatuh Bebas (1.5 - 2.5 Ton)',
    pricePerMeter: 'Rp 35.000 - Rp 55.000',
    minChargeOrSetup: 'Min. charge 400 - 600 meter',
    characteristics: 'Biaya relatif ekonomis, mobilisasi ringkas, timbul suara benturan dan getaran',
    suitableFor: 'Lahan terbuka, area belum padat bangunan, proyek pergudangan suburban'
  },
  {
    method: 'Diesel Hammer Pile Driver',
    capacityOrType: 'Diesel Impact Hammer 2.5 - 4.5 Ton',
    pricePerMeter: 'Rp 50.000 - Rp 85.000',
    minChargeOrSetup: 'Min. charge 800 meter',
    characteristics: 'Energi tumbukan tinggi, kecepatan penetrasi cepat, getaran & asap mesin diesel',
    suitableFor: 'Proyek jembatan, jalan tol, pelabuhan, lahan terbuka luas'
  }
];

export const PILE_TYPES: PileTypeInfo[] = [
  {
    id: 'mini-pile',
    name: 'Mini Pile',
    title: 'Tiang Pancang Mini Pile Beton Pracetak',
    definition: 'Mini pile adalah tiang pancang beton pracetak (precast concrete) berdimensi penampang kecil hingga sedang, umumnya berbentuk bujur sangkar (20x20 cm, 25x25 cm, 30x30 cm) atau segitiga (28x28x28 cm) dengan panjang segmen 3 meter hingga 6 meter.',
    function: 'Mentransfer beban vertikal maupun lateral dari struktur bangunan atas menembus lapisan tanah lunak menuju lapisan tanah keras (bearing layer) di kedalaman tertentu.',
    advantages: [
      'Mudah dimobilisasi ke area perumahan perkotaan bergang atau jalan sempit',
      'Kualitas beton presisi pabrikasi (mutu K-450 hingga K-500)',
      'Sistem sambungan las pelat baja (welded joint) yang kokoh dan presisi',
      'Hemat biaya dan waktu pengerjaan dibandingkan pondasi konvensional'
    ],
    commonUses: [
      'Pondasi rumah tinggal 2 hingga 4 lantai di wilayah Jakarta',
      'Ruko, rukan, kafe, dan bangunan komersial perkotaan',
      'Pondasi pagar beton bertulang dan tanggul penahan tanah',
      'Gudang rangka baja dan workshop industri menengah'
    ],
    specification: 'Dimensi: 20x20 cm, 25x25 cm, 28x28 cm, 30x30 cm | Panjang: 3m & 6m | Mutu: K-450 / K-500'
  },
  {
    id: 'spun-pile',
    name: 'Spun Pile',
    title: 'Tiang Pancang Bulat Pracetak Pratekan (Prestressed Concrete)',
    definition: 'Spun pile adalah tiang pancang berbentuk silinder berongga (hollow) yang diproduksi dengan metode putaran sentrifugal (centrifugal spinning) menggunakan beton mutu sangat tinggi (K-600) dan kabel baja prategang (PC strand/PC bar).',
    function: 'Menahan beban aksial tekan yang sangat masif, momen lentur, serta gaya lateral tinggi pada struktur bangunan besar dan infrastruktur berat.',
    advantages: [
      'Kekuatan struktural sangat tinggi dengan rasio berat sendiri yang efisien berkat rongga tengah',
      'Tahan terhadap retak akibat tegangan lentur saat pengangkatan maupun pemancangan',
      'Dapat disambung dengan sambungan las melingkar khusus hingga kedalaman lebih dari 30 meter',
      'Permukaan beton padat dan kedap air, tahan korosi sulfat atau air laut di pesisir Jakarta'
    ],
    commonUses: [
      'Gedung pencakar langit dan apartemen bertingkat tinggi di Jakarta',
      'Jembatan bentang panjang, flyover layang, dan jalur jalan tol',
      'Pabrik manufaktur berat, silo, dermaga, dan instalasi industri',
      'Pondasi tangki penyimpanan minyak dan fasilitas pembangkit daya'
    ],
    specification: 'Diameter: 300 mm hingga 600 mm | Panjang segmen: 6m - 15m | Mutu Beton: K-600'
  },
  {
    id: 'tiang-pancang-beton',
    name: 'Tiang Pancang Beton Bertulang',
    title: 'Tiang Pancang Beton Pracetak Standar Konstruksi',
    definition: 'Tiang pancang beton adalah elemen struktur pracetak dari campuran semen, agregat pilihan, dan tulangan baja berstandar SNI yang dicetak di pabrik dengan pengawasan mutu ketat untuk mendukung beban struktural bangunan.',
    function: 'Meneruskan beban struktur ke tanah keras baik melalui tahanan ujung tiang (end bearing) maupun gesekan selimut tiang (skin friction).',
    advantages: [
      'Kapasitas daya dukung terukur dan teruji melalui perhitungan geoteknik',
      'Tidak terpengaruh oleh elevasi muka air tanah Jakarta yang tinggi',
      'Dapat segera diuji kapasitasnya dengan PDA test (Pile Driving Analyzer) setelah terpancang',
      'Ketahanan jangka panjang hingga puluhan tahun tanpa degradasi material'
    ],
    commonUses: [
      'Pondasi pondasi gedung perkantoran, rumah sakit, dan pusat perbelanjaan',
      'Pondasi retaining wall dan struktur penahan lereng sungai di Jakarta',
      'Menara transmisi dan BTS telekomunikasi',
      'Pondasi jembatan penyeberangan orang (JPO) dan gerbang tol'
    ],
    specification: 'Bentuk: Kotak / Segitiga / Silinder | Mutu: K-400 s/d K-600 | Standar: SNI Precast Concrete'
  },
  {
    id: 'sheet-pile',
    name: 'Sheet Pile Beton',
    title: 'Sheet Pile Beton Pracetak (Turap Beton Corrugated & Flat)',
    definition: 'Sheet pile beton (turap) adalah deretan tiang pancang pipih saling mengunci (interlocking) yang dipancang ke dalam tanah untuk membentuk dinding penahan tanah atau penghalang air secara vertikal kontinyu.',
    function: 'Menahan tekanan lateral tanah aktif, mencegah longsoran tebing galian, serta mencegah rembesan air pada tepi sungai, saluran drainase, maupun galian basement.',
    advantages: [
      'Memiliki profil gelombang (corrugated) untuk momen inersia dan ketahanan lentur maksimal',
      'Sistem interlock rapat meminimalkan infiltrasi butiran tanah dan air',
      'Pemasangan cepat dan rapi, menghasilkan dinding tebing yang bersih',
      'Tahan terhadap abrasi air dan lingkungan asam tanah'
    ],
    commonUses: [
      'Normalisasi bantaran sungai, kanal banjir, dan drainase perkotaan DKI Jakarta',
      'Dinding penahan tanah pada galian basement gedung dan underpass',
      'Proteksi tebing dermaga, kolam retensi, dan pesisir pantai Jakarta Utara',
      'Perkuatan lereng jalan raya dan jalan tol'
    ],
    specification: 'Tipe: Corrugated Concrete Sheet Pile (CCSP) tipe W-325 hingga W-600 | Mutu: K-500'
  },
  {
    id: 'tiang-pancang-kotak',
    name: 'Tiang Pancang Kotak',
    title: 'Square Concrete Pile (Tiang Pancang Penampang Bujur Sangkar)',
    definition: 'Tiang pancang kotak (square pile) adalah tiang beton pracetak dengan penampang bujur sangkar simetris yang dilengkapi tulangan longitudinal merata di keempat sisinya serta sengkang spiral rapat di bagian kepala dan ujung sepatu tiang.',
    function: 'Menyediakan stabilitas beban dua arah yang seimbang terhadap gaya aksial dan momen lentur di seluruh sumbu simetri bangunan.',
    advantages: [
      'Kapasitas momen lentur seimbang pada kedua sumbu utama (sumbu X dan Y)',
      'Mudah disambung dengan pengelasan pelat joint persegi 4 sisi',
      'Penetrasi tanah sangat stabil dengan ujung tiang berbentuk pensil atau sepatu baja (shoe pile)',
      'Luas selimut penampang optimal untuk memaksimalkan gesekan tanah lateral (skin friction)'
    ],
    commonUses: [
      'Struktur gedung ruko, showroom otomotif, dan perkantoran',
      'Pondasi pabrik dan lantai pergudangan dengan beban rak berat',
      'Pondasi abutment jembatan dan flyover jalan kota',
      'Konstruksi fasilitas umum bertingkat 3 hingga 6 lantai'
    ],
    specification: 'Ukuran standar: 20x20 cm, 25x25 cm, 30x30 cm, 35x35 cm, 40x40 cm'
  }
];

export const METHODS: MethodInfo[] = [
  {
    id: 'hspd',
    name: 'HSPD (Hydraulic Static Pile Driver)',
    fullName: 'Hydraulic Static Pile Driver (Sistem Pancang Tekan Hidrolik)',
    noiseLevel: 'Sangat Rendah (Hampir Hening / Silent)',
    vibrationLevel: 'Nol Getaran (Tidak Ada Retak Pada Bangunan Sekitar)',
    speed: 'Sangat Cepat & Efisien (15-25 titik per hari tergantung kedalaman)',
    description: 'HSPD adalah teknologi pemancangan modern yang menekan tiang pancang ke dalam tanah menggunakan gaya hidrolik statis tanpa proses pemukulan atau hentakan palu. Berat counterweight mesin digunakan sebagai tumpuan reaksi tekan.',
    advantages: [
      'Ramah lingkungan perkotaan: bebas dari komplain warga sekitar terkait suara bising',
      'Aman untuk gedung bersebelahan, tidak menimbulkan retak dinding atau fondasi tetangga',
      'Daya dukung tiang dapat dipantau langsung dari manometer tekanan hidrolik saat proses penetrasi',
      'Tiang tidak rentan pecah kepala tiang karena ditekan secara statis dan konstan'
    ],
    disadvantages: [
      'Alat memiliki bobot operasional cukup berat sehingga membutuhkan kondisi tanah permukaan yang padat dan rata untuk lintasan roda crawler',
      'Membutuhkan akses jalan yang memadai untuk mobilisasi mesin dan counterweight beban'
    ],
    urbanJakartaSuitability: 'Sangat Direkomendasikan untuk 90% proyek di kawasan perumahan padat, jalan protokol, dan area perkantoran Jakarta.'
  },
  {
    id: 'hydraulic-pile-driving',
    name: 'Hydraulic Pile Driving',
    fullName: 'Hydraulic Hammer Driving (Palu Hidrolik Terkontrol)',
    noiseLevel: 'Sedang (Jauh lebih tenang dibanding Diesel Hammer)',
    vibrationLevel: 'Terkontrol (Frekuensi dan pukulan dapat diatur secara presisi)',
    speed: 'Cepat & Konsisten',
    description: 'Metode penumbukan menggunakan ram yang diangkat dan dijatuhkan secara hidrolik dengan akselerasi terkontrol, menghasilkan transfer energi pukulan yang seragam ke tiang pancang.',
    advantages: [
      'Energi pukulan dapat diatur secara elektronik sesuai spesifikasi daya dukung tanah',
      'Efisiensi transfer pukulan lebih tinggi dibanding drop hammer konvensional',
      'Dapat digunakan pada kondisi tanah keras dengan lapisan lensa pasir padat'
    ],
    disadvantages: [
      'Masih menghasilkan suara ketukan mekanis sehingga memerlukan peredam pada area padat',
      'Biaya sewa alat lebih tinggi dibanding drop hammer sederhana'
    ],
    urbanJakartaSuitability: 'Cocok untuk proyek komersial dan industri semi-urban di kawasan Jabodetabek.'
  },
  {
    id: 'diesel-hammer',
    name: 'Diesel Hammer',
    fullName: 'Diesel Impact Hammer (Palu Pancang Tenaga Diesel)',
    noiseLevel: 'Tinggi (Dentuman suara mesin pembakaran diesel)',
    vibrationLevel: 'Tinggi (Gelombang kejut getaran merambat ke tanah sekitar)',
    speed: 'Tinggi untuk proyek terbuka skala besar',
    description: 'Mesin pancang beroperasi dengan siklus pembakaran bahan bakar diesel saat palu menumbuk tiang, menghasilkan daya pukul ledakan yang mendorong tiang masuk lebih dalam.',
    advantages: [
      'Mampu menembus lapisan tanah keras berbatu atau pasir padat',
      'Tidak membutuhkan sumber daya listrik eksternal di lokasi proyek',
      'Produktivitas tinggi pada lahan luas tanpa hambatan batas tapak'
    ],
    disadvantages: [
      'Menimbulkan suara dentuman sangat keras dan asap knalpot pembakaran',
      'Getaran kuat dapat memicu kerusakan struktural pada pemukiman padat di Jakarta'
    ],
    urbanJakartaSuitability: 'Hanya diizinkan untuk proyek di lahan terbuka luas, jalan tol baru, dan kawasan industri jauh dari pemukiman.'
  },
  {
    id: 'drop-hammer',
    name: 'Drop Hammer',
    fullName: 'Drop Hammer / Tripod Winch (Palu Jatuh Bebas Manual/Winch)',
    noiseLevel: 'Tinggi (Benturan besi baja dengan kepala tiang)',
    vibrationLevel: 'Tinggi',
    speed: 'Sedang',
    description: 'Metode konvensional di mana beban pemberat (hammer) diangkat menggunakan derek/winch kabel baja ke ketinggian tertentu lalu dilepaskan secara jatuh bebas menimpa tiang.',
    advantages: [
      'Konstruksi rig alat sangat simpel dan fleksibel dipindahkan',
      'Biaya investasi dan tarif sewa paling ekonomis',
      'Cocok untuk proyek skala kecil di luar radius pemukiman padat'
    ],
    disadvantages: [
      'Risiko kepala tiang retak atau pecah jika bantalan helm pancang tidak terawat',
      'Kecepatan pengerjaan relatif lebih lambat dibanding HSPD hidrolik modern'
    ],
    urbanJakartaSuitability: 'Kurang direkomendasikan untuk pusat kota Jakarta; lebih umum digunakan di pinggiran Bogor atau Tangerang luar.'
  }
];

export const SERVICE_AREAS: AreaInfo[] = [
  {
    name: 'Jakarta Pusat',
    region: 'DKI Jakarta',
    soilCharacteristics: 'Dominasi tanah lempung berlapis pasir pada kedalaman menengah; elevasi muka air tanah bervariasi.',
    recommendedMethod: 'Wajib HSPD (Hydraulic Static Pile Driver) untuk menghindari komplain dan risiko getaran gedung sekitar.',
    coverageSubdistricts: ['Gambir', 'Tanah Abang', 'Menteng', 'Senen', 'Cempaka Putih', 'Johar Baru', 'Kemayoran', 'Sawah Besar'],
    commonProjects: 'Ruko komersial, gedung kantor, hotel butik, dan renovasi rumah tinggal bertingkat.'
  },
  {
    name: 'Jakarta Barat',
    region: 'DKI Jakarta',
    soilCharacteristics: 'Lapisan tanah lempung lunak (soft clay) alluvial cukup tebal, membutuhkan penetrasi kedalaman 18-28 meter untuk tanah keras.',
    recommendedMethod: 'HSPD untuk pemukiman padat; Spun Pile dan Mini Pile 25x25 atau 30x30 cm.',
    coverageSubdistricts: ['Kebon Jeruk', 'Kembangan', 'Grogol Petamburan', 'Palmerah', 'Taman Sari', 'Tambora', 'Cengkareng', 'Kalideres'],
    commonProjects: 'Kompleks ruko perkantoran, perumahan cluster, gudang logistik Cengkareng, dan apartemen.'
  },
  {
    name: 'Jakarta Selatan',
    region: 'DKI Jakarta',
    soilCharacteristics: 'Struktur tanah relatif lebih padat dan stabil dibanding Jakarta Utara, lapisan tanah keras dapat dicapai di kedalaman 12-20 meter.',
    recommendedMethod: 'HSPD Mini Pile sangat dominan karena kepadatan perumahan elit dan ruko.',
    coverageSubdistricts: ['Kebayoran Baru', 'Kebayoran Lama', 'Cilandak', 'Pancoran', 'Tebet', 'Mampang Prapatan', 'Pasar Minggu', 'Jagakarsa', 'Pesanggrahan', 'Setiabudi'],
    commonProjects: 'Rumah tinggal mewah 3-4 lantai, gedung klinik/rumah sakit, cafe/resto bertingkat, dan perkantoran modern.'
  },
  {
    name: 'Jakarta Timur',
    region: 'DKI Jakarta',
    soilCharacteristics: 'Variasi tanah lanau berlempung dan padas keras di beberapa bagian selatan; akses jalan relatif lebar di kawasan industri.',
    recommendedMethod: 'HSPD untuk area perumahan; Hydraulic Hammer / Drop Hammer untuk kawasan pergudangan.',
    coverageSubdistricts: ['Matraman', 'Pulo Gadung', 'Jatinegara', 'Duren Sawit', 'Kramat Jati', 'Makasar', 'Pasar Rebo', 'Ciracas', 'Cipayung', 'Cakung'],
    commonProjects: 'Kawasan industri Pulogadung & Cakung, pergudangan ekspedisi, townhouse, dan sekolah bertingkat.'
  },
  {
    name: 'Jakarta Utara',
    region: 'DKI Jakarta',
    soilCharacteristics: 'Lapisan lempung marin sangat lunak dan tebal, muka air tanah sangat tinggi serta rawan pengaruh penurunan muka tanah (subsidence).',
    recommendedMethod: 'Spun Pile K-600 dan Mini Pile bermutu tinggi dipancang dengan HSPD berkapasitas tonase tinggi; Sheet Pile untuk tepi perairan.',
    coverageSubdistricts: ['Penjaringan', 'Pademangan', 'Tanjung Priok', 'Koja', 'Kelapa Gading', 'Cilincing'],
    commonProjects: 'Dermaga, gudang pelabuhan Tanjung Priok, hunian mewah Kelapa Gading & PIK, tanggul penahan banjir.'
  },
  {
    name: 'Tangerang & Tangsel',
    region: 'Bodetabek',
    soilCharacteristics: 'Kondisi tanah bervariasi dari lempung merah padat di Tangerang Selatan hingga endapan alluvial di Tangerang Utara.',
    recommendedMethod: 'HSPD untuk perumahan BSD, Alam Sutera, Gading Serpong, Bintaro; Mini Pile 20x20 & 25x25 cm.',
    coverageSubdistricts: ['BSD City', 'Serpong', 'Ciputat', 'Pamulang', 'Cikokol', 'Karawaci', 'Batuceper', 'Balaraja'],
    commonProjects: 'Cluster perumahan, ruko komersial, pabrik, dan gudang industri.'
  },
  {
    name: 'Bekasi (Kota & Kab)',
    region: 'Bodetabek',
    soilCharacteristics: 'Sebagian besar tanah lempung ekspansif dengan daya susut tinggi; kawasan industri luas dengan akses container.',
    recommendedMethod: 'Spun Pile dan Square Pile kapasitas beban berat dengan HSPD maupun Hydraulic Hammer.',
    coverageSubdistricts: ['Bekasi Barat', 'Bekasi Selatan', 'Medan Satria', 'Cikarang Barat', 'Cikarang Pusat', 'Tambun', 'Cibitung'],
    commonProjects: 'Pabrik multinasional GIIC & MM2100, gudang logistik raksasa, dan ruko pusat niaga.'
  },
  {
    name: 'Depok & Bogor',
    region: 'Bodetabek',
    soilCharacteristics: 'Tanah vulkanik berbukit dan lempung lanauan; kedalaman tanah keras bervariasi dengan kontur miring.',
    recommendedMethod: 'Mini Pile dengan rig lincah atau HSPD compact untuk area berkontur.',
    coverageSubdistricts: ['Margonda', 'Cinere', 'Cimanggis', 'Sawangan', 'Bogor Kota', 'Cibinong', 'Sentul'],
    commonProjects: 'Perumahan bertingkat, universitas, ruko komersial, dan jembatan lingkungan.'
  }
];

export const COST_FACTORS = [
  {
    number: '01',
    title: 'Jenis Tiang Pancang',
    description: 'Pemilihan material antara Mini Pile beton bertulang kotak, Spun Pile prategang silinder, atau Sheet Pile turap memiliki selisih biaya material produksi dan sambungan las yang berbeda signifikan.'
  },
  {
    number: '02',
    title: 'Ukuran Dimensi Tiang',
    description: 'Semakin besar penampang tiang (misalnya 20x20 cm vs 25x25 cm vs spun pile diameter 500 mm), semakin banyak volume beton dan besi tulangan yang digunakan, berbanding lurus dengan harga per meter.'
  },
  {
    number: '03',
    title: 'Mutu Beton (K-450 s/d K-600)',
    description: 'Tiang pancang dengan spesifikasi mutu beton tinggi (K-500 atau K-600) untuk beban ekstrem atau lingkungan agresif memerlukan formulasi semen dan aditif khusus yang memengaruhi tarif material.'
  },
  {
    number: '04',
    title: 'Jumlah Titik Pancang (Volume Pekerjaan)',
    description: 'Proyek dengan volume meter lari atau jumlah titik banyak akan mendapatkan harga satuan lebih murah (skala ekonomis) karena biaya tetap setup alat terdistribusi lebih merata.'
  },
  {
    number: '05',
    title: 'Kedalaman Pemancangan Tanah Keras',
    description: 'Kedalaman tanah keras (berdasarkan hasil uji sondir/SPT) menentukan kebutuhan panjang tiang serta jumlah sambungan pelat las (welded joint) di setiap titik pemancangan.'
  },
  {
    number: '06',
    title: 'Kondisi Lapisan Geoteknik Tanah',
    description: 'Tanah dengan lapisan lensa pasir padat atau kerikil memerlukan energi tekan/pukul lebih besar, durasi pengerjaan lebih lama, atau pekerjaan pra-pengeboran (pre-boring) terlebih dahulu.'
  },
  {
    number: '07',
    title: 'Akses Lokasi & Manuver Proyek',
    description: 'Jalan akses menuju proyek di Jakarta (lebar jalan, kabel listrik melintang, jembatan sempit) menentukan apakah armada trailer pembawa tiang dan mesin pancang dapat masuk dengan leluasa atau perlu estafet.'
  },
  {
    number: '08',
    title: 'Jenis Metode & Alat Pancang',
    description: 'Metode HSPD (Hydraulic Static Pile Driver) tanpa suara dan getaran umumnya memiliki tarif sewa yang berbeda dengan mesin drop hammer konvensional karena teknologi hidrolik mutakhirnya.'
  },
  {
    number: '09',
    title: 'Biaya Mobilisasi & Demobilisasi Alat',
    description: 'Pengangkutan mesin berat, unit crawler, dan ratusan ton balok counterweight menggunakan truk tronton atau lowbed memerlukan alokasi mob-demob tersendiri sesuai jarak tempuh ke lokasi proyek.'
  },
  {
    number: '10',
    title: 'Lokasi Geografis & Jam Kerja Proyek',
    description: 'Regulasi jam kerja truk tronton di jalan protokol DKI Jakarta (pembatasan jam operasional malam hari) dan perizinan lingkungan setempat dapat memengaruhi produktivitas harian dan biaya operasional.'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'Berapa harga tiang pancang di Jakarta?',
    answer: 'Harga material tiang pancang di Jakarta berkisar mulai dari Rp 130.000 hingga Rp 310.000 per meter lari untuk jenis mini pile (ukuran 20x20 cm hingga 30x30 cm mutu K-450/K-500). Untuk jenis spun pile pratekan bulat (diameter 300 mm hingga 600 mm mutu K-600), harganya berkisar antara Rp 260.000 hingga Rp 980.000 per meter lari tergantung diameter, ketebalan, dan panjang segmen tiang.'
  },
  {
    question: 'Berapa harga jasa pancang Jakarta?',
    answer: 'Biaya jasa pemancangan di Jakarta umumnya berkisar antara Rp 45.000 hingga Rp 75.000 per meter lari untuk metode mesin tekan hidrolik HSPD mini pile, dan Rp 70.000 hingga Rp 120.000 per meter lari untuk spun pile. Jasa drop hammer berkisar Rp 35.000 hingga Rp 55.000 per meter. Masing-masing pekerjaan biasanya dikenakan ketentuan minimum charge pengerjaan (misalnya minimum 500-800 meter).'
  },
  {
    question: 'Berapa harga mini pile?',
    answer: 'Untuk mini pile ukuran 20x20 cm harganya berkisar Rp 130.000 - Rp 160.000 per meter. Ukuran paling populer 25x25 cm berkisar Rp 175.000 - Rp 220.000 per meter. Sedangkan ukuran 30x30 cm berkisar Rp 240.000 - Rp 310.000 per meter lari, dan mini pile segitiga 28x28 cm berkisar Rp 140.000 - Rp 175.000 per meter.'
  },
  {
    question: 'Apa itu HSPD?',
    answer: 'HSPD adalah singkatan dari Hydraulic Static Pile Driver, yaitu alat pancang modern yang menekan tiang pancang beton ke dalam tanah dengan kekuatan dongkrak hidrolik memanfaatkan beban counterweight. Keunggulan utamanya adalah sama sekali tidak menimbulkan suara bising dan getaran benturan, sehingga sangat aman dan menjadi standar pemancangan di kawasan padat DKI Jakarta.'
  },
  {
    question: 'Apa perbedaan mini pile dan spun pile?',
    answer: 'Mini pile umumnya berbentuk penampang kotak padat (solid square) dengan ukuran penampang kecil hingga sedang (20x20 cm hingga 30x30 cm), mutu beton K-450 s/d K-500, ideal untuk ruko dan rumah tinggal 2-4 lantai. Sedangkan spun pile berbentuk silinder bulat berongga (hollow pipe) dengan metode cetak sentrifugal, mutu beton K-600 prategang, dimensi diameter 300 mm hingga 600 mm ke atas untuk menahan beban gedung bertingkat tinggi dan jembatan.'
  },
  {
    question: 'Apa saja faktor yang memengaruhi harga pancang?',
    answer: 'Faktor penentu biaya meliputi: ukuran dan dimensi tiang, mutu beton, volume total meter pekerjaan, kedalaman tanah keras hasil uji sondir, metode pemancangan (HSPD vs Drop Hammer), kondisi akses jalan ke lokasi proyek, serta jarak mobilisasi alat berat.'
  },
  {
    question: 'Apakah jasa pancang melayani proyek di Jakarta?',
    answer: 'Ya, layanan jasa pemancangan mencakup seluruh 5 wilayah kota administrasi DKI Jakarta (Jakarta Pusat, Jakarta Barat, Jakarta Selatan, Jakarta Timur, Jakarta Utara) serta area penyangga Jabodetabek (Tangerang, Tangerang Selatan, Bekasi, Depok, dan Bogor).'
  },
  {
    question: 'Bagaimana cara menghitung kebutuhan tiang pancang?',
    answer: 'Kebutuhan tiang dihitung dari: (1) Hasil penyelidikan tanah (Soil Test Sondir / Boring Log) untuk menentukan kedalaman lapisan tanah keras (bearing stratum), dan (2) Perhitungan beban struktural dari insinyur struktur untuk menentukan jumlah titik tiang dan ukuran penampang per titik pile cap.'
  },
  {
    question: 'Apakah harga pancang sudah termasuk mobilisasi alat?',
    answer: 'Umumnya harga jasa per meter belum termasuk mobilisasi dan demobilisasi alat (mob-demob). Biaya mob-demob dihitung terpisah sebagai lump-sum (satu paket) berdasarkan jarak lokasi proyek, jenis alat (kapasitas tonase mesin HSPD), dan jumlah armada pengangkut balok counterweight.'
  },
  {
    question: 'Bagaimana cara mendapatkan estimasi harga pancang?',
    answer: 'Anda dapat menyiapkan data proyek seperti lokasi pekerjaan, data hasil sondir tanah (jika sudah ada), rencana jumlah titik dan kedalaman, lalu berkonsultasi melalui form estimasi di website ini atau menghubungi penyedia jasa berpengalaman.'
  }
];

export const CORE_ARTICLES: ArticleItem[] = [
  {
    id: '1',
    slug: 'harga-tiang-pancang-beton-jakarta-terbaru',
    title: 'Harga Tiang Pancang Beton Jakarta Terbaru dan Panduan Estimasi Proyek',
    category: 'Harga Pancang',
    seoTitle: 'Harga Tiang Pancang Beton Jakarta Terbaru 2026 | Panduan Biaya',
    metaDescription: 'Update lengkap estimasi harga tiang pancang beton di Jakarta terbaru untuk mini pile dan spun pile, spesifikasi mutu beton, dan panduan anggaran konstruksi.',
    date: '08 Oktober 2026',
    readTime: '6 menit',
    author: 'Tim Geoteknik & Pondasi',
    featuredImage: GDRIVE_IMAGE_URL,
    imageAlt: 'Tumpukan tiang pancang beton mini pile precast di proyek Jakarta',
    excerpt: 'Mengetahui rincian harga tiang pancang beton di Jakarta sangat penting bagi kontraktor dan pemilik proyek guna merancang estimasi RAB pondasi secara cermat dan realistis.',
    relatedSlugs: ['harga-jasa-pancang-jakarta-dan-faktor-yang-mempengaruhinya', 'harga-mini-pile-25-x-25-dan-30-x-30', 'faktor-yang-mempengaruhi-biaya-pemancangan'],
    content: [
      'Pondasi tiang pancang beton merupakan elemen paling krusial dalam konstruksi bangunan di wilayah DKI Jakarta. Karakteristik lapisan tanah Jakarta yang beragam—mulai dari tanah alluvial lunak di kawasan pesisir utara hingga formasi lempung berpasir di Jakarta Selatan—menuntut pemilihan tipe pondasi dalam yang andal.',
      'Secara umum, harga tiang pancang beton di Jakarta ditentukan oleh bentuk penampang, dimensi ukuran, mutu beton yang digunakan, serta panjang segmen tiang per batang.',
      'Untuk kebutuhan proyek skala menengah seperti perumahan 2–3 lantai, ruko, dan rukan perkantoran, tiang pancang mini pile ukuran 20x20 cm dan 25x25 cm dengan mutu K-450 dibanderol pada kisaran Rp 130.000 hingga Rp 220.000 per meter lari.',
      'Sementara itu, tiang pancang spun pile silinder berongga dengan mutu beton K-600 untuk beban gedung tinggi dan struktur industri berkisar mulai dari Rp 260.000 hingga Rp 980.000 per meter lari sesuai diameter yang dipilih.',
      'Penting diingat bahwa harga material di atas belum mencakup biaya jasa pelaksanaan pemancangan, penyambungan pelat las antar segmen tiang, pemotongan kepala tiang (chipping/pile head cutting), serta biaya mobilisasi unit mesin pancang.'
    ]
  },
  {
    id: '2',
    slug: 'harga-jasa-pancang-jakarta-dan-faktor-yang-mempengaruhinya',
    title: 'Harga Jasa Pancang Jakarta dan Faktor Teknis yang Mempengaruhinya',
    category: 'Jasa Pancang',
    seoTitle: 'Harga Jasa Pancang Jakarta Terbaru & Faktor Biaya Pemancangan',
    metaDescription: 'Pelajari rincian tarif jasa pancang Jakarta, sistem biaya per meter lari, sistem minimum charge, dan faktor teknis geoteknik penentu biaya.',
    date: '05 Oktober 2026',
    readTime: '7 menit',
    author: 'Konsultan Pemancangan',
    featuredImage: GDRIVE_IMAGE_URL,
    imageAlt: 'Alat pancang hidrolik HSPD bekerja di proyek konstruksi Jakarta',
    excerpt: 'Tarif jasa pemancangan di Jakarta bervariasi bergantung pada metode alat yang digunakan, volume total pemancangan, serta tingkat kesulitan akses lokasi proyek.',
    relatedSlugs: ['harga-tiang-pancang-beton-jakarta-terbaru', 'apa-itu-hspd-dan-bagaimana-cara-kerjanya', 'jasa-pancang-jakarta-untuk-gedung-dan-gudang'],
    content: [
      'Bagi para perencana proyek di Jakarta, memahami komponen tarif jasa pemancangan sama pentingnya dengan mengetahui harga material tiang itu sendiri.',
      'Struktur penetapan harga jasa pancang di Jakarta umumnya menggunakan satuan per meter lari tertanam dengan ketentuan minimum charge volume. Untuk metode Hydraulic Static Pile Driver (HSPD), biaya jasa berkisar antara Rp 45.000 hingga Rp 75.000 per meter untuk mini pile, dengan batas minimum charge sekitar 500 hingga 800 meter lari.',
      'Jika proyek memiliki volume di bawah ambang batas minimum charge, maka pemilik proyek tetap dikenakan tarif borongan minimum charge yang setara dengan batas volume tersebut guna menutup biaya operasional dan upah regu kerja mesin.',
      'Selain biaya per meter, komponen lain yang harus dihitung adalah biaya mobilisasi dan demobilisasi (mob-demob) alat berat. Mengingat mesin HSPD memiliki bobot mati dan balok pemberat (counterweight) mencapai ratusan ton, proses pengangkutannya memerlukan 4 hingga 8 unit truk tronton khusus.',
      'Untuk mendapatkan penawaran yang transparan dan efisien, pastikan Anda telah melakukan penyelidikan tanah (soil test sondir) sebelum mengajukan penawaran kepada kontraktor pemancangan.'
    ]
  },
  {
    id: '3',
    slug: 'harga-mini-pile-25-x-25-dan-30-x-30',
    title: 'Harga Mini Pile 25 x 25 dan 30 x 30: Spesifikasi dan Kapasitas Beban',
    category: 'Mini Pile',
    seoTitle: 'Harga Mini Pile 25 x 25 dan 30 x 30 cm Jakarta | Spesifikasi Beban',
    metaDescription: 'Perbandingan harga tiang pancang mini pile ukuran 25x25 cm dan 30x30 cm di Jakarta, kapasitas daya dukung izin, dan rekomendasi penggunaannya.',
    date: '02 Oktober 2026',
    readTime: '5 menit',
    author: 'Teknik Sipil Indonesia',
    featuredImage: GDRIVE_IMAGE_URL,
    imageAlt: 'Mini pile ukuran 25x25 cm dan 30x30 cm mutu K-450',
    excerpt: 'Dua ukuran mini pile paling populer di Jakarta adalah penampang 25x25 cm dan 30x30 cm. Simak perbandingan harga dan daya dukungnya.',
    relatedSlugs: ['harga-tiang-pancang-beton-jakarta-terbaru', 'perbedaan-mini-pile-dan-spun-pile', 'panduan-memilih-tiang-pancang-untuk-proyek'],
    content: [
      'Dalam spektrum pondasi tiang pancang beton pracetak, dimensi 25x25 cm dan 30x30 cm menempati posisi paling banyak diaplikasikan untuk bangunan bertingkat 2 hingga 5 lantai di Jakarta.',
      'Mini pile ukuran 25x25 cm memiliki kisaran harga material Rp 175.000 - Rp 220.000 per meter lari. Tiang ini menawarkan kapasitas daya dukung aksial izin (allowable bearing capacity) berkisar antara 25 hingga 35 ton per tiang pada lapisan tanah keras.',
      'Sedangkan mini pile ukuran 30x30 cm dibanderol dengan kisaran harga Rp 240.000 - Rp 310.000 per meter lari. Dimensi ini memberikan daya dukung yang lebih besar, yakni mencapai 40 hingga 55 ton per tiang.',
      'Keunggulan utama mini pile persegi adalah kemudahan dalam penyambungan las plat joint ujung tiang yang memiliki ketebalan pelat baja standar 8–10 mm. Pengelasan melingkar 4 sisi memastikan transfer beban aksial dan tahanan momen lentur tetap optimal.',
      'Untuk bangunan di wilayah Jakarta Barat atau Jakarta Utara yang memiliki lapisan tanah lempung tebal, mini pile 25x25 cm atau 30x30 cm sering dipancang hingga kedalaman 18–24 meter menggunakan metode mesin tekan HSPD.'
    ]
  },
  {
    id: '4',
    slug: 'apa-itu-hspd-dan-bagaimana-cara-kerjanya',
    title: 'Apa Itu HSPD dan Bagaimana Cara Kerjanya dalam Konstruksi Pondasi?',
    category: 'HSPD',
    seoTitle: 'Apa Itu HSPD? Cara Kerja Alat Pancang Hidrolik Tanpa Getaran',
    metaDescription: 'Penjelasan lengkap apa itu HSPD (Hydraulic Static Pile Driver), mekanisme jepit dan tekan hidrolik, kelebihan tanpa suara dan getaran di Jakarta.',
    date: '28 September 2026',
    readTime: '6 menit',
    author: 'Divisi Alat Berat Konstruksi',
    featuredImage: GDRIVE_IMAGE_URL,
    imageAlt: 'Sistem mesin Hydraulic Static Pile Driver HSPD di Jakarta',
    excerpt: 'HSPD telah menjadi solusi utama pemancangan modern di perkotaan padat penduduk Jakarta berkat fitur tanpa getaran dan suara bising.',
    relatedSlugs: ['harga-jasa-pancang-jakarta-dan-faktor-yang-mempengaruhinya', 'jasa-pancang-jakarta-untuk-gedung-dan-gudang', 'faktor-yang-mempengaruhi-biaya-pemancangan'],
    content: [
      'Kawasan perkotaan DKI Jakarta memiliki regulasi ketat mengenai polusi suara dan potensi kerusakan bangunan bersebelahan akibat getaran konstruksi. Di sinilah teknologi Hydraulic Static Pile Driver (HSPD) membuktikan keunggulannya.',
      'HSPD adalah alat pemancang tiang pracetak yang bekerja dengan sistem penjepit hidrolik (clamping box) dan silinder pendorong vertikal (hydraulic cylinder). Mesin mengangkat dan menjepit tiang beton, kemudian menekannya secara perlahan dan konstan ke dalam tanah.',
      'Sebagai penahan gaya reaksi ke atas saat menekan tiang, mesin HSPD dilengkapi susunan balok counterweight berbahan beton padat atau baja seberat puluhan hingga ratusan ton yang terpasang pada sasis alat.',
      'Keuntungan paling revolusioner dari metode HSPD adalah tingkat getaran yang nyaris nol (zero vibration) dan suara yang sangat tenang (silent operation). Bangunan tua atau dinding tetangga yang hanya berjarak 1–2 meter dari titik pancang tetap aman tanpa risiko retak.',
      'Selain itu, operator dan pengawas konstruksi dapat memverifikasi kapasitas daya dukung tiang secara langsung melalui pembacaan jarum manometer hidrolik saat tiang mencapai lapisan tanah keras (final set).'
    ]
  },
  {
    id: '5',
    slug: 'perbedaan-mini-pile-dan-spun-pile',
    title: 'Perbedaan Mini Pile dan Spun Pile: Karakteristik, Mutu, dan Penggunaan',
    category: 'Tiang Pancang',
    seoTitle: 'Perbedaan Mini Pile dan Spun Pile | Karakteristik & Perbandingan',
    metaDescription: 'Ketahui perbedaan mendasar mini pile kotak dan spun pile silinder prategang, mulai dari bentuk fisik, mutu beton, kapasitas beban, hingga biayanya.',
    date: '24 September 2026',
    readTime: '6 menit',
    author: 'Insinyur Pondasi',
    featuredImage: GDRIVE_IMAGE_URL,
    imageAlt: 'Tiang pancang spun pile silinder prategang di lapangan',
    excerpt: 'Kerap bingung memilih antara mini pile atau spun pile untuk proyek Anda? Simak perbandingan teknis komprehensif berikut ini.',
    relatedSlugs: ['harga-mini-pile-25-x-25-dan-30-x-30', 'harga-tiang-pancang-beton-jakarta-terbaru', 'panduan-memilih-tiang-pancang-untuk-proyek'],
    content: [
      'Bagi para perencana dan pelaksana konstruksi, memilih antara mini pile (tiang pancang kotak) atau spun pile (tiang pancang pipa bulat) merupakan keputusan strategis yang mempengaruhi biaya serta durasi proyek.',
      'Perbedaan pertama terletak pada bentuk fisik dan metode produksi. Mini pile umumnya berbentuk penampang persegi (solid square) pejal yang dicetak konvensional. Sedangkan spun pile berbentuk silinder bulat berongga (hollow) yang dicetak melalui putaran sentrifugal kecepatan tinggi, menghasilkan kepadatan beton yang luar biasa seragam.',
      'Perbedaan kedua ada pada mutu beton dan sistem penulangan. Mini pile umumnya memakai mutu K-450 hingga K-500 dengan tulangan ulir konvensional. Sementara spun pile menggunakan mutu beton K-600 ke atas dengan tulangan baja prategang (PC wire / PC strand) bertegangan tarik tinggi.',
      'Dari segi kapasitas beban, spun pile diameter 400 mm hingga 600 mm mampu memikul beban hingga ratusan ton per titik tiang, menjadikannya standar utama untuk gedung tinggi (high-rise building) dan infrastruktur jembatan layang.',
      'Di sisi lain, mini pile memiliki fleksibilitas tinggi dalam mobilisasi ke area pemukiman padat dan gang kota Jakarta dengan jalan masuk yang lebih sempit, serta biaya pengadaan alat yang lebih ekonomis.'
    ]
  },
  {
    id: '6',
    slug: 'cara-menghitung-kebutuhan-tiang-pancang',
    title: 'Cara Menghitung Kebutuhan Tiang Pancang untuk Konstruksi Bangunan',
    category: 'Konstruksi',
    seoTitle: 'Cara Menghitung Kebutuhan Tiang Pancang Bangunan | Rumus Praktis',
    metaDescription: 'Panduan teknis dan rumus praktis cara menghitung kebutuhan jumlah titik tiang pancang, kedalaman tanah keras, dan perkiraan biaya proyek.',
    date: '19 September 2026',
    readTime: '8 menit',
    author: 'Tim Geoteknik & Struktur',
    featuredImage: GDRIVE_IMAGE_URL,
    imageAlt: 'Perhitungan titik tiang pancang pada denah pondasi gedung',
    excerpt: 'Menghitung kebutuhan titik tiang pancang membutuhkan integrasi data beban bangunan vertikal dengan daya dukung tanah hasil uji sondir.',
    relatedSlugs: ['harga-tiang-pancang-beton-jakarta-terbaru', 'faktor-yang-mempengaruhi-biaya-pemancangan', 'panduan-memilih-tiang-pancang-untuk-proyek'],
    content: [
      'Menentukan jumlah titik tiang pancang dan kedalaman pemancangan bukanlah tebak-tebakan, melainkan kalkulasi rekayasa geoteknik yang didasarkan pada data faktual lapangan.',
      'Langkah pertama adalah menghitung total beban vertikal yang disalurkan oleh kolom struktur bangunan atas. Beban ini mencakup beban mati (dead load) seperti berat sendiri struktur dan dinding, beban hidup (live load) penghuni dan perabotan, serta beban gempa dan angin.',
      'Langkah kedua adalah menganalisis hasil uji penetrasi konus (Sondir / Cone Penetration Test) atau SPT (Standard Penetration Test). Uji sondir menunjukkan nilai tahanan konus (qc) terhadap kedalaman. Lapisan tanah keras umumnya didefinisikan saat nilai qc mencapai minimal 150 hingga 250 kg/cm².',
      'Langkah ketiga adalah menghitung daya dukung izin satu tiang (Qa). Daya dukung ini dihitung dari kombinasi tahanan ujung (end bearing) dan hambatan lekat selimut tiang (skin friction) yang dibagi dengan angka keamanan (Safety Factor) sebesar 2.5 hingga 3.0.',
      'Jumlah titik tiang di bawah setiap kolom atau pile cap dihitung dengan rumus sederhana: n = P_total / Qa. Dengan demikian, insinyur dapat merancang konfigurasi pile cap yang efisien, kokoh, dan ekonomis.'
    ]
  },
  {
    id: '7',
    slug: 'jasa-pancang-jakarta-untuk-gedung-dan-gudang',
    title: 'Jasa Pancang Jakarta untuk Gedung, Gudang, dan Kawasan Industri',
    category: 'Jasa Pancang',
    seoTitle: 'Jasa Pancang Jakarta untuk Gedung dan Gudang | Layanan Lengkap',
    metaDescription: 'Solusi jasa pancang Jakarta untuk proyek gedung komersial, ruko, gudang logistik, dan fasilitas pabrik industri di kawasan Jabodetabek.',
    date: '15 September 2026',
    readTime: '6 menit',
    author: 'Manajemen Proyek Konstruksi',
    featuredImage: GDRIVE_IMAGE_URL,
    imageAlt: 'Pekerjaan pondasi tiang pancang gedung dan gudang di Jakarta',
    excerpt: 'Gedung dan gudang di Jakarta memiliki beban struktur besar yang menuntut pengerjaan pondasi tiang pancang presisi tinggi dan teruji beban.',
    relatedSlugs: ['harga-jasa-pancang-jakarta-dan-faktor-yang-mempengaruhinya', 'apa-itu-hspd-dan-bagaimana-cara-kerjanya', 'panduan-memilih-tiang-pancang-untuk-proyek'],
    content: [
      'Kebutuhan akan ruang komersial, perkantoran, dan sentra logistik pergudangan di DKI Jakarta dan kawasan sekitarnya terus meningkat pesat dari tahun ke tahun.',
      'Untuk gedung bertingkat 3 hingga 8 lantai serta gudang penyimpanan barang berat, pondasi dangkal tidak lagi mampu menahan beban tanpa risiko penurunan (settlement) diferensial.',
      'Pelaksanaan pemancangan pada proyek gedung dan gudang di Jakarta memerlukan koordinasi terintegrasi antara pasokan material tiang tepat waktu, ketersediaan alat hidrolik bertenaga besar, serta kepatuhan pada standar keselamatan kerja K3 konstruksi.',
      'Pemilihan tipe tiang pancang umumnya berkisar antara square pile 25x25 cm, 30x30 cm, atau spun pile diameter 350–500 mm. Hal ini disesuaikan dengan bentang kolom struktur dan beban muatan lantai (floor load) pergudangan.',
      'Penyedia jasa pemancangan yang berpengalaman akan selalu menyertakan pengujian integritas tiang (PIT test) dan uji beban dinamis PDA (Pile Driving Analyzer) guna memberikan jaminan mutu resmi kepada konsultan pengawas dan pemilik proyek.'
    ]
  },
  {
    id: '8',
    slug: 'faktor-yang-mempengaruhi-biaya-pemancangan',
    title: '10 Faktor Teknis yang Mempengaruhi Biaya Pemancangan di Jakarta',
    category: 'Harga Pancang',
    seoTitle: '10 Faktor yang Mempengaruhi Biaya Pemancangan di Jakarta Lengkap',
    metaDescription: 'Kupas tuntas 10 faktor penentu biaya pemancangan tiang di Jakarta: akses jalan, kedalaman tanah keras, tonase alat hidrolik, hingga perizinan.',
    date: '10 September 2026',
    readTime: '7 menit',
    author: 'Estimator Biaya Konstruksi',
    featuredImage: GDRIVE_IMAGE_URL,
    imageAlt: 'Faktor penentu estimasi biaya pemancangan pondasi tiang pancang',
    excerpt: 'Mengapa estimasi harga pemancangan di satu lokasi berbeda dengan lokasi lain? Ketahui 10 faktor teknis yang mempengaruhinya.',
    relatedSlugs: ['harga-tiang-pancang-beton-jakarta-terbaru', 'harga-jasa-pancang-jakarta-dan-faktor-yang-mempengaruhinya', 'cara-menghitung-kebutuhan-tiang-pancang'],
    content: [
      'Banyak pemilik proyek yang terkejut ketika mendapati penawaran harga pemancangan di Jakarta Selatan berbeda cukup jauh dengan proyek di Jakarta Utara atau Tangerang.',
      'Perbedaan ini sepenuhnya dipengaruhi oleh 10 faktor geoteknik dan logistik lapangan yang sangat dinamis. Yang pertama adalah profil lapisan geoteknik tanah setempat; di Jakarta Utara tanah keras berada lebih dalam (20–30 meter) dibanding Jakarta Selatan (12–18 meter).',
      'Faktor kedua adalah aksesibilitas jalur transportasi. Truk trailer pengangkut tiang pancang beton sepanjang 6–12 meter memerlukan radius putar jalan minimal 6 meter. Jalur yang sempit memerlukan biaya lansir manual atau armada khusus.',
      'Faktor ketiga adalah ketersediaan waktu kerja. Regulasi pembatasan truk berat di koridor jalan protokol Jakarta mengharuskan pasokan material masuk hanya pada malam hari (pukul 22.00–05.00 WIB), yang berimbas pada pengaturan shift kerja regu proyek.',
      'Faktor lainnya meliputi volume meter total, jenis alat pancang (HSPD vs Drop Hammer), mutu beton tiang, pengujian PDA/Sondir, serta biaya pengurusan izin lingkungan setempat.'
    ]
  },
  {
    id: '9',
    slug: 'panduan-memilih-tiang-pancang-untuk-proyek',
    title: 'Panduan Lengkap Memilih Tiang Pancang yang Tepat untuk Proyek Anda',
    category: 'Tiang Pancang',
    seoTitle: 'Panduan Memilih Tiang Pancang untuk Proyek Konstruksi di Jakarta',
    metaDescription: 'Langkah demi langkah panduan memilih tipe tiang pancang mini pile, spun pile, atau kotak berdasarkan jenis bangunan dan kondisi tanah proyek.',
    date: '04 September 2026',
    readTime: '6 menit',
    author: 'Konsultan Struktur Bangunan',
    featuredImage: GDRIVE_IMAGE_URL,
    imageAlt: 'Pemilihan tiang pancang spun pile dan mini pile di lokasi konstruksi',
    excerpt: 'Jangan salah pilih jenis pondasi! Simak panduan komprehensif pemilihan tiang pancang sesuai fungsi bangunan dan karakteristik tapak proyek.',
    relatedSlugs: ['perbedaan-mini-pile-dan-spun-pile', 'perbedaan-bore-pile-dan-tiang-pancang', 'harga-tiang-pancang-beton-jakarta-terbaru'],
    content: [
      'Memilih jenis pondasi dalam yang tepat ibarat memilih jangkar penopang masa depan bangunan Anda. Kesalahan pemilihan pondasi dapat berakibat fatal pada keamanan struktur atau pemborosan anggaran yang signifikan.',
      'Langkah pertama: Identifikasi fungsi bangunan dan jumlah lantai. Untuk rumah tinggal 2–3 lantai di perumahan, mini pile 20x20 cm atau segitiga 28x28 cm sudah sangat mencukupi. Untuk ruko 3–4 lantai, gunakan mini pile 25x25 cm. Untuk gedung perkantoran atau gudang berat, pertimbangkan spun pile diameter 350–500 mm.',
      'Langkah kedua: Lakukan uji tanah (soil test) sebelum merancang pondasi. Data sondir dan boring log adalah peta navigasi utama untuk menentukan kedalaman tiang yang dibutuhkan.',
      'Langkah ketiga: Evaluasi lingkungan sekitar proyek. Jika proyek berada di perkampungan padat atau samping bangunan bertingkat lain, pilihlah metode pemancangan HSPD untuk memastikan nol komplain warga sekitar.',
      'Langkah keempat: Konsultasikan dengan tenaga ahli geoteknik dan penyedia jasa pemancangan profesional yang memiliki rekam jejak terpercaya.'
    ]
  },
  {
    id: '10',
    slug: 'perbedaan-bore-pile-dan-tiang-pancang',
    title: 'Perbedaan Bore Pile dan Tiang Pancang: Kelebihan, Kekurangan, dan Biaya',
    category: 'Konstruksi',
    seoTitle: 'Perbedaan Bore Pile dan Tiang Pancang | Kelebihan & Biaya Proyek',
    metaDescription: 'Komparasi mendalam antara pondasi bore pile (tiang bor beton cor di tempat) versus tiang pancang beton pracetak untuk konstruksi perkotaan.',
    date: '29 Agustus 2026',
    readTime: '7 menit',
    author: 'Ahli Geoteknik Jakarta',
    featuredImage: GDRIVE_IMAGE_URL,
    imageAlt: 'Perbandingan bore pile dan tiang pancang beton pracetak',
    excerpt: 'Mana yang lebih unggul untuk proyek Anda di Jakarta: bore pile atau tiang pancang beton pracetak? Simak ulasan komparasi lengkapnya.',
    relatedSlugs: ['panduan-memilih-tiang-pancang-untuk-proyek', 'apa-itu-hspd-dan-bagaimana-cara-kerjanya', 'harga-jasa-pancang-jakarta-dan-faktor-yang-mempengaruhinya'],
    content: [
      'Dalam dunia rekayasa pondasi dalam, perdebatan antara memilih bore pile (tiang bor beton cor di tempat) atau tiang pancang pracetak (driven pile) adalah salah satu diskusi paling umum.',
      'Pondasi tiang pancang memiliki keunggulan mutlak pada jaminan mutu beton. Karena dicetak di pabrik dengan pengawasan laboratorium (precast factory), mutu beton K-450 hingga K-600 terjamin 100% homogen tanpa risiko kontaminasi lumpur galian.',
      'Selain itu, kecepatan pemancangan tiang pracetak menggunakan mesin hidrolik jauh lebih cepat. Satu unit HSPD dapat menyelesaikan 15 hingga 25 titik pemancangan dalam satu hari kerja tanpa perlu menunggu beton mengering.',
      'Sebaliknya, bore pile memiliki kelebihan saat menghadapi lapisan tanah yang mengandung bongkahan batu besar (boulder) yang tidak dapat ditembus oleh tiang pancang, atau pada lokasi yang memiliki batasan tinggi bebas (headroom) sangat rendah di dalam gedung.',
      'Namun bore pile memerlukan penanganan limbah lumpur pengeboran (bentonite slurry) yang cukup rumit dan mahal di pusat kota Jakarta. Oleh sebab itu, tiang pancang dengan mesin HSPD tetap menjadi pilihan paling efisien dan bersih untuk mayoritas proyek perkotaan.'
    ]
  }
];

export const ARTICLES: ArticleItem[] = [
  ...CORE_ARTICLES,
  ...KECAMATAN_ARTICLES,
];

