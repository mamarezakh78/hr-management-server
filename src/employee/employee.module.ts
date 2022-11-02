import { Module } from '@nestjs/common';
import { EmployeeService } from './services/employee.service';
import { EmployeeController } from './controllers/employee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeEntity } from 'src/employee/entities/employee.entity';
import { UserEntity } from 'src/employee/entities/user.entity';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeEntity, UserEntity])],
  controllers: [EmployeeController, UserController],
  providers: [EmployeeService, UserService]
})
export class EmployeeModule { }
