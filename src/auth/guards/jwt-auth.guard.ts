import {
    CanActivate,
    ExecutionContext,
    Injectable,
    InternalServerErrorException,
    UnauthorizedException,
} from '@nestjs/common'
import * as jwt from 'jsonwebtoken'

@Injectable()
export class JwtAuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest()
        const header = request.headers.authorization

        if (!header || !header.startsWith('Bearer ')) {
            throw new UnauthorizedException('Token no proporcionado')
        }

        const secret = process.env.JWT_SECRET
        if (!secret) {
            throw new InternalServerErrorException('JWT_SECRET no está configurado')
        }

        try {
            request.user = jwt.verify(header.slice(7), secret)
            return true
        } catch {
            throw new UnauthorizedException('Token inválido o expirado')
        }
    }
}