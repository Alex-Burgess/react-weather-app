import { useLocation, Link } from 'react-router-dom';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function Navigation() {
  const { pathname } = useLocation();

  return (
    <>
      <div className="flex md:flex md:flex-grow flex-row justify-end space-x-1 pr-3">
        <Tabs aria-label="nav tabs example" role="navigation" value={pathname}>
          <Tab label="Today" component={Link} to="/" value="/" />
          <Tab
            label="Tomorrow"
            component={Link}
            to="/tomorrow"
            value="/tomorrow"
          />
        </Tabs>
      </div>
    </>
  );
}
