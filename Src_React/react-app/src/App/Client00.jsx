import React, { useEffect, useState } from "react";
import axios from "axios";

const Client00 = () => {
    // 配列msgをsetMsgで更新する。
    const [msg, setMsg] = useState([]);


    // DBから保存したデータを取得する
    const url = "http://localhost:8000/api/get";
    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get(url); // 引数のサーバーからデータを取得する
                setMsg(res.data.items); // res.itemsではなくres.data.items
                return;
            } catch (e) {
                return e;
            }
        })();
    }, []);

    return (
        <html lang="jp">
            <head>
                <meta charSet="UTF-8" />
                <title>Document</title>
            </head>
            <body>
                <h1>Hello World</h1>
                <table border="1">
                    {msg.map((article) => {
                        return (
                            <tr key={article.id}>
                                <td>{article.name}</td>
                                <td>{article.date}</td>
                                <td>{article.text}</td>
                            </tr>
                        );
                    })}
                </table>

                <br/>
                <form method="POST" action="http://localhost:8000/api/post">
                    <table>

                    <tr><th>名前：</th><td>
                      <input type='textarea' placeholder="名前を入力" name="name" />
                    </td></tr>
                    <tr><th>文章：</th><td>
                      <input type='textarea' placeholder="メッセージを入力" name="text" />
                    </td></tr>
                    <tr><th></th><td>
                      <input type="submit" />
                    </td></tr>
                    
                    </table>
                </form>
            </body>
        </html>
    );
};

export default Client00;
