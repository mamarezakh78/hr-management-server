import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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
    role: string;

    @ManyToOne(type => EmployeeEntity, employee => employee.id, { eager: true })
    employee: number;

}



