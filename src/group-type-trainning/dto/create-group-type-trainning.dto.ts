import { ApiProperty } from "@nestjs/swagger"

export class CreateGroupTypeTrainningDto {



    @ApiProperty({ example: 'Grupo A' })
    group_type: string
}
