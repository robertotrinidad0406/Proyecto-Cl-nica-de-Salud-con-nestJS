import { PartialType } from '@nestjs/mapped-types';
import { CreateMedicosDto } from './create-medicos.ts.js';

export class UpdateMedicosDto extends PartialType(CreateMedicosDto) { }