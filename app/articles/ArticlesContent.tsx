'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Calendar,
  Clock,
  Tag,
} from 'lucide-react';
import {
  getNewsEmbeds,
  NewsEmbed,
} from '@/app/utils/newsService';
import { NewsEmbedWidget } from '@/app/components/NewsEmbedWidget';

type LocalArticle = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  source?: string;
  imageUrl?: string;
  color: string; 
};

const LOCAL_ARTICLES: LocalArticle[] = [];

const ArticlesContent = () => {
  const ref = useRef(null);

  const [selectedArticle, setSelectedArticle] = useState<LocalArticle | null>(null);

  const newsEmbeds: NewsEmbed[] = getNewsEmbeds();

  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-background">
        <div className="bg-gradient-to-br from-primary via-accent to-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <motion.button
              onClick={() => setSelectedArticle(null)}
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 opacity-70 hover:opacity-100 mb-8 transition-colors"
            >
              ← Kembali ke Daftar Artikel
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div
                className={`inline-block px-4 py-2 bg-gradient-to-r ${selectedArticle.color} text-white rounded-full text-sm font-semibold mb-4`}
              >
                {selectedArticle.category}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {selectedArticle.title}
              </h1>

              <div className="flex items-center gap-6 opacity-70">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(selectedArticle.date).toLocaleDateString('id-ID', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {selectedArticle.readTime}
                </div>

                {selectedArticle.source && (
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    {selectedArticle.source}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto bg-card rounded-2xl p-8 md:p-12 shadow-xl"
          >
            {selectedArticle.imageUrl && (
              <img
                src={selectedArticle.imageUrl}
                alt={selectedArticle.title}
                className="w-full h-64 object-cover rounded-xl mb-8"
              />
            )}

            <div className="prose prose-lg max-w-none">
              {selectedArticle.content
                ?.split('\n\n')
                .map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-foreground leading-relaxed mb-6 text-justify"
                  >
                    {paragraph}
                  </p>
                ))}
            </div>
            
          </motion.article>
        </div>
      </div>
    );
  }

  // List View
  return (
    <div className="min-h-screen bg-background">
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
              ARTIKEL TERBARU
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              ARTIKEL TERKAIT BERITA KASUS PENGOPLOSAN BBM
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

      {/* Content Sections */}
      <section ref={ref} className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {newsEmbeds.map((embed, index) => (
                <motion.div
                  key={embed.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NewsEmbedWidget
                    title={embed.title}
                    source={embed.source}
                    readTime={embed.readTime}
                    date={embed.date}
                    excerpt={embed.excerpt}
                    imageUrl={embed.imageUrl}
                    url={embed.url}
                  />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 text-center"
            >
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlesContent;
