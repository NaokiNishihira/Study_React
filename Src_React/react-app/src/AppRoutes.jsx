import React from 'react';
import { Routes, Route} from 'react-router-dom';
import TopPage from './TopPage';
import Home from './Home';

export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/TopPage" element={<TopPage />} />
        </Routes>
    );
}