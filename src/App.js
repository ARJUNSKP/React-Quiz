import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Landingpage from './pages/Landingpage';
import Home from './pages/Home';
import Mark from './pages/Mark';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Landingpage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/mark" element={<Mark/>}/>
      </Routes>
    </div>
  );
}

export default App;
