import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

// import customAxios from './Config/interceptors';

import customAxios from '../../Helpers/customAxios';

function LanguageForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const submitForm = async (formData) => {
    const { data } = await customAxios.post('/language', formData);
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <h1>Idiomas</h1>

        <h2>Idioma</h2>

        <input
          type='text'
          autoComplete='off'
          {...register('language', {
            required: true,
            minLength: 2,
            maxLength: 16,
          })}
        />

        {errors.language?.type === 'required' && (
          <p className='g-error-input'>Ingresa el idioma</p>
        )}
        {errors.language?.type === 'minLength' && (
          <p className='g-error-input'>
            El idioma debe tener como mínimo 2 caracteres
          </p>
        )}
        {errors.language?.type === 'maxLength' && (
          <p className='g-error-input'>
            El idioma acepta como máximo 16 caracteres
          </p>
        )}

        <h2>Nivel</h2>

        <input
          type='text'
          autoComplete='off'
          {...register('level', {
            required: true,
            minLength: 2,
            maxLength: 16,
          })}
        />

        {errors.level?.type === 'required' && (
          <p className='g-error-input'>Ingresa el nivel</p>
        )}
        {errors.level?.type === 'minLength' && (
          <p className='g-error-input'>
            El nivel debe tener como mínimo 2 caracteres
          </p>
        )}
        {errors.level?.type === 'maxLength' && (
          <p className='g-error-input'>
            El nivel acepta como máximo 16 caracteres
          </p>
        )}

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default LanguageForm;
