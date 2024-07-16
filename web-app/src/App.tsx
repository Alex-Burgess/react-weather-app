import { Routes, Route, Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import Today from './routes/Today';
import Tomorrow from './routes/Tomorrow';
import ErrorPage from './routes/Error';

export default function App() {
  return (
    <div className="h-dvh w-full">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Today />} />
          <Route path="tomorrow" element={<Tomorrow />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <Navigation />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <div className="max-w-xl m-auto m-0 text-center mt-12">
        <Outlet />
      </div>
    </div>
  );
}
