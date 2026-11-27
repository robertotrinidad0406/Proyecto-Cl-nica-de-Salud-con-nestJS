import { Transform } from 'class-transformer'
import { IsEmail, IsEnum, IsNotEmpty, IsString, MinLength } from 'class-validator'
import { Role } from '../../../generated/prisma/enums.js'

export class RegisterDto {
    @IsString()
    @IsNotEmpty()
    nombre!: string

    @IsString()
    @IsNotEmpty()
    apellido!: string

    @IsEmail()
    email!: string

    @IsString()
    @IsNotEmpty()
    telefono!: string

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    password!: string

    @Transform(({ value }) => typeof value === 'string' ? value.toLowerCase() : value)
    @IsEnum(Role)
    role!: Role
}
