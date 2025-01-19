import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Question } from '@prisma/client';

@Injectable()
export class QuestionService {
  constructor(private readonly prisma: PrismaService) {}

  async create(questionText: string, unitId: string, point?: string): Promise<Question> {
    return this.prisma.question.create({
      data: {
        questionText,
        unitId,
        point,
        createdAt: new Date(),
        updatedAt: null,
      },
    });
  }

  async findAll(): Promise<Question[]> {
    return this.prisma.question.findMany();
  }

  async findOne(id: string): Promise<Question | null> {
    return this.prisma.question.findUnique({
      where: { id },
    });
  }

  async findByUnit(unitId: string): Promise<Question[]> {
    return this.prisma.question.findMany({
      where: { unitId },
    });
  }

  async update(id: string, data: Partial<{ questionText: string; unitId: string; point?: string }>): Promise<Question> {
    return this.prisma.question.update({
      where: { id },
      data: {
        ...data,
        updatedAt: new Date(),
      },
    });
  }
}


// import { Injectable } from '@nestjs/common';
// import { PrismaService } from '../../prisma/prisma.service';
// import { Question } from '@prisma/client';

// @Injectable()
// export class QuestionService {
//   constructor(private readonly prisma: PrismaService) {}

//   async create(questionText: string, unitId: string): Promise<Question> {
//     return this.prisma.question.create({
//       data: {
//         questionText,
//         unitId,
//         createdAt: new Date(),
//         updatedAt: null,
//       },
//     });
//   }

//   async findAll(): Promise<Question[]> {
//     return this.prisma.question.findMany();
//   }

//   async findOne(id: string): Promise<Question | null> {
//     return this.prisma.question.findUnique({
//       where: { id },
//     });
//   }

//   async findByUnit(unitId: string): Promise<Question[]> {
//     return this.prisma.question.findMany({
//       where: { unitId },
//     });
//   }

//   async update(id: string, data: Partial<Question>): Promise<Question> {
//     return this.prisma.question.update({
//       where: { id },
//       data: {
//         ...data,
//         updatedAt: new Date(),
//       },
//     });
//   }
// }
