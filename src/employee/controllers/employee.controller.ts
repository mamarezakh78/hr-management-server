import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { EmployeeDto } from 'src/employee/dtos/employee.dto';
import { EmployeeService } from '../services/employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  // @Post('register')
  // register(@Body(ValidationPipe) employeeDto: EmployeeDto){
  //   return this.employeeService.register(employeeDto)
  // }
}
