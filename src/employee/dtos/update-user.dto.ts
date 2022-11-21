import { PartialType } from '@nestjs/mapped-types';
import { RegisterUserEmployeeDto } from './register-user.dto';

export class UpdateUserDto extends PartialType(RegisterUserEmployeeDto) {}
