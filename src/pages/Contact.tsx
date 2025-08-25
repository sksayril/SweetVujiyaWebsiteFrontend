import React, { useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, AlertCircle, CheckCircle, Instagram, Facebook, ExternalLink, Award, Users, Heart } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
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
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
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
    if (errors[name as keyof FormErrors]) {
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
      
    console.log('Form submitted:', formData);
      setSubmitStatus('success');
      
      // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
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

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Store',
      details: ['Ramadevi, I.1-87, Sangava Road, Kanpur, Uttar Pradesh 208021', 'India'],
      color: 'text-gray-700',
      bgColor: 'bg-gradient-to-br from-gray-50 to-gray-100',
      borderColor: 'border-gray-200'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 6392574854'],
      color: 'text-gray-700',
      bgColor: 'bg-gradient-to-br from-gray-50 to-gray-100',
      borderColor: 'border-gray-200'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@sweetbliss.com', 'orders@sweetbliss.com', 'support@sweetbliss.com'],
      color: 'text-gray-700',
      bgColor: 'bg-gradient-to-br from-gray-50 to-gray-100',
      borderColor: 'border-gray-200'
    },
    {
      icon: Clock,
      title: 'Store Hours',
      details: ['Mon - Sat: 9:00 AM - 9:00 PM', 'Sunday: 10:00 AM - 8:00 PM', 'Festival Days: Extended Hours'],
      color: 'text-gray-700',
      bgColor: 'bg-gradient-to-br from-gray-50 to-gray-100',
      borderColor: 'border-gray-200'
    }
  ];

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: Phone,
      url: 'https://wa.me/919876543210',
      color: 'text-white',
      bgColor: 'bg-gradient-to-br from-gray-800 to-black',
      hoverColor: 'hover:from-gray-900 hover:to-black',
      description: 'Chat with us instantly'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/krishnakanha',
      color: 'text-white',
      bgColor: 'bg-gradient-to-br from-gray-800 to-black',
      hoverColor: 'hover:from-gray-900 hover:to-black',
      description: 'Follow our sweet journey'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/krishnakanha',
      color: 'text-white',
      bgColor: 'bg-gradient-to-br from-gray-800 to-black',
      hoverColor: 'hover:from-gray-900 hover:to-black',
      description: 'Connect with our community'
    }
  ];

  return (
    <div className="min-h-screen py-8 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Premium background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100/20 via-transparent to-gray-200/20" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-gray-200/30 to-gray-300/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-gray-300/30 to-gray-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Header */}
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
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 text-sm font-cinzel font-semibold rounded-full border border-gray-300/50 shadow-sm">
              ✨ Get In Touch
            </span>
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-cinzel font-bold text-gray-900 mb-6 leading-tight">
            Let's{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-gray-700 via-gray-800 to-black bg-clip-text text-transparent">
                Connect
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
            className="text-xl font-cinzel text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We'd love to hear from you! Whether you have questions about our products, 
            need help with an order, or want to share your sweet experience with us.
          </motion.p>
        </motion.div>

        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-gray-800 to-black rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full border-4 border-white/30 overflow-hidden shadow-2xl">
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
                    us a trusted name in the sweet industry."
                  </p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      <Users className="h-5 w-5" />
                      <span className="font-cinzel font-semibold">25+ Years Experience</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      <Heart className="h-5 w-5" />
                      <span className="font-cinzel font-semibold">10,000+ Happy Customers</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Media Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-cinzel font-bold text-gray-900 mb-4">
              Connect With Us
            </h2>
            <p className="text-lg text-gray-600 font-cinzel">
              Follow us on social media for the latest updates, sweet recipes, and exclusive offers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="group relative overflow-hidden"
              >
                <div className={`${social.bgColor} ${social.hoverColor} rounded-2xl p-6 text-white text-center transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2 shadow-xl group-hover:shadow-2xl relative overflow-hidden`}>
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Floating particles effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-ping group-hover:animate-none" style={{ animationDelay: '0s' }}></div>
                    <div className="absolute top-8 right-6 w-1 h-1 bg-white/40 rounded-full animate-ping group-hover:animate-none" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-white/20 rounded-full animate-ping group-hover:animate-none" style={{ animationDelay: '1s' }}></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                      {social.name === 'WhatsApp' && (
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                          alt="WhatsApp" 
                          className="h-6 w-6 group-hover:scale-110 transition-transform duration-300"
                        />
                      )}
                      {social.name === 'Instagram' && (
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" 
                          alt="Instagram" 
                          className="h-6 w-6 group-hover:scale-110 transition-transform duration-300"
                        />
                      )}
                      {social.name === 'Facebook' && (
                        <svg 
                          viewBox="0 0 24 24" 
                          className="h-6 w-6 fill-current group-hover:scale-110 transition-transform duration-300"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      )}
                    </div>
                    <h3 className="text-xl font-cinzel font-bold mb-2 group-hover:text-gray-200 transition-colors duration-300">{social.name}</h3>
                    <p className="opacity-90 mb-3 font-cinzel text-sm group-hover:opacity-100 transition-opacity duration-300">{social.description}</p>
                    <div className="flex items-center justify-center gap-2 text-xs opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Visit Now</span>
                      <ExternalLink className="h-3 w-3 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" />
                    </div>
                  </div>
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  
                  {/* Border glow effect */}
                  <div className="absolute inset-0 rounded-2xl border border-white/20 group-hover:border-white/40 transition-all duration-500" />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="group relative overflow-hidden"
            >
              <div className={`${info.bgColor} border ${info.borderColor} rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2`}>
                <div className="relative z-10">
                  <div className={`w-16 h-16 ${info.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <info.icon className={`h-8 w-8 ${info.color}`} />
              </div>
                  <h3 className="text-xl font-cinzel font-semibold text-gray-900 mb-3 text-center">{info.title}</h3>
                  <div className="space-y-2">
                {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600 text-sm text-center font-cinzel">{detail}</p>
                ))}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="relative overflow-hidden"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-black rounded-full flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-cinzel font-bold text-gray-900">Send us a Message</h2>
            </div>
            
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-xl flex items-center space-x-2"
                >
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-green-700 font-medium font-cinzel">Thank you! Your message has been sent successfully.</span>
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-gradient-to-r from-red-50 to-red-100 border border-red-200 rounded-xl flex items-center space-x-2"
                >
                  <AlertCircle className="h-5 w-5 text-red-500" />
                  <span className="text-red-700 font-medium font-cinzel">Sorry! Something went wrong. Please try again.</span>
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-cinzel font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent transition-all duration-300 font-cinzel ${
                        errors.name ? 'border-red-300' : 'border-gray-300'
                      }`}
                    placeholder="Enter your name"
                      maxLength={50}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                        <AlertCircle className="h-4 w-4" />
                        <span className="font-cinzel">{errors.name}</span>
                      </p>
                    )}
                </div>
                
                <div>
                    <label htmlFor="phone" className="block text-sm font-cinzel font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent transition-all duration-300 font-cinzel ${
                        errors.phone ? 'border-red-300' : 'border-gray-300'
                      }`}
                    placeholder="Enter your phone"
                      maxLength={15}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                        <AlertCircle className="h-4 w-4" />
                        <span className="font-cinzel">{errors.phone}</span>
                      </p>
                    )}
                </div>
              </div>

              <div>
                  <label htmlFor="email" className="block text-sm font-cinzel font-medium text-gray-700 mb-2">
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
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent transition-all duration-300 font-cinzel ${
                      errors.email ? 'border-red-300' : 'border-gray-300'
                    }`}
                  placeholder="Enter your email"
                    maxLength={100}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                      <AlertCircle className="h-4 w-4" />
                      <span className="font-cinzel">{errors.email}</span>
                    </p>
                  )}
              </div>

              <div>
                  <label htmlFor="subject" className="block text-sm font-cinzel font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent transition-all duration-300 font-cinzel ${
                      errors.subject ? 'border-red-300' : 'border-gray-300'
                    }`}
                >
                  <option value="">Select a subject</option>
                  <option value="product-inquiry">Product Inquiry</option>
                  <option value="order-support">Order Support</option>
                  <option value="bulk-order">Bulk Order</option>
                  <option value="feedback">Feedback</option>
                  <option value="complaint">Complaint</option>
                  <option value="other">Other</option>
                </select>
                  {errors.subject && (
                    <p id="subject-error" className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                      <AlertCircle className="h-4 w-4" />
                      <span className="font-cinzel">{errors.subject}</span>
                    </p>
                  )}
              </div>

              <div>
                  <label htmlFor="message" className="block text-sm font-cinzel font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent transition-all duration-300 resize-none font-cinzel ${
                      errors.message ? 'border-red-300' : 'border-gray-300'
                    }`}
                  placeholder="Tell us how we can help you..."
                    maxLength={1000}
                ></textarea>
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                      <AlertCircle className="h-4 w-4" />
                      <span className="font-cinzel">{errors.message}</span>
                    </p>
                  )}
                  <p className="mt-1 text-xs text-gray-500 text-right font-cinzel">
                    {formData.message.length}/1000 characters
                  </p>
              </div>

              <motion.button
                type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  className={`w-full font-cinzel font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-gray-700 to-black hover:from-gray-800 hover:to-black text-white'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                <Send className="h-5 w-5" />
                <span>Send Message</span>
                    </>
                  )}
              </motion.button>
            </form>
            </div>
          </motion.div>

          {/* Map and Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-8"
          >
            {/* Google Maps Embed */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
              <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.0193620923133!2d80.30459669999999!3d26.390562099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c466955555555%3A0x7ba68044319cf5d1!2sKRISHNA%20%26%20KANHA%20SALES%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1756110944326!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Krishna & Kanha Sales Enterprises Location"
                  className="rounded-3xl"
                ></iframe>
              </div>
              <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100">
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="h-5 w-5 text-gray-700" />
                  <span className="text-gray-700 font-cinzel font-semibold">Our Location</span>
                </div>
                <p className="text-sm text-gray-500 font-cinzel text-center mt-1">
                  <a 
                    href="https://maps.app.goo.gl/sxKyB8CweBYKGFSX7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black underline transition-colors duration-300"
                  >
                    View on Google Maps
                  </a>
                </p>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-r from-gray-800 to-black rounded-3xl p-6 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative z-10">
                <h3 className="text-2xl font-cinzel font-bold mb-4">Need Immediate Help?</h3>
                <p className="mb-6 opacity-90 font-cinzel">
                For urgent queries or same-day delivery requests, give us a call directly.
              </p>
              <div className="space-y-3">
                <a 
                  href="tel:+919876543210"
                    className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm p-3 rounded-xl hover:bg-white/30 transition-all duration-300 group"
                    aria-label="Call us at +91 6392574854"
                >
                    <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-cinzel">+91 6392574854</span>
                </a>
                <a 
                  href="mailto:info@sweetbliss.com"
                    className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm p-3 rounded-xl hover:bg-white/30 transition-all duration-300 group"
                    aria-label="Email us at info@sweetbliss.com"
                >
                    <Mail className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-cinzel">info@sweetbliss.com</span>
                </a>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 border border-blue-100">
              <h3 className="text-2xl font-cinzel font-bold text-gray-900 mb-4">Quick Answers</h3>
              <div className="space-y-4">
                {[
                  { q: 'What are your delivery hours?', a: 'We deliver 7 days a week between 10 AM - 8 PM' },
                  { q: 'Do you deliver nationwide?', a: 'Yes, we deliver across India with special packaging' },
                  { q: 'How fresh are your products?', a: 'All items are made fresh daily and delivered within 24 hours' }
                ].map((faq, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-cinzel font-semibold text-gray-900 text-sm">{faq.q}</h4>
                    <p className="text-gray-600 text-sm mt-1 font-cinzel">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};


export default Contact;