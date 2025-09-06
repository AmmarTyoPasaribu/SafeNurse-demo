"use client";

import { useState } from "react";
import Image from "next/image";

export default function DashboardVerifikatorPage() {
  const [filterUnit, setFilterUnit] = useState("Semua");
  const [filterKategori, setFilterKategori] = useState("Semua");
  const [filterGrading, setFilterGrading] = useState("Semua");
  const [filterDateFrom, setFilterDateFrom] = useState("");
  const [filterDateTo, setFilterDateTo] = useState("");

  const [insidenData] = useState([
    {
      id: 1,
      tanggal: "01 / 01 / 2025",
      unit: "IGD",
      kategori: "KTD",
      grading: "Merah",
    },
    {
      id: 2,
      tanggal: "01 / 01 / 2025",
      unit: "IGD",
      kategori: "KTD",
      grading: "Merah",
    },
    {
      id: 3,
      tanggal: "01 / 01 / 2025",
      unit: "IGD",
      kategori: "KTD",
      grading: "Merah",
    },
    {
      id: 4,
      tanggal: "01 / 01 / 2025",
      unit: "IGD",
      kategori: "KTD",
      grading: "Merah",
    },
  ]);

  const handleExportPDF = () => {
    console.log("Export PDF");
  };

  const handleExportExcel = () => {
    console.log("Export Excel");
  };

  const handleFilter = () => {
    console.log("Apply filter:", {
      unit: filterUnit,
      kategori: filterKategori,
      grading: filterGrading,
      dateFrom: filterDateFrom,
      dateTo: filterDateTo,
    });
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
          {/* Dashboard - Active */}
          <button className="flex flex-col items-center text-[#0B7A95] transition-colors">
            <i className="fas fa-chart-bar text-lg mb-1"></i>
            <span className="text-xs">Dashboard</span>
          </button>

          {/* Riwayat Laporan */}
          <button
            className="flex flex-col items-center text-white hover:text-[#0B7A95] transition-colors"
            onClick={() =>
              (window.location.href = "/riwayat-laporan-verifikator")
            }
          >
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
      </header>

      {/* Main content */}
      <main className="flex-1 px-6 py-6">
        <div className="bg-[#A8C8E1] rounded-lg p-6 h-full relative overflow-hidden">
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
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#2C3E50] mb-2">
                Dashboard Insiden dan Data
              </h2>
            </div>

            {/* Filter Data Section */}
            <div className="bg-white rounded-lg p-4 mb-6">
              <h3 className="text-lg font-semibold text-[#2C3E50] mb-4">
                Filter Data
              </h3>
              <div className="grid grid-cols-6 gap-4 items-end">
                {/* Unit */}
                <div>
                  <label className="block text-sm font-medium text-[#2C3E50] mb-1">
                    Unit
                  </label>
                  <select
                    value={filterUnit}
                    onChange={(e) => setFilterUnit(e.target.value)}
                    className="w-full px-3 py-2 bg-[#6B8CAE] text-white rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#2C3E50]"
                  >
                    <option value="Semua">Semua</option>
                    <option value="IGD">IGD</option>
                    <option value="ICU">ICU</option>
                    <option value="Bedah">Bedah</option>
                  </select>
                </div>

                {/* Kategori */}
                <div>
                  <label className="block text-sm font-medium text-[#2C3E50] mb-1">
                    Kategori
                  </label>
                  <select
                    value={filterKategori}
                    onChange={(e) => setFilterKategori(e.target.value)}
                    className="w-full px-3 py-2 bg-[#6B8CAE] text-white rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#2C3E50]"
                  >
                    <option value="Semua">Semua</option>
                    <option value="KTD">KTD</option>
                    <option value="KPC">KPC</option>
                    <option value="KNC">KNC</option>
                    <option value="KTC">KTC</option>
                    <option value="Sentinel">Sentinel</option>
                  </select>
                </div>

                {/* Grading */}
                <div>
                  <label className="block text-sm font-medium text-[#2C3E50] mb-1">
                    Grading
                  </label>
                  <select
                    value={filterGrading}
                    onChange={(e) => setFilterGrading(e.target.value)}
                    className="w-full px-3 py-2 bg-[#6B8CAE] text-white rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#2C3E50]"
                  >
                    <option value="Semua">Semua</option>
                    <option value="Merah">Merah</option>
                    <option value="Kuning">Kuning</option>
                    <option value="Hijau">Hijau</option>
                    <option value="Biru">Biru</option>
                  </select>
                </div>

                {/* Date From */}
                <div>
                  <label className="block text-sm font-medium text-[#2C3E50] mb-1">
                    Data
                  </label>
                  <input
                    type="date"
                    value={filterDateFrom}
                    onChange={(e) => setFilterDateFrom(e.target.value)}
                    className="w-full px-3 py-2 bg-[#6B8CAE] text-white rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#2C3E50]"
                    placeholder="dd/mm/yy"
                  />
                </div>

                {/* To */}
                <div>
                  <label className="block text-sm font-medium text-[#2C3E50] mb-1">
                    To
                  </label>
                  <input
                    type="date"
                    value={filterDateTo}
                    onChange={(e) => setFilterDateTo(e.target.value)}
                    className="w-full px-3 py-2 bg-[#6B8CAE] text-white rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#2C3E50]"
                    placeholder="dd/mm/yy"
                  />
                </div>

                {/* Filter Button */}
                <div>
                  <button
                    onClick={handleFilter}
                    className="w-12 h-10 bg-[#6B8CAE] text-white rounded hover:bg-[#5a7a9e] transition-colors flex items-center justify-center"
                  >
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-3 gap-6 mb-6">
              {/* Grafik Tren Insiden */}
              <div className="bg-white rounded-lg p-4">
                <h4 className="text-lg font-semibold text-[#2C3E50] mb-4">
                  Grafik Tren Insiden
                </h4>
                <div className="h-48 flex items-end justify-center space-x-2">
                  {/* Bar Chart Simulation */}
                  {[65, 45, 80, 60, 90, 70, 85, 55].map((height, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div
                        className="bg-[#6B8CAE] w-6 rounded-t"
                        style={{ height: `${height}%` }}
                      ></div>
                      <span className="text-xs text-[#2C3E50] mt-1">
                        Week {index + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Distribusi Berdasarkan Kategori */}
              <div className="bg-white rounded-lg p-4">
                <h4 className="text-lg font-semibold text-[#2C3E50] mb-4">
                  Distribusi Berdasarkan Kategori
                </h4>
                <div className="h-48 flex items-center justify-center">
                  {/* Pie Chart Simulation */}
                  <div
                    className="w-32 h-32 rounded-full relative"
                    style={{
                      background: `conic-gradient(
                      #3b82f6 0deg 144deg,
                      #ef4444 144deg 216deg,
                      #22c55e 216deg 288deg,
                      #f59e0b 288deg 324deg,
                      #8b5cf6 324deg 360deg
                    )`,
                    }}
                  >
                    <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                      <span className="text-xs font-semibold text-[#2C3E50]">
                        Total
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-[#3b82f6] rounded"></div>
                    <span className="text-xs text-[#2C3E50]">KTD</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-[#ef4444] rounded"></div>
                    <span className="text-xs text-[#2C3E50]">KPC</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-[#22c55e] rounded"></div>
                    <span className="text-xs text-[#2C3E50]">KNC</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-[#f59e0b] rounded"></div>
                    <span className="text-xs text-[#2C3E50]">KTC</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-[#8b5cf6] rounded"></div>
                    <span className="text-xs text-[#2C3E50]">Sentinel</span>
                  </div>
                </div>
              </div>

              {/* Distribusi Berdasarkan Grading */}
              <div className="bg-white rounded-lg p-4">
                <h4 className="text-lg font-semibold text-[#2C3E50] mb-4">
                  Distribusi Berdasarkan Grading
                </h4>
                <div className="h-48 flex items-center justify-center">
                  {/* Pie Chart Simulation */}
                  <div
                    className="w-32 h-32 rounded-full relative"
                    style={{
                      background: `conic-gradient(
                      #ef4444 0deg 108deg,
                      #f59e0b 108deg 180deg,
                      #22c55e 180deg 252deg,
                      #3b82f6 252deg 360deg
                    )`,
                    }}
                  >
                    <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                      <span className="text-xs font-semibold text-[#2C3E50]">
                        Total
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-[#ef4444] rounded"></div>
                    <span className="text-xs text-[#2C3E50]">Merah</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-[#f59e0b] rounded"></div>
                    <span className="text-xs text-[#2C3E50]">Kuning</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-[#22c55e] rounded"></div>
                    <span className="text-xs text-[#2C3E50]">Hijau</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-[#3b82f6] rounded"></div>
                    <span className="text-xs text-[#2C3E50]">Biru</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Insiden Table */}
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="flex justify-between items-center p-4 border-b">
                <h4 className="text-lg font-semibold text-[#2C3E50]">
                  Data Insiden
                </h4>
                <div className="flex space-x-2">
                  <button
                    onClick={handleExportPDF}
                    className="bg-[#6B8CAE] text-white px-4 py-2 rounded text-sm hover:bg-[#5a7a9e] transition-colors flex items-center space-x-2"
                  >
                    <i className="fas fa-file-pdf"></i>
                    <span>Ekspor PDF</span>
                  </button>
                  <button
                    onClick={handleExportExcel}
                    className="bg-[#6B8CAE] text-white px-4 py-2 rounded text-sm hover:bg-[#5a7a9e] transition-colors flex items-center space-x-2"
                  >
                    <i className="fas fa-file-excel"></i>
                    <span>Ekspor Excel</span>
                  </button>
                </div>
              </div>

              {/* Table Header */}
              <div className="bg-[#2C3E50] text-white">
                <div className="grid grid-cols-4 gap-4 px-4 py-3 text-sm font-medium">
                  <div className="text-center">Tanggal</div>
                  <div className="text-center">Unit</div>
                  <div className="text-center">Kategori</div>
                  <div className="text-center">Grading</div>
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-200">
                {insidenData.map((item, index) => (
                  <div
                    key={item.id}
                    className={`grid grid-cols-4 gap-4 px-4 py-3 text-sm ${
                      index % 2 === 0 ? "bg-[#A8C8E1]" : "bg-white"
                    } hover:bg-blue-50 transition-colors`}
                  >
                    <div className="text-center font-medium text-[#2C3E50]">
                      {item.tanggal}
                    </div>
                    <div className="text-center text-[#2C3E50]">
                      {item.unit}
                    </div>
                    <div className="text-center text-[#2C3E50]">
                      {item.kategori}
                    </div>
                    <div className="text-center text-[#2C3E50]">
                      {item.grading}
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
