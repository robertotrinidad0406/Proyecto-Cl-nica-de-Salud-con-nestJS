import { Controller, Get, Param, Body, Post, Put, Delete, NotFoundException } from '@nestjs/common'
import { MedicosService } from './medicos.service.js'

@Controller('medicos')
export class MedicosController {
    constructor(private readonly medicosService: MedicosService) { }

    @Get(`:id`)
    async findOne(@Param(`id`) id: string) {
        const medico = await this.medicosService.findOne(Number(id))
        if (!medico) {
            throw new NotFoundException(`Medico no encontrado`)
        }
        return medico
    }

    @Post()
    create(@Body() body: any) {
        return this.medicosService.create(body)
    }

    @Put(`:id`)
    async update(@Param(`id`) id: string, @Body() body: any) {
        const medico = await this.medicosService.findOne(Number(id))
        if (!medico) {
            throw new NotFoundException(`Medico actualizado`)
        }
        return this.medicosService.update(Number(id), body)
    }

    @Delete(`:id`)
    async remove(@Param(`id`) id: string) {
        const medico = await this.medicosService.findOne(Number(id))
        if (!medico) {
            throw new NotFoundException(`Medico removido correctamente`)
        }
        return this.medicosService.remove(Number(id))
    }
}