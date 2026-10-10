import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  // Phone: 0813-2222-156 -> 628132222156
  const phoneNumber = '628132222156';
  const message = 'Hallo Bapak Ilham, saya ingin konsultasi harga tiang pancang dan jasa pemancangan di Jakarta.';
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <aside 
      aria-label="WhatsApp Fast Contact"
      className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3"
    >
      {/* Floating Speech / Callout Bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-slate-800 px-3.5 py-2 rounded-xl shadow-lg border border-slate-200 text-xs font-semibold animate-bounce-subtle">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-600 transition-colors cursor-pointer"
          >
            Hallo Bapak Ilham
          </a>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 ml-1 p-0.5 rounded cursor-pointer"
            aria-label="Tutup info chat"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Main Floating WhatsApp Action Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp dengan Bapak Ilham (0813-2222-156)"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 group"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-pulse pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 fill-white stroke-none relative z-10" />

        {/* Floating Mini Badge */}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white shadow-xs">
          1
        </span>
      </a>
    </aside>
  );
};
