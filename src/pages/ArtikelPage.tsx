import React from 'react';
import { BlogSection } from '../components/BlogSection';
import { FaqSection } from '../components/FaqSection';
import { ContactSection } from '../components/ContactSection';
import { ArticleItem } from '../data/pancangData';
import { BookOpen, Search, CheckCircle2 } from 'lucide-react';

interface ArtikelPageProps {
  onSelectArticle: (article: ArticleItem) => void;
  onNavigate: (page: string) => void;
}

export const ArtikelPage: React.FC<ArtikelPageProps> = ({ onSelectArticle, onNavigate }) => {
  return (
    <div className="animate-fadeIn">
      {/* Page Hero Header */}
      <section className="bg-gradient-to-b from-orange-50/70 via-white to-white border-b border-slate-200 pt-12 pb-14 lg:pt-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100/80 text-orange-700 text-xs font-bold rounded-md">
              <BookOpen className="w-3.5 h-3.5" />
              Pusat Panduan & Edukasi Geoteknik
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Artikel, Tips & Panduan Konstruksi Tiang Pancang
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Kumpulan wawasan teknis seputar estimasi biaya tiang pancang di Jakarta, perbandingan metode bore pile vs tiang pancang, cara membaca data sondir, hingga panduan pemilihan tiang mini pile dan spun pile.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs sm:text-sm text-slate-600 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-600" /> Analisis Geoteknik Praktis
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-600" /> Tips Efisiensi Anggaran RAB Pondasi
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-600" /> Standar Mutu SNI & Pengujian PDA
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Blog List Section */}
      <BlogSection onSelectArticle={onSelectArticle} />

      {/* FAQ Section */}
      <FaqSection onAskDirect={() => onNavigate('kontak')} />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};
