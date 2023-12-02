import { ApiProperty } from "@nestjs/swagger"
import { Task } from "src/tasks/entities/task.entity"
import { User } from "src/users/entities/user.entity"

export class CreateUserTaskDto {
    @ApiProperty({
        example: {
            "id": 1,
            "name": "John Doe",
            "email": "jonh@gmail.com",
            "password": "llorem@Random"
        }
    })
    user: User

    @ApiProperty({
        example: [
            {
                "id": 1,
                "task": "Tarefa 1",
                "description": "Descrição da tarefa 1",
                "priority": "Low",
                "status": false,
                "star": false,
                "group": {
                    "id": 1,
                    "name": "Grupo 1"
                }
            },
            {
                "id": 2,
                "task": "Tarefa 2",
                "description": "Descrição da tarefa 2",
                "priority": "Low",
                "status": false,
                "star": false,
                "group": {
                    "id": 1,
                    "name": "Grupo 1"
                }
            }
        ]
    })
    tasks: Task[]
}
