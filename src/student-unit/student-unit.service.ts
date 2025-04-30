import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { StudentUnit } from '@prisma/client';

@Injectable()
export class StudentUnitService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: { userId: string; unitId: string; title: string }): Promise<StudentUnit> {
    return this.prisma.studentUnit.create({ data });
  }

  async findAll(): Promise<StudentUnit[]> {
    return this.prisma.studentUnit.findMany();
  }

  async findOne(id: string): Promise<StudentUnit | null> {
    return this.prisma.studentUnit.findUnique({ where: { id } });
  }

  async update(id: string, data: { userId?: string; unitId?: string; title?: string }): Promise<StudentUnit> {
    return this.prisma.studentUnit.update({ where: { id }, data });
  }

  async remove(id: string): Promise<StudentUnit> {
    return this.prisma.studentUnit.delete({ where: { id } });
  }
}
