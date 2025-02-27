import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const mongoUrl = process.env.MONGO_URL;

export const mongooseConnect = async () => {
    try {
        await mongoose.connect(mongoUrl);
        console.log('Connected to database');
    } catch (err) {
        console.log('Failed to connect database', err);
    };
};