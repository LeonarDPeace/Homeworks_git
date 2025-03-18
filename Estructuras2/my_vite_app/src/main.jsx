// main.jsx (segunda modificación)
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Parent } from './Parent';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Parent />
    </React.StrictMode>
);