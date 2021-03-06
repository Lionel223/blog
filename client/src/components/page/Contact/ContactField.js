import React from 'react';

export default ({ input, label, type, meta: { touched, error } }) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input} type={type} />
            <div className="error">
                {touched && error}
            </div>
        </div>
    )
}