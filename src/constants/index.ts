// App Configuration
export const APP_CONFIG = {
  name: 'Krishna & Kanha Sales Enterprises',
  description: 'Authentic Indian Sweets & Premium Namkeen',
  version: '1.0.0',
  contact: {
    phone: '+91 6392574854',
    email: 'krishnakanhasalesenterprises@gmail.com',
    address: '123 Sweet Street, Andheri West, Mumbai, Maharashtra 400058, India'
  },
  social: {
    facebook: 'https://facebook.com/krishnakanha',
    instagram: 'https://instagram.com/krishnakanha',
    twitter: 'https://twitter.com/krishnakanha'
  }
};

// Navigation Items
export const NAV_ITEMS = [
  { path: '/', label: 'Home' },
  { path: '/products', label: 'Products' },
  { path: '/sweets', label: 'Sweets' },
  { path: '/namkeen', label: 'Namkeen' },
  { path: '/distributors', label: 'Distributors' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' }
];

// Product Categories
export const PRODUCT_CATEGORIES = {
  sweets: ['Traditional', 'Premium', 'Festival Special', 'Milk Based', 'Dry Fruit Special'],
  namkeen: ['Spicy Mix', 'Classic', 'Fried Snacks', 'Healthy Snacks', 'Chaat Special', 'Traditional'],
  all: ['All', 'Traditional Sweets', 'Premium Sweets', 'Festival Special', 'Winter Special']
};

// Animation Durations
export const ANIMATION_DURATIONS = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  verySlow: 0.8
};

// API Endpoints (for future use)
export const API_ENDPOINTS = {
  products: '/api/products',
  contact: '/api/contact',
  orders: '/api/orders'
};

// Form Validation Rules
export const VALIDATION_RULES = {
  name: {
    minLength: 2,
    maxLength: 50
  },
  email: {
    maxLength: 100
  },
  phone: {
    maxLength: 15
  },
  message: {
    minLength: 10,
    maxLength: 1000
  }
};

// Image Placeholders
export const IMAGE_PLACEHOLDERS = {
  product: '/img2.jpeg',
  logo: '/img9.jpeg',
  hero: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
};

// Local Storage Keys
export const STORAGE_KEYS = {
  cart: 'krishna_kanha_cart',
  user: 'krishna_kanha_user',
  theme: 'krishna_kanha_theme'
};

// Error Messages
export const ERROR_MESSAGES = {
  network: 'Network error. Please check your connection and try again.',
  server: 'Server error. Please try again later.',
  validation: 'Please check your input and try again.',
  notFound: 'The requested resource was not found.',
  unauthorized: 'You are not authorized to access this resource.'
};

// Success Messages
export const SUCCESS_MESSAGES = {
  contact: 'Thank you! Your message has been sent successfully.',
  order: 'Your order has been placed successfully!',
  profile: 'Your profile has been updated successfully.'
};
