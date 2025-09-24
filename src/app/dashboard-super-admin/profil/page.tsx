"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

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

export default function ProfilSuperAdmin() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [userData] = useState({
    nama: "Administrator Utama",
    noStr: "12345678901234567890",
    nip: "198501012010012001",
    unitKerja: "Sistem Administrasi",
    jabatan: "Super Administrator",
    email: "admin@safenurse.com",
  });

  const [showEditModal, setShowEditModal] = useState(false);
  const [editForm, setEditForm] = useState({
    email: "",
    oldPassword: "",
    password: "",
    confirmPassword: "",
  });

  // Password visibility states
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChangeAccount = () => {
    setEditForm({
      email: userData.email,
      oldPassword: "",
      password: "",
      confirmPassword: "",
    });
    setShowEditModal(true);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setEditForm({
      email: "",
      oldPassword: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleSubmitEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editForm.password !== editForm.confirmPassword) {
      alert("Password dan konfirmasi password tidak cocok!");
      return;
    }
    // Handle form submission here
    console.log("Form submitted:", editForm);
    setShowEditModal(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setEditForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleLogout = () => {
    window.location.href = "/login";
  };

  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounceGentle {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slideUp 0.6s ease-out;
        }

        .animate-slide-up-delay-1 {
          animation: slideUp 0.6s ease-out 0.2s both;
        }

        .animate-fade-in-delay-1 {
          animation: fadeIn 0.8s ease-out 0.4s both;
        }

        .animate-fade-in-delay-2 {
          animation: fadeIn 0.8s ease-out 0.6s both;
        }

        .animate-bounce-gentle {
          animation: bounceGentle 2s infinite;
        }

        .hover\\:shadow-3xl:hover {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }

        @media (max-width: 768px) {
          .animate-slide-up,
          .animate-slide-up-delay-1,
          .animate-fade-in,
          .animate-fade-in-delay-1,
          .animate-fade-in-delay-2 {
            animation-duration: 0.4s;
          }
        }
      `}</style>
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

              {/* Ruangan Management */}
              <button
                className="flex flex-col items-center transition-all duration-200 text-white hover:text-[#0B7A95] transform hover:scale-105"
                onClick={() => router.push("/dashboard-super-admin/ruangan")}
              >
                <i className="fas fa-hospital text-lg mb-1"></i>
                <span className="text-xs">Ruangan</span>
              </button>

              {/* Profil - Active */}
              <button className="flex flex-col items-center transition-all duration-200 text-[#0B7A95] transform hover:scale-105">
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

                {/* Ruangan Management */}
                <button
                  className="flex items-center text-white hover:text-[#0B7A95] transition-all duration-200 transform hover:scale-105 p-2 rounded"
                  onClick={() => router.push("/dashboard-super-admin/ruangan")}
                >
                  <i className="fas fa-hospital text-lg mr-3"></i>
                  <span>Ruangan Management</span>
                </button>

                {/* Profil - Active */}
                <button className="flex items-center text-[#0B7A95] transition-all duration-200 transform hover:scale-105 p-2 rounded">
                  <i className="fas fa-user text-lg mr-3"></i>
                  <span>Profil</span>
                </button>
              </div>
            </div>
          )}
        </header>

        {/* Main content */}
        <main className="flex-1 px-6 py-6 animate-fadeInUp animate-delay-600">
          <div
            className="bg-white rounded-lg p-6 h-full relative overflow-hidden animate-scaleIn animate-delay-700"
            style={{
              background: "linear-gradient(180deg, #b9dce3 0%, #0a7a9a 100%)",
            }}
          >
            {/* Background pattern */}
            <Image
              alt="Background medical pattern"
              className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none select-none animate-bounceIn animate-delay-800"
              src="/bgperawat.png"
              fill
              style={{ zIndex: 0 }}
            />

            {/* Content */}
            <div className="relative z-10">
              {/* Profile Content Container */}
              <div className="flex justify-center items-center min-h-full">
                <div className="max-w-4xl w-full space-y-6">
                  {/* Top Section - Profile Info and General Information */}
                  <div className="flex flex-col lg:flex-row gap-6 animate-slideInLeft animate-delay-900">
                    {/* Left Box - Profile Picture, Name, Email */}
                    <div className="bg-white/95 rounded-2xl p-6 shadow-2xl flex flex-col items-center transform hover:scale-105 transition-all duration-300 hover:shadow-3xl animate-slideInLeft animate-delay-1000">
                      <div className="w-24 h-24 bg-[#4A9B8E] rounded-full flex items-center justify-center mb-4">
                        <i className="fas fa-user-shield text-3xl text-white"></i>
                      </div>
                      <h2 className="text-lg font-bold text-gray-800 text-center mb-1">
                        Nama Lengkap
                      </h2>
                      <p className="text-gray-600 text-center text-sm">
                        {userData.email}
                      </p>
                    </div>

                    {/* Right Box - General Information */}
                    <div className="flex-1 bg-white/95 rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-3xl animate-slideInRight animate-delay-1100">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        General Information
                      </h3>
                      <div className="flex items-center justify-center h-32">
                        <p className="text-gray-500 text-center italic">
                          No general information available
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Box - Security */}
                  <div className="bg-white/95 rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-3xl animate-fadeInUp animate-delay-1200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      Security
                    </h3>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="text-sm text-gray-600">Email</label>
                          <p className="text-gray-800">{userData.email}</p>
                        </div>
                        <div>
                          <label className="text-sm text-gray-600">
                            Password
                          </label>
                          <p className="text-gray-800">••••••••••••</p>
                        </div>
                      </div>
                      <button
                        onClick={handleChangeAccount}
                        className="bg-[#6B8CAE] text-white px-6 py-2 rounded-lg hover:bg-[#5A7A9A] transition-all duration-300 font-medium transform hover:scale-105"
                      >
                        Change Account
                      </button>
                    </div>
                  </div>

                  {/* Logout Button */}
                  <div className="flex justify-center animate-bounceIn animate-delay-1300">
                    <button
                      onClick={handleLogout}
                      className="bg-[#2C3E50] text-white px-8 py-3 rounded-lg hover:bg-[#34495E] transition-all duration-300 font-medium transform hover:scale-105"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Edit Account Modal */}
        {showEditModal && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 animate-fadeInUp">
            <div className="bg-[#A8C8D8] rounded-2xl p-8 max-w-md w-full mx-4 relative shadow-2xl animate-scaleIn animate-delay-100">
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 w-8 h-8 bg-[#6B8CAE] rounded-full flex items-center justify-center text-white hover:bg-[#5A7A9A] transition-all duration-200 transform hover:scale-110"
              >
                <i className="fas fa-times"></i>
              </button>

              {/* Modal Header */}
              <div className="text-center mb-6 animate-slideInLeft animate-delay-200">
                <div className="w-12 h-12 bg-[#6B8CAE] rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-edit text-white text-xl"></i>
                </div>
                <h2 className="text-xl font-bold text-[#2C3E50]">
                  Edit Account
                </h2>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmitEdit} className="space-y-4">
                {/* Email Field */}
                <div>
                  <label className="block text-[#2C3E50] font-medium mb-2">
                    Email :
                  </label>
                  <input
                    type="email"
                    value={editForm.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#6B8CAE] bg-white text-gray-800"
                    placeholder="Masukkan email baru"
                    required
                  />
                </div>

                {/* Old Password Field */}
                <div>
                  <label className="block text-[#2C3E50] font-medium mb-2">
                    Password Lama :
                  </label>
                  <div className="relative">
                    <input
                      type={showOldPassword ? "text" : "password"}
                      value={editForm.oldPassword}
                      onChange={(e) =>
                        handleInputChange("oldPassword", e.target.value)
                      }
                      className="w-full px-4 py-3 pr-12 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#6B8CAE] bg-white text-gray-800"
                      placeholder="Masukkan password lama"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowOldPassword(!showOldPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      <i
                        className={`fas ${
                          showOldPassword ? "fa-eye-slash" : "fa-eye"
                        }`}
                      ></i>
                    </button>
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-[#2C3E50] font-medium mb-2">
                    Password Baru :
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={editForm.password}
                      onChange={(e) =>
                        handleInputChange("password", e.target.value)
                      }
                      className="w-full px-4 py-3 pr-12 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#6B8CAE] bg-white text-gray-800"
                      placeholder="Masukkan password baru"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      <i
                        className={`fas ${
                          showPassword ? "fa-eye-slash" : "fa-eye"
                        }`}
                      ></i>
                    </button>
                  </div>
                </div>

                {/* Confirm Password Field */}
                <div>
                  <label className="block text-[#2C3E50] font-medium mb-2">
                    Konfirmasi Password :
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={editForm.confirmPassword}
                      onChange={(e) =>
                        handleInputChange("confirmPassword", e.target.value)
                      }
                      className="w-full px-4 py-3 pr-12 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#6B8CAE] bg-white text-gray-800"
                      placeholder="Konfirmasi password baru"
                      required
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      <i
                        className={`fas ${
                          showConfirmPassword ? "fa-eye-slash" : "fa-eye"
                        }`}
                      ></i>
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    className="bg-[#2C3E50] text-white px-8 py-3 rounded-lg hover:bg-[#34495E] transition-colors font-medium"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
