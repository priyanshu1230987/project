import React, { useState } from 'react';
import { Shield, ArrowRight, Zap, Users, CheckCircle, Building } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ClubMemberModal from '../components/ClubMemberModal';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  const [showPremium, setShowPremium] = useState(false);
  const [isClubMemberModalOpen, setIsClubMemberModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  // Parallax transforms
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);
  const featuresY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  const howItWorksY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);

  const handleClubMemberClick = () => {
    setIsClubMemberModalOpen(true);
  };

  return (
    <div className="relative z-10 pt-20">
      {/* Hero Section */}
      <motion.section 
        className="min-h-screen flex items-center justify-center px-6 animate-fade-in-up"
        style={{ y: heroY }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Club!n
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Skip the promoter hassles. Get guaranteed club entry with complete transparency.
            <br />
            <span className="text-blue-400">The future of nightlife is here.</span>
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.button
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
              onClick={() => setCurrentPage('registration')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Club Entry
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              className="border border-white/30 hover:border-white/50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-white/5"
              onClick={() => setCurrentPage('about-club')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Preview */}
      <motion.section 
        className="py-20 px-6"
        style={{ y: featuresY }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Why Choose Club!n?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12 text-blue-400" />,
                title: "Guaranteed Entry",
                desc: "100% sure entry with QR verification. No more rejections.",
                color: "blue"
              },
              {
                icon: <Zap className="w-12 h-12 text-green-400" />,
                title: "Fair Pricing",
                desc: "Transparent pricing. No hidden fees or promoter markups.",
                color: "green"
              },
              {
                icon: <Users className="w-12 h-12 text-purple-400" />,
                title: "Complete Package",
                desc: "Entry, transport, clothing, and accommodation - all in one.",
                color: "purple"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="group hover:-translate-y-2 transition-transform duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-2xl border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 backdrop-blur-sm">
                  <motion.div 
                    className="mb-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* How It Works */}
      <motion.section 
        className="py-20 px-6 bg-gradient-to-r from-blue-900/10 to-purple-900/10"
        style={{ y: howItWorksY }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              How It Works
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Register", desc: "Fill your details once" },
              { step: "2", title: "Book Entry", desc: "Choose club & get QR code" },
              { step: "3", title: "Scan & Enter", desc: "Direct entry with QR scan" },
              { step: "4", title: "Enjoy", desc: "Access all club facilities" }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {item.step}
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 rounded-3xl p-12 border border-purple-600/30 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Ready to Experience<br />Hassle-Free Club Entry?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands who've already made the switch to guaranteed club access.
            </p>
            
            <motion.button
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              onClick={() => setShowPremium(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Now
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="py-12 px-6 bg-gradient-to-r from-gray-900/50 to-black/50 border-t border-gray-800/50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Left side - Company info */}
            <motion.div 
              className="mb-6 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/WhatsApp Image 2025-07-22 at 19.33.05_38a1980c.jpg" 
                  alt="Club!n Logo" 
                  className="w-8 h-8 rounded-full object-cover border border-blue-500/50"
                />
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Club!n
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                The future of nightlife is here.
              </p>
            </motion.div>

            {/* Right side - Navigation links */}
            <motion.div
              className="flex items-center gap-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => setCurrentPage('about-club')}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => setCurrentPage('clubs')}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Clubs
              </button>
              <button
                onClick={() => setCurrentPage('club-member')}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Club Member
              </button>
            </motion.div>
          </div>

          {/* Bottom section */}
          <motion.div 
            className="mt-8 pt-8 border-t border-gray-800/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <div className="mb-4 md:mb-0">
                © 2024 Club!n. All rights reserved.
              </div>
              <div className="flex gap-6">
                <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.footer>

      {/* Premium Modal */}
      {showPremium && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-gradient-to-br from-blue-900/90 to-purple-900/90 rounded-3xl p-10 border border-blue-600/50 shadow-2xl max-w-md w-full text-center relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <motion.button
              onClick={() => setShowPremium(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ✕
            </motion.button>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Premium Features Coming Soon!
            </h3>
            <p className="text-gray-300 mb-6">
              Get ready for exclusive VIP access, priority bookings, and premium club experiences.
            </p>
            <motion.button
              onClick={() => setShowPremium(false)}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-6 py-3 rounded-full font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Stay Tuned
            </motion.button>
          </motion.div>
        </motion.div>
      )}

      {/* Club Member Modal */}
      <ClubMemberModal
        isOpen={isClubMemberModalOpen}
        onClose={() => setIsClubMemberModalOpen(false)}
      />
    </div>
  );
};

export default Home;