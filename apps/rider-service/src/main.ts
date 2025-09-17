import { NestFactory } from '@nestjs/core';
import { RiderServiceModule } from './rider-service.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  // const app = await NestFactory.create(RiderServiceModule);
  const app = await NestFactory.createMicroservice(RiderServiceModule, {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: 4002,
    }
  });

  await app.listen();
}
bootstrap();
