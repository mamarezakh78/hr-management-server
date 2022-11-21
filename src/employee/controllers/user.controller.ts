import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { RegisterUserEmployeeDto } from '../dtos/register-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Post('/login')
  // login(@Body(ValidationPipe) userDto: RegisterUserEmployeeDto) {
  //   return this.userService.login(userDto);
  // }

  @Post('/register')
  async register(@Body(ValidationPipe) userDto: RegisterUserEmployeeDto) {
    return await this.userService.register(userDto);
  }

  @Post()
  create(@Body() createUserDto: RegisterUserEmployeeDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
