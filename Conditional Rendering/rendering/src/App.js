import logo from './logo.svg';
import './App.css';

function App() {
  let number=1;
  return (
    <div className="App">
      {number>0?<h1>Positive</h1>:number<0? <h1>Negative</h1>:<h1>Zero</h1>  }
    </div>
  );
}

export default App;
