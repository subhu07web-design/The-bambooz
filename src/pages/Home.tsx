import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Utensils, Users, ShieldCheck, Play, MapPin } from 'lucide-react';
import { MENU_ITEMS, REVIEWS } from '../data/mockData';
import DishCard from '../components/DishCard';
import ReviewCard from '../components/ReviewCard';

const Home = () => {
  const featuredDishes = MENU_ITEMS.filter(item => item.featured).slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/duy2rot8s/image/upload/q_auto,f_auto/v1774770900/bambooz_img_r46x3l.webp"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-100 brightness-[0.8]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-mint font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
              The Family Restaurant Made of Bamboos
            </span>
            <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-6 leading-tight">
              The <span className="text-mint">Bambooz</span> <br /> Family Restaurant
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Experience a premium culinary journey with our unlimited buffet, private dining, and authentic Chinese delicacies in the heart of North Lakhimpur.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/menu"
                className="px-8 py-4 bg-mint text-black font-bold rounded-full flex items-center space-x-2 hover:bg-mint/80 transition-all duration-300 transform hover:scale-105"
              >
                <span>Order Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Book a Table
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-mint to-transparent"></div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-mint mt-2">Scroll</span>
        </motion.div>
      </section>

      {/* Stats/Intro Section */}
      <section className="py-24 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-square">
                <img
                  src="https://res.cloudinary.com/duy2rot8s/image/upload/v1774772140/bambooz_img2_ke1hwg.webp"
                  alt="Restaurant Interior"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-mint p-8 rounded-3xl text-black shadow-2xl hidden md:block">
                <div className="flex items-center space-x-4 mb-2">
                  <Star className="w-8 h-8 fill-current" />
                  <span className="text-4xl font-bold">4.0</span>
                </div>
                <p className="font-bold uppercase tracking-widest text-xs">450+ Happy Reviews</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-mint font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                A Tradition of Taste & Excellence
              </h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                Located at N Lakhimpur Bypass Rd, The Bambooz has been a cornerstone of family dining in Assam. We pride ourselves on using the freshest ingredients to create authentic Chinese dishes that resonate with our local community.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-mint/10 flex items-center justify-center flex-shrink-0">
                    <Utensils className="text-mint w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Unlimited Buffet</h4>
                    <p className="text-white/40 text-xs text-balance">Feast on a wide variety of dishes daily.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-mint/10 flex items-center justify-center flex-shrink-0">
                    <Users className="text-mint w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Private Dining</h4>
                    <p className="text-white/40 text-xs text-balance">Exclusive space for your special events.</p>
                  </div>
                </div>
              </div>

              <Link to="/about" className="text-mint font-bold flex items-center space-x-2 group">
                <span>Learn More About Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-24 bg-black/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-mint font-bold uppercase tracking-widest text-sm mb-4 block">Chef's Specials</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Featured Dishes</h2>
            <div className="w-24 h-1 bg-mint mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map(dish => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/menu"
              className="inline-flex items-center space-x-2 text-white/60 hover:text-mint transition-colors font-medium"
            >
              <span>View Full Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-mint font-bold uppercase tracking-widest text-sm mb-4 block">Testimonials</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">What Our Guests Say</h2>
            </div>
            <Link to="/reviews" className="px-6 py-3 border border-white/10 rounded-full text-sm font-bold hover:bg-white/5 transition-colors">
              Read All Reviews
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map(review => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-black/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-mint font-bold uppercase tracking-widest text-sm mb-4 block">Find Us</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Visit Our Restaurant</h2>
          </div>
          <div className="rounded-[3rem] overflow-hidden h-[500px] border border-white/10 relative group">
            <iframe
              src="https://maps.google.com/maps?q=The%20Bambooz%20Family%20Restaurant%20North%20Lakhimpur&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale group-hover:grayscale-0 transition-all duration-700"
            ></iframe>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=The+Bambooz+Family+Restaurant+North+Lakhimpur" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-mint text-black font-bold rounded-full hover:bg-mint/80 transition-all flex items-center space-x-2 shadow-2xl"
              >
                <MapPin className="w-5 h-5" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/duy2rot8s/image/upload/q_auto,f_auto/v1774775628/bambooz_ready_to_test_back_imge_rnrez0.webp"
            alt="CTA Background"
            className="w-full h-full object-cover opacity-60 brightness-[0.8]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-morphism p-12 md:p-20 rounded-[3rem]"
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">
              Ready to Taste the <br /> Extraordinary?
            </h2>
            <p className="text-white/80 text-lg mb-12 max-w-xl mx-auto">
              Book your table today or order online to experience the best Chinese food in North Lakhimpur.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/menu" className="px-10 py-4 bg-mint text-black font-bold rounded-full hover:bg-mint/80 transition-all">
                Order Online
              </Link>
              <Link to="/contact" className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-white/90 transition-all">
                Book a Table
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
