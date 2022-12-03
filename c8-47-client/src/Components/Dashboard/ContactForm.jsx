import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import customAxios from './Config/interceptors';

function ContactForm() {
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
    const { data } = await customAxios.post('/contact', formData);
    console.log(data);
    //Actualmente la ubicación se envía junto con los datos de contacto
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <h1>Contacto</h1>

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

        <h2>Dirección</h2>

        <input
          type='text'
          placeholder='Estado'
          autoComplete='off'
          {...register('address.state', {
            required: true,
            pattern: /^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/,
            maxLength: 24,
          })}
        />

        {errors.address?.state?.type === 'required' && (
          <p className='g-error-input'>Ingresa el Estado</p>
        )}
        {errors.address?.state?.type === 'pattern' && (
          <p className='g-error-input'>El campo Estado solo acepta letras</p>
        )}
        {errors.address?.state?.type === 'maxLength' && (
          <p className='g-error-input'>
            El campo Estado acepta como máximo 24 caracteres
          </p>
        )}

        <input
          type='text'
          placeholder='Ciudad'
          autoComplete='off'
          {...register('address.city', {
            pattern: /^[A-Za-zÀ-ÖØ-öø-ÿ0-9 ]+$/,
            maxLength: 24,
          })}
        />

        {errors.address?.city?.type === 'pattern' && (
          <p className='g-error-input'>
            El campo Ciudad solo acepta letras y números
          </p>
        )}
        {errors.address?.city?.type === 'maxLength' && (
          <p className='g-error-input'>
            El campo Ciudad acepta como máximo 24 caracteres
          </p>
        )}

        <input
          type='text'
          placeholder='Código postal'
          autoComplete='off'
          {...register('address.zip_code', {
            pattern: /^[0-9]+$/,
            maxLength: 12,
          })}
        />

        {errors.address?.zip_code?.type === 'pattern' && (
          <p className='g-error-input'>El código postal solo acepta números</p>
        )}
        {errors.address?.zip_code?.type === 'maxLength' && (
          <p className='g-error-input'>
            El código postal acepta como máximo 12 caracteres
          </p>
        )}

        <input
          type='text'
          placeholder='Calle'
          autoComplete='off'
          {...register('address.street_name', {
            pattern: /^[A-Za-zÀ-ÖØ-öø-ÿ0-9 ]+$/,
            maxLength: 24,
          })}
        />

        {errors.address?.street_name?.type === 'pattern' && (
          <p className='g-error-input'>
            El campo Calle solo acepta letras y números
          </p>
        )}
        {errors.address?.street_name?.type === 'maxLength' && (
          <p className='g-error-input'>
            El campo Calle acepta como máximo 24 caracteres
          </p>
        )}

        <input
          type='text'
          placeholder='Número'
          autoComplete='off'
          {...register('address.street_number', {
            pattern: /^[0-9]+$/,
            maxLength: 8,
          })}
        />

        {errors.address?.street_number?.type === 'pattern' && (
          <p className='g-error-input'>El campo Número solo acepta números</p>
        )}
        {errors.address?.street_number?.type === 'maxLength' && (
          <p className='g-error-input'>
            El campo Número acepta como máximo 8 caracteres
          </p>
        )}

        <input
          type='text'
          placeholder='Departamento'
          autoComplete='off'
          {...register('address.door', {
            pattern: /^[A-Za-zÀ-ÖØ-öø-ÿ0-9 ]+$/,
            maxLength: 8,
          })}
        />

        {errors.address?.door?.type === 'pattern' && (
          <p className='g-error-input'>
            El campo Departamento solo acepta números y letras
          </p>
        )}
        {errors.address?.door?.type === 'maxLength' && (
          <p className='g-error-input'>
            El campo Departamento acepta como máximo 8 caracteres
          </p>
        )}

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
