import { Module } from '@nestjs/common';
import { RiderCoordinatesController } from './rider-coordinates.controller';
import { RiderCoordinatesService } from './rider-coordinates.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RiderCoordinates, RiderCoordinatesSchema } from './schemas/rider-coordinates.schema';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RiderCoordinates.name, schema: RiderCoordinatesSchema },
    ]),
      ClientsModule.register([
        {
          name: 'RIDER_SERVICE',
          transport: Transport.TCP,
          options: {
            host: '0.0.0.0',
            port: 4002,
          },
        },
      ]),
  ],
  controllers: [RiderCoordinatesController],
  providers: [RiderCoordinatesService],
  exports: [RiderCoordinatesService], // export if needed elsewhere
})
export class RiderCoordinatesModule {}
