
import express from 'express';
import { getProduct } from '../controller/product/get-product.js';

export const productRouter = express.Router();

productRouter.get('/', getProduct)