/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PricingSection } from './components/PricingSection';
import { PileTypesSection } from './components/PileTypesSection';
import { MethodsSection } from './components/MethodsSection';
import { ServicesSection } from './components/ServicesSection';
import { MasterPondasiSection } from './components/MasterPondasiSection';
import { ServiceAreaSection } from './components/ServiceAreaSection';
import { CostFactorsSection } from './components/CostFactorsSection';
import { FaqSection } from './components/FaqSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { SeoStructuredData } from './components/SeoStructuredData';
import { ArticleItem, ARTICLES } from './data/pancangData';

// Dedicated standalone page components
import { HargaPage } from './pages/HargaPage';
import { JenisTiangPage } from './pages/JenisTiangPage';
import { JasaPancangPage } from './pages/JasaPancangPage';
import { AreaLayananPage } from './pages/AreaLayananPage';
import { ArtikelPage } from './pages/ArtikelPage';
import { KontakPage } from './pages/KontakPage';
import { ArticleSinglePage } from './pages/ArticleSinglePage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('beranda');
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [inquiryPrefill, setInquiryPrefill] = useState<{
    item?: string;
    dimension?: string;
    notes?: string;
  } | undefined>(undefined);

  // Route matching with clean slugs and history sync
  const resolveLocation = () => {
    const rawPath = window.location.pathname.toLowerCase();
    const cleanPath = rawPath.replace(/\/$/, '');
    const hash = window.location.hash.replace('#', '').toLowerCase();

    // 1. Article Single Page Route (/artikel/:slug)
    if (cleanPath.startsWith('/artikel/')) {
      const slug = cleanPath.replace('/artikel/', '');
      const found = ARTICLES.find((a) => a.slug.toLowerCase() === slug);
      if (found) {
        setSelectedArticle(found);
        setCurrentPage('artikel-single');
        return;
      }
    } else if (hash.startsWith('artikel-')) {
      const slug = hash.replace('artikel-', '');
      const found = ARTICLES.find((a) => a.slug.toLowerCase() === slug);
      if (found) {
        setSelectedArticle(found);
        setCurrentPage('artikel-single');
        return;
      }
    }

    setSelectedArticle(null);

    // 2. Dedicated Pages with distinct URLs/slugs
    if (cleanPath === '/harga-pancang-jakarta' || cleanPath === '/harga' || hash === 'harga') {
      setCurrentPage('harga');
    } else if (cleanPath === '/jenis-tiang-pancang' || cleanPath === '/jenis-tiang' || hash === 'jenis-tiang') {
      setCurrentPage('jenis-tiang');
    } else if (cleanPath === '/jasa-pancang-jakarta' || cleanPath === '/jasa-pancang' || hash === 'jasa-pancang') {
      setCurrentPage('jasa-pancang');
    } else if (cleanPath === '/area-layanan' || hash === 'area-layanan') {
      setCurrentPage('area-layanan');
    } else if (cleanPath === '/artikel' || hash === 'artikel') {
      setCurrentPage('artikel');
    } else if (cleanPath === '/kontak' || hash === 'kontak') {
      setCurrentPage('kontak');
    } else {
      setCurrentPage('beranda');
    }
  };

  useEffect(() => {
    resolveLocation();
    window.addEventListener('popstate', resolveLocation);
    window.addEventListener('hashchange', resolveLocation);

    return () => {
      window.removeEventListener('popstate', resolveLocation);
      window.removeEventListener('hashchange', resolveLocation);
    };
  }, []);

  // Update Document Title, Meta Description & Canonical Tag dynamically
  useEffect(() => {
    const baseUrl = 'https://www.hargapancangjakarta.site';
    let canonical = `${baseUrl}/`;
    let metaDesc = 'Informasi harga pancang Jakarta, harga tiang pancang, mini pile, spun pile, HSPD dan jasa pemancangan untuk berbagai kebutuhan proyek konstruksi.';
    let title = 'Harga Pancang Jakarta | Harga Tiang & Jasa Pancang Terpercaya';

    if (selectedArticle && currentPage === 'artikel-single') {
      title = `${selectedArticle.seoTitle || selectedArticle.title} | Harga Pancang Jakarta`;
      canonical = `${baseUrl}/artikel/${selectedArticle.slug}`;
      metaDesc = selectedArticle.metaDescription;
    } else if (currentPage === 'harga') {
      title = 'Harga Tiang Pancang Jakarta Terbaru 2026 | Mini Pile & Spun Pile';
      canonical = `${baseUrl}/harga-pancang-jakarta/`;
      metaDesc = 'Daftar harga tiang pancang beton Jakarta, mini pile 25x25, 30x30, spun pile silinder K-600, dan simulasi biaya jasa pemancangan hidrolik HSPD.';
    } else if (currentPage === 'jenis-tiang') {
      title = 'Jenis Tiang Pancang Beton | Mini Pile, Spun Pile & Sheet Pile Jakarta';
      canonical = `${baseUrl}/jenis-tiang-pancang/`;
      metaDesc = 'Kenali jenis-jenis tiang pancang untuk konstruksi di Jakarta: mini pile kotak, segitiga, spun pile pratekan, sheet pile penahan tanah, dan spesifikasinya.';
    } else if (currentPage === 'jasa-pancang') {
      title = 'Jasa Pancang Jakarta | Layanan Pemancangan Profesional HSPD Bebas Getaran';
      canonical = `${baseUrl}/jasa-pancang-jakarta/`;
      metaDesc = 'Jasa pemancangan tiang pancang di Jakarta untuk gedung, ruko, gudang, pabrik, dan perumahan menggunakan metode HSPD hidrolik bebas getaran.';
    } else if (currentPage === 'area-layanan') {
      title = 'Area Layanan Pancang Jakarta & Bodetabek | Jangkauan Mobilisasi Alat';
      canonical = `${baseUrl}/area-layanan/`;
      metaDesc = 'Jangkauan mobilisasi pemancangan tiang beton di Jakarta Pusat, Barat, Selatan, Timur, Utara, Tangerang, Bekasi, Depok, dan Bogor.';
    } else if (currentPage === 'artikel') {
      title = 'Artikel & Panduan Konstruksi Tiang Pancang Jakarta | Tips RAB & Geoteknik';
      canonical = `${baseUrl}/artikel/`;
      metaDesc = 'Kumpulan panduan teknis, tips perhitungan RAB pondasi, perbandingan bore pile vs tiang pancang, dan wawasan geoteknik konstruksi Jakarta.';
    } else if (currentPage === 'kontak') {
      title = 'Kontak & Estimasi Harga Pancang Jakarta | Konsultasi Proyek Gratis';
      canonical = `${baseUrl}/kontak/`;
      metaDesc = 'Hubungi tim ahli pemancangan Jakarta untuk konsultasi teknis kebutuhan tiang pancang, survei lokasi, dan permintaan penawaran harga RAB gratis.';
    }

    document.title = title;

    // Update or insert canonical tag
    let linkCanonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (linkCanonical) {
      linkCanonical.href = canonical;
    }

    // Update meta description
    let metaDescTag = document.querySelector("meta[name='description']") as HTMLMetaElement | null;
    if (metaDescTag) {
      metaDescTag.content = metaDesc;
    }
  }, [currentPage, selectedArticle]);

  // Navigate to slug and push browser history
  const navigateTo = (target: string) => {
    setSelectedArticle(null);
    setCurrentPage(target);

    let pathSlug = '/';
    if (target === 'harga') pathSlug = '/harga-pancang-jakarta/';
    else if (target === 'jenis-tiang') pathSlug = '/jenis-tiang-pancang/';
    else if (target === 'jasa-pancang') pathSlug = '/jasa-pancang-jakarta/';
    else if (target === 'area-layanan') pathSlug = '/area-layanan/';
    else if (target === 'artikel') pathSlug = '/artikel/';
    else if (target === 'kontak') pathSlug = '/kontak/';

    window.history.pushState(null, '', pathSlug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenInquiry = (data?: { item?: string; dimension?: string; notes?: string }) => {
    if (data) {
      setInquiryPrefill(data);
    }
    navigateTo('kontak');
  };

  const handleSelectArticle = (article: ArticleItem) => {
    setSelectedArticle(article);
    setCurrentPage('artikel-single');
    window.history.pushState(null, '', `/artikel/${article.slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-orange-600 selection:text-white pb-14 lg:pb-0">
      
      {/* Dynamic SEO JSON-LD Structured Data */}
      <SeoStructuredData currentPage={currentPage} currentArticle={selectedArticle} />

      {/* Top Bar Header with Active Page Slug Links */}
      <Header
        activePage={currentPage}
        onNavigate={navigateTo}
        onOpenContactModal={() => navigateTo('kontak')}
      />

      {/* Semantic Main Content by Route */}
      <main className="flex-grow">
        {currentPage === 'beranda' && (
          <div className="animate-fadeIn">
            {/* 1. Hero Section */}
            <Hero
              onCheckPrice={() => navigateTo('harga')}
              onConsult={() => navigateTo('kontak')}
            />

            {/* 2. Section Harga & Estimator */}
            <PricingSection onOpenInquiry={handleOpenInquiry} />

            {/* 3. Section Jenis Tiang Pancang */}
            <PileTypesSection
              onSelectTypeForInquiry={(pileName) => {
                handleOpenInquiry({
                  item: pileName,
                  notes: `Berminat penawaran untuk jenis tiang ${pileName}.`
                });
              }}
            />

            {/* 4. Section Metode Pemancangan */}
            <MethodsSection />

            {/* 5. Section Jasa Pancang (dengan natural dofollow link ke masterpondasi.com) */}
            <ServicesSection />

            {/* 6. Section Rekomendasi Master Pondasi */}
            <MasterPondasiSection />

            {/* 7. Section Area Layanan (DKI Jakarta + Bodetabek) */}
            <ServiceAreaSection
              onSelectAreaForQuote={(areaName) => {
                handleOpenInquiry({
                  notes: `Tanya estimasi harga & mobilisasi ke wilayah ${areaName}.`
                });
              }}
            />

            {/* 8. Section Faktor yang Mempengaruhi Harga */}
            <CostFactorsSection onConsult={() => navigateTo('kontak')} />

            {/* 9. Section FAQ dengan valid Schema */}
            <FaqSection onAskDirect={() => navigateTo('kontak')} />

            {/* 10. Section Artikel / Blog dengan SEO Search & Filter */}
            <BlogSection onSelectArticle={handleSelectArticle} />

            {/* 11. Section Kontak & Form Request Harga */}
            <ContactSection initialData={inquiryPrefill} />
          </div>
        )}

        {/* Dedicated Page: Harga Pancang (/harga-pancang-jakarta/) */}
        {currentPage === 'harga' && (
          <HargaPage onOpenInquiry={handleOpenInquiry} onNavigate={navigateTo} />
        )}

        {/* Dedicated Page: Jenis Tiang Pancang (/jenis-tiang-pancang/) */}
        {currentPage === 'jenis-tiang' && (
          <JenisTiangPage onOpenInquiry={handleOpenInquiry} onNavigate={navigateTo} />
        )}

        {/* Dedicated Page: Jasa Pancang (/jasa-pancang-jakarta/) */}
        {currentPage === 'jasa-pancang' && (
          <JasaPancangPage onOpenInquiry={handleOpenInquiry} onNavigate={navigateTo} />
        )}

        {/* Dedicated Page: Area Layanan (/area-layanan/) */}
        {currentPage === 'area-layanan' && (
          <AreaLayananPage onOpenInquiry={handleOpenInquiry} onNavigate={navigateTo} />
        )}

        {/* Dedicated Page: Artikel List (/artikel/) */}
        {currentPage === 'artikel' && (
          <ArtikelPage onSelectArticle={handleSelectArticle} onNavigate={navigateTo} />
        )}

        {/* Dedicated Page: Artikel Single (/artikel/:slug) */}
        {currentPage === 'artikel-single' && selectedArticle && (
          <ArticleSinglePage
            article={selectedArticle}
            onNavigate={navigateTo}
            onSelectArticle={handleSelectArticle}
            onOpenConsultation={() => handleOpenInquiry({
              notes: `Konsultasi dari artikel: ${selectedArticle.title}`
            })}
          />
        )}

        {/* Dedicated Page: Kontak & Request Estimasi (/kontak/) */}
        {currentPage === 'kontak' && (
          <KontakPage initialData={inquiryPrefill} />
        )}
      </main>

      {/* Semantic Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Floating WhatsApp Action Button (Right Side: 0813-2222-156) */}
      <FloatingWhatsApp />

      {/* Sticky Mobile Conversion Bar (Bottom Screen) */}
      <StickyMobileBar
        onOpenInquiry={() => navigateTo('kontak')}
        onOpenEstimator={() => navigateTo('harga')}
      />

    </div>
  );
}
