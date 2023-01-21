// This file contains all the functions for the CRUD operations
// If you want to add a new crud function, you can do that here
import { Global, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { Place, PlaceDocument } from './places.schema';

@Global()
@Injectable()
export class PlacesService {
  constructor(
    @InjectModel(Place.name) private placeModel: Model<PlaceDocument>,
  ) {}

  create(createPlaceDto: CreatePlaceDto): Promise<Place> {
    const newPlace = new this.placeModel(createPlaceDto);
    return newPlace.save();
  }

  findAll(): Promise<Place[]> {
    const places = this.placeModel.find().exec();
    return places;
  }

  findOne(id: number): Promise<Place> {
    const place = this.placeModel.findById(id).exec();
    return place;
  }

  // update(id: number, updatePlaceDto: UpdatePlaceDto) {
  //
  // }

  remove(id: number): Promise<Place> {
    const place = this.placeModel.findByIdAndDelete(id).exec();
    return place;
  }
}
