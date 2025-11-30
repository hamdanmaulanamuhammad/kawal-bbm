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
        pasal: 'Pasal 54',
        content: 'Setiap orang yang meniru atau memalsukan Bahan Bakar Minyak dan Gas Bumi dan hasil olahan sebagaimana dimaksud dalam Pasal 28 ayat (1) dipidana dengan pidana penjara paling lama (enam) tahun dan denda paling tunggi Rp60.000.000.000,00 (enam puluh miliar rupiah).',
      },
      {
        pasal: 'Pasal 55',
        content: 'Setiap orang yang menyalahgunakan Pengangkutan dan/atau Niaga Barang Bahan Minyak yang disubsidi Pemerintah dipidana dengan pidana penjara paling lama 6 (enam) tahun dan denda paling tinggi Rp60.000.000.000,00 (enam puluh miliar rupiah).',
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
        content: [
          'Hak konsumen adalah: ',
          'hak atas kenyamanan, keamanan, dan keselamatan dalam mengkonsumsi barang dan/atau jasa;',
          'hak untuk memilih barang atau jasa serta mendapatkan barang dan/atau jasa tersebut sesuai dengan nilai tukar dan kondisi serta jaminan yang dijanjikan;',
          'hak atas informasi yang benar, jelas, dan jujur mengenai kondisi dan jaminan barang dan/atau jasa;',
          'hak untuk didengar pendapat dan keluhannya atas barang dan/atau jasa yang digunakan;',
          'hak untuk mendapatkan advokasi, perlindungan, dan upaya penyelesaian sengketa perlindungan konsumen secara patut;',
          'hak untuk mendapat pembinaan dan pendidikan konsumen;',
          'hak untuk diperlakukan dan dilayani secara benar dan jujur serta tidak diskriminatif;',
          'hak untuk mendapatkan kompensasi, ganti rugi dan/atau penggantian, apabila barang dan/atau jasa yang diterima tidak sesuai dengan perjanjian atau tidak sebagaimana mestinya;',
          'hak-hak yang diatur dalam ketentuan peraturan perundang-undangan lainnya.',
        ],
      },
      {
        pasal: 'Pasal 8 ayat (1)',
        content: [
          'Pelaku usaha dilarang memproduksi dan/atau memperdagangkan barang dan/atau jasa yang: ',
          'tidak memenuhi atau tidak sesuai dengan standar yang dipersyaratkan dan ketentuan peraturan perundang-undangan;',
          'tidak sesuai dengan berat bersih, isi bersih atau netto, dan jumlah dalam hitungan sebagaimana yang dinyatakan dalam label atau etiket barang tersebut;',
          'tidak sesuai dengan ukuran, takaran, timbangan dan jumlah dalam hitungan menurut ukuran yang sebenarnya;',
          'tidak sesuai dengan kondisi, jaminan, keistimewaan atau kemanjuran sebagaimana dinyatakan dalam label, etiket atau keterangan barang dan/atau jasa tersebut;',
          'tidak sesuai dengan mutu, tingkatan, komposisi, proses pengolahan, gaya, mode, atau penggunaan tertentu sebagaimana dinyatakan dalam label atau keterangan barang dan/atau jasa tersebut;',
          'tidak sesuai dengan janji dinyatakan dalam label, etiket keterangan, iklan atau promosi penjualan barang dan/atau jasa tersebut;',
          'tidak mencantumkan tanggal kadaluwarsa atau jangka waktu penggunaan/pemanfaatan yang paling baik atas barang tertentu;',
          'tidak mengikuti ketentuan berproduksi secara halal, sebagaimana pernyataan "halal" yang dicantumkan dalam label;',
          'tidak memasang label atau membuat penjelasan barang yang memuat nama barang, ukuran, berat/isi bersih atau netto, komposisi, aturan pakai, tanggal pembuatan, akibat sampingan, nama dan alamat pelaku usaha serta keterangan lain untuk penggunaan yang menurut ketentuan harus dipasang/dibuat;',
          'tidak mencantumkan informasi dan/atau petunjuk penggunaan barang dalam bahasa Indonesia sesuai dengan ketentuan perundang-undangan yang berlaku.',
        ],
      },
      {
        pasal: 'Pasal 8 ayat (2)',
        content: 'Pelaku usaha dilarang memperdagangkan barang yang rusak, cacat atau bekas, dan tercemar tanpa memberikan informasi secara lengkap dan benar atas barang dimaksud.'
      },
      {
        pasal: 'Pasal 8 ayat (3)',
        content: 'Pelaku usaha dilarang memperdagangkan sediaan farmasi dan pangan yang rusak, cacat atau bekas dan tercemar, dengan atau tanpa memberikan informasi secara lengkap dan benar.'
      },
      {
        pasal: 'Pasal 8 ayat (4)',
        content: 'Pelaku usaha yang melakukan pelanggaran pada ayat (1) dan ayat (2) dilarang memperdagangkan barang dan/atau jasa tersebut serta wajib menariknya dari peredaran.'
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
                                  {expandedArticle === `${lawIndex}-${articleIndex}` && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.3 }}
                                      className="text-gray-700 leading-relaxed text-justify overflow-hidden"
                                    >
                                      {Array.isArray(article.content) ? (
                                        <>
                                          {/* Kalau item pertama adalah judul kalimat, tampilkan di atas */}
                                          <p className="mb-2">{article.content[0]}</p>
                                          <ol className="list-decimal pl-6 space-y-1">
                                            {article.content.slice(1).map((item, idx) => (
                                              <li key={idx}>{item}</li>
                                            ))}
                                          </ol>
                                        </>
                                      ) : (
                                        // Untuk content yang masih string (UU 22/2001)
                                        <p>{article.content}</p>
                                      )}
                                    </motion.div>
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
      </div>
    </section>
  );
}
