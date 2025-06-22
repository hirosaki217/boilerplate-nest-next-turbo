import { JwtPayloadType } from './auth/strategies/types/jwt-payload.type'

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayloadType
    }
  }
}
