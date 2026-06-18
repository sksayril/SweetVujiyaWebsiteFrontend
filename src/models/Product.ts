import mongoose, { Schema, models, model } from 'mongoose';

export interface IProduct {
  _id: mongoose.Types.ObjectId;
  name: string;
  slug: string;
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
  featured: boolean;
  active: boolean;
  sortOrder: number;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    type: { type: String, enum: ['product', 'sweet', 'namkeen'], default: 'product' },
    category: { type: String, default: 'General' },
    image: { type: String, default: '' },
    description: { type: String, default: '' },
    price: { type: String, required: true },
    originalPrice: { type: String, default: '' },
    discount: { type: String, default: '' },
    offer: { type: String, default: '' },
    rating: { type: Number, default: 4.5, min: 0, max: 5 },
    reviews: { type: Number, default: 0, min: 0 },
    ingredients: { type: String, default: '' },
    weight: { type: String, default: '' },
    shelfLife: { type: String, default: '' },
    spiceLevel: { type: String, default: '' },
    featured: { type: Boolean, default: false },
    active: { type: Boolean, default: true },
    sortOrder: { type: Number, default: 0 },
  },
  { timestamps: true }
);

ProductSchema.index({ type: 1, active: 1 });
ProductSchema.index({ featured: 1, active: 1 });

export default models.Product || model<IProduct>('Product', ProductSchema);
