import express from 'express';
import { authorizationMiddleware } from '../middleware/authorization.js';
import { createFood } from '../controller/foods/create-food.js';
import { getFoods } from '../controller/foods/get-foods.js';

export const foodRouter = express.Router();

foodRouter.get('/', getFoods)
foodRouter.post('/', authorizationMiddleware, createFood)
