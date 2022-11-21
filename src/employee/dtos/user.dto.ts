import { IsNumber, IsString } from "class-validator";
import { UserRole } from "src/core/enums";

export class RegisterUserEmployeeDto {

    @IsString()
    name: string;

    @IsString()
    lastName: string;

    @IsString()
    nationalCode: string;

    @IsString()
    password: string;

    @IsString()
    confirmPassword: string;

    @IsString()
    role: UserRole;
}
