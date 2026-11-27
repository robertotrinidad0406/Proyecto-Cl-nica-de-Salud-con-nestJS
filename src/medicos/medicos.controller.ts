import { Controller, Get, Param, Body, Post, Put, Delete, NotFoundException, UseGuards } from '@nestjs/common'
import { MedicosService } from './medicos.service.js'
import { CreateMedicosDto } from './dto/create-medicos.ts.js'
import { UpdateMedicosDto } from './dto/update-medico.dto.js'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js'
import { RolesGuard } from '../auth/guards/roles.guard.js'
import { Roles } from '../auth/decorators/roles.decorator.js'

@Controller('medicos')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('recepcionista')
export class MedicosController {
    constructor(private readonly medicosService: MedicosService) { }

    @Get()
    findAll() {
        return this.medicosService.findAll()
    }

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