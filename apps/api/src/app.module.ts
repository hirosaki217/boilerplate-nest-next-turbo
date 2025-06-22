import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { appConfig, authConfig, databaseConfig, googleConfig, mailerConfig } from './config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TypeOrmConfigService } from './database/typeorm-config.servicce'
import { DataSource, DataSourceOptions } from 'typeorm'
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'
import { SessionModule } from './session/session.module'
import { ForgotPasswordModule } from './forgot-password/forgot-password.module'
import { MailsModule } from './mails/mails.module'
import { MailerModule } from './mailer/mailer.module'
import { AuthGoogleModule } from './auth-google/auth-google.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, authConfig, databaseConfig, googleConfig, mailerConfig],
      envFilePath: ['.env']
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
      dataSourceFactory: async (options?: DataSourceOptions) => {
        if (!options) {
          throw new Error('DataSourceOptions are undefined')
        }
        const dataSource = await new DataSource(options).initialize()
        return dataSource
      }
    }),
    UsersModule,
    AuthModule,
    SessionModule,
    MailerModule,
    MailsModule,
    ForgotPasswordModule,
    AuthGoogleModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
