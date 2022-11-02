import { IsNumber, IsString } from "class-validator";
import { UserRole } from "src/core/enums";

export class CreateUserDto {

    @IsNumber()
    id: number;

    @IsString()
    username: string;

    @IsString()
    password: string;

    @IsString()
    role: UserRole;

    @IsNumber()
    employeeId: number;

}
