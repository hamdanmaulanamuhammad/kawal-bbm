'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect, useMemo } from 'react';
import { ChevronDown, Shield, Users, Building, Scale } from 'lucide-react';

const analysisData = [
  {
    category: 'Hak Warga Negara',
    icon: Users,
    color: 'from-blue-500 to-cyan-500',
    items: [
      {
        title: 'Hak atas Pelayanan Publik yang Berkualitas',
        content: 'Setiap warga negara Indonesia berhak mendapatkan pelayanan publik yang prima, termasuk akses terhadap bahan bakar minyak yang berkualitas dan sesuai standar. Pemerintah berkewajiban memastikan bahwa BBM yang disalurkan kepada masyarakat telah lulus uji kualitas dan aman digunakan untuk kendaraan bermotor. Hak ini dijamin oleh konstitusi dan berbagai peraturan perundang-undangan terkait perlindungan konsumen.',
      },
      {
        title: 'Hak atas Energi yang Layak dan Terjangkau',
        content: 'Masyarakat memiliki hak fundamental untuk mengakses energi, khususnya BBM, yang tidak hanya terjangkau tetapi juga memenuhi standar keamanan dan kualitas. Program subsidi BBM dirancang untuk memastikan masyarakat dapat memperoleh bahan bakar dengan harga yang adil. Ketika BBM dioplosan, hak ini dilanggar karena kualitas BBM menurun drastis sementara harga tetap tinggi, sehingga merugikan konsumen secara ekonomi dan teknis.',
      },
      {
        title: 'Hak untuk Mendapatkan Informasi yang Jelas',
        content: 'Warga negara berhak mengetahui komposisi, standar kualitas, dan informasi teknis mengenai BBM yang mereka beli. Transparansi ini penting agar konsumen dapat membuat keputusan pembelian yang tepat dan melindungi aset mereka. Dalam kasus BBM oplosan, informasi yang benar justru disembunyikan, menciptakan ketidakadilan informasi yang merugikan konsumen.',
      },
      {
        title: 'Hak untuk Mengajukan Keluhan dan Mendapat Perlindungan Hukum',
        content: 'Ketika hak-hak konsumen dilanggar, masyarakat memiliki hak untuk melaporkan pelanggaran tersebut kepada pihak berwenang dan mendapatkan perlindungan hukum. Pemerintah menyediakan berbagai saluran pengaduan, termasuk Contact Center 136 Kementerian ESDM, untuk menampung laporan dugaan praktik BBM oplosan. Setiap laporan wajib ditindaklanjuti dengan investigasi yang transparan dan adil.',
      },
    ],
  },
  {
    category: 'Kewajiban Warga Negara',
    icon: Shield,
    color: 'from-green-500 to-emerald-500',
    items: [
      {
        title: 'Kewajiban Menaati Hukum dan Peraturan',
        content: 'Setiap warga negara wajib menaati seluruh hukum dan peraturan yang berlaku di Indonesia, termasuk regulasi terkait penggunaan dan distribusi BBM. Masyarakat dilarang terlibat dalam praktik ilegal seperti membeli, menjual, atau mendistribusikan BBM oplosan. Kepatuhan terhadap hukum adalah fondasi dari masyarakat yang tertib dan adil.',
      },
      {
        title: 'Kewajiban Melaporkan Pelanggaran yang Diketahui',
        content: 'Warga negara yang mengetahui atau mencurigai adanya praktik BBM oplosan memiliki kewajiban moral dan hukum untuk melaporkan hal tersebut kepada pihak berwenang. Partisipasi aktif masyarakat dalam pengawasan sangat penting untuk memberantas kejahatan ini. Pelaporan dapat dilakukan melalui berbagai saluran resmi dengan jaminan perlindungan pelapor.',
      },
      {
        title: 'Kewajiban Menjaga Fasilitas Publik',
        content: 'Masyarakat berkewajiban untuk menjaga dan tidak merusak fasilitas publik, termasuk infrastruktur energi seperti SPBU dan jalur distribusi BBM. Kesadaran kolektif untuk melindungi aset negara ini akan memastikan keberlanjutan pelayanan energi bagi seluruh rakyat Indonesia.',
      },
      {
        title: 'Kewajiban Tidak Menyalahgunakan Subsidi',
        content: 'BBM bersubsidi adalah bantuan negara untuk meringankan beban ekonomi masyarakat. Warga negara wajib menggunakan subsidi ini dengan bijak dan tidak terlibat dalam praktik penyalahgunaan, seperti membeli BBM bersubsidi untuk dijual kembali dengan harga tinggi atau menggunakannya untuk tujuan komersial yang tidak sesuai ketentuan.',
      },
    ],
  },
  {
    category: 'Hak Negara',
    icon: Building,
    color: 'from-purple-500 to-pink-500',
    items: [
      {
        title: 'Hak untuk Mengatur dan Mengelola Distribusi Energi',
        content: 'Negara memiliki hak penuh untuk mengatur, mengelola, dan mengawasi distribusi energi nasional, termasuk BBM. Hal ini mencakup penetapan standar kualitas, mekanisme subsidi, dan regulasi operasional SPBU di seluruh Indonesia. Hak ini merupakan kedaulatan negara dalam mengelola sumber daya alam untuk kesejahteraan rakyat.',
      },
      {
        title: 'Hak untuk Menetapkan Sanksi dan Hukuman',
        content: 'Negara berhak menjatuhkan sanksi administratif maupun pidana kepada pihak-pihak yang melanggar peraturan, termasuk pelaku BBM oplosan. Sanksi ini dapat berupa pencabutan izin usaha, denda berat, hingga hukuman penjara sesuai dengan tingkat pelanggaran yang dilakukan.',
      },
      {
        title: 'Hak untuk Melakukan Investigasi dan Penyidikan',
        content: 'Pemerintah melalui aparat penegak hukum berhak melakukan investigasi, penyelidikan, dan penyidikan terhadap dugaan praktik ilegal dalam distribusi BBM. Proses ini mencakup sidak mendadak, pengambilan sampel, hingga penangkapan tersangka tanpa pemberitahuan terlebih dahulu jika diperlukan untuk mengamankan barang bukti.',
      },
    ],
  },
  {
    category: 'Kewajiban Negara',
    icon: Scale,
    color: 'from-red-500 to-orange-500',
    items: [
      {
        title: 'Kewajiban Menyediakan BBM Sesuai Standar',
        content: 'Negara berkewajiban memastikan bahwa BBM yang didistribusikan kepada masyarakat telah memenuhi standar kualitas dan keamanan yang ditetapkan. Ini termasuk pengawasan ketat terhadap seluruh rantai distribusi, dari kilang hingga tangki kendaraan konsumen. Setiap penyimpangan dari standar harus segera ditindak dengan tegas.',
      },
      {
        title: 'Kewajiban Melindungi Konsumen dari Praktik Ilegal',
        content: 'Pemerintah wajib melindungi hak-hak konsumen dari praktik-praktik ilegal yang merugikan, termasuk BBM oplosan. Perlindungan ini mencakup penegakan hukum yang konsisten, penyediaan saluran pengaduan yang mudah diakses, serta edukasi kepada masyarakat tentang cara mengenali dan menghindari BBM oplosan.',
      },
      {
        title: 'Kewajiban Menindak Pelanggaran dengan Tegas',
        content: 'Negara berkewajiban menindak setiap pelanggaran dengan tegas dan adil, tanpa pandang bulu. Penegakan hukum harus dilakukan secara konsisten dan transparan untuk memberikan efek jera kepada pelaku dan mencegah praktik serupa di masa depan. Proses hukum harus berjalan cepat dan efektif.',
      },
      {
        title: 'Kewajiban Memberikan Edukasi dan Sosialisasi',
        content: 'Pemerintah wajib menyelenggarakan program edukasi dan sosialisasi secara masif kepada masyarakat tentang bahaya BBM oplosan, cara mengenali ciri-cirinya, dan langkah-langkah pelaporan. Edukasi ini harus menjangkau seluruh lapisan masyarakat melalui berbagai media dan platform yang mudah diakses.',
      },
    ],
  },
];

export default function RightsObligationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  const particles = useMemo(() => 
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    })),
    []
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleCategory = (index: number) => {
    setExpandedCategory(expandedCategory === index ? null : index);
    setExpandedItem(null);
  };

  const toggleItem = (categoryIndex: number, itemIndex: number) => {
    const key = `${categoryIndex}-${itemIndex}`;
    setExpandedItem(expandedItem === key ? null : key);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-blue-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        {isMounted && particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 bg-white rounded-full"
            animate={{
              y: ['0vh', '100vh'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
            style={{
              left: `${particle.left}%`,
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
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: 'spring' }}
            className="inline-block px-6 py-2 bg-purple-600/30 border-2 border-purple-500 text-purple-300 rounded-full font-semibold mb-6 backdrop-blur-sm"
          >
            ANALISIS MENDALAM
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Hak dan Kewajiban dalam Kasus BBM Oplosan
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Memahami hak dan kewajiban setiap pihak adalah kunci untuk menciptakan 
            sistem distribusi BBM yang adil, transparan, dan bertanggung jawab
          </p>
        </motion.div>

        {/* Accordion Sections */}
        <div className="max-w-5xl mx-auto space-y-4">
          {analysisData.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              {/* Category Header */}
              <motion.button
                onClick={() => toggleCategory(categoryIndex)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white/10 backdrop-blur-lg border-2 border-white/20 rounded-2xl p-6 flex items-center justify-between hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    animate={
                      expandedCategory === categoryIndex
                        ? { rotate: 360, scale: 1.1 }
                        : { rotate: 0, scale: 1 }
                    }
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 rounded-xl bg-linear-to-br ${category.color} flex items-center justify-center shadow-xl`}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white text-left">
                    {category.category}
                  </h3>
                </div>
                <motion.div
                  animate={
                    expandedCategory === categoryIndex
                      ? { rotate: 180 }
                      : { rotate: 0 }
                  }
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" />
                </motion.div>
              </motion.button>

              {/* Category Items */}
              <AnimatePresence>
                {expandedCategory === categoryIndex && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 space-y-3">
                      {category.items.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: itemIndex * 0.1 }}
                        >
                          <motion.button
                            onClick={() => toggleItem(categoryIndex, itemIndex)}
                            whileHover={{ x: 5 }}
                            className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-left hover:bg-white/10 transition-all duration-300"
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                                  <span
                                    className={`w-2 h-2 rounded-full bg-linear-to-r ${category.color}`}
                                  />
                                  {item.title}
                                </h4>
                                <AnimatePresence>
                                  {expandedItem ===
                                    `${categoryIndex}-${itemIndex}` && (
                                    <motion.p
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.3 }}
                                      className="text-gray-300 leading-relaxed overflow-hidden"
                                    >
                                      {item.content}
                                    </motion.p>
                                  )}
                                </AnimatePresence>
                              </div>
                              <motion.div
                                animate={
                                  expandedItem ===
                                  `${categoryIndex}-${itemIndex}`
                                    ? { rotate: 180 }
                                    : { rotate: 0 }
                                }
                                transition={{ duration: 0.3 }}
                              >
                                <ChevronDown className="w-5 h-5 text-white/50 shrink-0" />
                              </motion.div>
                            </div>
                          </motion.button>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 text-lg mb-6">
            Pahami hak dan kewajiban Anda untuk bersama-sama memberantas BBM oplosan
          </p>
        </motion.div>
      </div>
    </section>
  );
}
