import React from 'react';
import UseImg from './UseImg';

export default function UseIF(){
    let content=1;
    let num=1;
    
    if(num){
        content = <UseImg />;
    }
    else{
        content = <h1>Error</h1>;
    }

    return(
        <div>
            {content}
        </div>
    );
}