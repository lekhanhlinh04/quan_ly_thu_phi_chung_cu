import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { ApartmentsService } from './apartments.service';
import { CreateApartmentDTO } from './dtos/create-apartment.dto';
import { UpdateApartmentDTO } from './dtos/update-apartment.dto';

@Controller('apartments')
export class ApartmentsController {
  constructor(private readonly apartmentsService: ApartmentsService) {}

  @Post()
  createApartment(@Body() data: CreateApartmentDTO) {
    return this.apartmentsService.createApartment(data);
  }

  @Get()
  getApartments() {
    return this.apartmentsService.getApartments();
  }

  @Get(':id')
  getApartment(@Param('id') id: string) {
    return this.apartmentsService.getApartment(id);
  }

  @Put(':id')
  updateApartment(@Param('id') id: string, @Body() data: UpdateApartmentDTO) {
    return this.apartmentsService.updateApartment(id, data);
  }

  @Delete(':id')
  deleteApartment(@Param('id') id: string) {
    return this.apartmentsService.deleteApartment(id);
  }
}
