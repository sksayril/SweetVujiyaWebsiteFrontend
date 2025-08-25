import React, { useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Truck, 
  Users, 
  Award, 
  TrendingUp, 
  Shield, 
  Star,
  CheckCircle,
  Building2,
  Globe,
  Handshake,
  Calculator,
  FileText,
  Send,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';

interface DistributorForm {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  businessType: string;
  experience: string;
  monthlyVolume: string;
  message: string;
}

interface DistributorFormErrors {
  companyName?: string;
  contactPerson?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  pincode?: string;
  businessType?: string;
  experience?: string;
  monthlyVolume?: string;
  message?: string;
}

const Distributors = () => {
  const [formData, setFormData] = useState<DistributorForm>({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    businessType: '',
    experience: '',
    monthlyVolume: '',
    message: ''
  });

  const [errors, setErrors] = useState<DistributorFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Input sanitization function
  const sanitizeInput = (input: string): string => {
    return input.trim().replace(/[<>]/g, '');
  };

  // Email validation
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Phone validation
  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: DistributorFormErrors = {};

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = 'Contact person name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }

    if (!formData.state.trim()) {
      newErrors.state = 'State is required';
    }

    if (!formData.pincode.trim()) {
      newErrors.pincode = 'Pincode is required';
    }

    if (!formData.businessType) {
      newErrors.businessType = 'Please select business type';
    }

    if (!formData.experience) {
      newErrors.experience = 'Please select experience level';
    }

    if (!formData.monthlyVolume) {
      newErrors.monthlyVolume = 'Please select monthly volume';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value);
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));

    // Clear error when user starts typing
    if (errors[name as keyof DistributorFormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Distributor application submitted:', formData);
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        businessType: '',
        experience: '',
        monthlyVolume: '',
        message: ''
      });
      
      // Show success message
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Exclusive Territory Rights',
      description: 'Get exclusive distribution rights in your designated territory with no competition from other distributors.'
    },
    {
      icon: Award,
      title: 'Premium Product Range',
      description: 'Access to our complete range of premium sweets and namkeen with guaranteed quality and freshness.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'All products come with quality certifications and our commitment to maintain the highest standards.'
    },
    {
      icon: Users,
      title: 'Marketing Support',
      description: 'Comprehensive marketing support including promotional materials, digital campaigns, and training.'
    },
    {
      icon: Truck,
      title: 'Logistics Support',
      description: 'Efficient supply chain management with timely delivery and inventory management support.'
    },
    {
      icon: Calculator,
      title: 'Competitive Margins',
      description: 'Attractive profit margins and flexible payment terms to maximize your business potential.'
    }
  ];

  const requirements = [
    'Minimum 2 years of experience in FMCG distribution',
    'Established retail network in the target territory',
    'Adequate storage and transportation facilities',
    'Financial capability to maintain inventory',
    'Commitment to quality and customer service',
    'Valid business registration and GST compliance'
  ];

  const existingDistributors = [
    {
      name: 'Sweet Dreams Distributors',
      location: 'Mumbai, Maharashtra',
      rating: 4.9,
      experience: '5+ years',
      specialties: ['Premium Sweets', 'Corporate Gifting'],
      shopImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      shopName: 'Sweet Dreams Store'
    },
    {
      name: 'Golden Foods Network',
      location: 'Delhi, NCR',
      rating: 4.8,
      experience: '3+ years',
      specialties: ['Traditional Sweets', 'Festival Specials'],
      shopImage: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
      shopName: 'Golden Foods Market'
    },
    {
      name: 'Royal Namkeen Co.',
      location: 'Bangalore, Karnataka',
      rating: 4.7,
      experience: '4+ years',
      specialties: ['Namkeen', 'Snack Foods'],
      shopImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      shopName: 'Royal Namkeen Store'
    },
    {
      name: 'Heritage Sweets Ltd.',
      location: 'Chennai, Tamil Nadu',
      rating: 4.9,
      experience: '6+ years',
      specialties: ['Regional Sweets', 'Export Quality'],
      shopImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      shopName: 'Heritage Sweets Shop'
    }
  ];

  return (
    <div className="min-h-screen py-8 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 text-sm font-semibold rounded-full border border-gray-300/50 shadow-sm">
              🤝 Partnership Opportunities
            </span>
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Become Our{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
                Distributor
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
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Join our network of successful distributors and be part of India's fastest-growing 
            traditional sweets and namkeen brand. Grow your business with our premium products 
            and comprehensive support system.
          </motion.p>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Partner With Us?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border border-gray-200"
              >
                <div className="bg-gradient-to-r from-gray-800 to-black w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Requirements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-gray-800 to-black rounded-3xl p-8 lg:p-12 text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">Requirements to Join</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {requirements.map((requirement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="h-6 w-6 text-gray-300 mt-1 flex-shrink-0" />
                  <span className="text-lg">{requirement}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Existing Distributors Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Successful Partners
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {existingDistributors.map((distributor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 group"
              >
                {/* Shop Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={distributor.shopImage}
                    alt={distributor.shopName}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                          <div class="text-center">
                            <Building2 class="h-12 w-12 text-gray-500 mx-auto mb-2" />
                            <span class="text-gray-600 font-semibold">${distributor.shopName}</span>
                          </div>
                        </div>
                      `;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  
                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                    <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    <span className="text-xs font-semibold text-gray-700">{distributor.rating}</span>
                  </div>
                  
                  {/* Experience Badge */}
                  <div className="absolute top-3 left-3 bg-gray-800/90 text-white px-2 py-1 rounded-full text-xs">
                    {distributor.experience}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{distributor.name}</h3>
                  <p className="text-sm text-gray-600 mb-3 flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    {distributor.location}
                  </p>
                  
                  <div className="space-y-2">
                    {distributor.specialties.map((specialty, idx) => (
                      <span key={idx} className="inline-block text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full mr-1">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Application Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Apply to Become a Distributor</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fill out the form below and our team will get back to you within 24 hours 
              to discuss partnership opportunities.
            </p>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2"
            >
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span className="text-green-700 font-medium">
                Thank you! Your application has been submitted successfully. We'll contact you within 24 hours.
              </span>
            </motion.div>
          )}
          
          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2"
            >
              <AlertCircle className="h-5 w-5 text-red-500" />
              <span className="text-red-700 font-medium">Sorry! Something went wrong. Please try again.</span>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  aria-describedby={errors.companyName ? "companyName-error" : undefined}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors duration-300 ${
                    errors.companyName ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Enter your company name"
                  maxLength={100}
                />
                {errors.companyName && (
                  <p id="companyName-error" className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                    <AlertCircle className="h-4 w-4" />
                    <span>{errors.companyName}</span>
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Person *
                </label>
                <input
                  type="text"
                  id="contactPerson"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  required
                  aria-describedby={errors.contactPerson ? "contactPerson-error" : undefined}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors duration-300 ${
                    errors.contactPerson ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Enter contact person name"
                  maxLength={50}
                />
                {errors.contactPerson && (
                  <p id="contactPerson-error" className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                    <AlertCircle className="h-4 w-4" />
                    <span>{errors.contactPerson}</span>
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors duration-300 ${
                    errors.email ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Enter your email address"
                  maxLength={100}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                    <AlertCircle className="h-4 w-4" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors duration-300 ${
                    errors.phone ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Enter your phone number"
                  maxLength={15}
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                    <AlertCircle className="h-4 w-4" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                Business Address *
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                rows={3}
                aria-describedby={errors.address ? "address-error" : undefined}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors duration-300 resize-none ${
                  errors.address ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Enter your complete business address"
                maxLength={200}
              />
              {errors.address && (
                <p id="address-error" className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                  <AlertCircle className="h-4 w-4" />
                  <span>{errors.address}</span>
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                  City *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  aria-describedby={errors.city ? "city-error" : undefined}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors duration-300 ${
                    errors.city ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Enter city"
                  maxLength={50}
                />
                {errors.city && (
                  <p id="city-error" className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                    <AlertCircle className="h-4 w-4" />
                    <span>{errors.city}</span>
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                  State *
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  aria-describedby={errors.state ? "state-error" : undefined}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors duration-300 ${
                    errors.state ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Enter state"
                  maxLength={50}
                />
                {errors.state && (
                  <p id="state-error" className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                    <AlertCircle className="h-4 w-4" />
                    <span>{errors.state}</span>
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-2">
                  Pincode *
                </label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                  aria-describedby={errors.pincode ? "pincode-error" : undefined}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors duration-300 ${
                    errors.pincode ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Enter pincode"
                  maxLength={10}
                />
                {errors.pincode && (
                  <p id="pincode-error" className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                    <AlertCircle className="h-4 w-4" />
                    <span>{errors.pincode}</span>
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
                  Business Type *
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  required
                  aria-describedby={errors.businessType ? "businessType-error" : undefined}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors duration-300 ${
                    errors.businessType ? 'border-red-300' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select business type</option>
                  <option value="wholesale">Wholesale Distributor</option>
                  <option value="retail">Retail Chain</option>
                  <option value="supermarket">Supermarket/Hypermarket</option>
                  <option value="kirana">Kirana Store</option>
                  <option value="online">Online Retailer</option>
                  <option value="corporate">Corporate Catering</option>
                  <option value="other">Other</option>
                </select>
                {errors.businessType && (
                  <p id="businessType-error" className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                    <AlertCircle className="h-4 w-4" />
                    <span>{errors.businessType}</span>
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  Experience Level *
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  aria-describedby={errors.experience ? "experience-error" : undefined}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors duration-300 ${
                    errors.experience ? 'border-red-300' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select experience</option>
                  <option value="0-2">0-2 years</option>
                  <option value="2-5">2-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
                {errors.experience && (
                  <p id="experience-error" className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                    <AlertCircle className="h-4 w-4" />
                    <span>{errors.experience}</span>
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="monthlyVolume" className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Monthly Volume *
                </label>
                <select
                  id="monthlyVolume"
                  name="monthlyVolume"
                  value={formData.monthlyVolume}
                  onChange={handleChange}
                  required
                  aria-describedby={errors.monthlyVolume ? "monthlyVolume-error" : undefined}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors duration-300 ${
                    errors.monthlyVolume ? 'border-red-300' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select volume</option>
                  <option value="0-50k">₹0 - ₹50,000</option>
                  <option value="50k-1L">₹50,000 - ₹1,00,000</option>
                  <option value="1L-5L">₹1,00,000 - ₹5,00,000</option>
                  <option value="5L-10L">₹5,00,000 - ₹10,00,000</option>
                  <option value="10L+">₹10,00,000+</option>
                </select>
                {errors.monthlyVolume && (
                  <p id="monthlyVolume-error" className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                    <AlertCircle className="h-4 w-4" />
                    <span>{errors.monthlyVolume}</span>
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Additional Information
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors duration-300 resize-none"
                placeholder="Tell us about your business, target market, and any specific requirements..."
                maxLength={500}
              />
              <p className="mt-1 text-xs text-gray-500 text-right">
                {formData.message.length}/500 characters
              </p>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              className={`w-full font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-black text-white'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Submitting Application...</span>
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  <span>Submit Application</span>
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Have Questions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <Phone className="h-8 w-8 text-gray-700 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">+91 6392574854</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <Mail className="h-8 w-8 text-gray-700 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">distributors@sweetbliss.com</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <MapPin className="h-8 w-8 text-gray-700 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">123 Sweet Street, Mumbai</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Distributors;
