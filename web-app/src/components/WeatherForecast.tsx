import useSWR from 'swr';
import fetcher from '../lib/fetcher';
import { Weather } from '../lib/types';

const key = import.meta.env.VITE_WEATHER_KEY;
const baseUrl = import.meta.env.VITE_WEATHER_URL;

interface WeatherForecastProps {
  location: string;
  offsetDays: number;
}

const WeatherForecast: React.FC<WeatherForecastProps> = ({
  location,
  offsetDays,
}) => {
  const url = `${baseUrl}/forecast.json?key=${key}&aqi=no&q=${location}&alerts=no&days=${offsetDays + 1}`;
  const { data, error, isLoading } = useSWR<Weather>(url, fetcher);

  if (error) return <div>failed to load </div>;
  if (isLoading) return <div>loading...</div>;

  const currentCondition =
    data?.forecast?.forecastday[offsetDays]?.day?.condition?.text;
  return <h2 className="text-2xl font-bold mt-4 mb-8">{currentCondition}</h2>;
};

export default WeatherForecast;
