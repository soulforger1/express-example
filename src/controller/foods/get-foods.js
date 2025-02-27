import { FoodModel } from '../../models/food.model.js'

export const getFoods = async (req, res) => {
    try {
        const foods = await FoodModel.find().populate(['category'])

        res.json({ message: "success", data: foods })
    } catch (err) {
        res.status(403).json({ message: "Error occured" });
    }
}

// verify // Mail
// reset-password // Mail

// sign-in, sign-up, get-user, delete-user
// category(CRUD), food(CRUD) => FoodOrder(CRUD)