'use client';

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { TrendingDown, DollarSign, AlertCircle, Users } from 'lucide-react';

function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration });
      return controls.stop;
    }
  }, [isInView, value, duration, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function ImpactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const stats = [
    {
      icon: DollarSign,
      value: 12.8,
      suffix: 'Triliun',
      label: 'Kerugian Negara per Tahun',
      description: 'Analisis Celios menunjukkan potensi kerugian akibat BBM oplosan',
      color: 'from-red-600 to-orange-600',
      delay: 0.2,
    },
    {
      icon: TrendingDown,
      value: 35,
      suffix: '%',
      label: 'Pengurangan Efisiensi Mesin',
      description: 'Kendaraan mengalami penurunan performa drastis akibat BBM palsu',
      color: 'from-blue-600 to-cyan-600',
      delay: 0.4,
    },
    {
      icon: AlertCircle,
      value: 1200,
      suffix: '+',
      label: 'SPBU Terindikasi',
      description: 'Jumlah SPBU yang terindikasi melakukan praktik BBM oplosan',
      color: 'from-purple-600 to-pink-600',
      delay: 0.6,
    },
    {
      icon: Users,
      value: 250,
      suffix: 'Juta',
      label: 'Masyarakat Terancam',
      description: 'Jumlah pemilik kendaraan bermotor yang berisiko menjadi korban',
      color: 'from-green-600 to-emerald-600',
      delay: 0.8,
    },
  ];

  return (
    <section id="impact-section" className="py-24 bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            backgroundPosition: ['0px 0px', '100px 100px'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
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
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.6, type: 'spring' }}
            className="inline-block px-6 py-2 bg-red-600/30 border-2 border-red-500 text-red-300 rounded-full font-semibold mb-6 backdrop-blur-sm"
          >
            DAMPAK EKONOMI
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Skala Kerugian yang{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-red-400 to-orange-400">
              Mengkhawatirkan
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            BBM Oplosan bukan hanya ancaman bagi kendaraan, tetapi juga sabotase ekonomi nasional 
            yang merugikan triliunan rupiah subsidi rakyat setiap tahunnya
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: stat.delay,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                rotate: [0, -2, 2, 0],
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border-2 border-white/10 hover:border-white/30 transition-all duration-300 h-full overflow-hidden">
                {/* Animated Gradient Background */}
                <motion.div
                  className={`absolute inset-0 bg-linear-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-xl bg-linear-to-br ${stat.color} flex items-center justify-center mb-6 shadow-2xl relative z-10`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Counter */}
                <div className="mb-4 relative z-10">
                  <motion.div
                    className="text-5xl md:text-6xl font-bold text-white mb-2 flex items-baseline"
                  >
                    {stat.value < 100 && <AnimatedCounter value={stat.value} />}
                    {stat.value >= 100 && <AnimatedCounter value={stat.value} duration={3} />}
                    <span className="text-3xl ml-2 text-gray-300">{stat.suffix}</span>
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-200 mb-3">
                    {stat.label}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                {/* Animated Progress Bar */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 1, delay: stat.delay + 0.3 }}
                  className="h-1 bg-white/20 rounded-full overflow-hidden mt-6"
                  style={{ transformOrigin: 'left' }}
                >
                  <motion.div
                    className={`h-full bg-linear-to-r ${stat.color}`}
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Impact Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border-2 border-red-500/50 rounded-2xl p-8 md:p-12 backdrop-blur-lg"
        >
          <div className="flex items-start gap-6">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <AlertCircle className="w-16 h-16 text-red-400 flex-shrink-0" />
            </motion.div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Analisis Celios: Kerugian Mencapai Puluhan Triliun
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Berdasarkan penelitian mendalam dari Center for Indonesia Taxation Analysis (Celios), 
                praktik BBM oplosan telah mengakibatkan kerugian negara yang sangat masif. Angka kerugian 
                diperkirakan mencapai <span className="text-red-400 font-bold">12,8 triliun rupiah per tahun</span>, 
                berasal dari subsidi yang seharusnya dinikmati masyarakat tetapi justru dimanipulasi 
                oleh oknum tidak bertanggung jawab.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Kerugian ini tidak hanya berdampak pada APBN, tetapi juga pada daya beli masyarakat yang 
                harus menanggung biaya perbaikan kendaraan akibat kerusakan mesin yang disebabkan BBM oplosan. 
                Praktik ini menciptakan lingkaran setan ekonomi yang merugikan rakyat di berbagai lapis.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
