import React from 'react';

const Input = ({ name, type, register, error }) => {
  return (
    <div>
      <label className='font-Mon'>{name}</label>
      <input
        type={type}
        {...register}
        className={`font-Mon  text-lg text text-textColor p-2 mr-2 rounded-lg outline-0 ${
          error ? 'border border-errorColor' : 'border border-textColor'
        }`}
      />
      {error && <span>{error.message}</span>}
    </div>
  );
};

export default Input;
