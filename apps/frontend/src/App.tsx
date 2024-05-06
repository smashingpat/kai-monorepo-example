import React from 'react';
import type { DTO } from 'shared';

const BACKEND_ENDPOINT = import.meta.env.VITE_BACKEND_ENDPOINT;
console.log('BACKEND_ENDPOINT:', BACKEND_ENDPOINT);

async function fetchBackend() {
  const response = await fetch(BACKEND_ENDPOINT);
  const data = await response.json();

  return data as DTO;
}

function App() {
  const [data, setData] = React.useState<DTO | null>(null);
  const formatted = data ? new Date(data.date * 1000).toLocaleString() : '';

  React.useEffect(() => {
    fetchBackend().then(setData);
  }, []);

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>{data.message}</h1>
      <p>Created at {formatted}</p>
    </div>
  );
}

export default App;
