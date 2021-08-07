import { Injectable } from '@nestjs/common';
import { students } from '../db';
import {
  CreateStudentDto,
  FindStudentsResponseDto,
  StudentResponseDto,
  UpdateStudentDto,
} from './dto/student.dto';

@Injectable()
export class StudentService {
  private students = students;
  //both getStudents and students return the same object thats why we are using private before students.
  getStudents(): FindStudentsResponseDto[] {
    return this.students;
  }

  //getStudentById service method
  getStudentById(studentId: string): FindStudentsResponseDto {
    return this.students.find((student) => {
      return student.id === studentId;
    });
  }

  //createStudent service method
  createStudent(payload: CreateStudentDto): StudentResponseDto {
    let newStudent = {
      id: 'mk' + Math.random(),
      ...payload,
    };
    this.students.push(newStudent);
    return newStudent;
  }

  //updateStudent service method
  updateStudent(payload: UpdateStudentDto, studentId: string) {
    let updatedStudent: StudentResponseDto;
    const updatedStudentList = this.students.map((student) => {
      if (student.id === studentId) {
        updatedStudent = {
          id: student.id,
          ...payload,
        };
        return updatedStudent;
      } else return student;
    });
    this.students = updatedStudentList;
    return updatedStudent;
  }

  //get All Student by teacher id
  getStudentsByTeacherId(teacherId: string): FindStudentsResponseDto[] {
    return this.students.filter((student) => {
      return student.teacher === teacherId;
    });
  }

  //update student by teacher
  updateStudentByTeacher(
    teacherId: string,
    studentId: string,
  ): StudentResponseDto {
    let updatedStudent: StudentResponseDto;
    const updatedStudentList = this.students.map((student) => {
      if (student.id === studentId) {
        updatedStudent = {
          ...student,
          teacher: teacherId,
        };
        return updatedStudent;
      } else return student;
    });
    this.students = updatedStudentList;
    return updatedStudent;
  }
}

// const x = new StudentService();
// x.
