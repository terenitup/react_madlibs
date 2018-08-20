import React from 'react';

const Input = (label, state, onChange, name) => {
    return (
        <div className="input">
            <input value={state} onChange={onChange} name={name}/>
            <label>{ label }</label>
        </div>
    )
}

export default Input;