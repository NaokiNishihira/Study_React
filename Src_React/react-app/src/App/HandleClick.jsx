import React from 'react';
import { useNavigate } from 'react-router-dom';

export const HandleClick = (page) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(page)
    }

    return handleClick;
}