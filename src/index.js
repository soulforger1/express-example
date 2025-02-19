import express from 'express';
import { userRouter } from './routers/user-router.js';
import { productRouter } from './routers/product-router.js';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/users', userRouter);
app.use('/products', productRouter);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
