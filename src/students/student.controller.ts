import { Controller, Get } from '@nestjs/common';

@Controller('students')
export class StudentController {
  //get all the students
  @Get()
  getStudents() {
    return 'All data of  students';
  }

  //get a specific student
  //: ==> colon represents that its a dynamic route.
  @Get('/:id')
  getStudentById() {
    return 'Get Student by Id';
  }
}
