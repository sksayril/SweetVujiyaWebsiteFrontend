'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Hyper-realistic Background Image */}
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <motion.div
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 5, ease: 'easeOut' }}
          className="relative h-full w-full"
        >
          <Image
            src="/hero-banner.jpg"
            alt="Krishna & Kanha Authentic Sweets and Namkeen"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
        {/* Dark luxury gradient overlays for crisp text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      </div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="flex justify-center mb-4 space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-amber-400 fill-amber-400 drop-shadow-[0_2px_8px_rgba(251,191,36,0.5)]" />
              ))}
            </div>
            
            <div className="flex items-center justify-center gap-6 mb-4">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-cinzel font-extrabold leading-tight tracking-wide">
                <span className="bg-gradient-to-r from-amber-100 via-white to-amber-200 bg-clip-text text-transparent drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                   Krishna & Kanha Sales Enterprises
                </span>
              </h1>
            </div>
            
            {/* Premium tagline with enhanced styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <p className="text-2xl sm:text-3xl lg:text-4xl mb-6 font-cinzel font-semibold bg-gradient-to-r from-amber-200 via-white to-amber-100 bg-clip-text text-transparent drop-shadow-lg">
                Authentic Indian Sweets & Premium Namkeen
              </p>
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
                <span className="mx-4 text-amber-300 text-2xl drop-shadow">✦</span>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl font-cinzel font-medium text-amber-50 leading-relaxed tracking-wide drop-shadow-md">
                <span className="font-semibold text-white">Manufacturing</span> of premium laddu, boondi dana, namkeens & luxury sweets
              </p>
              <p className="text-base sm:text-lg lg:text-xl mt-4 text-amber-100/90 font-cinzel font-light italic drop-shadow">
                "Crafted with tradition, delivered with excellence"
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <p className="text-base sm:text-lg lg:text-xl mt-4 text-amber-200/90 font-cinzel font-light italic drop-shadow">
             "Khoob khao mithai krishna kanha ko do badhai"
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/products"
              className="group bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-500 hover:to-orange-500 text-white px-8 py-4 rounded-full text-lg font-cinzel font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-orange-500/30 flex items-center justify-center space-x-2 border border-amber-400/30"
            >
              <span>Explore Products</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link
              href="/about"
              className="border-2 border-white/80 bg-black/40 backdrop-blur-md text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-cinzel font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Our Story
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;