import React from 'react';

export default ({ input, type, meta: { touched, error } }) => {
    return (
        <div>
            <textarea {...input} type={type} />
            <div className="error">
                {touched && error}
            </div>
        </div>
    );
}