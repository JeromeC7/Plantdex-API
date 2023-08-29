import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Plante {
  @PrimaryColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  soleil: string;

  @Column()
  arrosage: number;

  @Column()
  categorie: string;

  @Column()
  image: string;
}
