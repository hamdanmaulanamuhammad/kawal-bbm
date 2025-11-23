'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
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
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/5 rounded-full"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50, 0],
              x: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
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
              Jangan diam! Laporkan ke Contact Center 136 Kementerian ESDM atau isi formulir 
              di bawah ini. Setiap laporan Anda membantu melindungi jutaan pengguna kendaraan lainnya.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
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
                <h3 className="text-3xl font-bold text-white mb-4">Contact Center 136</h3>
                <p className="text-white/90 text-lg mb-6 leading-relaxed">
                  Hubungi langsung Contact Center Kementerian ESDM untuk melaporkan 
                  kasus BBM oplosan atau SPBU yang mencurigakan. Layanan tersedia 24/7.
                </p>
                <motion.a
                  href="tel:136"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-red-600 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Hubungi 136
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

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                {/* Success Message Overlay */}
                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute inset-0 bg-green-500 flex flex-col items-center justify-center z-20 rounded-2xl"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, rotate: 360 }}
                        transition={{ duration: 0.6, type: 'spring' }}
                      >
                        <CheckCircle2 className="w-24 h-24 text-white mb-4" />
                      </motion.div>
                      <h3 className="text-3xl font-bold text-white mb-2">Laporan Terkirim!</h3>
                      <p className="text-white/90">Terima kasih atas partisipasi Anda</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <h3 className="text-3xl font-bold text-gray-900 mb-6">Formulir Laporan</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="relative">
                    <motion.label
                      animate={{
                        y: focusedField === 'name' || formData.name ? -24 : 0,
                        scale: focusedField === 'name' || formData.name ? 0.85 : 1,
                        color: focusedField === 'name' ? '#2563eb' : '#6b7280',
                      }}
                      className="absolute left-4 top-4 pointer-events-none font-medium origin-left"
                    >
                      Nama Lengkap
                    </motion.label>
                    <motion.input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      whileFocus={{ scale: 1.02 }}
                      className="w-full px-4 py-4 pt-6 border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:outline-none transition-all"
                      required
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="relative">
                    <motion.label
                      animate={{
                        y: focusedField === 'phone' || formData.phone ? -24 : 0,
                        scale: focusedField === 'phone' || formData.phone ? 0.85 : 1,
                        color: focusedField === 'phone' ? '#2563eb' : '#6b7280',
                      }}
                      className="absolute left-4 top-4 pointer-events-none font-medium origin-left"
                    >
                      Nomor Telepon
                    </motion.label>
                    <motion.input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      whileFocus={{ scale: 1.02 }}
                      className="w-full px-4 py-4 pt-6 border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:outline-none transition-all"
                      required
                    />
                  </div>

                  {/* Location Field */}
                  <div className="relative">
                    <motion.label
                      animate={{
                        y: focusedField === 'location' || formData.location ? -24 : 0,
                        scale: focusedField === 'location' || formData.location ? 0.85 : 1,
                        color: focusedField === 'location' ? '#2563eb' : '#6b7280',
                      }}
                      className="absolute left-4 top-4 pointer-events-none font-medium origin-left"
                    >
                      Lokasi SPBU
                    </motion.label>
                    <motion.input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      onFocus={() => setFocusedField('location')}
                      onBlur={() => setFocusedField(null)}
                      whileFocus={{ scale: 1.02 }}
                      className="w-full px-4 py-4 pt-6 border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:outline-none transition-all"
                      required
                    />
                  </div>

                  {/* Description Field */}
                  <div className="relative">
                    <motion.label
                      animate={{
                        y: focusedField === 'description' || formData.description ? -24 : 0,
                        scale: focusedField === 'description' || formData.description ? 0.85 : 1,
                        color: focusedField === 'description' ? '#2563eb' : '#6b7280',
                      }}
                      className="absolute left-4 top-4 pointer-events-none font-medium origin-left"
                    >
                      Deskripsi Masalah
                    </motion.label>
                    <motion.textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      onFocus={() => setFocusedField('description')}
                      onBlur={() => setFocusedField(null)}
                      whileFocus={{ scale: 1.02 }}
                      rows={4}
                      className="w-full px-4 py-4 pt-6 border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:outline-none transition-all resize-none"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03, boxShadow: '0 20px 40px rgba(239, 68, 68, 0.4)' }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold py-4 rounded-xl shadow-xl flex items-center justify-center gap-3 text-lg"
                  >
                    <Send className="w-5 h-5" />
                    Kirim Laporan
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
