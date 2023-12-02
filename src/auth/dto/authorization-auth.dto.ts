import { ApiProperty, PartialType } from '@nestjs/swagger';
import { User } from 'src/users/entities/user.entity';

export class LoginAuthDto {
    @ApiProperty({
        example:
        {
            "name": "John Doe",
            "email": "jonh@gmail.com",
            "password": "llorem@Random"
        }
    })
    user: User

    @ApiProperty({ example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9" })
    token: string
}
