import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ValidStudentMiddleware } from '../common/middleware/validStudent.middleware';
import { StudentController } from './student.controller';
import { StudentSchema } from './student.model';
import { StudentService } from './student.service';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: 'Student',
            schema: StudentSchema
        }],
        'studentsDB'
        ),
    ],
    controllers: [StudentController],
    providers: [StudentService],
    exports: [StudentService]
})
export class StudentModule implements NestModule {
    configure(consumer: MiddlewareConsumer){
         consumer.apply(ValidStudentMiddleware).forRoutes({
             path: '/students/:studentId',
             method: RequestMethod.GET
         });
         consumer.apply(ValidStudentMiddleware).forRoutes({
             path: '/students/updateStudent/:studentId',
             method: RequestMethod.PUT
         });
    }
}
