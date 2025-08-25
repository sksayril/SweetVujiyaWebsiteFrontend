import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Heart } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Clock, value: '25+', label: 'Years of Excellence' },
    { icon: Users, value: '50K+', label: 'Happy Customers' },
    { icon: Award, value: '100+', label: 'Premium Products' },
    { icon: Heart, value: '99%', label: 'Satisfaction Rate' }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Crafting <span className="text-gray-300">Sweet Memories</span> Since 1999
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              At  Krishna & Kanha Sales Enterprises, we believe that every sweet tells a story. Our journey began with a simple 
              mission: to bring authentic Indian flavors to your doorstep using time-honored recipes 
              and the finest ingredients.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              From traditional festivals to modern celebrations, our handcrafted sweets and namkeen 
              have been part of countless joyous moments. We take pride in maintaining the authentic 
              taste while adapting to contemporary quality standards.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-gray-300 font-semibold">100% Pure Ingredients</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-gray-300 font-semibold">Traditional Recipes</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-gray-300 font-semibold">Fresh Daily</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center hover:bg-white/20 transition-all duration-300"
                >
                  <stat.icon className="h-8 w-8 text-gray-300 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full opacity-20"
            />
            <motion.div
              animate={{
                rotate: [360, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full opacity-20"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;