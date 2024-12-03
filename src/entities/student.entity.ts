import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Lesson } from "./lesson.entity";
import { DietaryPreference } from "src/student/student.dto";

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "first_name" })
    firstName: string;

    @Column({ name: "last_name" })
    lastName: string;

    @Column()
    age: number;

    @Column({ type: "enum", enum: DietaryPreference })
    dietaryPreference: DietaryPreference;

    @ManyToMany(() => Lesson, (lesson) => lesson.students)
    lessons: Lesson[];
}
