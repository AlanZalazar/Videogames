import { Route, useLocation } from 'react-router-dom';
import './App.css';
import { Landing, Home, Detail, Form } from './views';
import NavBar from './components/NavBar/NavBar';

function App() {
  
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar/>}
      
      <Route exact path="/" render={()=><Landing/>}/>
      <Route exact path="/detail/:id" render={()=><Detail/>}/>
      <Route exact path="/create" render={()=><Form/>}/>
      
      <Route path="/home" render={()=><Home/>} />
      
      
      
    </div>
  );
}

export default App;
