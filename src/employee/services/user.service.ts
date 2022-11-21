import { BadRequestException, HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterUserEmployeeDto } from '../dtos/user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { EmployeeEntity } from '../entities/employee.entity';
import { MainService } from 'src/shared/services/main.service';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
        @InjectRepository(EmployeeEntity) private readonly employeeRepository: Repository<EmployeeEntity>
    ) { }

    // async login(user: RegisterUserEmployeeDto) {
    //     const findUser = await this.userRepository.findOne({ where: { username: user.username, password: user.password } });

    //     if (!findUser) {
    //         throw new UnauthorizedException();
    //     }
    //     else {
    //         return new HttpException(findUser, HttpStatus.OK);
    //     }
    // }

    async register(userDto: RegisterUserEmployeeDto) {

        let insertedEmployee = await this.insertEmployee(userDto);

        let insertedUser = await this.insertUser(userDto, insertedEmployee);

        return new HttpException(insertedUser, HttpStatus.OK)
    }

    private async insertEmployee(userDto: RegisterUserEmployeeDto) {

        let employee: Partial<EmployeeEntity> = {
            name: userDto.name,
            lastName: userDto.lastName,
            nationalCode: userDto.nationalCode
        }

        let res = await this.employeeRepository.save(employee);

        return res;
    }

    private async insertUser(userDto: RegisterUserEmployeeDto, insertedEmployee: EmployeeEntity) {

        let user: Partial<UserEntity> = {
            username: userDto.nationalCode,
            password: userDto.password,
            role: userDto.role,
            employeeId: insertedEmployee.id
        }

        let res = await this.userRepository.save(user);

        return res;
    }

    create(createUserDto: RegisterUserEmployeeDto) {
        return 'This action adds a new user';
    }

    findAll() {
        return `This action returns all user`;
    }

    findOne(id: number) {
        return `This action returns a #${id} user`;
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`;
    }

    remove(id: number) {
        return `This action removes a #${id} user`;
    }
}
