import { PartialType } from '@nestjs/mapped-types';
import { CreateTrainningDto } from './create-trainning.dto';
import { ApiProperty } from '@nestjs/swagger';
import { GroupTypeTrainning } from 'src/group-type-trainning/entities/group-type-trainning.entity';
import { MuscleGroupTrainning } from 'src/muscle-group-trainning/entities/muscle-group-trainning.entity';

export class UpdateTrainningDto extends PartialType(CreateTrainningDto) {
    @ApiProperty({ example: 1 })
    id: number;

    @ApiProperty({
        default: 0, example: {
            id: 1,
            group_type: 'Grupo A'
        }
    })
    group_type: GroupTypeTrainning

    @ApiProperty({ default: 0, example: 4 })
    quantity_of_series: number

    @ApiProperty({ default: 0, example: 12 })
    quantity_of_repetition: number

    @ApiProperty({
        default: 0, example: {
            id: 1,
            muscle_group: 'Peito'
        }
    })
    muscle_group: MuscleGroupTrainning

    @ApiProperty({ default: 0, example: 'Supino Inclinado' })
    trainning: string
}
