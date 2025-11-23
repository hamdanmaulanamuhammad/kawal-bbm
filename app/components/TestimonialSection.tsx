'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, User } from 'lucide-react';

const testimonials = [
  {
    name: 'Andi Prasetyo',
    role: 'Mahasiswa Teknik Mesin, Universitas Indonesia',
    avatar: '/avatars/student1.jpg',
    testimony: 'Sebagai mahasiswa teknik, saya sangat prihatin melihat praktik BBM oplosan yang merusak mesin kendaraan. Dari sudut pandang teknis, campuran bahan kimia berbahaya dalam BBM dapat menyebabkan kerusakan permanen pada sistem injeksi, karburator, dan komponen mesin lainnya. Biaya perbaikan yang harus ditanggung masyarakat jauh lebih besar dibanding keuntungan sesaat yang diraih pelaku. Ini bukan hanya soal ekonomi, tapi juga tanggung jawab moral kita terhadap keselamatan publik.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Siti Nurhaliza',
    role: 'Mahasiswa Hukum, Universitas Gadjah Mada',
    avatar: '/avatars/student2.jpg',
    testimony: 'Dari perspektif hukum, BBM oplosan adalah pelanggaran serius yang melanggar UU 22 Tahun 2001 tentang Minyak dan Gas Bumi serta UU 8 Tahun 1999 tentang Perlindungan Konsumen. Pelaku dapat dijerat dengan hukuman hingga 6 tahun penjara dan denda miliaran rupiah. Namun, penegakan hukum harus konsisten dan tegas agar memberikan efek jera. Masyarakat juga perlu aktif melaporkan praktik ini melalui jalur resmi yang telah disediakan pemerintah.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Dr. Budi Santoso, S.E., M.M.',
    role: 'Dosen Ekonomi Energi, Institut Teknologi Bandung',
    avatar: '/avatars/professor.jpg',
    testimony: 'Dari analisis ekonomi, dampak BBM oplosan sangat masif dan multidimensi. Kerugian negara mencapai triliunan rupiah per tahun akibat subsidi yang disalahgunakan. Lebih jauh, praktik ini menciptakan distorsi pasar yang merugikan pelaku usaha jujur dan menghancurkan kepercayaan konsumen. Diperlukan reformasi struktural dalam sistem pengawasan distribusi BBM, termasuk digitalisasi rantai pasok dengan teknologi blockchain dan QR code untuk memastikan transparansi dari hulu ke hilir. Tanpa langkah tegas, negara akan terus mengalami kebocoran ekonomi yang menggerus anggaran pembangunan.',
    color: 'from-green-500 to-emerald-500',
  },
];

export default function TestimonialSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
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
            RESPONS MASYARAKAT
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Suara Mereka yang Peduli
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Perspektif akademisi dan mahasiswa tentang dampak dan solusi masalah BBM oplosan
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 },
              }}
              className="w-full"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
                {/* Decorative Elements */}
                <motion.div
                  className={`absolute top-0 right-0 w-96 h-96 bg-linear-to-br ${testimonials[currentIndex].color} opacity-10 rounded-full blur-3xl`}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{ duration: 10, repeat: Infinity }}
                />

                {/* Quote Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className={`w-20 h-20 bg-linear-to-br ${testimonials[currentIndex].color} rounded-2xl flex items-center justify-center mb-8 shadow-xl`}
                >
                  <Quote className="w-10 h-10 text-white" />
                </motion.div>

                {/* Testimony Text */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 italic relative z-10"
                >
                  "{testimonials[currentIndex].testimony}"
                </motion.p>

                {/* Author Info */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="flex items-center gap-4 relative z-10"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 bg-linear-to-br ${testimonials[currentIndex].color} rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <User className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                  </div>
                </motion.div>

                {/* Progress Bar */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200"
                >
                  <motion.div
                    className={`h-full bg-linear-to-r ${testimonials[currentIndex].color}`}
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 8, ease: 'linear' }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <motion.button
            onClick={prevTestimonial}
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-full md:left-0 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 group"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            onClick={nextTestimonial}
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-full md:right-0 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 group"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToTestimonial(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-12 bg-blue-600'
                  : 'w-3 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
