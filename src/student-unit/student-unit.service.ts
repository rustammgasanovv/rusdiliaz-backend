import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { StudentUnit } from '@prisma/client';

@Injectable()
export class StudentUnitService {
  constructor(private readonly prisma: PrismaService) {}

  async create(unitId: string, studentId: string): Promise<StudentUnit> {
    return this.prisma.studentUnit.create({
      data: {
        unitId,
        studentId,
      },
    });
  }

  async findAll(): Promise<StudentUnit[]> {
    return this.prisma.studentUnit.findMany();
  }

  async findByUnit(unitId: string): Promise<StudentUnit[]> {
    return this.prisma.studentUnit.findMany({
      where: { unitId },
    });
  }

  async findByStudent(studentId: string): Promise<StudentUnit[]> {
    return this.prisma.studentUnit.findMany({
      where: { studentId },
    });
  }
}
