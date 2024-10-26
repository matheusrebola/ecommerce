// src/config/database.ts
import { DataSource } from "typeorm";
import { ProductCategories } from "../entities/ProductCategories";
import "reflect-metadata";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 60050,
  username: "product-categories-service",
  password: "product-categories-service",
  database: "product-categories-service-db",
  synchronize: true,
  entities: [ProductCategories],
});