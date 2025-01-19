import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { QuestionService } from './question.service';
import { Question } from '@prisma/client';

@Controller('questions')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Post()
  create(@Body() createQuestionDto: { questionText: string; unitId: string; point?: string }): Promise<Question> {
    const { questionText, unitId, point } = createQuestionDto;
    return this.questionService.create(questionText, unitId, point);
  }

  @Get()
  findAll(): Promise<Question[]> {
    return this.questionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Question | null> {
    return this.questionService.findOne(id);
  }

  @Get('unit/:unitId')
  findByUnit(@Param('unitId') unitId: string): Promise<Question[]> {
    return this.questionService.findByUnit(unitId);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateQuestionDto: Partial<{ questionText: string; unitId: string; point?: string }>): Promise<Question> {
    return this.questionService.update(id, updateQuestionDto);
  }
}


// import { Controller, Get, Post, Body, Param } from '@nestjs/common';
// import { QuestionService } from './question.service';
// import { Question } from '@prisma/client';

// @Controller('questions')
// export class QuestionController {
//   constructor(private readonly questionService: QuestionService) {}

//   @Post()
//   create(@Body() createQuestionDto: { questionText: string; unitId: string }): Promise<Question> {
//     const { questionText, unitId } = createQuestionDto;
//     return this.questionService.create(questionText, unitId);
//   }

//   @Get()
//   findAll(): Promise<Question[]> {
//     return this.questionService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string): Promise<Question | null> {
//     return this.questionService.findOne(id);
//   }

//   @Get('unit/:unitId')
//   findByUnit(@Param('unitId') unitId: string): Promise<Question[]> {
//     return this.questionService.findByUnit(unitId);
//   }
// }