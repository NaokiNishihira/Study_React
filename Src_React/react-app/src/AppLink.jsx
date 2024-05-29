import logo from './logo.svg';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Welcome from './Welcome';
import Hello from './Hello';
import MyButton from './MyButton';
import UseState from './UseState';
import UseTextBox from './UseTextBox';
import LinkHome from './LinkHome';
import LinkTopPage from './LinkTopPage';

function AppLink() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path='/' element={<LinkHome />} />
                    <Route path='/TopPage' element={<LinkTopPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default AppLink;
