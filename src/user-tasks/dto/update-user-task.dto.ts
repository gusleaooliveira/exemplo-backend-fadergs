import { PartialType } from '@nestjs/mapped-types';
import { CreateUserTaskDto } from './create-user-task.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserTaskDto extends PartialType(CreateUserTaskDto) {
    @ApiProperty({ example: 1 })
    id: number;
}
