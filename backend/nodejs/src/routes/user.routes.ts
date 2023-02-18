import { Router } from 'express';
import { locateUser, users } from '../controller/users.controller';

const userRoutes = Router();

userRoutes.route('/')
  .get(users);

userRoutes.route('/locate')
  .get(locateUser);
userRoutes.route('/locate/:username')
  .get(locateUser);

export default userRoutes;