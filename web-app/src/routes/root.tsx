import TodaysDate from '../components/TodaysDate.tsx';
import SelectLocation from '../components/SelectLocation.tsx';
import TodaysWeather from '../components/TodaysWeather.tsx';
import Navigation from '../components/Navigation.tsx';

export default function Root() {
  return (
    <>
      <Navigation />
      <h1 className="text-4xl font-bold">Today's Weather</h1>
      <TodaysDate />
      <SelectLocation />
      <TodaysWeather location="London" />
    </>
  );
}
