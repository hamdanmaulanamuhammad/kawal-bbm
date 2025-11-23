'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Droplet, Users, MapPin, Calendar, HelpCircle, Cog } from 'lucide-react';

const problemAspects = [
  {
    icon: Droplet,
    title: 'Apa yang Terjadi?',
    content: 'BBM Oplosan adalah praktik pencampuran bahan bakar minyak bersubsidi dengan bahan kimia berbahaya atau bahan bakar non-standar untuk meraih keuntungan ilegal. Praktik ini mengubah komposisi BBM yang seharusnya aman menjadi campuran yang merusak mesin kendaraan dan berbahaya bagi kesehatan masyarakat.',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: Users,
    title: 'Siapa Pelaku dan Korbannya?',
    content: 'Pelaku utamanya adalah oknum pemilik atau pengelola SPBU yang tidak bertanggung jawab, dengan jaringan distributor ilegal. Korbannya adalah masyarakat luas—pemilik kendaraan yang harus menanggung kerusakan mesin, serta negara yang kehilangan triliunan rupiah dari subsidi BBM yang disalahgunakan.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: MapPin,
    title: 'Di Mana Kasus Ini Terjadi?',
    content: 'Kasus BBM Oplosan tersebar di berbagai wilayah Indonesia, dengan konsentrasi tinggi di daerah urban seperti Jakarta, Bekasi, Tangerang, Depok, dan kota-kota besar lainnya. SPBU-SPBU di pinggir jalan tol dan area industri menjadi sasaran utama praktik ilegal ini.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Calendar,
    title: 'Kapan Puncaknya?',
    content: 'Puncak kasus BBM Oplosan terjadi pada awal tahun 2024, khususnya bulan Maret, ketika pemerintah melalui Kementerian ESDM melakukan operasi sidak massal. Dalam operasi tersebut, ditemukan ribuan liter BBM oplosan yang telah beredar dan merusak kendaraan masyarakat.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: HelpCircle,
    title: 'Mengapa Praktik Ini Ada?',
    content: 'Motivasi utama adalah keserakahan ekonomi. Dengan mencampur BBM bersubsidi dengan bahan kimia murah, pelaku bisa meraup keuntungan berlipat ganda. Lemahnya pengawasan dan minimnya sanksi tegas di masa lalu membuat praktik ini terus berlanjut, merugikan negara dan rakyat.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Cog,
    title: 'Bagaimana Modusnya?',
    content: 'Modus operandi dimulai dengan pengadaan bahan kimia pewarna dan zat aditif ilegal. Pelaku mencampur BBM asli dengan cairan tersebut di tangki penyimpanan SPBU pada malam hari. Campuran ini kemudian dijual ke konsumen tanpa sepengetahuan mereka, dengan tampilan dan warna yang menyerupai BBM asli sehingga sulit dideteksi.',
    color: 'from-indigo-500 to-blue-500',
  },
];

export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section id="problem-section" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: 'spring' }}
            className="inline-block px-6 py-2 bg-red-100 text-red-700 rounded-full font-semibold mb-4"
          >
            MEMAHAMI MASALAH
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Anatomi BBM Oplosan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Menyelami lebih dalam tentang praktik kejahatan yang merugikan bangsa
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problemAspects.map((aspect, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border-2 border-transparent hover:border-gray-200">
                {/* Animated Gradient Border on Hover */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${aspect.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />
                
                {/* Icon with Animation */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${aspect.color} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <aspect.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {aspect.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {aspect.content}
                </p>

                {/* Decorative Element */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.4 }}
                  className={`h-1 bg-gradient-to-r ${aspect.color} mt-6 rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <button
              onClick={() => document.getElementById('impact-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Lihat Dampak Ekonomi →
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
