import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateCordinatesDto {
    @IsNumber()
    @IsNotEmpty()
    latitude: number;

    @IsNumber()
    @IsNotEmpty()
    longitude: number;

    @IsNotEmpty()
    riderId: string;
}