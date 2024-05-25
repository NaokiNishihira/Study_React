import React from 'react';
import {useState} from 'react';
import UseCss from './UseCss.css';
import TopPage from './TopPage';
import MyButton from './MyButton';

export default function Home(){
    const [text, setText] = useState('名前入力')
    const ButtonName = '入力完了'
    const Page = '/TopPage'

    return(
        <div>
            <p className="title">Welcom</p>
            <h1 className="container">
                <form onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </form>
                <br />
                <MyButton ButtonName={ButtonName} />
            </h1>
        </div>
    );
}