import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { Review } from '../data/mockData';

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-card-bg p-8 rounded-3xl border border-white/5 relative overflow-hidden"
    >
      <Quote className="absolute -top-4 -right-4 w-24 h-24 text-white/5 rotate-12" />
      
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < review.rating ? "text-mint fill-current" : "text-white/20"}`}
          />
        ))}
      </div>
      
      <p className="text-white/80 italic mb-6 relative z-10">
        "{review.comment}"
      </p>
      
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-mint/20 flex items-center justify-center text-mint font-bold text-xl">
          {review.author[0]}
        </div>
        <div>
          <h4 className="font-bold text-white">{review.author}</h4>
          <p className="text-xs text-white/40">{review.date}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewCard;
