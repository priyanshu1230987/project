import React, { useState } from 'react';
import { Shirt, Car, Bed, Users, Sparkles, MapPin, Clock, Star } from 'lucide-react';

const OtherFacilities = () => {
  const [activeTab, setActiveTab] = useState('fashion');

  const facilities = [
    {
      id: 'fashion',
      title: 'Fashion Rental',
      icon: <Shirt className="w-6 h-6" />,
      color: 'purple'
    },
    {
      id: 'ride',
      title: 'Discounted Ride',
      icon: <Car className="w-6 h-6" />,
      color: 'green'
    },
    {
      id: 'room',
      title: 'Room Booking',
      icon: <Bed className="w-6 h-6" />,
      color: 'pink'
    }
  ];

  const fashionItems = {
    men: [
      { name: 'Premium Blazer', price: '₹500/night' },
      { name: 'Designer Shirt', price: '₹300/night' },
      { name: 'Formal Pants', price: '₹250/night' },
      { name: 'Luxury Watch', price: '₹400/night' }
    ],
    women: [
      { name: 'Evening Dress', price: '₹600/night' },
      { name: 'Designer Heels', price: '₹350/night' },
      { name: 'Jewelry Set', price: '₹450/night' },
      { name: 'Clutch Bag', price: '₹200/night' }
    ]
  };

  return (
    <div className="relative z-10 pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 animate-fade-in-up">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Other Facilities
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Complete your nightlife experience with our premium services - from fashion to transportation to accommodation.
          </p>
        </div>
      </section>

      {/* Facility Tabs */}
      <section className="py-10 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {facilities.map((facility) => (
              <button
                key={facility.id}
                onClick={() => setActiveTab(facility.id)}
                className={`relative px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === facility.id
                    ? 'text-white bg-gradient-to-r from-purple-600 to-pink-600'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {facility.icon}
                {facility.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Fashion Rental Section */}
      {activeTab === 'fashion' && (
        <section className="py-10 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Premium Fashion Rental
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Look your best with our unique designer clothing collection. Available near partner clubs for your convenience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Men's Section */}
              <div className="bg-gradient-to-br from-blue-800/20 to-blue-900/20 rounded-3xl p-8 border border-blue-600/30 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-8 h-8 text-blue-400" />
                  <h3 className="text-2xl font-bold text-white">Men's Collection</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {fashionItems.men.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
                    >
                      <div className="w-full h-32 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg mb-3 flex items-center justify-center">
                        <Shirt className="w-8 h-8 text-blue-400" />
                      </div>
                      <h4 className="font-semibold text-white text-sm mb-1">{item.name}</h4>
                      <p className="text-blue-400 text-sm font-medium">{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Women's Section */}
              <div className="bg-gradient-to-br from-pink-800/20 to-pink-900/20 rounded-3xl p-8 border border-pink-600/30 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-8 h-8 text-pink-400" />
                  <h3 className="text-2xl font-bold text-white">Women's Collection</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {fashionItems.women.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50 hover:border-pink-400/50 transition-all duration-300 hover:scale-105"
                    >
                      <div className="w-full h-32 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg mb-3 flex items-center justify-center">
                        <Sparkles className="w-8 h-8 text-pink-400" />
                      </div>
                      <h4 className="font-semibold text-white text-sm mb-1">{item.name}</h4>
                      <p className="text-pink-400 text-sm font-medium">{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Discounted Ride Section */}
      {activeTab === 'ride' && (
        <section className="py-10 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Discounted Taxi Service
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Automatic popup after booking club entry. Get to the club safely with special rates.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Car className="w-12 h-12 text-green-400" />,
                  title: "Auto Popup",
                  desc: "Taxi option appears automatically after club booking"
                },
                {
                  icon: <MapPin className="w-12 h-12 text-blue-400" />,
                  title: "Direct Route",
                  desc: "GPS-optimized route directly to your chosen club"
                },
                {
                  icon: <Star className="w-12 h-12 text-purple-400" />,
                  title: "Special Rates",
                  desc: "Up to 30% discount on regular taxi fares"
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-2xl border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 backdrop-blur-sm text-center hover:-translate-y-2"
                >
                  <div className="mb-6 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-br from-green-800/20 to-green-900/20 rounded-3xl p-8 border border-green-600/30 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-center mb-6 text-white">How It Works</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { step: "1", title: "Book Entry", desc: "Complete club entry booking" },
                  { step: "2", title: "Popup Appears", desc: "Taxi option shows automatically" },
                  { step: "3", title: "Choose Ride", desc: "Select if you want discounted taxi" },
                  { step: "4", title: "Reach Club", desc: "Arrive safely at your destination" }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-lg font-bold mb-3 mx-auto">
                      {item.step}
                    </div>
                    <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Room Booking Section */}
      {activeTab === 'room' && (
        <section className="py-10 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Discounted Room Booking
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                After 5-6 hours of clubbing, get popup for discounted room booking. Perfect end to your night.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">Smart Timing System</h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: <Clock className="w-6 h-6 text-pink-400" />,
                      title: "Auto Detection",
                      desc: "System tracks your club time automatically"
                    },
                    {
                      icon: <Bed className="w-6 h-6 text-purple-400" />,
                      title: "Room Popup",
                      desc: "Notification appears after 5-6 hours of clubbing"
                    },
                    {
                      icon: <Star className="w-6 h-6 text-blue-400" />,
                      title: "High Discount",
                      desc: "Up to 40% off on premium hotel rooms"
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-gray-800/30 rounded-xl border border-gray-700/50"
                    >
                      {item.icon}
                      <div>
                        <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-800/20 to-purple-800/20 rounded-3xl p-8 border border-pink-600/30 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-6 text-white text-center">Available Room Types</h3>
                <div className="space-y-4">
                  {[
                    { type: "Standard Room", price: "₹2,000", discount: "40% OFF" },
                    { type: "Deluxe Room", price: "₹3,500", discount: "35% OFF" },
                    { type: "Suite", price: "₹5,000", discount: "30% OFF" }
                  ].map((room, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-pink-400/50 transition-all duration-300 hover:scale-102"
                    >
                      <div className="flex items-center gap-3">
                        <Bed className="w-6 h-6 text-pink-400" />
                        <span className="text-white font-medium">{room.type}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-pink-400 font-bold">{room.price}</div>
                        <div className="text-green-400 text-sm">{room.discount}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 rounded-3xl p-12 border border-purple-600/30 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Complete Nightlife Experience
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              From entry to accommodation - everything you need for the perfect night out.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Experience All Facilities
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OtherFacilities;