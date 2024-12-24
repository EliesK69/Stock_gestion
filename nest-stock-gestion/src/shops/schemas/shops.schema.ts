import { Schema, Document } from 'mongoose';

export const ShopsSchema = new Schema({
  // Ajouter les champs ici
});

export interface Shops extends Document {
  id: string;
}
