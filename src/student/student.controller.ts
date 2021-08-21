///////////////////////////////////////////////////////

// import { Body, Controller, Get, Param, Patch, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
// import {
//   CreateStudentDto,
//   FindStudentsResponseDto,
//   StudentResponseDto,
//   UpdateStudentDto,
// } from './dto/student.dto';
// import { StudentService } from './student.service';

// @Controller('students')
// export class StudentController {
//   constructor(private readonly studentService: StudentService) {}
//   //get all the students
//   @Get()
//   getStudents(): FindStudentsResponseDto[] {
//     return this.studentService.getStudents();
//   }

//   //get a specific student
//   //: ==> colon represents that its a dynamic route.
//   @Get('/:studentId')
//   getStudentById(
//     //First method to use Param
//     // @Param()
//     // params: {
//     //   studentId: string;
//     // },
//     //Second method to use Param
//     @Param('studentId')
//     studentId: string,
//   ): FindStudentsResponseDto {
//     return this.studentService.getStudentById(studentId);
//     // return `Get Student by Id your id is ${params.studentId}`;
//   }

//   //create a new student
//   @Post('/createStudent')
//   @UsePipes(new ValidationPipe())
//   createStudent(
//     // @Body() params
//     // @Body('name') name //name will store in name
//     @Body() body: CreateStudentDto): StudentResponseDto {
//     // return params;
//     return this.studentService.createStudent(body);
//     // return `Create new Student with that details ${JSON.stringify(body)}`;
//   }

//   //update a student
//   @Put('/updateStudent/:studentId')
//   updateStudent(
//     @Param('studentId') studentId: string,
//     @Body() body: UpdateStudentDto,
//   ): StudentResponseDto {
//     return this.studentService.updateStudent(body, studentId);
//     // return `Update Student by Id ${studentId}`;
//   }
// }
/////////////////////////////////////////////////////


import { Body, Controller, Get, Param, Patch, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import {
  CreateStudentDto,
  FindStudentsResponseDto,
  StudentResponseDto,
  UpdateStudentDto,
} from './dto/student.dto';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
  //get all the students
  @Get()
  async getStudents(){
    const students = await this.studentService.getStudents();
    return students;
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
    @Param('studentId') studentId: string,
  ){
    return this.studentService.getStudentById(studentId);
    // return `Get Student by Id your id is ${params.studentId}`;
  }

  //create a new student
  @Post('/createStudent')
  @UsePipes(new ValidationPipe())
  createStudent(
    // @Body() params
    // @Body('name') name //name will store in name
    @Body() body: CreateStudentDto) {
    // return params;
    return this.studentService.createStudent(body);
    // return `Create new Student with that details ${JSON.stringify(body)}`;
  }

  //update a student
  // @Put('/updateStudent/:studentId')
  // updateStudent(
  //   @Param('studentId') studentId: string,
  //   @Body() body: UpdateStudentDto,
  // ){
  //   return this.studentService.updateStudent(body, studentId);
  //   // return `Update Student by Id ${studentId}`;
  // }
}