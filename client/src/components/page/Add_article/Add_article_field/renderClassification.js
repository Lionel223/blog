import React from 'react';

export default ({ input, value, type,meta }) => {
    console.log(input);
    return (
        <span>
            <input
                type={type}
                onChange={input.onChange}
                checked={input.value === {value}}
            />
            {' '}{input.value}{' '}
        </span>
    );
}