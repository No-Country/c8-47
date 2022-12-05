import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../input/Input';
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
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        {/* <h1>Perfil</h1> */}
        <Input
          name={'Nombre'}
          type={'text'}
          register={register('first_name', {
            required: { value: true, message: 'Ingresa tu nombre.' },
            maxLength: {
              value: 64,
              message: 'El campo Nombre acepta como máximo 64 caracteres.',
            },
          })}
          error={errors.first_name}
        />
        <Input
          name={'Apellido'}
          type={'text'}
          register={register('last_name', {
            required: { value: true, message: 'Ingresa tu apellido.' },
            maxLength: {
              value: 64,
              message: 'El campo Apellido acepta como máximo 64 caracteres.',
            },
          })}
          error={errors.last_name}
        />

        <button type='submit'>Guardar</button>
      </form>
    </div>
  );
}

export default ProfileForm;
