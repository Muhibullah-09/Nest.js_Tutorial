import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('students')
export class StudentController {

  //get all the students
  @Get()
  getStudents() {
    return 'All data of  students';
  }

  //get a specific student
  //: ==> colon represents that its a dynamic route.
  @Get('/:studentId')
  getStudentById() {
    return 'Get Student by Id';
  }

  //create a new student
  @Post('/createStudent')
  createStudent() {
    return 'Create Student';
  }

  //update a student
  @Put('/updateStudent/:studentId')
  updateStudent() {
    return 'Update Student by Id';
  }
}
