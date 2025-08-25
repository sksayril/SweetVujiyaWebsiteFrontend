import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, ShoppingCart, Filter } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Sweets = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [likedProducts, setLikedProducts] = useState<Record<number, boolean>>({});

  const toggleLike = (productId: number) => {
    setLikedProducts(prev => ({ ...prev, [productId]: !prev[productId] }));
  };

  const categories = ['All', 'Traditional', 'Premium', 'Festival Special', 'Milk Based', 'Dry Fruit Special'];

  const sweets = [
    {
      id: 1,
      name: 'Motichoor Laddu',
      category: 'Premium',
      image: 'https://i.pinimg.com/1200x/81/e9/77/81e97751ca4bbc89bc5e2a2852d542ca.jpg',
      price: '₹850',
      originalPrice: '₹950',
      rating: 4.9,
      reviews: 128,
      description: 'Pure cashew diamond-shaped delicacy with edible silver foil',
      ingredients: 'Cashews, Sugar, Ghee, Cardamom',
      weight: '500g'
    },
    {
      id: 2,
      name: 'Gulab Jamun',
      category: 'Milk Based',
      image: 'https://i.pinimg.com/736x/a9/3d/77/a93d77d3e242262f2c919bf66aef5b39.jpg',
      price: '₹450',
      originalPrice: '₹500',
      rating: 4.8,
      reviews: 95,
      description: 'Soft spongy cottage cheese balls in sugar syrup',
      ingredients: 'Cottage Cheese, Sugar, Cardamom, Rose Water',
      weight: '1kg'
    },
    {
      id: 3,
      name: 'Sondesh',
      category: 'Traditional',
      image: 'https://i.pinimg.com/736x/07/3e/2c/073e2c06b404905710c315f3f5b7df02.jpg',
      price: '₹380',
      originalPrice: '₹420',
      rating: 4.9,
      reviews: 156,
      description: 'Golden brown milk solid dumplings in rose-flavored syrup',
      ingredients: 'Milk Solids, Sugar, Ghee, Rose Water, Cardamom',
      weight: '1kg'
    },
    {
      id: 4,
      name: 'Motichoor Laddu',
      category: 'Festival Special',
      image: 'https://i.pinimg.com/736x/92/f5/86/92f586ad41e93f164a4c38a990dc1b83.jpg',
      price: '₹480',
      originalPrice: '₹550',
      rating: 4.8,
      reviews: 92,
      description: 'Fine gram flour pearls shaped into delicate sweet balls',
      ingredients: 'Gram Flour, Sugar, Ghee, Cashews, Almonds',
      weight: '500g'
    },
    {
      id: 5,
      name: 'Milk Cake',
      category: 'Traditional',
      image: 'https://i.pinimg.com/1200x/5e/48/d2/5e48d20bc1fba6ba8da5805270322551.jpg',
      price: '₹520',
      originalPrice: '₹580',
      rating: 4.7,
      reviews: 78,
      description: 'Bengal\'s signature cottage cheese sweet with cardamom',
      ingredients: 'Fresh Cottage Cheese, Sugar, Cardamom, Pistachios',
      weight: '500g'
    },
    {
      id: 6,
      name: 'Badam Barfi',
      category: 'Dry Fruit Special',
      image: 'https://i.pinimg.com/1200x/d8/a4/ab/d8a4aba27826f331377c721ab6c1a9c1.jpg',
      price: '₹780',
      originalPrice: '₹880',
      rating: 4.9,
      reviews: 64,
      description: 'Rich almond barfi with pure ghee and cardamom',
      ingredients: 'Almonds, Sugar, Ghee, Cardamom, Silver Foil',
      weight: '500g'
    },
    {
      id: 7,
      name: 'Rasmalai',
      category: 'Milk Based',
      image: 'https://i.pinimg.com/736x/e7/5d/c6/e75dc6e6bddaba7ab90517098cd7398a.jpg',
      price: '₹520',
      originalPrice: '₹580',
      rating: 4.8,
      reviews: 110,
      description: 'Soft cottage cheese dumplings in creamy milk',
      ingredients: 'Cottage Cheese, Milk, Sugar, Cardamom, Pistachios',
      weight: '1kg'
    },
    {
      id: 8,
      name: 'Soan Papdi',
      category: 'Traditional',
      image: 'https://i.pinimg.com/736x/16/7d/e6/167de67f50bdab98e1da704a4bca5a13.jpg',
      price: '₹350',
      originalPrice: '₹400',
      rating: 4.6,
      reviews: 85,
      description: 'Flaky, crispy sweet with cardamom and nuts',
      ingredients: 'Gram Flour, Sugar, Ghee, Cardamom, Almonds',
      weight: '500g'
    },
    {
      id: 9,
      name: 'Kalakand',
      category: 'Milk Based',
      image: 'https://i.pinimg.com/736x/3b/d7/69/3bd769f4a29a169d1bd59cad24cda862.jpg',
      price: '₹450',
      originalPrice: '₹520',
      rating: 4.7,
      reviews: 95,
      description: 'Soft milk cake with cardamom and pistachios',
      ingredients: 'Milk, Sugar, Cardamom, Pistachios',
      weight: '500g'
    },
    {
      id: 10,
      name: 'Besan Laddu',
      category: 'Traditional',
      image: 'https://i.pinimg.com/736x/d3/0b/5f/d30b5f0e473f3c9ef31578cdebde6db7.jpg',
      price: '₹420',
      originalPrice: '₹480',
      rating: 4.8,
      reviews: 120,
      description: 'Traditional gram flour balls with ghee and nuts',
      ingredients: 'Gram Flour, Sugar, Ghee, Cashews, Raisins',
      weight: '500g'
    },
    {
      id: 11,
      name: 'Pista Barfi',
      category: 'Dry Fruit Special',
      image: 'https://i.pinimg.com/1200x/8e/c3/31/8ec331885c29d21913a1fc46490fbf20.jpg',
      price: '₹950',
      originalPrice: '₹1050',
      rating: 4.9,
      reviews: 75,
      description: 'Premium pistachio barfi with silver foil',
      ingredients: 'Pistachios, Sugar, Ghee, Cardamom, Silver Foil',
      weight: '500g'
    }
  ];

  const filteredSweets = sweets.filter(sweet => 
    selectedCategory === 'All' || sweet.category === selectedCategory
  );

  return (
    <div className="min-h-screen py-8 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Premium background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100/20 via-transparent to-gray-200/20" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-gray-200/30 to-gray-300/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-gray-300/30 to-gray-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 text-sm font-cinzel font-semibold rounded-full border border-gray-300/50 shadow-sm">
              ✨ Premium Sweet Collection
            </span>
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-cinzel font-bold text-gray-900 mb-6 leading-tight">
            Authentic{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
                Indian Sweets
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-gray-600 to-black rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl font-cinzel text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Indulge in our handcrafted collection of traditional and premium sweets,{' '}
            <span className="font-semibold text-gray-700">made with pure ingredients</span>{' '}
            and time-honored recipes from Krishna & Kanha Sales Enterprises
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-cinzel font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-gray-800 to-black text-white shadow-lg scale-105'
                    : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-md'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Filter className="inline-block w-4 h-4 mr-2" />
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Sweets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredSweets.map((sweet, index) => (
            <motion.div
              key={sweet.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={sweet.image}
                  alt={sweet.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-gray-800 to-black text-white px-3 py-1 rounded-full text-sm font-cinzel font-semibold">
                  {sweet.category}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
                  <Heart 
                    className={`h-5 w-5 transition-colors cursor-pointer ${
                      likedProducts[sweet.id] ? 'text-red-500 fill-current' : 'text-gray-400 hover:text-red-500'
                    }`}
                    onClick={() => toggleLike(sweet.id)}
                  />
                </div>
                {sweet.originalPrice && (
                  <div className="absolute bottom-4 right-4 bg-gray-800 text-white px-2 py-1 rounded-full text-xs font-cinzel font-semibold">
                    SAVE ₹{parseInt(sweet.originalPrice.slice(1)) - parseInt(sweet.price.slice(1))}
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-cinzel font-bold text-gray-900">{sweet.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-gray-400 fill-current" />
                    <span className="text-sm text-gray-600">{sweet.rating}</span>
                    <span className="text-xs text-gray-400">({sweet.reviews})</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-3 text-sm font-cinzel leading-relaxed">
                  {sweet.description}
                </p>
                
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-1 font-cinzel">
                    <strong>Ingredients:</strong> {sweet.ingredients}
                  </p>
                  <p className="text-xs text-gray-500 font-cinzel">
                    <strong>Weight:</strong> {sweet.weight}
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-cinzel font-bold bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
                      {sweet.price}
                    </span>
                    {sweet.originalPrice && (
                      <span className="text-sm text-gray-400 line-through font-cinzel">
                        {sweet.originalPrice}
                      </span>
                    )}
                  </div>
                  <button className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-black text-white px-4 py-2 rounded-full text-sm font-cinzel font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2">
                    <ShoppingCart className="h-4 w-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Offer Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-gray-800 to-black rounded-2xl p-8 text-white text-center"
        >
          <h2 className="text-3xl font-cinzel font-bold mb-4">Sweet Deal Alert! 🍯</h2>
          <p className="text-xl mb-6 opacity-90 font-cinzel">
            Buy any 3 sweets and get 15% off + Free Home Delivery
          </p>
          <button className="bg-white text-gray-800 px-8 py-4 rounded-full text-lg font-cinzel font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
            Shop Now & Save
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Sweets;