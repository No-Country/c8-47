import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';
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
      <h3>Register</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First name</label>
          <input
            type='text'
            {...register('first_name', {
              required: true,
              pattern: /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/,
              minLength: 2,
              maxLength: 24,
            })}
          />
          {errors.first_name?.type === 'required' && (
            <p>*First name is required.</p>
          )}
          {errors.first_name?.type === 'pattern' && (
            <p>*Please enter a valid first name.</p>
          )}
          {errors.first_name?.type === 'minLength' && (
            <p>*You need a minimun of 2 characters.</p>
          )}
          {errors.first_name?.type === 'maxLength' && (
            <p>*First name is longer than 24 characters.</p>
          )}
        </div>
        <div>
          <label>Last name</label>
          <input
            type='text'
            {...register('last_name', {
              required: true,
              pattern: /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/,
              minLength: 2,
              maxLength: 24,
            })}
          />
          {errors.last_name?.type === 'required' && (
            <p>*Last name is required.</p>
          )}
          {errors.last_name?.type === 'pattern' && (
            <p>*Please enter a valid last name.</p>
          )}
          {errors.last_name?.type === 'minLength' && (
            <p>*You need a minimun of 2 characters.</p>
          )}
          {errors.last_name?.type === 'maxLength' && (
            <p>*Last name is longer than 24 characters.</p>
          )}
        </div>
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
          <label>Confirm password</label>
          <input
            type='text'
            {...register('confirm_password', {
              required: true,
              validate: (val) => {
                if (watch('password') != val) {
                  return 'Your passwords do not match';
                }
              },
            })}
          />
          {errors.confirm_password?.type === 'required' && (
            <p>*Please confirm the password above</p>
          )}
          {errors.confirm_password?.type === 'validate' && (
            <p>*Passwords do not match</p>
          )}
        </div>
        <button type='submit'>Sign Up</button>
        <div>
          Already have an account?
          <span>
            <Link to='/login'>Log in</Link>
          </span>
        </div>
        <span>
          By registering I declare that I have read and accepted the Terms and
          Conditions of Cevetae.
        </span>
      </form>
    </>
  );
};

export default Register;
