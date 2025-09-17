import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RiderCoordinates } from './schemas/rider-coordinates.schema';
import { Model } from 'mongoose';

@Injectable()
export class RiderCoordinatesService {

    constructor(
        @InjectModel(RiderCoordinates.name)
        private readonly riderCoordinatesModel: Model<RiderCoordinates>
    ) {}

    saveRiderCoordinates(createCoordinatesDto: any) {
        // Logic to save rider coordinates
        return this.riderCoordinatesModel.create(createCoordinatesDto);
    }
}