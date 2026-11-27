import {
    Injectable,
    InternalServerErrorException,
    UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import { PrismaService } from '../prisma/prisma.service.js'
import { LoginDto } from './dto/login.dto.js'
import { RegisterDto } from './dto/register.dto.js'

@Injectable()
export class AuthService {
    constructor(private readonly prisma: PrismaService) { }

    async register(dto: RegisterDto) {
        const passwordHash = await bcrypt.hash(dto.password, 10)
        const user = await this.prisma.users.create({
            data: {
                nombre: dto.nombre,
                apellido: dto.apellido,
                email: dto.email,
                contrasena: passwordHash,
                telefono: dto.telefono,
                rol: dto.role,
            },
            select: { id: true, email: true, rol: true }
        })
        return { id: user.id, email: user.email, role: user.rol }
    }

    async login(dto: LoginDto) {
        const user = await this.prisma.users.findUnique({ where: { email: dto.email } })
        if (!user || !(await bcrypt.compare(dto.password, user.contrasena))) {
            throw new UnauthorizedException('Credenciales inválidas')
        }
        const secret = process.env.JWT_SECRET
        if (!secret) {
            throw new InternalServerErrorException('JWT_SECRET no está configurado')
        }
        const token = jwt.sign(
            { id: user.id, email: user.email, role: user.rol },
            secret,
            { expiresIn: '8h' }
        )
        return { token }
    }
}
