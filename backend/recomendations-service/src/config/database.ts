// src/config/database.ts
import { DataSource } from "typeorm";
//import { User } from "../entities/User";
import "reflect-metadata";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 60070,
  username: "recomendations-service",
  password: "recomendations-service",
  database: "recomendations-service-db",
  synchronize: true,
  //entities: [User],
});