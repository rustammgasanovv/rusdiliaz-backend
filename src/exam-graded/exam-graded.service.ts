import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ExamGraded } from '@prisma/client';

@Injectable()
export class ExamGradedService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: { 
    student_id: string; 
    exam_id: string; 
    title: string; 
    points: string; 
    status: boolean; 
  }): Promise<ExamGraded> {
    return this.prisma.examGraded.create({
      data: {
        ...data,
        createdAt: new Date(),
        updatedAt: null,
      },
    });
  }

  async findAll(): Promise<ExamGraded[]> {
    return this.prisma.examGraded.findMany();
  }

  async findOne(id: string): Promise<ExamGraded | null> {
    return this.prisma.examGraded.findUnique({
      where: { id },
    });
  }

  async update(id: string, data: { 
    title?: string; 
    points?: string; 
    status?: boolean; 
  }): Promise<ExamGraded> {
    return this.prisma.examGraded.update({
      where: { id },
      data: {
        ...data,
        updatedAt: new Date(),
      },
    });
  }
}
