import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, Send, CheckCircle2 } from 'lucide-react';
import { REVIEWS as INITIAL_REVIEWS } from '../data/mockData';
import ReviewCard from '../components/ReviewCard';

const Reviews = () => {
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [newReview, setNewReview] = useState({
    author: '',
    rating: 5,
    comment: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const review = {
      id: Date.now().toString(),
      ...newReview,
      date: new Date().toISOString().split('T')[0]
    };
    setReviews([review, ...reviews]);
    setIsSubmitted(true);
    setNewReview({ author: '', rating: 5, comment: '' });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-mint font-bold uppercase tracking-widest text-sm mb-4 block">Guest Feedback</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Reviews</h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            We value your feedback. Read what our guests have to say about their experience at The Bambooz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Review Form */}
          <div className="lg:col-span-1">
            <div className="glass-morphism p-8 rounded-3xl sticky top-32">
              <h3 className="text-2xl font-serif font-bold text-white mb-6">Share Your Experience</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Your Name</label>
                  <input
                    required
                    type="text"
                    value={newReview.author}
                    onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-mint transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Rating</label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewReview({ ...newReview, rating: star })}
                        className="p-1 transition-transform hover:scale-110"
                      >
                        <Star 
                          className={`w-8 h-8 ${star <= newReview.rating ? "text-mint fill-current" : "text-white/20"}`} 
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Your Comment</label>
                  <textarea
                    required
                    rows={4}
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-mint transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full py-4 bg-mint text-black font-bold rounded-xl hover:bg-mint/80 transition-all flex items-center justify-center space-x-2"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Review Posted!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Post Review</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
