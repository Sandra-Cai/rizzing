import React, { useEffect, useState } from 'react';
import './App.css';

interface Tip {
  id: number;
  title: string;
  content: string;
}

function App() {
  const [tips, setTips] = useState([] as Tip[]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/api/tips')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch tips');
        return res.json();
      })
      .then((data) => {
        setTips(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>Rizzing: Flirting Tips & Advice</h1>
      {loading && <p>Loading tips...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {tips.map((tip) => (
          <li key={tip.id} style={{ marginBottom: '1.5em' }}>
            <h2>{tip.title}</h2>
            <p>{tip.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
