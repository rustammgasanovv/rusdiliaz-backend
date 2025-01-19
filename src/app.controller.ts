import { Controller, Get, Param, HttpException, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('data')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':modelName')
  async getAll(@Param('modelName') modelName: string) {
    try {
      return await this.appService.getAll(modelName);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':modelName/:id')
  async getById(@Param('modelName') modelName: string, @Param('id') id: string) {
    try {
      return await this.appService.getById(modelName, id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  // Дополнительные методы, если нужно
  @Get(':modelName/custom/:method')
  async customMethod(
    @Param('modelName') modelName: string,
    @Param('method') method: string,
  ) {
    try {
      return await this.appService.execute(modelName, method);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}



// import { Controller, Get, Param } from '@nestjs/common';
// import { AppService } from './app.service';

// @Controller('data')
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get(':modelName')
//   async getAll(@Param('modelName') modelName: string) {
//     return this.appService.getAll(modelName);
//   }

//   @Get(':modelName/:id')
//   async getById(@Param('modelName') modelName: string, @Param('id') id: string) {
//     return this.appService.getById(modelName, id);
//   }
// }
