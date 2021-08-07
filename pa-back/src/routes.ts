import { Router } from 'express';
import { getRepository } from 'typeorm';
import Point from './models/Point';

const routes = Router();

routes.post('/points', async (req, res) => {
  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    wastes_types,
    others_actions,
    opening_hours,
  } = req.body;

  const pointsRepository = getRepository(Point);

  const point = pointsRepository.create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    wastes_types,
    others_actions,
    opening_hours,
  });

  await pointsRepository.save(point);
  return res.status(201).json(point);

  //status 201: create
});

export default routes;
