import { Injectable } from '@nestjs/common';

@Injectable()
export class RiderServiceService {
  getRiderById(params: string) {
    // Logic to get rider by ID
    return `This action returns a #${params} rider`;
  }
}
