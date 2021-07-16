import {Entity, Column, PrimaryGeneratedColumn } from "typeorm";

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
}