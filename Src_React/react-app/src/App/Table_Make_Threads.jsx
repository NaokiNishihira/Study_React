import React, { useState } from 'react';
import './UseCss.css'

const Table_Make_Threads = () => {
    const [genre_text, set_genreText] = useState('');       //テキストボックスの中身を格納する変数
    const [threads_text, set_threadsText] = useState('');       //テキストボックスの中身を格納する変数

    // サンプルデータ
    const data = [
        { id: 1, name: 'スレッド名', threads_name: 'ギダ・タローさん死去' },
        { id: 2, name: 'ジャンル', threads_name: 'サッカー日本代表優勝' },
    ];

    // フィルタリングするための数値を管理するステート
    const [filterValue, setFilterValue] = useState(0);

    // フィルタリング関数
    const filteredData = data.filter(item => item.id >= filterValue);

    return (
        <div className='table-make-threads'>
            <table border='1' className='make_threads_table-custom'>
                <thead>
                    <tr>
                        <th>ジャンル</th>
                        <th>
                            <div>
                                <input
                                    type="text"
                                    value={genre_text}
                                    onChange={(e) => set_genreText(e.target.value)}
                                    className="make_threads_textbox"
                                    placeholder="genre"
                                />
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <th>スレッド名</th>
                        <th>
                            <div>
                                <input
                                    type="text"
                                    value={threads_text}
                                    onChange={(e) => set_threadsText(e.target.value)}
                                    className="make_threads_textbox"
                                    placeholder="name"
                                />
                            </div>
                        </th>
                    </tr>
                </thead>
            </table>
        </div>
    );
};

export default Table_Make_Threads;
