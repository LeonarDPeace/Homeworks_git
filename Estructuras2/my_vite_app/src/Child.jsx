// Child.jsx
import React, { useState } from 'react';

export const Child = ({ onAddCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddCategory = () => {
        if (inputValue.trim().length > 0) {
            onAddCategory(inputValue);
            setInputValue('');
        }
    };

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Escribe una categoría"
            />
            <button onClick={handleAddCategory}>Agregar</button>
        </>
    );
};