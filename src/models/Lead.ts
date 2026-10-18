import mongoose, { Schema, models, model } from 'mongoose';

export interface ILead {
  _id: mongoose.Types.ObjectId;
  name: string;
  phone: string;
  email?: string;
  productName?: string;
  quantity?: string;
  message?: string;
  type: 'price_inquiry' | 'contact' | 'bulk_order' | 'distributor';
  status: 'new' | 'contacted' | 'completed' | 'cancelled';
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const LeadSchema = new Schema<ILead>(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, default: '', trim: true },
    productName: { type: String, default: '', trim: true },
    quantity: { type: String, default: '', trim: true },
    message: { type: String, default: '', trim: true },
    type: {
      type: String,
      enum: ['price_inquiry', 'contact', 'bulk_order', 'distributor'],
      default: 'price_inquiry',
    },
    status: {
      type: String,
      enum: ['new', 'contacted', 'completed', 'cancelled'],
      default: 'new',
    },
    notes: { type: String, default: '' },
  },
  { timestamps: true }
);

LeadSchema.index({ status: 1, createdAt: -1 });
LeadSchema.index({ type: 1, createdAt: -1 });

export default models.Lead || model<ILead>('Lead', LeadSchema);
