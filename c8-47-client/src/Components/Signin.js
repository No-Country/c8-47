import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Input from './input/Input';
import login from '../Assets/Images/login.jpg';
import ButtonLinkedin from './buttons/ButtonLinkedin';
import ButtonGoogle from './buttons/ButtonGoogle';
import { MdClose } from 'react-icons/md';
const Signin = ({ isVisible, onClose, onSwitch }) => {
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
    <div className='fixed md:inset-0 top-[80px] bottom-[0] left-[0] right-[0] md:bg-black bg-[#FFFFFF] md:bg-opacity-25 md:backdrop-blur-sm md:flex justify-center items-center h-[100%] w-[100%] overflow-y-auto '>
      <div className='m-[0] grid grid-cols-1 md:grid-cols-2 md:mr-[15%] md:ml-[15%] h-fit md:shadow-lg md:shadow-gray-600 sm:max-w-[900px]  bg-[#FFFFFF] rounded-[10px] dark:bg-bgDarkMode'>
        <div className='mr-7 ml-7 md:mr-14 md:ml-14 mt-[24px] mb-[24px] h-[100%]'>
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

            <span className='dark:text-[#FFFFFF] font-Mon  text-[14px] mb-[10px]'>
              <Link
                to='/resetPassword'
                className='underline hover:text-primarioH dark:hover:text-textPressDarkmode'
              >
                ¿Has olvidado tu contraseña?
              </Link>
            </span>
            <div className='flex flex-col gap-[17px] mb-[18px] mt-[10px]'>
              <button
                type='submit'
                className='dark:bg-borderDarkmode dark:hover:bg-textHoverDarkmode dark:text-bgDarkMode dark:focus:bg-textPressDarkmode bg- w-[100%]  h-[60px] font-Mon text-lg font-bold bg-primario text-white py-2 px-6 rounded-[10px]  hover:bg-primarioH duration-500 focus:bg-primarioP	disabled:bg-primarioD'
              >
                Iniciar Sesión
              </button>
              <ButtonLinkedin name={'Ingresar con LinkedIn'} />
              <ButtonGoogle name={'Ingresar con Google'} />
            </div>
            <span className='dark:text-[#FFFFFF] font-Mon text-center text-[14px] mb-[10px]'>
              ¿No tienes cuenta?{' '}
              <button
                onClick={() => onSwitch()}
                className='dark:text-borderDarkmode dark:hover:text-textHoverDarkmode font-[800] text-primario hover:text-primarioH'
              >
                Regístrate
              </button>
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
