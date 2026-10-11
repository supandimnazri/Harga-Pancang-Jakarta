import React, { useState } from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  activePage: string;
  onNavigate: (pageId: string) => void;
  onOpenContactModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  onNavigate,
  onOpenContactModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'beranda', label: 'Beranda', href: '/' },
    { id: 'harga', label: 'Harga Pancang', href: '/harga-pancang-jakarta/' },
    { id: 'jenis-tiang', label: 'Jenis Tiang Pancang', href: '/jenis-tiang-pancang/' },
    { id: 'jasa-pancang', label: 'Jasa Pancang', href: '/jasa-pancang-jakarta/' },
    { id: 'area-layanan', label: 'Area Layanan', href: '/area-layanan/' },
    { id: 'artikel', label: 'Artikel', href: '/artikel/' }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark with Official Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('beranda');
            }}
            className="flex items-center gap-3 text-slate-900 font-extrabold tracking-tight text-xl sm:text-2xl whitespace-nowrap shrink-0 group"
          >
            <img
              src="/logo.png?v=3"
              alt="Logo Harga Pancang Jakarta"
              className="w-10 h-10 rounded-lg object-contain bg-white border border-slate-200/80 p-0.5 shadow-2xs group-hover:scale-105 transition-transform"
            />
            <span>
              Harga Pancang <span className="text-orange-600">Jakarta</span>
            </span>
          </a>

          {/* Zone 2: Navigation Links (Single-line, clean text links) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
                  activePage === item.id
                    ? 'text-orange-600 font-bold border-b-2 border-orange-600'
                    : 'hover:text-slate-900'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenContactModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 rounded-lg transition-colors shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Hubungi Kami</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-md text-slate-700 hover:text-slate-950 hover:bg-slate-100 focus:outline-none"
              aria-label={mobileMenuOpen ? 'Tutup Menu' : 'Buka Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-4 pb-6 space-y-3 shadow-xl">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                  activePage === item.id
                    ? 'bg-orange-50 text-orange-600 font-bold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/kontak/"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('kontak');
              }}
              className="px-3 py-2.5 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900"
            >
              Kontak & Estimasi
            </a>
          </nav>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContactModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-orange-600 text-white font-bold text-sm shadow hover:bg-orange-500 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Hubungi Kami</span>
            </button>
            <a
              href="https://masterpondasi.com/"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-slate-100 text-slate-800 font-semibold text-xs hover:bg-slate-200 transition-colors"
            >
              <span>Partner: Master Pondasi</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
