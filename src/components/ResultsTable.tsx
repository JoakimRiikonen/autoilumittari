import { TravelResults } from "../interfaces/TravelResults"
import './ResultsTable.css'

interface ResultsTableProps {
  results: TravelResults | undefined
}

export const ResultsTable = ({ results }: ResultsTableProps) => {

  /**
   * Formats time in seconds to a string as hours, minutes, seconds
   * Seconds are rounded to nearest whole second
   * @param seconds time in seconds
   * @return time as string in format {hours}h {minutes}m {seconds}s
   */
  const formatTime = (seconds: number): string => {
    const timeSeconds = Math.round(seconds % 60)
    const timeMinutes = Math.floor((seconds / 60) % 60)
    const timeHours = Math.floor(seconds / (60 * 60))
    
    return `${timeHours}h ${timeMinutes}m ${timeSeconds}s`
  }


  if(results === undefined){
    return (
      <div></div>
    )
  }

  return (
    <table>
      <caption>Matka-aika ja bensan kulutus autolla {results.car}</caption>
      <tr>
        <th></th>
        <th>{results.speed1.speed} km/h</th>
        <th>{results.speed2.speed} km/h</th>
        <th>Ero</th>
      </tr>
      <tr>
        <th>Aika</th>
        <td>{formatTime(results.speed1.time)}</td>
        <td>{formatTime(results.speed2.time)}</td>
        <td>{formatTime(results.speed2.time - results.speed1.time)}</td>
      </tr>
      <tr>
        <th>Kulutus</th>
        <td>{results.speed1.fuelSpent.toFixed(2)} l</td>
        <td>{results.speed2.fuelSpent.toFixed(2)} l</td>
        <td>{(results.speed2.fuelSpent-results.speed1.fuelSpent).toFixed(2)} l</td>
      </tr>
    </table>
  )
}