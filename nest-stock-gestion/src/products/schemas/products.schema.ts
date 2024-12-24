import { Schema, Document } from 'mongoose';

export const ProductsSchema = new Schema({
  // Ajouter les champs ici
});

export interface Products extends Document {
  id: string;
}
