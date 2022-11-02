import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("employee")
export class EmployeeEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    name: string;

    @Column({ length: 50 })
    lastName: string;

    @Column({ length: 25, unique: true, nullable: true })
    personalCode: string;

    @Column({ length: 25, unique: true })
    nationalCode: string;

    @Column({ length: 50, nullable: true })
    fatherName: string;

    @Column({ length: 25, nullable: true })
    certificateNumber: string;

    @Column({ length: 25, nullable: true })
    birthDate: string;

    @Column({ length: 15, nullable: true })
    membership: string;

    @Column({ length: 25, nullable: true })
    lastStatus: string;

    @Column({ length: 250, nullable: true })
    address: string;

    @Column({ length: 25, nullable: true })
    phoneNumber: string;

    @Column({ length: 25, nullable: true })
    basijEnterDate: string;

    @Column({ length: 25, nullable: true })
    registerDateInPaygah: string;

    @Column({ length: 25, nullable: true })
    paygahEnterDate: string;

    @Column({ length: 25 , nullable: true})
    organization: string;
}


export enum MembershipEnum {
    Active = "فعال",
    Normal = "عادی",
    Cadre = "کادر"
}