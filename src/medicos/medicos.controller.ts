import { Controller, Get, Param, Body, Post, Put, Delete, NotFoundException } from '@nestjs/common'
import { MedicosService } from './medicos.service.js'
import { CreateMedicosDto } from './dto/create-medicos.ts.js'
import { UpdateMedicosDto } from './dto/update-medico.dto.js'

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
    create(@Body() dto: CreateMedicosDto) {
        return this.medicosService.create(dto)
    }

    @Put(`:id`)
    async update(@Param(`id`) id: string, @Body() dto: UpdateMedicosDto) {
        return this.medicosService.update(Number(id), dto)
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