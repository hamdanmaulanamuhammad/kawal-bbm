'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect, useMemo } from 'react';
import { Phone, AlertCircle, Send, CheckCircle2, ExternalLink } from 'lucide-react';

export default function ReportSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    description: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const backgroundOrbs = useMemo(() => 
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      width: Math.random() * 300 + 50,
      height: Math.random() * 300 + 50,
      left: Math.random() * 100,
      top: Math.random() * 100,
      yMove: Math.random() * 100 - 50,
      xMove: Math.random() * 100 - 50,
      duration: Math.random() * 10 + 10,
    })),
    []
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', location: '', description: '' });
    }, 3000);
  };

  const reportableIssues = [
    'BBM tidak sesuai standar atau tercampur bahan lain',
    'Kendaraan mengalami masalah setelah mengisi BBM',
    'Warna atau aroma BBM yang mencurigakan',
    'Performa mesin menurun drastis setelah isi BBM',
    'Harga BBM tidak sesuai dengan ketentuan resmi',
    'Praktik curang lainnya di SPBU',
  ];

  return (
    <section id="report-section" className="py-24 bg-gradient-to-br from-red-600 via-orange-600 to-red-700 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {isMounted && backgroundOrbs.map((orb) => (
          <motion.div
            key={orb.id}
            className="absolute bg-white/5 rounded-full"
            style={{
              width: orb.width,
              height: orb.height,
              left: `${orb.left}%`,
              top: `${orb.top}%`,
            }}
            animate={{
              y: [0, orb.yMove, 0],
              x: [0, orb.xMove, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
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
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm border-2 border-white/40 rounded-full mb-6"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <AlertCircle className="w-6 h-6 text-white" />
              </motion.div>
              <span className="text-white font-bold text-lg">LAPORKAN SEKARANG</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Temukan SPBU Mencurigakan?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Temukan SPBU Mencurigakan? Laporkan melalui portal resmi Kementerian ESDM. 
              Setiap laporan Anda membantu melindungi jutaan pengguna kendaraan lainnya.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Left Side - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Contact Center Card */}
              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-white/10 backdrop-blur-lg border-2 border-white/30 rounded-2xl p-8"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-2xl"
                >
                  <Phone className="w-10 h-10 text-red-600" />
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-4">Contact Center ESDM</h3>
                <p className="text-white/90 text-lg mb-6 leading-relaxed">
                  Laporkan kasus BBM oplosan atau SPBU yang mencurigakan melalui portal resmi Kementerian ESDM. 
                  Layanan tersedia untuk melindungi hak konsumen dan kepentingan negara.
                </p>
                <motion.a
                  href="https://www.esdm.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-red-600 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all"
                >
                  <ExternalLink className="w-5 h-5" />
                  Laporkan ke ESDM
                </motion.a>
              </motion.div>

              {/* Reportable Issues */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/10 backdrop-blur-lg border-2 border-white/30 rounded-2xl p-8"
              >
                <h4 className="text-2xl font-bold text-white mb-6">Apa yang Dapat Dilaporkan?</h4>
                <ul className="space-y-3">
                  {reportableIssues.map((issue, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-3 text-white/90"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-300 shrink-0 mt-0.5" />
                      <span>{issue}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* External Link */}
              <motion.a
                href="https://www.esdm.go.id"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-between bg-white/10 backdrop-blur-lg border-2 border-white/30 rounded-2xl p-6 hover:bg-white/20 transition-all group"
              >
                <span className="text-white font-semibold text-lg">Kunjungi Portal Resmi ESDM</span>
                <ExternalLink className="w-6 h-6 text-white group-hover:translate-x-2 transition-transform" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
