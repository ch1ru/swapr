import { Router } from 'express';
import { users } from '../controller/users.controller';

const userRoutes = Router();

userRoutes.route('/')
  .get(users);

export default userRoutes;