import { ApiProperty } from "@nestjs/swagger"

export class CreateUserDto {

    @ApiProperty({ example: 'John Doe' })
    name: string

    @ApiProperty({ example: 'jonh@gmail.com' })
    email: string

    @ApiProperty({ example: 'llorem@Random' })
    password: string
}
