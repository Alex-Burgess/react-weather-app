import TodaysDate from '../components/DayAndDate.tsx';
// import SelectLocation from '../components/SelectLocation.tsx';
import WeatherForecast from '../components/WeatherForecast.tsx';

export default function Tomorrow() {
  return (
    <>
      <h1 className="text-4xl font-bold">Tomorrow's Weather</h1>
      <TodaysDate dayOffset={1} />
      {/* <SelectLocation /> */}
      <WeatherForecast location="London" offsetDays={1} />
    </>
  );
}
