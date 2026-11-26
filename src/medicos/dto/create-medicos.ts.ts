import { IsNotEmpty, IsString, IsEmail, IsInt } from "class-validator";

export class CreateMedicosDto {
    @IsString()
    @IsNotEmpty() NumeroLicencia: string;

    @IsInt()
    @IsNotEmpty() userId: number;

    @IsInt()
    @IsNotEmpty()
    EspecialidadId: number;

    @IsString()
    @IsNotEmpty() apellido: string;

    @IsEmail()
    @IsNotEmpty() correo: string;

    @IsString()
    @IsNotEmpty() telefono: string;
}