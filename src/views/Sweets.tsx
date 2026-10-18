'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Filter, Loader2 } from 'lucide-react';
import { useProducts, mapProductForDisplay } from '@/hooks/useProducts';
import ContactForPriceModal from '@/components/ContactForPriceModal';

const Sweets = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [likedProducts, setLikedProducts] = useState<Record<number, boolean>>({});
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedProductForInquiry, setSelectedProductForInquiry] = useState<{
    name: string;
    image?: string;
    category?: string;
  } | null>(null);

  const handleOpenInquiry = (product: { name: string; image?: string; category?: string }) => {
    setSelectedProductForInquiry(product);
    setInquiryModalOpen(true);
  };

  const toggleLike = (productId: number) => {
    setLikedProducts(prev => ({ ...prev, [productId]: !prev[productId] }));
  };

  const { products: apiProducts, loading } = useProducts('sweet');
  const sweets = apiProducts.map(mapProductForDisplay);
  const categories = ['All', ...Array.from(new Set(sweets.map((s) => s.category)))];

  const filteredSweets = sweets.filter(sweet =>
    selectedCategory === 'All' || sweet.category === selectedCategory
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-orange-600" />
      </div>
    );
  }

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
                {/* Price badge removed */}
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
                
                <div className="flex items-center justify-center">
                  <button
                    onClick={() =>
                      handleOpenInquiry({
                        name: sweet.name,
                        image: sweet.image,
                        category: sweet.category,
                      })
                    }
                    className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-black text-white px-6 py-3 rounded-full text-sm font-cinzel font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Contact for Price
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
          <button
            onClick={() =>
              handleOpenInquiry({
                name: 'Sweet Deal Alert (15% Off Offer)',
                category: 'Festival Special Offer',
              })
            }
            className="bg-white text-gray-800 px-8 py-4 rounded-full text-lg font-cinzel font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
          >
            Inquire Now & Save
          </button>
        </motion.div>
      </div>

      {/* Inquiry / Contact for Price Modal */}
      <ContactForPriceModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        product={selectedProductForInquiry}
      />
    </div>
  );
};

export default Sweets;