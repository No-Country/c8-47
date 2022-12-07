import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ButtonPurple } from '../buttons/ButtonPurple';
import Input from '../input/Input';

import Icon from './Icon';

import customAxios from '../../Helpers/customAxios';

function PersonalForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const submitForm = async (formData) => {
    const { name, email, birth, phone, title, about } = formData;

    const dataToPersonal = { name, email, birth, phone };
    const dataToPresentation = { title, about };

    // !VOLVER A VER unificar en una request
    const { data: personalData } = await customAxios.post(
      '/personal',
      dataToPersonal
    );

    // ! VOLVER A VER agregar a este formulario una propiedad 'tag' con el id del tag
    const { data: presentationData } = await customAxios.post(
      '/presentation',
      dataToPresentation
    );

    console.log(personalData);
    console.log(presentationData);
  };

  return (
    <div className='w-[95%]'>
      <form onSubmit={handleSubmit(submitForm)}>
        <h1>Perfil</h1>

        <Input
          name={'Nombre'}
          type={'text'}
          register={register('name', {
            required: { value: true, message: 'Ingresa tu nombre.' },
            pattern: {
              value: /^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/,
              message: 'Ingresa un nombre válido.',
            },
            minLength: {
              value: 2,
              message: 'Debe tener al menos 2 caracteres.',
            },
            maxLength: {
              value: 64,
              message: 'No debe exceder los 64 caracteres.',
            },
          })}
          error={errors.name}
        />

        <Input
          name={'Fecha de nacimiento'}
          type={'text'}
          register={register('birth', {
            maxLength: {
              value: 10,
              message: 'No debe exceder los 10 caracteres.',
            },
          })}
          error={errors.birth}
        />

        <Input
          name={'Email'}
          type={'text'}
          register={register('email', {
            required: {
              value: true,
              message: 'El campo email es requerido.',
            },
            pattern: {
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              message: 'Ingrese un email válido.',
            },
            maxLength: {
              value: 64,
              message: 'No debe exceder los 64 caracteres.',
            },
          })}
          error={errors.email}
        />

        <Input
          name={'Teléfono'}
          type={'text'}
          register={register('phone', {
            pattern: {
              value: /^[+]?[0-9]*$/,
              message: 'El campo Teléfono solo acepta números.',
            },
            minLength: {
              value: 8,
              message: 'El campo Teléfono debe tener al menos 8 caracteres.',
            },
          })}
          error={errors.phone}
        />

        <Input
          name={'Título'}
          type={'text'}
          register={register('title', {
            required: {
              value: true,
              message: 'El campo título es requerido.',
            },
            minLength: {
              value: 64,
              message: 'El campo título debe tener al menos 64 caracteres.',
            },
          })}
          error={errors.title}
        />

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

        <div className='flex items-center justify-center '>
          <ButtonPurple type={'submit'}>Guardar</ButtonPurple>
        </div>
      </form>
    </div>
  );
}

export default PersonalForm;
