// app/reservations/page.tsx
'use client';

import { useState } from 'react';

export default function Reservations() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [occasion, setOccasion] = useState('');
  const [diners, setDiners] = useState(2);
  const [seatingType, setSeatingType] = useState('indoor');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const availableTimes = ['5:00 pm', '6:00 pm', '7:00 pm', '8:00 pm', '9:00 pm'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    alert(`Reservation confirmed for ${selectedDate} at ${selectedTime} for ${diners} people (${seatingType} seating)`);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3">
            Make a Reservation
          </h1>
          <p className="text-gray-600 max-w-md mx-auto">
            Secure your table at our exclusive restaurant for an unforgettable dining experience
          </p>
        </div>
        
        {/* Reservation Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Date Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reservation Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                  <div className="absolute right-3 top-3 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Seating Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Seating Preference
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSeatingType('indoor')}
                    className={`p-4 rounded-xl border transition-all duration-200 flex items-center justify-center space-x-2 ${
                      seatingType === 'indoor' 
                        ? 'bg-blue-50 border-blue-500 text-blue-700 shadow-sm' 
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span>Indoor</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSeatingType('outdoor')}
                    className={`p-4 rounded-xl border transition-all duration-200 flex items-center justify-center space-x-2 ${
                      seatingType === 'outdoor' 
                        ? 'bg-green-50 border-green-500 text-green-700 shadow-sm' 
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A1.5 1.5 0 013 15.546V5a1 1 0 011-1h16a1 1 0 011 1v10.546z" />
                    </svg>
                    <span>Outdoor</span>
                  </button>
                </div>
              </div>

              {/* Number of Diners */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Party Size
                </label>
                <div className="relative">
                  <select
                    value={diners}
                    onChange={(e) => setDiners(parseInt(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none transition-all duration-200"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-3 pointer-events-none text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Occasion */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Occasion (optional)
                </label>
                <div className="relative">
                  <select
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none transition-all duration-200"
                  >
                    <option value="">Select an occasion</option>
                    <option value="birthday">Birthday Celebration</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="business">Business Dinner</option>
                    <option value="date">Date Night</option>
                    <option value="other">Other Celebration</option>
                  </select>
                  <div className="absolute right-3 top-3 pointer-events-none text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Time Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {availableTimes.map(time => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 rounded-xl border text-center transition-all duration-200 ${
                        selectedTime === time 
                          ? 'bg-blue-500 border-blue-500 text-white shadow-md transform scale-105' 
                          : 'border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!selectedDate || !selectedTime || isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 px-4 rounded-xl hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                    Confirm Reservation
                  </>
                )}
              </button>
            </form>
          </div>
          
          {/* Footer */}
          <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
            <p className="text-xs text-gray-500 text-center">
              Need assistance? Call us at <a href="tel:+15551234567" className="text-blue-600 hover:underline">(555) 123-4567</a>
            </p>
          </div>
        </div>
        
        {/* Additional Info */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Reservations are held for 15 minutes past the reserved time</p>
          <p className="mt-1">Large parties of 8+ may require 24 hours notice for cancellation</p>
        </div>
      </div>
    </div>
  );
}