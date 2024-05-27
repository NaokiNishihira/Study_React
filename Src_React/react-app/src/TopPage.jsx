import React from 'react';
import UseCss from './UseCss.css';
import Mybutton from './MyButton';
import {PageButton} from './MyButton';

export default function TopPage(){
    const ButtonState = {name: '戻る', page: '/'}

    return(
        <div className='title'>
            <p>Hello World!!</p>
            <div>
                <PageButton ButtonName={ButtonState.name} ButtonPage={ButtonState.page} />
            </div>
        </div>
    );
}