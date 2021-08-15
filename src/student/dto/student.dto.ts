import { IsDefined, IsString } from "class-validator";

export class FindStudentsResponseDto {
  id: string;
  name: string;
  teacher: string;
}

export class StudentResponseDto {
  id: string;
  name: string;
  teacher: string;
}

export class CreateStudentDto {
  @IsString()
  @IsDefined()
  name: string;

  @IsString()
  @IsDefined()
  teacher: string;
}

export class UpdateStudentDto {
  name: string;
  teacher: string;
}
 