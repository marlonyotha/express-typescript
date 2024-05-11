import { DataSource } from "typeorm"
import { Photo } from "./model/Photo"
import { PhotoMetadata } from "./model/PhotoMetadata"
import { Author } from "./model/Author"
import { Album } from "./model/Album"

export const PostgresDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "!p@ssword1",
    database: "express-typescript",
    synchronize: true,
    logging: true,
    entities: [Photo, PhotoMetadata, Author, Album],
    migrations: [],
})