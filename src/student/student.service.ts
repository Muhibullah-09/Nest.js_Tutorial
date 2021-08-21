///////////////////////////////////////////////////
// import { Injectable } from '@nestjs/common';
// import { students } from '../db';
// import {
//   CreateStudentDto,
//   FindStudentsResponseDto,
//   StudentResponseDto,
//   UpdateStudentDto,
// } from './dto/student.dto';

// @Injectable()
// export class StudentService {
//   private students = students;
//   //both getStudents and students return the same object thats why we are using private before students.
//   getStudents(): FindStudentsResponseDto[] {
//     return this.students;
//   }

//   //getStudentById service method
//   getStudentById(studentId: string): FindStudentsResponseDto {
//     return this.students.find((student) => {
//       return student.id === studentId;
//     });
//   }

//   //createStudent service method
//   createStudent(payload: CreateStudentDto): StudentResponseDto {
//     let newStudent = {
//       id: 'mk' + Math.random(),
//       ...payload,
//     };
//     this.students.push(newStudent);
//     return newStudent;
//   }

//   //updateStudent service method
//   updateStudent(payload: UpdateStudentDto, studentId: string) {
//     let updatedStudent: StudentResponseDto;
//     const updatedStudentList = this.students.map((student) => {
//       if (student.id === studentId) {
//         updatedStudent = {
//           id: student.id,
//           ...payload,
//         };
//         return updatedStudent;
//       } else return student;
//     });
//     this.students = updatedStudentList;
//     return updatedStudent;
//   }

//   //get All Student by teacher id
//   getStudentsByTeacherId(teacherId: string): FindStudentsResponseDto[] {
//     return this.students.filter((student) => {
//       return student.teacher === teacherId;
//     });
//   }

//   //update student by teacher
//   updateStudentByTeacher(
//     teacherId: string,
//     studentId: string,
//   ): StudentResponseDto {
//     let updatedStudent: StudentResponseDto;
//     const updatedStudentList = this.students.map((student) => {
//       if (student.id === studentId) {
//         updatedStudent = {
//           ...student,
//           teacher: teacherId,
//         };
//         return updatedStudent;
//       } else return student;
//     });
//     this.students = updatedStudentList;
//     return updatedStudent;
//   }
// }

///////////////////////////////////////////////////
///////////////////////////////////////////////////
import { NotFoundException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { students } from '../db';
import {
  CreateStudentDto,
  FindStudentsResponseDto,
  StudentResponseDto,
  UpdateStudentDto,
} from './dto/student.dto';
import { Student } from './student.model';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel('Student') private readonly studentModel: Model<Student>
    ){}
  //both getStudents and students return the same object thats why we are using private before students.
  async getStudents() {
    const students = await this.studentModel.find().exec();
    return students.map(student => ({
      id: student.id,
      name: student.name,
      teacher: student.teacher,
    }));
  }

  //getStudentById service method
  async getStudentById(studentId: string) {
    const student = await this.findStudent(studentId);
    return {
      id: student.id,
      name: student.name,
      teacher: student.teacher,
    };
  }

  //createStudent service method
  async createStudent(payload: CreateStudentDto){
    let newStudent = new this.studentModel({
      id: 'mk' + Math.random(),
      ...payload,
    });
    const result = await newStudent.save();
    return result.id as string;
  }

  //updateStudent service method
  // updateStudent(payload: UpdateStudentDto, studentId: string) {
  //   let updatedStudent: StudentResponseDto;
  //   const updatedStudentList = this.students.map((student) => {
  //     if (student.id === studentId) {
  //       updatedStudent = {
  //         id: student.id,
  //         ...payload,
  //       };
  //       return updatedStudent;
  //     } else return student;
  //   });
  //   this.students = updatedStudentList;
  //   return updatedStudent;
  // }

  //get All Student by teacher id
  // getStudentsByTeacherId(teacherId: string): FindStudentsResponseDto[] {
  //   return this.students.filter((student) => {
  //     return student.teacher === teacherId;
  //   });
  // }

  //update student by teacher
  // updateStudentByTeacher(
  //   teacherId: string,
  //   studentId: string,
  // ): StudentResponseDto {
  //   let updatedStudent: StudentResponseDto;
  //   const updatedStudentList = this.students.map((student) => {
  //     if (student.id === studentId) {
  //       updatedStudent = {
  //         ...student,
  //         teacher: teacherId,
  //       };
  //       return updatedStudent;
  //     } else return student;
  //   });
  //   this.students = updatedStudentList;
  //   return updatedStudent;
  // }

  private async findStudent(id: string): Promise<Student> {
    let student;
    try {
      student = await this.studentModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find student.');
    }
    if (!student) {
      throw new NotFoundException('Could not find student.');
    }
    return student;
  }
}

