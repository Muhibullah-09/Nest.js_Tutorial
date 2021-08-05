import { Module } from '@nestjs/common';
import { TeacherController } from 'src/teachers/teacher.controller';
import { StudentController } from '../students/student.controller';

@Module({
  imports: [],
  controllers: [StudentController , TeacherController],
})
export class AppModule {}
