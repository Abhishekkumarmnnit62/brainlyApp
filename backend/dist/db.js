"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentModel = exports.UserModel = void 0;
// Importing the required modules and functions from Mongoose
const mongoose_1 = __importStar(require("mongoose"));
// Connecting to the MongoDB database using a connection string
mongoose_1.default.connect("mongodb+srv://abhishekkumarmnnit62:SX9FUauXrz7Y7fr2@cluster0.j1ksh.mongodb.net/brainly");
// Defining a schema for the 'User' collection
// Each user will have a unique 'username' and a 'password'
const UserSchema = new mongoose_1.Schema({
    username: { type: String, unique: true }, // Unique username to ensure no duplicates
    password: { type: String } // Password for the user
});
// Creating a model for the 'User' collection, enabling interactions with the database
exports.UserModel = (0, mongoose_1.model)("User", UserSchema);
const ContentSchema = new mongoose_1.Schema({
    title: { type: String },
    link: { type: String },
    tags: [{ type: mongoose_1.default.Types.ObjectId, ref: 'tags' }],
    userId: { type: mongoose_1.default.Types.ObjectId, ref: "User", required: true }
});
exports.ContentModel = (0, mongoose_1.model)("content", ContentSchema);
