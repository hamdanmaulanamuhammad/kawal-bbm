"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { User, Instagram, Pen, Palette, Code, Target } from "lucide-react";

const teamMembers = [
  {
    name: "Amelia Ayuni Tri Cahyanti",
    role: "Content Writer & Researcher",
    icon: Pen,
    avatar: "/images/amel.jpg",
    description:
      "Bertanggung jawab atas riset mendalam dan penulisan konten edukatif tentang kasus BBM oplosan. Menganalisis data dari berbagai sumber untuk menghasilkan narasi yang informatif dan mudah dipahami.",
    color: "from-blue-600 to-cyan-600",
    instagram: "https://www.instagram.com/amewng_/",
  },
  {
    name: "Arga Adinata Athallah Pahlevi",
    role: "Web Developer",
    icon: Code,
    avatar: "/images/arga.jpg",
    description:
      "Merancang antarmuka yang intuitif dan pengalaman pengguna yang engaging untuk platform KawalBBM. Memastikan setiap elemen visual mendukung tujuan edukatif dan investigatif proyek.",
    color: "from-purple-600 to-pink-600",
    instagram: "https://www.instagram.com/adinata_arga",
  },
  {
    name: "Aisya Rahma Noor Haqiqoh",
    role: "Content Writer & Researcher",
    icon: Pen,
    avatar: "/images/aisya.jpg",
    description:
      "Mengembangkan platform web dengan teknologi terkini, mengimplementasikan fitur interaktif dan memastikan performa optimal. Bertanggung jawab atas arsitektur teknis dan deployment aplikasi.",
    color: "from-green-600 to-emerald-600",
    instagram: "https://www.instagram.com/aisyrnh",
  },
  {
    name: "Assyfa Nur Fathona",
    role: "Web Developer",
    icon: Code,
    avatar: "/images/sifa.png",
    description:
      "Merumuskan strategi komunikasi dan kampanye edukasi untuk menjangkau masyarakat luas. Mengoordinasikan tim dan memastikan proyek tetap pada jalur yang tepat untuk mencapai tujuan sosial.",
    color: "from-orange-600 to-red-600",
    instagram: "#",
  },
  {
    name: "Ibanez Centivolia Ahista",
    role: "Content Writer & Researcher",
    icon: Pen,
    avatar: "/images/ibanez.jpg",
    description:
      "Menganalisis tren dan data terkait praktik BBM oplosan, menyusun laporan investigasi, dan memberikan rekomendasi strategis untuk pencegahan.",
    color: "from-teal-600 to-blue-600",
    instagram: "#",
  },
  {
    name: "Husna Felisa Cahyani",
    role: "Web Developer",
    icon: Code,
    avatar: "/images/cy.jpg",
    description:
      "Menciptakan visual yang menarik dan informatif untuk kampanye edukasi, termasuk infografis, poster, dan materi promosi lainnya.",
    color: "from-pink-600 to-rose-600",
    instagram: "https://www.instagram.com/fel.cy",
  },
  {
    name: "Hamdan Maulana Muhammad",
    role: "Web Developer",
    icon: Code,
    avatar: "/images/hamdan.jpg",
    description:
      "Mengembangkan sistem backend yang robust, mengelola database, dan memastikan keamanan serta skalabilitas platform.",
    color: "from-indigo-600 to-purple-600",
    instagram: "#",
  },
];

export default function AboutContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              animate={{
                y: ["0vh", "100vh"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-block px-6 py-2 bg-blue-600/30 border-2 border-blue-500 text-blue-300 rounded-full font-semibold mb-6 backdrop-blur-sm"
            >
              TENTANG KAMI
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Kenali Tim di Balik KawalBBM
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Kami adalah sekelompok mahasiswa yang berkomitmen untuk
              memberantas praktik BBM oplosan melalui edukasi, transparansi, dan
              pemberdayaan masyarakat. Bersama-sama, kita bisa melindungi hak
              konsumen dan kepentingan negara.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Visi Kami
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Menjadi platform edukasi terpercaya yang mengubah kesadaran
                masyarakat tentang bahaya BBM oplosan dan mendorong transparansi
                penuh dalam distribusi bahan bakar minyak di Indonesia.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-xl border-2 border-purple-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Misi Kami
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Menyediakan informasi akurat dan komprehensif tentang BBM
                oplosan, memfasilitasi pelaporan kasus, serta mendorong
                partisipasi aktif masyarakat dalam pengawasan kualitas BBM untuk
                melindungi kepentingan konsumen dan negara.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={ref} className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Tim KawalBBM
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mahasiswa berdedikasi yang bekerja untuk menciptakan perubahan
              positif
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-slate-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-gray-200 overflow-hidden h-full flex flex-col">
                  {/* Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-linear-to-br ${member.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />

                  {/* Avatar & Icon */}
                  <div className="flex items-start gap-6 mb-6 relative z-10">
                    {/* <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-20 h-20 bg-linear-to-br ${member.color} rounded-2xl flex items-center justify-center shadow-xl shrink-0`}
                    >
                      <User className="w-10 h-10 text-white" />
                    </motion.div> */}

                    <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-xl shrink-0">
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {member.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <member.icon className="w-5 h-5 text-gray-500" />
                        <p className="text-gray-600 font-semibold">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6 relative z-10 flex-1">
                    {member.description}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-3 relative z-10">
                    <motion.a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center transition-all"
                    >
                      <Instagram className="w-5 h-5 text-gray-700" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Mari Bergabung dalam Gerakan Ini
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Bersama-sama kita bisa memberantas BBM oplosan dan melindungi
              kepentingan rakyat. Setiap laporan Anda sangat berarti untuk
              menciptakan Indonesia yang lebih baik.
            </p>
            <motion.a
              href="/"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(255,255,255,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 bg-white text-blue-600 font-bold rounded-full text-lg shadow-2xl"
            >
              Kembali ke Beranda
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
