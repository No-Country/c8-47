import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import Icon from './Icon';

import customAxios from '../../Helpers/customAxios';

function ProfileForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // !VOLVER A VER eliminar useeffect
  useEffect(() => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImVtYWlsIjoiZmVyLmV6ZS5yYW1AZ21haWwuY29tIiwiaWQiOiI2MzcxMmMxMTUzYjNjMmZiNTEwYjdjNWYifSwiaWF0IjoxNjcwMDIyNDAxLCJleHAiOjE2NzI2MTQ0MDF9.yOKSiW55hC9752ucryXLdTMy2WKIXPK-A9m4f8qwo4c';

    localStorage.setItem('cevitaeToken', token);
  }, []);

  const submitForm = async (formData) => {
    const { data } = await customAxios.put('/user/name', formData);
    console.log(data);
    // Actualmente se envía aparte el nombre de usuario
  };

  return (
    <div id='profile'>
      <div className='flex text-2xl justify-start w-full'>
        <span className='p-2 flex items-center justify-center'>
          <Icon name={'profile'} />
        </span>
        <h2 className='text-2xl text-left flex items-center justify-center'>
          Perfil
        </h2>
      </div>
      <form onSubmit={handleSubmit(submitForm)}>
        <label htmlFor='name'>Nombre</label>

        <input
          type='text'
          id='name'
          name='name'
          autoComplete='off'
          {...register('first_name', {
            required: true,
            maxLength: 64,
          })}
        />

        {errors.first_name?.type === 'required' && (
          <p className='g-error-input'>Ingresa tu Nombre</p>
        )}
        {errors.first_name?.type === 'maxLength' && (
          <p className='g-error-input'>
            El campo Nombre acepta como máximo 64 caracteres
          </p>
        )}

        <label htmlFor='lastName'>Apellido</label>

        <input
          type='text'
          name='lastName'
          id='lastName'
          autoComplete='off'
          {...register('last_name', {
            required: true,
            maxLength: 64,
          })}
        />

        {errors.last_name?.type === 'required' && (
          <p className='g-error-input'>Ingresa tu Apellido</p>
        )}
        {errors.last_name?.type === 'maxLength' && (
          <p className='g-error-input'>
            El campo Apellido acepta como máximo 64 caracteres
          </p>
        )}

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default ProfileForm;
