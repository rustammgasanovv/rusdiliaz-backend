import { Module } from '@nestjs/common';
import { UnitController } from './unit.controller';
import { UnitService } from './unit.service';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [UnitController],
  providers: [UnitService, PrismaService],
})
export class UnitModule {}