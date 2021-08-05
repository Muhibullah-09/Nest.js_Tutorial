import { Controller, Get, Put } from '@nestjs/common';

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers() {
    return 'All data of teachers';
  }

  @Get('/:teacherId')
  getTeacherById() {
    return 'Teacher by ID.';
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
