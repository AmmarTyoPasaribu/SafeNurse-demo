'use client';

import { useState, useRef, useEffect } from 'react';

export default function TambahLaporanPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Halo, apakah Anda ingin melaporkan insiden?',
      timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  
  const [currentStep, setCurrentStep] = useState('greeting');
  const [inputValue, setInputValue] = useState('');
  const [reportData, setReportData] = useState({
    namaPasien: '',
    noRM: '',
    umur: '',
    jenisKelamin: '',
    tglMasukRS: '',
    unitPelapor: '',
    tglKejadian: '',
    judulInsiden: '',
    kronologi: '',
    tindakanSegera: '',
    tindakanOleh: '',
    frekuensiKejadian: ''
  });
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [datePickerType, setDatePickerType] = useState('');

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (sender, text) => {
    const newMessage = {
      id: messages.length + 1,
      sender,
      text,
      timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    addMessage('user', inputValue);
    processUserResponse(inputValue);
    setInputValue('');
  };

  const saveToLocalStorage = (data) => {
    localStorage.setItem('reportData', JSON.stringify(data));
  };

  const generateReportSummary = (data) => {
    return `**RINGKASAN LAPORAN INSIDEN**\n\n` +
           `**Data Pasien:**\n` +
           `• Nama Pasien: ${data.namaPasien}\n` +
           `• No. RM: ${data.noRM}\n` +
           `• Umur: ${data.umur}\n` +
           `• Jenis Kelamin: ${data.jenisKelamin}\n` +
           `• Tanggal Masuk RS: ${data.tglMasukRS}\n\n` +
           `**Rincian Kejadian:**\n` +
           `• Unit Pelapor: ${data.unitPelapor}\n` +
           `• Tanggal/Jam Kejadian: ${data.tglKejadian}\n` +
           `• Judul Insiden: ${data.judulInsiden}\n` +
           `• Kronologi: ${data.kronologi}\n` +
           `• Tindakan Segera: ${data.tindakanSegera}\n` +
           `• Tindakan Oleh: ${data.tindakanOleh}\n` +
           `• Frekuensi Kejadian: ${data.frekuensiKejadian}`;
  };

  const processUserResponse = (response) => {
    setTimeout(() => {
      let updatedData = { ...reportData };
      
      switch (currentStep) {
        case 'greeting':
          if (response.toLowerCase().includes('ya') || response.toLowerCase().includes('iya')) {
            addMessage('bot', 'Nama pasien?');
            setCurrentStep('namaPasien');
          } else {
            addMessage('bot', 'Baik, terima kasih. Jika suatu saat Anda ingin melaporkan insiden, silakan buka kembali aplikasi ini.');
            setCurrentStep('end');
          }
          break;
          
        case 'namaPasien':
          updatedData.namaPasien = response;
          setReportData(updatedData);
          saveToLocalStorage(updatedData);
          addMessage('bot', 'No.RM?');
          setCurrentStep('noRM');
          break;
          
        case 'noRM':
          updatedData.noRM = response;
          setReportData(updatedData);
          saveToLocalStorage(updatedData);
          addMessage('bot', 'Umur?');
          setCurrentStep('umur');
          break;
          
        case 'umur':
          updatedData.umur = response;
          setReportData(updatedData);
          saveToLocalStorage(updatedData);
          addMessage('bot', 'Jenis Kelamin?');
          setCurrentStep('jenisKelamin');
          break;
          
        case 'jenisKelamin':
          updatedData.jenisKelamin = response;
          setReportData(updatedData);
          saveToLocalStorage(updatedData);
          addMessage('bot', 'Tgl masuk RS?');
          setCurrentStep('tglMasukRS');
          break;
          
        case 'tglMasukRS':
          updatedData.tglMasukRS = response;
          setReportData(updatedData);
          saveToLocalStorage(updatedData);
          addMessage('bot', 'Unit yang melaporkan?');
          setCurrentStep('unitPelapor');
          break;
          
        case 'unitPelapor':
          updatedData.unitPelapor = response;
          setReportData(updatedData);
          saveToLocalStorage(updatedData);
          addMessage('bot', 'Tgl/bulan/tahun/jam terjadinya insiden?');
          setCurrentStep('tglKejadian');
          break;
          
        case 'tglKejadian':
          updatedData.tglKejadian = response;
          setReportData(updatedData);
          saveToLocalStorage(updatedData);
          addMessage('bot', 'Judul Insiden?');
          setCurrentStep('judulInsiden');
          break;
          
        case 'judulInsiden':
          updatedData.judulInsiden = response;
          setReportData(updatedData);
          saveToLocalStorage(updatedData);
          addMessage('bot', 'Kronologi kejadian?');
          setCurrentStep('kronologi');
          break;
          
        case 'kronologi':
          updatedData.kronologi = response;
          setReportData(updatedData);
          saveToLocalStorage(updatedData);
          addMessage('bot', 'Tindakan yang dilakukan segera setelah kejadian & apa hasilnya?');
          setCurrentStep('tindakanSegera');
          break;
          
        case 'tindakanSegera':
          updatedData.tindakanSegera = response;
          setReportData(updatedData);
          saveToLocalStorage(updatedData);
          addMessage('bot', 'Tindakan diberikan oleh?');
          setCurrentStep('tindakanOleh');
          break;
          
        case 'tindakanOleh':
          updatedData.tindakanOleh = response;
          setReportData(updatedData);
          saveToLocalStorage(updatedData);
          addMessage('bot', 'Seberapa sering kejadian yang sama terjadi di unit tempat anda bekerja?');
          setCurrentStep('frekuensiKejadian');
          break;
          
        case 'frekuensiKejadian':
          updatedData.frekuensiKejadian = response;
          setReportData(updatedData);
          saveToLocalStorage(updatedData);
          
          // Generate and show summary
          const summary = generateReportSummary(updatedData);
          addMessage('bot', summary);
          setTimeout(() => {
            addMessage('bot', 'Apakah laporan sudah sesuai?');
            setCurrentStep('konfirmasi');
          }, 2000);
          break;
          
        case 'konfirmasi':
           if (response.toLowerCase().includes('sesuai') || response.toLowerCase().includes('ya')) {
             addMessage('bot', 'Terima kasih, laporan berhasil dikirimkan dan tersimpan. Jaga kesehatan dan tetap semangat!');
             setCurrentStep('end');
           } else {
             addMessage('bot', 'Baik, mari kita perbaiki laporan. Pertanyaan nomor berapa yang ingin Anda ubah?\n\n1. Nama pasien\n2. No.RM\n3. Umur\n4. Jenis Kelamin\n5. Tgl masuk RS\n6. Unit yang melaporkan\n7. Tgl/jam kejadian\n8. Judul Insiden\n9. Kronologi kejadian\n10. Tindakan segera\n11. Tindakan diberikan oleh\n12. Frekuensi kejadian\n\nSilakan ketik nomor (1-12):');
             setCurrentStep('pilihRevisi');
           }
           break;
          
        case 'pilihRevisi':
           const nomorPertanyaan = parseInt(response.trim());
           if (nomorPertanyaan >= 1 && nomorPertanyaan <= 12) {
             switch (nomorPertanyaan) {
               case 1:
                 addMessage('bot', 'Nama pasien yang benar?');
                 setCurrentStep('namaPasien');
                 break;
               case 2:
                 addMessage('bot', 'No.RM yang benar?');
                 setCurrentStep('noRM');
                 break;
               case 3:
                 addMessage('bot', 'Umur yang benar?');
                 setCurrentStep('umur');
                 break;
               case 4:
                 addMessage('bot', 'Jenis Kelamin yang benar?');
                 setCurrentStep('jenisKelamin');
                 break;
               case 5:
                 addMessage('bot', 'Tgl masuk RS yang benar?');
                 setCurrentStep('tglMasukRS');
                 break;
               case 6:
                 addMessage('bot', 'Unit yang melaporkan yang benar?');
                 setCurrentStep('unitPelapor');
                 break;
               case 7:
                 addMessage('bot', 'Tgl/bulan/tahun/jam terjadinya insiden yang benar?');
                 setCurrentStep('tglKejadian');
                 break;
               case 8:
                 addMessage('bot', 'Judul Insiden yang benar?');
                 setCurrentStep('judulInsiden');
                 break;
               case 9:
                 addMessage('bot', 'Kronologi kejadian yang benar?');
                 setCurrentStep('kronologi');
                 break;
               case 10:
                 addMessage('bot', 'Tindakan yang dilakukan segera setelah kejadian & apa hasilnya yang benar?');
                 setCurrentStep('tindakanSegera');
                 break;
               case 11:
                 addMessage('bot', 'Tindakan diberikan oleh siapa yang benar?');
                 setCurrentStep('tindakanOleh');
                 break;
               case 12:
                 addMessage('bot', 'Seberapa sering kejadian yang sama terjadi di unit tempat anda bekerja yang benar?');
                 setCurrentStep('frekuensiKejadian');
                 break;
             }
           } else {
             addMessage('bot', 'Mohon masukkan nomor yang valid (1-12). Pertanyaan nomor berapa yang ingin Anda ubah?');
           }
           break;
          
        default:
          break;
      }
    }, 1000);
  };


  const handleQuickResponse = (response) => {
    addMessage('user', response);
    processUserResponse(response);
  };

  const startVoiceRecognition = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.lang = 'id-ID';
      recognition.continuous = false;
      recognition.interimResults = false;
      
      recognition.onstart = () => {
        setIsListening(true);
      };
      
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputValue(transcript);
        setIsListening(false);
        // Auto-send setelah speech recognition selesai
        setTimeout(() => {
          if (transcript.trim()) {
            addMessage('user', transcript);
            processUserResponse(transcript);
            setInputValue('');
          }
        }, 500);
      };
      
      recognition.onerror = () => {
        setIsListening(false);
      };
      
      recognition.onend = () => {
        setIsListening(false);
      };
      
      recognition.start();
    } else {
      alert('Browser Anda tidak mendukung speech recognition');
    }
  };

  const renderQuickButtons = () => {
    if (currentStep === 'greeting') {
      return (
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => handleQuickResponse('Ya')}
            className="bg-[#0B7A95] text-white px-4 py-2 rounded-full text-sm hover:bg-[#0a6b85] transition-colors"
          >
            Ya
          </button>
          <button
            onClick={() => handleQuickResponse('Tidak')}
            className="bg-gray-500 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-600 transition-colors"
          >
            Tidak
          </button>
        </div>
      );
    }
    
    if (currentStep === 'jenisKelamin') {
      return (
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => handleQuickResponse('Laki-laki')}
            className="bg-[#0B7A95] text-white px-4 py-2 rounded-full text-sm hover:bg-[#0a6b85] transition-colors"
          >
            Laki-laki
          </button>
          <button
            onClick={() => handleQuickResponse('Perempuan')}
            className="bg-[#0B7A95] text-white px-4 py-2 rounded-full text-sm hover:bg-[#0a6b85] transition-colors"
          >
            Perempuan
          </button>
        </div>
      );
    }
    
    if (currentStep === 'konfirmasi') {
      return (
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => handleQuickResponse('Sesuai')}
            className="bg-[#0B7A95] text-white px-4 py-2 rounded-full text-sm hover:bg-[#0a6b85] transition-colors"
          >
            Sesuai
          </button>
          <button
            onClick={() => handleQuickResponse('Belum sesuai')}
            className="bg-gray-500 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-600 transition-colors"
          >
            Belum sesuai
          </button>
        </div>
      );
    }
    
    return null;
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
          {/* Riwayat */}
          <button className="flex flex-col items-center text-white hover:text-[#0B7A95] transition-colors" onClick={() => window.location.href = '/dashboard-perawat'}>
            <i className="fas fa-clipboard-list text-lg mb-1"></i>
            <span className="text-xs">Riwayat</span>
          </button>
          
          {/* Notifikasi */}
          <button className="flex flex-col items-center text-white hover:text-[#0B7A95] transition-colors" onClick={() => window.location.href = '/notifications-perawat'}>
            <i className="fas fa-bell text-lg mb-1"></i>
            <span className="text-xs">Notifikasi</span>
          </button>
          
          {/* Tutorial */}
          <button className="flex flex-col items-center text-white hover:text-[#0B7A95] transition-colors">
            <i className="fas fa-play-circle text-lg mb-1"></i>
            <span className="text-xs">Tutorial</span>
          </button>
          
          {/* Profil */}
          <button className="flex flex-col items-center text-white hover:text-[#0B7A95] transition-colors" onClick={() => window.location.href = '/profile-perawat'}>
            <i className="fas fa-user text-lg mb-1"></i>
            <span className="text-xs">Profil</span>
          </button>
        </div>
      </header>

      {/* Main Chat Container */}
      <main className="flex-1 px-6 py-6">
        <div className="bg-white rounded-xl shadow-lg h-full flex flex-col max-w-2xl mx-auto">
          {/* Chat Header */}
          <div className="bg-[#0B7A95] text-white p-4 rounded-t-xl flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <i className="fas fa-robot text-[#0B7A95] text-lg"></i>
            </div>
            <div>
              <h3 className="font-semibold">SafeNurse Assistant</h3>
              <p className="text-sm opacity-90">Asisten Pelaporan Insiden</p>
            </div>
          </div>
          
          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4" style={{ maxHeight: 'calc(100vh - 300px)' }}>
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.sender === 'user' 
                    ? 'bg-[#0B7A95] text-white' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {message.timestamp}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Quick Response Buttons */}
          <div className="px-4">
            {renderQuickButtons()}
          </div>
          
          {/* Input Area */}
          {currentStep !== 'end' && (
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Ketik pesan Anda..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0B7A95] focus:border-transparent text-black"
                  />
                </div>
                
                <button
                  onClick={startVoiceRecognition}
                  className={`p-2 rounded-full transition-colors ${
                    isListening 
                      ? 'bg-red-500 text-white' 
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                  title="Rekam Suara"
                >
                  <i className={`fas ${isListening ? 'fa-stop' : 'fa-microphone'}`}></i>
                </button>
                
                <button
                  onClick={handleSendMessage}
                  className="bg-[#0B7A95] text-white p-2 rounded-full hover:bg-[#0a6b85] transition-colors"
                  title="Kirim Pesan"
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}