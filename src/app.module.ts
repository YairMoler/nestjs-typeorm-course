import { Module } from "@nestjs/common";
import { StudentModule } from "./student/student.module";
import { LessonModule } from "./lesson/lesson.module";
import { ChapterModule } from "./chapter/chapter.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DataSource } from "typeorm";
import { Chapter } from "./entities/chapter.entity";
import { Lesson } from "./entities/lesson.entity";
import { Student } from "./entities/student.entity";

@Module({
    imports: [
        StudentModule,
        LessonModule,
        ChapterModule,
        TypeOrmModule.forRoot({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "z10mz10m",
            database: "test",
            entities: [Chapter, Lesson, Student],
            synchronize: true,
        }),
    ],
})
export class AppModule {
    constructor(private dataSource: DataSource) {}
}
