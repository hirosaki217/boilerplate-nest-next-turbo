import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { UsersModule } from 'src/users/users.module'
import { SessionModule } from 'src/session/session.module'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { JwtRefreshStrategy } from './strategies/jwt-refresh.strategy'
import { AnonymousStrategy } from './strategies/anonymous.strategy'
import { JwtStrategy } from './strategies/jwt.strategy'
import { Services } from 'src/utils/constants'
import { ForgotPasswordModule } from 'src/forgot-password/forgot-password.module'
import { MailsModule } from 'src/mails/mails.module'

@Module({
  imports: [UsersModule, SessionModule, PassportModule, MailsModule, ForgotPasswordModule, JwtModule.register({})],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtRefreshStrategy,
    AnonymousStrategy,
    JwtStrategy,
    ForgotPasswordModule,
    {
      provide: Services.AUTH,
      useClass: AuthService
    }
  ],
  exports: [
    {
      provide: Services.AUTH,
      useClass: AuthService
    }
  ]
})
export class AuthModule {}
