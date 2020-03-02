import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    ownerId: Schema.Types.String,
    title: Schema.Types.String,
    price: { type: Schema.Types.Number, default: 0 },
    attachments: { type: Schema.Types.Array, default: [] },
    transactions: { type: Schema.Types.Array, default: [] },
    isPublicListed: { type: Schema.Types.Boolean, default: false },
    isActive: { type: Schema.Types.Boolean, default: false }
  },
  { timestamps: true }
);

export const Product = model("Product", productSchema);
