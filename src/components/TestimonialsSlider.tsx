import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data';

export function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((current) => (current + 1) % testimonials.length);
  const prev = () => setCurrentIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));

  return (
    <section id="reviews" className="py-24 bg-amber-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="flex justify-center items-center space-x-2 mb-4">
            {[1, 2, 3, 4].map(i => <Star key={i} className="w-6 h-6 fill-amber-500 text-amber-500" />)}
            <Star className="w-6 h-6 fill-amber-500/30 text-amber-500 relative">
              <div className="absolute inset-0 overflow-hidden w-[20%]" style={{ width: '20%' }}>
                <Star className="w-6 h-6 fill-amber-500 text-amber-500" />
              </div>
            </Star>
          </div>
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-2">4.2 Star Reputation</h2>
          <p className="text-lg text-amber-800/80">See what our customers have to say</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Quote className="absolute -top-10 -left-10 w-24 h-24 text-amber-200/50 z-0" />
          
          <div className="relative z-10 min-h-[250px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-center px-4 md:px-16"
              >
                <p className="text-2xl md:text-3xl font-serif text-gray-900 mb-8 leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </p>
                <div className="flex items-center justify-center space-x-1 mb-3">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <h4 className="text-lg font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center space-x-6 mt-12">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-white shadow-sm border border-amber-100 text-amber-800 hover:bg-amber-100 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'bg-amber-600 w-8' : 'bg-amber-300 hover:bg-amber-400'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-3 rounded-full bg-white shadow-sm border border-amber-100 text-amber-800 hover:bg-amber-100 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
