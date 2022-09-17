import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PlaceDocument = Place & Document;

@Schema()
export class Place {
  @Prop()
  name: string;

  @Prop()
  latitude: number;

  @Prop()
  longitude: number;

  @Prop()
  description: string;

  @Prop()
  email: string;

  @Prop()
  website: string;

  @Prop()
  phone: string;

  //TODO: Add more fields later when required over here
}

export const PlaceSchema = SchemaFactory.createForClass(Place);
