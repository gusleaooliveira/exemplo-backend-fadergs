import { ApiProperty } from "@nestjs/swagger"
import { Trainning } from "src/trainnings/entities/trainning.entity"
import { User } from "src/users/entities/user.entity"

export class CreateUserTrainningDto {
    @ApiProperty({
        example: {
            id: 1,
            name: 'John Doe',
            email: 'jonh@gmail.com',
            password: 'llorem@Random'
        }
    })
    user: User


    @ApiProperty({
        example: [
            {
                id: 1,
                group_type: {
                    id: 1,
                    group_type: 'Grupo A'
                },
                quantity_of_series: 4,
                quantity_of_repetition: 12,
                muscle_group: {
                    id: 1,
                    muscle_group: 'Peito'
                },
                trainning: 'Supino Inclinado'
            }
        ],
        isArray: true
    })
    trainnings: Trainning[]
}
