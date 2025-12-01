'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, AlertTriangle } from 'lucide-react';
import { useEffect, useState, useMemo } from 'react';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const particles = useMemo(() => {
    if (typeof window === 'undefined') return [];
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      opacity: Math.random() * 0.5,
      yEnd: Math.random() * window.innerHeight,
      opacityMid: Math.random() * 0.5,
      duration: Math.random() * 10 + 10,
    }));
  }, [mounted]);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      if (typeof window !== 'undefined') {
        setMousePosition({
          x: (e.clientX / window.innerWidth - 0.5) * 20,
          y: (e.clientY / window.innerHeight - 0.5) * 20,
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContent = () => {
    document.getElementById('problem-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated Background Particles */}
      {mounted && (
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              initial={{
                x: particle.x,
                y: particle.y,
                opacity: particle.opacity,
              }}
              animate={{
                y: [null, particle.yEnd],
                opacity: [null, particle.opacityMid, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>
      )}

      {/* Parallax Background Shapes */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </motion.div>

      <motion.div
        className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center"
        style={{ y, opacity }}
      >
        {/* Alert Badge */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 200 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-600/20 border-2 border-red-500 rounded-full backdrop-blur-sm">
            <motion.div
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <AlertTriangle className="w-5 h-5 text-red-500" />
            </motion.div>
            <span className="text-red-300 font-semibold">INVESTIGASI KHUSUS</span>
          </div>
        </motion.div>

        {/* Main Headline with Typing Effect */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          <span className="inline-block">Sabotase di Balik</span>
          <br />
          <motion.span
            className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500"
            animate={{
              backgroundPosition: ['0%', '100%', '0%'],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            Selang Pengisian Bensin
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl leading-relaxed"
        >
          BBM Oplosan adalah{' '}
          <span className="text-red-400 font-semibold">kejahatan ganda</span>:{' '}
          merusak mesin kendaraan dan menguras{' '}
          <span className="text-yellow-400 font-semibold">triliunan rupiah</span>{' '}
          subsidi rakyat.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.button
            onClick={scrollToContent}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(239, 68, 68, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-red-600 text-white font-bold rounded-lg text-lg hover:bg-red-700 transition-all shadow-lg shadow-red-500/50"
          >
            Pelajari Lebih Lanjut
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, borderColor: '#fff' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('report-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-lg text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            Laporkan Kasus
          </motion.button>
        </motion.div>

        {/* Animated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={scrollToContent}
          >
            <ChevronDown className="w-8 h-8 text-white/70" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Animated Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-24"
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1 }}
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="#0f172a"
            fillOpacity="0.5"
          />
        </svg>
      </div>
    </section>
  );
}
