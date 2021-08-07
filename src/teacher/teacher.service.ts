import { Injectable } from '@nestjs/common';
import { teachers } from 'src/db';
import { FindTeachersDto } from './dto/teacher.dto';

@Injectable()
export class TeacherService {
    private teachers = teachers;

    //get All teachers
    getTeachers(): FindTeachersDto[] {
        return this.teachers
    }

    //get Teacher by ID
    getTeacherById(teacherId: string): FindTeachersDto{
        return this.teachers.find((teacher)=>{
            return teacher.id === teacherId;
        });
    }
}
