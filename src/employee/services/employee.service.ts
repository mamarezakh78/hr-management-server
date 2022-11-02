import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeEntity } from 'src/employee/entities/employee.entity';
import { EmployeeDto } from 'src/employee/dtos/employee.dto';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/employee/entities/user.entity';
import { CreateUserDto } from 'src/employee/dtos/user.dto';
import { UserRole } from 'src/core/enums';

@Injectable()
export class EmployeeService {

    constructor(
        @InjectRepository(EmployeeEntity) private readonly employeeRepository: Repository<EmployeeEntity>,
        @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>
    ) { }

    async register(employeeDto: EmployeeDto) {
        const repEmployee = await this.employeeRepository.findOne({ where: { nationalCode: employeeDto.nationalCode } });

        if (repEmployee) {
            throw new HttpException("این کد ملی در سیستم وجود دارد.", HttpStatus.BAD_REQUEST);
        }
        else {
            const employeeRes = await this.employeeRepository.save(employeeDto);

            console.log(employeeRes);
            

            let userDto = new CreateUserDto();
            userDto.id = 0;
            userDto.username = employeeRes.nationalCode;
            userDto.password = employeeRes.nationalCode;
            userDto.role = UserRole.User;
            userDto.employeeId = employeeRes.id;

            console.log(userDto);
            

            let user = await this.userRepository.create(userDto);
            await this.userRepository.save(user);
            
            return new HttpException(employeeRes, HttpStatus.OK);
        }
    }
}
