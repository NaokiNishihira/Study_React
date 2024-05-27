import React from 'react';
import {MyButton} from './MyButton';

export default function Welcome(){
    return(
        <div>
            <h1>Welcome to my App</h1>
            <p>Hello there<br />How do you do?</p>
            <MyButton />
        </div>
    );
}