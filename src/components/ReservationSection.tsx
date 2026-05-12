import React, { useState } from 'react';
import { Calendar, Clock, Users } from 'lucide-react';

export function ReservationSection() {
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would make an API call
    setStatus('success');
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="reservations" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative h-[600px] rounded-3xl overflow-hidden hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000"
              alt="Restaurant Interior"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gray-900/20" />
          </div>

          {/* Form Side */}
          <div>
            <div className="mb-10">
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Book a Table</h2>
              <p className="text-lg text-gray-600">
                Reserve your spot to enjoy the finest Somali cuisine in a vibrant atmosphere.
              </p>
            </div>

            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                <h3 className="text-green-800 font-bold text-lg mb-2">Reservation Request Sent!</h3>
                <p className="text-green-700">We will contact you shortly to confirm your booking.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="date"
                        required
                        className="pl-10 w-full rounded-xl border border-gray-300 bg-white py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-shadow"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Clock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="time"
                        required
                        className="pl-10 w-full rounded-xl border border-gray-300 bg-white py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-shadow"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Users className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      required
                      className="pl-10 w-full rounded-xl border border-gray-300 bg-white py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-shadow appearance-none"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-gray-300 bg-white py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-shadow"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+252 61..."
                      className="w-full rounded-xl border border-gray-300 bg-white py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-shadow"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-900 hover:bg-black text-white font-medium py-4 rounded-xl transition-colors shadow-sm"
                >
                  Confirm Reservation
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
