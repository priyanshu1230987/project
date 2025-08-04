import React, { useState } from 'react';
import { User, Calendar, Users, MapPin, Phone, Mail, QrCode, CheckCircle, CreditCard } from 'lucide-react';

const Registration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    gender: '',
    groupType: '',
    clubPreference: '',
    dressCode: '',
    entryDate: '',
    entryTime: ''
  });
  const [showQR, setShowQR] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowQR(true);
  };

  const generateDiscountCode = () => {
    return `CLUB${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
  };

  return (
    <div className="relative z-10 pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 animate-fade-in-up">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get Your Club Entry
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Fill in your details once and get guaranteed entry to premium clubs with our QR verification system.
          </p>
        </div>
      </section>

      {!showQR ? (
        <section className="py-10 px-6">
          <div className="max-w-2xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                {[1, 2, 3].map((stepNum) => (
                  <div
                    key={stepNum}
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                      step >= stepNum
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                        : 'bg-gray-700 text-gray-400'
                    }`}
                  >
                    {stepNum}
                  </div>
                ))}
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-sm">
              {/* Step 1: Personal Information */}
              {step === 1 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                    <User className="w-6 h-6 text-blue-400" />
                    Personal Information
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:border-blue-400 focus:outline-none transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Age *</label>
                      <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        required
                        min="18"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:border-blue-400 focus:outline-none transition-colors"
                        placeholder="Must be 18+"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:border-blue-400 focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:border-blue-400 focus:outline-none transition-colors"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Gender *</label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:border-blue-400 focus:outline-none transition-colors"
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Group Type *</label>
                      <select
                        name="groupType"
                        value={formData.groupType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:border-blue-400 focus:outline-none transition-colors"
                      >
                        <option value="">Select Type</option>
                        <option value="single">Single</option>
                        <option value="couple">Couple</option>
                        <option value="group">Group (3+)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Club Preferences */}
              {step === 2 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-purple-400" />
                    Club Preferences
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Preferred Club *</label>
                      <select
                        name="clubPreference"
                        value={formData.clubPreference}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:border-blue-400 focus:outline-none transition-colors"
                      >
                        <option value="">Select Club</option>
                        <option value="club-azure">Club Azure - Premium</option>
                        <option value="neon-nights">Neon Nights - Electronic</option>
                        <option value="velvet-lounge">Velvet Lounge - VIP</option>
                        <option value="pulse-club">Pulse Club - Dance</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Dress Code Preference</label>
                      <select
                        name="dressCode"
                        value={formData.dressCode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:border-blue-400 focus:outline-none transition-colors"
                      >
                        <option value="">Select Preference</option>
                        <option value="formal">Formal Attire</option>
                        <option value="smart-casual">Smart Casual</option>
                        <option value="party-wear">Party Wear</option>
                        <option value="rental-needed">Need Rental Clothing</option>
                      </select>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-300 mb-2 font-medium">Entry Date *</label>
                        <input
                          type="date"
                          name="entryDate"
                          value={formData.entryDate}
                          onChange={handleInputChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:border-blue-400 focus:outline-none transition-colors"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-300 mb-2 font-medium">Preferred Time *</label>
                        <select
                          name="entryTime"
                          value={formData.entryTime}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:border-blue-400 focus:outline-none transition-colors"
                        >
                          <option value="">Select Time</option>
                          <option value="8:00 PM">8:00 PM</option>
                          <option value="9:00 PM">9:00 PM</option>
                          <option value="10:00 PM">10:00 PM</option>
                          <option value="11:00 PM">11:00 PM</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Payment & Confirmation */}
              {step === 3 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                    <CreditCard className="w-6 h-6 text-green-400" />
                    Payment & Confirmation
                  </h2>
                  
                  <div className="bg-gradient-to-br from-blue-800/20 to-purple-800/20 rounded-2xl p-6 border border-blue-600/30 mb-6">
                    <h3 className="text-lg font-bold text-white mb-4">Booking Summary</h3>
                    <div className="space-y-2 text-gray-300">
                      <div className="flex justify-between">
                        <span>Club:</span>
                        <span className="text-blue-400">{formData.clubPreference || 'Not selected'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Date:</span>
                        <span className="text-blue-400">{formData.entryDate || 'Not selected'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time:</span>
                        <span className="text-blue-400">{formData.entryTime || 'Not selected'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Group Type:</span>
                        <span className="text-blue-400">{formData.groupType || 'Not selected'}</span>
                      </div>
                      <hr className="border-gray-600 my-3" />
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total Amount:</span>
                        <span className="text-green-400">₹1,500</span>
                      </div>
                      <div className="text-sm text-green-400">
                        Discount Code: {generateDiscountCode()} (Applied)
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-800/20 to-green-900/20 rounded-2xl p-6 border border-green-600/30">
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                      <h3 className="text-lg font-bold text-white">What You Get</h3>
                    </div>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        100% Guaranteed Club Entry
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        QR Code for Direct Entry
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        Access to Additional Services
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        24/7 Customer Support
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 border border-gray-600 rounded-xl text-gray-300 hover:text-white hover:border-gray-500 transition-colors"
                  >
                    Previous
                  </button>
                )}
                
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="ml-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="ml-auto px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl text-white font-semibold hover:from-green-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
                  >
                    Complete Booking
                  </button>
                )}
              </div>
            </form>
          </div>
        </section>
      ) : (
        /* QR Code Success Section */
        <section className="py-20 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gradient-to-br from-green-800/30 to-green-900/30 rounded-3xl p-12 border border-green-600/30 backdrop-blur-sm">
              <div className="w-32 h-32 bg-gradient-to-r from-green-400 to-blue-400 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <QrCode className="w-16 h-16 text-white" />
              </div>
              
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Booking Confirmed!
              </h2>
              
              <p className="text-lg text-gray-300 mb-6">
                Your club entry is guaranteed. Show this QR code at the club entrance.
              </p>
              
              <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 mb-6">
                <h3 className="font-bold text-white mb-3">Booking Details</h3>
                <div className="text-left space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Booking ID:</span>
                    <span className="text-green-400 font-mono">CP{Math.random().toString(36).substr(2, 8).toUpperCase()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Club:</span>
                    <span className="text-blue-400">{formData.clubPreference}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Date & Time:</span>
                    <span className="text-blue-400">{formData.entryDate} at {formData.entryTime}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-xl text-white font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300">
                  Download QR Code
                </button>
                <button className="border border-gray-600 px-6 py-3 rounded-xl text-gray-300 hover:text-white hover:border-gray-500 transition-colors">
                  Send to WhatsApp
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Registration;