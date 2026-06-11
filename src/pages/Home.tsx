import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import About from '../components/AboutSection';
import Testimonials from '../components/Testimonials';
import VideoReviews from '../components/VideoReviews';

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <About />
      <Testimonials />
      <VideoReviews />
    </div>
  );
};

export default Home;