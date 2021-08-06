import { Module } from '@nestjs/common';
import { TeacherController } from 'src/teachers/teacher.controller';
import { StudentController } from '../student/student.controller';

@Module({
  imports: [],
  controllers: [StudentController , TeacherController],
})
export class AppModule {}
