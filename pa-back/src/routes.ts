import { Router } from 'express';
import PointsController from './controllers/PointsController';

const routes = Router();

//index, show, create, update, delete

routes.get('/points', PointsController.index);
routes.post('/points', PointsController.create);

export default routes;
