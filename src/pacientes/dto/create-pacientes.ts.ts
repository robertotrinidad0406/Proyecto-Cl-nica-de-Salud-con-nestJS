import { IsNotEmpty, IsString, IsEmail } from "class-validator";

export class CreatePacienteDto {
    @IsString()
    @IsNotEmpty() nombre: string;

    @IsString()
    @IsNotEmpty() apellido: string;

    @IsEmail()
    @IsNotEmpty() correo: string;

    @IsString()
    @IsNotEmpty()
    telefono: string;
}