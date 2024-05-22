import React from 'react';
import { HandleClick } from './HandleClick';

export default function MyButton({ ButtonName }){
    return(
        <div className="container">
            <button onClick={HandleClick()}>
                {ButtonName}
            </button>
        </div>
    );
}