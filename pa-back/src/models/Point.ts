import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import Image from './Image';

@Entity('points')
export default class Point {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  about: string;

  @Column()
  instructions: string;

  @Column()
  wastes_types: string;

  @Column()
  others_actions: string;

  @Column()
  opening_hours: string;

  @OneToMany(() => Image, image => image.point, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'point_id' })
  images: Image[];
}
