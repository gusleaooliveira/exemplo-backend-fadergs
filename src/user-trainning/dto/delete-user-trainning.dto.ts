import { ApiProperty } from "@nestjs/swagger";

export class DeleteUserTrainningDto {
    @ApiProperty({ example: 'Treino do usuário 1 removido!' })
    message: string;
}