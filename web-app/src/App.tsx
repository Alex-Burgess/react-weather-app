import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';

export default function App() {
  return (
    <div className="h-dvh w-full">
      <Navigation />
      <div className="max-w-xl m-auto m-0 text-center mt-12">
        <Outlet />
      </div>
    </div>
  );
}
