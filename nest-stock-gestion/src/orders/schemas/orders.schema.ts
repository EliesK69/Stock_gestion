import { Schema, Document } from 'mongoose';

export const OrdersSchema = new Schema({
  // Ajouter les champs ici
});

export interface Orders extends Document {
  id: string;
}
