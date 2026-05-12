import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative h-[90vh] flex items-center justify-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=2000"
          alt="Authentic Food"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="block text-sm sm:text-base font-semibold tracking-wider text-amber-500 uppercase mb-4"
        >
          Welcome to
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl sm:text-7xl font-serif font-bold mb-6 tracking-tight leading-tight"
        >
          Carshi Restaurant <br className="hidden sm:block" />
          <span className="text-3xl sm:text-5xl font-light italic text-gray-200">
            Taste the Tradition
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-300 mb-10"
        >
          Discover the finest Somali cuisine in Mogadishu. 
          Experience a journey of flavors right at your table or delivered to your door.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#menu"
            className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-amber-600 hover:bg-amber-700 rounded-none transition-colors w-full sm:w-auto justify-center"
          >
            Explore Menu
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <a
            href="#reservations"
            className="inline-flex items-center px-8 py-4 text-base font-medium text-white border border-white/30 hover:bg-white/10 rounded-none transition-colors w-full sm:w-auto justify-center"
          >
            Book a Table
          </a>
        </motion.div>
      </div>
    </section>
  );
}
