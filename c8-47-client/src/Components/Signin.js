import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Input from './input/Input';
import login from '../Assets/Images/login.jpg';
import ButtonLinkedin from './buttons/ButtonLinkedin';
import ButtonGoogle from './buttons/ButtonGoogle';
import { MdClose } from 'react-icons/md';
const Signin = ({ isVisible, onClose }) => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (form) => {
    try {
      const { data } = await axios.post(
        'http://localhost:4000/auth/login',
        form
      );
      console.log(data);
      reset();
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    reset();
  }, [isVisible]);
  if (!isVisible) return null;
  return (
    <div className='fixed inset-0 bg-black  bg-opacity-25 backdrop-blur-sm flex justify-center items-center h-[100%] w-[100%] overflow-y-auto pt-[2.5rem] pb-[2.5rem]'>
      <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-fit shadow-lg shadow-gray-600 sm:max-w-[900px]  bg-[#FFFFFF] rounded-[10px]'>
        <div className='mr-14 ml-14 mt-[24px] mb-[24px] h-[100%]'>
          <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
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
              name={'Contraseña'}
              type={'text'}
              register={register('password', {
                required: {
                  value: true,
                  message: 'El campo contraseña es requerido.',
                },
                pattern: {
                  value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
                  message:
                    'La contraseña debe tener mínimo 8 caracteres, una mayúscula, una minúscula y un número.',
                },
              })}
              error={errors.password}
            />

            <span className='font-Mon  text-[14px] mb-[10px]'>
              <Link
                to='/resetPassword'
                className='underline hover:text-primarioH'
              >
                ¿Has olvidado tu contraseña?
              </Link>
            </span>
            <div className='flex flex-col gap-[17px] mb-[18px] mt-[10px]'>
              <button
                type='submit'
                className='w-[100%]  h-[60px] font-Mon text-lg font-bold bg-primario text-white py-2 px-6 rounded-[10px]  hover:bg-primarioH duration-500 focus:bg-primarioP	disabled:bg-primarioD'
              >
                Iniciar Sesión
              </button>
              <ButtonLinkedin name={'Registrarme con LinkedIn'} />
              <ButtonGoogle name={'Registrarme con Google'} />
            </div>
            <span className='font-Mon text-center text-[14px] mb-[10px]'>
              ¿No tienes cuenta?{' '}
              <Link
                to='/registro'
                className='font-[800] text-primario hover:text-primarioH'
              >
                Regístrate
              </Link>
            </span>
          </form>
        </div>
        <div className='relative w-full  hidden md:block '>
          <button
            className='absolute top-[0px] right-[0px] z-1 text-[#252525] text-[2rem] h-[40px] w-[40px] '
            onClick={() => onClose()}
          >
            <MdClose style={{ width: '100%', height: '100%' }} />
          </button>
          <img
            className='w-full h-full rounded-r-[10px] '
            src={login}
            alt='login'
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
