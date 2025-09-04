import React from 'react';
import { Heart, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-amber-900 via-brown-900 to-amber-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-1 md:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/img9.jpeg" 
                alt="Krishna & Kanha Sales Enterprises Logo" 
                className="h-10 w-10 rounded-full border-2 border-amber-300 shadow-lg"
              />
              <span className="font-bold text-2xl"> Krishna & Kanha Sales Enterprises</span>
            </div>
            <p className="text-amber-100 mb-4 leading-relaxed">
              Crafting the finest sweets and namkeen with traditional recipes passed down through generations. 
              Experience the authentic taste of India's beloved confections.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-amber-300 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-amber-300 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-amber-300 hover:text-white cursor-pointer transition-colors" />
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3 text-amber-100">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-amber-300" />
                <span className="text-sm">Ramadevi, I.1-87, Sangava Road, Kanpur, Uttar Pradesh 208021</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-amber-300" />
                <span className="text-sm">+91 6392574854</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-amber-300" />
                <span className="text-sm">krishnakanhasalesenterprises@gmail.com</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2 text-amber-100">
              <p className="text-sm hover:text-white cursor-pointer transition-colors">Privacy Policy</p>
              <p className="text-sm hover:text-white cursor-pointer transition-colors">Terms of Service</p>
              <p className="text-sm hover:text-white cursor-pointer transition-colors">Shipping Info</p>
             </div>
          </motion.div>
        </div>

        <div className="border-t border-amber-700 mt-8 pt-8 text-center">
          <p className="text-amber-200 text-sm">
            © 2025  Krishna & Kanha Sales Enterprises. All rights reserved. Made with ❤️ from CripCoCode.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;