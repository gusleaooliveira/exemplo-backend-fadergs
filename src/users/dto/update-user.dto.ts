import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty({ example: 1 })
    id: number;

    @ApiProperty({ example: 'John Doe' })
    name: string

    @ApiProperty({ example: 'jonh@gmail.com' })
    email: string

    @ApiProperty({ example: 'llorem@Random' })
    password: string
}
