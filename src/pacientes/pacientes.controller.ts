import { Controller, Get, Param, Body, Post, Put, Delete, NotFoundException } from '@nestjs/common'
import { PacientesService } from './pacientes.service.js'
import { CreatePacienteDto } from './dto/create-pacientes.ts.js'
import { UpdatePacienteDto } from './dto/update-paciente.dto.js'

@Controller('pacientes')
export class PacientesController {
    constructor(private readonly pacientesService: PacientesService) { }

    @Get(`:id`)
    async findOne(@Param(`id`) id: string) {
        const paciente = await this.pacientesService.findOne(Number(id))
        if (!paciente) {
            throw new NotFoundException(`paciente no encontrado`)
        }
        return paciente
    }

    @Post()
    create(@Body() dto: CreatePacienteDto) {
        return this.pacientesService.create(dto)
    }

    @Put(`:id`)
    async update(@Param(`id`) id: string, @Body() dto: UpdatePacienteDto) {
        return this.pacientesService.update(Number(id), dto)
    }

    @Delete(`:id`)
    async remove(@Param(`id`) id: string) {
        const paciente = await this.pacientesService.findOne(Number(id))
        if (!paciente) {
            throw new NotFoundException(`Paciente removido correctamente`)
        }
        return this.pacientesService.remove(Number(id))
    }
}