import React from 'react';
import { Shield, Users, Clock, Star, CheckCircle, Zap } from 'lucide-react';

const AboutClub = () => {
  return (
    <div className="relative z-10 pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 animate-fade-in-up">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About ClubPass
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing club entries with guaranteed access, transparent pricing, and complete nightlife solutions.
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              The Current Problem
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Traditional club entry system is broken and unfair to customers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="w-8 h-8 text-red-400" />,
                title: "Double Pricing",
                desc: "Promoters charge 2x the actual club entry price, making nights expensive"
              },
              {
                icon: <Shield className="w-8 h-8 text-red-400" />,
                title: "No Guarantee",
                desc: "Pay money to promoters but still risk getting denied entry at the door"
              },
              {
                icon: <Clock className="w-8 h-8 text-red-400" />,
                title: "Time Waste",
                desc: "Long negotiations with promoters and uncertain outcomes every time"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 hover:border-red-400/50 transition-all duration-300 backdrop-blur-sm">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900/10 to-purple-900/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Our Solution
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              ClubPass eliminates all these problems with a revolutionary approach.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-8 text-white">How ClubPass Works</h3>
              <div className="space-y-6">
                {[
                  "Register once with your details (age 18+, preferences, etc.)",
                  "Book club entry and receive instant QR code confirmation",
                  "Walk directly into the club - scan QR and enter",
                  "Access additional services through our platform"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <p className="text-gray-300 text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl flex items-center justify-center border border-blue-500/30 backdrop-blur-sm">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                      <span className="text-3xl font-bold text-white">QR</span>
                    </div>
                    <p className="text-blue-300 font-semibold">Your Entry Pass</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Win-Win Partnership
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Benefits for both customers and club partners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Customer Benefits */}
            <div className="bg-gradient-to-br from-blue-800/20 to-blue-900/20 rounded-3xl p-8 border border-blue-600/30 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-blue-400" />
                <h3 className="text-2xl font-bold text-white">For Customers</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Fair & transparent pricing - no hidden fees",
                  "100% guaranteed club entry with QR verification",
                  "Complete nightlife package in one platform",
                  "No dependency on unreliable promoters",
                  "Premium experience with additional services"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Club Benefits */}
            <div className="bg-gradient-to-br from-green-800/20 to-green-900/20 rounded-3xl p-8 border border-green-600/30 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-8 h-8 text-green-400" />
                <h3 className="text-2xl font-bold text-white">For Clubs</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Guaranteed 20-25 customers daily through our platform",
                  "Reliable and predictable customer flow",
                  "Partnership accountability with performance metrics",
                  "Digital verification system for seamless entry",
                  "Reduced marketing costs and promoter dependencies"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Building */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900/10 to-pink-900/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Built on Trust & Accountability
          </h2>
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-3xl p-8 border border-gray-700/30 backdrop-blur-sm">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              We guarantee 20-25 customers daily to our partner clubs. If we don't deliver, 
              clubs can deduct from our payments. This accountability ensures reliable service 
              and builds lasting partnerships.
            </p>
            <div className="flex items-center justify-center gap-2 text-green-400">
              <Shield className="w-6 h-6" />
              <span className="font-semibold">Performance Guaranteed</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutClub;