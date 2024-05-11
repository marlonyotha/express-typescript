import { DataSource } from "typeorm"
import { Photo } from "./model/Photo"

export const PostgresDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "!p@ssword1",
    database: "express-typescript",
    synchronize: true,
    logging: true,
    entities: [Photo],
    migrations: [],
})