import mongoose, { Document, Schema } from 'mongoose';

// Definícia schémy pre používateľa
interface User {
  clerkId: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  profilePic: string;
}


// Vytvorenie mongoose schémy
const userSchema = new Schema<User & Document>({
  clerkId: {
    type: String,
    require: true,
    unique: true
  }, 
  firstName: { 
    type: String, 
    require: true
  },
  lastName: {
    type: String,
    require: true
  }, 
  email: {
    type: String,
    require: true
  }, 
  username: {
    type: String,
    require: true
  },
  profilePic: {
    type: String,
    require: true
  }
});

// Vytvorenie modelu pre používateľa
const UserModel = mongoose.model('User', userSchema);

export default UserModel;
