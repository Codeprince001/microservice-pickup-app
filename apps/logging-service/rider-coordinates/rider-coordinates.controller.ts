import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCordinatesDto } from './dto/create-cordinates.dto';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
    @Get()
    getRiderCoordinates() {
        // Logic to get rider coordinates
        return [];
    }

    @Post()
    saveRiderCoordinates(
        @Body() createCoordinatesDto: CreateCordinatesDto
    ) {
        return createCoordinatesDto
    }
}
