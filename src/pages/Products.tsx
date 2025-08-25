import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Heart, Star, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Traditional Sweets', 'Premium Sweets', 'Festival Special', 'Winter Special'];

  const products = [
    {
      id: 1,
      name: 'Besan Laddu',
      category: 'Traditional Sweets',
      image: '/img2.jpeg',
      price: '₹400',
      originalPrice: '₹450',
      rating: 4.9,
      reviews: 128,
      description: 'Traditional gram flour laddus with pure ghee and mixed nuts',
      discount: '11%'
    },
    {
      id: 2,
      name: 'Coconut Laddu',
      category: 'Premium Sweets',
      image: '/img3.jpeg',
      price: '₹350',
      originalPrice: '₹400',
      rating: 4.8,
      reviews: 95,
      description: 'Fresh coconut laddus with cardamom and condensed milk',
      discount: '13%'
    },
    {
      id: 3,
      name: 'Motichoor Laddu',
      category: 'Festival Special',
      image: '/img4.jpeg',
      price: '₹450',
      originalPrice: '₹500',
      rating: 4.7,
      reviews: 87,
      description: 'Fine boondi laddus with rich ghee and premium dry fruits',
      discount: '10%'
    },
    {
      id: 4,
      name: 'Rava Laddu',
      category: 'Traditional Sweets',
      image: '/img5.jpeg',
      price: '₹300',
      originalPrice: '₹350',
      rating: 4.9,
      reviews: 156,
      description: 'Semolina laddus with cashews, raisins and cardamom',
      discount: '14%'
    },
    {
      id: 5,
      name: 'Til Laddu',
      category: 'Winter Special',
      image: '/img2.jpeg',
      price: '₹320',
      originalPrice: '₹360',
      rating: 4.6,
      reviews: 73,
      description: 'Sesame seed laddus with jaggery and pure ghee',
      discount: '11%'
    },
    {
      id: 6,
      name: 'Dry Fruit Laddu',
      category: 'Premium Sweets',
      image: '/img3.jpeg',
      price: '₹600',
      originalPrice: '₹700',
      rating: 4.8,
      reviews: 92,
      description: 'Rich laddus loaded with almonds, cashews and pistachios',
      discount: '14%'
    },
    {
      id: 7,
      name: 'Kaju Laddu',
      category: 'Premium Sweets',
      image: '/img4.jpeg',
      price: '₹750',
      originalPrice: '₹850',
      rating: 4.9,
      reviews: 110,
      description: 'Premium cashew laddus with silver foil and rose essence',
      discount: '12%'
    },
    {
      id: 8,
      name: 'Malai Laddu',
      category: 'Festival Special',
      image: '/img5.jpeg',
      price: '₹380',
      originalPrice: '₹420',
      rating: 4.7,
      reviews: 85,
      description: 'Creamy milk-based laddus with saffron and pistachios',
      discount: '10%'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
            Our <span className="bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">Products</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our complete range of premium sweets and namkeen, made with authentic recipes and finest ingredients
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-4 mb-8"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.discount && (
                  <div className="absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.discount} OFF
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
                  <Heart className="h-5 w-5 text-gray-400 hover:text-red-500 transition-colors cursor-pointer" />
                </div>
                <div className="absolute bottom-4 left-4 bg-gradient-to-r from-gray-800 to-black text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-gray-400 fill-current" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                    <span className="text-xs text-gray-400">({product.reviews})</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        {product.originalPrice}
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

        {/* Category Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Explore by Category
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/sweets"
              className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-black text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View All Sweets
            </Link>
            <Link
              to="/namkeen"
              className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View All Namkeen
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;