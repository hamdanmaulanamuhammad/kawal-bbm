'use client';

import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    {
      title: 'Navigasi',
      links: [
        { label: 'Beranda', href: '/' },
        { label: 'Artikel', href: '/articles' },
        { label: 'Tentang Kami', href: '/about' },
        { label: 'Laporkan Kasus', href: '#report-section' },
      ],
    },
    {
      title: 'Informasi',
      links: [
        { label: 'Dampak Ekonomi', href: '#impact-section' },
        { label: 'Studi Kasus', href: '#timeline' },
        { label: 'Dasar Hukum', href: '#legal' },
        { label: 'Solusi', href: '#solutions' },
      ],
    },
    {
      title: 'Kontak',
      links: [
        { label: 'Contact Center 136', href: 'tel:136', icon: Phone },
        { label: 'Kementerian ESDM', href: 'https://www.esdm.go.id', icon: MapPin },
        { label: 'Email Support', href: 'mailto:info@kawalbbm.id', icon: Mail },
      ],
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-blue-900 to-slate-950 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: ['0%', '100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-blue-600 rounded-xl flex items-center justify-center shadow-2xl">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                >
                  <Heart className="w-7 h-7 text-white" />
                </motion.div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">KawalBBM</h3>
                <p className="text-sm text-gray-400">Untuk Indonesia Lebih Baik</p>
              </div>
            </motion.div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Platform edukatif untuk memberantas praktik BBM oplosan dan melindungi 
              hak konsumen serta kepentingan negara.
            </p>
            <div className="flex gap-3">
              {[Github, Linkedin, Mail].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (sectionIndex + 1) * 0.1 }}
            >
              <h4 className="text-xl font-bold mb-6 text-white">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.href.startsWith('#') ? (
                      <button
                        onClick={() => {
                          document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                      >
                        {link.icon && <link.icon className="w-4 h-4" />}
                        {link.label}
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {link.icon && <link.icon className="w-4 h-4" />}
                        {link.label}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-2 border-blue-500/30 rounded-2xl p-8 md:p-12 mb-12 backdrop-blur-sm"
        >
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl"
            >
              <Heart className="w-8 h-8 text-white" />
            </motion.div>
            <p className="text-2xl md:text-3xl font-bold text-white mb-4 leading-relaxed italic">
              "Integritas adalah energi sejati bagi kemajuan bangsa. 
              Keuntungan sesaat dari kecurangan hanyalah ilusi yang merusak masa depan."
            </p>
            <p className="text-gray-400 text-lg">- KawalBBM Team</p>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-center md:text-left"
            >
              © 2024 KawalBBM. Dibuat dengan{' '}
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block text-red-500"
              >
                ❤️
              </motion.span>{' '}
              untuk Indonesia
            </motion.p>
            <div className="flex items-center gap-4">
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Kebijakan Privasi
              </motion.a>
              <span className="text-gray-600">•</span>
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Syarat & Ketentuan
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full shadow-2xl flex items-center justify-center z-50 hover:shadow-blue-500/50 transition-all"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
}
