import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import customAxios from '../../Helpers/customAxios';

function PersonalForm() {
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
    const { data } = await customAxios.post('/personal', formData);
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <h1>Perfil</h1>

        <h2>Nombre</h2>

        <input
          type='text'
          autoComplete='off'
          {...register('name', {
            required: true,
            pattern: /^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/,
            maxLength: 64,
            minLength: 2,
          })}
        />

        {errors.name?.type === 'required' && (
          <p className='g-error-input'>Ingresa tu nombre</p>
        )}
        {errors.name?.type === 'pattern' && (
          <p className='g-error-input'>Ingresa un nombre válido</p>
        )}
        {errors.name?.type === 'maxLength' && (
          <p className='g-error-input'>
            El nombre acepta como máximo 64 caracteres
          </p>
        )}
        {errors.name?.type === 'minLength' && (
          <p className='g-error-input'>
            El nombre debe tener al menos 2 caracteres
          </p>
        )}

        <h2>Fecha de nacimiento</h2>

        <input
          type='text'
          autoComplete='off'
          {...register('birth', {
            maxLength: 10,
          })}
        />

        {errors.birth?.type === 'maxLength' && (
          <p className='g-error-input'>
            El fecha de nacimiento acepta como máximo 10 caracteres
          </p>
        )}

        <h2>Email</h2>

        <input
          type='text'
          autoComplete='off'
          {...register('email', {
            required: true,
            pattern: /^[\w-.]+@([\w-])+[.\w-]*$/i,
            maxLength: 64,
          })}
        />

        {errors.email?.type === 'required' && (
          <p className='g-error-input'>Ingresa tu email</p>
        )}
        {errors.email?.type === 'pattern' && (
          <p className='g-error-input'>Ingresa un email válido</p>
        )}
        {errors.email?.type === 'maxLength' && (
          <p className='g-error-input'>
            El email acepta como máximo 64 caracteres
          </p>
        )}

        <h2>Teléfono</h2>

        <input
          type='text'
          autoComplete='off'
          {...register('phone', {
            pattern: /^[+]?[0-9]*$/,
            minLength: 8,
          })}
        />

        {errors.phone?.type === 'pattern' && (
          <p className='g-error-input'>El campo Teléfono solo acepta números</p>
        )}
        {errors.phone?.type === 'minLength' && (
          <p className='g-error-input'>
            El campo Teléfono debe tener al menos 8 caracteres
          </p>
        )}

        <h2>Título</h2>

        <input
          type='text'
          autoComplete='off'
          {...register('title', {
            required: true,
            maxLength: 64,
          })}
        />

        {errors.title?.type === 'required' && (
          <p className='g-error-input'>Ingresa la cabecera</p>
        )}
        {errors.title?.type === 'maxLength' && (
          <p className='g-error-input'>
            La cabecera acepta como máximo 64 caracteres
          </p>
        )}

        <h2>Acerca de mi</h2>

        <input
          type='text'
          autoComplete='off'
          {...register('title', {
            required: true,
            maxLength: 512,
          })}
        />

        {errors.title?.type === 'required' && (
          <p className='g-error-input'>Completa el campo Acerca de mi</p>
        )}
        {errors.title?.type === 'maxLength' && (
          <p className='g-error-input'>
            El campo Acerca de mi acepta como máximo 512 caracteres
          </p>
        )}

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default PersonalForm;
