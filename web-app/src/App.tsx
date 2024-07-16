import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';

import { LocationContext } from './lib/locationContext.ts';

export default function App() {
  const [location, setLocation] = useState('London');

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      <div className="h-dvh w-full">
        <Navigation />
        <div className="max-w-xl m-auto m-0 text-center mt-12">
          <Outlet />
        </div>
      </div>
    </LocationContext.Provider>
  );
}
