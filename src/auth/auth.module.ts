import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { JwtAuthGuard } from './jwt-auth-guard';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'secret',
      secretOrPrivateKey: 'secret',
      signOptions: { expiresIn: '24h' },
    }),
    UsersModule,

  ],
  controllers: [AuthController],
  providers: [AuthService, JwtAuthGuard, JwtStrategy],
  exports: [AuthModule, AuthService, JwtAuthGuard, JwtStrategy]
})
export class AuthModule { }
