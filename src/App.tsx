import React, { useState } from 'react';
import './App.css'
import { ResultsTable } from './components/ResultsTable';
import { TravelComparisonForm, TravelComparisonFormData } from './components/TravelComparisonForm'
import car from './assets/car.svg'
import { TravelResults, TravelResult } from './interfaces/TravelResults';

function App() {

  const [travelResults, setTravelResults] = useState<TravelResults | undefined>(undefined);

  const calculateResults = (data: TravelComparisonFormData) => {
    console.log(data);
    let fuelUsage: number = 0;
    let car: string
    switch (data.car){
      case 'carA':
        car = 'A'
        fuelUsage = 0.03
        break
      case 'carB':
        car = 'B'
        fuelUsage = 0.035
        break
      case 'carC':
        car= 'C'
        fuelUsage = 0.04
        break
    }
    
    const results = {
      car: car,
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
      speed: speed,
      time: time,
      fuelSpent: fuelSpent
    }

    return result
  }

  return (
    <div className="app">
      <img src={car} className="carImage" />
      <h2>Autoilumittari</h2>
      <TravelComparisonForm
        onSubmit={calculateResults}
      />
      <ResultsTable
        results={travelResults}
      />
    </div>
  );
}

export default App;
