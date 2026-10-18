import mongoose, { Schema, models, model } from 'mongoose';

export interface IDistributorApplication {
  _id: mongoose.Types.ObjectId;
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
  message?: string;
  status: 'new' | 'reviewed' | 'contacted' | 'approved' | 'rejected';
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const DistributorApplicationSchema = new Schema<IDistributorApplication>(
  {
    companyName: { type: String, required: true, trim: true },
    contactPerson: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    state: { type: String, required: true, trim: true },
    pincode: { type: String, required: true, trim: true },
    businessType: { type: String, required: true, trim: true },
    experience: { type: String, required: true, trim: true },
    monthlyVolume: { type: String, required: true, trim: true },
    message: { type: String, default: '', trim: true },
    status: {
      type: String,
      enum: ['new', 'reviewed', 'contacted', 'approved', 'rejected'],
      default: 'new',
    },
    notes: { type: String, default: '' },
  },
  { timestamps: true }
);

DistributorApplicationSchema.index({ status: 1, createdAt: -1 });

export default models.DistributorApplication ||
  model<IDistributorApplication>('DistributorApplication', DistributorApplicationSchema);
