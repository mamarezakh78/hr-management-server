import { PartialType } from '@nestjs/mapped-types';
import { RegisterUserEmployeeDto } from './user.dto';

export class UpdateUserDto extends PartialType(RegisterUserEmployeeDto) {}
