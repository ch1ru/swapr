import { Router } from 'express';
import { register } from '../controller/register.controller'

const registerRoutes = Router();

registerRoutes.route('/')
  .post(register);

export default registerRoutes;