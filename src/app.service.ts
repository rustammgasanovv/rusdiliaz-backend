import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  // Универсальный метод для проверки модели и вызова Prisma методов
  private getModelMethod(modelName: string, method: string) {
    const model = this.prisma[modelName];
    if (!model || typeof model[method] !== 'function') {
      throw new Error(`Model "${modelName}" does not exist or does not support method "${method}".`);
    }
    return model[method].bind(model);
  }

  // Универсальный метод для выполнения запросов
  async execute(modelName: string, method: string, args?: any) {
    try {
      const modelMethod = this.getModelMethod(modelName, method);
      return await modelMethod(args);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  // Для совместимости с текущими методами
  async getAll(modelName: string) {
    return this.execute(modelName, 'findMany');
  }

  async getById(modelName: string, id: string) {
    return this.execute(modelName, 'findUnique', { where: { id } });
  }
}



// import { Injectable } from '@nestjs/common';
// import { PrismaService } from '../prisma/prisma.service';

// @Injectable()
// export class AppService {
//   constructor(private readonly prisma: PrismaService) {}

//   async getAll(modelName: string) {
//     return this.prisma[modelName].findMany();
//   }

//   async getById(modelName: string, id: string) {
//     return this.prisma[modelName].findUnique({
//       where: { id },
//     });
//   }
// }
