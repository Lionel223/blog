import React from 'react';

export default ({ input, type, meta: { touched, error } }) => {
    return (
        <div>
            <input {...input} type={type} placeholder="Topic" />
            <div className="error">
                {touched && error}
            </div>
        </div>
    );
}