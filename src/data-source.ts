import * as dotenv from "dotenv";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Plante } from "./entities/Plante.entity";
import { Utilisateur } from "./entities/Utilisateur.entity";

dotenv.config({ path: ".env.local" });

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false,
  entities: [Plante, Utilisateur],
  migrations: [],
  subscribers: [],
});

export default AppDataSource;
