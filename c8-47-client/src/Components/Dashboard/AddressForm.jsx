import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import customAxios from '../../Helpers/customAxios';

function AddressForm() {
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
    const { data } = await customAxios.post('/address', formData);
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <h1>Ubicación</h1>

        <h2>País</h2>

        <input
          type='text'
          autoComplete='off'
          {...register('country', {
            required: true,
            pattern: /^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/,
            maxLength: 24,
          })}
        />

        {errors.country?.type === 'required' && (
          <p className='g-error-input'>Ingresa el País</p>
        )}
        {errors.country?.type === 'pattern' && (
          <p className='g-error-input'>El campo País solo acepta letras</p>
        )}
        {errors.country?.type === 'maxLength' && (
          <p className='g-error-input'>
            El campo País acepta como máximo 24 caracteres
          </p>
        )}

        <h2>Estado</h2>

        <input
          type='text'
          autoComplete='off'
          {...register('state', {
            required: true,
            pattern: /^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/,
            maxLength: 24,
          })}
        />

        {errors.state?.type === 'required' && (
          <p className='g-error-input'>Ingresa el Estado</p>
        )}
        {errors.state?.type === 'pattern' && (
          <p className='g-error-input'>El campo Estado solo acepta letras</p>
        )}
        {errors.state?.type === 'maxLength' && (
          <p className='g-error-input'>
            El campo Estado acepta como máximo 24 caracteres
          </p>
        )}

        <h2>Ciudad</h2>

        <input
          type='text'
          autoComplete='off'
          {...register('city', {
            pattern: /^[A-Za-zÀ-ÖØ-öø-ÿ0-9 ]+$/,
            maxLength: 24,
          })}
        />

        {errors.city?.type === 'pattern' && (
          <p className='g-error-input'>
            El campo Ciudad solo acepta letras y números
          </p>
        )}
        {errors.city?.type === 'maxLength' && (
          <p className='g-error-input'>
            El campo Ciudad acepta como máximo 24 caracteres
          </p>
        )}

        <h2>Dirección</h2>

        <input
          type='text'
          autoComplete='off'
          {...register('address', {
            pattern: /^[A-Za-zÀ-ÖØ-öø-ÿ0-9 ]+$/,
            maxLength: 24,
          })}
        />

        {errors.address?.type === 'pattern' && (
          <p className='g-error-input'>
            El campo Dirección solo acepta letras y números
          </p>
        )}
        {errors.address?.type === 'maxLength' && (
          <p className='g-error-input'>
            El campo Dirección acepta como máximo 24 caracteres
          </p>
        )}

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default AddressForm;
