import useSWR from 'swr';
import fetcher from './fetcher';
import { Weather } from '../types';

const key = import.meta.env.VITE_WEATHER_KEY;
const baseUrl = import.meta.env.VITE_WEATHER_URL;

interface TodaysWeatherProps {
  location: string;
}

const TodaysWeather: React.FC<TodaysWeatherProps> = ({ location }) => {
  const url = `${baseUrl}/current.json?key=${key}&aqi=no&q=${location}`;
  const { data, error, isLoading } = useSWR<Weather>(url, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const currentCondition = data?.current?.condition?.text;
  return <h2 className="text-2xl font-bold mt-4 mb-8">{currentCondition}</h2>;
};

export default TodaysWeather;
