import { ApiProperty } from "@nestjs/swagger";

export class CreateMuscleGroupTrainningDto {
    @ApiProperty({ example: 'Grupo muscular  1 removido!' })
    message: string;
}