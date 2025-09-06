'use client';

import { useState } from 'react';

interface Report {
  id: number;
  title: string;
  status: string;
  detailNamaPasien: string;
  usia: string;
  nomorRekamMedis: string;
  ruangPerawatan: string;
  keluhanUtama: string;
  gejalaTambahan: string;
  riwayatPenyakit: string;
  riwayatAlergi: string;
  polaTidurMakan: string;
  aktivitasHarian: string;
  faktorRisiko: string;
  kesimpulanSementara: string;
  kategori: string;
  grading: string;
  rencanaTindakanAwal: string;
  perawatYangMelapor: string;
  tanggalWaktu: string;
}

export default function LaporanMasukKepalaRuangan() {
  const [reports] = useState([
    {
      id: 1,
      title: "Laporan Pasien A",
      status: "Baru",
      detailNamaPasien: "Siti Aminah",
      usia: "45 Tahun",
      nomorRekamMedis: "RM-2024-001",
      ruangPerawatan: "ICU Lantai 3",
      keluhanUtama: "Sesak napas dan demam tinggi",
      gejalaTambahan: "Batuk kering, lemas, mual",
      riwayatPenyakit: "Hipertensi, Diabetes Mellitus",
      riwayatAlergi: "Tidak ada alergi yang diketahui",
      polaTidurMakan: "Sulit tidur, nafsu makan menurun",
      aktivitasHarian: "Terbatas karena kondisi",
      faktorRisiko: "Usia lanjut, komorbid",
      kesimpulanSementara: "Suspek pneumonia dengan komplikasi",
      kategori: "Prioritas Tinggi",
      grading: "Grade 3",
      rencanaTindakanAwal: "Observasi ketat, terapi oksigen",
      perawatYangMelapor: "Ns. Budi Santoso, S.Kep",
      tanggalWaktu: "15 Januari 2024, 14:30 WIB"
    },
    {
      id: 2,
      title: "Laporan Pasien B",
      status: "Baru",
      detailNamaPasien: "Ahmad Rahman",
      usia: "32 Tahun",
      nomorRekamMedis: "RM-2024-002",
      ruangPerawatan: "Ruang Bedah",
      keluhanUtama: "Nyeri perut kanan bawah",
      gejalaTambahan: "Mual, muntah, demam",
      riwayatPenyakit: "Tidak ada",
      riwayatAlergi: "Alergi penisilin",
      polaTidurMakan: "Normal",
      aktivitasHarian: "Terbatas karena nyeri",
      faktorRisiko: "Tidak ada",
      kesimpulanSementara: "Suspek appendisitis akut",
      kategori: "Prioritas Sedang",
      grading: "Grade 2",
      rencanaTindakanAwal: "Persiapan operasi",
      perawatYangMelapor: "Ns. Sari Dewi, S.Kep",
      tanggalWaktu: "15 Januari 2024, 16:15 WIB"
    },
    {
      id: 3,
      title: "Laporan Pasien C",
      status: "Baru",
      detailNamaPasien: "Maria Gonzales",
      usia: "28 Tahun",
      nomorRekamMedis: "RM-2024-003",
      ruangPerawatan: "Ruang Bersalin",
      keluhanUtama: "Kontraksi persalinan",
      gejalaTambahan: "Nyeri punggung",
      riwayatPenyakit: "Tidak ada",
      riwayatAlergi: "Tidak ada",
      polaTidurMakan: "Terganggu karena kontraksi",
      aktivitasHarian: "Terbatas",
      faktorRisiko: "Primigravida",
      kesimpulanSementara: "Persalinan normal",
      kategori: "Prioritas Normal",
      grading: "Grade 1",
      rencanaTindakanAwal: "Monitoring persalinan",
      perawatYangMelapor: "Ns. Linda Sari, S.Kep",
      tanggalWaktu: "15 Januari 2024, 18:00 WIB"
    },
    {
      id: 4,
      title: "Laporan Pasien D",
      status: "Baru",
      detailNamaPasien: "Budi Hartono",
      usia: "65 Tahun",
      nomorRekamMedis: "RM-2024-004",
      ruangPerawatan: "Ruang Jantung",
      keluhanUtama: "Nyeri dada dan sesak",
      gejalaTambahan: "Keringat dingin, lemas",
      riwayatPenyakit: "Penyakit jantung koroner",
      riwayatAlergi: "Tidak ada",
      polaTidurMakan: "Terganggu",
      aktivitasHarian: "Bed rest total",
      faktorRisiko: "Usia lanjut, riwayat PJK",
      kesimpulanSementara: "Suspek infark miokard",
      kategori: "Prioritas Tinggi",
      grading: "Grade 4",
      rencanaTindakanAwal: "Monitoring EKG, terapi",
      perawatYangMelapor: "Ns. Andi Wijaya, S.Kep",
      tanggalWaktu: "15 Januari 2024, 20:30 WIB"
    }
  ]);

  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [catatan, setCatatan] = useState('');
  const [showRevisiModal, setShowRevisiModal] = useState(false);
  const [selectedKategori, setSelectedKategori] = useState('');
  const [selectedGrading, setSelectedGrading] = useState('');
  const [catatanRevisi, setCatatanRevisi] = useState('');
  const [tindakanAwal, setTindakanAwal] = useState('');

  const handleReportClick = (report: Report) => {
    setSelectedReport(report);
    setCatatan('');
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedReport(null);
    setCatatan('');
  };

  const handleValidasi = () => {
    console.log('Validasi laporan:', selectedReport?.id);
    handleCloseModal();
  };

  const handleRevisi = () => {
    setShowRevisiModal(true);
    setSelectedKategori('');
    setSelectedGrading('');
    setCatatanRevisi('');
    setTindakanAwal('');
  };

  const handleCloseRevisiModal = () => {
    setShowRevisiModal(false);
    setSelectedKategori('');
    setSelectedGrading('');
    setCatatanRevisi('');
    setTindakanAwal('');
  };

  const handleKirimRevisi = () => {
    console.log('Kirim revisi:', {
      reportId: selectedReport?.id,
      kategori: selectedKategori,
      grading: selectedGrading,
      catatan: catatanRevisi,
      tindakanAwal: tindakanAwal
    });
    handleCloseRevisiModal();
    handleCloseModal();
  };

  const handleTolak = () => {
    console.log('Tolak laporan:', selectedReport?.id, 'Catatan:', catatan);
    handleCloseModal();
  };

  return (
    <div className="bg-[#d9f0f6] min-h-screen flex flex-col">
      {/* Header/Navbar */}
      <header className="flex justify-between items-center bg-[#B9D9DD] rounded-xl px-6 py-3 mx-6 mt-6">
        <h1 className="text-white text-xl font-bold">
          Safe
          <span className="font-bold text-[#0B7A95]">Nurse</span>
        </h1>
        
        {/* Navigation Items */}
        <div className="flex items-center space-x-6">
          {/* Daftar Perawat */}
          <button className="flex flex-col items-center text-white hover:text-[#0B7A95] transition-colors" onClick={() => window.location.href = '/dashboard-kepala-ruangan'}>
            <i className="fas fa-users text-lg mb-1"></i>
            <span className="text-xs">Daftar Perawat</span>
          </button>
          
          {/* Notifikasi */}
          <button className="flex flex-col items-center text-white hover:text-[#0B7A95] transition-colors" onClick={() => window.location.href = '/notifications-kepala-ruangan'}>
            <i className="fas fa-bell text-lg mb-1"></i>
            <span className="text-xs">Notifikasi</span>
          </button>
          
          {/* Laporan Masuk - Active */}
          <button className="flex flex-col items-center text-[#0B7A95] transition-colors">
            <i className="fas fa-envelope text-lg mb-1"></i>
            <span className="text-xs">Laporan Masuk</span>
          </button>
          
          {/* Manage Profil */}
          <button className="flex flex-col items-center text-white hover:text-[#0B7A95] transition-colors" onClick={() => window.location.href = '/profile-kepala-ruangan'}>
            <i className="fas fa-user text-lg mb-1"></i>
            <span className="text-xs">Profil</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 py-6">
        {/* Background Pattern */}
        <div 
          className="relative rounded-xl p-8 h-full"
          style={{
            background: 'linear-gradient(180deg, #b9dce3 0%, #0a7a9a 100%)'
          }}
        >
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none rounded-xl"
            style={{
              backgroundImage: `url('/bgperawat.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
          
          {/* Content Container */}
          <div className="relative z-10">
            {/* Page Title */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Daftar Laporan Masuk</h2>
            </div>

            {/* Reports List */}
            <div className="space-y-4">
              {reports.map((report) => (
                <div 
                  key={report.id}
                  className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6 flex items-center justify-between hover:bg-white/95 transition-colors cursor-pointer"
                  onClick={() => handleReportClick(report)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#0B7A95] p-3 rounded-lg">
                      <i className="fas fa-envelope text-white text-lg"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{report.title}</h3>
                      <p className="text-sm text-gray-600">Status : {report.status}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                      <i className="fas fa-ellipsis-h text-xl"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Modal Detail Laporan */}
      {showModal && selectedReport && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#A8C8D8] rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto relative">
            {/* Header Modal */}
            <div className="bg-[#6B8CAE] rounded-t-2xl p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-white p-2 rounded-lg">
                  <i className="fas fa-envelope text-[#6B8CAE] text-lg"></i>
                </div>
                <h2 className="text-white font-bold text-lg">Detail Laporan</h2>
              </div>
              <button 
                onClick={handleCloseModal}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>

            {/* Content Modal */}
            <div className="p-6 space-y-4">
              {/* Detail Nama Pasien */}
               <div>
                 <label className="block text-[#2C3E50] font-medium mb-1 text-sm">Detail Nama Pasien :</label>
                 <p className="text-gray-800 bg-white/50 p-2 rounded">{selectedReport.detailNamaPasien}</p>
               </div>

               {/* Usia */}
               <div>
                 <label className="block text-[#2C3E50] font-medium mb-1 text-sm">Usia :</label>
                 <p className="text-gray-800 bg-white/50 p-2 rounded">{selectedReport.usia}</p>
               </div>

               {/* Nomor Rekam Medis */}
               <div>
                 <label className="block text-[#2C3E50] font-medium mb-1 text-sm">Nomor Rekam Medis :</label>
                 <p className="text-gray-800 bg-white/50 p-2 rounded">{selectedReport.nomorRekamMedis}</p>
               </div>

               {/* Ruang Perawatan */}
               <div>
                 <label className="block text-[#2C3E50] font-medium mb-1 text-sm">Ruang Perawatan :</label>
                 <p className="text-gray-800 bg-white/50 p-2 rounded">{selectedReport.ruangPerawatan}</p>
               </div>

               {/* Keluhan Utama */}
               <div>
                 <label className="block text-[#2C3E50] font-medium mb-1 text-sm">Keluhan Utama :</label>
                 <p className="text-gray-800 bg-white/50 p-2 rounded">{selectedReport.keluhanUtama}</p>
               </div>

               {/* Gejala Tambahan */}
               <div>
                 <label className="block text-[#2C3E50] font-medium mb-1 text-sm">Gejala Tambahan :</label>
                 <p className="text-gray-800 bg-white/50 p-2 rounded">{selectedReport.gejalaTambahan}</p>
               </div>

               {/* Riwayat Penyakit */}
               <div>
                 <label className="block text-[#2C3E50] font-medium mb-1 text-sm">Riwayat Penyakit :</label>
                 <p className="text-gray-800 bg-white/50 p-2 rounded">{selectedReport.riwayatPenyakit}</p>
               </div>

               {/* Riwayat Alergi */}
               <div>
                 <label className="block text-[#2C3E50] font-medium mb-1 text-sm">Riwayat Alergi :</label>
                 <p className="text-gray-800 bg-white/50 p-2 rounded">{selectedReport.riwayatAlergi}</p>
               </div>

               {/* Pola Tidur & Makan */}
               <div>
                 <label className="block text-[#2C3E50] font-medium mb-1 text-sm">Pola Tidur & Makan :</label>
                 <p className="text-gray-800 bg-white/50 p-2 rounded">{selectedReport.polaTidurMakan}</p>
               </div>

               {/* Aktivitas Harian */}
               <div>
                 <label className="block text-[#2C3E50] font-medium mb-1 text-sm">Aktivitas Harian :</label>
                 <p className="text-gray-800 bg-white/50 p-2 rounded">{selectedReport.aktivitasHarian}</p>
               </div>

               {/* Faktor Risiko */}
               <div>
                 <label className="block text-[#2C3E50] font-medium mb-1 text-sm">Faktor Risiko :</label>
                 <p className="text-gray-800 bg-white/50 p-2 rounded">{selectedReport.faktorRisiko}</p>
               </div>

               {/* Kesimpulan Sementara */}
               <div>
                 <label className="block text-[#2C3E50] font-medium mb-1 text-sm">Kesimpulan Sementara :</label>
                 <p className="text-gray-800 bg-white/50 p-2 rounded">{selectedReport.kesimpulanSementara}</p>
               </div>

               {/* Kategori */}
               <div>
                 <label className="block text-[#2C3E50] font-medium mb-1 text-sm">Kategori :</label>
                 <p className="text-gray-800 bg-white/50 p-2 rounded">{selectedReport.kategori}</p>
               </div>

               {/* Grading */}
               <div>
                 <label className="block text-[#2C3E50] font-medium mb-1 text-sm">Grading :</label>
                 <p className="text-gray-800 bg-white/50 p-2 rounded">{selectedReport.grading}</p>
               </div>

               {/* Rencana Tindakan Awal */}
               <div>
                 <label className="block text-[#2C3E50] font-medium mb-1 text-sm">Rencana Tindakan Awal :</label>
                 <p className="text-gray-800 bg-white/50 p-2 rounded">{selectedReport.rencanaTindakanAwal}</p>
               </div>

               {/* Perawat yang Melapor */}
               <div>
                 <label className="block text-[#2C3E50] font-medium mb-1 text-sm">Perawat yang Melapor :</label>
                 <p className="text-gray-800 bg-white/50 p-2 rounded">{selectedReport.perawatYangMelapor}</p>
               </div>

               {/* Tanggal & Waktu */}
               <div>
                 <label className="block text-[#2C3E50] font-medium mb-1 text-sm">Tanggal & Waktu :</label>
                 <p className="text-gray-800 bg-white/50 p-2 rounded">{selectedReport.tanggalWaktu}</p>
               </div>

              {/* Catatan */}
               <div>
                 <label className="block text-[#2C3E50] font-medium mb-2 text-sm">Catatan :</label>
                 <textarea
                   value={catatan}
                   onChange={(e) => setCatatan(e.target.value)}
                   className="w-full px-3 py-2 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#6B8CAE] bg-white text-gray-800 resize-none"
                   rows={3}
                   placeholder="Tambahkan catatan..."
                 />
               </div>

               {/* Action Buttons */}
               <div className="flex justify-center space-x-3 pt-4">
                 <button
                   onClick={handleValidasi}
                   className="bg-[#28a745] text-white px-6 py-2 rounded-lg hover:bg-[#218838] transition-colors font-medium text-sm"
                 >
                   Validasi
                 </button>
                 <button
                   onClick={handleRevisi}
                   className="bg-[#ffc107] text-white px-6 py-2 rounded-lg hover:bg-[#e0a800] transition-colors font-medium text-sm"
                 >
                   Revisi
                 </button>
                 <button
                   onClick={handleTolak}
                   className="bg-[#dc3545] text-white px-6 py-2 rounded-lg hover:bg-[#c82333] transition-colors font-medium text-sm"
                 >
                   Tolak
                 </button>
               </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Revisi Laporan */}
      {showRevisiModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#A8C8E1] rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-[#6B8CAE] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <h2 className="text-lg font-semibold text-[#2C3E50]">Revisi Laporan</h2>
                </div>
                <button
                  onClick={handleCloseRevisiModal}
                  className="text-[#2C3E50] hover:text-gray-700 text-xl font-bold"
                >
                  ×
                </button>
              </div>

              {/* Kategori */}
              <div className="mb-6">
                <label className="block text-[#2C3E50] font-medium mb-3 text-sm">Kategori :</label>
                <div className="flex flex-wrap gap-2">
                  {['KTD', 'KPC', 'KNC', 'KTC', 'Sentinel'].map((kategori) => (
                    <button
                      key={kategori}
                      onClick={() => setSelectedKategori(kategori)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedKategori === kategori
                          ? 'bg-[#2C3E50] text-white'
                          : 'bg-white/70 text-[#2C3E50] hover:bg-white/90'
                      }`}
                    >
                      {kategori}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grading */}
              <div className="mb-6">
                <label className="block text-[#2C3E50] font-medium mb-3 text-sm">Grading :</label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: 'Merah', color: 'bg-red-500' },
                    { name: 'Kuning', color: 'bg-yellow-500' },
                    { name: 'Hijau', color: 'bg-green-500' },
                    { name: 'Biru', color: 'bg-blue-500' }
                  ].map((grading) => (
                    <button
                      key={grading.name}
                      onClick={() => setSelectedGrading(grading.name)}
                      className={`px-4 py-2 rounded-full text-sm font-medium text-white transition-colors ${
                        selectedGrading === grading.name
                          ? `${grading.color} ring-2 ring-[#2C3E50]`
                          : `${grading.color} opacity-70 hover:opacity-100`
                      }`}
                    >
                      {grading.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tindakan Awal */}
              <div className="mb-6">
                <label className="block text-[#2C3E50] font-medium mb-2 text-sm">Tindakan awal :</label>
                <textarea
                  value={tindakanAwal}
                  onChange={(e) => setTindakanAwal(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#6B8CAE] bg-white text-gray-800 resize-none"
                  rows={3}
                  placeholder="Masukkan tindakan awal..."
                />
              </div>

              {/* Catatan */}
              <div className="mb-6">
                <label className="block text-[#2C3E50] font-medium mb-2 text-sm">Catatan :</label>
                <textarea
                  value={catatanRevisi}
                  onChange={(e) => setCatatanRevisi(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#6B8CAE] bg-white text-gray-800 resize-none"
                  rows={3}
                  placeholder="Tambahkan catatan revisi..."
                />
              </div>

              {/* Action Button */}
              <div className="flex justify-center">
                <button
                  onClick={handleKirimRevisi}
                  className="bg-[#2C3E50] text-white px-8 py-2 rounded-lg hover:bg-[#34495e] transition-colors font-medium text-sm"
                  disabled={!selectedKategori || !selectedGrading}
                >
                  Kirim
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}