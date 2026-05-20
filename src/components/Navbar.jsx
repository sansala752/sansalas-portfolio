import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-white/70 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* Gradient icon blob */}
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #a855f7, #ec4899)',
            }}
          >
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="text-gray-900 font-semibold text-lg tracking-tight">
            Sansala Ranasinghe
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Experience', 'Projects', 'Skills', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button
          className="text-sm font-semibold px-5 py-2.5 rounded-full text-white transition-all duration-200 hover:opacity-90 active:scale-95"
          style={{
            background: 'linear-gradient(135deg, #a855f7, #ec4899)',
          }}
        >
          Get in touch
        </button>
      </div>
    </nav>
  );
}