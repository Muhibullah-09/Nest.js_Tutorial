import { Module } from '@nestjs/common';
import { StudentService } from '../student/student.service';
import { TeacherController } from '../teacher/teacher.controller';
import { StudentController } from '../student/student.controller';
import { TeacherService } from 'src/teacher/teacher.service';
import { StudentTeacherController } from 'src/teacher/student.controller';

@Module({
  imports: [],
  controllers: [StudentController , TeacherController, StudentTeacherController],
  providers: [StudentService , TeacherService],
})
export class AppModule {}
