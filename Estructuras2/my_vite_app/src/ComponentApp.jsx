import React, { useState } from 'react';

export const ComponentApp = () => {
    const [categories, setCategories] = useState(['first category', 'second category']);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddCategory = () => {
        if (inputValue.trim().length > 0) {
            setCategories([...categories, inputValue]);
            setInputValue('');
        }
    };

    return (
        <>
            <h1>GifExpert</h1>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Escribe una categoría"
            />
            <button onClick={handleAddCategory}>Agregar</button>
            <ol>
                {categories.map((category, key) => (
                    <li key={key}>{category}</li>
                ))}
            </ol>
        </>
    );
};