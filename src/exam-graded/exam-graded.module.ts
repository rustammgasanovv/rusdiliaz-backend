import { Module } from '@nestjs/common';
import { ExamGradedController } from './exam-graded.controller';
import { ExamGradedService } from './exam-graded.service';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [ExamGradedController],
  providers: [ExamGradedService, PrismaService],
})
export class ExamGradedModule {}
