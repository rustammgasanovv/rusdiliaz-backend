import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { ExamGradedService } from './exam-graded.service';
import { ExamGraded } from '@prisma/client';

@Controller('exam-graded')
export class ExamGradedController {
  constructor(private readonly examGradedService: ExamGradedService) {}

  @Post()
  create(@Body() createExamDto: { 
    student_id: string; 
    exam_id: string; 
    title: string; 
    points: string; 
    status: boolean; 
  }): Promise<ExamGraded> {
    return this.examGradedService.create(createExamDto);
  }

  @Get()
  findAll(): Promise<ExamGraded[]> {
    return this.examGradedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ExamGraded | null> {
    return this.examGradedService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateExamDto: { 
      title?: string; 
      points?: string; 
      status?: boolean; 
    }
  ): Promise<ExamGraded> {
    return this.examGradedService.update(id, updateExamDto);
  }
}
