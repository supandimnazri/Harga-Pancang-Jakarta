import React, { useState } from 'react';
import { 
  X, 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  Check, 
  ChevronRight, 
  HelpCircle,
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import { ArticleItem, ARTICLES } from '../data/pancangData';

interface ArticleDetailModalProps {
  article: ArticleItem | null;
  onClose: () => void;
  onSelectArticle: (article: ArticleItem) => void;
  onOpenConsultation: () => void;
}

export const ArticleDetailModal: React.FC<ArticleDetailModalProps> = ({
  article,
  onClose,
  onSelectArticle,
  onOpenConsultation
}) => {
  const [copiedLink, setCopiedLink] = useState(false);

  if (!article) return null;

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
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex justify-center p-2 sm:p-4 lg:p-6 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label={article.title}
    >
      <article className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-auto flex flex-col max-h-[94vh]">
        
        {/* Sticky Header Bar */}
        <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-5 sm:px-8 py-3.5 border-b border-slate-200 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-orange-600 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Daftar Artikel</span>
          </button>

          {/* Unboxed Metadata & Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyShare}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
              title="Salin Tautan Artikel"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copiedLink ? 'Tersalin' : 'Bagikan'}</span>
            </button>

            <button
              onClick={handleWhatsAppShare}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition-colors cursor-pointer"
              title="Kirim ke WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">WA</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Tutup Artikel"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Scrollable Article Body */}
        <div className="overflow-y-auto px-5 sm:px-10 py-8 space-y-7">
          
          {/* Article Header Info */}
          <div className="space-y-4">
            
            {/* Breadcrumb Hierarchy */}
            <nav className="flex items-center gap-1.5 text-xs text-slate-500" aria-label="Breadcrumb">
              <span className="hover:text-slate-900 cursor-pointer" onClick={onClose}>Beranda</span>
              <span>/</span>
              <span className="hover:text-slate-900 cursor-pointer" onClick={onClose}>Artikel</span>
              <span>/</span>
              <span className="text-orange-600 font-semibold">
                {article.category}
              </span>
            </nav>

            {/* H1 Primary SEO Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
              {article.title}
            </h1>

            {/* Unboxed Metadata Line with typographic separators */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 pt-1 pb-3 border-b border-slate-100">
              <span className="flex items-center gap-1 text-slate-700 font-semibold">
                <User className="w-3.5 h-3.5 text-orange-600" />
                <span>{article.author}</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>{article.date}</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{article.readTime} bacaan</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="text-orange-600 font-semibold">{article.category}</span>
            </div>
          </div>

          {/* Featured Image */}
          <figure className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900">
            <img
              src={article.featuredImage}
              alt={article.imageAlt}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-64 sm:h-80 md:h-96 object-cover"
            />
            <figcaption className="p-2.5 bg-slate-900/95 text-[11px] text-slate-300 px-4">
              {article.imageAlt}
            </figcaption>
          </figure>

          {/* Excerpt Lead Paragraph */}
          <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-medium text-sm sm:text-base leading-relaxed">
            {article.excerpt}
          </div>

          {/* Article Dynamic Content Body */}
          <div className="space-y-5 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            {article.content.map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-xl sm:text-2xl font-extrabold text-slate-900 pt-5 pb-1 border-b border-slate-100">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-lg font-bold text-slate-900 pt-3">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              return <p key={index}>{paragraph}</p>;
            })}

            {/* Contextual In-Article Recommendation & Natural External Links */}
            <div className="my-8 p-6 rounded-xl bg-orange-50/60 border border-orange-200/90 space-y-3">
              <h3 className="text-base font-extrabold text-slate-900">
                Konsultasi & Rekomendasi Pelaksanaan Pondasi
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Untuk kebutuhan pelaksanaan pekerjaan pemancangan, Anda dapat melihat informasi layanan{' '}
                <a
                  href="https://masterpondasi.com/"
                  rel="dofollow"
                  className="font-bold text-orange-600 hover:text-orange-500 underline underline-offset-4"
                >
                  Jasa Pancang
                </a>{' '}
                dari{' '}
                <a
                  href="https://masterpondasi.com/"
                  rel="dofollow"
                  className="font-bold text-orange-600 hover:text-orange-500 underline underline-offset-4"
                >
                  Master Pondasi
                </a>
                . Pastikan proyek Anda didukung oleh pengujian tanah yang memadai dan tim teknis berpengalaman di Jakarta.
              </p>
            </div>

            {/* In-Article FAQ if exists */}
            {article.faq && article.faq.length > 0 && (
              <div className="mt-8 pt-6 border-t border-slate-200 space-y-4">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-orange-600" />
                  <span>FAQ Terkait Artikel Ini</span>
                </h3>
                <div className="space-y-3">
                  {article.faq.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                      <div className="text-sm font-bold text-slate-900">{item.question}</div>
                      <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.answer}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Engineering Takeaways */}
            <div className="p-5 rounded-xl bg-slate-900 text-white space-y-2 mt-6">
              <div className="text-xs font-bold uppercase tracking-wider text-orange-400">
                Poin Penting untuk Pemilik Proyek di Jakarta
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                <li>• Selalu lakukan sondir tanah minimal 2–3 titik sebelum memesan tiang pancang.</li>
                <li>• Gunakan metode HSPD untuk menghindari risiko getaran dan keluhan tetangga di kawasan urban Jakarta.</li>
                <li>• Pastikan mutu beton tiang memiliki sertifikat uji tekan SNI dari pabrikasi terpercaya.</li>
              </ul>
            </div>
          </div>

          {/* Action Callout inside Modal */}
          <div className="p-6 rounded-xl border border-slate-200 bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-sm font-bold text-slate-900">
                Ingin Menghitung Estimasi Kebutuhan Tiang Pancang Anda?
              </div>
              <p className="text-xs text-slate-500">
                Dapatkan simulasi biaya gratis berdasarkan rencana luas bangunan dan lokasi proyek.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="px-5 py-2.5 bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs rounded-lg transition-colors cursor-pointer whitespace-nowrap shadow-xs"
            >
              Minta Hitungan RAB
            </button>
          </div>

          {/* Related Articles (Internal Linking) */}
          {relatedArticles.length > 0 && (
            <div className="pt-6 border-t border-slate-200 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Artikel Terkait Lainnya (Internal Links)
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedArticles.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => onSelectArticle(rel)}
                    className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-orange-300 transition-all cursor-pointer space-y-1.5"
                  >
                    <span className="text-[11px] font-bold text-orange-600 block">
                      {rel.category}
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 line-clamp-2 leading-snug">
                      {rel.title}
                    </h4>
                    <span className="text-[11px] text-slate-500 block">
                      {rel.readTime} bacaan
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <footer className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>© 2026 Harga Pancang Jakarta</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-md transition-colors cursor-pointer"
          >
            Tutup Artikel
          </button>
        </footer>

      </article>
    </div>
  );
};
