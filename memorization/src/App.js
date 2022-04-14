import './App.css';
import { useState, useMemo, useCallback } from 'react';
import Header from './components/Header'

function App() {

  const [ number, setNumber ] = useState(0);
  const data = useMemo(() => {
    return { name: "Ömer" };
  }, []);

  const increment = useCallback(() => {
    setNumber((preveState) => preveState +1);
  }, [])
  return (
    <div className="App">
      <Header increment={increment} />
      <hr />
      <h1>{number}</h1>
    </div>
  );
}

export default App;
