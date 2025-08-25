import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, ShoppingCart, Flame } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

interface SpiceLevel {
  level: string;
  color: string;
  bgColor: string;
}

interface NamkeenItem {
  id: number;
  name: string;
  category: string;
  image: string;
  price: string;
  originalPrice: string;
  rating: number;
  reviews: number;
  description: string;
  spiceLevel: string;
  ingredients: string;
  weight: string;
  shelfLife: string;
}

const Namkeen = () => {
  const spiceLevels: SpiceLevel[] = [
    { level: 'Mild', color: 'text-green-500', bgColor: 'bg-green-100' },
    { level: 'Medium', color: 'text-yellow-500', bgColor: 'bg-yellow-100' },
    { level: 'Hot', color: 'text-red-500', bgColor: 'bg-red-100' }
  ];

  const namkeenItems: NamkeenItem[] = [
    {
      id: 1,
      name: 'Premium Mixture',
      category: 'Spicy Mix',
      image: 'https://i.pinimg.com/736x/8a/eb/a3/8aeba37ada5a0eaefaca02b3ad32cdfd.jpg',
      price: '₹180',
      originalPrice: '₹200',
      rating: 4.6,
      reviews: 73,
      description: 'Crunchy mix of lentils, nuts and aromatic spices',
      spiceLevel: 'Medium',
      ingredients: 'Chickpea Flour, Peanuts, Green Peas, Spices',
      weight: '500g',
      shelfLife: '6 months'
    },
    {
      id: 2,
      name: 'Aloo Bhujia',
      category: 'Classic',
      image: 'https://i.pinimg.com/736x/07/3e/2c/073e2c06b404905710c315f3f5b7df02.jpg',
      price: '₹150',
      originalPrice: '₹170',
      rating: 4.7,
      reviews: 89,
      description: 'Thin potato sticks seasoned with traditional spices',
      spiceLevel: 'Mild',
      ingredients: 'Potatoes, Gram Flour, Turmeric, Red Chili',
      weight: '400g',
      shelfLife: '4 months'
    },
    {
      id: 3,
      name: 'Samosa',
      category: 'Fried Snacks',
      image: 'https://i.pinimg.com/736x/92/f5/86/92f586ad41e93f164a4c38a990dc1b83.jpg',
      price: '₹200',
      originalPrice: '₹220',
      rating: 4.8,
      reviews: 124,
      description: 'Golden triangular pastries with spiced potato filling',
      spiceLevel: 'Medium',
      ingredients: 'Wheat Flour, Potatoes, Peas, Cumin, Coriander',
      weight: '12 pieces',
      shelfLife: 'Fresh (consume within 2 days)'
    },
    {
      id: 4,
      name: 'Khakhra',
      category: 'Healthy Snacks',
      image: 'https://i.pinimg.com/1200x/5e/48/d2/5e48d20bc1fba6ba8da5805270322551.jpg',
      price: '₹120',
      originalPrice: '₹140',
      rating: 4.5,
      reviews: 56,
      description: 'Crispy wheat flatbread seasoned with aromatic spices',
      spiceLevel: 'Mild',
      ingredients: 'Wheat Flour, Oil, Salt, Spices',
      weight: '200g',
      shelfLife: '8 months'
    },
    {
      id: 5,
      name: 'Papdi Chaat Mix',
      category: 'Chaat Special',
      image: 'https://i.pinimg.com/736x/91/67/02/91670220b08b0ab742c664df4a660176.jpg',
      price: '₹250',
      originalPrice: '₹280',
      rating: 4.9,
      reviews: 98,
      description: 'Complete chaat mix with crispy papdis and tangy sauces',
      spiceLevel: 'Hot',
      ingredients: 'Wheat Crisps, Tamarind, Mint, Chickpeas, Spices',
      weight: '400g',
      shelfLife: '6 months'
    },
    {
      id: 6,
      name: 'Mathri',
      category: 'Traditional',
      image: 'https://i.pinimg.com/1200x/81/e9/77/81e97751ca4bbc89bc5e2a2852d542ca.jpg',
      price: '₹160',
      originalPrice: '₹180',
      rating: 4.4,
      reviews: 67,
      description: 'Flaky, savory crackers perfect with tea',
      spiceLevel: 'Mild',
      ingredients: 'Refined Flour, Ghee, Ajwain, Salt',
      weight: '300g',
      shelfLife: '3 months'
    }
  ];

  const getSpiceLevelInfo = (level: string): SpiceLevel => {
    return spiceLevels.find(s => s.level === level) || spiceLevels[0];
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Crispy <span className="bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">Namkeen</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Savor the authentic taste of India's favorite savory snacks, 
            made fresh daily with traditional recipes and premium spices that pack a flavorful punch
          </p>
        </motion.div>

        {/* Spice Level Guide */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl p-6 mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center flex items-center justify-center space-x-2">
            <Flame className="h-6 w-6 text-gray-700" />
            <span>Spice Level Guide</span>
            <Flame className="h-6 w-6 text-gray-800" />
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {spiceLevels.map((spice, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className={`w-4 h-4 rounded-full ${spice.bgColor}`}></div>
                <span className={`font-semibold ${spice.color}`}>{spice.level}</span>
                <div className="flex space-x-1">
                  {[...Array(index + 1)].map((_, i) => (
                    <Flame key={i} className={`h-4 w-4 ${spice.color}`} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Featured Namkeen Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Trending Namkeen
          </h2>
          <Swiper
            modules={[Autoplay, Pagination, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {namkeenItems.slice(0, 4).map((item, index) => (
              <SwiperSlide key={item.id} className="!w-80">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-gray-800 to-black text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {item.category}
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
                      <div className={`flex items-center space-x-1 ${getSpiceLevelInfo(item.spiceLevel).color}`}>
                        <Flame className="h-4 w-4" />
                        <span className="text-xs font-semibold">{item.spiceLevel}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
                        {item.price}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-gray-400 fill-current" />
                        <span className="text-sm text-gray-600">{item.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Complete Namkeen Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {namkeenItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-gray-800 to-black text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {item.category}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
                  <Heart className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer" />
                </div>
                <div className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1 ${getSpiceLevelInfo(item.spiceLevel).bgColor} ${getSpiceLevelInfo(item.spiceLevel).color}`}>
                  <Flame className="h-4 w-4" />
                  <span>{item.spiceLevel}</span>
                </div>
                {item.originalPrice && (
                  <div className="absolute bottom-4 right-4 bg-gray-800 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    SAVE ₹{parseInt(item.originalPrice.slice(1)) - parseInt(item.price.slice(1))}
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-gray-400 fill-current" />
                    <span className="text-sm text-gray-600">{item.rating}</span>
                    <span className="text-xs text-gray-400">({item.reviews})</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                  {item.description}
                </p>
                
                <div className="mb-4 space-y-1">
                  <p className="text-xs text-gray-500">
                    <strong>Ingredients:</strong> {item.ingredients}
                  </p>
                  <p className="text-xs text-gray-500">
                    <strong>Weight:</strong> {item.weight}
                  </p>
                  <p className="text-xs text-gray-500">
                    <strong>Shelf Life:</strong> {item.shelfLife}
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
                      {item.price}
                    </span>
                    {item.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        {item.originalPrice}
                      </span>
                    )}
                  </div>
                  <button className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-black text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2">
                    <ShoppingCart className="h-4 w-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bulk Order Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-gray-800 to-black rounded-2xl p-8 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Bulk Orders & Party Packs! 🎉</h2>
          <p className="text-xl mb-6 opacity-90">
            Planning a party or event? Get special discounts on bulk orders above ₹2000
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
              Contact for Bulk Orders
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              View Party Combos
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Namkeen;