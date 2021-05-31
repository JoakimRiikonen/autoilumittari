export interface TravelResults {
  speed1: TravelResult;
  speed2: TravelResult;
}

export interface TravelResult {
  //time in seconds
  time: number;
  //fuel spent in litres
  fuelSpent: number;
}