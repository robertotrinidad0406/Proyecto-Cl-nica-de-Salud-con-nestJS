import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service.js'

@Injectable()
export class PacientesService {
    constructor(private readonly prisma: PrismaService) { }

    findAll() {
        return this.prisma.pacientes.findMany()
    }
    findOne(id: number) {
        return this.prisma.pacientes.findUnique
            ({ where: { id } })
    }
    create(data: any) {
        return this.prisma.pacientes.create({ data })
    }
    update(id: number, data: any) {
        return this.prisma.pacientes.update({
            where: { id }, data
        })
    }
    remove(id: number) {
        return this.prisma.pacientes.delete({
            where: { id },
        });
    }
}