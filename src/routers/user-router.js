import { getUsers } from '../controller/users/get-users.js';
import { createUser } from '../controller/users/create-user.js';
import express from 'express';
import { deleteUser } from '../controller/users/delete-user.js';
import { updateUser } from '../controller/users/update-user.js';
import { login } from '../controller/users/login.js';
import { authorizationMiddleware } from '../middleware/authorization.js';
import { validateEmailMiddleware } from '../middleware/validateEmail.js';

export const userRouter = express.Router();

userRouter.get('/', authorizationMiddleware, getUsers);
userRouter.post('/', validateEmailMiddleware, createUser);
userRouter.put('/', authorizationMiddleware, updateUser);
userRouter.delete('/', authorizationMiddleware, deleteUser);
userRouter.post('/login', validateEmailMiddleware, login);