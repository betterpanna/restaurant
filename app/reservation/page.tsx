// app/reservations/page.tsx
'use client';

import { useState } from 'react';

export default function Reservations() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [occasion, setOccasion] = useState('');
  const [diners, setDiners] = useState(2);
  const [seatingType, setSeatingType] = useState('indoor');

  const availableTimes = ['5:00 pm', '6:00 pm', '7:00 pm', '8:00 pm'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Reservation confirmed for ${selectedDate} at ${selectedTime} for ${diners} people (${seatingType} seating)`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Reservations</h1>
        
        <form onSubmit={handleSubmit}>
          {/* Date Selection */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Date</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>

          {/* Seating Type */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Seating Preference</label>
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => setSeatingType('indoor')}
                className={`px-4 py-2 rounded-md ${seatingType === 'indoor' ? 'bg-amber-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                Indoor
              </button>
              <button
                type="button"
                onClick={() => setSeatingType('outdoor')}
                className={`px-4 py-2 rounded-md ${seatingType === 'outdoor' ? 'bg-amber-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                Outdoor
              </button>
            </div>
          </div>

          {/* Number of Diners */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Number of Diners</label>
            <select
              value={diners}
              onChange={(e) => setDiners(parseInt(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
              ))}
            </select>
          </div>

          {/* Occasion */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Occasion (optional)</label>
            <select
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="">Select an occasion</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="business">Business Dinner</option>
              <option value="date">Date Night</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Time Selection */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Select Time</label>
            <div className="grid grid-cols-2 gap-3">
              {availableTimes.map(time => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTime(time)}
                  className={`p-3 rounded-md text-center ${selectedTime === time ? 'bg-amber-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!selectedDate || !selectedTime}
            className="w-full bg-amber-500 text-white py-3 px-4 rounded-md hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Confirm Reservation
          </button>
        </form>
      </div>
    </div>
  );
}