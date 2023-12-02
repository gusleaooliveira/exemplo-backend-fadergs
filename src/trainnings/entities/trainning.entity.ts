import { GroupTypeTrainning } from "src/group-type-trainning/entities/group-type-trainning.entity";
import { MuscleGroupTrainning } from "src/muscle-group-trainning/entities/muscle-group-trainning.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Trainning {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => GroupTypeTrainning, groupTypeTrainning => groupTypeTrainning.id)
    @JoinColumn()
    group_type: GroupTypeTrainning

    @Column({ default: 0 })
    quantity_of_series: number

    @Column({ default: 0 })
    quantity_of_repetition: number

    @ManyToOne(() => MuscleGroupTrainning, muscleGroupTrainning => muscleGroupTrainning.id)
    @JoinColumn()
    muscle_group: MuscleGroupTrainning

    @Column({ default: '', nullable: false })
    trainning: string
}
