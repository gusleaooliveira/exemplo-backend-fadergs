import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MuscleGroupTrainning {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    muscle_group: string
}
