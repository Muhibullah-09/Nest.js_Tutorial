import { Injectable } from '@nestjs/common';
import { students } from '../db';
import { CreateStudentDto, FindStudentResponeDto, StudentResponseDto } from './dto/student.dto';

@Injectable()
export class StudentService {
    private students = students;
    //both getStudents and students return the same object thats why we are using private before students.
    getStudents():FindStudentResponeDto[] {
        return this.students;
    }

    //getStudentById service method
    getStudentById(studentId: string): FindStudentResponeDto {
        return this.students.find(student => {
            return student.id === studentId
        });
    }

    //createStudent service method
    createStudent(payload: CreateStudentDto): StudentResponseDto {
        this.students.push(student);
        return student;
    }

}

const x = new StudentService();