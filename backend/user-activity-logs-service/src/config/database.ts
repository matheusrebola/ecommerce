// src/config/database.ts
import { DataSource } from "typeorm";
//import { User } from "../entities/User";
import "reflect-metadata";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 60100,
  username: "user-activity-logs-service",
  password: "user-activity-logs-service",
  database: "user-activity-logs-service-db",
  synchronize: true,
//  entities: [User],
});