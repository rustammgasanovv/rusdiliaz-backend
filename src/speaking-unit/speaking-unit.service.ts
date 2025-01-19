import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { SpeakingUnit } from '@prisma/client';

@Injectable()
export class SpeakingUnitService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: { level: string; title: string }): Promise<SpeakingUnit> {
    return this.prisma.speakingUnit.create({ data });
  }

  async findAll(): Promise<SpeakingUnit[]> {
    return this.prisma.speakingUnit.findMany();
  }

  async findOne(id: string): Promise<SpeakingUnit | null> {
    return this.prisma.speakingUnit.findUnique({ where: { id } });
  }

  async update(id: string, data: { level?: string; title?: string }): Promise<SpeakingUnit> {
    return this.prisma.speakingUnit.update({ where: { id }, data });
  }
}
