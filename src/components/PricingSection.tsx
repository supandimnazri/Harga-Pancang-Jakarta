import React, { useState } from 'react';
import { 
  Calculator, 
  HelpCircle, 
  Layers, 
  Wrench, 
  Check, 
  Send, 
  Info, 
  ChevronRight, 
  TrendingDown, 
  Sparkles,
  Copy
} from 'lucide-react';
import { 
  MINI_PILE_PRICES, 
  SPUN_PILE_PRICES, 
  SERVICE_PRICES, 
  PricingItem, 
  ServicePriceItem 
} from '../data/pancangData';

interface PricingSectionProps {
  onOpenInquiry: (initialData?: { item?: string; dimension?: string; notes?: string }) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenInquiry }) => {
  const [activeTab, setActiveTab] = useState<'minipile' | 'spunpile' | 'jasa'>('minipile');

  // Calculator State
  const [calcPileType, setCalcPileType] = useState('mini-25');
  const [calcPoints, setCalcPoints] = useState<number>(18);
  const [calcDepth, setCalcDepth] = useState<number>(15);
  const [calcMethod, setCalcMethod] = useState<'hspd' | 'drophammer'>('hspd');
  const [calcLocation, setCalcLocation] = useState('Jakarta Barat');

  // Calculator Calculations
  const totalMeters = Math.max(1, calcPoints) * Math.max(1, calcDepth);
  
  let materialRate = 195000; // default for 25x25
  let pileLabel = 'Mini Pile Kotak 25 x 25 cm (K-450)';
  if (calcPileType === 'mini-20') {
    materialRate = 145000;
    pileLabel = 'Mini Pile Kotak 20 x 20 cm (K-450)';
  } else if (calcPileType === 'mini-28') {
    materialRate = 155000;
    pileLabel = 'Mini Pile Segitiga 28 x 28 cm (K-450)';
  } else if (calcPileType === 'mini-25') {
    materialRate = 195000;
    pileLabel = 'Mini Pile Kotak 25 x 25 cm (K-450)';
  } else if (calcPileType === 'mini-30') {
    materialRate = 275000;
    pileLabel = 'Mini Pile Kotak 30 x 30 cm (K-500)';
  } else if (calcPileType === 'spun-300') {
    materialRate = 295000;
    pileLabel = 'Spun Pile Dia 300 mm (K-600)';
  } else if (calcPileType === 'spun-400') {
    materialRate = 465000;
    pileLabel = 'Spun Pile Dia 400 mm (K-600)';
  }

  const serviceRate = calcMethod === 'hspd' ? 60000 : 45000;
  const estimatedMaterialTotal = totalMeters * materialRate;
  const estimatedServiceTotal = totalMeters * serviceRate;
  const estimatedTotal = estimatedMaterialTotal + estimatedServiceTotal;

  const [copiedSummary, setCopiedSummary] = useState(false);

  const handleCopySummary = () => {
    const summaryText = `Rincian Estimasi Pondasi Pancang - Harga Pancang Jakarta\n` +
      `• Spesifikasi: ${pileLabel}\n` +
      `• Lokasi Proyek: ${calcLocation}\n` +
      `• Jumlah Titik: ${calcPoints} titik\n` +
      `• Kedalaman: ${calcDepth} meter\n` +
      `• Total Kebutuhan: ${totalMeters.toLocaleString('id-ID')} meter lari\n` +
      `• Metode Alat: ${calcMethod === 'hspd' ? 'HSPD Hidrolik' : 'Drop Hammer'}\n` +
      `• Est. Biaya Material: Rp ${estimatedMaterialTotal.toLocaleString('id-ID')}\n` +
      `• Est. Biaya Jasa: Rp ${estimatedServiceTotal.toLocaleString('id-ID')}\n` +
      `• Rentang Estimasi Total: Rp ${Math.round(estimatedTotal * 0.95).toLocaleString('id-ID')} - Rp ${Math.round(estimatedTotal * 1.08).toLocaleString('id-ID')}\n` +
      `Konsultasi resmi: https://hargapancangjakarta.com/`;
    navigator.clipboard.writeText(summaryText);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2200);
  };

  const handleInquiryFromCalc = () => {
    onOpenInquiry({
      item: pileLabel,
      dimension: `${calcPoints} titik x ${calcDepth} meter (${totalMeters} meter lari)`,
      notes: `Estimasi via Kalkulator Proyek: Metode ${calcMethod.toUpperCase()} di ${calcLocation}. Perkiraan kebutuhan ${totalMeters} m'.`
    });
  };

  return (
    <section id="harga" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-orange-600">
            Daftar Harga & Transparansi Biaya
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Daftar Harga Pancang Jakarta
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Rangkuman estimasi harga material tiang pancang beton pracetak dan jasa pemancangan di wilayah DKI Jakarta dan sekitarnya berdasarkan standar spesifikasi pabrikasi terpercaya.
          </p>
        </div>

        {/* Pricing Category Tabs (Functional Segmented Control) */}
        <div className="flex justify-center mt-8">
          <div className="inline-flex p-1 bg-slate-100 rounded-xl max-w-full overflow-x-auto border border-slate-200">
            <button
              onClick={() => setActiveTab('minipile')}
              className={`px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'minipile'
                  ? 'bg-orange-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              Harga Mini Pile Beton
            </button>
            <button
              onClick={() => setActiveTab('spunpile')}
              className={`px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'spunpile'
                  ? 'bg-orange-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              Harga Spun Pile (Silinder)
            </button>
            <button
              onClick={() => setActiveTab('jasa')}
              className={`px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'jasa'
                  ? 'bg-orange-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              Harga Jasa Pancang & HSPD
            </button>
          </div>
        </div>

        {/* Pricing Table Content */}
        <div className="mt-8">
          
          {/* TAB 1: MINI PILE */}
          {activeTab === 'minipile' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-500 pb-1">
                <span>Material Precast Mini Pile Mutu K-450 s/d K-500</span>
                <span>Satuan: Per Meter Lari (m')</span>
              </div>

              {/* Responsive Scrollable Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
                <table className="w-full text-left text-sm border-collapse min-w-[650px]">
                  <thead>
                    <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                      <th className="py-3.5 px-4 font-bold">Jenis / Tipe Tiang</th>
                      <th className="py-3.5 px-4 font-bold">Dimensi Penampang</th>
                      <th className="py-3.5 px-4 font-bold">Panjang Segmen</th>
                      <th className="py-3.5 px-4 font-bold">Mutu Beton</th>
                      <th className="py-3.5 px-4 font-bold">Estimasi Harga</th>
                      <th className="py-3.5 px-4 font-bold text-center">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {MINI_PILE_PRICES.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3.5 px-4 font-semibold text-slate-900">
                          {row.item}
                          <div className="text-xs text-slate-500 font-normal mt-0.5">{row.notes}</div>
                        </td>
                        <td className="py-3.5 px-4 text-slate-700 font-mono text-xs">{row.dimension}</td>
                        <td className="py-3.5 px-4 text-slate-700">{row.length}</td>
                        <td className="py-3.5 px-4 text-slate-700 font-semibold">{row.concreteQuality}</td>
                        <td className="py-3.5 px-4 font-bold text-orange-600 tabular-nums">
                          {row.estimatedPrice} <span className="text-xs text-slate-500 font-normal">/ m'</span>
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          <button
                            onClick={() => onOpenInquiry({ item: row.item, dimension: row.dimension })}
                            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-orange-700 bg-orange-50 hover:bg-orange-600 hover:text-white rounded-md transition-colors cursor-pointer"
                          >
                            <span>Tanya</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: SPUN PILE */}
          {activeTab === 'spunpile' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-500 pb-1">
                <span>Material Prestressed Spun Pile Mutu K-600 SNI</span>
                <span>Satuan: Per Meter Lari (m')</span>
              </div>

              {/* Responsive Scrollable Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
                <table className="w-full text-left text-sm border-collapse min-w-[650px]">
                  <thead>
                    <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                      <th className="py-3.5 px-4 font-bold">Spun Pile Silinder</th>
                      <th className="py-3.5 px-4 font-bold">Spesifikasi Diameter</th>
                      <th className="py-3.5 px-4 font-bold">Panjang Segmen</th>
                      <th className="py-3.5 px-4 font-bold">Mutu Beton</th>
                      <th className="py-3.5 px-4 font-bold">Estimasi Harga</th>
                      <th className="py-3.5 px-4 font-bold text-center">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {SPUN_PILE_PRICES.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3.5 px-4 font-semibold text-slate-900">
                          {row.item}
                          <div className="text-xs text-slate-500 font-normal mt-0.5">{row.notes}</div>
                        </td>
                        <td className="py-3.5 px-4 text-slate-700 font-mono text-xs">{row.dimension}</td>
                        <td className="py-3.5 px-4 text-slate-700">{row.length}</td>
                        <td className="py-3.5 px-4 text-slate-700 font-semibold">{row.concreteQuality}</td>
                        <td className="py-3.5 px-4 font-bold text-orange-600 tabular-nums">
                          {row.estimatedPrice} <span className="text-xs text-slate-500 font-normal">/ m'</span>
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          <button
                            onClick={() => onOpenInquiry({ item: row.item, dimension: row.dimension })}
                            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-orange-700 bg-orange-50 hover:bg-orange-600 hover:text-white rounded-md transition-colors cursor-pointer"
                          >
                            <span>Tanya</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: JASA PANCANG & HSPD */}
          {activeTab === 'jasa' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-500 pb-1">
                <span>Biaya Jasa Pelaksanaan Pemancangan Proyek di Jakarta</span>
                <span>Satuan: Per Meter Tertanam & Minimum Charge</span>
              </div>

              {/* Responsive Scrollable Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
                <table className="w-full text-left text-sm border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                      <th className="py-3.5 px-4 font-bold">Metode Alat Pemancangan</th>
                      <th className="py-3.5 px-4 font-bold">Kapasitas Mesin</th>
                      <th className="py-3.5 px-4 font-bold">Tarif Jasa / Meter</th>
                      <th className="py-3.5 px-4 font-bold">Ketentuan Minimum</th>
                      <th className="py-3.5 px-4 font-bold">Karakteristik & Area Ideal</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {SERVICE_PRICES.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3.5 px-4 font-bold text-slate-900">
                          {row.method}
                          <div className="text-xs text-slate-500 font-normal mt-0.5">{row.suitableFor}</div>
                        </td>
                        <td className="py-3.5 px-4 text-slate-700 text-xs font-medium">{row.capacityOrType}</td>
                        <td className="py-3.5 px-4 font-bold text-orange-600 tabular-nums whitespace-nowrap">
                          {row.pricePerMeter}
                        </td>
                        <td className="py-3.5 px-4 text-slate-700 text-xs font-medium">{row.minChargeOrSetup}</td>
                        <td className="py-3.5 px-4 text-slate-600 text-xs">{row.characteristics}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>

        {/* Mandatory Transparency Disclaimer Box */}
        <div className="mt-6 p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-900 flex items-start gap-3 text-xs sm:text-sm">
          <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <div className="font-bold">Ketentuan & Faktor Fleksibilitas Harga:</div>
            <p className="leading-relaxed">
              Harga dapat berbeda tergantung ukuran tiang, mutu beton, volume pekerjaan, kondisi lokasi, akses proyek, kedalaman pemancangan, metode pemancangan, dan jarak mobilisasi alat.
            </p>
          </div>
        </div>

        {/* Section Action CTA Button */}
        <div className="mt-6 text-center">
          <button
            onClick={() => onOpenInquiry()}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white font-bold text-sm sm:text-base rounded-lg shadow-md transition-colors cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Tanya Harga & Kebutuhan Proyek</span>
          </button>
        </div>

        {/* ============================================================== */}
        {/* INTERACTIVE ESTIMATOR / KALKULATOR KEBUTUHAN PANCANG */}
        {/* ============================================================== */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white shadow-xl border border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-orange-400 flex items-center gap-1.5">
                <Calculator className="w-4 h-4" />
                <span>Simulasi Estimator Cepat</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                Kalkulator Estimasi Kebutuhan & Biaya Pancang
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Hitung perkiraan total meter lari dan estimasi anggaran proyek Anda secara instan di Jakarta.
              </p>
            </div>
            <div className="text-xs text-slate-400 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700 whitespace-nowrap">
              Estimasi Material + Jasa Pemancangan
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
            
            {/* Input Controls */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Pile Type Select */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Jenis & Dimensi Tiang</label>
                <select
                  value={calcPileType}
                  onChange={(e) => setCalcPileType(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500"
                >
                  <option value="mini-20">Mini Pile 20 x 20 cm (Rumah)</option>
                  <option value="mini-28">Mini Pile Segitiga 28 x 28 cm</option>
                  <option value="mini-25">Mini Pile 25 x 25 cm (Paling Umum Ruko/Gudang)</option>
                  <option value="mini-30">Mini Pile 30 x 30 cm (Gedung)</option>
                  <option value="spun-300">Spun Pile Ø 300 mm</option>
                  <option value="spun-400">Spun Pile Ø 400 mm</option>
                </select>
              </div>

              {/* Location Select */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Lokasi Proyek</label>
                <select
                  value={calcLocation}
                  onChange={(e) => setCalcLocation(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500"
                >
                  <option value="Jakarta Pusat">Jakarta Pusat</option>
                  <option value="Jakarta Barat">Jakarta Barat</option>
                  <option value="Jakarta Selatan">Jakarta Selatan</option>
                  <option value="Jakarta Timur">Jakarta Timur</option>
                  <option value="Jakarta Utara">Jakarta Utara</option>
                  <option value="Tangerang & Tangsel">Tangerang / BSD / Tangsel</option>
                  <option value="Bekasi">Bekasi / Cikarang</option>
                  <option value="Depok & Bogor">Depok / Bogor</option>
                </select>
              </div>

              {/* Number of Points */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-slate-300">Jumlah Titik Pancang</span>
                  <span className="text-orange-400 font-bold tabular-nums">{calcPoints} Titik</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="100"
                  step="1"
                  value={calcPoints}
                  onChange={(e) => setCalcPoints(Number(e.target.value))}
                  className="w-full accent-orange-500 bg-slate-800 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>4 titik (Kecil)</span>
                  <span>50 titik</span>
                  <span>100 titik (Besar)</span>
                </div>
              </div>

              {/* Depth */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-slate-300">Kedalaman Tanah Keras (m)</span>
                  <span className="text-orange-400 font-bold tabular-nums">{calcDepth} Meter</span>
                </div>
                <input
                  type="range"
                  min="6"
                  max="32"
                  step="1"
                  value={calcDepth}
                  onChange={(e) => setCalcDepth(Number(e.target.value))}
                  className="w-full accent-orange-500 bg-slate-800 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>6 m</span>
                  <span>18 m (Umum Jakarta)</span>
                  <span>32 m</span>
                </div>
              </div>

              {/* Method */}
              <div className="sm:col-span-2 space-y-1.5 pt-1">
                <label className="text-xs font-semibold text-slate-300">Pilihan Metode Pemancangan</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setCalcMethod('hspd')}
                    className={`p-3 rounded-lg text-left border transition-all cursor-pointer ${
                      calcMethod === 'hspd'
                        ? 'border-orange-500 bg-orange-950/40 text-white'
                        : 'border-slate-700 bg-slate-800/60 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-bold">HSPD Hidrolik (Direkomendasikan)</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Tanpa bising, bebas getaran gedung sekitar</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCalcMethod('drophammer')}
                    className={`p-3 rounded-lg text-left border transition-all cursor-pointer ${
                      calcMethod === 'drophammer'
                        ? 'border-orange-500 bg-orange-950/40 text-white'
                        : 'border-slate-700 bg-slate-800/60 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-bold">Drop Hammer (Lahan Terbuka)</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Ekonomis, timbul getaran benturan palu</div>
                  </button>
                </div>
              </div>

            </div>

            {/* Calculation Output Card */}
            <div className="lg:col-span-5 bg-slate-800/90 rounded-xl p-5 border border-slate-700 flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 border-b border-slate-700 pb-2">
                  Hasil Perkiraan Volume & Biaya
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-slate-400">Total Kebutuhan:</span>
                    <div className="text-base font-extrabold text-white tabular-nums">
                      {totalMeters.toLocaleString('id-ID')} m'
                    </div>
                  </div>
                  <div>
                    <span className="text-slate-400">Spesifikasi:</span>
                    <div className="text-xs font-semibold text-orange-400 truncate">
                      {pileLabel}
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-700/60 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Est. Material Tiang:</span>
                    <span className="text-white font-medium tabular-nums">
                      Rp {estimatedMaterialTotal.toLocaleString('id-ID')}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Est. Jasa Pancang ({calcMethod.toUpperCase()}):</span>
                    <span className="text-white font-medium tabular-nums">
                      Rp {estimatedServiceTotal.toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-700">
                  <span className="text-xs text-slate-400">Rentang Estimasi Total Proyek:</span>
                  <div className="text-xl sm:text-2xl font-black text-orange-400 tabular-nums">
                    Rp {Math.round(estimatedTotal * 0.95).toLocaleString('id-ID')} - Rp {Math.round(estimatedTotal * 1.08).toLocaleString('id-ID')}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    *Belum termasuk mobilisasi alat berat & pengelasan sambungan.
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={handleInquiryFromCalc}
                  className="w-full py-3 px-4 rounded-lg bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white font-bold text-sm shadow transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Konsultasikan Estimasi Proyek Ini</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="w-full py-2.5 px-4 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  {copiedSummary ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedSummary ? 'Rincian Berhasil Disalin!' : 'Salin Rincian Estimasi (WhatsApp/RAB)'}</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
