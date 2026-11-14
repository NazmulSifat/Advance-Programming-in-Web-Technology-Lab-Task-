import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    //instrument: ObserveInstrument,
  });


  app.useGlobalPipes (
    new ValidationPipe({
      whitelist: true, // DTO te nai emon field remove kore
      forbidNonWhitelisted: true, // unknown field dile error
      transform: true, // string -> number auto convert
    }),
  );
  
  await app.listen(process.env.PORT ?? 3001);
}
await bootstrap();
