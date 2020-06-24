import React from 'react';
import './Css/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Form from './Components/Form';
import List from './Components/List';
import Navabar from './Components/SignUp';
function App() {
  return (
    <BrowserRouter>
    <Navabar/>
            <div className="App">
                <Switch>
                    <Route exact path='/' component={List} />
                    <Route path='/adduser' component={Form} />        
                </Switch>
            </div>
    </BrowserRouter>
  );
}

export default App;