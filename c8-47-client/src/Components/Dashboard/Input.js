import React from 'react';

const Input = ({ name, value, setter, type = 'text' }) => {
  return (
    <div className='form-group'>
      <label className='text-capitalize' htmlFor={name}>
        {name}
      </label>
      <input
        type={type}
        name={name}
        className='form-control'
        id={name}
        aria-describedby={name + 'Help'}
        placeholder={'Enter ' + name}
        value={value}
        onChange={(event) => {
          if (!setter) return;
          setter(event.target.value);
        }}
      />
    </div>
  );
};

export default Input;
