import React from 'react';

export default ({ input, classification, type, name }) => {
    console.log(input);
    return (
        <div>
            <input
                type={type}
            />
            {classification}
        </div>
    );
}