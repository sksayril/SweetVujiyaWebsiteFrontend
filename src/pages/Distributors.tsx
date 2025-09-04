import { useState, FormEvent, ChangeEvent } from 'react';
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
  CheckCircle,
  Calculator,
  FileText,
  Send,
  AlertCircle,
  CheckCircle2,
  Eye,
  Download,
  X,
  CreditCard,
  Smartphone,
  Copy,
  Check
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

interface EmployeeForm {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  position: string;
  experience: string;
  fssaiLicense: string;
  branchLocation: string;
  message: string;
}

interface EmployeeFormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  pincode?: string;
  position?: string;
  experience?: string;
  fssaiLicense?: string;
  branchLocation?: string;
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
  const [previewPdf, setPreviewPdf] = useState<string | null>(null);
  const [copiedUpiId, setCopiedUpiId] = useState(false);

  const [employeeFormData, setEmployeeFormData] = useState<EmployeeForm>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    position: '',
    experience: '',
    fssaiLicense: '',
    branchLocation: '',
    message: ''
  });

  const [employeeErrors, setEmployeeErrors] = useState<EmployeeFormErrors>({});
  const [isEmployeeSubmitting, setIsEmployeeSubmitting] = useState(false);
  const [employeeSubmitStatus, setEmployeeSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

  // Copy UPI ID function
  const copyUpiId = async () => {
    try {
      await navigator.clipboard.writeText('nikhil.gupta9839-4@okhdfcbank');
      setCopiedUpiId(true);
      setTimeout(() => setCopiedUpiId(false), 2000);
    } catch (err) {
      console.error('Failed to copy UPI ID:', err);
    }
  };

  // Employee form validation
  const validateEmployeeForm = (): boolean => {
    const newErrors: EmployeeFormErrors = {};

    if (!employeeFormData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!employeeFormData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(employeeFormData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!employeeFormData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(employeeFormData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!employeeFormData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    if (!employeeFormData.city.trim()) {
      newErrors.city = 'City is required';
    }

    if (!employeeFormData.state.trim()) {
      newErrors.state = 'State is required';
    }

    if (!employeeFormData.pincode.trim()) {
      newErrors.pincode = 'Pincode is required';
    }

    if (!employeeFormData.position) {
      newErrors.position = 'Please select position';
    }

    if (!employeeFormData.experience) {
      newErrors.experience = 'Please select experience level';
    }

    if (!employeeFormData.fssaiLicense.trim()) {
      newErrors.fssaiLicense = 'FSSAI License number is required';
    }

    if (!employeeFormData.branchLocation) {
      newErrors.branchLocation = 'Please select branch location';
    }

    setEmployeeErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEmployeeChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value);
    
    setEmployeeFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));

    // Clear error when user starts typing
    if (employeeErrors[name as keyof EmployeeFormErrors]) {
      setEmployeeErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleEmployeeSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateEmployeeForm()) {
      return;
    }

    setIsEmployeeSubmitting(true);
    setEmployeeSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Employee application submitted:', employeeFormData);
      setEmployeeSubmitStatus('success');
      
      // Reset form
      setEmployeeFormData({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        position: '',
        experience: '',
        fssaiLicense: '',
        branchLocation: '',
        message: ''
      });
      
      // Show success message
      setTimeout(() => {
        setEmployeeSubmitStatus('idle');
      }, 5000);
      
    } catch (error) {
      console.error('Employee form submission error:', error);
      setEmployeeSubmitStatus('error');
    } finally {
      setIsEmployeeSubmitting(false);
    }
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

        {/* Premium Joining Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 text-sm font-semibold rounded-full border border-blue-300/50 shadow-sm">
                📋 Official Documents
              </span>
            </motion.div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Download Joining Form
          </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get started with our official distributor joining form. Download, fill, and submit 
              along with your application for faster processing.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
              <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="group relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white rounded-3xl border border-gray-200/50 hover:border-blue-300/50 hover:shadow-2xl transition-all duration-500"
            >
              {/* Background PDF Preview */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <iframe
                  src="/KRISHNAKANHA JOINING FORM.pdf#toolbar=0&navpanes=0&scrollbar=0&zoom=25"
                  width="100%"
                  height="100%"
                  className="border-0 scale-150 origin-top-left"
                  style={{ pointerEvents: 'none' }}
                />
                          </div>
              
              {/* Premium overlay with glassmorphism effect */}
              <div className="relative z-10 bg-white/80 backdrop-blur-sm">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Left Content Section */}
                  <div className="p-12 lg:p-16">
                    <div className="flex items-start space-x-6 mb-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                        <FileText className="h-10 w-10 text-white" />
                        </div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold text-gray-900 group-hover:text-blue-800 transition-colors duration-300 mb-3">
                          Krishna & Kanha Joining Form
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed mb-4">
                          Official distributor application form with comprehensive terms and conditions, 
                          partnership details, and all necessary documentation requirements.
                        </p>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full border border-blue-200">
                            📄 PDF Document
                          </span>
                          <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 text-sm font-semibold rounded-full border border-green-200">
                            ✅ Required
                          </span>
                          <span className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 text-sm font-semibold rounded-full border border-purple-200">
                            📋 Application Form
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <motion.button
                        onClick={() => setPreviewPdf('/KRISHNAKANHA JOINING FORM.pdf')}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="group/btn flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <Eye className="h-5 w-5 group-hover/btn:scale-110 transition-transform duration-300" />
                        <span className="font-semibold">Preview Form</span>
                      </motion.button>
                      
                      <motion.a
                        href="/KRISHNAKANHA JOINING FORM.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="group/btn flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-2xl hover:from-gray-900 hover:to-black transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <Download className="h-5 w-5 group-hover/btn:scale-110 transition-transform duration-300" />
                        <span className="font-semibold">Download PDF</span>
                      </motion.a>
                    </div>
                    
                    {/* Helpful Tip */}
                    <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">💡</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-900 mb-1">Pro Tip</h4>
                          <p className="text-blue-800 text-sm leading-relaxed">
                            Download the form, fill it out completely, and attach it with your online application below for faster processing and approval.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Preview Section */}
                  <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-8 lg:p-12 flex items-center justify-center">
                    {/* PDF Preview Thumbnail */}
                    <div className="relative w-full max-w-sm">
                      <motion.div
                        whileHover={{ scale: 1.05, rotateY: 5 }}
                        className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-white"
                      >
                        <div className="aspect-[3/4] bg-gradient-to-br from-blue-50 to-blue-100">
                          <iframe
                            src="/KRISHNAKANHA JOINING FORM.pdf#toolbar=0&navpanes=0&scrollbar=0&zoom=50"
                            width="100%"
                            height="100%"
                            className="border-0"
                            style={{ pointerEvents: 'none' }}
                          />
                        </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                            <p className="text-sm font-semibold text-gray-900">Document Preview</p>
                            <p className="text-xs text-gray-600">Click preview to view full document</p>
                          </div>
                        </div>
                      </motion.div>
                      
                      {/* Floating elements */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                        <FileText className="h-4 w-4 text-white" />
                      </div>
                      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                  </div>
                  
              {/* Premium decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full -translate-y-32 translate-x-32 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-green-200/20 to-blue-200/20 rounded-full translate-y-24 -translate-x-24 group-hover:scale-110 transition-transform duration-700"></div>
            </motion.div>
                  </div>
        </motion.div>

        {/* Payment Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="inline-block mb-6"
            >
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-green-100 to-green-200 text-green-800 text-sm font-semibold rounded-full border border-green-300/50 shadow-sm">
                💳 Payment Options
              </span>
            </motion.div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Easy Payment Methods
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose from multiple secure payment options. Scan QR codes for instant UPI payments 
              or use traditional banking methods for your convenience.
            </p>
                </div>
                
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* UPI Payment Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="group relative overflow-hidden bg-gradient-to-br from-white via-green-50/30 to-white rounded-3xl border border-gray-200/50 hover:border-green-300/50 hover:shadow-2xl transition-all duration-500"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-green-200 rounded-full -translate-y-32 translate-x-32"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-200 rounded-full translate-y-24 -translate-x-24"></div>
                </div>
                
                <div className="relative z-10 p-8 lg:p-12">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Smartphone className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">UPI Payment</h3>
                      <p className="text-gray-600">Scan QR code with any UPI app</p>
                    </div>
                  </div>
                  
                  {/* QR Code Image */}
                  <div className="relative mb-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative bg-white rounded-2xl p-6 shadow-xl border-4 border-white"
                    >
                      <img
                        src="/payemnt.jpg"
                        alt="UPI Payment QR Code"
                        className="w-full max-w-sm mx-auto rounded-xl"
                      />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* UPI ID Section */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200/50">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-green-900 mb-1">UPI ID</h4>
                        <p className="text-green-800 font-mono text-sm">nikhil.gupta9839-4@okhdfcbank</p>
                      </div>
                      <motion.button
                        onClick={copyUpiId}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                        title="Copy UPI ID"
                      >
                        {copiedUpiId ? (
                          <Check className="h-5 w-5" />
                        ) : (
                          <Copy className="h-5 w-5" />
                        )}
                      </motion.button>
                    </div>
                    {copiedUpiId && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-green-700 text-sm mt-2 font-medium"
                      >
                        ✅ UPI ID copied to clipboard!
                      </motion.p>
                    )}
                  </div>
                  
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-500">
                      💡 <strong>Tip:</strong> Use Google Pay, PhonePe, Paytm, or any UPI app to scan and pay instantly
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Bank Transfer Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="group relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white rounded-3xl border border-gray-200/50 hover:border-blue-300/50 hover:shadow-2xl transition-all duration-500"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full -translate-y-32 -translate-x-32"></div>
                  <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-200 rounded-full translate-y-24 translate-x-24"></div>
                  </div>
                
                <div className="relative z-10 p-8 lg:p-12">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <CreditCard className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Bank Transfer</h3>
                      <p className="text-gray-600">Traditional banking methods</p>
                    </div>
                  </div>
                  
                  {/* Bank QR Code Image */}
                  <div className="relative mb-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative bg-white rounded-2xl p-6 shadow-xl border-4 border-white"
                    >
                      <img
                        src="/payment2.jpg"
                        alt="Bank Payment QR Code"
                        className="w-full max-w-sm mx-auto rounded-xl"
                      />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                        <CreditCard className="h-4 w-4 text-white" />
                </div>
              </motion.div>
                  </div>
                  
                  {/* Bank Details */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200/50">
                    <h4 className="font-semibold text-blue-900 mb-4">Bank Details</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-blue-800 font-medium">Bank:</span>
                        <span className="text-blue-900 font-semibold">Punjab National Bank</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-blue-800 font-medium">Account:</span>
                        <span className="text-blue-900 font-semibold">3814****</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-blue-800 font-medium">UPI ID:</span>
                        <span className="text-blue-900 font-semibold">nikhil.gupta9839-4@okhdfcbank</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-500">
                      💡 <strong>Tip:</strong> Use NEFT, RTGS, or IMPS for bank transfers
                    </p>
                  </div>
          </div>
        </motion.div>
            </div>
            
            {/* Payment Security Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 text-center"
            >
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200/50 max-w-4xl mx-auto">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                  <h4 className="text-lg font-semibold text-gray-900">Secure Payment Processing</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  All payments are processed through secure channels. We accept UPI payments, bank transfers, 
                  and other digital payment methods. Your financial information is protected with industry-standard encryption.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Employee Application Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="inline-block mb-6"
            >
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 text-sm font-semibold rounded-full border border-purple-300/50 shadow-sm">
                👥 Join Our Team
              </span>
            </motion.div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Employee Application
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join our growing team! We're looking for dedicated individuals to help us expand our business 
              across different locations. Apply now to be part of our success story.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Company Information */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-gray-200/50"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center shadow-lg">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Company Information</h3>
                    <p className="text-gray-600">Our business locations and licenses</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {/* Branch Locations */}
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200/50">
                    <h4 className="font-semibold text-purple-900 mb-4 flex items-center space-x-2">
                      <MapPin className="h-5 w-5" />
                      <span>Our Branch Locations</span>
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                        <div>
                          <p className="font-semibold text-gray-900">Main Branch - Kanpur</p>
                          <p className="text-sm text-gray-600">Ramadevi, I.1-87, Sangava Road, Kanpur, UP 208021</p>
                          <p className="text-xs text-purple-700 font-medium">FSSAI License: 12723045000115</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                        <div>
                          <p className="font-semibold text-gray-900">Branch - Rath (Hamirpur)</p>
                          <p className="text-sm text-gray-600">Sikandra Pura Rath, Hamirpur, UP 210431</p>
                          <p className="text-xs text-purple-700 font-medium">FSSAI License: 12723018000012</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Available Positions */}
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200/50">
                    <h4 className="font-semibold text-blue-900 mb-4 flex items-center space-x-2">
                      <Award className="h-5 w-5" />
                      <span>Available Positions</span>
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {['Sales Executive', 'Branch Manager', 'Quality Inspector', 'Production Staff', 'Delivery Staff', 'Account Assistant'].map((position, index) => (
                        <div key={index} className="bg-white/70 rounded-lg p-3 text-center">
                          <p className="text-sm font-semibold text-gray-800">{position}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Benefits */}
                  <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6 border border-green-200/50">
                    <h4 className="font-semibold text-green-900 mb-4 flex items-center space-x-2">
                      <Shield className="h-5 w-5" />
                      <span>Employee Benefits</span>
                    </h4>
                    <div className="space-y-2">
                      {['Competitive Salary', 'Health Insurance', 'Performance Bonus', 'Career Growth', 'Training Programs', 'Flexible Hours'].map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Employee Application Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-gray-200/50"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Application Form</h3>
                    <p className="text-gray-600">Fill out the form to apply</p>
                  </div>
                </div>

                {/* Status Messages */}
                {employeeSubmitStatus === 'success' && (
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
                
                {employeeSubmitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2"
                  >
                    <AlertCircle className="h-5 w-5 text-red-500" />
                    <span className="text-red-700 font-medium">Sorry! Something went wrong. Please try again.</span>
                  </motion.div>
                )}

                <form onSubmit={handleEmployeeSubmit} className="space-y-4" noValidate>
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={employeeFormData.fullName}
                        onChange={handleEmployeeChange}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ${
                          employeeErrors.fullName ? 'border-red-300' : 'border-gray-300'
                        }`}
                        placeholder="Enter your full name"
                        maxLength={50}
                      />
                      {employeeErrors.fullName && (
                        <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                          <AlertCircle className="h-4 w-4" />
                          <span>{employeeErrors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={employeeFormData.email}
                        onChange={handleEmployeeChange}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ${
                          employeeErrors.email ? 'border-red-300' : 'border-gray-300'
                        }`}
                        placeholder="Enter your email"
                        maxLength={100}
                      />
                      {employeeErrors.email && (
                        <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                          <AlertCircle className="h-4 w-4" />
                          <span>{employeeErrors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={employeeFormData.phone}
                        onChange={handleEmployeeChange}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ${
                          employeeErrors.phone ? 'border-red-300' : 'border-gray-300'
                        }`}
                        placeholder="Enter your phone number"
                        maxLength={15}
                      />
                      {employeeErrors.phone && (
                        <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                          <AlertCircle className="h-4 w-4" />
                          <span>{employeeErrors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                        Position Applied For *
                      </label>
                      <select
                        id="position"
                        name="position"
                        value={employeeFormData.position}
                        onChange={handleEmployeeChange}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ${
                          employeeErrors.position ? 'border-red-300' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select position</option>
                        <option value="sales-executive">Sales Executive</option>
                        <option value="branch-manager">Branch Manager</option>
                        <option value="quality-inspector">Quality Inspector</option>
                        <option value="production-staff">Production Staff</option>
                        <option value="delivery-staff">Delivery Staff</option>
                        <option value="account-assistant">Account Assistant</option>
                        <option value="other">Other</option>
                      </select>
                      {employeeErrors.position && (
                        <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                          <AlertCircle className="h-4 w-4" />
                          <span>{employeeErrors.position}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Address Information */}
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                      Address *
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      value={employeeFormData.address}
                      onChange={handleEmployeeChange}
                      required
                      rows={3}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 resize-none ${
                        employeeErrors.address ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Enter your complete address"
                      maxLength={200}
                    />
                    {employeeErrors.address && (
                      <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                        <AlertCircle className="h-4 w-4" />
                        <span>{employeeErrors.address}</span>
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={employeeFormData.city}
                        onChange={handleEmployeeChange}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ${
                          employeeErrors.city ? 'border-red-300' : 'border-gray-300'
                        }`}
                        placeholder="Enter city"
                        maxLength={50}
                      />
                      {employeeErrors.city && (
                        <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                          <AlertCircle className="h-4 w-4" />
                          <span>{employeeErrors.city}</span>
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
                        value={employeeFormData.state}
                        onChange={handleEmployeeChange}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ${
                          employeeErrors.state ? 'border-red-300' : 'border-gray-300'
                        }`}
                        placeholder="Enter state"
                        maxLength={50}
                      />
                      {employeeErrors.state && (
                        <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                          <AlertCircle className="h-4 w-4" />
                          <span>{employeeErrors.state}</span>
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
                        value={employeeFormData.pincode}
                        onChange={handleEmployeeChange}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ${
                          employeeErrors.pincode ? 'border-red-300' : 'border-gray-300'
                        }`}
                        placeholder="Enter pincode"
                        maxLength={10}
                      />
                      {employeeErrors.pincode && (
                        <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                          <AlertCircle className="h-4 w-4" />
                          <span>{employeeErrors.pincode}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Professional Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                        Experience Level *
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        value={employeeFormData.experience}
                        onChange={handleEmployeeChange}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ${
                          employeeErrors.experience ? 'border-red-300' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select experience</option>
                        <option value="fresher">Fresher (0-1 years)</option>
                        <option value="1-3">1-3 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="5+">5+ years</option>
                      </select>
                      {employeeErrors.experience && (
                        <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                          <AlertCircle className="h-4 w-4" />
                          <span>{employeeErrors.experience}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="branchLocation" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Branch *
                      </label>
                      <select
                        id="branchLocation"
                        name="branchLocation"
                        value={employeeFormData.branchLocation}
                        onChange={handleEmployeeChange}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ${
                          employeeErrors.branchLocation ? 'border-red-300' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select branch</option>
                        <option value="kanpur">Kanpur (Main Branch)</option>
                        <option value="rath">Rath, Hamirpur</option>
                        <option value="any">Any Location</option>
                      </select>
                      {employeeErrors.branchLocation && (
                        <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                          <AlertCircle className="h-4 w-4" />
                          <span>{employeeErrors.branchLocation}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* FSSAI License */}
                  <div>
                    <label htmlFor="fssaiLicense" className="block text-sm font-medium text-gray-700 mb-2">
                      FSSAI License Number *
                    </label>
                    <input
                      type="text"
                      id="fssaiLicense"
                      name="fssaiLicense"
                      value={employeeFormData.fssaiLicense}
                      onChange={handleEmployeeChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ${
                        employeeErrors.fssaiLicense ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Enter FSSAI license number (if applicable)"
                      maxLength={20}
                    />
                    {employeeErrors.fssaiLicense && (
                      <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                        <AlertCircle className="h-4 w-4" />
                        <span>{employeeErrors.fssaiLicense}</span>
                      </p>
                    )}
                    <p className="mt-1 text-xs text-gray-500">
                      Leave blank if you don't have an FSSAI license
                    </p>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={employeeFormData.message}
                      onChange={handleEmployeeChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 resize-none"
                      placeholder="Tell us about your skills, previous experience, and why you want to join our team..."
                      maxLength={500}
                    />
                    <p className="mt-1 text-xs text-gray-500 text-right">
                      {employeeFormData.message.length}/500 characters
                    </p>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isEmployeeSubmitting}
                    whileHover={{ scale: isEmployeeSubmitting ? 1 : 1.05 }}
                    whileTap={{ scale: isEmployeeSubmitting ? 1 : 0.95 }}
                    className={`w-full font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 ${
                      isEmployeeSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white'
                    }`}
                  >
                    {isEmployeeSubmitting ? (
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
            </div>
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
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <FileText className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">PDF Preview</h3>
                  <p className="text-sm text-gray-600">
                    Krishna & Kanha Joining Form
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <motion.a
                  href={previewPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  title="Download PDF"
                >
                  <Download className="h-5 w-5" />
                </motion.a>
                <motion.button
                  onClick={() => setPreviewPdf(null)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
                  title="Close Preview"
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="h-[70vh] bg-gray-100">
              <iframe
                src={`${previewPdf}#toolbar=1&navpanes=1&scrollbar=1`}
                width="100%"
                height="100%"
                className="border-0"
                title="PDF Preview"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  Use the controls above to navigate, zoom, or download the PDF
                </p>
                <motion.button
                  onClick={() => setPreviewPdf(null)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition-colors duration-300"
                >
                  Close
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Distributors;
