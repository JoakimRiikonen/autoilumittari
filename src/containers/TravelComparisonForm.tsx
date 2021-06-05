import { useForm } from 'react-hook-form'
import './TravelComparisonForm.css'

interface TravelComparisonFormProps {
  onSubmit: (data: TravelComparisonFormData) => void;
}

export interface TravelComparisonFormData {
  car: 'carA' | 'carB' | 'carC';
  distance: string;
  speed1: string;
  speed2: string;
}

export const TravelComparisonForm = ({ onSubmit }: TravelComparisonFormProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<TravelComparisonFormData>();

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='full'>
        <label htmlFor='car'>Auto</label>
        <select id='car' {...register('car')}>
          <option value='carA'>Auto A (3.0l / 100km)</option>
          <option value='carB'>Auto B (3.5l / 100km)</option>
          <option value='carC'>Auto C (4.0l / 100km)</option>
        </select>
      </div>

      <div className='full'>
        <label htmlFor='distance'>Matka (km)</label>
        <input id='distance' {...register('distance')} />
      </div>

        <div className='half'>
          <label htmlFor='speed1'>Nopeus 1 (km/h)</label>
          <input id='speed1' {...register('speed1')} />
        </div>
        <div className='half'>
          <label htmlFor='speed2'>Nopeus 2 (km/h)</label>
          <input id='speed2' {...register('speed2')} />
        </div>
      <div className='full'>
        <input type='submit' value='Laske'/>
      </div>
    </form>
  )
  
}