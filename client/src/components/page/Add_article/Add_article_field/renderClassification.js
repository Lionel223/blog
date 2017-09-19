import React from 'react';

export default ({ input, options ,meta }) => {
    return (
        <div> 
            {options.map(o=> <label key={o}><input type="radio" {...input} value={o} checked={o === input.value} />{o}</label>)}
            {meta.touched && meta.error && <span className="error">{meta.error}</span>}
        </div>
    );
}