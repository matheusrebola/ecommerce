// src/config/database.ts
import { DataSource } from "typeorm";
import { Products } from "../entities/Products";
import "reflect-metadata";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 60060,
  username: "products-service",
  password: "products-service",
  database: "products-service-db",
  synchronize: true,
  entities: [Products],
});