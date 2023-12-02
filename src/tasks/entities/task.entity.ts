import { GroupTask } from "src/group-task/entities/group-task.entity";
import { UserTask } from "src/user-tasks/entities/user-task.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export enum Priority {
    Low = 'Low',
    Medium = 'Medium',
    High = 'High'
}

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false })
    task: string

    @Column({ nullable: false })
    description: string

    @Column({ type: String, enum: Priority, default: Priority.Low })
    priority: Priority

    @Column({ type: Boolean, default: false })
    status: boolean

    @Column({ type: Boolean, nullable: false })
    star: boolean

    @ManyToOne(() => GroupTask, groupTask => groupTask.id)
    @JoinColumn()
    group: GroupTask[]

    @OneToMany(() => UserTask, userTask => userTask.id)
    userTask: UserTask


}
