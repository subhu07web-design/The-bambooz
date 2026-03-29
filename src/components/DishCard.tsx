import React from 'react';
import { motion } from 'motion/react';
import { Plus, Star } from 'lucide-react';
import { MenuItem } from '../data/mockData';
import { useCart } from '../context/CartContext';

interface DishCardProps {
  dish: MenuItem;
}

const DishCard: React.FC<DishCardProps> = ({ dish }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-card-bg rounded-2xl overflow-hidden border border-white/5 hover:border-mint/30 transition-all duration-500"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
          <span className="text-mint font-bold">₹{dish.price}</span>
        </div>
        {dish.featured && (
          <div className="absolute top-4 left-4 bg-chinese-red px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
            Chef's Choice
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-serif font-bold text-white group-hover:text-mint transition-colors">
            {dish.name}
          </h3>
          <div className="flex items-center text-mint">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-xs ml-1">4.5</span>
          </div>
        </div>
        <p className="text-white/60 text-sm mb-6 line-clamp-2">
          {dish.description}
        </p>
        
        <button
          onClick={() => addToCart(dish)}
          className="w-full py-3 rounded-xl border border-mint/50 text-mint font-medium flex items-center justify-center space-x-2 hover:bg-mint hover:text-black transition-all duration-300"
        >
          <span>Add to Cart</span>
        </button>
      </div>
    </motion.div>
  );
};

export default DishCard;
