import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../input/Input';
import customAxios from '../../Helpers/customAxios';
import { ButtonPurple } from '../buttons/ButtonPurple';
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
    const { data } = await customAxios.post('/address', formData);
    console.log(data);
  };

  return (
    <div className='w-[95%]'>
      <form onSubmit={handleSubmit(submitForm)}>
        <Input
          name={'País'}
          type={'text'}
          register={register('country', {
            required: { value: true, message: 'Ingresa el País.' },
            pattern: {
              value: /^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/,
              message: 'El campo País solo acepta letras.',
            },
            maxLength: {
              value: 24,
              message: 'El campo País acepta como máximo 24 caracteres.',
            },
          })}
          error={errors.country}
        />
        <Input
          name={'Provincia/ Estado/ Región'}
          type={'text'}
          register={register('state', {
            required: { value: true, message: 'Ingresa el Estado.' },
            pattern: {
              value: /^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/,
              message: 'El campo Estado solo acepta letras.',
            },
            maxLength: {
              value: 24,
              message: 'El campo Estado acepta como máximo 24 caracteres.',
            },
          })}
          error={errors.state}
        />
        <Input
          name={'Ciudad'}
          type={'text'}
          register={register('city', {
            pattern: {
              value: /^[A-Za-zÀ-ÖØ-öø-ÿ0-9 ]+$/,
              message: 'El campo Ciudad solo acepta letras y números.',
            },
            maxLength: {
              value: 24,
              message: 'El campo Ciudad acepta como máximo 24 caracteres.',
            },
          })}
          error={errors.city}
        />
        <Input
          name={'Dirección'}
          type={'text'}
          register={register('address', {
            pattern: {
              value: /^[A-Za-zÀ-ÖØ-öø-ÿ0-9 ]+$/,
              message: 'El campo Dirección solo acepta letras y números.',
            },
            maxLength: {
              value: 24,
              message: 'El campo Dirección acepta como máximo 24 caracteres.',
            },
          })}
          error={errors.address}
        />
        <div className='flex items-center justify-center '>
          <ButtonPurple type={'submit'}>Guardar</ButtonPurple>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
