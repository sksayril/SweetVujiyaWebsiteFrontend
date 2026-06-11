import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Video, BookOpen } from 'lucide-react';

interface HowToVideoItem {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  duration: string;
}

const HowToMake = () => {
  const [videoStates, setVideoStates] = useState<{ [key: string]: { isPlaying: boolean; isMuted: boolean } }>({});

  const items: HowToVideoItem[] = [
    {
      id: 1,
      title: 'How to Make Motichoor Laddu',
      description: 'Step-by-step process to make perfect Motichoor laddus at home.',
      videoUrl: 'https://res.cloudinary.com/dijpqfthq/video/upload/v1758870546/WhatsApp_Video_2025-09-25_at_13.57.11_pgey66.mp4',
      thumbnail: '/img9.jpeg',
      duration: '3:10'
    },
    {
      id: 2,
      title: 'Crispy Aloo Bhujia at Home',
      description: 'Simple method for crispy, flavorful Aloo Bhujia like a pro.',
      videoUrl: 'https://res.cloudinary.com/dijpqfthq/video/upload/v1758870746/WhatsApp_Video_2025-09-25_at_13.57.10_wjshwe.mp4',
      thumbnail: '/img8.jpeg',
      duration: '2:45'
    },
    {
      id: 3,
      title: 'Gulab Jamun – Soft and Juicy',
      description: 'The secret to soft, melt-in-mouth Gulab Jamun every time.',
      videoUrl: 'https://res.cloudinary.com/dijpqfthq/video/upload/v1758868741/WhatsApp_Video_2025-09-25_at_13.57.15_bboago.mp4',
      thumbnail: '/img7.jpeg',
      duration: '4:05'
    }
  ];

  const toggleVideoPlay = (id: number) => {
    const key = String(id);
    const el = document.getElementById(`howto-video-${id}`) as HTMLVideoElement | null;
    if (!el) return;
    if (el.paused) {
      el.play();
      setVideoStates(prev => ({ ...prev, [key]: { ...(prev[key] || { isMuted: true, isPlaying: false }), isPlaying: true } }));
    } else {
      el.pause();
      setVideoStates(prev => ({ ...prev, [key]: { ...(prev[key] || { isMuted: true, isPlaying: true }), isPlaying: false } }));
    }
  };

  const toggleVideoMute = (id: number) => {
    const key = String(id);
    const el = document.getElementById(`howto-video-${id}`) as HTMLVideoElement | null;
    if (!el) return;
    el.muted = !el.muted;
    setVideoStates(prev => ({ ...prev, [key]: { ...(prev[key] || { isMuted: true, isPlaying: false }), isMuted: el.muted } }));
  };

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-5 py-2 shadow">
            <Video className="h-5 w-5 text-gray-800" />
            <span className="font-cinzel font-semibold text-gray-800">How To Make</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-cinzel font-bold text-gray-900 mt-4">
            Learn to Make Our Favorites
          </h1>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Short, helpful videos showing how we craft some beloved sweets and namkeen.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((v, idx) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all"
            >
              <div className="relative aspect-video bg-black">
                <video
                  id={`howto-video-${v.id}`}
                  className="w-full h-full object-cover"
                  poster={v.thumbnail}
                  preload="metadata"
                  playsInline
                  muted
                >
                  <source src={v.videoUrl} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                  <button
                    onClick={() => toggleVideoPlay(v.id)}
                    className="bg-white rounded-full p-3 sm:p-4 shadow hover:shadow-md transition-transform hover:scale-105"
                    aria-label={videoStates[String(v.id)]?.isPlaying ? 'Pause video' : 'Play video'}
                  >
                    {videoStates[String(v.id)]?.isPlaying ? (
                      <Pause className="h-6 w-6 sm:h-8 sm:w-8 text-gray-900" />
                    ) : (
                      <Play className="h-6 w-6 sm:h-8 sm:w-8 text-gray-900 ml-0.5" />
                    )}
                  </button>
                  <button
                    onClick={() => toggleVideoMute(v.id)}
                    className="absolute top-3 right-3 bg-black/60 text-white rounded-full p-2"
                    aria-label={videoStates[String(v.id)]?.isMuted ? 'Unmute video' : 'Mute video'}
                  >
                    {videoStates[String(v.id)]?.isMuted ?? true ? (
                      <VolumeX className="h-4 w-4" />
                    ) : (
                      <Volume2 className="h-4 w-4" />
                    )}
                  </button>
                  <span className="absolute bottom-3 right-3 text-xs bg-black/70 text-white px-2 py-0.5 rounded">
                    {v.duration}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-cinzel font-bold text-lg text-gray-900">{v.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{v.description}</p>
                <div className="mt-3 inline-flex items-center text-gray-700 text-sm">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Easy steps, real ingredients, delicious results
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowToMake;
