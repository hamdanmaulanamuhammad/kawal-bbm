'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Search, FileText, AlertTriangle, CheckCircle, Scale, TrendingUp } from 'lucide-react';

const timelineEvents = [
  {
    icon: Search,
    title: 'Munculnya Kecurigaan',
    date: 'Awal Maret 2024',
    description: 'Laporan masyarakat mulai berdatangan mengenai kualitas BBM yang mencurigakan di berbagai SPBU. Kendaraan mengalami penurunan performa drastis, mesin bermasalah, dan konsumsi BBM meningkat tidak wajar. Keluhan ini menjadi pemicu investigasi awal.',
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-500',
  },
  {
    icon: FileText,
    title: 'Penyelidikan Intensif',
    date: '10-15 Maret 2024',
    description: 'Kementerian ESDM bersama Pertamina melakukan penyelidikan mendalam terhadap SPBU-SPBU yang dilaporkan. Tim investigasi mengumpulkan sampel BBM dari berbagai lokasi untuk diuji di laboratorium. Analisis awal menunjukkan adanya kandungan zat kimia yang tidak seharusnya ada.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500',
  },
  {
    icon: AlertTriangle,
    title: 'Operasi Sidak Massal',
    date: '18-25 Maret 2024',
    description: 'Operasi sidak mendadak dilakukan serentak di wilayah Bekasi, Jakarta, Tangerang, dan Depok. Ratusan petugas terjun langsung ke puluhan SPBU yang terindikasi. Operasi ini dilakukan tanpa pemberitahuan sebelumnya untuk memastikan tidak ada manipulasi bukti.',
    color: 'from-red-500 to-pink-500',
    bgColor: 'bg-red-500',
  },
  {
    icon: CheckCircle,
    title: 'Temuan Pewarna Kimia',
    date: '26-28 Maret 2024',
    description: 'Hasil sidak mengungkap fakta mengejutkan: ditemukan pewarna kimia berbahaya dan zat aditif ilegal di tangki penyimpanan BBM. Laboratorium forensik mengidentifikasi campuran yang terdiri dari solvent, thinner, dan bahan kimia industri lainnya yang sangat merusak mesin kendaraan.',
    color: 'from-purple-500 to-indigo-500',
    bgColor: 'bg-purple-500',
  },
  {
    icon: TrendingUp,
    title: 'Penyitaan BBM Palsu',
    date: '29-31 Maret 2024',
    description: 'Total 15.420 liter BBM oplosan berhasil disita dari berbagai SPBU yang terbukti melakukan praktik ilegal. Selain itu, ditemukan 250 liter cairan pewarna kimia yang siap dicampurkan. Beberapa oknum pemilik SPBU ditangkap dan dilakukan pemeriksaan lebih lanjut.',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-500',
  },
  {
    icon: Scale,
    title: 'Proses Hukum Berlanjut',
    date: 'April 2024 - Sekarang',
    description: 'Tersangka dijerat dengan pasal berlapis: UU 22 Tahun 2001 tentang Minyak dan Gas Bumi serta UU 8 Tahun 1999 tentang Perlindungan Konsumen. Ancaman hukuman hingga 6 tahun penjara dan denda miliaran rupiah. Pemerintah berkomitmen terus memburu pelaku lain yang masih beroperasi.',
    color: 'from-gray-700 to-slate-900',
    bgColor: 'bg-gray-700',
  },
];

export default function TimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 30, repeat: Infinity, repeatType: 'reverse' }}
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: 'spring' }}
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-full font-semibold mb-6"
          >
            STUDI KASUS
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Kronologi Kasus Besar BBM Oplosan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Perjalanan investigasi dari kecurigaan hingga pengungkapan jaringan BBM oplosan 
            yang merugikan negara triliunan rupiah
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : {}}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute left-8 md:left-1/2 top-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 transform md:-translate-x-1/2"
          />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  } ml-20 md:ml-0`}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-300 relative overflow-hidden group">
                    {/* Animated Background */}
                    <motion.div
                      className={`absolute inset-0 bg-linear-to-br ${event.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                      animate={hoveredIndex === index ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    />

                    <div className="relative z-10">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-sm font-semibold text-blue-600 mb-2"
                      >
                        {event.date}
                      </motion.div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                        {index % 2 === 0 ? (
                          <>
                            <span>{event.title}</span>
                            <motion.div
                              animate={hoveredIndex === index ? { rotate: 360 } : {}}
                              transition={{ duration: 0.6 }}
                              className={`w-8 h-8 rounded-lg bg-linear-to-br ${event.color} flex items-center justify-center ml-auto md:ml-0`}
                            >
                              <event.icon className="w-4 h-4 text-white" />
                            </motion.div>
                          </>
                        ) : (
                          <>
                            <motion.div
                              animate={hoveredIndex === index ? { rotate: 360 } : {}}
                              transition={{ duration: 0.6 }}
                              className={`w-8 h-8 rounded-lg bg-linear-to-br ${event.color} flex items-center justify-center`}
                            >
                              <event.icon className="w-4 h-4 text-white" />
                            </motion.div>
                            <span>{event.title}</span>
                          </>
                        )}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{event.description}</p>
                    </div>

                    {/* Progress Indicator */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : {}}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                      className={`h-1 bg-linear-to-r ${event.color} mt-6 rounded-full`}
                      style={{ transformOrigin: index % 2 === 0 ? 'right' : 'left' }}
                    />
                  </div>
                </motion.div>

                {/* Center Icon/Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2, type: 'spring' }}
                  whileHover={{ scale: 1.5, rotate: 180 }}
                  className={`absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-16 h-16 ${event.bgColor} rounded-full flex items-center justify-center shadow-2xl border-4 border-white z-20`}
                >
                  <event.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-20 grid md:grid-cols-3 gap-6"
        >
          {[
            { label: 'Total BBM Disita', value: '15.420', unit: 'Liter', icon: TrendingUp },
            { label: 'SPBU Terjaring', value: '24', unit: 'Lokasi', icon: AlertTriangle },
            { label: 'Pewarna Kimia', value: '250', unit: 'Liter', icon: CheckCircle },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl"
            >
              <stat.icon className="w-12 h-12 mb-4 opacity-80" />
              <div className="text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-xl mb-1">{stat.unit}</div>
              <div className="text-blue-100">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
