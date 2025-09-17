import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RiderCoordinates } from './schemas/rider-coordinates.schema';
import { Model } from 'mongoose';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RiderCoordinatesService {

    constructor(
        @InjectModel(RiderCoordinates.name)
        private readonly riderCoordinatesModel: Model<RiderCoordinates>,
        @Inject('RIDER_SERVICE') private readonly riderClient: ClientProxy,
    ) {}

    async getRiderCoordinates(riderId: string) {
        const coordinates = await this.riderCoordinatesModel.find({ riderId }).exec();

        const pattern = { cmd: 'get_rider_by_id' };
        const rider = await firstValueFrom(
            this.riderClient.send(pattern, { id: riderId })
        );

        return {
            coordinates,
            rider,
        };
        }


    saveRiderCoordinates(createCoordinatesDto: any) {
        // Logic to save rider coordinates
        return this.riderCoordinatesModel.create(createCoordinatesDto);
    }
}