import React, {useEffect, useState} from 'react';
import Fruit from "./components/Fruit";
import Reset from "./components/Reset";
import './App.css';

const App = () => {
    const [sum, setSum] = useState(0)
    const [counter, setCounter] = useState(0)
    const [input, setInput] = useState('')

    const fruits = ['orange', 'apple', 'plum', 'tomato', 'cucumber'];

    const handleClick = (price) => {
        setSum( sum + price)
    }

    const resetSum = () => {
        setSum(0)
    }

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const inputStyle = {
        borderColor: (input.length >= 6 && input.includes('@') && input.includes('.')) ? 'green' : 'red',
        borderWidth: '4px'
    }

    useEffect(() => {
        setCounter(counter + 1)
    }, [sum])

    return (
        <div>
            <div style={{backgroundColor: 'tomato', width: '100px', height: '100px'}}>Zadanie2</div>

            <ul>
                {fruits.map(el => (
                    <li key={`list_${el}`}>
                        {el}
                    </li>
                ))}
            </ul>

            {fruits.map(el => (
                <Fruit key={el} fruit={el} setSum={handleClick}/>
            ))}

            <p>{sum}</p>

            <Reset reset={resetSum}/>
            <h2>counter</h2>
            <p>{counter}</p>

            <h2>email input</h2>
            <input style={inputStyle} type="text" onChange={e => handleChange(e)} value={input}/>
        </div>
    )
};

export default App;
