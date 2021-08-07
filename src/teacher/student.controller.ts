import { Controller, Get, Put, Param, Body } from '@nestjs/common';
import {
  FindStudentsResponseDto,
  StudentResponseDto,
  UpdateStudentDto,
} from '../student/dto/student.dto';
import { StudentService } from '../student/student.service';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  constructor(private readonly studentService: StudentService) {}
  @Get()
  getStudentsByTeacherId(
    @Param('teacherId') teacherId: string,
  ): FindStudentsResponseDto[] {
    return this.studentService.getStudentsByTeacherId(teacherId);
    // return `Get students by teacher ID ${teacherId}`;
  }

  @Put('/:studentId')
  updateStudentByTeacher(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
    // @Body body: UpdateStudentDto
  ): StudentResponseDto {
    return this.studentService.updateStudentByTeacher(teacherId, studentId);
    //   return `Update student with studentId ${studentId}by teacher ID ${teacherId}`;
  }
}
