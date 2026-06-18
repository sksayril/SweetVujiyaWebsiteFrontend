import { slugify } from '@/lib/utils';

interface SeedProduct {
  name: string;
  type: 'product' | 'sweet' | 'namkeen';
  category: string;
  image: string;
  description: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  offer?: string;
  rating: number;
  reviews: number;
  ingredients?: string;
  weight?: string;
  shelfLife?: string;
  spiceLevel?: string;
  featured?: boolean;
}

export const seedProducts: SeedProduct[] = [
  { name: 'Besan Laddu', type: 'product', category: 'Traditional Sweets', image: '/img2.jpeg', price: '₹400', originalPrice: '₹450', discount: '11%', rating: 4.9, reviews: 128, description: 'Traditional gram flour laddus with pure ghee and mixed nuts', featured: true },
  { name: 'Coconut Laddu', type: 'product', category: 'Premium Sweets', image: '/img3.jpeg', price: '₹350', originalPrice: '₹400', discount: '13%', rating: 4.8, reviews: 95, description: 'Fresh coconut laddus with cardamom and condensed milk', featured: true },
  { name: 'Motichoor Laddu', type: 'product', category: 'Festival Special', image: '/img4.jpeg', price: '₹450', originalPrice: '₹500', discount: '10%', rating: 4.7, reviews: 87, description: 'Fine boondi laddus with rich ghee and premium dry fruits', featured: true },
  { name: 'Rava Laddu', type: 'product', category: 'Traditional Sweets', image: '/img5.jpeg', price: '₹300', originalPrice: '₹350', discount: '14%', rating: 4.9, reviews: 156, description: 'Semolina laddus with cashews, raisins and cardamom', featured: true },
  { name: 'Til Laddu', type: 'product', category: 'Winter Special', image: '/img2.jpeg', price: '₹320', originalPrice: '₹360', discount: '11%', rating: 4.6, reviews: 73, description: 'Sesame seed laddus with jaggery and pure ghee', featured: true },
  { name: 'Dry Fruit Laddu', type: 'product', category: 'Premium Sweets', image: '/img3.jpeg', price: '₹600', originalPrice: '₹700', discount: '14%', rating: 4.8, reviews: 92, description: 'Rich laddus loaded with almonds, cashews and pistachios', featured: true },
  { name: 'Kaju Laddu', type: 'product', category: 'Premium Sweets', image: '/img4.jpeg', price: '₹750', originalPrice: '₹850', discount: '12%', rating: 4.9, reviews: 110, description: 'Premium cashew laddus with silver foil and rose essence' },
  { name: 'Malai Laddu', type: 'product', category: 'Festival Special', image: '/img5.jpeg', price: '₹380', originalPrice: '₹420', discount: '10%', rating: 4.7, reviews: 85, description: 'Creamy milk-based laddus with saffron and pistachios' },
  { name: 'Gulab Jamun', type: 'sweet', category: 'Milk Based', image: 'https://i.pinimg.com/736x/a9/3d/77/a93d77d3e242262f2c919bf66aef5b39.jpg', price: '₹450', originalPrice: '₹500', rating: 4.8, reviews: 95, description: 'Soft spongy cottage cheese balls in sugar syrup', ingredients: 'Cottage Cheese, Sugar, Cardamom, Rose Water', weight: '1kg' },
  { name: 'Sondesh', type: 'sweet', category: 'Traditional', image: 'https://i.pinimg.com/736x/07/3e/2c/073e2c06b404905710c315f3f5b7df02.jpg', price: '₹380', originalPrice: '₹420', rating: 4.9, reviews: 156, description: 'Golden brown milk solid dumplings in rose-flavored syrup', ingredients: 'Milk Solids, Sugar, Ghee, Rose Water, Cardamom', weight: '1kg' },
  { name: 'Milk Cake', type: 'sweet', category: 'Traditional', image: 'https://i.pinimg.com/1200x/5e/48/d2/5e48d20bc1fba6ba8da5805270322551.jpg', price: '₹520', originalPrice: '₹580', rating: 4.7, reviews: 78, description: "Bengal's signature cottage cheese sweet with cardamom", ingredients: 'Fresh Cottage Cheese, Sugar, Cardamom, Pistachios', weight: '500g' },
  { name: 'Badam Barfi', type: 'sweet', category: 'Dry Fruit Special', image: 'https://i.pinimg.com/1200x/d8/a4/ab/d8a4aba27826f331377c721ab6c1a9c1.jpg', price: '₹780', originalPrice: '₹880', rating: 4.9, reviews: 64, description: 'Rich almond barfi with pure ghee and cardamom', ingredients: 'Almonds, Sugar, Ghee, Cardamom, Silver Foil', weight: '500g' },
  { name: 'Rasmalai', type: 'sweet', category: 'Milk Based', image: 'https://i.pinimg.com/736x/e7/5d/c6/e75dc6e6bddaba7ab90517098cd7398a.jpg', price: '₹520', originalPrice: '₹580', rating: 4.8, reviews: 110, description: 'Soft cottage cheese dumplings in creamy milk', ingredients: 'Cottage Cheese, Milk, Sugar, Cardamom, Pistachios', weight: '1kg' },
  { name: 'Soan Papdi', type: 'sweet', category: 'Traditional', image: 'https://i.pinimg.com/736x/16/7d/e6/167de67f50bdab98e1da704a4bca5a13.jpg', price: '₹350', originalPrice: '₹400', rating: 4.6, reviews: 85, description: 'Flaky, crispy sweet with cardamom and nuts', ingredients: 'Gram Flour, Sugar, Ghee, Cardamom, Almonds', weight: '500g' },
  { name: 'Aloo Bhujia', type: 'namkeen', category: 'Classic Namkeen', image: '/img6.jpeg', price: '₹180', rating: 4.7, reviews: 210, description: 'Crispy potato sev with traditional spices', spiceLevel: 'Medium', weight: '500g', shelfLife: '3 months' },
  { name: 'Mixture', type: 'namkeen', category: 'Snack Mix', image: '/img7.jpeg', price: '₹220', rating: 4.8, reviews: 185, description: 'Assorted namkeen mix with peanuts and sev', spiceLevel: 'Mild', weight: '500g', shelfLife: '2 months' },
  { name: 'Moong Dal', type: 'namkeen', category: 'Classic Namkeen', image: '/img8.jpeg', price: '₹200', rating: 4.6, reviews: 142, description: 'Crispy moong dal namkeen lightly spiced', spiceLevel: 'Mild', weight: '500g', shelfLife: '3 months' },
  { name: 'Khatta Meetha', type: 'namkeen', category: 'Snack Mix', image: '/img9.jpeg', price: '₹240', rating: 4.9, reviews: 198, description: 'Sweet and tangy snack mix', spiceLevel: 'Medium', weight: '500g', shelfLife: '2 months' },
  { name: 'Masala Peanuts', type: 'namkeen', category: 'Roasted', image: '/img10.jpeg', price: '₹160', rating: 4.5, reviews: 120, description: 'Spicy coated roasted peanuts', spiceLevel: 'Hot', weight: '250g', shelfLife: '1 month' },
  { name: 'Mathri', type: 'namkeen', category: 'Traditional', image: '/img11.jpeg', price: '₹190', rating: 4.7, reviews: 156, description: 'Flaky crispy mathri with ajwain', spiceLevel: 'Mild', weight: '500g', shelfLife: '2 months' },
];

export const defaultSiteContent = {
  hero: {
    title: 'Krishna & Kanha Sales Enterprises',
    tagline: 'Authentic Indian Sweets & Premium Namkeen',
    subtitle: 'Manufacturing of premium laddu, boondi dana, namkeens & luxury sweets',
    quote: 'Crafted with tradition, delivered with excellence',
    slogan: 'Khoob khao mithai krishna kanha ko do badhai',
    videoUrl: '/WhatsApp Video 2025-09-04 at 1.31.06 PM.mp4',
    fallbackImage: '/img9.jpeg',
  },
  contact: {
    phone: '+91 63925 74854',
    email: 'krishnakanhasalesenterprises@gmail.com',
    address: 'Ramadevi, I.1-87, Sangava Road, Kanpur, Uttar Pradesh 208021',
    whatsapp: '916392574854',
  },
  about: {
    stats: [
      { value: '25+', label: 'Years of Excellence' },
      { value: '50K+', label: 'Happy Customers' },
      { value: '100+', label: 'Premium Products' },
      { value: '99%', label: 'Satisfaction Rate' },
    ],
    heading: 'Crafting Sweet Memories Since 1999',
  },
  sweetsPromo: {
    title: 'Buy any 3 sweets and get 15% off + Free Home Delivery',
  },
};

export function toProductDoc(item: SeedProduct, index: number) {
  return {
    name: item.name,
    slug: slugify(item.name),
    type: item.type,
    category: item.category,
    image: item.image,
    description: item.description,
    price: item.price,
    originalPrice: item.originalPrice || '',
    discount: item.discount || '',
    offer: item.offer || '',
    rating: item.rating,
    reviews: item.reviews,
    ingredients: item.ingredients || '',
    weight: item.weight || '',
    shelfLife: item.shelfLife || '',
    spiceLevel: item.spiceLevel || '',
    featured: item.featured || false,
    active: true,
    sortOrder: index,
  };
}
