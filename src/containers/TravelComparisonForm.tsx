import { useForm } from 'react-hook-form'

interface TravelComparisonFormProps {
  onSubmit: (data: FormData) => void;
}

interface FormData {
  car: string;
  distance: string;
  speed1: string;
  speed2: string;
}

export const TravelComparisonForm = ({ onSubmit }: TravelComparisonFormProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='car'>Auto</label>
      <select id='car' {...register('car')}>
        <option value='carA'>Auto A (3.0l / 100km)</option>
        <option value='carB'>Auto B (3.5l / 100km)</option>
        <option value='carC'>Auto C (4.0l / 100km)</option>
      </select>

      <label htmlFor='distance'>Matka (m)</label>
      <input id='distance' {...register('distance')} />

      <label htmlFor='speed1'>Nopeus 1 (km/h)</label>
      <input id='speed1' {...register('speed1')} />
      <label htmlFor='speed2'>Nopeus 2 (km/h)</label>
      <input id='speed2' {...register('speed2')} />

      <input type='submit' value='Laske'/>
    </form>
  )
  
}