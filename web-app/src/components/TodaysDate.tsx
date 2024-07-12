const dayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export default function TodaysDate() {
  const date = new Date();

  const day = date.getDay();
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = date.getFullYear();

  const today = dayNames[day] + ' ' + dd + '/' + mm + '/' + yyyy;

  return <h3 className="text-xl font-bold mt-4 mb-8">{today}</h3>;
}
