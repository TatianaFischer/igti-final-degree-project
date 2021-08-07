import { request, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import pointView from '../views/points_view';
import Point from '../models/Point';

export default {
  async index(req: Request, res: Response) {
    const pointsRepository = getRepository(Point);

    const points = await pointsRepository.find({
      relations: ['images'],
    });

    return res.json(pointView.renderMany(points));
  },

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const pointsRepository = getRepository(Point);

    const point = await pointsRepository.findOneOrFail(id, {
      relations: ['images'],
    });

    return res.json(pointView.render(point));
  },

  async create(req: Request, res: Response) {
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

    const requestImages = req.files as Express.Multer.File[];
    const images = requestImages.map(image => {
      return { path: image.filename };
    });

    const point = pointsRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      wastes_types,
      others_actions,
      opening_hours,
      images,
    });

    await pointsRepository.save(point);
    return res.status(201).json(point);

    //status 201: create
  },
};