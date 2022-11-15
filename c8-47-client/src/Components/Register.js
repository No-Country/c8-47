import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
  const {
    register,
    watch,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (form) => {
    console.log(form);
    reset();
  };
  return (
    <>
      <h3>Register</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Full name</label>
          <input type='text' {...register('fullname', { required: true })} />
          {errors.fullname?.type === 'required' && (
            <p>*Full name is required</p>
          )}
        </div>
        <div>
          <label>Email</label>
          <input
            type='text'
            {...register('email', {
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
            })}
          />
          {errors.email?.type === 'required' && <p>*Email is required</p>}
          {errors.email?.type === 'pattern' && (
            <p>*Please enter a valid email</p>
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
            {...register('confirmPassword', {
              required: true,
              validate: (val) => {
                if (watch('password') != val) {
                  return 'Your passwords do not match';
                }
              },
            })}
          />
          {errors.confirmPassword?.type === 'required' && (
            <p>*Please confirm the password above</p>
          )}
          {errors.confirmPassword?.type === 'validate' && (
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
