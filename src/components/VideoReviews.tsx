import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Star, Users, ThumbsUp } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const VideoReviews = () => {
  const [videoStates, setVideoStates] = useState<{ [key: string]: { isPlaying: boolean; isMuted: boolean; isLoading: boolean; hasError: boolean } }>({});

  const videoReviews = [
    {
      id: 1,
      title: 'Customer Experience Review',
      customerName: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      description: 'Watch Priya share her amazing experience with our premium sweets collection',
      videoUrl: 'https://res.cloudinary.com/dijpqfthq/video/upload/v1758869487/WhatsApp_Video_2025-09-25_at_13.57.16_qvqthx.mp4',
      thumbnail: '/img1.jpeg',
      duration: '2:30',
      views: 1250,
      likes: 89
    },
    {
      id: 2,
      title: 'Product Quality Review',
      customerName: 'Rajesh Patel',
      location: 'Delhi',
      rating: 5,
      description: 'See Rajesh unbox and taste our traditional namkeen varieties',
      videoUrl: 'https://res.cloudinary.com/dijpqfthq/video/upload/v1758869487/WhatsApp_Video_2025-09-25_at_13.57.16_qvqthx.mp4',
      thumbnail: '/img2.jpeg',
      duration: '1:45',
      views: 980,
      likes: 67
    },
    {
      id: 3,
      title: 'Festival Special Review',
      customerName: 'Meera Gupta',
      location: 'Bangalore',
      rating: 5,
      description: 'Meera reviews our Diwali special sweets and namkeen collection',
      videoUrl: 'https://res.cloudinary.com/dijpqfthq/video/upload/v1758868741/WhatsApp_Video_2025-09-25_at_13.57.15_bboago.mp4',
      thumbnail: '/img3.jpeg',
      duration: '3:15',
      views: 2100,
      likes: 156
    },
    {
      id: 4,
      title: 'Family Taste Test',
      customerName: 'Amit Singh',
      location: 'Pune',
      rating: 5,
      description: 'Join Amit and his family as they try our signature sweets',
      videoUrl: 'https://res.cloudinary.com/dijpqfthq/video/upload/v1758868741/WhatsApp_Video_2025-09-25_at_13.57.15_bboago.mp4',
      thumbnail: '/img4.jpeg',
      duration: '4:20',
      views: 1850,
      likes: 134
    }
  ];

  const toggleVideoPlay = (videoId: string) => {
    const video = document.getElementById(`video-review-${videoId}`) as HTMLVideoElement;
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
    const video = document.getElementById(`video-review-${videoId}`) as HTMLVideoElement;
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
    <section className="py-20 bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-lg">
              <Users className="h-6 w-6 text-orange-600" />
              <span className="text-lg font-semibold text-gray-800">Video Reviews</span>
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Watch Our <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Happy Customers</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the joy and satisfaction of our customers through their authentic video reviews. 
            See their reactions, hear their stories, and discover why they choose Krishna & Kanha for their sweet moments.
          </p>
        </motion.div>

        {/* Video Reviews Grid */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          centeredSlides={false}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
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
            1280: {
              slidesPerView: 4,
            },
          }}
          className="pb-16"
        >
          {videoReviews.map((review, index) => (
            <SwiperSlide key={review.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Video Container */}
                <div className="relative aspect-video bg-gray-900">
                  <video
                    id={`video-review-${review.id}`}
                    className="w-full h-full object-cover"
                    poster={review.thumbnail}
                    onLoadStart={() => handleVideoLoadStart(review.id.toString())}
                    onLoadedData={() => handleVideoLoad(review.id.toString())}
                    onError={() => handleVideoError(review.id.toString())}
                    loop
                    muted
                    preload="metadata"
                    playsInline
                    webkit-playsinline="true"
                  >
                    <source src={review.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Loading State */}
                  {videoStates[review.id]?.isLoading && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                    </div>
                  )}

                  {/* Error State */}
                  {videoStates[review.id]?.hasError && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <div className="text-center text-white">
                        <p className="text-sm">Video unavailable</p>
                        <p className="text-xs mt-1">Please try again later</p>
                      </div>
                    </div>
                  )}

                  {/* Video Controls Overlay */}
                  {!videoStates[review.id]?.isLoading && !videoStates[review.id]?.hasError && (
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center group">
                      <button
                        onClick={() => toggleVideoPlay(review.id.toString())}
                        className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-4 sm:p-5 transition-all duration-300 transform hover:scale-110 group-hover:bg-opacity-100"
                      >
                        {videoStates[review.id]?.isPlaying ? (
                          <Pause className="h-8 w-8 sm:h-10 sm:w-10 text-gray-800" />
                        ) : (
                          <Play className="h-8 w-8 sm:h-10 sm:w-10 text-gray-800 ml-1" />
                        )}
                      </button>
                    </div>
                  )}

                  {/* Mute/Unmute Button */}
                  {!videoStates[review.id]?.isLoading && !videoStates[review.id]?.hasError && (
                    <button
                      onClick={() => toggleVideoMute(review.id.toString())}
                      className="absolute top-3 right-3 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition-all duration-300"
                    >
                      {videoStates[review.id]?.isMuted ? (
                        <VolumeX className="h-4 w-4 text-white" />
                      ) : (
                        <Volume2 className="h-4 w-4 text-white" />
                      )}
                    </button>
                  )}

                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    {review.duration}
                  </div>

                  {/* Rating Stars */}
                  <div className="absolute top-3 left-3 flex space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {review.title}
                  </h3>
                  
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white font-bold text-sm mr-3">
                      {review.customerName.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{review.customerName}</p>
                      <p className="text-sm text-gray-500">{review.location}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {review.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{review.views.toLocaleString()} views</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{review.likes} likes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Share Your Experience
            </h3>
            <p className="text-gray-600 mb-6">
              Love our products? We'd love to hear from you! Share your video review and be featured on our website.
            </p>
            <button className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Submit Your Review
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoReviews;
