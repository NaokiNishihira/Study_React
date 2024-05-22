import React from 'react';
import UseCss from './UseCss.css';
import Mybutton from './MyButton';

export default function TopPage(){
    return(
        <div className='title'>
            <p>Hello World!!</p>
            <br />
            <Mybutton />
        </div>
    );
}