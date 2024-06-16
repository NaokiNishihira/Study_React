import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './UseCss.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function AppHome() {
    const [text, setText] = useState('名前入力');
    const ButtonState = { name: '入力完了' };

    const handleSearch = () => {
        alert(`検索クエリ: ${text}`);
    };

    return (
        <div>
            <h1 className="title">Welcome</h1>
            <h2 className="title">優しいSNS</h2>
            <br />
            <div className="textbox-container">
                <Link to="/TopPage">
                    <div className="container">
                        <button>{'新着'}</button>
                        <button>{'アニメ'}</button>
                        <button>{'スポーツ'}</button>
                    </div>
                </Link>
            </div>
            <div className="textbox">
                <div className="textbox-wrapper">
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="textbox_size"
                    />
                    <FontAwesomeIcon icon={faSearch} className="search-icon" onClick={handleSearch} />
                </div>
            </div>
        </div>
    );
}
