import React, { useState } from 'react';
import { MapPin, Clock, Star, Users, Calendar, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import EventsModal from '../components/EventsModal';

const Clubs = () => {
  const [selectedClub, setSelectedClub] = useState<string | null>(null);
  const [eventsModalOpen, setEventsModalOpen] = useState(false);
  const [selectedClubName, setSelectedClubName] = useState('');

  const clubs = [
    {
      id: 'club1',
      name: 'Neon Nights',
      location: 'Bandra West, Mumbai',
      timing: '10:00 PM - 4:00 AM',
      rating: 4.8,
      members: 1250,
      events: 12,
      image: '/WhatsApp Image 2025-07-22 at 19.33.05_38a1980c.jpg',
      description: 'Premier nightclub with state-of-the-art sound system and VIP lounges.',
      features: ['Live DJ', 'VIP Tables', 'Cocktail Bar', 'Dance Floor']
    },
    {
      id: 'club2',
      name: 'Pulse Lounge',
      location: 'Andheri West, Mumbai',
      timing: '9:00 PM - 3:00 AM',
      rating: 4.6,
      members: 980,
      events: 8,
      image: '/WhatsApp Image 2025-07-22 at 19.33.05_38a1980c copy.jpg',
      description: 'Trendy lounge bar with rooftop views and international cuisine.',
      features: ['Rooftop Seating', 'International Cuisine', 'Craft Cocktails', 'Live Music']
    },
    {
      id: 'club3',
      name: 'Electric Avenue',
      location: 'Juhu, Mumbai',
      timing: '11:00 PM - 5:00 AM',
      rating: 4.9,
      members: 2100,
      events: 15,
      image: '/WhatsApp Image 2025-07-22 at 19.33.05_38a1980c copy copy.jpg',
      description: 'High-energy club known for its electric atmosphere and celebrity sightings.',
      features: ['Celebrity Events', 'Premium Sound', 'Bottle Service', 'Private Rooms']
    },
    {
      id: 'club4',
      name: 'Skyline Bar',
      location: 'Worli, Mumbai',
      timing: '8:00 PM - 2:00 AM',
      rating: 4.7,
      members: 750,
      events: 6,
      image: '/WhatsApp Image 2025-07-22 at 19.33.05_38a1980c.jpg',
      description: 'Sophisticated rooftop bar with panoramic city views.',
      features: ['City Views', 'Wine Bar', 'Tapas Menu', 'Jazz Nights']
    },
    {
      id: 'club5',
      name: 'Bass Drop',
      location: 'Khar West, Mumbai',
      timing: '10:30 PM - 4:30 AM',
      rating: 4.5,
      members: 890,
      events: 10,
      image: '/WhatsApp Image 2025-07-22 at 19.33.05_38a1980c copy.jpg',
      description: 'Electronic music paradise with immersive light shows.',
      features: ['EDM Focus', 'Light Shows', 'Beer Garden', 'Food Trucks']
    },
    {
      id: 'club6',
      name: 'Velvet Room',
      location: 'Colaba, Mumbai',
      timing: '9:30 PM - 3:30 AM',
      rating: 4.8,
      members: 1100,
      events: 9,
      image: '/WhatsApp Image 2025-07-22 at 19.33.05_38a1980c copy copy.jpg',
      description: 'Luxury club with velvet interiors and exclusive membership.',
      features: ['Luxury Interiors', 'Exclusive Membership', 'Champagne Service', 'Private Events']
    }
  ];

  const handleRegisterInterest = (clubId: string) => {
    setSelectedClub(clubId);
    // TODO: Add registration logic here
    console.log(`Registering interest for club: ${clubId}`);
  };

  const handleEventsClick = (clubName: string) => {
    setSelectedClubName(clubName);
    setEventsModalOpen(true);
  };

  return (
    <div className="relative z-10 pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 animate-fade-in-up">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Discover Clubs
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore the hottest clubs in Mumbai. Find your perfect nightlife destination with detailed information, photos, and easy registration.
          </p>
        </div>
      </section>

      {/* Clubs Grid */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clubs.map((club) => (
              <div
                key={club.id}
                className="bg-gray-800/50 border border-gray-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Club Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={club.image}
                    alt={club.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm font-medium">{club.rating}</span>
                  </div>
                </div>

                {/* Club Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {club.name}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {club.description}
                  </p>

                  {/* Location & Timing */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-300">
                        <MapPin className="w-4 h-4 text-blue-400" />
                        <span className="text-sm">{club.location}</span>
                      </div>
                      {/* Events Button */}
                      <motion.button
                        onClick={() => handleEventsClick(club.name)}
                        className="relative px-3 py-1 text-xs font-medium text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full hover:from-blue-500/40 hover:to-purple-500/40 transition-all duration-300 group/events"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          Events
                        </div>
                        {/* Glowing pointer effect */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-pink-400/20 blur-sm opacity-0 group-hover/events:opacity-100 transition-opacity duration-300" />
                      </motion.button>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Clock className="w-4 h-4 text-green-400" />
                      <span className="text-sm">{club.timing}</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1 text-gray-400">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{club.members.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{club.events} events</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {club.features.slice(0, 3).map((feature, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30"
                      >
                        {feature}
                      </span>
                    ))}
                    {club.features.length > 3 && (
                      <span className="px-2 py-1 bg-gray-600/50 text-gray-400 text-xs rounded-full">
                        +{club.features.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Register Button */}
                  <button
                    onClick={() => handleRegisterInterest(club.id)}
                    className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-gray-800 transform hover:scale-105"
                  >
                    Register Interest
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-blue-800/30 to-purple-800/30 rounded-3xl p-12 border border-blue-600/30 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Ready for the Night?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Register your interest in any club and get notified about upcoming events, special offers, and exclusive access.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Explore All Clubs
            </button>
          </div>
        </div>
      </section>

      {/* Events Modal */}
      <EventsModal
        isOpen={eventsModalOpen}
        onClose={() => setEventsModalOpen(false)}
        clubName={selectedClubName}
      />
    </div>
  );
};

export default Clubs; 