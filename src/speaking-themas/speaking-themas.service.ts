import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { SpeakingThemas } from '@prisma/client';

@Injectable()
export class SpeakingThemasService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: { 
    level: string; 
    theme: string; 
  }): Promise<SpeakingThemas> {
    return this.prisma.speakingThemas.create({
      data,
    });
  }

  async findAll(): Promise<SpeakingThemas[]> {
    return this.prisma.speakingThemas.findMany();
  }

  async findOne(id: string): Promise<SpeakingThemas | null> {
    return this.prisma.speakingThemas.findUnique({
      where: { id },
    });
  }

  async update(id: string, data: { 
    level?: string; 
    theme?: string; 
  }): Promise<SpeakingThemas> {
    return this.prisma.speakingThemas.update({
      where: { id },
      data,
    });
  }
}
