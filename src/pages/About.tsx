import React from 'react';
import { motion } from 'motion/react';
import { Target, Heart, Award, CheckCircle2, UtensilsCrossed } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-mint font-bold uppercase tracking-widest text-sm mb-4 block">Our Legacy</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">The Story of Bambooz</h1>
            <div className="w-24 h-1 bg-mint mx-auto mb-8"></div>
          </motion.div>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">From a Small Dream to a Culinary Landmark</h2>
            <p className="text-white/60 mb-6 leading-relaxed">
              Founded in the heart of North Lakhimpur, The Bambooz Family Restaurant began with a simple mission: to bring authentic, high-quality Chinese cuisine to our local community. What started as a small family-run kitchen has grown into a premium dining destination known for its excellence in taste and service.
            </p>
            <p className="text-white/60 mb-8 leading-relaxed">
              Our name "Bambooz" reflects our commitment to fresh, natural ingredients and the traditional bamboo-steaming techniques that give our dishes their unique character. We believe that food is not just about sustenance, but about creating memories with loved ones.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-mint text-3xl font-bold mb-1">10+</h4>
                <p className="text-white/40 text-xs uppercase tracking-widest">Years of Excellence</p>
              </div>
              <div>
                <h4 className="text-mint text-3xl font-bold mb-1">50k+</h4>
                <p className="text-white/40 text-xs uppercase tracking-widest">Happy Customers</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[3rem] overflow-hidden aspect-[4/5]">
              <img
                src="https://res.cloudinary.com/duy2rot8s/image/upload/v1774772140/bambooz_img2_ke1hwg.webp"
                alt="Chef Cooking"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 glass-morphism p-8 rounded-3xl border-mint/20">
              <UtensilsCrossed className="text-mint w-12 h-12 mb-4" />
              <p className="text-white font-bold italic">"Quality is our secret ingredient."</p>
            </div>
          </motion.div>
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            {
              icon: <Target className="w-8 h-8 text-mint" />,
              title: "Our Mission",
              desc: "To provide an unparalleled dining experience by combining traditional Chinese flavors with modern hospitality."
            },
            {
              icon: <Heart className="w-8 h-8 text-mint" />,
              title: "Our Values",
              desc: "Integrity, passion for food, and a deep respect for our customers' tastes and preferences."
            },
            {
              icon: <Award className="w-8 h-8 text-mint" />,
              title: "Our Quality",
              desc: "We source only the finest ingredients, ensuring every dish meets our high standards of excellence."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card-bg p-10 rounded-3xl border border-white/5 hover:border-mint/20 transition-colors"
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-2xl font-serif font-bold text-white mb-4">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-black/40 rounded-[4rem] p-12 md:p-24 border border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Why Choose Bambooz?</h2>
            <p className="text-white/40 max-w-xl mx-auto">We go beyond just serving food; we create experiences.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              "Authentic Chinese Recipes",
              "Unlimited Buffet Daily",
              "Private Dining for Events",
              "Hygienic & Clean Environment",
              "Fast Online Delivery",
              "Premium Family Atmosphere"
            ].map((feature, i) => (
              <div key={i} className="flex items-center space-x-4">
                <CheckCircle2 className="text-mint w-6 h-6 flex-shrink-0" />
                <span className="text-xl text-white/80">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
