import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Lesson } from "./lesson.entity";

@Entity()
export class Chapter {
    @PrimaryGeneratedColumn()
    title: string;

    @Column()
    description: string;

    @OneToMany(() => Lesson, (lesson) => lesson.chapter)
    lessons: Lesson[];
}
