import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <a href="#home" className="inline-block font-serif text-3xl font-bold text-white">
              Carshi <span className="text-amber-500">Restaurant</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bringing the authentic taste of Somalia to your table. The finest ingredients, traditional recipes, and unmatched hospitality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'Menu', 'Reservations', 'Reviews'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-amber-500 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>Maka Al-Mukarama Road,<br />Mogadishu, Somalia</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <a href="tel:+252611003090" className="hover:text-amber-500 transition-colors">+252 61 1003090</a>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <a href="mailto:info@carshi.so" className="hover:text-amber-500 transition-colors">info@carshi.so</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Opening Hours</h3>
            <ul className="space-y-4">
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400">Monday - Thursday</span>
                <span className="text-white">7:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400">Friday</span>
                <span className="text-white">1:00 PM - 11:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400">Saturday - Sunday</span>
                <span className="text-white">7:00 AM - 11:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Carshi Restaurant. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
