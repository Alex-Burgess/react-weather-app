import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div id="error-page">
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p>
        Go to the{' '}
        <Link to="/" className="underline">
          home
        </Link>{' '}
        page
      </p>
    </div>
  );
}
