import React, { useContext } from 'react'


const LoaderNavContext = React.createContext();

const Navbar = () => {
  const handleNav = useContext(LoaderNavContext);
  return (
    <nav className="bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800 shadow-xl m-0 sticky top-0 z-20 border-b border-cyan-700/60 backdrop-blur-lg fixed">
      <ul className="flex items-center justify-end space-x-8 md:space-x-12 px-2 md:px-8 py-1.5 md:py-2 m-0 relative">
        
        <a href="/" onClick={e => handleNav(e, '/')} className="flex items-center mr-auto group select-none relative">

          <span className="inline-block mr-2 relative">
            <span className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-500 opacity-40 blur-md animate-pulse z-0"></span>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg group-hover:scale-110 transition-transform duration-200 relative z-10">
              <rect x="7" y="7" width="22" height="22" rx="6" fill="url(#noteGrad)"/>
              <path d="M13 16h10M13 20h7" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="26.5" cy="13.5" r="3.5" fill="#fff"/>
              <path d="M26.5 10.5l.9 2.1 2.3.2-1.8 1.4.6 2.2-2-1.2-2 1.2.6-2.2-1.8-1.4 2.3-.2.9-2.1z" fill="#facc15"/>
              <defs>
                <linearGradient id="noteGrad" x1="7" y1="7" x2="29" y2="29" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#06b6d4"/>
                  <stop offset="1" stopColor="#a78bfa"/>
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="font-extrabold text-2xl md:text-3xl tracking-wide bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-cyan-400 transition-colors duration-200 drop-shadow-lg">NoteNest</span>
        </a>
        <a href="/" onClick={e => handleNav(e, '/')} className="px-4 py-1.5 rounded-xl font-bold text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-500/30 hover:to-purple-500/30 hover:text-white shadow-sm transition-all duration-200 border border-transparent hover:border-cyan-400/40">Home</a>
        <a href="/Notes" onClick={e => handleNav(e, '/Notes')} className="px-4 py-1.5 rounded-xl font-bold text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-500/30 hover:to-purple-500/30 hover:text-white shadow-sm transition-all duration-200 border border-transparent hover:border-cyan-400/40">Notes</a>
        <a href="/About" onClick={e => handleNav(e, '/About')} className="px-4 py-1.5 rounded-xl font-bold text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-500/30 hover:to-purple-500/30 hover:text-white shadow-sm transition-all duration-200 border border-transparent hover:border-cyan-400/40">About</a>
        <a href="/Contact" onClick={e => handleNav(e, '/Contact')} className="px-4 py-1.5 rounded-xl font-bold text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-500/30 hover:to-purple-500/30 hover:text-white shadow-sm transition-all duration-200 border border-transparent hover:border-cyan-400/40">Contact</a>
      </ul>
    </nav>
  )
}

export { LoaderNavContext };
export default Navbar;