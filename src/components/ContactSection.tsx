import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

interface ContactSectionProps {
  initialData?: {
    item?: string;
    dimension?: string;
    notes?: string;
  };
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialData }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [projectLocation, setProjectLocation] = useState('Jakarta Barat');
  const [buildingType, setBuildingType] = useState('Ruko / Bangunan Komersial');
  const [pileType, setPileType] = useState(initialData?.item || 'Mini Pile 25 x 25 cm');
  const [notes, setNotes] = useState(initialData?.notes || '');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Update when initialData changes
  React.useEffect(() => {
    if (initialData?.item) setPileType(initialData.item);
    if (initialData?.notes) setNotes(initialData.notes);
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    // Build WhatsApp URL with pre-filled message
    const textMsg = encodeURIComponent(
      `Hallo Bapak Ilham, saya ingin konsultasi & cek harga proyek pemancangan Jakarta:\n\n` +
      `• Nama: ${name}\n` +
      `• Telepon: ${phone}\n` +
      `• Lokasi Proyek: ${projectLocation}\n` +
      `• Tipe Bangunan: ${buildingType}\n` +
      `• Jenis Tiang: ${pileType}\n` +
      `• Catatan Kebutuhan: ${notes || '-'}\n\n` +
      `Mohon info estimasi biaya dan ketersediaan jadwal pemancangan.`
    );

    // Open WhatsApp in current tab or simulated submit
    setIsSubmitted(true);
    setTimeout(() => {
      window.open(`https://wa.me/628132222156?text=${textMsg}`, '_blank');
    }, 1200);
  };

  return (
    <section id="kontak" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Consultation Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Konsultasi & Penawaran Resmi
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Hubungi Kami untuk Cek Harga & Konsultasi Proyek
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Dapatkan estimasi biaya transparan dan rekomendasi teknis tiang pancang yang tepat untuk proyek konstruksi Anda di wilayah Jakarta dan sekitarnya.
              </p>
            </div>

            {/* Value Points */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Hitungan Transparan Sesuai Sondir</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Analisis kedalaman tanah keras dan beban kolom aktual bangunan.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Respon Cepat Jam Kerja</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Konsultasi teknis via WhatsApp dan email setiap Senin – Sabtu.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Coverage Seluruh Jabodetabek</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Siap mobilisasi ke 5 kota DKI Jakarta, Tangerang, Bekasi, Depok, dan Bogor.</p>
                </div>
              </div>
            </div>

            {/* Direct Partner Notice */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed">
              Pelaksanaan armada alat berat dan pemancangan lapangan didukung oleh spesialis{' '}
              <a
                href="https://masterpondasi.com/layanan/jasa-pancang-jabodetabek/"
                target="_blank"
                rel="noopener"
                className="font-bold text-orange-600 hover:text-orange-500 hover:underline"
              >
                Jasa Pancang Jabodetabek
              </a>{' '}
              dari Master Pondasi, terpercaya menangani proyek pondasi dan pemancangan di Indonesia.
            </div>

          </div>

          {/* Right Column: Lead Request Form */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Permintaan Penawaran Diterima!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Mengarahkan Anda ke WhatsApp resmi untuk konfirmasi data proyek dan perhitungan RAB instan...
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100"
                  >
                    Kirim Permintaan Lain
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h3 className="text-lg font-bold text-slate-900">
                    Form Request Harga & Konsultasi Proyek
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Isi detail kebutuhan Anda untuk mendapatkan estimasi harga dan jadwal survei gratis.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Nama Lengkap / Instansi *</label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Ir. Hendra Gunawan"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Nomor WhatsApp / Telp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="Contoh: 0812XXXXXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Project Location */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Lokasi Proyek</label>
                    <select
                      value={projectLocation}
                      onChange={(e) => setProjectLocation(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-orange-600"
                    >
                      <option value="Jakarta Pusat">Jakarta Pusat</option>
                      <option value="Jakarta Barat">Jakarta Barat</option>
                      <option value="Jakarta Selatan">Jakarta Selatan</option>
                      <option value="Jakarta Timur">Jakarta Timur</option>
                      <option value="Jakarta Utara">Jakarta Utara</option>
                      <option value="Tangerang & Tangsel">Tangerang & Tangsel</option>
                      <option value="Bekasi">Bekasi & Cikarang</option>
                      <option value="Depok">Depok</option>
                      <option value="Bogor">Bogor</option>
                    </select>
                  </div>

                  {/* Building Type */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Jenis Bangunan</label>
                    <select
                      value={buildingType}
                      onChange={(e) => setBuildingType(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-orange-600"
                    >
                      <option value="Rumah Tinggal (2-3 Lantai)">Rumah Tinggal (2-3 Lantai)</option>
                      <option value="Ruko / Bangunan Komersial">Ruko / Bangunan Komersial</option>
                      <option value="Gudang / Workshop">Gudang / Workshop</option>
                      <option value="Gedung Bertingkat / Kantor">Gedung Bertingkat / Kantor</option>
                      <option value="Pabrik / Kawasan Industri">Pabrik / Kawasan Industri</option>
                      <option value="Pondasi Pagar / Tanggul">Pondasi Pagar / Tanggul</option>
                    </select>
                  </div>
                </div>

                {/* Pile Type Interested */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Tipe Tiang Pancang yang Diminati</label>
                  <select
                    value={pileType}
                    onChange={(e) => setPileType(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-orange-600"
                  >
                    <option value="Mini Pile Kotak 20 x 20 cm">Mini Pile Kotak 20 x 20 cm</option>
                    <option value="Mini Pile Segitiga 28 x 28 cm">Mini Pile Segitiga 28 x 28 cm</option>
                    <option value="Mini Pile Kotak 25 x 25 cm">Mini Pile Kotak 25 x 25 cm (Paling Banyak Digunakan)</option>
                    <option value="Mini Pile Kotak 30 x 30 cm">Mini Pile Kotak 30 x 30 cm</option>
                    <option value="Spun Pile Dia 300 mm">Spun Pile Dia 300 mm</option>
                    <option value="Spun Pile Dia 400 mm">Spun Pile Dia 400 mm</option>
                    <option value="Spun Pile Dia 500 mm / 600 mm">Spun Pile Dia 500 mm / 600 mm</option>
                    <option value="Jasa Pancang HSPD Saja">Jasa Pancang HSPD Saja (Tiang dari Pemilik)</option>
                    <option value="Belum Yakin (Perlu Rekomendasi)">Belum Yakin (Perlu Rekomendasi)</option>
                  </select>
                </div>

                {/* Notes */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Catatan Kebutuhan / Perkiraan Titik & Kedalaman</label>
                  <textarea
                    rows={3}
                    placeholder="Contoh: Rencana ruko 3 lantai, estimasi 24 titik pemancangan, kedalaman sondir sekitar 16 meter di daerah Cengkareng..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2 text-sm text-slate-900 focus:outline-none focus:border-orange-600"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-lg bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirim & Terhubung ke WhatsApp Konsultan</span>
                  </button>
                  <p className="text-[11px] text-slate-500 text-center mt-2">
                    Data Anda aman dan hanya digunakan untuk perhitungan estimasi proyek ini.
                  </p>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
