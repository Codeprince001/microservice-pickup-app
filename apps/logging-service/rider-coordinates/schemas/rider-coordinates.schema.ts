import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument} from 'mongoose';

export type RiderCoordinatesDocument = HydratedDocument<RiderCoordinates>;

@Schema({ collection: 'rider_coordinates' })
export class RiderCoordinates {
    @Prop({required: true})
    riderId: string;

    @Prop({required: true})
    latitude: number;

    @Prop({required: true})
    longitude: number
}

export const RiderCoordinatesSchema = SchemaFactory.createForClass(RiderCoordinates);