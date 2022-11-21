import { BaseEntity, CreateDateColumn, UpdateDateColumn } from "typeorm";

export class BasicEntity extends BaseEntity {

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}



