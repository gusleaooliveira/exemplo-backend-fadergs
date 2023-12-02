import { ApiProperty } from "@nestjs/swagger";

export class DeleteGroupTaskDto {
    @ApiProperty({ example: 'Grupo de tarefas 1 removido!' })
    message: string;
}