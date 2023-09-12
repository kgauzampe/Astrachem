import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/home';
import './App.css';

function App() {
  
  return (
    <div className="App">
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
