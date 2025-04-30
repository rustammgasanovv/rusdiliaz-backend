import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { StudentUnitService } from './student-unit.service';
import { StudentUnit } from '@prisma/client';

@Controller('student-units')
export class StudentUnitController {
  constructor(private readonly studentUnitService: StudentUnitService) {}

  @Post()
  create(
    @Body() createStudentUnitDto: { userId: string; unitId: string; title: string },
  ): Promise<StudentUnit> {
    return this.studentUnitService.create(createStudentUnitDto);
  }

  @Get()
  findAll(): Promise<StudentUnit[]> {
    return this.studentUnitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<StudentUnit | null> {
    return this.studentUnitService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateStudentUnitDto: { userId?: string; unitId?: string; title?: string },
  ): Promise<StudentUnit> {
    return this.studentUnitService.update(id, updateStudentUnitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<StudentUnit> {
    return this.studentUnitService.remove(id);
  }
}