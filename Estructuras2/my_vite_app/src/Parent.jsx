import React, { useState } from 'react';
import { Child } from './Child';

export const Parent = () => {
    const [categories, setCategories] = useState(['first category', 'second category']);

    const handleAddCategory = (newCategory) => {
        setCategories([...categories, newCategory]);
    };

    return (
        <>
            <h1>GifExpert</h1>
            <Child onAddCategory={handleAddCategory} />
            <ol>
                {categories.map((category, key) => (
                    <li key={key}>{category}</li>
                ))}
            </ol>
        </>
    );
};