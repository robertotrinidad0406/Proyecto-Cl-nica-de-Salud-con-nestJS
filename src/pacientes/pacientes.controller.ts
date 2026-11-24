import { Controller, Get, Param, Body, Post, Put, Delete, NotFoundException } from '@nestjs/common'
import { PacientesService } from './pacientes.service.js'

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
    create(@Body() body: any) {
        return this.pacientesService.create(body)
    }

    @Put(`:id`)
    async update(@Param(`id`) id: string, @Body() body: any) {
        const paciente = await this.pacientesService.findOne(Number(id))
        if (!paciente) {
            throw new NotFoundException(`Paciente actualizado`)
        }
        return this.pacientesService.update(Number(id), body)
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