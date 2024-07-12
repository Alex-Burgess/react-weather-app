// import { useState } from 'react';
import './App.css';
import TodaysDate from './components/TodaysDate.tsx';
import SelectLocation from './components/SelectLocation.tsx';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-4xl font-bold">Today's Weather</h1>
      <TodaysDate />
      <SelectLocation />

      {/* <div>
        
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a> */}
    </>
  );
}

export default App;
