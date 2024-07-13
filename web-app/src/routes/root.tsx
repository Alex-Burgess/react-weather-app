import TodaysDate from '../components/TodaysDate.tsx';
import SelectLocation from '../components/SelectLocation.tsx';
import TodaysWeather from '../components/TodaysWeather.tsx';

export default function Root() {
  return (
    <>
      <h1 className="text-4xl font-bold">Today's Weather</h1>
      <TodaysDate />
      <SelectLocation />
      <TodaysWeather location="London" />
    </>
  );
}
