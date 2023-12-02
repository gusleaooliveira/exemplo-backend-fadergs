import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Priority } from '../entities/task.entity';
import { GroupTask } from 'src/group-task/entities/group-task.entity';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
    @ApiProperty({ example: 1 })
    id: number;


    @ApiProperty({ example: 'Tarefa 1' })
    task: string

    @ApiProperty({ example: 'Descrição da tarefa 1' })
    description: string


    @ApiProperty({ type: String, enum: Priority, default: Priority.Low })
    priority: Priority

    @ApiProperty({ type: Boolean, default: false })
    status: boolean

    @ApiProperty({ type: Boolean, default: false })
    star: boolean

    @ApiProperty({
        example: {
            id: 1,
            name: 'Grupo 1'
        }
    })
    group: GroupTask[]
}
