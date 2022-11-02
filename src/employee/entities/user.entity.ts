import { UserRole } from "src/core/enums";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EmployeeEntity } from "./employee.entity";

@Entity("user")
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true})
    username: string;

    @Column()
    password: string;

    @Column()
    role: UserRole;

    @ManyToOne(type => EmployeeEntity, employee => employee.id, { eager: true })
    employeeId: number;

    @CreateDateColumn()
    createDate: Date;
}



