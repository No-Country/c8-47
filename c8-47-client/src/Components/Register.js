import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import login from '../Assets/Images/login.jpg';
import Input from './input/Input';
const Register = () => {
  const {
    register,
    watch,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (form) => {
    try {
      const { data } = await axios.post(
        'http://localhost:4000/auth/signup',
        form
      );
      console.log(data);

      reset();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              name={'First name'}
              type={'text'}
              register={register('first_name', {
                required: { value: true, message: '*First name is required.' },
                pattern: {
                  value: /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/,
                  message: '*Please enter a valid first name.',
                },
                minLength: {
                  value: 2,
                  message: '*You need a minimun of 2 characters.',
                },
                maxLength: {
                  value: 24,
                  message: '*First name is longer than 24 characters.',
                },
              })}
              error={errors.first_name}
            />
            <Input
              name={'Last name'}
              type={'text'}
              register={register('last_name', {
                required: { value: true, message: '*Last name is required.' },
                pattern: {
                  value: /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/,
                  message: '*Please enter a valid last name.',
                },
                minLength: {
                  value: 2,
                  message: '*You need a minimun of 2 characters.',
                },
                maxLength: {
                  value: 24,
                  message: '*Last name is longer than 24 characters.',
                },
              })}
              error={errors.last_name}
            />
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
            <Input
              name={'Confirm password'}
              type={'text'}
              register={register('confirm_password', {
                required: {
                  value: true,
                  message: '*Please confirm the password above',
                },
                validate: {
                  value: (val) => {
                    if (watch('password') != val) {
                      return 'Your passwords do not match';
                    }
                  },
                  message: '*Passwords do not match',
                },
              })}
              error={errors.confirm_password}
            />

            <button type='submit'>Sign Up</button>
            <div>
              Already have an account?
              <span>
                <Link to='/login'>Log in</Link>
              </span>
            </div>
            <span>
              By registering I declare that I have read and accepted the Terms
              and Conditions of Cevetae.
            </span>
          </form>
        </div>
        <div className='w-full h-[550px] hidden md:block'>
          <img className='w-full h-full' src={login} alt='login' />
        </div>
      </div>
    </>
  );
};

export default Register;
