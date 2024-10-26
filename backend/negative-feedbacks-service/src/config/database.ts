// src/config/database.ts
import { DataSource } from "typeorm";
import { NegativeFeedbacks } from "../entities/NegativeFeedbacks";
import "reflect-metadata";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 60020,
  username: "negative-feedback",
  password: "negative-feedback",
  database: "negative-feedback-db",
  synchronize: true,
  entities: [NegativeFeedbacks],
});