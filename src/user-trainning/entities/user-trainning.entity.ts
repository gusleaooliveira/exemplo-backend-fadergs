import { Trainning } from "src/trainnings/entities/trainning.entity";
import { User } from "src/users/entities/user.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserTrainning {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => User, user => user.id)
    @JoinColumn()
    user: User

    @ManyToOne(() => Trainning, trainning => trainning.id)
    @JoinColumn()
    trainnings: Trainning[]
}
