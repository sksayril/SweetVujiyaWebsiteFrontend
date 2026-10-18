import mongoose, { Schema, models, model } from 'mongoose';

export interface IEmployeeApplication {
  _id: mongoose.Types.ObjectId;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  position: string;
  experience: string;
  fssaiLicense?: string;
  branchLocation?: string;
  message?: string;
  status: 'new' | 'shortlisted' | 'interviewed' | 'hired' | 'rejected';
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const EmployeeApplicationSchema = new Schema<IEmployeeApplication>(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    state: { type: String, required: true, trim: true },
    pincode: { type: String, required: true, trim: true },
    position: { type: String, required: true, trim: true },
    experience: { type: String, required: true, trim: true },
    fssaiLicense: { type: String, default: '', trim: true },
    branchLocation: { type: String, default: '', trim: true },
    message: { type: String, default: '', trim: true },
    status: {
      type: String,
      enum: ['new', 'shortlisted', 'interviewed', 'hired', 'rejected'],
      default: 'new',
    },
    notes: { type: String, default: '' },
  },
  { timestamps: true }
);

EmployeeApplicationSchema.index({ status: 1, createdAt: -1 });

export default models.EmployeeApplication ||
  model<IEmployeeApplication>('EmployeeApplication', EmployeeApplicationSchema);
