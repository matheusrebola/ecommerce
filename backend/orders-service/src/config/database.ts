// src/config/database.ts
import { DataSource } from "typeorm";
import { Orders } from "../entities/Orders";
import "reflect-metadata";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 60030,
  username: "orders-service",
  password: "orders-service",
  database: "orders-service-db",
  synchronize: true,
  entities: [Orders],
});