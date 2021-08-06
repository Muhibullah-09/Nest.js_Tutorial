import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { FindStudentResponeDto, StudentResponseDto} from 'src/student/dto/student.dto';
import { FindTeachersDto } from './dto/teacher.dto';

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers() : FindTeachersDto{
    return 'All data of teachers';
  }

  @Get('/:teacherId')
  getTeacherById(
    //first method
    // @Param()
    // params: {
    //   teacherId: string;
    // },
    @Param('teacherId') teacherId: string,
  ): FindTeachersDto {
    return `Teacher by ID. your id is ${teacherId}`;
  }

  @Get('/:teacherId/students')
  getStudentsByTeacherId(@Param('teacherId') teacherId: string) : FindStudentResponeDto[]{
    return `Get students by teacher ID ${teacherId}`;
  }

  @Put('/:teacherId/students/:studentId')
  updateStudentByTeacherId(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
    @Body() body,
  ):StudentResponseDto {
    return `Update student with studentId ${studentId}by teacher ID ${teacherId}`;
  }
}
