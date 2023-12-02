import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-jwt";
import { AuthService } from "./auth.service";
import { LoginUserDto } from "./dto/login-user-dto";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(
        private authService: AuthService,
    ) {
        super({
            usernameField: 'email',
            passwordField: 'password'
        })
    }

    async validate(loginUser: LoginUserDto) {
        const isValid = await this.authService.validateUser(loginUser)
        if (isValid.isValid == false) {
            const message = { message: 'Login inválido!' }
            return message
        }
        else {
            return isValid.user
        }
    }

}