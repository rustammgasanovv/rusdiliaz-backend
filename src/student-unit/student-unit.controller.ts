import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { StudentUnitService } from './student-unit.service';
import { StudentUnit } from '@prisma/client';

@Controller('student-units')
export class StudentUnitController {
  constructor(private readonly studentUnitService: StudentUnitService) {}

  @Post()
  create(
    @Body() createStudentUnitDto: { unitId: string; studentId: string },
  ): Promise<StudentUnit> {
    const { unitId, studentId } = createStudentUnitDto;
    return this.studentUnitService.create(unitId, studentId);
  }

  @Get()
  findAll(): Promise<StudentUnit[]> {
    return this.studentUnitService.findAll();
  }

  @Get('unit/:unitId')
  findByUnit(@Param('unitId') unitId: string): Promise<StudentUnit[]> {
    return this.studentUnitService.findByUnit(unitId);
  }

  @Get('student/:studentId')
  findByStudent(@Param('studentId') studentId: string): Promise<StudentUnit[]> {
    return this.studentUnitService.findByStudent(studentId);
  }
}
