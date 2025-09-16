import { Module } from '@nestjs/common';
import { LoggingServiceController } from './logging-service.controller';
import { LoggingServiceService } from './logging-service.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RiderCoordinatesController } from '../rider-coordinates/rider-coordinates.controller';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/27017/logs_db')],
  controllers: [LoggingServiceController,RiderCoordinatesController],
  providers: [LoggingServiceService],
})
export class LoggingServiceModule {}
