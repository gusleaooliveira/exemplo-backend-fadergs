import { ApiProperty } from "@nestjs/swagger";

export class DeleteGroupTrainningDto {
    @ApiProperty({ example: 'Grupo 1 removido!' })
    message: string
}