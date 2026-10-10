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
import { ArticleDetailModal } from './components/ArticleDetailModal';
import { SeoStructuredData } from './components/SeoStructuredData';
import { ArticleItem, ARTICLES } from './data/pancangData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('beranda');
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [inquiryPrefill, setInquiryPrefill] = useState<{
    item?: string;
    dimension?: string;
    notes?: string;
  } | undefined>(undefined);

  // Parse path & hash for full SEO-friendly URLs
  const resolveLocation = () => {
    const path = window.location.pathname.replace(/\/$/, '');
    const hash = window.location.hash.replace('#', '');

    // Check Article direct path or hash
    if (path.startsWith('/artikel/')) {
      const slug = path.replace('/artikel/', '');
      const found = ARTICLES.find((a) => a.slug === slug);
      if (found) {
        setSelectedArticle(found);
        return;
      }
    } else if (hash.startsWith('artikel-')) {
      const slug = hash.replace('artikel-', '');
      const found = ARTICLES.find((a) => a.slug === slug);
      if (found) {
        setSelectedArticle(found);
        return;
      }
    } else {
      setSelectedArticle(null);
    }

    // Check SEO URL aliases
    let targetSection = 'beranda';
    if (path.includes('harga-tiang-pancang') || path.includes('harga-mini-pile') || path.includes('harga-pancang-jakarta') || hash === 'harga') {
      targetSection = 'harga';
    } else if (path.includes('jenis-tiang-pancang') || hash === 'jenis-tiang') {
      targetSection = 'jenis-tiang';
    } else if (path.includes('jasa-pancang-jakarta') || hash === 'jasa-pancang') {
      targetSection = 'jasa-pancang';
    } else if (path.includes('area-layanan') || hash === 'area-layanan') {
      targetSection = 'area-layanan';
    } else if (path === '/artikel' || hash === 'artikel') {
      targetSection = 'artikel';
    } else if (path.includes('kontak') || hash === 'kontak') {
      targetSection = 'kontak';
    }

    if (targetSection !== 'beranda') {
      setActiveSection(targetSection);
      const elem = document.getElementById(targetSection);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
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

  // Update document title & metadata dynamically
  useEffect(() => {
    let canonical = 'https://hargapancangjakarta.com/';
    let metaDesc = 'Informasi harga pancang Jakarta, harga tiang pancang, mini pile, spun pile, HSPD dan jasa pemancangan untuk berbagai kebutuhan proyek konstruksi.';

    if (selectedArticle) {
      document.title = `${selectedArticle.seoTitle || selectedArticle.title} | Harga Pancang Jakarta`;
      canonical = `https://hargapancangjakarta.com/artikel/${selectedArticle.slug}`;
      metaDesc = selectedArticle.metaDescription;
    } else if (activeSection === 'harga') {
      document.title = 'Harga Tiang Pancang Jakarta Terbaru 2026 | Mini Pile & Spun Pile';
      canonical = 'https://hargapancangjakarta.com/harga-pancang-jakarta/';
      metaDesc = 'Daftar harga tiang pancang beton Jakarta, mini pile 25x25, 30x30, spun pile silinder K-600, dan biaya jasa pemancangan hidrolik HSPD.';
    } else if (activeSection === 'jasa-pancang') {
      document.title = 'Jasa Pancang Jakarta | Layanan Pemancangan Profesional HSPD';
      canonical = 'https://hargapancangjakarta.com/jasa-pancang-jakarta/';
      metaDesc = 'Jasa pemancangan tiang pancang di Jakarta untuk gedung, ruko, gudang, pabrik, dan perumahan menggunakan metode HSPD bebas getaran.';
    } else if (activeSection === 'jenis-tiang') {
      document.title = 'Jenis Tiang Pancang Beton | Mini Pile, Spun Pile & Sheet Pile';
      canonical = 'https://hargapancangjakarta.com/jenis-tiang-pancang/';
      metaDesc = 'Kenali jenis-jenis tiang pancang untuk konstruksi di Jakarta: mini pile kotak, spun pile pratekan, sheet pile penahan tanah, dan spesifikasinya.';
    } else if (activeSection === 'area-layanan') {
      document.title = 'Area Layanan Pancang Jakarta & Jabodetabek | Harga Pancang Jakarta';
      canonical = 'https://hargapancangjakarta.com/area-layanan/';
      metaDesc = 'Jangkauan mobilisasi pemancangan tiang beton di Jakarta Pusat, Barat, Selatan, Timur, Utara, Tangerang, Bekasi, Depok, dan Bogor.';
    } else {
      document.title = 'Harga Pancang Jakarta | Harga Tiang & Jasa Pancang';
    }

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
  }, [selectedArticle, activeSection]);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'beranda') {
      window.history.pushState(null, '', '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      let pathSlug = `/${sectionId}/`;
      if (sectionId === 'harga') pathSlug = '/harga-pancang-jakarta/';
      if (sectionId === 'jenis-tiang') pathSlug = '/jenis-tiang-pancang/';
      if (sectionId === 'jasa-pancang') pathSlug = '/jasa-pancang-jakarta/';
      if (sectionId === 'area-layanan') pathSlug = '/area-layanan/';
      if (sectionId === 'artikel') pathSlug = '/artikel/';

      window.history.pushState(null, '', pathSlug);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleOpenInquiry = (data?: { item?: string; dimension?: string; notes?: string }) => {
    if (data) {
      setInquiryPrefill(data);
    }
    scrollToSection('kontak');
  };

  const handleSelectArticle = (article: ArticleItem) => {
    setSelectedArticle(article);
    window.history.pushState(null, '', `/artikel/${article.slug}`);
  };

  const handleCloseArticle = () => {
    setSelectedArticle(null);
    window.history.pushState(null, '', '/artikel/');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-orange-600 selection:text-white pb-14 lg:pb-0">
      
      {/* Dynamic SEO JSON-LD Structured Data */}
      <SeoStructuredData currentArticle={selectedArticle} />

      {/* Top Bar Header */}
      <Header
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenContactModal={() => scrollToSection('kontak')}
      />

      {/* Semantic Main Content */}
      <main className="flex-grow">
        
        {/* 1. Hero Section */}
        <Hero
          onCheckPrice={() => scrollToSection('harga')}
          onConsult={() => scrollToSection('kontak')}
        />

        {/* 2. Section Harga & Interactive Cost Estimator */}
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

        {/* 5. Section Jasa Pancang (with natural dofollow link to masterpondasi.com) */}
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
        <CostFactorsSection onConsult={() => scrollToSection('kontak')} />

        {/* 9. Section FAQ dengan valid Schema */}
        <FaqSection onAskDirect={() => scrollToSection('kontak')} />

        {/* 10. Section Artikel / Blog dengan SEO Search & Filter */}
        <BlogSection onSelectArticle={handleSelectArticle} />

        {/* 11. Section Kontak & Form Request Harga */}
        <ContactSection initialData={inquiryPrefill} />

      </main>

      {/* Article Detail Reading Modal */}
      <ArticleDetailModal
        article={selectedArticle}
        onClose={handleCloseArticle}
        onSelectArticle={handleSelectArticle}
        onOpenConsultation={() => {
          handleCloseArticle();
          scrollToSection('kontak');
        }}
      />

      {/* Semantic Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Floating WhatsApp Action Button (Right Side) */}
      <FloatingWhatsApp />

      {/* Sticky Mobile Conversion Bar (Bottom Screen) */}
      <StickyMobileBar
        onOpenInquiry={() => scrollToSection('kontak')}
        onOpenEstimator={() => scrollToSection('harga')}
      />

    </div>
  );
}
