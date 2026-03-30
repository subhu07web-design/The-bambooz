import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();
  const [isOrdered, setIsOrdered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pin: ''
  });

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const orderData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      product: cart.map(item => `${item.name} (x${item.quantity})`).join(', '),
      quantity: cart.reduce((total, item) => total + item.quantity, 0),
      price: totalPrice,
      address: formData.address,
      city: formData.city,
      pin: formData.pin,
      timestamp: new Date().toISOString()
    };

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzx7GpVaQIsFpX4WEkw16LG86L_HG-YGnGYaX9knOUsfCgZpgB_KXSzEQogUSlAP2IuOw/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify(orderData),
      });

      // Since we use no-cors, we won't get a readable response, but we assume success if no error is thrown
      setIsOrdered(true);
      clearCart();
    } catch (error) {
      console.error('Error submitting order:', error);
      alert('There was an error placing your order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isOrdered) {
    return (
      <div className="pt-32 pb-24 min-h-screen flex items-center justify-center bg-dark-bg px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full glass-morphism p-12 rounded-[2rem] text-center"
        >
          <div className="w-20 h-20 bg-mint/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12 text-mint" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-white mb-4">Order Confirmed!</h2>
          <p className="text-white/60 mb-8">
            Thank you for choosing The Bambooz. Your delicious meal will be at your doorstep shortly.
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-mint text-black font-bold rounded-full hover:bg-mint/80 transition-all"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="pt-32 pb-24 min-h-screen flex flex-col items-center justify-center bg-dark-bg px-4">
        <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-6">
          <ShoppingBag className="w-12 h-12 text-white/20" />
        </div>
        <h2 className="text-3xl font-serif font-bold text-white mb-4">Your Cart is Empty</h2>
        <p className="text-white/40 mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Link
          to="/menu"
          className="px-8 py-3 bg-mint text-black font-bold rounded-full hover:bg-mint/80 transition-all"
        >
          Explore Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-12">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-card-bg p-4 md:p-6 rounded-2xl border border-white/5 flex items-center gap-6"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-white mb-1">{item.name}</h3>
                  <p className="text-mint font-bold">₹{item.price}</p>
                </div>
                <div className="flex items-center bg-black/40 rounded-lg p-1">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="p-1 hover:text-mint transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center font-bold">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="p-1 hover:text-mint transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 text-white/20 hover:text-chinese-red transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </motion.div>
            ))}
            
            <Link to="/menu" className="inline-flex items-center space-x-2 text-mint font-bold group">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Continue Shopping</span>
            </Link>
          </div>

          {/* Checkout Form */}
          <div className="lg:col-span-1">
            <div className="glass-morphism p-8 rounded-3xl sticky top-32">
              <h3 className="text-2xl font-serif font-bold text-white mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-white/60">
                  <span>Subtotal</span>
                  <span>₹{totalPrice}</span>
                </div>
                <div className="flex justify-between text-white/60">
                  <span>Delivery Fee</span>
                  <span className="text-green-500">FREE</span>
                </div>
                <div className="border-t border-white/10 pt-4 flex justify-between text-xl font-bold text-white">
                  <span>Total</span>
                  <span className="text-mint">₹{totalPrice}</span>
                </div>
              </div>

              <form onSubmit={handleCheckout} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">First Name</label>
                    <input
                      required
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-mint transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Last Name</label>
                    <input
                      required
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-mint transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Email Address</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-mint transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Phone Number</label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-mint transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Delivery Address</label>
                  <textarea
                    required
                    rows={2}
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-mint transition-colors resize-none"
                  ></textarea>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">City</label>
                    <input
                      required
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-mint transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">PIN Code</label>
                    <input
                      required
                      type="text"
                      value={formData.pin}
                      onChange={(e) => setFormData({ ...formData, pin: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-mint transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Payment Method</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      className="py-3 px-4 rounded-xl border border-mint bg-mint/10 text-mint text-sm font-bold"
                    >
                      Cash on Delivery
                    </button>
                    <button
                      type="button"
                      disabled
                      className="py-3 px-4 rounded-xl border border-white/10 bg-white/5 text-white/40 text-sm font-bold cursor-not-allowed"
                    >
                      Online Payment
                    </button>
                  </div>
                  <p className="text-[10px] text-white/40 mt-2 italic">* Online payment coming soon</p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 bg-mint text-black font-bold rounded-xl transition-all shadow-[0_0_30px_rgba(94,234,212,0.2)] ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-mint/80'}`}
                >
                  {isSubmitting ? 'Processing...' : 'Place Order'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
