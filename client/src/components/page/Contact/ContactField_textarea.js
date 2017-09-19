import React from 'react';

export default ({ input, label, type, meta: { touched, error } }) => {
    return (
        <div>
            <label>{label}</label>
            <textarea {...input} type={type} cols="30" rows="10" placeholder='write some word here!' />
            <div className="error">
                {touched && error}
            </div>
        </div>
    )
}





