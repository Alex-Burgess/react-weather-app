import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function Navigation() {
  return (
    <>
      <div className="flex md:flex md:flex-grow flex-row justify-end space-x-1 pr-3">
        <Tabs value="0" aria-label="nav tabs example" role="navigation">
          <Tab value="0" label="Today" href="/" />
          <Tab value="1" label="Tomorrow" href="/tomorrow" />
        </Tabs>
      </div>
    </>
  );
}
