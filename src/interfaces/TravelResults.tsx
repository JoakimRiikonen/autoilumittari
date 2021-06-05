export interface TravelResults {
  car: string;
  speed1: TravelResult;
  speed2: TravelResult;
}

export interface TravelResult {
  //speed in km/h
  speed: number;
  //time in seconds
  time: number;
  //fuel spent in litres
  fuelSpent: number;
}