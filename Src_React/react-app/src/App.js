import logo from './logo.svg';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Welcome from './Welcome';
import Hello from './Hello';
import MyButton from './App/MyButton';
import UseState from './UseState';
import UseTextBox from './UseTextBox';
import Home from './App/Home';
import TopPage from './App/TopPage';

function App() {
  return (
    <div>
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/TopPage' element={<TopPage />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
