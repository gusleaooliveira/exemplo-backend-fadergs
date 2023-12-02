import { Task } from "src/tasks/entities/task.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserTask {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => User, user => user.id)
    @JoinColumn()
    user: User

    @OneToMany(() => Task, task => task.id)
    tasks: Task[]
}
