const dayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

interface DayAndDateProps {
  dayOffset: number;
}

const DayAndDate: React.FC<DayAndDateProps> = ({ dayOffset }) => {
  const today = new Date();

  const requiredDate = new Date();
  requiredDate.setDate(today.getDate() + dayOffset);

  const day = requiredDate.getDay();
  const dd = String(requiredDate.getDate()).padStart(2, '0');
  const mm = String(requiredDate.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = requiredDate.getFullYear();

  const returnedDate = dayNames[day] + ' ' + dd + '/' + mm + '/' + yyyy;

  return <h3 className="text-xl font-bold mt-4 mb-8">{returnedDate}</h3>;
};

export default DayAndDate;
