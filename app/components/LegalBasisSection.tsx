'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Scale, Book, ChevronDown, FileText } from 'lucide-react';

const legalBasis = [
  {
    title: 'UU No. 22 Tahun 2001',
    subtitle: 'Tentang Minyak dan Gas Bumi',
    icon: Scale,
    color: 'from-blue-600 to-cyan-600',
    articles: [
      {
        pasal: 'Pasal 23',
        content: 'Setiap orang yang melakukan usaha Niaga tanpa Izin Usaha Niaga sebagaimana dimaksud dalam Pasal 11 ayat (1) dipidana dengan pidana penjara paling lama 5 (lima) tahun dan denda paling banyak Rp 50.000.000.000,00 (lima puluh miliar rupiah). Praktik BBM oplosan termasuk dalam kategori usaha niaga ilegal yang melanggar ketentuan izin usaha.',
      },
      {
        pasal: 'Pasal 53',
        content: 'Bahan Bakar Minyak dan Bahan Bakar Gas yang dipasarkan di dalam negeri wajib memenuhi standar dan mutu yang ditetapkan. Pengoplosan BBM jelas melanggar standar mutu yang telah ditetapkan pemerintah dan membahayakan konsumen serta merusak mesin kendaraan.',
      },
    ],
  },
  {
    title: 'UU No. 8 Tahun 1999',
    subtitle: 'Tentang Perlindungan Konsumen',
    icon: FileText,
    color: 'from-purple-600 to-pink-600',
    articles: [
      {
        pasal: 'Pasal 4',
        content: 'Konsumen berhak atas kenyamanan, keamanan, dan keselamatan dalam mengkonsumsi barang dan/atau jasa. BBM oplosan melanggar hak dasar konsumen karena membahayakan keselamatan kendaraan dan berpotensi menimbulkan kerugian ekonomi yang besar bagi pemilik kendaraan.',
      },
      {
        pasal: 'Pasal 8 ayat (1)',
        content: 'Pelaku usaha dilarang memproduksi dan/atau memperdagangkan barang dan/atau jasa yang tidak memenuhi atau tidak sesuai dengan standar yang dipersyaratkan dan ketentuan peraturan perundang-undangan. Praktik pencampuran BBM dengan bahan kimia berbahaya jelas melanggar pasal ini.',
      },
      {
        pasal: 'Pasal 62',
        content: 'Pelanggar dapat dipidana dengan pidana penjara paling lama 5 (lima) tahun atau pidana denda paling banyak Rp 2.000.000.000,00 (dua miliar rupiah). Sanksi ini berlaku bagi pelaku usaha yang menjual BBM tidak sesuai standar dan merugikan konsumen.',
      },
    ],
  },
];

export default function LegalBasisSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [expandedLaw, setExpandedLaw] = useState<number | null>(null);
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null);

  const toggleLaw = (index: number) => {
    setExpandedLaw(expandedLaw === index ? null : index);
    setExpandedArticle(null);
  };

  const toggleArticle = (lawIndex: number, articleIndex: number) => {
    const key = `${lawIndex}-${articleIndex}`;
    setExpandedArticle(expandedArticle === key ? null : key);
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: 'spring' }}
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-full font-semibold mb-6"
          >
            DASAR HUKUM
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Landasan Hukum Penindakan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Praktik BBM oplosan adalah pelanggaran serius yang diatur dalam berbagai 
            undang-undang dengan ancaman hukuman berat
          </p>
        </motion.div>

        {/* Legal Cards */}
        <div className="max-w-5xl mx-auto space-y-6">
          {legalBasis.map((law, lawIndex) => (
            <motion.div
              key={lawIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: lawIndex * 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100"
            >
              {/* Law Header */}
              <motion.button
                onClick={() => toggleLaw(lawIndex)}
                whileHover={{ backgroundColor: 'rgba(249, 250, 251, 1)' }}
                className="w-full p-8 flex items-center justify-between text-left transition-colors"
              >
                <div className="flex items-center gap-6 flex-1">
                  <motion.div
                    animate={
                      expandedLaw === lawIndex
                        ? { rotate: 360, scale: 1.1 }
                        : { rotate: 0, scale: 1 }
                    }
                    transition={{ duration: 0.5 }}
                    className={`w-20 h-20 bg-linear-to-br ${law.color} rounded-2xl flex items-center justify-center shadow-xl shrink-0`}
                  >
                    <law.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                      {law.title}
                    </h3>
                    <p className="text-gray-600 text-lg">{law.subtitle}</p>
                  </div>
                </div>
                <motion.div
                  animate={
                    expandedLaw === lawIndex ? { rotate: 180 } : { rotate: 0 }
                  }
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-8 h-8 text-gray-400" />
                </motion.div>
              </motion.button>

              {/* Articles */}
              <AnimatePresence>
                {expandedLaw === lawIndex && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden border-t-2 border-gray-100"
                  >
                    <div className="p-8 space-y-4 bg-gray-50">
                      {law.articles.map((article, articleIndex) => (
                        <motion.div
                          key={articleIndex}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: articleIndex * 0.1 }}
                        >
                          <motion.button
                            onClick={() => toggleArticle(lawIndex, articleIndex)}
                            whileHover={{ x: 5 }}
                            className="w-full bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-left border-2 border-transparent hover:border-blue-200"
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-3">
                                  <motion.div
                                    animate={{
                                      scale:
                                        expandedArticle ===
                                        `${lawIndex}-${articleIndex}`
                                          ? 1.1
                                          : 1,
                                    }}
                                    className={`px-4 py-2 bg-linear-to-r ${law.color} text-white font-bold rounded-lg text-sm`}
                                  >
                                    {article.pasal}
                                  </motion.div>
                                  <Book className="w-5 h-5 text-gray-400" />
                                </div>
                                <AnimatePresence>
                                  {expandedArticle ===
                                    `${lawIndex}-${articleIndex}` && (
                                    <motion.p
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.3 }}
                                      className="text-gray-700 leading-relaxed text-justify overflow-hidden"
                                    >
                                      {article.content}
                                    </motion.p>
                                  )}
                                </AnimatePresence>
                                {expandedArticle !==
                                  `${lawIndex}-${articleIndex}` && (
                                  <p className="text-gray-500">
                                    Klik untuk membaca isi pasal...
                                  </p>
                                )}
                              </div>
                              <motion.div
                                animate={
                                  expandedArticle ===
                                  `${lawIndex}-${articleIndex}`
                                    ? { rotate: 180 }
                                    : { rotate: 0 }
                                }
                                transition={{ duration: 0.3 }}
                              >
                                <ChevronDown className="w-6 h-6 text-gray-400 shrink-0" />
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

        {/* Summary Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 md:p-12 text-white shadow-2xl"
        >
          <div className="flex items-start gap-6">
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Scale className="w-16 h-16 shrink-0" />
            </motion.div>
            <div>
              <h3 className="text-3xl font-bold mb-4">Sanksi Maksimal</h3>
              <p className="text-white/90 text-lg leading-relaxed mb-4">
                Pelaku BBM oplosan dapat dijerat dengan hukuman kombinasi dari kedua undang-undang 
                di atas, dengan ancaman maksimal <span className="font-bold">6 tahun penjara</span> dan 
                denda hingga <span className="font-bold">Rp 50 miliar</span>. Selain sanksi pidana, 
                izin usaha SPBU akan dicabut permanen dan aset dapat disita negara.
              </p>
              <p className="text-white/90 text-lg leading-relaxed">
                Penegakan hukum yang konsisten dan tegas adalah kunci untuk memberikan efek jera 
                dan melindungi hak konsumen serta kepentingan negara.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
