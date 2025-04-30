import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*', // Указываем точный источник
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  });
  

  await app.listen(3000);
}
bootstrap();
