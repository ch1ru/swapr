import { Router } from 'express';
import { peerInfo } from '../controller/peers.controller';

const peerRoutes = Router();

peerRoutes.route('/info')
  .get(peerInfo);

peerRoutes.route('/info/:id')
  .get(peerInfo);

export default peerRoutes;