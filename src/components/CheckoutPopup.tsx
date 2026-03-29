import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CheckoutPopup: React.FC = () => {
  const { isPopupOpen, setIsPopupOpen, totalItems, totalPrice } = useCart();

  return (
    <AnimatePresence>
      {isPopupOpen && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-8 left-4 right-4 md:left-auto md:right-8 md:w-96 glass-morphism p-6 rounded-3xl z-[100] border border-mint/30 shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
        >
          <button
            onClick={() => setIsPopupOpen(false)}
            className="absolute -top-3 -right-3 w-8 h-8 bg-chinese-red text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-mint/20 rounded-2xl flex items-center justify-center shrink-0">
              <ShoppingCart className="w-6 h-6 text-mint" />
            </div>
            <div className="flex-grow">
              <h3 className="text-white font-bold">Items in Cart: {totalItems}</h3>
              <p className="text-mint font-bold text-sm">Total: ₹{totalPrice}</p>
            </div>
          </div>

          <div className="flex gap-3">
            <Link
              to="/cart"
              onClick={() => setIsPopupOpen(false)}
              className="flex-grow py-3 bg-mint text-black text-sm font-bold rounded-xl flex items-center justify-center space-x-2 hover:bg-mint/80 transition-all"
            >
              <span>Checkout Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setIsPopupOpen(false)}
              className="px-4 py-3 bg-white/5 text-white/60 text-xs font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-all"
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CheckoutPopup;
