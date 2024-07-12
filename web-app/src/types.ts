type Condition = {
  text: string;
  icon: string;
  code: number;
};

type Current = {
  condition: Condition;
};

export type Weather = {
  current: Current;
};
