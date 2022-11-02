import { BadRequestException, HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dtos/user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity) private readonly userRepo: Repository<UserEntity>,
    ) { }

    async  login(user: CreateUserDto) {
        const findUser = await this.userRepo.findOne({ where: { username: user.username, password: user.password } });

        if (!findUser) {
            throw new UnauthorizedException();
        }
        else {
            return new HttpException(findUser, HttpStatus.OK);
        }
    }

    create(createUserDto: CreateUserDto) {
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
