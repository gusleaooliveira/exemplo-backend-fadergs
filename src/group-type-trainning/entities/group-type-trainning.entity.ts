import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class GroupTypeTrainning {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    group_type: string
}
