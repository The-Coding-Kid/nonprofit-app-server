// This file contains all the CRUD routes that call a function from the PlacesService file
// If you want to add a new route, you can do it here
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PlacesService } from './places.service';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Post('create')
  create(@Body() createPlaceDto: CreatePlaceDto) {
    return this.placesService.create(createPlaceDto);
  }

  @Get()
  findAll() {
    return this.placesService.findAll();
  }

  @Post('find')
  findOne(@Body() body: any) {
    return this.placesService.findOne(body.id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePlaceDto: UpdatePlaceDto) {
  //   return this.placesService.update(+id, updatePlaceDto);
  // }

  @Post('delete')
  remove(@Body() body: any) {
    return this.placesService.remove(body.id);
  }

  @Get('test')
  test() {
    return 'Hello World';
  }
}
