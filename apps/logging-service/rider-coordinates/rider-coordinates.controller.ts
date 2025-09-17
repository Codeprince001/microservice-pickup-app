import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCordinatesDto } from './dto/create-cordinates.dto';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {

    constructor(
        private riderCoordinatesService: RiderCoordinatesService
    ) {}


    @Get()
    getRiderCoordinates() {
        // Logic to get rider coordinates
        return [];
    }

    @Post()
    async saveRiderCoordinates(
        @Body() createCoordinatesDto: CreateCordinatesDto
    ) {
        return await this.riderCoordinatesService.saveRiderCoordinates(createCoordinatesDto);
    }
}
