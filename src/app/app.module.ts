import { Module } from '@nestjs/common';
import { StudentModule } from 'src/student/student.module';
import { TeacherModule } from 'src/teacher/teacher.module';

@Module({
  imports: [TeacherModule ,StudentModule],
  // controllers: [StudentController , TeacherController, StudentTeacherController],
  // providers: [StudentService , TeacherService],
})
export class AppModule {}
