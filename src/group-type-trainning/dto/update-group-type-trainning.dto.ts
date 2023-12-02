import { PartialType } from '@nestjs/mapped-types';
import { CreateGroupTypeTrainningDto } from './create-group-type-trainning.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateGroupTypeTrainningDto extends PartialType(CreateGroupTypeTrainningDto) {
    @ApiProperty({ example: 1 })
    id: number;

    @ApiProperty({ example: 'Grupo A' })
    group_type: string
}
