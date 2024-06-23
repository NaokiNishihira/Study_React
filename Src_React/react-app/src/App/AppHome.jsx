import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './UseCss.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Table from './Table';
import Table_Make_Threads from './Table_Make_Threads';

export default function AppHome() {
    const [text, setText] = useState('');       //テキストボックスの中身を格納する変数
    const GenresName = {1:'トレンド', 2:'新着', 3:'アニメ', 4:'スポーツ', 5:'ニュース'};      //ジャンルを指定するための変数

    const handleSearch = () => {
        alert(`検索クエリ: ${text}`);
    };

    return (
        <div className='background_img'>
            <h1 className="title">Welcome</h1>
            <h2 className="title">優しいSNS</h2>
            <br />
            <div className="textbox-container">
                {/* ボタンを押すとページが飛ぶようになっている */}
                <Link to="/Client00">
                    <div className="container">
                        <button>{GenresName[2]}</button>
                        <button>{GenresName[3]}</button>
                        <button>{GenresName[4]}</button>
                        <button>{GenresName[5]}</button>
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
                        placeholder="Search"
                    />
                    <FontAwesomeIcon icon={faSearch} className="search-icon" onClick={handleSearch} />
                </div>
            </div>
            <div>
                <h3 className="title title-special">{GenresName[1]}</h3>
            </div>
            <Table />
            <Table_Make_Threads />
        </div>
    );
}