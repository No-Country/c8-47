import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Input from './input/Input';
import login from '../Assets/Images/login.jpg';
const Signin = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (form) => {
    try {
      const { data } = await axios.post(
        'http://localhost:4000/auth/login',
        form
      );
      console.log(data);
      reset();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            name={'Email'}
            type={'text'}
            register={register('email', {
              required: { value: true, message: '*Email is required.' },
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: '*Please enter a valid email.',
              },
              maxLength: {
                value: 64,
                message: '*Email is longer than 64 characters.',
              },
            })}
            error={errors.email}
          />
          <Input
            name={'Password'}
            type={'text'}
            register={register('password', {
              required: { value: true, message: '*Password is required.' },
              pattern: {
                value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
                message:
                  '*Password must have at least 8 characters, one uppercase, one lowercase and one digit',
              },
            })}
            error={errors.password}
          />

          <div>
            Forgot your password?
            <span>
              <Link to='/resetPassword'>Reset your password</Link>
            </span>
          </div>
          <button type='submit'>Log in</button>
          <div>
            Don&#39;t have an account?
            <span>
              <Link to='/registro'>Sign up</Link>
            </span>
          </div>
        </form>
      </div>
      <div className='w-full h-[550px] hidden md:block'>
          <img className='w-full h-full' src={login} alt='login' />
        </div>
    </div>
  );
};

export default Signin;
