import { ApiProperty } from "@nestjs/swagger";

export class DeleteTaskDto {
    @ApiProperty({ example: 'Tarefa 1 removida!' })
    message: string;
}