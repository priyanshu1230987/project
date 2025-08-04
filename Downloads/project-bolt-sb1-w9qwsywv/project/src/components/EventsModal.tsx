import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Star, Users, Clock, MapPin } from 'lucide-react';

interface EventsModalProps {
  isOpen: boolean;
  onClose: () => void;
  clubName: string;
}

const EventsModal: React.FC<EventsModalProps> = ({ isOpen, onClose, clubName }) => {
  const events = [
    {
      id: 1,
      name: 'Premium Artist Nights',
      date: 'Every Friday',
      time: '11:00 PM - 4:00 AM',
      description: 'Live performances by top artists and DJs',
      price: '₹1500',
      attendees: 250,
      rating: 4.9,
      category: 'Music',
      featured: true
    },
    {
      id: 2,
      name: 'Glow Parties',
      date: 'Every Saturday',
      time: '10:00 PM - 3:00 AM',
      description: 'Neon lights, glow sticks, and electric atmosphere',
      price: '₹1200',
      attendees: 180,
      rating: 4.7,
      category: 'Party',
      featured: false
    },
    {
      id: 3,
      name: 'Costume Nights',
      date: 'Last Saturday of Month',
      time: '9:00 PM - 2:00 AM',
      description: 'Dress up in your favorite costumes and win prizes',
      price: '₹1000',
      attendees: 120,
      rating: 4.6,
      category: 'Theme',
      featured: false
    },
    {
      id: 4,
      name: 'Cultural Fusion',
      date: 'Every Sunday',
      time: '8:00 PM - 1:00 AM',
      description: 'Blend of traditional and modern music',
      price: '₹800',
      attendees: 90,
      rating: 4.5,
      category: 'Cultural',
      featured: false
    },
    {
      id: 5,
      name: 'College Tie-Ups',
      date: 'Every Wednesday',
      time: '9:00 PM - 2:00 AM',
      description: 'Special discounts for college students',
      price: '₹600',
      attendees: 200,
      rating: 4.4,
      category: 'Student',
      featured: false
    },
    {
      id: 6,
      name: 'Ladies Night',
      date: 'Every Tuesday',
      time: '8:00 PM - 1:00 AM',
      description: 'Free entry for ladies, special cocktails',
      price: '₹500',
      attendees: 150,
      rating: 4.8,
      category: 'Ladies',
      featured: true
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Music: 'from-purple-500 to-pink-500',
      Party: 'from-blue-500 to-cyan-500',
      Theme: 'from-green-500 to-emerald-500',
      Cultural: 'from-orange-500 to-red-500',
      Student: 'from-indigo-500 to-purple-500',
      Ladies: 'from-pink-500 to-rose-500'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden bg-gray-900/95 border border-gray-700/50 rounded-3xl backdrop-blur-xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="relative p-6 border-b border-gray-700/50">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Events at {clubName}
                  </h2>
                  <p className="text-gray-400 mt-1">Discover amazing events and experiences</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {events.map((event, index) => (
                  <motion.div
                    key={event.id}
                    className="group relative bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Featured Badge */}
                    {event.featured && (
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                        FEATURED
                      </div>
                    )}

                    {/* Event Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                          {event.name}
                        </h3>
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-2 py-1 bg-gradient-to-r ${getCategoryColor(event.category)} text-white text-xs font-medium rounded-full`}>
                            {event.category}
                          </span>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-yellow-400 fill-current" />
                            <span className="text-xs text-gray-300">{event.rating}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                          {event.price}
                        </div>
                        <div className="text-xs text-gray-400">per person</div>
                      </div>
                    </div>

                    {/* Event Details */}
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {event.description}
                    </p>

                    {/* Event Info */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 text-blue-400" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Clock className="w-4 h-4 text-green-400" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Users className="w-4 h-4 text-purple-400" />
                        <span>{event.attendees} attendees</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-gray-800 transform hover:scale-105">
                      Book Event
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-700/50 bg-gray-800/30">
              <div className="text-center">
                <p className="text-gray-400 text-sm">
                  All events are subject to availability. Book early to secure your spot!
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EventsModal; 