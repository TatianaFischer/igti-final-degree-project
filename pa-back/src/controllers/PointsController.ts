import { request, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import pointView from '../views/points_view';
import * as Yup from 'yup';
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

    const data = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      wastes_types,
      others_actions,
      opening_hours,
      images,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required('Nome obrigatório'),
      latitude: Yup.number().required('latitude obrigatório'),
      longitude: Yup.number().required('longitude obrigatório'),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required('instruções obrigatório'),
      wastes_types: Yup.string().required('Tipos de resíduos obrigatório'),
      others_actions: Yup.string(),
      opening_hours: Yup.string().required('Horário obrigatório'),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        }),
      ),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const point = pointsRepository.create(data);

    await pointsRepository.save(point);
    return res.status(201).json(point);

    //status 201: create
  },
};
