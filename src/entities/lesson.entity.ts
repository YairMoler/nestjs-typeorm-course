import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Chapter } from "./chapter.entity";
import { Student } from "./student.entity";

@Entity()
export class Lesson {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @ManyToOne(() => Chapter, (chapter) => chapter.lessons)
    @JoinColumn({ name: "chapter_id" })
    chapter: Chapter;

    @ManyToMany(() => Student, (Student) => Student.lessons)
    @JoinTable({
        name: "student_lesson",
        joinColumn: {
            name: "lesson_id",
            referencedColumnName: "id",
        },
        inverseJoinColumn: {
            name: "student_id",
            referencedColumnName: "id",
        },
    })
    students: Student[];
}
