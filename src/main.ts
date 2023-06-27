import { NestFactory } from '@nestjs/core';
import { CatCafeModule } from './catcafe/catcafe.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(CatCafeModule);
  app.useGlobalPipes(
    new ValidationPipe()
  );
  await app.listen(3000);
}
bootstrap();
