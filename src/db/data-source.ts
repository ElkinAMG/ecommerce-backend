import "reflect-metadata"
import { DataSource, DataSourceOptions } from "typeorm"
import { Order, Product, User } from "./entities"

require('dotenv').config()

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: false,
    entities: [User, Product, Order],
    migrations: [],
    subscribers: [],
});