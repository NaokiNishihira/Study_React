import React from 'react';
import {useState} from 'react';
import UseCss from './UseCss.css';
import TopPage from './TopPage';
import {PageButton} from './MyButton';

{/* default functionじゃない場合は{}を使わないといけない*/}

export default function Home(){
    const [text, setText] = useState('名前入力')
    const ButtonState = {name: '入力完了', page: '/TopPage'}

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
                <PageButton ButtonName={ButtonState.name} ButtonPage={ButtonState.page} />
            </h1>
        </div>
    );
}