import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { ButtonPurple } from '../buttons/ButtonPurple';
import Input from '../input/Input';

import customAxios from '../../Helpers/customAxios';
import { DataContext } from '../../Context/DataContext';

function PersonalForm() {
  const result = useContext(DataContext);
  console.log(result.state.data.personal);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: result?.state?.data?.personal?.name,
      birth: result?.state?.data?.personal?.birth,
      email: result?.state?.data?.personal?.email,
      phone: result?.state?.data?.personal?.phone,
      title: '', // result?.state?.data?.presentations[0].title,
      about: '', // result?.state?.data?.presentations[0].about,
    },
  });

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
  };

  return (
    <div className='w-[95%]'>
      <form onSubmit={handleSubmit(submitForm)}>
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
              value: 4,
              message: 'El campo título debe tener al menos 64 caracteres.',
            },
          })}
          error={errors.title}
        />
        <div className='h-[160px] flex flex-col'>
          <label className='dark:text-[#FFFFFF] font-Mon text-[16px] ml-[4px]'>
            Acerca de mí
          </label>

          <textarea
            className={`dark:bg-bgDarkMode dark:text-[#FFFFFF] dark:hover:bg-[#353535] h-[100px]  font-Mon  text-lg text text-textColor pt-[9px] pb-[9px] pl-[12px] pr-[12px] mt-[1px] mb-[1px] leading-none rounded-[10px] outline-0 ${
              errors.about
                ? 'border border-errorColor dark:border-[#FF6161]'
                : 'border border-textColor dark:border-[#FFFFFF]'
            }`}
            {...register('about', {
              required: true,
              maxLength: 512,
            })}
          />

          {errors.about?.type === 'required' && (
            <span className='font-Mon ml-[4px] text-[14px] leading-none text-errorColor dark:text-[#FF6161]'>
              Completa el campo Acerca de mi
            </span>
          )}
          {errors.about?.type === 'maxLength' && (
            <span className='font-Mon ml-[4px] text-[14px] leading-none text-errorColor dark:text-[#FF6161]'>
              El campo Acerca de mi acepta como máximo 512 caracteres
            </span>
          )}
        </div>

        <div className='flex items-center justify-center '>
          <ButtonPurple type={'submit'}>Guardar</ButtonPurple>
        </div>
      </form>
    </div>
  );
}

export default PersonalForm;
