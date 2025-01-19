import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Unit } from '@prisma/client';

@Injectable()
export class UnitService {
  constructor(private readonly prisma: PrismaService) {}

  async create(title: string, topicId: string): Promise<Unit> {
    return this.prisma.unit.create({
      data: {
        title,
        topicId,
        createdAt: new Date(),
        updatedAt: null,
      },
    });
  }

  async findAll(): Promise<Unit[]> {
    return this.prisma.unit.findMany();
  }

  async findOne(id: string): Promise<Unit | null> {
    return this.prisma.unit.findUnique({
      where: { id },
    });
  }

  async update(id: string, title: string, topicId?: string): Promise<Unit> {
    const data: { title?: string; topicId?: string; updatedAt?: Date } = {
      updatedAt: new Date(),
    };
    if (title) data.title = title;
    if (topicId) data.topicId = topicId;

    return this.prisma.unit.update({
      where: { id },
      data,
    });
  }
}
