import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCordinatesDto } from './dto/create-cordinates.dto';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {

    constructor(
        private riderCoordinatesService: RiderCoordinatesService
    ) {}


    @Get(":id")
    async getRiderCoordinates(
        @Param()
        params: any
    ) {
        // Logic to get rider coordinates
        console.log(params.id);
        return await this.riderCoordinatesService.getRiderCoordinates(params.id);
    }

    @Post()
    async saveRiderCoordinates(
        @Body() createCoordinatesDto: CreateCordinatesDto
    ) {
        return await this.riderCoordinatesService.saveRiderCoordinates(createCoordinatesDto);
    }
}
