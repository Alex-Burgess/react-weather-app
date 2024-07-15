import TodaysDate from '../components/DayAndDate';
import SelectLocation from '../components/SelectLocation';
import TodaysWeather from '../components/TodaysWeather';

export default function Today() {
  return (
    <>
      <h1 className="text-4xl font-bold">Today's Weather</h1>
      <TodaysDate dayOffset={0} />
      <SelectLocation />
      <TodaysWeather location="London" />
    </>
  );
}
