import { ApiProperty } from "@nestjs/swagger";

export class CreateGroupTaskDto {
    @ApiProperty({ example: 'Grupo 1' })
    name: string
}
