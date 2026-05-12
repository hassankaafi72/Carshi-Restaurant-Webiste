import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';

export function CartDrawer() {
  const { isCartOpen, setIsCartOpen, items, updateQuantity, removeFromCart, subtotal } = useCart();

  const formatMessageForWhatsApp = () => {
    let text = "Hello Carshi Restaurant! I'd like to place an order:\n\n";
    items.forEach(item => {
      text += `- ${item.quantity}x ${item.name} ($${(item.price * item.quantity).toFixed(2)})\n`;
    });
    text += `\n*Subtotal:* $${subtotal.toFixed(2)}\n`;
    text += "Please confirm my order.";
    return encodeURIComponent(text);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 flex items-center">
                <ShoppingBag className="w-5 h-5 mr-2" />
                Your Order
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4">
                  <ShoppingBag className="w-12 h-12 text-gray-300" />
                  <p>Your cart is empty.</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="text-amber-600 font-medium hover:underline"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-20 h-20 rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                        <p className="font-medium text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <p className="text-sm text-gray-500 mb-3">${item.price.toFixed(2)} each</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 bg-gray-50 rounded-lg p-1">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 rounded-md hover:bg-white hover:shadow-sm transition-all"
                          >
                            <Minus className="w-4 h-4 text-gray-600" />
                          </button>
                          <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 rounded-md hover:bg-white hover:shadow-sm transition-all"
                          >
                            <Plus className="w-4 h-4 text-gray-600" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-sm text-red-500 hover:text-red-700"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                  <p>Subtotal</p>
                  <p>${subtotal.toFixed(2)}</p>
                </div>
                <p className="text-sm text-gray-500 mb-6">Taxes and delivery will be calculated subsequently.</p>
                <a
                  href={`https://wa.me/252611003090?text=${formatMessageForWhatsApp()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-medium py-4 rounded-xl transition-colors shadow-sm"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12c0 1.94.55 3.75 1.5 5.25L2 22l4.89-1.44c1.47.88 3.22 1.43 5.1 1.43 5.52 0 10-4.48 10-10S17.51 2 11.99 2zm5.72 14.15c-.23.65-1.34 1.25-1.93 1.34-.51.08-1.18.15-3.33-.74-2.61-1.09-4.32-3.8-4.47-4.01-.15-.2-1.07-1.42-1.07-2.7 0-1.28.66-1.92.89-2.18.23-.25.5-.32.66-.32.16 0 .33.02.48.02.16.01.37-.06.57.43.2.5 .68 1.66.74 1.78.06.12.1.26.02.43-.08.16-.12.26-.24.39-.12.13-.25.28-.35.39-.11.11-.23.23-.1.46.12.23.53.9 1.13 1.44.77.69 1.43.9 1.66 1.02.23.12.48.1.66-.1.18-.21.78-.91 1-1.22.21-.32.42-.26.7-.16.27.1 1.73.82 2.03.97.29.15.49.23.56.36.07.12.07.72-.16 1.37z" />
                  </svg>
                  <span>Complete Order via WhatsApp</span>
                </a>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
