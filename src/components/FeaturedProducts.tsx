
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const FeaturedProducts = () => {
  const [likedProducts, setLikedProducts] = useState<Record<number, boolean>>({});

  const toggleLike = (productId: number) => {
    setLikedProducts(prev => ({ ...prev, [productId]: !prev[productId] }));
  };
  const products = [
    {
      id: 1,
      name: 'Besan Laddu',
      category: 'Traditional Sweets',
      image: '/img2.jpeg',
      price: '₹400',
      rating: 4.9,
      description: 'Traditional gram flour laddus with ghee and nuts'
    },
    {
      id: 2,
      name: 'Coconut Laddu',
      category: 'Premium Sweets',
      image: '/img3.jpeg',
      price: '₹350',
      rating: 4.8,
      description: 'Fresh coconut laddus with cardamom flavor'
    },
    {
      id: 3,
      name: 'Motichoor Laddu',
      category: 'Festival Sweets',
      image: '/img4.jpeg',
      price: '₹450',
      rating: 4.7,
      description: 'Fine boondi laddus with rich ghee and dry fruits'
    },
    {
      id: 4,
      name: 'Rava Laddu',
      category: 'Classic Sweets',
      image: '/img5.jpeg',
      price: '₹300',
      rating: 4.9,
      description: 'Semolina laddus with cashews and raisins'
    },
    {
      id: 5,
      name: 'Til Laddu',
      category: 'Winter Special',
      image: '/img2.jpeg',
      price: '₹320',
      rating: 4.6,
      description: 'Sesame seed laddus with jaggery and ghee'
    },
    {
      id: 6,
      name: 'Dry Fruit Laddu',
      category: 'Premium Sweets',
      image: '/img3.jpeg',
      price: '₹600',
      rating: 4.8,
      description: 'Rich laddus loaded with almonds, cashews and pistachios'
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100/20 via-transparent to-gray-200/20" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-gray-200/30 to-gray-300/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-gray-300/30 to-gray-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 text-sm font-semibold rounded-full border border-gray-300/50 shadow-sm">
              ✨ Premium Collection
            </span>
          </motion.div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Featured{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-gray-700 via-gray-800 to-black bg-clip-text text-transparent">
                Delicacies
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-gray-600 to-black rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Discover our handpicked selection of the finest sweets and namkeen,{' '}
            <span className="font-semibold text-gray-700">crafted with authentic recipes</span>{' '}
            and premium ingredients sourced from across India
          </motion.p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination, EffectCoverflow]}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          spaceBetween={50}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          className="!pb-16"
        >
          {products.map((product, index) => (
            <SwiperSlide key={product.id} className="!w-96">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-3 group border border-white/20"
                whileHover={{ scale: 1.02 }}
              >
                {/* Premium glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 via-transparent to-gray-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                
                <div className="relative overflow-hidden rounded-t-3xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />
                  
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                    whileHover={{ scale: 1.1 }}
                  />
                  
                  {/* Premium heart button */}
                  <motion.button
                    onClick={() => toggleLike(product.id)}
                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white transition-colors duration-300 z-20 shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.div
                      animate={{ scale: likedProducts[product.id] ? 1.2 : 1 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                      <Heart 
                        className={`w-6 h-6 transition-colors duration-300 ${likedProducts[product.id] ? 'text-red-500' : 'text-white'}`}
                        fill={likedProducts[product.id] ? 'currentColor' : 'none'}
                      />
                    </motion.div>
                  </motion.button>
                  
                  {/* Enhanced category badge */}
                  <motion.div
                    className="absolute bottom-4 left-4 bg-gradient-to-r from-gray-700 via-gray-800 to-black text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm border border-white/20"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  >
                    {product.category}
                  </motion.div>
                  
                  {/* Premium shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                </div>
                
                <div className="relative p-8">
                  <div className="flex items-start justify-between mb-4">
                    <motion.h3
                      className="text-2xl font-bold text-gray-900 leading-tight"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                    >
                      {product.name}
                    </motion.h3>
                    
                    <motion.div
                      className="flex items-center space-x-1 bg-gradient-to-r from-gray-50 to-gray-100 px-3 py-1 rounded-full border border-gray-200/50"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                    >
                      <Star className="h-4 w-4 text-gray-600 fill-current" />
                      <span className="text-sm font-semibold text-gray-700">{product.rating}</span>
                    </motion.div>
                  </div>
                  
                  <motion.p
                    className="text-gray-600 mb-6 text-base leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                  >
                    {product.description}
                  </motion.p>
                  
                  <div className="flex items-center justify-between">
                    <motion.span
                      className="text-3xl font-bold bg-gradient-to-r from-gray-700 via-gray-800 to-black bg-clip-text text-transparent"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                    >
                      {product.price}
                    </motion.span>
                    
                    <motion.button
                      className="relative bg-gradient-to-r from-gray-700 via-gray-800 to-black hover:from-gray-800 hover:via-black hover:to-black text-white px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl overflow-hidden group"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10">Add to Cart</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              to="/products"
              className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-gray-700 via-gray-800 to-black hover:from-gray-800 hover:via-black hover:to-black text-white px-12 py-5 rounded-full text-lg font-bold transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-3xl overflow-hidden"
            >
              {/* Premium button background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              
              <span className="relative z-10">View All Products</span>
              <motion.div
                className="relative z-10"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </motion.div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600/50 to-black/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </Link>
          </motion.div>
          
          {/* Decorative elements */}
          <motion.div
            className="flex justify-center items-center space-x-2 mt-8 text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gray-400" />
            <span className="text-sm font-medium">Premium Quality Guaranteed</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;