import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';
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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email</label>
          <input
            type='text'
            {...register('email', {
              required: true,
              pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              maxLength: 64,
            })}
          />
          {errors.email?.type === 'required' && <p>*Email is required.</p>}
          {errors.email?.type === 'pattern' && (
            <p>*Please enter a valid email.</p>
          )}
          {errors.email?.type === 'maxLength' && (
            <p>*Email is longer than 64 characters.</p>
          )}
        </div>
        <div>
          <label>Password</label>
          <input
            type='text'
            {...register('password', {
              required: true,
              pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
            })}
          />
          {errors.password?.type === 'required' && <p>*Password is required</p>}
          {errors.password?.type === 'pattern' && (
            <p>
              *Password must have at least 8 characters, one uppercase, one
              lowercase and one digit
            </p>
          )}
        </div>
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
  );
};

export default Signin;
