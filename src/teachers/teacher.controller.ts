import {Controller, Get} from '@nestjs/common';


@Controller('teachers')
export class TeacherController {
    @Get()
    getAllTeachers() {
        return "All data of teachers"
    }
}