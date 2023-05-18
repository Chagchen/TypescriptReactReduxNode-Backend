import { Schema, model } from "mongoose";

export interface Game {
  name: string;
  address: string;
  numberOfPeople: number;
  date: Date | string; 
  time: string;
  fieldNumber: number;
}

const GameSchema = new Schema<Game>({
  name: {type: String, required: true},
  address: {type: String, required: true}, //mongoose needs string to be upper case . 
  numberOfPeople: {type: Number, required: true},
  date: {type: Date, required: true},
  time: {type: String, required: true},
  fieldNumber: {type: Number, required: true}
});

export default model<Game>('Game', GameSchema)
