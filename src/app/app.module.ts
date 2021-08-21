import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from 'src/student/student.module';
import { TeacherModule } from 'src/teacher/teacher.module';

@Module({
  imports: 
  [
    TeacherModule ,
    StudentModule,
    MongooseModule.forRoot('mongodb+srv://muhib:kamali123456789@@students.l4vhc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
      connectionName: 'studentsDB'
    })
  ],
  // controllers: [StudentController , TeacherController, StudentTeacherController],
  // providers: [StudentService , TeacherService],
})
export class AppModule {}
