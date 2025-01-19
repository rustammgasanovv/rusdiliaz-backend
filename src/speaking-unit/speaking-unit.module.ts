import { Module } from '@nestjs/common';
import { SpeakingUnitController } from './speaking-unit.controller';
import { SpeakingUnitService } from './speaking-unit.service';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [SpeakingUnitController],
  providers: [SpeakingUnitService, PrismaService],
})
export class SpeakingUnitModule {}
