import React, { useState } from 'react';
import './App.css'
import { TravelComparisonForm, TravelComparisonFormData } from './components/TravelComparisonForm'
import { TravelResults, TravelResult } from './interfaces/TravelResults';

function App() {

  const [travelResults, setTravelResults] = useState<TravelResults | undefined>(undefined);

  const calculateResults = (data: TravelComparisonFormData) => {
    console.log(data);
    let fuelUsage: number = 0;
    switch (data.car){
      case 'carA':
        fuelUsage = 0.03
        break
      case 'carB':
        fuelUsage = 0.035
        break
      case 'carC':
        fuelUsage = 0.04
        break
    }
    
    const results = {
      speed1: calculateResult(Number(data.distance), Number(data.speed1),  fuelUsage),
      speed2: calculateResult(Number(data.distance), Number(data.speed2),  fuelUsage)
    }

    console.log(results)
    setTravelResults(results);
  }
  /**
   * calculates time and fuel used in travel
   * @param distance distance in kilometres
   * @param speed speed in kilometres per hour (km/h)
   * @param fuelUsage baseline fuel usage in litres per kilometre (l/km)
   * @return results as TravelResult
   */
  const calculateResult = (distance: number, speed: number, fuelUsage: number): TravelResult => {
    const growthRate = 1.009

    //convert to metres and m/s before calculation
    const time =  (distance * 1000) / (speed / 3.6)
    const fuelSpent = distance * fuelUsage * Math.pow(growthRate, speed - 1)
    const result: TravelResult = {
      time: time,
      fuelSpent: fuelSpent
    }

    return result
  }

  return (
    <div className="App">
      <TravelComparisonForm
        onSubmit={calculateResults}
      />
    </div>
  );
}

export default App;
