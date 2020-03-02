import { Schema, model } from "mongoose";
import findOrCreate from "mongoose-findorcreate";
import { schemaTypes } from "../utils";

const userSchema = new Schema(
  {
    displayName: { type: schemaTypes.String, default: null },
    displayPicture: { type: schemaTypes.String, default: null },
    roles: { type: schemaTypes.Array, default: null },
    email: schemaTypes.String,
    password: schemaTypes.String
  },
  { timestamps: true }
);
userSchema.plugin(findOrCreate);

export const User = model("User", userSchema);
