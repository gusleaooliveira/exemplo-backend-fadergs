import { PartialType } from '@nestjs/mapped-types';
import { CreateUserTrainningDto } from './create-user-trainning.dto';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/entities/user.entity';
import { Trainning } from 'src/trainnings/entities/trainning.entity';

export class UpdateUserTrainningDto extends PartialType(CreateUserTrainningDto) {
    @ApiProperty({ example: 1 })
    id: number;

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
