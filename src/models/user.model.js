import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    phoneNumber: String,
    address: String,
    role: {
        type: String,
        enum: ['USER', 'ADMIN'],
        default: 'USER'
    },
    orderedFoods: String,
    isVerified: String,
    createdAt: Date,
    updatedAt: Date
})

export const UserModel = mongoose.models['UserSchema'] || mongoose.model('user', UserSchema)