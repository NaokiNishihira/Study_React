import React from 'react';
import { HandleClick } from '../HandleClick';

export function MyButton({ ButtonName }){
    return(
        <div className="container">
            <button onClick={HandleClick()}>
                {ButtonName}
            </button>
        </div>
    );
}

export function PageButton({ ButtonName, ButtonPage, Name}){
    return(
        <div className="container">
            <button onClick={HandleClick(ButtonPage)}>
                {ButtonName}
            </button>
        </div>
    );
}