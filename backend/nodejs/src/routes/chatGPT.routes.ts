import { Router } from 'express';
import { generateResponse } from '../controller/chatGPT.controller';

const chatGPTRoutes = Router();

chatGPTRoutes.route('/')
  .post(generateResponse);

export default chatGPTRoutes;