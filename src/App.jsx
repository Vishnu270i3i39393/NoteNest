import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import StarryBg from './components/StarryBg'
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Notes from './components/Notes'



import { useState, useEffect } from 'react';
function NoteNestLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 bg-opacity-90">
      <span className="inline-block animate-spin-slow">
        <svg width="64" height="64" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl">
          <rect x="7" y="7" width="22" height="22" rx="6" fill="url(#noteGrad)" />
          <path d="M13 16h10M13 20h7" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          <circle cx="26.5" cy="13.5" r="3.5" fill="#fff" />
          <path d="M26.5 10.5l.9 2.1 2.3.2-1.8 1.4.6 2.2-2-1.2-2 1.2.6-2.2-1.8-1.4 2.3-.2.9-2.1z" fill="#facc15" />
          <defs>
            <linearGradient id="noteGrad" x1="7" y1="7" x2="29" y2="29" gradientUnits="userSpaceOnUse">
              <stop stopColor="#06b6d4" />
              <stop offset="1" stopColor="#a78bfa" />
            </linearGradient>
          </defs>
        </svg>
      </span>
    </div>
  );
}



if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  const spinStyle = document.createElement('style');
  spinStyle.innerHTML = `@keyframes spin-slow { 0% { transform: rotate(0deg);} 100% { transform: rotate(360deg);} } .animate-spin-slow { animation: spin-slow 1.2s linear infinite; }`;
  if (!document.head.querySelector('style[data-notenest-spin]')) {
    spinStyle.setAttribute('data-notenest-spin', '');
    document.head.appendChild(spinStyle);
  }
}


function AppRoutes() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [pendingPath, setPendingPath] = useState(null);

  useEffect(() => {
    if (!pendingPath) return;
    setLoading(true);
    const timer = setTimeout(() => {
      navigate(pendingPath);
      setLoading(false);
      setPendingPath(null);
    }, 3000); // Loader visible for 3 seconds
    return () => clearTimeout(timer);
  }, [pendingPath, navigate]);

  const handleNav = (e, path) => {
    e.preventDefault();
    if (location.pathname !== path) {
      setPendingPath(path);
    }
  };

  return (
    <>
      {loading && <NoteNestLoader />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Notes" element={<Notes />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

    </>
  );
}

function App() {
  return (
    <Router>
      <StarryBg />
      <div className="min-h-screen w-full overflow-x-hidden text-white flex flex-col">
        <header className="shadow-lg z-10 sticky top-0 bg-opacity-80 backdrop-blur-md">
          <Navbar />
        </header>
        <main className="flex-1 flex flex-col items-center justify-center p-4">
          <AppRoutes />
        </main>
        <footer className="w-full text-center py-2 bg-gray-900 bg-opacity-80 text-gray-400 text-xs border-t border-gray-800">
          © {new Date().getFullYear()} NoteNest. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
