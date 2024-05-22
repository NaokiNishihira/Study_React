import React from 'react';
import UseCss from './UseCss.css';
import Mybutton from './MyButton';

export default function TopPage(){
    const ButtonName = '戻る'

    return(
        <div className='title'>
            <p>Hello World!!</p>
            <div>
                <Mybutton ButtonName={ButtonName} />
            </div>
        </div>
    );
}