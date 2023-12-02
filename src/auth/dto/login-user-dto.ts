import { ApiProperty } from "@nestjs/swagger";

export class LoginUserDto {
    @ApiProperty({ example: 'jonh@gmail.com' })
    email: string

    @ApiProperty({ example: 'llorem@Random' })
    password: string
}