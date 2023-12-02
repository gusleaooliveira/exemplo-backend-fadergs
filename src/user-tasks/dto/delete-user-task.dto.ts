import { ApiProperty } from "@nestjs/swagger";

export class DeleteUserTaskDto {
    @ApiProperty({ example: 'Tarefa do Usuário  1 removida!' })
    message: string
}