import {useState} from 'react';

function Counter()
{
     let [cnt, setCnt] = useState(0); // т.о. в нулевой элемент State загнали 2 переменные cnt, setCnt
     let decrement = () => setCnt(cnt - 1);
     let increment = () => setCnt(cnt + 1);

     return(
        <div>
            <h2>{cnt}</h2>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>
     )
}
export default Counter;
