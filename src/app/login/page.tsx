'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password });
    
    // Simple authentication with if-else
    if (email === 'perawat@gmail.com' && password === '12345678') {
      window.location.href = '/dashboard-perawat';
    } else if (email === 'kepalaruangan@gmail.com' && password === '12345678') {
      window.location.href = '/dashboard-kepala-ruangan';
    } else if (email === 'ipcn@gmail.com' && password === '12345678') {
      window.location.href = '/dashboard-ipcn';
    } else if (email === 'verifikator@gmail.com' && password === '12345678') {
      window.location.href = '/dashboard-verifikator';
    } else {
      alert('Email atau password salah!');
    }
  };

  return (
    <div className="bg-[#d9f0f6] min-h-screen flex flex-col">
      {/* Header */}
          <header className="flex justify-between items-center bg-[#B9D9DD] rounded-xl px-6 py-3 mx-6 mt-6">
        <h1 className="text-white text-xl font-bold">
          Safe
          <span className="font-bold text-[#0B7A95]">Nurse</span>
        </h1>
        
        {/* Login Button */}
        <button 
          className="bg-[#0B7A95] text-white px-6 py-2 rounded-lg hover:bg-[#095a6b] transition-colors font-medium"
          onClick={() => window.location.href = '/login'}
        >
          Login
        </button>
      </header>

      {/* Main content */}
      <main className="flex justify-between items-center px-6 py-10 h-full">
  <section className="relative flex w-full rounded-lg overflow-hidden" style={{ minHeight: '520px', height: '520px' }}>
          {/* Left side with gradient and background icons */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center" style={{ background: 'linear-gradient(180deg, #b9dce3 0%, #0a7a9a 100%)' }}>
            {/* Background icons behind content */}
            <Image
              alt="Background medical icons with microphone, clipboard, and sound waves in light blue shades"
              className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none select-none"
              src="/backgroundlogin.png"
              fill
              style={{ zIndex: 0 }}
            />
            <div className="flex flex-col justify-center items-center h-full">
              <div className="relative z-10 max-w-xs">
                <div>
                  <h1 className="text-white text-center text-5xl font-bold mb-1">
                    Safe
                    <span className="font-extrabold text-[#09839C]"> Nurse </span>
                  </h1>
                </div>
                <h2 className="text-white text-center text-5xl font-extrabold mb-8">
                  Log<span className="text-[#09839C]">in</span>
                </h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label
                      className="block text-white font-semibold text-lg mb-1"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <div className="flex items-center border-b border-[#0E364A]">
                      <input
                        className="bg-transparent text-[#a0cbd9] placeholder-[#a0cbd9] text-sm font-normal focus:outline-none w-full py-1"
                        id="email"
                        placeholder="perawat@gmail.com"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <i className="fas fa-envelope text-[#0E364A] text-lg"></i>
                    </div>
                  </div>
                  <div>
                    <label
                      className="block text-white font-semibold text-lg mb-1"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <div className="flex items-center border-b border-[#0E364A]">
                      <input
                        className="bg-transparent text-[#a0cbd9] placeholder-[#a0cbd9] text-sm font-normal focus:outline-none w-full py-1"
                        id="password"
                        placeholder="***************"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <i className="fas fa-lock text-[#0E364A] text-lg"></i>
                    </div>
                  </div>
                  <div className="text-[#0E364A] text-lg underline text-right cursor-pointer">
                    <a href="/forgot-password">Lupa kata sandi?</a>
                  </div>
                  <button
                    className="mt-6 bg-[#0E364A] text-white font-semibold text-lg rounded-lg py-2 w-full hover:brightness-110 transition"
                    type="submit"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Right side image with angled shapes */}
          <div
            id="right-side"
            className="hidden md:flex md:w-1/2 relative items-center justify-center overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #b9dce3 0%, #0a7a9a 100%)' }}
          >
            <Image
              alt="Background medical icons with microphone, clipboard, and sound waves in light blue shades"
              className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none select-none"
              src="/backgroundlogin.png"
              fill
              style={{ zIndex: 0 }}
            />
            <Image
              alt="Photo of a doctor and nurse pointing at a clipboard with medical documents"
              className="absolute inset-0 w-full h-full object-cover z-10"
              src="/dokterkanan.png"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </section>
      </main>

      <style jsx>{`
        @media (max-width: 768px) {
          #right-side {
            display: none;
          }
          #left-side {
            width: 100%;
            padding: 10px;
          }
        }
      `}</style>
    </div>
  );
}