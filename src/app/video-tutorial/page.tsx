"use client";

import { useState, useEffect } from "react";
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

export default function VideoTutorialPage() {
  const [videos] = useState([
    {
      id: 1,
      title: "Pengenalan SAFENurse",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: 2,
      title: "Pengenalan SAFENurse",
      thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=9bZkp7q19f0",
    },
    {
      id: 3,
      title: "Pengenalan SAFENurse",
      thumbnail: "https://img.youtube.com/vi/L_jWHffIx5E/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=L_jWHffIx5E",
    },
    {
      id: 4,
      title: "Pengenalan SAFENurse",
      thumbnail: "https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
    },
    {
      id: 5,
      title: "Pengenalan SAFENurse",
      thumbnail: "https://img.youtube.com/vi/ZZ5LpwO-An4/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=ZZ5LpwO-An4",
    },
    {
      id: 6,
      title: "Pengenalan SAFENurse",
      thumbnail: "https://img.youtube.com/vi/astISOttCQ0/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=astISOttCQ0",
    },
    {
      id: 7,
      title: "Pengenalan SAFENurse",
      thumbnail: "https://img.youtube.com/vi/M7lc1UVf-VE/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=M7lc1UVf-VE",
    },
    {
      id: 8,
      title: "Pengenalan SAFENurse",
      thumbnail: "https://img.youtube.com/vi/fJ9rUzIMcZQ/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ",
    },
    {
      id: 9,
      title: "Pengenalan SAFENurse",
      thumbnail: "https://img.youtube.com/vi/Ct6BUPvE2sM/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=Ct6BUPvE2sM",
    },
    {
      id: 10,
      title: "Pengenalan SAFENurse",
      thumbnail: "https://img.youtube.com/vi/oHg5SJYRHA0/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=oHg5SJYRHA0",
    },
  ]);

  const handleVideoClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="bg-[#d9f0f6] min-h-screen flex flex-col">
      <style jsx>{styles}</style>

      {/* Header/Navbar */}
      <header className="flex justify-between items-center bg-[#B9D9DD] rounded-xl px-6 py-3 mx-6 mt-6 animate-fadeInUp animate-delay-100">
        <h1 className="text-white text-xl font-bold animate-slideInLeft animate-delay-200">
          Safe
          <span className="font-bold text-[#0B7A95]">Nurse</span>
        </h1>

        {/* Navigation Items */}
        <div className="flex items-center space-x-6 animate-slideInRight animate-delay-300">
          {/* Riwayat Laporan */}
          <button
            className="flex flex-col items-center text-white hover:text-[#0B7A95] transition-all duration-200 transform hover:scale-105"
            onClick={() => (window.location.href = "/dashboard-perawat")}
          >
            <i className="fas fa-clipboard-list text-lg mb-1"></i>
            <span className="text-xs">Riwayat</span>
          </button>

          {/* Notifikasi */}
          <button
            className="flex flex-col items-center text-white hover:text-[#0B7A95] transition-all duration-200 transform hover:scale-105"
            onClick={() => (window.location.href = "/notifications")}
          >
            <i className="fas fa-bell text-lg mb-1"></i>
            <span className="text-xs">Notifikasi</span>
          </button>

          {/* Video Tutorial - Active */}
          <button className="flex flex-col items-center text-[#0B7A95] transition-all duration-200 transform hover:scale-105">
            <i className="fas fa-play-circle text-lg mb-1"></i>
            <span className="text-xs">Tutorial</span>
          </button>

          {/* Manage Profil */}
          <button
            className="flex flex-col items-center text-white hover:text-[#0B7A95] transition-all duration-200 transform hover:scale-105"
            onClick={() => (window.location.href = "/profile-perawat")}
          >
            <i className="fas fa-user text-lg mb-1"></i>
            <span className="text-xs">Profil</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 py-6 animate-fadeInUp animate-delay-400">
        <div
          className="bg-white rounded-lg p-8 h-full relative overflow-hidden animate-scaleIn animate-delay-500"
          style={{
            background: "linear-gradient(180deg, #b9dce3 0%, #0a7a9a 100%)",
          }}
        >
          {/* Background pattern */}
          <Image
            alt="Background medical pattern"
            className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none select-none animate-bounceIn animate-delay-600"
            src="/bgperawat.png"
            fill
            style={{ zIndex: 0 }}
          />

          {/* Content */}
          <div className="relative z-10">
            {/* Title Section */}
            <div className="mb-8 animate-slideInLeft animate-delay-700">
              <h1 className="text-white text-4xl font-bold mb-2">
                Video Edukasi
              </h1>
              <h2 className="text-white text-4xl font-bold mb-4">
                Tutorial Penggunaan
              </h2>
              <h4 className="text-white text-6xl font-bold">
                SAFE<span className="text-[#09839C]">Nurse</span>
              </h4>
            </div>

            {/* Video Grid - Horizontal Scrollable */}
            <div className="overflow-x-auto pb-4 animate-slideInRight animate-delay-800">
              <div className="flex space-x-6" style={{ width: "max-content" }}>
                {videos.map((video, index) => (
                  <div
                    key={video.id}
                    className={`flex-shrink-0 w-80 bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fadeInUp animate-delay-${
                      900 + index * 100
                    }`}
                    onClick={() => handleVideoClick(video.url)}
                  >
                    {/* Video Thumbnail */}
                    <div className="relative h-48 bg-gray-200">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover"
                        width={320}
                        height={180}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src =
                            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDMyMCAxODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMTgwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNDQgNzJMMTc2IDkwTDE0NCAxMDhWNzJaIiBmaWxsPSIjOUI5QjlCIi8+Cjwvc3ZnPgo=";
                        }}
                      />
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition-all">
                        <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                          <i className="fas fa-play text-2xl text-gray-700 ml-1"></i>
                        </div>
                      </div>
                    </div>

                    {/* Video Info */}
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {video.title}
                      </h3>
                      <p className="text-sm text-[#0B7A95] font-medium">
                        SAFE<span className="text-[#09839C]">Nurse</span>
                      </p>
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
