import { Module } from '@nestjs/common'
import { SessionService } from './session.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Session } from './entities/session.entity'
import { Services } from 'src/utils/constants'

@Module({
  imports: [TypeOrmModule.forFeature([Session])],

  providers: [
    {
      provide: Services.SESSION,
      useClass: SessionService
    }
  ],
  exports: [
    {
      provide: Services.SESSION,
      useClass: SessionService
    }
  ]
})
export class SessionModule {}
