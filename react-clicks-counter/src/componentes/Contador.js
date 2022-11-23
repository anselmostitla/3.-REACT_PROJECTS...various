import {React} from 'react';
// import {useState} from 'react';
import "../hojas-de-estilo/Contador.css"

export function Contador({numClicks}){
    // const [counter, setCounter] = useState(0)
    return(
    <div className='contador'>
        {numClicks}
    </div>);
}