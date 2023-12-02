import { ApiProperty } from "@nestjs/swagger";

export class RemoveUserDto {
    @ApiProperty({ example: 'Usuário John removido!' })
    message: string
}