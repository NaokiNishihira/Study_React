import React from 'react';

export default function Useli(){
    const products = [
        {title: 'Cabbage', isFluit: false, id: 1},
        {title: 'Garlic', isFluit: false, id: 2},
        {title: 'Apple', isFluit: true, id: 3},
    ]
    
    const listItem = products.map(product=>
        <li
            key = {product.id}
            style={{
                color: product.isFluit ? 'magenta' : 'darkgreen'
            }}
        >
            {product.title}
        </li>
    );

    return(
        <ul>{listItem}</ul>
    );
}