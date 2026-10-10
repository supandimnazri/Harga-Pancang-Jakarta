import React from 'react';
import { MessageCircle, Phone, Calculator } from 'lucide-react';

interface StickyMobileBarProps {
  onOpenInquiry: () => void;
  onOpenEstimator: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({
  onOpenInquiry,
  onOpenEstimator
}) => {
  const handleDirectWhatsApp = () => {
    const textMsg = encodeURIComponent(
      'Hallo Bapak Ilham, saya ingin cek harga tiang pancang & estimasi biaya jasa pemancangan untuk proyek saya di Jakarta.'
    );
    window.open(`https://wa.me/628132222156?text=${textMsg}`, '_blank');
  };

  return (
    <aside 
      aria-label="Aksi Cepat Mobile"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-2xl"
    >
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2">
        {/* Estimator Button */}
        <button
          onClick={onOpenEstimator}
          className="h-11 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-slate-300"
        >
          <Calculator className="w-4 h-4 text-orange-600 shrink-0" />
          <span className="truncate">Kalkulator Biaya</span>
        </button>

        {/* Primary Sticky WhatsApp Button */}
        <button
          onClick={handleDirectWhatsApp}
          className="h-11 px-3 rounded-lg bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-md"
        >
          <MessageCircle className="w-4 h-4 shrink-0 fill-current" />
          <span className="truncate">Chat untuk Cek Harga</span>
        </button>
      </div>
    </aside>
  );
};
