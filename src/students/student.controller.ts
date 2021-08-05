import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

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
  getStudentById(
    //First method to use Param 
    // @Param()
    // params: {
    //   studentId: string;
    // },
    //Second method to use Param
    @Param('studentId')
      studentId: string
  ) {
    return `Get Student by Id your id is ${studentId}`;
    // return `Get Student by Id your id is ${params.studentId}`;
  }

  //create a new student
  @Post('/createStudent')
  createStudent(
    // @Body() params
    @Body('name') name //name will store in name
  ) {
    // return params;
    return name;
  }

  //update a student
  @Put('/updateStudent/:studentId')
  updateStudent(
    @Param('studentId') studentId: string,
    @Body() body
  ) {
    return `Update Student by Id ${studentId}`;
  }
}
