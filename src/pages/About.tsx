import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Heart, Users, Leaf, Shield, MapPin, Phone, Mail, Star, User, Briefcase, Truck, FileText, Calculator, Scale, Eye, Download, X } from 'lucide-react';

const About = () => {
  const [previewPdf, setPreviewPdf] = useState<string | null>(null);

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

  const businessHours = [
    { day: 'Monday', hours: '9:00 AM - 10:00 PM' },
    { day: 'Tuesday', hours: '9:00 AM - 10:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM - 10:00 PM' },
    { day: 'Thursday', hours: '9:00 AM - 10:00 PM' },
    { day: 'Friday', hours: '9:00 AM - 10:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 10:00 PM' },
    { day: 'Sunday', hours: '9:00 AM - 10:00 PM' }
  ];

  const teamMembers = [
    {
      name: 'Director & CEO',
      position: 'Founder',
      phone: '6392574854',
      icon: User,
      color: 'from-gray-800 to-black',
      description: 'Leading the vision and strategic direction'
    },
    {
      name: 'Branch Manager',
      position: 'Operations Head',
      phone: '8470986212',
      icon: Briefcase,
      color: 'from-blue-600 to-blue-800',
      description: 'Managing daily operations and customer relations'
    },
    {
      name: 'Transport Incharge',
      position: 'Logistics Manager',
      phone: '9129577392',
      icon: Truck,
      color: 'from-green-600 to-green-800',
      description: 'Overseeing delivery and transportation operations'
    },
    {
      name: 'Dispatch Incharge',
      position: 'Dispatch Manager',
      phone: '9682425343',
      icon: FileText,
      color: 'from-purple-600 to-purple-800',
      description: 'Managing order processing and dispatch operations'
    },
    {
      name: 'Account Department',
      position: 'Finance Team',
      phone: '9235183056',
      icon: Calculator,
      color: 'from-orange-600 to-orange-800',
      description: 'Handling financial operations and accounting'
    },
    {
      name: 'Rana Thakur',
      position: 'Company Advocate',
      phone: '9956595815',
      icon: Scale,
      color: 'from-indigo-600 to-indigo-800',
      description: 'Legal counsel and compliance management'
    }
  ];

  return (
    <div className="min-h-screen py-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 relative overflow-hidden">
      {/* Beautiful gradient background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/20 via-transparent to-pink-100/20" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-200/30 to-indigo-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-cyan-200/20 to-blue-200/20 rounded-full blur-2xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-cinzel font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">Sweet Story</span>
          </h1>
          <p className="text-xl font-cinzel text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Born from a passion for authentic Indian flavors and a commitment to quality, 
            Krishna & Kanha Sales Enterprises has been bringing joy to families in Kanpur for over two decades. 
            Our journey is one of tradition, innovation, and an unwavering dedication to sweetness.
          </p>
        </motion.div>

        {/* Business Info Section */}
       

        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5" />
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full border-4 border-white/20 overflow-hidden shadow-2xl">
                    <img
                      src="/founder (1).jpeg"
                      alt="Founder - Krishna & Kanha"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                    <Award className="h-6 w-6 text-gray-300" />
                    <span className="text-gray-300 font-cinzel font-semibold">Founder & CEO</span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-cinzel font-bold mb-4">
                    Krishna & Kanha
                  </h2>
                  <p className="text-lg mb-6 opacity-90 font-cinzel leading-relaxed">
                    "With over 25 years of passion for authentic Indian sweets, we've been crafting 
                    happiness one sweet at a time. Our commitment to quality and tradition has made 
                    us a trusted name in the sweet industry across Kanpur and beyond."
                  </p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                      <Users className="h-5 w-5" />
                      <span className="font-cinzel font-semibold">25+ Years Experience</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                      <Heart className="h-5 w-5" />
                      <span className="font-cinzel font-semibold">10,000+ Happy Customers</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                      <Star className="h-5 w-5" />
                      <span className="font-cinzel font-semibold">4.8★ Rating</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-cinzel font-bold text-gray-900 mb-12 text-center">
            What Makes Us <span className="bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">Special</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                <div className="bg-gradient-to-r from-gray-800 to-black w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-cinzel font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed font-cinzel">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certificates Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 text-sm font-semibold rounded-full border border-blue-300/50 shadow-sm">
                🏆 Our Certifications
              </span>
            </motion.div>
            <h2 className="text-4xl font-cinzel font-bold text-gray-900 mb-6">
              Official <span className="bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">Certificates</span>
            </h2>
            <p className="text-xl text-gray-600 font-cinzel max-w-3xl mx-auto leading-relaxed">
              We are proud to showcase our official certifications and business documents that demonstrate our commitment to quality and compliance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* IEC Certificate Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-gray-200/50 overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full -translate-y-32 translate-x-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-200 rounded-full translate-y-24 -translate-x-24"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-cinzel font-bold text-gray-900">IEC Certificate</h3>
                    <p className="text-gray-600 font-cinzel">Import Export Code Certificate</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border border-blue-200/50 p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-700 group-hover:scale-110 transition-all duration-300 shadow-lg">
                          <FileText className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-cinzel font-bold text-gray-900 group-hover:text-blue-800 transition-colors duration-300">
                            IEC Certificate
                          </h4>
                          <p className="text-sm text-gray-600 font-cinzel">Official Import Export Code Certificate</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded-full font-semibold">Official</span>
                            <span className="text-xs text-gray-500">Government Certificate</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <motion.button
                      onClick={() => setPreviewPdf('/certificateOfIEC.pdf')}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 py-3 px-6 bg-blue-600 text-white font-cinzel font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                    >
                      <Eye className="h-5 w-5" />
                      <span>Preview Certificate</span>
                    </motion.button>
                    <motion.a
                      href="/certificateOfIEC.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 py-3 px-6 bg-gray-800 text-white font-cinzel font-semibold rounded-xl hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                    >
                      <Download className="h-5 w-5" />
                      <span>Download PDF</span>
                    </motion.a>
                  </div>
                  
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200/50">
                    <p className="text-sm text-gray-600 font-cinzel text-center">
                      <strong>Valid Certificate:</strong> This certificate authorizes us to conduct import and export operations, 
                      demonstrating our compliance with government regulations and international trade standards.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Additional Certificates Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Quality Assurance */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-200">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-800 rounded-xl flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-cinzel font-bold text-gray-900">Quality Assurance</h3>
                    <p className="text-gray-600 font-cinzel">Certified Quality Standards</p>
                  </div>
                </div>
                <p className="text-gray-600 font-cinzel leading-relaxed">
                  We maintain strict quality control measures and follow industry best practices to ensure 
                  every product meets the highest standards of taste, freshness, and safety.
                </p>
              </div>

              {/* Business Registration */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-200">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-cinzel font-bold text-gray-900">Business Registration</h3>
                    <p className="text-gray-600 font-cinzel">Legally Registered Entity</p>
                  </div>
                </div>
                <p className="text-gray-600 font-cinzel leading-relaxed">
                  Krishna & Kanha Sales Enterprises is a fully registered business entity with all 
                  necessary licenses and permits to operate in the food industry.
                </p>
              </div>

              {/* Trust & Reliability */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-200">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-orange-800 rounded-xl flex items-center justify-center">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-cinzel font-bold text-gray-900">Trust & Reliability</h3>
                    <p className="text-gray-600 font-cinzel">25+ Years of Excellence</p>
                  </div>
                </div>
                <p className="text-gray-600 font-cinzel leading-relaxed">
                  With over 25 years of experience in the sweet industry, we have built a reputation 
                  for trust, reliability, and consistent quality that our customers can depend on.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-cinzel font-bold text-gray-900 mb-12 text-center">
            Our <span className="bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">Journey</span>
          </h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gray-800 to-black rounded-full"></div>
            
            <div className="space-y-12">
              {[
                { year: '1999', title: 'The Beginning', description: 'Started with a small sweet shop in Kanpur' },
                { year: '2005', title: 'First Expansion', description: 'Introduced namkeen and expanded product range' },
                { year: '2012', title: 'Community Recognition', description: 'Became a trusted name in Sangava Road area' },
                { year: '2018', title: 'Quality Certification', description: 'Received FSSAI and ISO certifications' },
                { year: '2023', title: 'Local Excellence', description: 'Won "Best Traditional Sweets" in Kanpur' },
                { year: '2025', title: 'Modern Era', description: 'Extended hours and premium packaging services' }
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-gray-200">
                      <div className="text-2xl font-cinzel font-bold text-gray-800 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-cinzel font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 font-cinzel">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-4 h-4 bg-gradient-to-r from-gray-800 to-black rounded-full border-4 border-white shadow-lg"></div>
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
          className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 text-white text-center mb-16"
        >
          <h2 className="text-3xl font-cinzel font-bold mb-6">Meet Our Team</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto font-cinzel">
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
                src="/founder (1).jpeg"
                alt="Krishna & Kanha - Founder"
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white/20 object-cover"
              />
              <h3 className="text-xl font-cinzel font-semibold">Krishna & Kanha</h3>
              <p className="text-gray-300 font-cinzel">Founder & CEO</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Address & Contact */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-800 to-black rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-cinzel font-bold text-gray-900 mb-2">Our Location</h3>
                    <p className="text-gray-700 font-cinzel leading-relaxed">
                      Ramadevi, I.1-87, Sangava Road,<br />
                      Kanpur, Uttar Pradesh 208021<br />
                      India
                    </p>
                    <div className="mt-2 flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-600 font-cinzel font-semibold text-sm">Open Now</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-cinzel font-bold text-gray-900 mb-2">Contact Us</h3>
                    <p className="text-gray-700 font-cinzel">
                      <a href="tel:+916392574854" className="text-gray-800 hover:text-black transition-colors duration-300">
                        +91 63925 74854
                      </a>
                    </p>
                  </div>
                </div>

                                 <div className="flex items-start space-x-4">
                   <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                     <Mail className="h-6 w-6 text-white" />
                   </div>
                   <div>
                     <h3 className="text-xl font-cinzel font-bold text-gray-900 mb-2">Email Us</h3>
                     <p className="text-gray-700 font-cinzel">
                       <a href="mailto:krishnakanhasalesenterprises@gmail.com" className="text-gray-800 hover:text-black transition-colors duration-300">
                         krishnakanhasalesenterprises@gmail.com
                       </a>
                     </p>
                   </div>
                 </div>
              </div>

              {/* Business Hours */}
              <div>
                <h3 className="text-xl font-cinzel font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <Clock className="h-6 w-6 text-gray-700" />
                  <span>Business Hours</span>
                </h3>
                <div className="space-y-2">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="font-cinzel font-semibold text-gray-700">{schedule.day}</span>
                      <span className="font-cinzel text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                  <p className="text-gray-700 font-cinzel font-semibold text-center">
                    ✨ Open 7 Days a Week - Extended Hours! ✨
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Directory Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 text-sm font-semibold rounded-full border border-gray-300/50 shadow-sm">
                👥 Our Team Directory
              </span>
            </motion.div>
            <h2 className="text-4xl font-cinzel font-bold text-gray-900 mb-6">
              Contact Our <span className="bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-cinzel">
              Get in touch with the right person for your specific needs. Our dedicated team is here to assist you 
              with orders, deliveries, accounts, and legal matters.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden"
              >
                {/* Header with Icon */}
                <div className={`bg-gradient-to-r ${member.color} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/10" />
                  <div className="relative z-10 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <member.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-cinzel font-bold">{member.name}</h3>
                      <p className="text-sm opacity-90 font-cinzel">{member.position}</p>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"></div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 font-cinzel leading-relaxed">
                    {member.description}
                  </p>
                  
                  {/* Contact Information */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200/50">
                      <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-500 font-cinzel font-medium">Contact Number</p>
                        <a 
                          href={`tel:+91${member.phone}`}
                          className="text-gray-900 font-cinzel font-semibold hover:text-gray-700 transition-colors duration-300"
                        >
                          +91 {member.phone}
                        </a>
                      </div>
                    </div>
                    
                    {/* Quick Action Button */}
                    <motion.a
                      href={`tel:+91${member.phone}`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="block w-full text-center py-3 px-4 bg-gradient-to-r from-gray-800 to-black text-white font-cinzel font-semibold rounded-xl hover:from-gray-900 hover:to-black transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Call Now
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Contact Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200/50 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Phone className="h-6 w-6 text-gray-700" />
                <h4 className="text-lg font-semibold text-gray-900 font-cinzel">Quick Contact Guide</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="text-left">
                  <p className="text-gray-600 font-cinzel mb-2"><strong>For Orders & General Inquiries:</strong></p>
                  <p className="text-gray-800 font-cinzel">Director & CEO or Branch Manager</p>
                </div>
                <div className="text-left">
                  <p className="text-gray-600 font-cinzel mb-2"><strong>For Delivery & Logistics:</strong></p>
                  <p className="text-gray-800 font-cinzel">Transport Incharge or Dispatch Incharge</p>
                </div>
                <div className="text-left">
                  <p className="text-gray-600 font-cinzel mb-2"><strong>For Accounts & Payments:</strong></p>
                  <p className="text-gray-800 font-cinzel">Account Department</p>
                </div>
                <div className="text-left">
                  <p className="text-gray-600 font-cinzel mb-2"><strong>For Legal Matters:</strong></p>
                  <p className="text-gray-800 font-cinzel">Company Advocate - Rana Thakur</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* PDF Preview Modal */}
      {previewPdf && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setPreviewPdf(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-cinzel font-bold text-gray-900">Certificate Preview</h3>
                  <p className="text-sm text-gray-600 font-cinzel">
                    {previewPdf.includes('certificateOfIEC') ? 'IEC Certificate - Import Export Code' : 'Official Document'}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <motion.a
                  href={previewPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-300 shadow-lg"
                  title="Download PDF"
                >
                  <Download className="h-5 w-5" />
                </motion.a>
                <motion.button
                  onClick={() => setPreviewPdf(null)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition-colors duration-300 shadow-lg"
                  title="Close Preview"
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="h-[75vh] bg-gray-100">
              <iframe
                src={`${previewPdf}#toolbar=1&navpanes=1&scrollbar=1&zoom=75`}
                width="100%"
                height="100%"
                className="border-0"
                title="Certificate Preview"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600 font-cinzel">Valid Certificate</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-gray-600 font-cinzel">Government Verified</span>
                  </div>
                </div>
                <motion.button
                  onClick={() => setPreviewPdf(null)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gray-800 text-white font-cinzel font-semibold rounded-xl hover:bg-gray-900 transition-colors duration-300 shadow-lg"
                >
                  Close Preview
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default About;