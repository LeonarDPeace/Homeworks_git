// Son.jsx
import React, { memo } from 'react';

export const Son = memo(({ numero, increment }) => {
    console.log('Son component rendered');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={() => increment(numero)}
        >
            {numero}
        </button>
    );
});