import { Route, Routes } from 'react-router-dom';
import './App.css';
import ContactUs from './components/Home/ContactUs';
import { HomePage } from './components/Home/HomePage';
import { Page404 } from './components/Home/Page404';
import { Team } from './components/Home/Team';
import { Toolbar } from './components/HomePage/ToolBar';
import './components/Home/home.css'
import { Principal } from './components/Home/Pirincipal';
import { Login } from './components/Login/Login';

function App() {
  
  return (
    <div className="App">
      <Toolbar/>
      <Routes>
        {/* <Route path="/" element={<SideBar/>} /> */}
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<HomePage/>} />
         <Route path="/contact-us" element={<ContactUs/>} /> 
        <Route path="/principal" element={<Principal/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/projects" element={<h1>Proyectos</h1>} />
        <Route path="about" element={<h1>about</h1>} />
        <Route path="/*" element={<h1><Page404/></h1>} />
      </Routes>
    </div>
  );  
}
export default App;

