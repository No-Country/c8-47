import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../input/Input';
import { ButtonPurple } from '../buttons/ButtonPurple';
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
    <div className='w-[95%]'>
      <form onSubmit={handleSubmit(submitForm)}>
        <Input
          name={'Idioma'}
          type={'text'}
          register={register('language', {
            required: { value: true, message: 'Ingresa el idioma.' },
            minLength: {
              value: 2,
              message: 'El idioma debe tener como mínimo 2 caracteres',
            },
            maxLength: {
              value: 16,
              message: 'El idioma acepta como máximo 16 caracteres.',
            },
          })}
          error={errors.language}
        />
        <Input
          name={'Nivel'}
          type={'text'}
          register={register('level', {
            required: { value: true, message: 'Ingresa el nivel.' },
            minLength: {
              value: 2,
              message: 'El nivel debe tener como mínimo 2 caracteres.',
            },
            maxLength: {
              value: 16,
              message: 'El nivel acepta como máximo 16 caracteres.',
            },
          })}
          error={errors.level}
        />
        <div className='flex items-center justify-center mt-[10px]'>
          <ButtonPurple type={'submit'}>Guardar</ButtonPurple>
        </div>
      </form>
    </div>
  );
}

export default LanguageForm;
