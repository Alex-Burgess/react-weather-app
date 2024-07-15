import TodaysDate from '../components/DayAndDate.tsx';
// import SelectLocation from '../components/SelectLocation.tsx';
// import TodaysWeather from '../components/TodaysWeather.tsx';

export default function Tomorrow() {
  return (
    <>
      <h1 className="text-4xl font-bold">Tomorrow's Weather</h1>
      <TodaysDate dayOffset={1} />
      {/* <SelectLocation />
      <TodaysWeather location="London" /> */}
    </>
  );
}
