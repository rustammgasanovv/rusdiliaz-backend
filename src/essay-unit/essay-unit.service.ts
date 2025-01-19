import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { EssayUnit } from '@prisma/client';

@Injectable()
export class EssayUnitService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: { level: string; title: string }): Promise<EssayUnit> {
    return this.prisma.essayUnit.create({ data });
  }

  async findAll(): Promise<EssayUnit[]> {
    return this.prisma.essayUnit.findMany();
  }

  async findOne(id: string): Promise<EssayUnit | null> {
    return this.prisma.essayUnit.findUnique({ where: { id } });
  }

  async update(id: string, data: { level?: string; title?: string }): Promise<EssayUnit> {
    return this.prisma.essayUnit.update({ where: { id }, data });
  }
}
