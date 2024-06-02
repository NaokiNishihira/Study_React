import React from 'react';
import {useLocation, Link} from 'react-router-dom';
import UseCss from './UseCss.css';

export default function TopPage(){
    const location = useLocation();
    const text = location.state?.text || "no message passed";

    return(
        <div>
            <h1 className='title'>Welcome to TopPage!!</h1>

            <p className='container'>あなたの名前は {text} ですね？</p>
            <div className='button-center'>
                <Link to="/">
                    <button>
                        戻る
                    </button>
                </Link>
            </div>
        </div>
    );
}