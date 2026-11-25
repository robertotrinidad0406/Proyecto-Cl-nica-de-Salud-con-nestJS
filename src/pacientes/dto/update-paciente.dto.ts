import { PartialType } from '@nestjs/mapped-types';
import { CreatePacienteDto } from './create-pacientes.ts.js';

export class UpdatePacienteDto extends PartialType(CreatePacienteDto) { }