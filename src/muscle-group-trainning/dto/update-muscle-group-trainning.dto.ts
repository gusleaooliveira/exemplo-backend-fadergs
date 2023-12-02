import { PartialType } from '@nestjs/mapped-types';
import { CreateMuscleGroupTrainningDto } from './create-muscle-group-trainning.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateMuscleGroupTrainningDto extends PartialType(CreateMuscleGroupTrainningDto) {
    @ApiProperty({ example: 1 })
    id: number;

    @ApiProperty({ example: 'Peito' })
    muscle_group: string
}
