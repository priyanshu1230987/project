import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Home from './pages/Home';
import AboutClub from './pages/AboutClub';
import Clubs from './pages/Clubs';
import ClubMemberModal from './components/ClubMemberModal';
import BackgroundOverlay from './components/BackgroundOverlay';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isClubMemberModalOpen, setIsClubMemberModalOpen] = useState(false);

  const renderPage = () => {
    switch(currentPage) {
      case 'about-club':
        return <AboutClub />;
      case 'clubs':
        return <Clubs />;
      case 'club-member':
        // Open Club Member modal instead of rendering a page
        setIsClubMemberModalOpen(true);
        setCurrentPage('home'); // Return to home page
        return <Home setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <BackgroundOverlay />
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="relative z-10">
        {renderPage()}
      </main>

      {/* Club Member Modal */}
      <ClubMemberModal
        isOpen={isClubMemberModalOpen}
        onClose={() => setIsClubMemberModalOpen(false)}
      />
    </div>
  );
}

export default App;


