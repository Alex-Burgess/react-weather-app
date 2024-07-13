import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function Navigation() {
  return (
    <>
      <Tabs value={'Home'} aria-label="nav tabs example" role="navigation">
        <Tab label="Today" href="/" />
        <Tab label="Tomorrow" href="/tomorrow" />
      </Tabs>
    </>
  );
}
