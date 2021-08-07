import { Controller, Get, Param } from '@nestjs/common';
// import { FindStudentResponseDto, StudentResponseDto} from 'src/student/dto/student.dto';
import { FindTeachersDto } from './dto/teacher.dto';
import { TeacherService } from './teacher.service';

@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService:TeacherService) {}

  //Get All Teachers
  @Get()
  getTeachers() : FindTeachersDto[]{
    // return 'All data of teachers';
    return this.teacherService.getTeachers()
  }

  //Get Teacher by teacher id
  @Get('/:teacherId')
  getTeacherById(
    //first method
    // @Param()
    // params: {
    //   teacherId: string;
    // },
    @Param('teacherId') teacherId: string,
  ): FindTeachersDto {
    return this.teacherService.getTeacherById(teacherId);
    // return `Teacher by ID. your id is ${teacherId}`;
  }

  // @Get('/:teacherId/students')
  // getStudentsByTeacherId(@Param('teacherId') teacherId: string) : FindStudentResponeDto[]{
  //   return this.studentService.getStudentsByTeacherId(teacherId);
  //   // return `Get students by teacher ID ${teacherId}`;
  // }

  // @Put('/:teacherId/students/:studentId')
  // updateStudentByTeacherId(
  //   @Param('teacherId') teacherId: string,
  //   @Param('studentId') studentId: string,
  //   @Body() body,
  // ):StudentResponseDto {
  //   return `Update student with studentId ${studentId}by teacher ID ${teacherId}`;
  // }
}
