import React, { useState } from 'react';
import { Menu, X, LogIn } from 'lucide-react';
import LoginModal from './LoginModal';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about-club', label: 'About Club' },
    { id: 'clubs', label: 'Clubs' },
    { id: 'club-member', label: 'Club Member' } // Changed from 'registration' to 'club-member'
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setIsMenuOpen(false);
  };

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800/50 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <img 
                src="/WhatsApp Image 2025-07-22 at 19.33.05_38a1980c.jpg" 
                alt="Club!n Logo" 
                className="w-10 h-10 rounded-full object-cover border-2 border-blue-500/50"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Club!n
              </span>
              <span className="block text-lg font-[cursive] italic text-blue-200 mt-1 typing-effect">
                Get in With Clubin
              </span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                    currentPage === item.id
                      ? 'text-blue-400 bg-blue-500/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* Login Button */}
              <button
                onClick={handleLoginClick}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              >
                <LogIn className="w-4 h-4" />
                Login
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-800/50">
              <div className="flex flex-col gap-2 pt-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-4 py-3 rounded-lg transition-all duration-300 text-left ${
                      currentPage === item.id
                        ? 'text-blue-400 bg-blue-500/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}

                {/* Mobile Login Button */}
                <button
                  onClick={handleLoginClick}
                  className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg transition-all duration-300 mt-2"
                >
                  <LogIn className="w-4 h-4" />
                  Login
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
};

export default Header;