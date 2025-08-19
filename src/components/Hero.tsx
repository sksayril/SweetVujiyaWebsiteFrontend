import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const Hero = () => {
  const heroImages = [
    'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1563985344-d071b125edf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  ];

  return (
    <section className="relative h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="absolute inset-0 h-full w-full"
      >
        {heroImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div 
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${image})`
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="flex items-center justify-center gap-6 mb-4">
              <motion.img
                src="/krisna.jpeg"
                alt="Krishna"
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full border-4 border-yellow-400 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              <h1 className="text-4xl sm:text-5xl lg:text-8xl font-extrabold leading-tight tracking-wide">
                <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent drop-shadow-2xl">
                   Krishna & Kanha Sales Enterprises
                </span>
              </h1>
              <motion.img
                src="/krisna.jpeg"
                alt="Krishna"
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full border-4 border-yellow-400 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </div>
            
            {/* Premium tagline with enhanced styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <p className="text-2xl sm:text-3xl lg:text-4xl mb-6 font-semibold bg-gradient-to-r from-orange-200 via-yellow-200 to-orange-300 bg-clip-text text-transparent drop-shadow-lg">
                Authentic Indian Sweets & Premium Namkeen
              </p>
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
                <span className="mx-4 text-yellow-300 text-2xl">✦</span>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl font-medium text-orange-100 leading-relaxed tracking-wide">
                <span className="font-semibold text-yellow-200">Manufacturing</span> of premium laddu, boondi dana, namkeens & luxury sweets
              </p>
              <p className="text-base sm:text-lg lg:text-xl mt-4 text-orange-200 font-light italic">
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
            <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Khoob khao mithai krishna kanha ko do badhai.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/products"
              className="group bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <span>Explore Products</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link
              to="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Our Story
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-10 hidden lg:block"
      >
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
            🍭
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 10, 0],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-1/3 right-10 hidden lg:block"
      >
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
          <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
            🧈
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;