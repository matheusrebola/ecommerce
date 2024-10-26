// src/config/database.ts
import { DataSource } from "typeorm";
import { Customers } from "../entities/Customers";
import "reflect-metadata";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 60010,
  username: "customers-service",
  password: "customers-service",
  database: "customers-service-db",
  synchronize: true,
  entities: [Customers],
});