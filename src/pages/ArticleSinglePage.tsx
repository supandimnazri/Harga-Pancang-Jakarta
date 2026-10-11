import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  Check, 
  ChevronRight, 
  HelpCircle,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  BookOpen
} from 'lucide-react';
import { ArticleItem, ARTICLES } from '../data/pancangData';
import { onDriveImageError } from '../constants/images';

interface ArticleSinglePageProps {
  article: ArticleItem;
  onNavigate: (page: string) => void;
  onSelectArticle: (article: ArticleItem) => void;
  onOpenConsultation: () => void;
}

export const ArticleSinglePage: React.FC<ArticleSinglePageProps> = ({
  article,
  onNavigate,
  onSelectArticle,
  onOpenConsultation
}) => {
  const [copiedLink, setCopiedLink] = useState(false);

  const relatedArticles = ARTICLES.filter((a) =>
    article.relatedSlugs?.includes(a.slug)
  ).slice(0, 3);

  const handleCopyShare = () => {
    const url = `${window.location.origin}/artikel/${article.slug}`;
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(
      `Baca artikel menarik: "${article.title}" di Harga Pancang Jakarta\n${window.location.origin}/artikel/${article.slug}`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <article className="animate-fadeIn min-h-screen bg-slate-50/50 pb-20">
      {/* Breadcrumb Bar */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-slate-200 py-3.5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-slate-500 overflow-x-auto">
            <button
              onClick={() => onNavigate('beranda')}
              className="hover:text-orange-600 transition-colors font-medium whitespace-nowrap cursor-pointer"
            >
              Beranda
            </button>
            <ChevronRight className="w-3.5 h-3.5 shrink-0 text-slate-400" />
            <button
              onClick={() => onNavigate('artikel')}
              className="hover:text-orange-600 transition-colors font-medium whitespace-nowrap cursor-pointer"
            >
              Artikel
            </button>
            <ChevronRight className="w-3.5 h-3.5 shrink-0 text-slate-400" />
            <span className="text-slate-800 font-semibold truncate">
              {article.title}
            </span>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-12">
        {/* Back Button */}
        <button
          onClick={() => onNavigate('artikel')}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-orange-600 transition-colors mb-6 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Semua Artikel</span>
        </button>

        {/* Article Header Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-10 mb-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100/80 text-orange-700 text-xs font-bold rounded-md">
              <BookOpen className="w-3.5 h-3.5" />
              {article.category}
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 pt-2 border-t border-slate-100">
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <User className="w-4 h-4 text-orange-600" />
                {article.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-400" />
                {article.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-400" />
                {article.readTime}
              </span>
            </div>

            {/* Featured Image */}
            <div className="relative rounded-xl overflow-hidden mt-6 bg-slate-900">
              <img
                src={article.featuredImage}
                onError={onDriveImageError}
                alt={article.imageAlt}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full max-h-[460px] object-cover"
              />
              <div className="p-2.5 bg-slate-900/90 text-[11px] text-slate-300 text-center">
                {article.imageAlt}
              </div>
            </div>

            {/* Excerpt Lead */}
            <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed italic border-l-4 border-orange-500 pl-4 py-1 mt-6 bg-orange-50/40 rounded-r-lg">
              {article.excerpt}
            </p>

            {/* Content Paragraphs */}
            <div className="space-y-5 text-sm sm:text-base text-slate-700 leading-relaxed pt-4">
              {article.content.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Natural Editorial Resource Link */}
            <div className="mt-8 p-5 rounded-xl bg-orange-50/70 border border-orange-200/90 text-slate-800 text-xs sm:text-sm leading-relaxed">
              <span className="font-bold text-orange-700">Rekomendasi Spesialis Lapangan: </span>
              <span>Untuk konsultasi teknis, survei tanah lapangan, dan kebutuhan kontraktor pemancangan bersertifikasi di seluruh wilayah Jakarta dan sekitarnya, Anda dapat merujuk ke layanan resmi{' '}</span>
              <a
                href="https://masterpondasi.com/layanan/jasa-pancang-jabodetabek/"
                target="_blank"
                rel="noopener"
                className="font-bold text-orange-600 hover:text-orange-700 underline underline-offset-4"
              >
                Jasa Pancang Jabodetabek
              </a>
              <span> dari Master Pondasi.</span>
            </div>

            {/* Share and Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-slate-200 mt-8">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyShare}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copiedLink ? 'Link Tersalin!' : 'Bagikan Link'}</span>
                </button>
                <button
                  onClick={handleWhatsAppShare}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Kirim ke WhatsApp</span>
                </button>
              </div>

              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-orange-600 hover:bg-orange-500 rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                <span>Konsultasikan Kebutuhan Proyek</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span>Artikel Terkait Lainnya</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onSelectArticle(rel)}
                  className="group cursor-pointer rounded-xl border border-slate-100 hover:border-orange-300 p-4 transition-all bg-slate-50/50 hover:bg-white hover:shadow-md"
                >
                  <div className="h-32 rounded-lg overflow-hidden mb-3 bg-slate-900">
                    <img
                      src={rel.featuredImage}
                      onError={onDriveImageError}
                      alt={rel.imageAlt}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-[11px] font-bold text-orange-600 uppercase tracking-wider mb-1">
                    {rel.category}
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors line-clamp-2">
                    {rel.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};
