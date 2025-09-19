"use client";

import { useState } from "react";
import Image from "next/image";

export default function RiwayatLaporanVerifikatorPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [selectedDate, setSelectedDate] = useState("");
  const [reports] = useState([
    {
      id: 1,
      tanggal: "01 / 01 / 2025",
      kategori: "KTD",
      status: "Diverifikasi",
      grading: "Merah",
      catatanKepalaRuangan: "Sudah ditinjau kepala ruangan",
      catatanChiefnursing: "Disetujui chief nursing",
      catatanVerifikator: "Laporan telah diverifikasi",
      kode: "VER001",
    },
    {
      id: 2,
      tanggal: "02 / 01 / 2025",
      kategori: "KPC",
      status: "Dalam Review",
      grading: "Kuning",
      catatanKepalaRuangan: "Perlu tindak lanjut",
      catatanChiefnursing: "Dalam evaluasi",
      catatanVerifikator: "Sedang dalam proses review",
      kode: "VER002",
    },
    {
      id: 3,
      tanggal: "03 / 01 / 2025",
      kategori: "KNC",
      status: "Diverifikasi",
      grading: "Hijau",
      catatanKepalaRuangan: "Tidak ada masalah",
      catatanChiefnursing: "Sesuai standar",
      catatanVerifikator: "Verifikasi selesai",
      kode: "VER003",
    },
    {
      id: 4,
      tanggal: "04 / 01 / 2025",
      kategori: "KTC",
      status: "Pending",
      grading: "Biru",
      catatanKepalaRuangan: "Menunggu konfirmasi",
      catatanChiefnursing: "Butuh data tambahan",
      catatanVerifikator: "Menunggu dokumen tambahan",
      kode: "VER004",
    },
    {
      id: 5,
      tanggal: "05 / 01 / 2025",
      kategori: "Sentinel",
      status: "Diverifikasi",
      grading: "Merah",
      catatanKepalaRuangan: "Kasus serius, sudah ditangani",
      catatanChiefnursing: "Perlu monitoring ketat",
      catatanVerifikator: "Laporan sentinel telah diverifikasi",
      kode: "VER005",
    },
    {
      id: 6,
      tanggal: "06 / 01 / 2025",
      kategori: "KTD",
      status: "Dalam Review",
      grading: "Kuning",
      catatanKepalaRuangan: "Sedang investigasi",
      catatanChiefnursing: "Perlu analisis lebih lanjut",
      catatanVerifikator: "Review lanjutan diperlukan",
      kode: "VER006",
    },
    {
      id: 7,
      tanggal: "07 / 01 / 2025",
      kategori: "KPC",
      status: "Diverifikasi",
      grading: "Hijau",
      catatanKepalaRuangan: "Sudah sesuai protokol",
      catatanChiefnursing: "Tidak ada kendala",
      catatanVerifikator: "Verifikasi berhasil",
      kode: "VER007",
    },
  ]);

  return (
    <div className="bg-[#d9f0f6] min-h-screen flex flex-col">
      {/* Header/Navbar */}
      <header className="bg-[#B9D9DD] rounded-xl px-6 py-3 mx-6 mt-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-xl font-bold">
            Safe
            <span className="font-bold text-[#0B7A95]">Nurse</span>
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Dashboard */}
            <button
              className="flex flex-col items-center text-white hover:text-[#0B7A95] transition-colors"
              onClick={() => (window.location.href = "/dashboard-verifikator")}
            >
              <i className="fas fa-chart-bar text-lg mb-1"></i>
              <span className="text-xs">Dashboard</span>
            </button>

            {/* Riwayat Laporan - Active */}
            <button className="flex flex-col items-center text-[#0B7A95] transition-colors">
              <i className="fas fa-clipboard-list text-lg mb-1"></i>
              <span className="text-xs">Riwayat</span>
            </button>

            {/* Notifikasi */}
            <button
              className="flex flex-col items-center text-white hover:text-[#0B7A95] transition-colors"
              onClick={() =>
                (window.location.href = "/notifications-verifikator")
              }
            >
              <i className="fas fa-bell text-lg mb-1"></i>
              <span className="text-xs">Notifikasi</span>
            </button>

            {/* Laporan Masuk */}
            <button
              className="flex flex-col items-center text-white hover:text-[#0B7A95] transition-colors"
              onClick={() =>
                (window.location.href = "/laporan-masuk-verifikator")
              }
            >
              <i className="fas fa-envelope text-lg mb-1"></i>
              <span className="text-xs">Laporan Masuk</span>
            </button>

            {/* Manage Profil */}
            <button
              className="flex flex-col items-center text-white hover:text-[#0B7A95] transition-colors"
              onClick={() => (window.location.href = "/profile-verifikator")}
            >
              <i className="fas fa-user-cog text-lg mb-1"></i>
              <span className="text-xs">Profil</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-[#0B7A95] transition-colors"
            onClick={toggleMobileMenu}
          >
            <i
              className={`fas ${
                isMobileMenuOpen ? "fa-times" : "fa-bars"
              } text-xl`}
            ></i>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/20">
            <div className="flex flex-col space-y-3">
              {/* Dashboard */}
              <button
                className="flex items-center text-white hover:text-[#0B7A95] transition-colors p-2 rounded"
                onClick={() =>
                  (window.location.href = "/dashboard-verifikator")
                }
              >
                <i className="fas fa-chart-bar text-lg mr-3"></i>
                <span>Dashboard</span>
              </button>

              {/* Riwayat Laporan - Active */}
              <button className="flex items-center text-[#0B7A95] transition-colors p-2 rounded">
                <i className="fas fa-clipboard-list text-lg mr-3"></i>
                <span>Riwayat</span>
              </button>

              {/* Notifikasi */}
              <button
                className="flex items-center text-white hover:text-[#0B7A95] transition-colors p-2 rounded"
                onClick={() =>
                  (window.location.href = "/notifications-verifikator")
                }
              >
                <i className="fas fa-bell text-lg mr-3"></i>
                <span>Notifikasi</span>
              </button>

              {/* Laporan Masuk */}
              <button
                className="flex items-center text-white hover:text-[#0B7A95] transition-colors p-2 rounded"
                onClick={() =>
                  (window.location.href = "/laporan-masuk-verifikator")
                }
              >
                <i className="fas fa-envelope text-lg mr-3"></i>
                <span>Laporan Masuk</span>
              </button>

              {/* Manage Profil */}
              <button
                className="flex items-center text-white hover:text-[#0B7A95] transition-colors p-2 rounded"
                onClick={() => (window.location.href = "/profile-verifikator")}
              >
                <i className="fas fa-user-cog text-lg mr-3"></i>
                <span>Profil</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1 px-6 py-6">
        <div
          className="bg-white rounded-lg p-6 h-full relative overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #b9dce3 0%, #0a7a9a 100%)",
          }}
        >
          {/* Background pattern */}
          <Image
            alt="Background medical pattern"
            className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none select-none"
            src="/bgperawat.png"
            fill
            style={{ zIndex: 0 }}
          />

          {/* Content */}
          <div className="relative z-10">
            {/* Header section with date picker (no add button) */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-4">
                <button
                  className="bg-[#0E364A] text-white px-4 py-2 rounded-lg text-sm font-medium hover:brightness-110 transition"
                  onClick={() => console.log("Pilih Bulan clicked")}
                >
                  Pilih Bulan
                </button>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B7A95]"
                />
              </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              {/* Table Header */}
              <div className="bg-[#0B7A95] text-white">
                <div className="grid grid-cols-8 gap-2 px-4 py-3 text-sm font-medium">
                  <div className="text-center">Tanggal Laporan</div>
                  <div className="text-center">Kategori Insiden</div>
                  <div className="text-center">Status Laporan</div>
                  <div className="text-center">Grading</div>
                  <div className="text-center">Catatan kepala ruangan</div>
                  <div className="text-center">Catatan chiefnursing</div>
                  <div className="text-center">Catatan verifikator</div>
                  <div className="text-center">Kode Laporan</div>
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-200">
                {reports.map((report, index) => (
                  <div
                    key={report.id}
                    className={`grid grid-cols-8 gap-2 px-4 py-3 text-sm ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-blue-50 transition-colors`}
                  >
                    <div className="bg-[#0E364A] text-white px-3 py-1 rounded text-center text-xs font-medium">
                      {report.tanggal}
                    </div>
                    <div className="text-gray-600 text-center">
                      {report.kategori}
                    </div>
                    <div className="text-gray-600 text-center">
                      {report.status}
                    </div>
                    <div className="text-gray-600 text-center">
                      {report.grading}
                    </div>
                    <div className="text-gray-600 text-center">
                      {report.catatanKepalaRuangan}
                    </div>
                    <div className="text-gray-600 text-center">
                      {report.catatanChiefnursing}
                    </div>
                    <div className="text-gray-600 text-center">
                      {report.catatanVerifikator}
                    </div>
                    <div className="text-gray-600 text-center">
                      {report.kode}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
