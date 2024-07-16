type Condition = {
  text: string;
  icon: string;
  code: number;
};

type Current = {
  condition: Condition;
};

type Days = {
  day: Day;
};

type Day = {
  condition: Condition;
};

type Forecast = {
  forecastday: Days[];
};

export type Weather = {
  current: Current;
  forecast: Forecast;
};
