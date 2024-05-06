import React from 'react';
import type { DTO } from 'shared';

const BACKEND_ENDPOINT = import.meta.env.VITE_BACKEND_ENDPOINT;
console.log('BACKEND_ENDPOINT:', BACKEND_ENDPOINT);

async function fetchBackendMessage() {
  const response = await fetch(`${BACKEND_ENDPOINT}/message`);
  if (!response.ok)
    throw new Error(
      `Something went wrong fetching the message with status code ${response.status}.`
    );
  const data = await response.json();

  return data as DTO;
}

function App() {
  const [data, setData] = React.useState<DTO | null>(null);
  const formatted = data ? new Date(data.date * 1000).toLocaleString() : '';

  React.useEffect(() => {
    fetchBackendMessage().then(setData);
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
