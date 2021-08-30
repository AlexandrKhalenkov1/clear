import axios from 'axios';
import './App.css';

function App() {
  const test = () => {
   console.log('Sended');
   let message = {5:'hello'};
   axios.post('http://localhost:5000/api/test', message );
  };
  return (
    <div className="App">
      <button onClick={test}>Send to backend</button>
    </div>
  );
}

export default App;
