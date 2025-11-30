export interface NewsEmbed {
  id: string;
  title: string;
  source: string;
  readTime: string;
  date: string;       // ISO string
  excerpt: string;
  imageUrl?: string;
  url: string;        // link ke berita asli
}

export function getNewsEmbeds(): NewsEmbed[] {
  return [
    {
      id: 'kompas-bbm-oplosan-1',
      title: 'Terbongkar, Negara Rugi Rp 285,1 T akibat Korupsi BBM yang Seret Riza Chalid',
      source: 'Kompas.com',
      readTime: '5 min',
      date: '14 Oktober 2025',
      excerpt:
        'Sidang dakwaan kasus korupsi tata kelola minyak mentah dan produk kilang PT Pertamina (Persero) mengungkap...',
      imageUrl: 'https://asset.kompas.com/crops/T2mwI7cNRThmMySA_Oyi4T83GvQ=/0x0:0x0/1200x800/data/photo/2025/10/13/68ecd0f7a60a6.jpg',
      url: 'https://nasional.kompas.com/read/2025/10/14/09592871/terbongkar-negara-rugi-rp-2851-t-akibat-korupsi-bbm-yang-seret-riza-chalid?page=all',
    },
    {
      id: 'hukum-online-bbm-oplosan-1',
      title: 'Begini Modus Oplosan BBM dalam Kasus Korupsi Minyak Mentah',
      source: 'hukumonline.com',
      readTime: '3 min',
      date: '26 Februari 2025',
      excerpt:
        'Kejaksaan Agung (Kejagung) mengungkap bahwa para tersangka dalam kasus ugaan korupsi tata kelola...',
      imageUrl: 'https://images.hukumonline.com/frontend/lt67be950ce2a89/lt67bfe6b39cc09.jpg',
      url: 'https://www.hukumonline.com/berita/a/begini-modus-oplosan-bbm-dalam-kasus-korupsi-minyak-mentah-lt67be950ce2a89/',
    },
    {
      id: 'cnn-indonesia-bbm-oplosan-1',
      title: 'Daftar Tersangka Baru Korupsi BBM yang Bikin Rugi Negara Rp285 Triliun',
      source: 'cnnindonesia.com',
      readTime: '5 min',
      date: '11 Juli 2025',
      excerpt:
        'Kejaksaan Agung (Kejagung) menetapkan sembilan tersangka baru dalam kasus...',
      imageUrl: 'https://asset.kompas.com/crops/T2mwI7cNRThmMySA_Oyi4T83GvQ=/0x0:0x0/1200x800/data/photo/2025/10/13/68ecd0f7a60a6.jpg',
      url: 'https://www.cnnindonesia.com/nasional/20250711083105-12-1249422/daftar-tersangka-baru-korupsi-bbm-yang-bikin-rugi-negara-rp285-triliun',
    },
    {
      id: 'kompas-bbm-oplosan-2',
      title: 'Pengacara Terdakwa Korupsi BBM Tepis Kerugian Rp 285 Triliun',
      source: 'Kompas.com',
      readTime: '5 min',
      date: '13 November 2025',
      excerpt:
        'Pengacara para terdakwa kasus korupsi BBM Pertamina menepis adanya kerugian negara...',
      imageUrl: 'https://asset.kompas.com/crops/DerU6lRZij8rdYhBg5bIttIBcaM=/0x0:0x0/1200x800/data/photo/2025/11/06/690c5b44430ac.jpg',
      url: 'https://nasional.kompas.com/read/2025/11/13/23415701/pengacara-terdakwa-korupsi-bbm-tepis-kerugian-rp-285-triliun',
    },
    {
      id: 'bpkn-bbm-oplosan-1',
      title: 'Kasus Dugaan Pengoplosan Pertamax-Pertalite : Bukan Hanya Kerugian Negara, tapi Juga Kerugian Konsumen!',
      source: 'bpkn.go.id',
      readTime: '5 min',
      date: '26 Februari 2025',
      excerpt:
        'Kasus dugaan korupsi tata Kelola minyak mentah dan produk kilang pada PT. Pertamina, Subholding, dan...',
      imageUrl: 'https://image.bpkn.go.id/bankdata/7ed3836c1de39ed7216af44104ff46ee.jpeg',
      url: 'https://bpkn.go.id/siaranpers/detail/kasus-dugaan-pengoplosan-pertamax-pertalite-bukan-hanya-kerugian-negara-tapi-juga-kerugian-konsumen',
    },
    {
      id: 'detik-bbm-oplosan-1',
      title: 'Pengoplosan BBM di SPBU Gunung Soputan, Pertamax Dicampur 200 Liter Pertalite',
      source: 'detik.com',
      readTime: '5 min',
      date: '14 April 2025',
      excerpt:
        'Polisi mengungkap perkembangan kasus pengoplosan bahan bakar minyak (BBM) di Stasiun Pengisian...',
      imageUrl: 'https://akcdn.detik.net.id/community/media/visual/2025/04/11/situasi-di-spbu-5480132-di-jalan-gunung-soputan-denpasar-barat-yang-disegel-polisi-jumat-1142025-1744363549086_169.jpeg?w=700&q=90',
      url: 'https://www.detik.com/bali/hukum-dan-kriminal/d-7868759/pengoplosan-bbm-di-spbu-gunung-soputan-pertamax-dicampur-200-liter-pertalite',
    },
    {
      id: 'kompas-bbm-oplosan-3',
      title: 'Kasus Pengoplosan Pertalite, Manajer SPBU Ditangkap',
      source: 'Kompas.com',
      readTime: '5 min',
      date: '14 Maret 2025',
      excerpt:
        'Kepolisian Resor Kota Besar Medan masih terus mendalami kasus pengoplosan Pertalite di Medan...',
      imageUrl: 'https://akcdn.detik.net.id/community/media/visual/2025/04/11/situasi-di-spbu-5480132-di-jalan-gunung-soputan-denpasar-barat-yang-disegel-polisi-jumat-1142025-1744363549086_169.jpeg?w=700&q=90',
      url: 'https://www.kompas.id/artikel/terlibat-pengoplosan-pertalite-polisi-tangkap-manajer-spbu-dan-periksa-pemilik',
    },
    {
      id: 'antara-news-bbm-oplosan-1',
      title: 'Praktik pengoplosan BBM terjadi pada 2018--2023',
      source: 'makassar.antaranews.com',
      readTime: '3 min',
      date: '27 Februari 2025',
      excerpt:
        'Kejaksaan Agung mengatakan praktik blending atau oplosan bahan bakar minyak RON 90 menjadi RON 92 dalam...',
      imageUrl: 'https://img.antaranews.com/cache/1200x800/2025/02/25/1000023941.jpg.webp',
      url: 'https://makassar.antaranews.com/berita/585197/praktik-pengoplosan-bbm-terjadi-pada-2018-2023',
    },
    {
      id: 'tempo-bbm-oplosan-1',
      title: 'Kasus BBM Oplosan yang Pernah Terjadi di Berbagai Daerah',
      source: 'tempo.com',
      readTime: '5 min',
      date: '1 Maret 2025',
      excerpt:
        'Pada Senin, 24 Februari 2025 Kejaksaan Agung RI membongkar kasus dugaan korupsi PT Pertamina Patra Niaga dengan...',
      imageUrl: 'https://statik.tempo.co/data/2022/03/22/id_1097112/1097112_720.jpg',
      url: 'https://www.tempo.co/hukum/kasus-bbm-oplosan-yang-pernah-terjadi-di-berbagai-daerah-1213740#google_vignette',
    },
    // tambahkan item lain
  ];
}
