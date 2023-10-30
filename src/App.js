import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/home';
import Domestic from './components/Service1/Domestic'
import Medical from './components/Service3/Medical';
import Hospitality from './components/Service2/Hospitality';
import Industrial from './components/Service4/Industrial'
import './App.css';

function App() {
  
  return (
    <div className="App">
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Domestic" element={<Domestic />} />
        <Route path="/Medical" element={<Medical />} />
        <Route path="/Hospitalty" element={<Hospitality />} />
        <Route path="/Industrial" element={<Industrial />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
