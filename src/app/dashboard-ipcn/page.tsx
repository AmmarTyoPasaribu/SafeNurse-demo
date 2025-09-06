'use client';

import { useState } from 'react';

export default function DashboardIPCN() {
  const [nurses] = useState([
    {
      id: 1,
      name: "Budi Santoso",
      str: "1234567890",
      nip: "9876543210"
    },
    {
      id: 2,
      name: "Budi Santoso",
      str: "1234567890",
      nip: "9876543210"
    },
    {
      id: 3,
      name: "Budi Santoso",
      str: "1234567890",
      nip: "9876543210"
    },
    {
      id: 4,
      name: "Budi Santoso",
      str: "1234567890",
      nip: "9876543210"
    },
    {
      id: 5,
      name: "Budi Santoso",
      str: "1234567890",
      nip: "9876543210"
    }
  ]);

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
          {/* Daftar Perawat - Active */}
          <button className="flex flex-col items-center text-[#0B7A95] transition-colors">
            <i className="fas fa-users text-lg mb-1"></i>
            <span className="text-xs">Daftar Perawat</span>
          </button>
          
          {/* Notifikasi */}
          <button className="flex flex-col items-center text-white hover:text-[#0B7A95] transition-colors" onClick={() => window.location.href = '/notifications-ipcn'}>
            <i className="fas fa-bell text-lg mb-1"></i>
            <span className="text-xs">Notifikasi</span>
          </button>
          
          {/* Laporan Masuk */}
          <button className="flex flex-col items-center text-white hover:text-[#0B7A95] transition-colors" onClick={() => window.location.href = '/laporan-masuk-ipcn'}>
            <i className="fas fa-envelope text-lg mb-1"></i>
            <span className="text-xs">Laporan Masuk</span>
          </button>
          
          {/* Manage Profil */}
          <button className="flex flex-col items-center text-white hover:text-[#0B7A95] transition-colors" onClick={() => window.location.href = '/profile-ipcn'}>
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
              <h2 className="text-2xl font-bold text-white mb-2">Daftar Perawat</h2>
              <p className="text-white/80">Kelola dan pantau daftar perawat untuk kontrol infeksi</p>
            </div>

            {/* Nurses Table */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 overflow-hidden">
              {/* Table Header */}
              <div className="bg-[#7BB3C7] px-6 py-4">
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <h3 className="text-white font-semibold text-lg">Nama Perawat</h3>
                  </div>
                  <div className="text-center">
                    <h3 className="text-white font-semibold text-lg">No.STR</h3>
                  </div>
                  <div className="text-center">
                    <h3 className="text-white font-semibold text-lg">NIP</h3>
                  </div>
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-200">
                {nurses.map((nurse, index) => (
                  <div 
                    key={nurse.id}
                    className={`px-6 py-4 hover:bg-gray-50 transition-colors ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                    }`}
                  >
                    <div className="grid grid-cols-3 gap-6">
                      <div className="text-center">
                        <p className="text-gray-800 font-medium">{nurse.name}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-600">{nurse.str}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-600">{nurse.nip}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Empty rows to match the UI */}
              {Array.from({ length: 10 - nurses.length }).map((_, index) => (
                <div 
                  key={`empty-${index}`}
                  className={`px-6 py-4 ${
                    (nurses.length + index) % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                  }`}
                >
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center">
                      <p className="text-transparent">-</p>
                    </div>
                    <div className="text-center">
                      <p className="text-transparent">-</p>
                    </div>
                    <div className="text-center">
                      <p className="text-transparent">-</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>


          </div>
        </div>
      </main>
    </div>
  );
}