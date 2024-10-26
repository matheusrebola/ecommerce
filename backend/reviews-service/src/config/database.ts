// src/config/database.ts
import { DataSource } from "typeorm";
//import { User } from "../entities/User";
import "reflect-metadata";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 60080,
  username: "reviews-service",
  password: "reviews-service",
  database: "reviews-service-db",
  synchronize: true,
//  entities: [User],
});