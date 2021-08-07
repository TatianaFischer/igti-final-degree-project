import Point from '../models/Point';
import imagesView from './images_views';

export default {
  render(point: Point) {
    return {
      id: point.id,
      name: point.name,
      latitude: point.latitude,
      longitude: point.longitude,
      about: point.about,
      instructions: point.instructions,
      wastes_types: point.wastes_types,
      others_actions: point.others_actions,
      opening_hours: point.opening_hours,
      images: imagesView.renderMany(point.images),
    };
  },

  renderMany(points: Point[]) {
    return points.map(point => this.render(point));
  },
};
