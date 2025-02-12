import logo from './logo.svg';
import './App.css';
import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Like from './components/Like';

function App() {
  return (
    <div className="App">
     <Task1 />
     <Task2 />
     <Like />
    </div>
  );
}

export default App;
