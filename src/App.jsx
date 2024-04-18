import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState('Oklahoma')

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city +'&appid=4676da13ec633ac973da403ba71b2c54');
      const data = await res.json();

      setData(data);
    }

    fetchData();
  }, [city]);

  const onChange = (e) => setCity(e.target.value);

  return (
    <div className="card">
      <div className="input">Input City: <input type="text" value={city} onChange={onChange}/></div>
      <p>Current Temperature in Kelvin: {data?.main?.temp}</p>
    </div>
  )
}

export default App
