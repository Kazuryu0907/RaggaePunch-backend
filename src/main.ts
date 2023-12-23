import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  const PORT = Number(process.env.PORT) || 3000;
  app.enableCors({
    origin: '*',
    allowedHeaders: '*',
  });
  await app.listen(PORT, '0.0.0.0');
}
console.log(process.env.DATABASE_URL);
bootstrap();
