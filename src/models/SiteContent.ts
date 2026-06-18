import mongoose, { Schema, models, model } from 'mongoose';

export interface ISiteContent {
  _id: mongoose.Types.ObjectId;
  section: string;
  data: Record<string, unknown>;
  updatedAt: Date;
}

const SiteContentSchema = new Schema<ISiteContent>(
  {
    section: { type: String, required: true, unique: true, trim: true },
    data: { type: Schema.Types.Mixed, default: {} },
  },
  { timestamps: true }
);

export default models.SiteContent || model<ISiteContent>('SiteContent', SiteContentSchema);
