import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import About from '../components/AboutSection';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <About />
      <Testimonials />
    </div>
  );
};

export default Home;