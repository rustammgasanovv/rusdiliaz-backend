import { Module } from '@nestjs/common';
import { StudentUnitController } from './student-unit.controller';
import { StudentUnitService } from './student-unit.service';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [StudentUnitController],
  providers: [StudentUnitService, PrismaService],
})
export class StudentUnitModule {}
