import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Topic } from '@prisma/client';

@Injectable()
export class TopicService {
  constructor(private readonly prisma: PrismaService) {}

  async create(title: string): Promise<Topic> {
    return this.prisma.topic.create({
      data: {
        title,
        createdAt: new Date(), 
        updatedAt: null,      
      },
    });
  }

  async findAll(): Promise<Topic[]> {
    return this.prisma.topic.findMany();
  }

  async findOne(id: string): Promise<Topic | null> {
    return this.prisma.topic.findUnique({
      where: { id },
    });
  }

  async update(id: string, title: string): Promise<Topic> {
    return this.prisma.topic.update({
      where: { id },
      data: {
        title,
        updatedAt: new Date(), 
      },
    });
  }
}
