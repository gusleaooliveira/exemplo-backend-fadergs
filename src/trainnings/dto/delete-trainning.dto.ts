import { ApiProperty } from "@nestjs/swagger";



export class DeleteTrainningDto {
    @ApiProperty({ example: 'Treino 1 removido!' })
    message: string;
}
