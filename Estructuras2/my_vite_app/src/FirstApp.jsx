import React, { useState } from 'react';
import './App.css';

function App() {
    const [counter, setCounter] = useState(10);

    const handleAdd = () => {
        setCounter(counter + 1);
    };

    const handleSubstract = () => {
        setCounter(counter - 1);
    };

    const handleReset = () => {
        setCounter(10); // Reinicia el contador al valor inicial (10 en este caso)
    };

    return (
        <>
            <h1>First App</h1>
            <span>{counter}</span>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleSubstract}>-1</button>
            <button onClick={handleReset}>Reset</button>
        </>
    );
}

export default App;