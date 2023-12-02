import { PartialType } from '@nestjs/mapped-types';
import { CreateGroupTaskDto } from './create-group-task.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateGroupTaskDto extends PartialType(CreateGroupTaskDto) {
    @ApiProperty({ example: 1 })
    id: number;

    @ApiProperty({ example: 'Grupo 1' })
    name: string
}
