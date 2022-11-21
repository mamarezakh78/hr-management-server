import { UserRole } from "src/core/enums";
import { BeforeInsert, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EmployeeEntity } from "./employee.entity";
import { BasicEntity } from "../../shared/entities/base.entity";
import * as bcrypt from "bcrypt";

@Entity("user")
export class UserEntity extends BasicEntity {
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

    @BeforeInsert()
    async hashPassword() {
        const salt = await bcrypt.genSaltSync();
        this.password = await bcrypt.hash(this.password, salt);
    }
}



