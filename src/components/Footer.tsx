import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, UtensilsCrossed } from 'lucide-react';

import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/">
              <Logo showTagline />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Experience the finest Chinese cuisine in North Lakhimpur. From traditional flavors to modern twists, we bring the best to your table.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-mint transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-mint transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-mint transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-mint font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link to="/menu" className="hover:text-white transition-colors">Our Menu</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/reviews" className="hover:text-white transition-colors">Customer Reviews</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Book a Table</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-mint font-serif text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-mint flex-shrink-0" />
                <span>N Lakhimpur Bypass Rd, North Lakhimpur, Assam 787051</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-mint flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-mint flex-shrink-0" />
                <span>info@thebambooz.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-mint font-serif text-lg mb-6">Opening Hours</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span>11:00 AM - 12:00 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Sat - Sun</span>
                <span>10:00 AM - 12:00 AM</span>
              </li>
              <li className="mt-6 p-4 border border-mint/20 rounded-lg bg-mint/5">
                <p className="text-mint text-xs font-bold uppercase tracking-widest mb-1">Special Service</p>
                <p className="text-white/80">Unlimited Buffet available daily!</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
          <p>© 2024 The Bambooz Family Restaurant. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
