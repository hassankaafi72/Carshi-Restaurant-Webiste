import { CartProvider } from './context/CartContext';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { CartDrawer } from './components/CartDrawer';
import { ReservationSection } from './components/ReservationSection';
import { TestimonialsSlider } from './components/TestimonialsSlider';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen font-sans bg-white selection:bg-amber-100 selection:text-amber-900">
        <Navigation />
        <Hero />
        <main>
          <MenuSection />
          <ReservationSection />
          <TestimonialsSlider />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
