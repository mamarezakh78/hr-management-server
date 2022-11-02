import { IsNumber, IsString } from "class-validator";

export class EmployeeDto {

    @IsNumber()
    id: number;

    @IsString()
    name: string;

    @IsString()
    lastName: string;

    @IsString()
    nationalCode: string;

    @IsString()
    phoneNumber: string;
}