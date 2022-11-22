import React from 'react';

const Input = ({ name, type, register, error }) => {
  return (
    <div className='h-[100px] flex flex-col'>
      <label className='font-Mon text-[16px] ml-[4px]'>{name}</label>
      <input
        type={type}
        {...register}
        className={`h-[48px]  font-Mon  text-lg text text-textColor pt-[9px] pb-[9px] pl-[12px] pr-[12px] mt-[1px] mb-[1px] rounded-[10px] outline-0 ${
          error ? 'border border-errorColor' : 'border border-textColor'
        }`}
      />

      <span className='font-Mon ml-[4px] text-[14px] leading-none text-errorColor'>
        {error && error.message}
      </span>
    </div>
  );
};

export default Input;
