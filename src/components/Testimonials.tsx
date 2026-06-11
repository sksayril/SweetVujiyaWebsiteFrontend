import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const [videoStates, setVideoStates] = useState<{ [key: string]: { isPlaying: boolean; isMuted: boolean; isLoading: boolean; hasError: boolean } }>({});

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      text: 'Absolutely incredible sweets! The Kaju Katli reminds me of my grandmother\'s recipes. Pure quality and authentic taste.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      type: 'text'
    },
    {
      id: 2,
      name: 'Rajesh Patel',
      location: 'Delhi',
      rating: 5,
      text: 'Best namkeen in the city! Fresh, crispy, and perfectly spiced. Their mixture is now a staple in our household.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      type: 'text'
    },
    {
      id: 3,
      name: 'Meera Gupta',
      location: 'Bangalore',
      rating: 5,
      text: 'Outstanding quality and service! Ordered for Diwali celebration and everyone was amazed by the freshness and taste.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      type: 'text'
    },
    {
      id: 4,
      name: 'Amit Singh',
      location: 'Pune',
      rating: 5,
      text: 'Traditional flavors with modern packaging. The Gulab Jamuns are simply divine - soft, sweet, and perfect!',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      type: 'text'
    },
    {
      id: 5,
      name: 'Customer Video Review',
      location: 'Verified Customer',
      rating: 5,
      text: 'Watch our customer share their experience with our delicious sweets and namkeen products!',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      type: 'video',
      videoUrl: 'https://res.cloudinary.com/dijpqfthq/video/upload/v1758868741/WhatsApp_Video_2025-09-25_at_13.57.15_bboago.mp4'
    },
    {
      id: 6,
      name: 'Sneha Verma',
      location: 'Ahmedabad',
      rating: 5,
      text: 'The quality is exceptional! Every bite takes me back to my childhood. The packaging is also very elegant and perfect for gifting.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      type: 'text'
    }
  ];

  const toggleVideoPlay = (videoId: string) => {
    const video = document.getElementById(`video-${videoId}`) as HTMLVideoElement;
    if (video) {
      if (video.paused) {
        video.play();
        setVideoStates(prev => ({
          ...prev,
          [videoId]: { ...prev[videoId], isPlaying: true }
        }));
      } else {
        video.pause();
        setVideoStates(prev => ({
          ...prev,
          [videoId]: { ...prev[videoId], isPlaying: false }
        }));
      }
    }
  };

  const toggleVideoMute = (videoId: string) => {
    const video = document.getElementById(`video-${videoId}`) as HTMLVideoElement;
    if (video) {
      video.muted = !video.muted;
      setVideoStates(prev => ({
        ...prev,
        [videoId]: { ...prev[videoId], isMuted: video.muted }
      }));
    }
  };

  const handleVideoLoad = (videoId: string) => {
    setVideoStates(prev => ({
      ...prev,
      [videoId]: { isPlaying: false, isMuted: true, isLoading: false, hasError: false }
    }));
  };

  const handleVideoError = (videoId: string) => {
    setVideoStates(prev => ({
      ...prev,
      [videoId]: { isPlaying: false, isMuted: true, isLoading: false, hasError: true }
    }));
  };

  const handleVideoLoadStart = (videoId: string) => {
    setVideoStates(prev => ({
      ...prev,
      [videoId]: { isPlaying: false, isMuted: true, isLoading: true, hasError: false }
    }));
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full border-4 border-gray-300 overflow-hidden shadow-xl mb-6">
              <img
                src="/founder (1).jpeg"
                alt="Founder - Krishna & Kanha"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">From Our Founder</h3>
            <p className="text-lg text-gray-600 max-w-2xl">
              "We believe in creating not just sweets, but memories that last a lifetime. Every product we make carries the essence of our tradition and the promise of quality."
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="bg-gradient-to-r from-gray-700 to-black bg-clip-text text-transparent">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from the sweet lovers who have experienced the magic of our confections. Watch their video reviews and read their testimonials!
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
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
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden"
              >
                <Quote className="absolute top-4 right-4 h-8 w-8 text-gray-300" />
                
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full border-4 border-gray-300 overflow-hidden bg-gray-100 flex items-center justify-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                            <span class="text-gray-600 font-bold text-lg">${testimonial.name.charAt(0)}</span>
                          </div>
                        `;
                      }}
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-500">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gray-600 fill-current" />
                  ))}
                </div>

                {testimonial.type === 'video' ? (
                  <div className="relative">
                    <div className="relative rounded-lg overflow-hidden bg-gray-900">
                      <video
                        id={`video-${testimonial.id}`}
                        className="w-full h-48 sm:h-56 md:h-64 object-cover"
                        poster="/img1.jpeg"
                        onLoadStart={() => handleVideoLoadStart(testimonial.id.toString())}
                        onLoadedData={() => handleVideoLoad(testimonial.id.toString())}
                        onError={() => handleVideoError(testimonial.id.toString())}
                        loop
                        muted
                        preload="metadata"
                        playsInline
                        webkit-playsinline="true"
                      >
                        <source src={testimonial.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      
                      {/* Loading State */}
                      {videoStates[testimonial.id]?.isLoading && (
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                        </div>
                      )}

                      {/* Error State */}
                      {videoStates[testimonial.id]?.hasError && (
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                          <div className="text-center text-white">
                            <p className="text-sm">Video unavailable</p>
                            <p className="text-xs mt-1">Please try again later</p>
                          </div>
                        </div>
                      )}

                      {/* Video Controls Overlay */}
                      {!videoStates[testimonial.id]?.isLoading && !videoStates[testimonial.id]?.hasError && (
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                          <button
                            onClick={() => toggleVideoPlay(testimonial.id.toString())}
                            className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 sm:p-4 transition-all duration-300 transform hover:scale-110 touch-manipulation"
                          >
                            {videoStates[testimonial.id]?.isPlaying ? (
                              <Pause className="h-6 w-6 sm:h-8 sm:w-8 text-gray-800" />
                            ) : (
                              <Play className="h-6 w-6 sm:h-8 sm:w-8 text-gray-800 ml-0.5 sm:ml-1" />
                            )}
                          </button>
                        </div>
                      )}

                      {/* Mute/Unmute Button */}
                      {!videoStates[testimonial.id]?.isLoading && !videoStates[testimonial.id]?.hasError && (
                        <button
                          onClick={() => toggleVideoMute(testimonial.id.toString())}
                          className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-1.5 sm:p-2 transition-all duration-300 touch-manipulation"
                        >
                          {videoStates[testimonial.id]?.isMuted ? (
                            <VolumeX className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                          ) : (
                            <Volume2 className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                          )}
                        </button>
                      )}
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed italic mt-4">
                      "{testimonial.text}"
                    </p>
                  </div>
                ) : (
                  <p className="text-gray-700 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                )}

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-600 to-black"></div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;