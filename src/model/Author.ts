import { Entity,Column,PrimaryGeneratedColumn,OneToMany} from "typeorm"
import { Photo } from "./Photo"

@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(() => Photo, (photo) => photo.author)
    photos: Photo[]
}