import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import customAxios from './Config/interceptors';

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
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <h1>Perfil</h1>

        <h2>Nombre</h2>

        <input
          type='text'
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

        <h2>Apellido</h2>

        <input
          type='text'
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
