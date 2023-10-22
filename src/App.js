import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/home';
import Service1 from './components/Service1/Domestic'
import './App.css';

function App() {
  
  return (
    <div className="App">
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Domestic" element={<Service1 />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
