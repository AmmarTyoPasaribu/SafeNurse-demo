"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const styles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes bounceIn {
    0% {
      opacity: 0;
      transform: scale(0.3);
    }
    50% {
      opacity: 1;
      transform: scale(1.05);
    }
    70% {
      transform: scale(0.9);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  .animate-fadeInUp { animation: fadeInUp 0.6s ease-out forwards; }
  .animate-slideInLeft { animation: slideInLeft 0.6s ease-out forwards; }
  .animate-slideInRight { animation: slideInRight 0.6s ease-out forwards; }
  .animate-scaleIn { animation: scaleIn 0.6s ease-out forwards; }
  .animate-bounceIn { animation: bounceIn 0.8s ease-out forwards; }

  .animate-delay-100 { animation-delay: 0.1s; }
  .animate-delay-200 { animation-delay: 0.2s; }
  .animate-delay-300 { animation-delay: 0.3s; }
  .animate-delay-400 { animation-delay: 0.4s; }
  .animate-delay-500 { animation-delay: 0.5s; }
  .animate-delay-600 { animation-delay: 0.6s; }
  .animate-delay-700 { animation-delay: 0.7s; }
  .animate-delay-800 { animation-delay: 0.8s; }
  .animate-delay-900 { animation-delay: 0.9s; }
  .animate-delay-1000 { animation-delay: 1s; }
  .animate-delay-1100 { animation-delay: 1.1s; }
  .animate-delay-1200 { animation-delay: 1.2s; }
  .animate-delay-1300 { animation-delay: 1.3s; }
  .animate-delay-1400 { animation-delay: 1.4s; }
  .animate-delay-1500 { animation-delay: 1.5s; }
  .animate-delay-1600 { animation-delay: 1.6s; }
  .animate-delay-1700 { animation-delay: 1.7s; }
  .animate-delay-1800 { animation-delay: 1.8s; }
  .animate-delay-1900 { animation-delay: 1.9s; }
  .animate-delay-2000 { animation-delay: 2s; }
  .animate-delay-2100 { animation-delay: 2.1s; }
  .animate-delay-2200 { animation-delay: 2.2s; }
  .animate-delay-2300 { animation-delay: 2.3s; }
  .animate-delay-2400 { animation-delay: 2.4s; }
  .animate-delay-2500 { animation-delay: 2.5s; }
  .animate-delay-2600 { animation-delay: 2.6s; }
  .animate-delay-2700 { animation-delay: 2.7s; }
  .animate-delay-2800 { animation-delay: 2.8s; }
  .animate-delay-2900 { animation-delay: 2.9s; }
  .animate-delay-3000 { animation-delay: 3s; }

  @media (max-width: 768px) {
    .animate-fadeInUp { animation: mobileSlideUp 0.5s ease-out forwards; }
    .animate-slideInLeft { animation: mobileSlideInLeft 0.5s ease-out forwards; }
    .animate-slideInRight { animation: mobileSlideInRight 0.5s ease-out forwards; }
    .animate-scaleIn { animation: mobileScaleIn 0.5s ease-out forwards; }
    .animate-bounceIn { animation: mobileBounceIn 0.6s ease-out forwards; }
  }

  @keyframes mobileSlideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes mobileSlideInLeft {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes mobileSlideInRight {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes mobileScaleIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes mobileBounceIn {
    0% {
      opacity: 0;
      transform: scale(0.8);
    }
    60% {
      opacity: 1;
      transform: scale(1.02);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export default function RuanganSuperAdmin() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [ruangan, setRuangan] = useState([
    { id: 1, nama: "IGD" },
    { id: 2, nama: "ICU" },
    { id: 3, nama: "Rawat Inap A" },
    { id: 4, nama: "Rawat Inap B" },
    { id: 5, nama: "Kamar Operasi" },
    { id: 6, nama: "Laboratorium" },
  ]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [roomToDelete, setRoomToDelete] = useState<{
    id: number;
    nama: string;
  } | null>(null);
  const [newRoom, setNewRoom] = useState({
    nama: "",
  });

  // Handle delete room
  const handleDeleteRoom = (room: { id: number; nama: string }) => {
    setRoomToDelete(room);
    setShowDeleteModal(true);
  };

  const confirmDeleteRoom = () => {
    if (roomToDelete) {
      setRuangan(ruangan.filter((r) => r.id !== roomToDelete.id));
      setShowDeleteModal(false);
      setRoomToDelete(null);
    }
  };

  const cancelDeleteRoom = () => {
    setShowDeleteModal(false);
    setRoomToDelete(null);
  };

  return (
    <div className="bg-[#d9f0f6] min-h-screen flex flex-col">
      <style jsx>{styles}</style>

      {/* Header/Navbar */}
      <header className="bg-[#B9D9DD] rounded-xl px-6 py-3 mx-6 mt-6 animate-fadeInUp animate-delay-100">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-xl font-bold animate-slideInLeft animate-delay-200">
            Safe
            <span className="font-bold text-[#0B7A95]">Nurse</span>
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 animate-slideInRight animate-delay-300">
            {/* User Management */}
            <button
              className="flex flex-col items-center transition-all duration-200 text-white hover:text-[#0B7A95] transform hover:scale-105"
              onClick={() => router.push("/dashboard-superadmin")}
            >
              <i className="fas fa-users text-lg mb-1"></i>
              <span className="text-xs">User</span>
            </button>

            {/* Ruangan Management - Active */}
            <button className="flex flex-col items-center transition-all duration-200 text-[#0B7A95] transform hover:scale-105">
              <i className="fas fa-hospital text-lg mb-1"></i>
              <span className="text-xs">Ruangan</span>
            </button>

            {/* Profil */}
            <button
              className="flex flex-col items-center transition-all duration-200 text-white hover:text-[#0B7A95] transform hover:scale-105"
              onClick={() => router.push("/dashboard-super-admin/profil")}
            >
              <i className="fas fa-user text-lg mb-1"></i>
              <span className="text-xs">Profil</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-[#0B7A95] transition-all duration-200 transform hover:scale-105 animate-scaleIn animate-delay-400"
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
          <div className="md:hidden mt-4 pt-4 border-t border-white/20 animate-slideInLeft animate-delay-500">
            <div className="flex flex-col space-y-3">
              {/* User Management */}
              <button
                className="flex items-center text-white hover:text-[#0B7A95] transition-all duration-200 transform hover:scale-105 p-2 rounded"
                onClick={() => router.push("/dashboard-superadmin")}
              >
                <i className="fas fa-users text-lg mr-3"></i>
                <span>User Management</span>
              </button>

              {/* Ruangan Management - Active */}
              <button className="flex items-center text-[#0B7A95] transition-all duration-200 transform hover:scale-105 p-2 rounded">
                <i className="fas fa-hospital text-lg mr-3"></i>
                <span>Ruangan Management</span>
              </button>

              {/* Profil */}
              <button
                className="flex items-center text-white hover:text-[#0B7A95] transition-all duration-200 transform hover:scale-105 p-2 rounded"
                onClick={() => router.push("/dashboard-super-admin/profil")}
              >
                <i className="fas fa-user text-lg mr-3"></i>
                <span>Profil</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1 px-6 py-6">
        <div
          className="relative rounded-xl p-8 h-full"
          style={{
            background: "linear-gradient(180deg, #b9dce3 0%, #0a7a9a 100%)",
          }}
        >
          <div
            className="absolute inset-0 opacity-20 pointer-events-none rounded-xl"
            style={{
              backgroundImage: `url('/bgperawat.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              zIndex: 0,
            }}
          ></div>

          {/* Content Container */}
          <div className="relative z-10">
            {/* Page Title */}
            <div className="mb-8 animate-fadeInUp animate-delay-600">
              <h2 className="text-2xl font-bold text-white mb-2">
                Manajemen Ruangan
              </h2>
              <p className="text-white/80">
                Kelola dan pantau daftar ruangan dalam sistem
              </p>
            </div>

            {/* Rooms Table */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 overflow-hidden animate-bounceIn animate-delay-700">
              {/* Desktop Table - Hidden on Mobile */}
              <div className="hidden md:block">
                {/* Table Header */}
                <div className="bg-[#0E364A] px-6 py-4 animate-slideInLeft animate-delay-800">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <h3 className="text-white font-semibold text-lg">
                        NAMA RUANGAN
                      </h3>
                    </div>
                    <div className="text-center">
                      <h3 className="text-white font-semibold text-lg">AKSI</h3>
                    </div>
                  </div>
                </div>

                {/* Table Body */}
                <div className="divide-y divide-gray-200">
                  {ruangan.map((room, index) => (
                    <div
                      key={room.id}
                      className={`grid grid-cols-2 gap-6 px-6 py-4 hover:bg-gray-50 transition-all duration-200 animate-fadeInUp animate-delay-${
                        900 + index * 100
                      } ${index % 2 === 0 ? "bg-[#B9D9DD]" : "bg-white"}`}
                    >
                      <div className="text-center text-gray-800 font-medium">
                        {room.nama}
                      </div>
                      <div className="text-center">
                        <div className="flex justify-center space-x-2">
                          <button
                            onClick={() => handleDeleteRoom(room)}
                            className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition-all duration-200 transform hover:scale-105"
                          >
                            Hapus
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Cards - Visible on Mobile */}
              <div className="md:hidden space-y-4 p-4 animate-slideInRight animate-delay-900">
                {ruangan.map((room, index) => (
                  <div
                    key={room.id}
                    className={`bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500 transition-all duration-200 hover:shadow-lg transform hover:scale-[1.02] animate-fadeInUp animate-delay-${
                      1000 + index * 100
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold text-gray-800 text-lg">
                          {room.nama}
                        </h4>
                        <p className="text-gray-600 text-sm">Ruangan</p>
                      </div>
                      <button
                        onClick={() => handleDeleteRoom(room)}
                        className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition-all duration-200 transform hover:scale-105"
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Add Button */}
      <button
        onClick={() => setShowCreateModal(true)}
        className="fixed bottom-6 right-6 bg-[#0B7A95] text-white w-16 h-16 rounded-full shadow-lg hover:bg-[#095a6b] transition-colors flex items-center justify-center z-50"
      >
        <i className="fas fa-plus text-2xl"></i>
      </button>

      {/* Create Room Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#B9D9DD] rounded-lg p-8 w-96 max-w-md mx-4 relative">
            <button
              onClick={() => setShowCreateModal(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-xl"
            >
              ×
            </button>

            <h2 className="text-xl font-semibold text-center mb-6 text-[#0E364A]">
              Create Room
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-[#0E364A] font-medium mb-2">
                  Nama Ruangan :
                </label>
                <input
                  type="text"
                  value={newRoom.nama}
                  onChange={(e) =>
                    setNewRoom({ ...newRoom, nama: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B7A95] text-black bg-white"
                  placeholder="Masukkan nama ruangan"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <button
                onClick={() => {
                  if (newRoom.nama) {
                    const newId = Math.max(...ruangan.map((r) => r.id)) + 1;
                    setRuangan([
                      ...ruangan,
                      {
                        id: newId,
                        nama: newRoom.nama,
                      },
                    ]);
                    setShowCreateModal(false);
                    setNewRoom({
                      nama: "",
                    });
                  }
                }}
                className="bg-[#0E364A] text-white px-8 py-2 rounded-md hover:bg-[#1a4a5a] transition-colors"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-md p-6">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                <i className="fas fa-exclamation-triangle text-red-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Konfirmasi Hapus Ruangan
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                Apakah Anda yakin ingin menghapus ruangan{" "}
                <strong>{roomToDelete?.nama}</strong>? Tindakan ini tidak dapat
                dibatalkan.
              </p>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={cancelDeleteRoom}
                className="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors"
              >
                Batal
              </button>
              <button
                onClick={confirmDeleteRoom}
                className="flex-1 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
