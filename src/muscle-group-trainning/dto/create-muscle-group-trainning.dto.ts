import { ApiProperty } from "@nestjs/swagger";

export class CreateMuscleGroupTrainningDto {
    @ApiProperty({ example: 'Peito' })
    muscle_group: string
}
