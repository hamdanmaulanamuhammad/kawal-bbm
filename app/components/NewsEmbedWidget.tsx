'use client';

import { Calendar, ArrowRight } from 'lucide-react';

type NewsEmbedWidgetProps = {
  title: string;
  source: string;
  readTime: string;
  date: string;
  excerpt: string;
  imageUrl?: string;
  url: string;
};

export const NewsEmbedWidget = ({
  title,
  source,
  readTime,
  date,
  excerpt,
  imageUrl,
  url,
}: NewsEmbedWidgetProps) => {
  return (
    <div className="bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col">
      {imageUrl && (
        <div className="w-full h-40 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="p-6 flex-1 flex flex-col">
        {/* Badge seperti "Berita Utama" */}
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-semibold mb-3">
          Berita Utama
        </div>

        {/* Source + read time */}
        <div className="text-sm text-emerald-600 font-semibold mb-1">
          {source} • {readTime}
        </div>

        {/* Judul */}
        <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {excerpt}
        </p>

        {/* Meta tanggal */}
        <div className="mt-auto flex items-center justify-between text-xs text-muted-foreground mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {new Date(date).toLocaleDateString('id-ID', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </div>
        </div>

        {/* Tombol ke web asli */}
        <button
          onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
          className="mt-auto inline-flex items-center gap-2 text-emerald-600 font-semibold hover:gap-3 transition-all"
        >
          Baca Selengkapnya
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
