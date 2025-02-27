import mongoose from "mongoose";

const FoodSchema = mongoose.Schema({
    foodName: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    ingredients: { type: String, required: true },
    category: [{ type: mongoose.Schema.Types.ObjectId, ref: 'foodCategory' }],
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, default: new Date() },
})

export const FoodModel = mongoose.models['food'] || mongoose.model('food', FoodSchema)