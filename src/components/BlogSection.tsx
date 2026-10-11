import React, { useState, useMemo } from 'react';
import { ARTICLES, ArticleItem } from '../data/pancangData';
import { BookOpen, Calendar, Clock, ChevronRight, ChevronLeft, Search, MapPin } from 'lucide-react';
import { onDriveImageError } from '../constants/images';

interface BlogSectionProps {
  onSelectArticle: (article: ArticleItem) => void;
}

const ITEMS_PER_PAGE = 12;

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectArticle }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [selectedRegion, setSelectedRegion] = useState<string>('Semua Wilayah');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const categories = ['Semua', 'Harga Pancang', 'Jasa Pancang', 'Mini Pile', 'HSPD', 'Konstruksi'];
  const regions = [
    'Semua Wilayah',
    'Jakarta Pusat',
    'Jakarta Utara',
    'Jakarta Barat',
    'Jakarta Selatan',
    'Jakarta Timur',
    'Kepulauan Seribu'
  ];

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      const matchesCategory = selectedCategory === 'Semua' || article.category === selectedCategory;
      const matchesRegion = selectedRegion === 'Semua Wilayah' || 
        article.title.toLowerCase().includes(selectedRegion.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(selectedRegion.toLowerCase());
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch = query === '' || 
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.slug.toLowerCase().includes(query);
      return matchesCategory && matchesRegion && matchesSearch;
    });
  }, [selectedCategory, selectedRegion, searchQuery]);

  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);

  const paginatedArticles = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredArticles, currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    const element = document.getElementById('artikel-list-top');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setCurrentPage(1);
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleRegionChange = (reg: string) => {
    setSelectedRegion(reg);
    setCurrentPage(1);
  };

  return (
    <section id="artikel" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-orange-600 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              100+ Wilayah & Kecamatan DKI Jakarta
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              Artikel & Panduan Konstruksi Tiang Pancang Jakarta
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Panduan geoteknik, estimasi biaya RAB mini pile & spun pile, serta metode HSPD bebas getaran untuk seluruh 44 kecamatan dan kawasan bisnis di DKI Jakarta.
            </p>
          </div>

          {/* Quick Search */}
          <div className="w-full md:w-80">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
              <input
                type="text"
                placeholder="Cari kecamatan, ruko, tanah..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-orange-500 focus:bg-white transition-all shadow-2xs"
              />
            </div>
          </div>
        </div>

        {/* Region Filter Bar */}
        <div className="pt-5 pb-2">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
            Pilih Kota Administratif:
          </div>
          <div className="flex gap-1.5 overflow-x-auto pb-2">
            {regions.map((reg) => (
              <button
                key={reg}
                onClick={() => handleRegionChange(reg)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  selectedRegion === reg
                    ? 'bg-slate-900 text-white font-bold shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
                }`}
              >
                {reg}
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex gap-1.5 overflow-x-auto py-3 border-b border-slate-100">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-orange-600 text-white shadow-xs'
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-200/80 hover:text-slate-900 border border-slate-200/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Status Count Line */}
        <div id="artikel-list-top" className="flex items-center justify-between text-xs text-slate-500 pt-6 pb-2">
          <span>
            Menampilkan <strong className="text-slate-800">{filteredArticles.length}</strong> artikel {selectedRegion !== 'Semua Wilayah' && `di ${selectedRegion}`}
          </span>
          {totalPages > 1 && (
            <span>
              Halaman {currentPage} dari {totalPages}
            </span>
          )}
        </div>

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div className="py-16 text-center text-slate-500 text-sm bg-slate-50 rounded-2xl border border-dashed border-slate-300 mt-4">
            Tidak ada artikel yang cocok dengan pencarian "{searchQuery}".
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-4">
            {paginatedArticles.map((article) => (
              <article
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md hover:border-orange-300 transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    <img
                      src={article.featuredImage}
                      onError={onDriveImageError}
                      alt={article.imageAlt}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent pointer-events-none" />
                    
                    {/* Category Watermark */}
                    <div className="absolute bottom-2.5 left-3 text-[11px] font-bold text-white tracking-wide bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs">
                      {article.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3">
                    
                    {/* Metadata Line */}
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span>{article.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.readTime}</span>
                    </div>

                    {/* Headline */}
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-orange-600 transition-colors leading-snug line-clamp-2">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="px-5 pb-5 pt-3 flex items-center justify-between text-xs font-bold text-orange-600 border-t border-slate-100 mt-2">
                  <span>Baca Selengkapnya</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12 pt-6 border-t border-slate-200">
            <button
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="inline-flex items-center gap-1 px-3.5 py-2 text-xs font-semibold rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Sebelumnya</span>
            </button>

            {/* Page number indicators */}
            <div className="flex items-center gap-1 px-2">
              {Array.from({ length: totalPages }, (_, idx) => idx + 1)
                .filter((p) => p === 1 || p === totalPages || Math.abs(p - currentPage) <= 1)
                .map((page, index, array) => {
                  const showEllipsis = index > 0 && page - array[index - 1] > 1;
                  return (
                    <React.Fragment key={page}>
                      {showEllipsis && <span className="px-1 text-slate-400 text-xs">...</span>}
                      <button
                        onClick={() => handlePageChange(page)}
                        className={`w-8 h-8 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                          currentPage === page
                            ? 'bg-orange-600 text-white shadow-xs'
                            : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {page}
                      </button>
                    </React.Fragment>
                  );
                })}
            </div>

            <button
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="inline-flex items-center gap-1 px-3.5 py-2 text-xs font-semibold rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              <span>Berikutnya</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
