import './App.css';
import { Landing, Home, Detail, Form } from './Views';
import  Navbar  from "./components/Navbar/Navbar"
import { Route, useLocation } from 'react-router-dom';



function App() {
  
  const location = useLocation();

  return (
    <div className="App">
    {location.pathname !== "/" && <Navbar/>}
    <Route exact path="/" render={() => <Landing/>}/>
    <Route path="/home" render={() => <Home/>}/>
    <Route path="/detail/:id" render={() => <Detail/>}/>
    <Route path="/form" render={() => <Form/>}/>
    </div>
  );
}

export default App;
