import { Schema, Document } from 'mongoose';

export const UsersSchema = new Schema({
  // Ajouter les champs ici
});

export interface Users extends Document {
  id: string;
}
