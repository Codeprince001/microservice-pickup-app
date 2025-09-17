import { Controller, Get, Param } from '@nestjs/common';
import { RiderServiceService } from './rider-service.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class RiderServiceController {
  constructor(private readonly riderServiceService: RiderServiceService) {}

  // @Get(":id")
  @MessagePattern({ cmd: 'get_rider_by_id' })
  getRiderById(
    data: { id: string },
  ){
    return this.riderServiceService.getRiderById(data.id);
}
}