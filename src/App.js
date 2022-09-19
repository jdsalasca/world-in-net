import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact-us" element={<Home/>} />
        <Route path="about" element={<h1>about</h1>} />
      </Routes>
    </div>
  );  
}
export default App;

