import React from 'react';
import {useState} from 'react';

export default function UseState(){
    function MyButton(){
        const [count, setCount] = useState(0);

        function handleClick(){
            setCount(count+1);
        }

        return(
            <button onClick={handleClick}>
                Clicked {count} times
            </button>
        );
    }

    return(
        <div>
            <h1>Counters that update separately</h1>
            <MyButton /><br />
            <MyButton />
        </div>
    );
}