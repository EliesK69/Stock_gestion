import { Schema, Document } from 'mongoose';

export const AuthSchema = new Schema({
  // Ajouter les champs ici
});

export interface Auth extends Document {
  id: string;
}
