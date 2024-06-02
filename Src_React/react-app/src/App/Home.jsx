import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import UseCss from './UseCss.css'

export default function Home(){
    const [text, setText] = useState('名前入力');
    const ButtonState = {name: '入力完了'};
    const message = "Hello from Home Page!";

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
                <Link to="/TopPage" state={{ text }}>
                    <button>
                        {ButtonState.name}
                    </button>
                </Link>
            </h1>
        </div>
    );
}