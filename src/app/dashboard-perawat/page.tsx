'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function DashboardPerawatPage() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState('2025-01-01');
  const [reports] = useState([
    {
      id: 1,
      tanggal: '01 / 01 / 2025',
      kategori: 'Keselamatan Pasien',
      status: 'Selesai',
      grading: 'Hijau',
      catatan: 'Laporan telah diverifikasi dan ditindaklanjuti',
      kode: 'LP001'
    },
    {
      id: 2,
      tanggal: '01 / 01 / 2025',
      kategori: '',
      status: '',
      grading: '',
      catatan: '',
      kode: ''
    },
    {
      id: 3,
      tanggal: '01 / 01 / 2025',
      kategori: '',
      status: '',
      grading: '',
      catatan: '',
      kode: ''
    },
    {
      id: 4,
      tanggal: '01 / 01 / 2025',
      kategori: '',
      status: '',
      grading: '',
      catatan: '',
      kode: ''
    },
    {
      id: 5,
      tanggal: '01 / 01 / 2025',
      kategori: '',
      status: '',
      grading: '',
      catatan: '',
      kode: ''
    },
    {
      id: 6,
      tanggal: '01 / 01 / 2025',
      kategori: '',
      status: '',
      grading: '',
      catatan: '',
      kode: ''
    },
    {
      id: 7,
      tanggal: '01 / 01 / 2025',
      kategori: '',
      status: '',
      grading: '',
      catatan: '',
      kode: ''
    }
  ]);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleAddReport = () => {
    router.push('/tambah-laporan');
  };

  return (
    <div className="bg-[#d9f0f6] min-h-screen flex flex-col">
      {/* Header/Navbar */}
      <header className="bg-[#B9D9DD] rounded-xl mx-6 mt-6">
        <div className="flex justify-between items-center px-6 py-3">
          <h1 className="text-white text-xl font-bold">
            Safe
            <span className="font-bold text-[#0B7A95]">Nurse</span>
          </h1>
          
          {/* Desktop Navigation Items */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Riwayat Laporan - Active */}
            <button className="flex flex-col items-center text-[#0B7A95] transition-colors">
              <i className="fas fa-clipboard-list text-lg mb-1"></i>
              <span className="text-xs">Riwayat</span>
            </button>
            
            {/* Notifikasi */}
            <button className="flex flex-col items-center text-white hover:text-[#0B7A95] transition-colors" onClick={() => window.location.href = '/notifications-perawat'}>
              <i className="fas fa-bell text-lg mb-1"></i>
              <span className="text-xs">Notifikasi</span>
            </button>
            
            {/* Video Tutorial */}
            <button className="flex flex-col items-center text-white hover:text-[#0B7A95] transition-colors" onClick={() => window.location.href = '/video-tutorial-perawat'}>
              <i className="fas fa-play-circle text-lg mb-1"></i>
              <span className="text-xs">Tutorial</span>
            </button>
            
            {/* Manage Profil */}
            <button className="flex flex-col items-center text-white hover:text-[#0B7A95] transition-colors" onClick={() => window.location.href = '/profile-perawat'}>
              <i className="fas fa-user-cog text-lg mb-1"></i>
              <span className="text-xs">Profil</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-[#0B7A95] transition-colors"
            onClick={toggleMobileMenu}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} px-6 pb-4`}>
          <div className="flex flex-col space-y-4">
            {/* Riwayat Laporan - Active */}
            <button className="flex items-center text-[#0B7A95] transition-colors py-2">
              <i className="fas fa-clipboard-list text-lg mr-3"></i>
              <span className="text-sm">Riwayat Laporan</span>
            </button>
            
            {/* Notifikasi */}
            <button className="flex items-center text-white hover:text-[#0B7A95] transition-colors py-2" onClick={() => window.location.href = '/notifications-perawat'}>
              <i className="fas fa-bell text-lg mr-3"></i>
              <span className="text-sm">Notifikasi</span>
            </button>
            
            {/* Video Tutorial */}
            <button className="flex items-center text-white hover:text-[#0B7A95] transition-colors py-2" onClick={() => window.location.href = '/video-tutorial-perawat'}>
              <i className="fas fa-play-circle text-lg mr-3"></i>
              <span className="text-sm">Video Tutorial</span>
            </button>
            
            {/* Manage Profil */}
            <button className="flex items-center text-white hover:text-[#0B7A95] transition-colors py-2" onClick={() => window.location.href = '/profile-perawat'}>
              <i className="fas fa-user-cog text-lg mr-3"></i>
              <span className="text-sm">Kelola Profil</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 px-6 py-6">
        <div 
          className="bg-white rounded-lg p-6 h-full min-h-screen relative overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #b9dce3 0%, #0a7a9a 100%)'
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
            {/* Header section with date picker and add button */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-4">
                <button 
                  className="bg-[#0E364A] text-white px-4 py-2 rounded-lg text-sm font-medium hover:brightness-110 transition"
                  onClick={() => console.log('Pilih Bulan clicked')}
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
              
              <button 
                className="bg-[#0B7A95] text-white px-6 py-2 rounded-lg text-sm font-medium hover:brightness-110 transition flex items-center space-x-2"
                onClick={handleAddReport}
              >
                <i className="fas fa-plus"></i>
                <span>Tambah Laporan</span>
              </button>
            </div>

            {/* Table */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              {/* Table Header */}
              <div className="bg-[#0B7A95] text-white">
                <div className="grid grid-cols-6 gap-4 px-4 py-3 text-sm font-medium">
                  <div className="text-center">Tanggal Laporan</div>
                  <div className="text-center">Kategori Insiden</div>
                  <div className="text-center">Status Laporan</div>
                  <div className="text-center">Grading</div>
                  <div className="text-center">Catatan</div>
                  <div className="text-center">Kode Laporan</div>
                </div>
              </div>
              
              {/* Table Body */}
              <div className="divide-y divide-gray-200">
                {reports.map((report, index) => (
                  <div 
                    key={report.id} 
                    className={`grid grid-cols-6 gap-4 px-4 py-3 text-sm ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    } hover:bg-blue-50 transition-colors`}
                  >
                    <div className="bg-[#0E364A] text-white px-3 py-1 rounded text-center text-xs font-medium">
                      {report.tanggal}
                    </div>
                    <div className="text-gray-600">{report.kategori}</div>
                    <div className="text-gray-600">{report.status}</div>
                    <div className="text-gray-600">{report.grading}</div>
                    <div className="text-gray-600">{report.catatan}</div>
                    <div className="text-gray-600">{report.kode}</div>
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