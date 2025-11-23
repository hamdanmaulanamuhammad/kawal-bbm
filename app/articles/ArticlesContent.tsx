'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Search, Calendar, Clock, ArrowRight, Tag, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const articles = [
  {
    id: 1,
    title: '7 Tanda-Tanda BBM Oplosan yang Harus Diwaspadai',
    excerpt: 'Kenali ciri-ciri BBM oplosan sebelum terlambat. Dari warna yang mencurigakan hingga aroma yang tidak wajar, pelajari cara mengidentifikasi BBM palsu untuk melindungi kendaraan Anda.',
    category: 'Panduan',
    date: '2024-03-25',
    readTime: '5 min',
    color: 'from-blue-600 to-cyan-600',
    content: `BBM oplosan adalah ancaman nyata yang dapat merusak kendaraan dan merugikan kantong Anda. Berikut adalah tujuh tanda yang harus diwaspadai:

1. Warna BBM yang Tidak Normal
BBM berkualitas memiliki warna standar yang konsisten. Pertalite berwarna kuning muda, Pertamax berwarna kuning cerah, dan Solar berwarna kuning kecoklatan. Jika Anda melihat warna yang terlalu gelap, keruh, atau bahkan ada endapan, itu adalah tanda kuat BBM tersebut telah dicampur dengan bahan lain.

2. Aroma yang Menyengat atau Tidak Wajar
BBM asli memiliki aroma khas hidrokarbon yang tidak terlalu menyengat. Jika BBM mengeluarkan bau kimia yang sangat tajam, seperti thinner atau solvent, kemungkinan besar BBM tersebut telah dioplosan dengan bahan kimia berbahaya.

3. Performa Mesin Menurun Drastis
Setelah mengisi BBM, perhatikan performa kendaraan Anda. Jika mesin terasa kurang bertenaga, akselerasi lambat, atau mesin tersendat-sendat, itu bisa menjadi indikasi BBM yang Anda gunakan tidak berkualitas.

4. Konsumsi BBM Meningkat Tidak Wajar
BBM oplosan memiliki nilai oktan yang lebih rendah, sehingga pembakaran tidak efisien. Akibatnya, kendaraan membutuhkan lebih banyak bahan bakar untuk jarak tempuh yang sama. Jika konsumsi BBM tiba-tiba melonjak tanpa alasan jelas, segera curigai kualitas BBM.

5. Asap Knalpot yang Berlebihan
BBM oplosan tidak terbakar sempurna di ruang pembakaran mesin. Hal ini menghasilkan asap knalpot yang lebih tebal dan berwarna gelap (hitam atau kebiruan). Asap berlebihan juga menandakan pembakaran tidak efisien.

6. Mesin Cepat Panas atau Overheat
Kandungan bahan kimia berbahaya dalam BBM oplosan dapat menyebabkan suhu mesin naik lebih cepat. Jika mesin Anda sering overheat setelah mengisi BBM di SPBU tertentu, segera ganti tempat pengisian dan lakukan pemeriksaan mesin.

7. Harga yang Terlalu Murah atau Tidak Wajar
Jika sebuah SPBU menawarkan harga BBM yang jauh lebih murah dari harga pasaran tanpa program promosi resmi, waspadai kemungkinan BBM oplosan. Harga yang terlalu murah sering kali adalah trik untuk menarik konsumen dengan produk berkualitas rendah.

Langkah Pencegahan:
- Selalu isi BBM di SPBU resmi dan terpercaya
- Perhatikan segel dan label kualitas BBM
- Laporkan SPBU yang mencurigakan ke Contact Center 136
- Rutin lakukan perawatan mesin untuk mendeteksi kerusakan dini

Dengan memahami tanda-tanda ini, Anda dapat melindungi kendaraan dan berkontribusi dalam memberantas praktik BBM oplosan di Indonesia.`,
  },
  {
    id: 2,
    title: 'Dampak Ekonomi BBM Oplosan: Kerugian Triliunan Rupiah',
    excerpt: 'Analisis mendalam tentang bagaimana praktik BBM oplosan merugikan negara hingga belasan triliun rupiah per tahun dan dampaknya terhadap perekonomian nasional.',
    category: 'Ekonomi',
    date: '2024-03-24',
    readTime: '8 min',
    color: 'from-red-600 to-orange-600',
    content: `Praktik BBM oplosan bukan hanya masalah teknis kendaraan, tetapi juga sabotase ekonomi nasional yang sistematis dan masif. Mari kita telusuri dampak ekonominya secara komprehensif.

Kerugian Negara yang Mencengangkan
Berdasarkan riset mendalam dari Center for Indonesia Taxation Analysis (Celios), praktik BBM oplosan menyebabkan kerugian negara mencapai Rp 12,8 triliun per tahun. Angka ini berasal dari subsidi BBM yang seharusnya dinikmati masyarakat, tetapi justru dimanipulasi oleh oknum tidak bertanggung jawab.

Subsidi BBM adalah program pemerintah untuk membantu rakyat memperoleh bahan bakar dengan harga terjangkau. Namun, ketika BBM bersubsidi dioplosan dengan bahan kimia murah, pelaku meraup keuntungan berlipat ganda sementara negara tetap memberikan subsidi penuh. Inilah yang disebut kebocoran subsidi.

Dampak pada APBN
Kerugian triliunan rupiah ini seharusnya bisa dialokasikan untuk pembangunan infrastruktur, pendidikan, kesehatan, atau program kesejahteraan rakyat lainnya. Bayangkan berapa sekolah yang bisa dibangun, berapa rumah sakit yang bisa diperbaiki, atau berapa beasiswa yang bisa diberikan dengan dana sebesar itu.

Ketika subsidi bocor karena praktik oplosan, pemerintah harus menanggung beban ganda: membayar subsidi yang tidak tepat sasaran dan menangani dampak kerusakan yang ditimbulkan oleh BBM oplosan.

Kerugian Konsumen
Selain negara, masyarakat pengguna kendaraan juga menjadi korban ekonomi:

1. Kerusakan Mesin: BBM oplosan merusak komponen mesin seperti injektor, pompa BBM, karburator, dan sistem pembakaran. Biaya perbaikan bisa mencapai jutaan hingga puluhan juta rupiah per kendaraan.

2. Penurunan Efisiensi: Kendaraan yang menggunakan BBM oplosan konsumsi bahan bakarnya meningkat 20-35%, memaksa konsumen mengeluarkan lebih banyak uang untuk bahan bakar.

3. Penurunan Nilai Jual: Kendaraan yang sering mengalami masalah mesin akibat BBM oplosan akan mengalami penurunan nilai jual yang signifikan.

4. Biaya Perawatan Ekstra: Pemilik kendaraan harus lebih sering melakukan servis dan penggantian suku cadang, menambah beban pengeluaran rutin.

Dampak pada Industri dan Pelaku Usaha Jujur
BBM oplosan menciptakan persaingan tidak sehat. SPBU yang menjual BBM asli dengan harga sesuai standar kalah bersaing dengan SPBU nakal yang menjual BBM oplosan dengan harga lebih murah. Hal ini dapat mematikan usaha jujur dan menciptakan distorsi pasar.

Efek Domino pada Sektor Transportasi
Sektor transportasi, baik pribadi maupun komersial (truk, bus, taksi online), sangat bergantung pada BBM. Ketika kendaraan mengalami kerusakan akibat BBM oplosan, produktivitas menurun, biaya operasional meningkat, dan pada akhirnya konsumen akhir yang menanggung kenaikan harga barang dan jasa.

Solusi untuk Mengurangi Kerugian Ekonomi
- Digitalisasi rantai pasok BBM dengan teknologi QR code dan blockchain
- Audit mendadak berbasis data dan AI
- Sanksi tegas dan pencabutan izin permanen bagi pelanggar
- Transparansi data penjualan BBM yang dapat diakses publik
- Edukasi masif kepada masyarakat tentang hak konsumen

Kesimpulan
BBM oplosan adalah parasit ekonomi yang menggerogoti anggaran negara dan daya beli masyarakat. Tanpa tindakan tegas dan sistematis, kerugian akan terus membengkak dan menghambat pembangunan nasional. Partisipasi aktif masyarakat dalam melaporkan praktik ini adalah kunci untuk menghentikan kebocoran ekonomi yang merugikan bangsa.`,
  },
  {
    id: 3,
    title: 'Kronologi Kasus BBM Oplosan Maret 2024: Dari Laporan hingga Penangkapan',
    excerpt: 'Laporan investigasi lengkap tentang operasi sidak massal yang berhasil membongkar jaringan BBM oplosan di Jabodetabek dengan total penyitaan 15.420 liter BBM palsu.',
    category: 'Investigasi',
    date: '2024-03-23',
    readTime: '10 min',
    color: 'from-purple-600 to-pink-600',
    content: `Maret 2024 menjadi bulan yang bersejarah dalam upaya pemberantasan BBM oplosan di Indonesia. Operasi sidak massal yang dilakukan Kementerian ESDM bersama Pertamina berhasil mengungkap praktik sistematis yang telah merugikan negara dan masyarakat. Berikut kronologi lengkapnya.

Awal Mula: Laporan Masyarakat Meningkat
Sejak awal Januari 2024, Contact Center 136 Kementerian ESDM mulai menerima lonjakan laporan masyarakat tentang kualitas BBM yang mencurigakan. Ratusan pemilik kendaraan melaporkan gejala yang sama: penurunan performa mesin, konsumsi BBM meningkat drastis, dan asap knalpot yang tidak normal.

Tim investigasi mencatat pola yang mengkhawatirkan: laporan terpusat di wilayah Bekasi, Jakarta Timur, Tangerang, dan Depok. Beberapa nama SPBU muncul berulang kali dalam laporan, menandakan ada masalah sistematis.

Fase Investigasi Awal (10-15 Maret 2024)
Tim investigasi gabungan dari Kementerian ESDM dan Pertamina melakukan penyelidikan pendahuluan. Mereka menyamar sebagai konsumen biasa dan mengambil sampel BBM dari beberapa SPBU yang dicurigai.

Sampel-sampel tersebut dibawa ke laboratorium forensik untuk dianalisis. Hasil awal mengejutkan: ditemukan kandungan zat kimia yang tidak seharusnya ada dalam BBM, termasuk thinner industri, solvent, dan pewarna sintetis berbahaya.

Laboratorium juga menemukan bahwa nilai oktan BBM yang diuji jauh di bawah standar. Pertalite yang seharusnya memiliki oktan 90 hanya memiliki oktan 78-82. Pertamax dengan standar oktan 92 tercatat hanya 84-87. Ini adalah bukti kuat pencampuran dengan bahan berkualitas rendah.

Persiapan Operasi Sidak (16-17 Maret 2024)
Berdasarkan hasil laboratorium, tim investigasi menyusun rencana operasi sidak mendadak. Target operasi adalah 30 SPBU di wilayah Jabodetabek yang terindikasi kuat melakukan praktik BBM oplosan.

Operasi dirancang tanpa pemberitahuan sebelumnya untuk mencegah pelaku menghilangkan barang bukti. Tim dilengkapi dengan peralatan laboratorium portabel untuk uji kualitas BBM di lokasi secara real-time.

Pelaksanaan Sidak Massal (18-25 Maret 2024)
Operasi dimulai pada Senin pagi, 18 Maret 2024, pukul 05.00 WIB serentak di berbagai lokasi. Ratusan petugas terjun langsung ke SPBU target. Mereka melakukan pemeriksaan tangki penyimpanan, pengujian kualitas BBM, dan pemeriksaan dokumen.

Hasil sidak mengungkap fakta mengejutkan:
- 24 dari 30 SPBU terbukti menjual BBM oplosan
- Total 15.420 liter BBM oplosan berhasil disita
- Ditemukan 250 liter cairan pewarna kimia yang siap dicampurkan
- Ditemukan bukti catatan keuangan yang menunjukkan keuntungan ilegal hingga ratusan juta rupiah per SPBU per bulan

Temuan Laboratorium Forensik (26-28 Maret 2024)
Analisis laboratorium forensik terhadap BBM yang disita mengungkapkan modus operandi yang terorganisir:

1. Pencampuran Sistematis: BBM asli dicampur dengan thinner industri dengan perbandingan 70:30 atau bahkan 60:40 untuk memaksimalkan keuntungan.

2. Pewarna Kimia: Untuk menyamarkan warna BBM oplosan agar mirip dengan BBM asli, pelaku menggunakan pewarna kimia berbahaya yang merusak mesin.

3. Zat Aditif Ilegal: Ditemukan zat aditif yang tidak terdaftar untuk meningkatkan oktan secara artifisial, tetapi justru mempercepat korosi di dalam mesin.

4. Rantai Pasokan Terorganisir: Penyelidikan menemukan bahwa bahan-bahan kimia ini diperoleh dari supplier ilegal yang sudah beroperasi bertahun-tahun.

Penangkapan dan Proses Hukum (29-31 Maret 2024)
Berdasarkan bukti yang kuat, aparat hukum melakukan penangkapan terhadap 18 tersangka, termasuk:
- 12 pemilik atau operator SPBU
- 4 supplier bahan kimia ilegal
- 2 oknum yang memfasilitasi distribusi

Para tersangka dijerat dengan pasal berlapis:
- UU No. 22 Tahun 2001 tentang Minyak dan Gas Bumi
- UU No. 8 Tahun 1999 tentang Perlindungan Konsumen
- Pasal tentang pemalsuan produk yang merugikan konsumen

Ancaman hukuman maksimal yang dihadapi tersangka adalah 6 tahun penjara dan denda hingga Rp 50 miliar. Selain itu, izin usaha SPBU dicabut permanen dan aset tersangka disita untuk mengganti kerugian negara dan konsumen.

Dampak dan Tindak Lanjut
Operasi ini berdampak signifikan:
- Meningkatnya kesadaran masyarakat tentang bahaya BBM oplosan
- Efek jera bagi pelaku lain yang masih beroperasi
- Dorongan untuk reformasi sistem pengawasan distribusi BBM
- Peningkatan partisipasi masyarakat dalam pelaporan

Pemerintah berkomitmen untuk terus melakukan operasi serupa secara berkala dan tidak terduga. Sistem pengawasan berbasis teknologi sedang dikembangkan untuk memastikan transparansi penuh dalam rantai distribusi BBM.

Kesimpulan
Kasus Maret 2024 membuktikan bahwa dengan koordinasi yang baik antara pemerintah, Pertamina, dan partisipasi aktif masyarakat, praktik BBM oplosan dapat dibongkar dan pelakunya diadili. Namun, perjuangan belum selesai. Masih banyak pelaku lain yang beroperasi dan harus terus dikejar.`,
  },
  {
    id: 4,
    title: 'Hak Konsumen BBM: Apa yang Dilindungi UU No. 8 Tahun 1999?',
    excerpt: 'Pelajari hak-hak Anda sebagai konsumen BBM yang dilindungi undang-undang, cara mengklaimnya, dan langkah hukum yang dapat ditempuh jika dirugikan.',
    category: 'Hukum',
    date: '2024-03-22',
    readTime: '7 min',
    color: 'from-green-600 to-emerald-600',
    content: `Sebagai konsumen BBM, Anda memiliki hak-hak yang dilindungi oleh UU No. 8 Tahun 1999 tentang Perlindungan Konsumen. Sayangnya, banyak masyarakat yang tidak menyadari hak-hak ini dan akhirnya menjadi korban praktik tidak fair seperti BBM oplosan. Mari kita telusuri hak-hak fundamental Anda.

Hak atas Kenyamanan, Keamanan, dan Keselamatan (Pasal 4 ayat 1)
Ini adalah hak paling mendasar. Sebagai konsumen, Anda berhak mendapatkan BBM yang:
- Aman digunakan untuk kendaraan Anda
- Tidak membahayakan mesin dan komponen kendaraan
- Memenuhi standar kualitas yang ditetapkan pemerintah

Ketika SPBU menjual BBM oplosan, mereka melanggar hak fundamental ini. Anda berhak menuntut ganti rugi atas kerusakan yang ditimbulkan.

Hak untuk Memilih dan Mendapatkan Informasi yang Benar (Pasal 4 ayat 3)
Anda berhak mengetahui:
- Jenis BBM yang dijual (Pertalite, Pertamax, Solar, dll.)
- Spesifikasi teknis (nilai oktan, kandungan sulfur, dll.)
- Harga yang sesuai dengan ketentuan resmi
- Tanggal produksi dan batch number untuk traceability

SPBU wajib menampilkan informasi ini secara jelas dan mudah diakses. Jika informasi disembunyikan atau dipalsukan, itu adalah pelanggaran hak konsumen.

Hak untuk Didengar dan Mendapat Kompensasi (Pasal 4 ayat 7 dan 8)
Jika Anda merasa dirugikan oleh BBM oplosan:
1. Anda berhak menyampaikan keluhan kepada pihak SPBU, Pertamina, atau Kementerian ESDM
2. Keluhan Anda wajib ditindaklanjuti dengan investigasi
3. Jika terbukti benar, Anda berhak mendapat kompensasi berupa:
   - Penggantian biaya perbaikan kendaraan
   - Ganti rugi atas kerugian ekonomi lainnya
   - Permintaan maaf resmi

Kewajiban Pelaku Usaha (Pasal 7)
UU juga menetapkan kewajiban ketat bagi SPBU:
- Memberikan informasi yang benar, jelas, dan jujur
- Menjual BBM sesuai dengan standar kualitas yang ditetapkan
- Tidak melakukan praktik pemalsuan atau pencampuran yang merugikan
- Memberikan kompensasi jika terbukti merugikan konsumen

Sanksi bagi Pelaku Usaha yang Melanggar (Pasal 62)
Pelaku usaha yang melanggar ketentuan dapat dijatuhi sanksi:
- Pidana penjara maksimal 5 tahun
- Denda maksimal Rp 2 miliar
- Pencabutan izin usaha
- Perintah penarikan produk dari peredaran
- Ganti rugi kepada konsumen

Bagaimana Mengklaim Hak Anda?
Jika Anda merasa dirugikan oleh BBM oplosan:

1. Kumpulkan Bukti
   - Simpan struk pembelian BBM
   - Catat tanggal, waktu, dan lokasi SPBU
   - Foto atau video kondisi kendaraan sebelum dan sesudah isi BBM
   - Simpan hasil pemeriksaan mesin dari bengkel resmi
   - Kumpulkan bukti biaya perbaikan

2. Laporkan ke Pihak Berwenang
   - Contact Center 136 Kementerian ESDM
   - Pertamina Customer Care
   - Dinas Perdagangan setempat
   - Badan Perlindungan Konsumen Nasional (BPKN)

3. Ajukan Gugatan Hukum (jika diperlukan)
Anda dapat mengajukan gugatan perdata atau pidana melalui:
   - Pengadilan Negeri
   - Badan Penyelesaian Sengketa Konsumen (BPSK)
   - Lembaga perlindungan konsumen swadaya masyarakat

4. Konsultasi Hukum
Jika kasus Anda kompleks, konsultasikan dengan advokat yang berpengalaman dalam hukum perlindungan konsumen.

Tips Melindungi Hak Konsumen
- Selalu isi BBM di SPBU resmi dan terpercaya
- Minta bukti pembelian dan simpan dengan baik
- Perhatikan label dan segel kualitas BBM
- Jika mencurigai BBM oplosan, segera laporkan
- Jangan takut untuk mempertanyakan kualitas produk
- Bergabung dengan komunitas konsumen untuk mendapat informasi

Peran Pemerintah dalam Perlindungan Konsumen
Pemerintah memiliki kewajiban:
- Melakukan pengawasan ketat terhadap kualitas BBM
- Menindak tegas pelaku usaha yang melanggar
- Menyediakan saluran pengaduan yang mudah diakses
- Edukasi masyarakat tentang hak-hak konsumen
- Memfasilitasi penyelesaian sengketa konsumen

Kesimpulan
Mengetahui hak-hak Anda sebagai konsumen adalah langkah pertama untuk melindungi diri dari praktik tidak fair seperti BBM oplosan. Jangan ragu untuk menyuarakan keluhan dan menuntut keadilan. Hukum ada di pihak Anda, dan pemerintah wajib melindungi hak-hak konsumen. Bersama-sama, kita dapat menciptakan ekosistem distribusi BBM yang adil dan bertanggung jawab.`,
  },
  {
    id: 5,
    title: 'Modus Pengoplosan BBM: Dari Pencampuran hingga Distribusi',
    excerpt: 'Investigasi mendalam tentang modus operandi pelaku BBM oplosan, dari pengadaan bahan kimia hingga strategi distribusi yang menghindari pengawasan.',
    category: 'Investigasi',
    date: '2024-03-21',
    readTime: '9 min',
    color: 'from-indigo-600 to-blue-600',
    content: `Memahami modus operandi pelaku BBM oplosan adalah kunci untuk memberantasnya. Artikel ini membongkar tahap demi tahap bagaimana praktik ilegal ini dilakukan dan bagaimana pelaku menghindari pengawasan.

Tahap 1: Pengadaan Bahan Kimia (Supply Chain Ilegal)
Pelaku BBM oplosan tidak beroperasi sendirian. Mereka memiliki jaringan supplier bahan kimia ilegal yang menyediakan:

1. Thinner Industri
Bahan utama untuk mencampur BBM. Thinner dijual dengan harga sangat murah (Rp 15.000-25.000 per liter) dibanding BBM asli. Dengan mencampur 30-40% thinner, pelaku bisa menggandakan volume BBM dan meraup keuntungan besar.

2. Solvent dan Pelarut Kimia
Digunakan untuk meningkatkan volume BBM tanpa mengubah warna drastis. Solvent juga membantu "menipu" pembakaran awal agar mesin tidak langsung bermasalah.

3. Pewarna Sintetis
Untuk menyesuaikan warna BBM oplosan agar mirip dengan BBM asli. Pewarna ini sangat berbahaya karena dapat merusak sistem bahan bakar kendaraan.

4. Zat Aditif Ilegal
Dijual dengan klaim "meningkatkan oktan", padahal hanya memberikan efek sesaat dan justru mempercepat korosi dalam mesin.

Supplier bahan kimia ini beroperasi di pasar-pasar tradisional atau gudang tersembunyi. Mereka tidak memiliki izin resmi dan menjual produk tanpa label jelas.

Tahap 2: Proses Pencampuran (The Mixing Process)
Pencampuran dilakukan pada malam hari di SPBU saat jam operasional sepi. Pelaku memilih waktu ini untuk menghindari deteksi oleh konsumen atau petugas pengawas.

Metode Pencampuran:
1. BBM asli dipompa dari tangki penyimpanan ke tangki sementara
2. Bahan kimia (thinner, solvent) dicampurkan dengan perbandingan tertentu (biasanya 70:30 atau 60:40)
3. Pewarna ditambahkan untuk menyesuaikan warna
4. Campuran diaduk menggunakan pompa sirkulasi agar tercampur merata
5. Campuran dipindahkan kembali ke tangki utama

Proses ini bisa selesai dalam 2-3 jam untuk satu tangki (4.000-8.000 liter). Pelaku berpengalaman bahkan bisa melakukannya tanpa meninggalkan jejak yang jelas.

Tahap 3: Manipulasi Catatan dan Dokumen
Untuk menghindari audit, pelaku memanipulasi dokumen:
- Catatan stok BBM dipalsukan agar sesuai dengan catatan pembelian dari Pertamina
- Transaksi penjualan dicatat seolah-olah volume yang dijual sesuai dengan stok asli
- Laporan keuangan dimanipulasi untuk menyembunyikan keuntungan ilegal
- Bukti pembelian bahan kimia dihancurkan atau disembunyikan

Pelaku juga sering membayar oknum untuk memanipulasi hasil audit atau memberitahu jadwal sidak sehingga mereka bisa menghentikan praktik sementara.

Tahap 4: Distribusi dan Penjualan
BBM oplosan dijual dengan berbagai strategi:

1. Harga Kompetitif
SPBU nakal menawarkan harga sedikit lebih murah dari SPBU resmi untuk menarik konsumen. Diskon kecil 200-500 rupiah per liter sudah cukup untuk mengalihkan konsumen.

2. Program Promosi Palsu
Pelaku mengklaim ada program promosi atau diskon khusus untuk menutupi harga murah yang mencurigakan.

3. Target Konsumen Tertentu
Fokus pada konsumen yang tidak sensitif terhadap kualitas BBM atau tidak paham tentang dampak BBM oplosan (misalnya kendaraan tua atau motor murah).

4. Lokasi Strategis
SPBU nakal sering berlokasi di pinggir jalan tol atau area industri yang ramai tetapi jauh dari pengawasan ketat.

Tahap 5: Menghindari Pengawasan
Pelaku menggunakan berbagai trik untuk menghindari deteksi:

1. Sistem Peringatan Dini
Pelaku memiliki jaringan informan yang memberitahu jadwal sidak atau keberadaan petugas pengawas di area tersebut.

2. Tangki Ganda
Beberapa SPBU memiliki dua set tangki: satu untuk BBM asli (ditampilkan saat audit) dan satu untuk BBM oplosan (dijual ke konsumen).

3. Saklar Switching
Sistem pompa yang bisa dialihkan antara tangki BBM asli dan tangki BBM oplosan tergantung situasi.

4. Penyuapan
Sayangnya, oknum petugas pengawas kadang terlibat dengan menerima suap untuk menutup mata atau memberitahu jadwal sidak.

Dampak Jangka Panjang Modus Ini
Modus yang terorganisir ini menciptakan dampak serius:
- Kerugian negara triliunan rupiah per tahun
- Kerusakan mesin jutaan kendaraan
- Persaingan tidak sehat yang mematikan SPBU jujur
- Hilangnya kepercayaan masyarakat terhadap sistem distribusi BBM

Cara Memberantas Modus Ini
1. Digitalisasi Penuh
Implementasi sistem QR code dan blockchain di setiap tahap distribusi. Setiap liter BBM dapat dilacak dari kilang hingga ke tangki kendaraan.

2. Sensor IoT Real-Time
Instalasi sensor di tangki SPBU yang memonitor kualitas BBM 24/7 dan langsung terintegrasi dengan server pusat Kementerian ESDM.

3. Audit Mendadak Berbasis AI
Sistem AI menganalisis pola penjualan, konsumsi, dan stok untuk mendeteksi anomali. Audit dilakukan tanpa pola yang bisa diprediksi.

4. Penegakan Hukum Tegas
Sanksi maksimal tanpa toleransi, termasuk pencabutan izin permanen, penyitaan aset, dan hukuman penjara yang berat.

5. Edukasi Masyarakat
Masyarakat yang paham akan lebih mudah mendeteksi dan melaporkan BBM oplosan, menciptakan sistem pengawasan dari bawah.

Kesimpulan
Modus BBM oplosan adalah kejahatan terorganisir yang melibatkan banyak pihak dan memerlukan penanganan sistematis. Hanya dengan kombinasi teknologi modern, penegakan hukum tegas, dan partisipasi aktif masyarakat, praktik ini bisa diberantas tuntas.`,
  },
];

export default function ArticlesContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  const categories = ['Semua', 'Panduan', 'Ekonomi', 'Investigasi', 'Hukum'];

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'Semua' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (selectedArticle !== null) {
    const article = articles.find((a) => a.id === selectedArticle);
    if (!article) return null;

    return (
      <div className="min-h-screen bg-slate-50">
        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.button
              onClick={() => setSelectedArticle(null)}
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
            >
              ← Kembali ke Daftar Artikel
            </motion.button>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className={`inline-block px-4 py-2 bg-linear-to-r ${article.color} text-white rounded-full text-sm font-semibold mb-4`}>
                {article.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{article.title}</h1>
              <div className="flex items-center gap-6 text-white/70">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(article.date).toLocaleDateString('id-ID', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {article.readTime}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-xl"
          >
            <div className="prose prose-lg max-w-none">
              {article.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-6 text-justify">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              animate={{
                y: ['0vh', '100vh'],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 8 + 5,
                repeat: Infinity,
                ease: 'linear',
                delay: Math.random() * 3,
              }}
              style={{
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: 'spring' }}
              className="inline-block px-6 py-2 bg-blue-600/30 border-2 border-blue-500 text-blue-300 rounded-full font-semibold mb-6 backdrop-blur-sm"
            >
              ARTIKEL EDUKATIF
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Pusat Pengetahuan BBM Oplosan
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Kumpulan artikel mendalam tentang BBM oplosan, dampaknya, dan cara 
              melindungi diri Anda dari praktik ilegal ini
            </p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Cari artikel..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-16 pr-6 py-5 bg-white/10 backdrop-blur-lg border-2 border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all text-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-white border-b-2 border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Tag className="w-4 h-4 inline mr-2" />
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section ref={ref} className="py-24">
        <div className="container mx-auto px-4">
          {filteredArticles.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl text-gray-500">Artikel tidak ditemukan</p>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedArticle(article.id)}
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                    {/* Header */}
                    <div className={`h-3 bg-linear-to-r ${article.color}`} />

                    {/* Content */}
                    <div className="p-8 flex-1 flex flex-col">
                      <div className={`inline-block self-start px-4 py-2 bg-linear-to-r ${article.color} text-white rounded-full text-sm font-semibold mb-4`}>
                        {article.category}
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                        {article.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {new Date(article.date).toLocaleDateString('id-ID', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </div>
                      </div>

                      {/* Read More */}
                      <motion.div
                        className="mt-4 flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-4 transition-all"
                      >
                        Baca Selengkapnya
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Masih Punya Pertanyaan?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Hubungi Contact Center 136 atau laporkan SPBU yang mencurigakan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:136"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-blue-600 font-bold rounded-full text-lg shadow-2xl"
              >
                Hubungi 136
              </motion.a>
              <Link href="/">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 border-2 border-white text-white font-bold rounded-full text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  Kembali ke Beranda
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
