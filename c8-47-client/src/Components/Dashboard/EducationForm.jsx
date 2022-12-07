import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../input/Input';
import { ButtonPurple } from '../buttons/ButtonPurple';
// import customAxios from './Config/interceptors';

import customAxios from '../../Helpers/customAxios';

function EducationForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const submitForm = async (formData) => {
    formData.certification = true;

    // ! VOLVER A VER agregar a este formulario una propiedad 'tag' con el id del tag
    const { data } = await customAxios.post('/education', formData);
    console.log(data);
  };

  return (
    <div className='w-[95%]'>
      <form onSubmit={handleSubmit(submitForm)}>
        <Input
          name={'Título'}
          type={'text'}
          register={register('title', {
            required: { value: true, message: 'Ingresa tu Título.' },
            maxLength: {
              value: 64,
              message: 'El campo Título acepta como máximo 64 caracteres.',
            },
          })}
          error={errors.title}
        />
        <Input
          name={'Institución'}
          type={'text'}
          register={register('institution', {
            required: { value: true, message: 'Ingresa tu Institución.' },
            maxLength: {
              value: 64,
              message: 'El campo Institución acepta como máximo 64 caracteres.',
            },
          })}
          error={errors.institution}
        />
        <Input
          name={'Fecha de inicio'}
          type={'text'}
          register={register('start_date', {
            required: { value: true, message: 'Ingresa la fecha de inicio.' },
            maxLength: {
              value: 10,
              message: 'La fecha de inicio acepta como máximo 10 caracteres.',
            },
          })}
          error={errors.start_date}
        />
        <Input
          name={'Fecha de finalización'}
          type={'text'}
          register={register('end_date', {
            required: {
              value: true,
              message: 'Ingresa la fecha de finalización.',
            },
            maxLength: {
              value: 10,
              message:
                'La fecha de finalización acepta como máximo 10 caracteres.',
            },
          })}
          error={errors.end_date}
        />
        <Input
          name={'Comentario'}
          type={'text'}
          register={register('comment', {
            maxLength: {
              value: 256,
              message: 'El comentario acepta como máximo 256 caracteres.',
            },
          })}
          error={errors.comment}
        />

        <div className='flex items-center justify-center '>
          <ButtonPurple type={'submit'}>Guardar</ButtonPurple>
        </div>
      </form>
    </div>
  );
}

export default EducationForm;
