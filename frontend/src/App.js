import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import NavBar from './components/NavBar';
import { Route,Routes } from 'react-router-dom';
import Login from './components/Login';

function App() {
  
  return (
    <div className="">
      <NavBar/>
      <Routes>
        <Route path='/Signup' Component={Signup} exact="true"/>
        <Route path='/Login' Component={Login} exact="true"/>
      </Routes>
      
    </div>
  );
}

export default App;
