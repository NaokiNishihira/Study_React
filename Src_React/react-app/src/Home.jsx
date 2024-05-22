import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import UseCss from './UseCss.css';
import TopPage from './TopPage';

export default function Home(){
    const [text, setText] = useState('名前入力')
    const navigate = useNavigate()

    const handleClick = () => {
            navigate('/TopPage');
    }

    function MyButton(){
        return(
            <div className="container">
                <button onClick={handleClick}>
                    入力完了
                </button>
            </div>
        );
    }

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
                <MyButton />
            </h1>
        </div>
    );
}