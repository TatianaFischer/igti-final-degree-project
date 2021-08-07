import { Router } from 'express';
import PointsController from './controllers/PointsController';

const routes = Router();

routes.post('/points', PointsController.create);

export default routes;
