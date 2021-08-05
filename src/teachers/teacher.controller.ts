import { Controller, Get, Param, Put } from '@nestjs/common';

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers() {
    return 'All data of teachers';
  }

  @Get('/:teacherId')
  getTeacherById(@Param() params: { teacherId: string }) {
    return `Teacher by ID. your id is ${params.teacherId}`;
  }

  @Get('/:teacherId/students')
  getStudentsByTeacherId() {
    return 'Get students by teacher ID';
  }

  @Put('/:teacherId/students/:studentId')
  updateStudentByTeacherId() {
    return 'Update student by teacher ID';
  }
}
