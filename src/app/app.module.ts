import { Module } from '@nestjs/common';
import { StudentService } from '../student/student.service';
import { TeacherController } from '../teachers/teacher.controller';
import { StudentController } from '../student/student.controller';

@Module({
  imports: [],
  controllers: [StudentController , TeacherController],
  providers: [StudentService],
})
export class AppModule {}
