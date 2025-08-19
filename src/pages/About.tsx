import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Heart, Users, Leaf, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every sweet and namkeen is crafted with care and passion by our master chefs'
    },
    {
      icon: Leaf,
      title: 'Pure Ingredients',
      description: '100% natural ingredients sourced from trusted suppliers across India'
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'Strict quality controls and hygiene standards in every step of production'
    },
    {
      icon: Clock,
      title: 'Fresh Daily',
      description: 'Made fresh every day to ensure maximum taste and nutritional value'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for excellence in taste and quality by food industry experts'
    },
    {
      icon: Users,
      title: 'Family Legacy',
      description: '25+ years of serving families with authentic Indian flavors'
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-orange-500 to-yellow-600 bg-clip-text text-transparent">Sweet Story</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Born from a passion for authentic Indian flavors and a commitment to quality, 
             Krishna & Kanha Sales Enterprises has been bringing joy to families across India for over two decades. 
            Our journey is one of tradition, innovation, and an unwavering dedication to sweetness.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Traditional Sweet Making"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              From Humble Beginnings to Sweet Success
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              It all started in 1999 when our founder, Ravi Sharma, began making traditional sweets in his small kitchen in Mumbai. 
              With recipes passed down from his grandmother and a vision to share authentic Indian flavors with the world, 
              he started  Krishna & Kanha Sales Enterprises with just ₹5,000 and a dream.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              What began as a small neighborhood sweet shop has now grown into a beloved brand that serves thousands of 
              customers across India. Our commitment to quality, authenticity, and customer satisfaction has remained unchanged, 
              even as we've expanded our offerings and modernized our processes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today,  Krishna & Kanha Sales Enterprises is not just a business—it's a legacy that continues to bring families together through 
              the universal language of sweet and savory delights.
            </p>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What Makes Us <span className="bg-gradient-to-r from-orange-500 to-yellow-600 bg-clip-text text-transparent">Special</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-gradient-to-r from-orange-500 to-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our <span className="bg-gradient-to-r from-orange-500 to-yellow-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 to-yellow-500 rounded-full"></div>
            
            <div className="space-y-12">
              {[
                { year: '1999', title: 'The Beginning', description: 'Started with a small sweet shop in Mumbai' },
                { year: '2005', title: 'First Expansion', description: 'Opened second location and introduced namkeen' },
                { year: '2012', title: 'Online Presence', description: 'Launched online store and delivery services' },
                { year: '2018', title: 'Quality Certification', description: 'Received FSSAI and ISO certifications' },
                { year: '2023', title: 'National Recognition', description: 'Won "Best Traditional Sweets" award' },
                { year: '2025', title: 'Modern Era', description: 'Launched premium packaging and nationwide delivery' }
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <div className="text-2xl font-bold text-orange-500 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl p-8 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Behind every perfect sweet is a team of passionate artisans, quality experts, and customer service professionals 
            who work tirelessly to bring you the best of Indian confectionery.
          </p>
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                alt="Mr Nikhil Gupta"
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white/50"
              />
              <h3 className="text-xl font-semibold">Mr Nikhil Gupta</h3>
              <p className="text-orange-100">Director & CEO</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;