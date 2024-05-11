import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany } from "typeorm"
import { Author } from "./Author"
import { Album } from "./Album"

@Entity()
export class Photo {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100,
    })
    name: string

    @Column()
    description: string

    @Column()
    filename: string

    @Column()
    views: number

    @Column()
    isPublished: boolean

    @ManyToOne(() => Author, (author) => author.photos)
    author: Author

    @ManyToMany(() => Album, (album) => album.photos)
    albums: Album[]
}