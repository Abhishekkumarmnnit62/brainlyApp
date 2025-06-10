// Importing the required modules and functions from Mongoose
import mongoose, { model, Schema } from "mongoose";
import { convertToObject } from "typescript";

// Connecting to the MongoDB database using a connection string
mongoose.connect("mongodb+srv://abhishekkumarmnnit62:SX9FUauXrz7Y7fr2@cluster0.j1ksh.mongodb.net/brainly");

// Defining a schema for the 'User' collection
// Each user will have a unique 'username' and a 'password'
const UserSchema = new Schema({
    username: { type: String, unique: true }, // Unique username to ensure no duplicates
    password: { type: String }               // Password for the user
});

// Creating a model for the 'User' collection, enabling interactions with the database
export const UserModel = model("User", UserSchema);

const ContentSchema = new Schema({
    title: { type: String }, 
    link:  { type: String },
    tags: [{type: mongoose.Types.ObjectId, ref: 'tags'}],
    userId: {type:mongoose.Types.ObjectId,ref:"User", required:true} 
})

export const ContentModel=model("content",ContentSchema);