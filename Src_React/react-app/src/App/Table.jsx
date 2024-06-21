import React, { useState } from 'react';
import './UseCss.css'

const Table = () => {
    // サンプルデータ
    const data = [
        { id: 1, genre: 'ニュース', threads_name: 'ギダ・タローさん死去' },
        { id: 2, genre: 'スポーツ', threads_name: 'サッカー日本代表優勝' },
        { id: 3, genre: 'アニメ', threads_name: '今年の夏にくるアニメ' },
        { id: 4, genre: 'スポーツ', threads_name: '阪神タイガース優勝' },
        { id: 5, genre: 'ニュース', threads_name: 'マイナンバーカード偽造事件' },
        { id: 6, genre: 'ニュース', threads_name: '「犯人は僕だけが知っている」映画化' }
    ];

    // フィルタリングするための数値を管理するステート
    const [filterValue, setFilterValue] = useState(0);

    // フィルタリング関数
    const filteredData = data.filter(item => item.id >= filterValue);

    return (
        <div className='table-container'>
            <table border='1' className='table-custom'>
                <thead>
                    <tr>
                        <th>ジャンル</th>
                        <th>スレッド名</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(item => (
                        <tr key={item.id}>
                            <td>{item.genre}</td>
                            <td>{item.threads_name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
