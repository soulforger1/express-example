import { FoodCategoryModel } from '../../models/food-category.model.js';

export const createCategory = async (req, res) => {
    const { categoryName } = req.body;

    try {
        await FoodCategoryModel.create({ categoryName });
        res.json({ message: 'Success' })
    } catch (err) {
        res.status(403).json({ message: "Error occured" });
    }
}
