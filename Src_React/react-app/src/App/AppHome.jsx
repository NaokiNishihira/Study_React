import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import UseCss from './UseCss.css'

export default function AppHome(){
    const [text, setText] = useState('名前入力');
    const ButtonState = {name: '入力完了'};
    const message = "Hello from Home Page!";

    return(
        <div>
            <h1 className="title">Welcome</h1>
            <h2 className='title'>優しいSNS</h2>
            <br />
            <Link to="/TopPage">
                <div className='container'>
                    <button>{'新着'}</button>
                    <button>{'アニメ'}</button>
                    <button>{'スポーツ'}</button>
                </div>
            </Link>
        </div>
    );
}