import logo from '../logo.svg';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Welcome from '../Welcome';
import Hello from '../Hello';
import Home from './Home';
import TopPage from './TopPage';
import AppHome from './AppHome';
import Client00 from './Client00';

function App() {
  return (
    <div>
        <Router>
            <Routes>
                <Route exact path='/' element={<AppHome />} />
                <Route path='/TopPage' element={<TopPage />} />
                <Route path='./Client00' element={<Client00 />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
