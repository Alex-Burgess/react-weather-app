import TodaysDate from '../components/DayAndDate';
import SelectLocation from '../components/SelectLocation';
import WeatherForecast from '../components/WeatherForecast';

export default function Today() {
  return (
    <>
      <h1 className="text-4xl font-bold">Today's Weather</h1>
      <TodaysDate dayOffset={0} />
      <SelectLocation />
      <WeatherForecast offsetDays={0} />
    </>
  );
}
