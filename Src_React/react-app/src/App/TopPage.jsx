import React from 'react';
import {useLocation, Link} from 'react-router-dom';

export default function TopPage(){
    const location = useLocation();
    const text = location.state?.text || "no message passed";

    return(
        <div>
            <h1>Welcome to TopPage!!</h1>
            <p>あなたの名前は {text} ですね？</p>
            <Link to="/">
                <button>
                    戻る
                </button>
            </Link>
        </div>
    );
}