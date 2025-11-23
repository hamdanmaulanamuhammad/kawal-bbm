'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { QrCode, Search, DollarSign, Shield, Zap, TrendingUp } from 'lucide-react';

const solutions = [
  {
    icon: QrCode,
    title: 'Digitalisasi Rantai Pasok dengan QR Code',
    description: 'Implementasi sistem QR code pada setiap tahap distribusi BBM, mulai dari kilang, depot, hingga SPBU dan pompa pengisian. Setiap transaksi tercatat secara digital dan dapat dilacak real-time oleh pemerintah dan masyarakat. Teknologi blockchain dapat diintegrasikan untuk memastikan data tidak dapat dimanipulasi. Konsumen dapat memindai QR code sebelum mengisi BBM untuk memverifikasi keaslian dan kualitas produk.',
    color: 'from-blue-600 to-cyan-600',
    impact: 'Transparansi 100% dalam rantai distribusi',
  },
  {
    icon: Search,
    title: 'Audit Mendadak Berbasis AI',
    description: 'Penerapan sistem audit mendadak yang dijadwalkan secara acak menggunakan algoritma artificial intelligence untuk menentukan target inspeksi berdasarkan analisis pola dan risiko. Petugas dilengkapi dengan perangkat laboratorium portabel untuk uji kualitas BBM secara instan di lokasi. Hasil audit langsung terupload ke sistem pusat dan dapat diakses publik, menciptakan akuntabilitas penuh bagi SPBU.',
    color: 'from-purple-600 to-pink-600',
    impact: 'Pengawasan 24/7 tanpa pemberitahuan',
  },
  {
    icon: DollarSign,
    title: 'Insentif untuk Whistleblower',
    description: 'Pemerintah memberikan reward finansial kepada pelapor yang informasinya terbukti benar dan menghasilkan penindakan hukum. Sistem perlindungan identitas pelapor dijamin ketat melalui enkripsi data dan saluran komunikasi aman. Program ini akan meningkatkan partisipasi masyarakat dalam pengawasan dan menciptakan risiko tinggi bagi pelaku. Insentif dapat berupa persentase dari denda yang dijatuhkan kepada pelanggar.',
    color: 'from-green-600 to-emerald-600',
    impact: 'Partisipasi aktif masyarakat sebagai pengawas',
  },
  {
    icon: Shield,
    title: 'Sertifikasi Ketat untuk Operator SPBU',
    description: 'Penerapan sistem sertifikasi dan lisensi yang lebih ketat bagi operator dan pengelola SPBU, termasuk pelatihan berkala tentang standar kualitas BBM dan konsekuensi hukum pelanggaran. Setiap operator wajib mengikuti ujian kompetensi dan etika bisnis secara rutin. SPBU yang terbukti melanggar akan mengalami pencabutan sertifikasi permanen, dan pemiliknya masuk dalam blacklist nasional sehingga tidak dapat membuka usaha serupa.',
    color: 'from-orange-600 to-red-600',
    impact: 'Kompetensi dan integritas operator terjamin',
  },
  {
    icon: Zap,
    title: 'Sensor IoT Real-Time di Tangki SPBU',
    description: 'Instalasi sensor Internet of Things (IoT) di setiap tangki penyimpanan SPBU untuk monitoring kualitas BBM secara real-time. Sensor akan mendeteksi komposisi kimia, densitas, dan kandungan air dalam BBM setiap saat. Data dikirim langsung ke server pusat Kementerian ESDM. Jika terjadi anomali atau pencampuran bahan lain, sistem akan otomatis memicu alarm dan mengunci pompa pengisian hingga investigasi selesai.',
    color: 'from-indigo-600 to-blue-600',
    impact: 'Deteksi pencampuran otomatis dalam hitungan detik',
  },
  {
    icon: TrendingUp,
    title: 'Kampanye Edukasi Masif Multi-Platform',
    description: 'Peluncuran kampanye edukasi publik secara masif melalui media sosial, televisi, radio, billboard, dan aplikasi mobile tentang bahaya BBM oplosan dan cara mengenali ciri-cirinya. Program edukasi mencakup video tutorial, infografis, webinar, dan roadshow ke berbagai daerah. Masyarakat diajarkan untuk memeriksa label kualitas BBM, memahami hak konsumen, dan prosedur pelaporan yang mudah. Edukasi dimulai dari tingkat sekolah hingga komunitas pengendara.',
    color: 'from-yellow-600 to-orange-600',
    impact: 'Masyarakat melek hak dan mampu mengidentifikasi BBM oplosan',
  },
];

export default function SolutionsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Animated Stars Background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: 'spring' }}
            className="inline-block px-6 py-2 bg-green-600/30 border-2 border-green-500 text-green-300 rounded-full font-semibold mb-6 backdrop-blur-sm"
          >
            SOLUSI STRATEGIS
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Menghentikan BBM Oplosan
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Pendekatan komprehensif dan inovatif untuk memberantas praktik BBM oplosan 
            dari akar permasalahan dengan memanfaatkan teknologi dan partisipasi masyarakat
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -30 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 50,
                transition: { duration: 0.3 }
              }}
              className="group perspective-1000"
            >
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border-2 border-white/10 hover:border-white/30 transition-all duration-300 h-full transform-style-3d">
                {/* Glowing Background Effect */}
                <motion.div
                  className={`absolute inset-0 bg-linear-to-br ${solution.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300 blur-xl`}
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.8 }}
                  className={`w-20 h-20 bg-linear-to-br ${solution.color} rounded-2xl flex items-center justify-center mb-6 shadow-2xl relative z-10`}
                >
                  <solution.icon className="w-10 h-10 text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {solution.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6 relative z-10 text-justify">
                  {solution.description}
                </p>

                {/* Impact Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 + 0.5 }}
                  className={`inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r ${solution.color} rounded-full text-white text-sm font-semibold relative z-10`}
                >
                  <TrendingUp className="w-4 h-4" />
                  {solution.impact}
                </motion.div>

                {/* Animated Border */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-linear-to-r ${solution.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  style={{
                    padding: '2px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-2 border-blue-500/50 rounded-2xl p-8 md:p-12 backdrop-blur-lg">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Implementasi Bertahap, Dampak Maksimal
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Solusi-solusi di atas dirancang untuk diterapkan secara bertahap namun terintegrasi. 
              Kombinasi teknologi modern, penegakan hukum tegas, dan partisipasi aktif masyarakat 
              akan menciptakan ekosistem distribusi BBM yang transparan, akuntabel, dan bebas dari 
              praktik oplosan yang merugikan bangsa.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('report-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full text-lg shadow-xl"
            >
              Mulai Berpartisipasi Sekarang →
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
