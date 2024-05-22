import React from 'react';
import { useNavigate } from 'react-router-dom';

export const HandleClick = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/TopPage')
    }

    return handleClick;
}