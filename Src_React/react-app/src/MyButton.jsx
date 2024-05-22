import React from 'react';
import { HandleClick } from './HandleClick';

export default function MyButton(){
    return(
        <div className="container">
            <button onClick={HandleClick()}>
                入力完了
            </button>
        </div>
    );
}