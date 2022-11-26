import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import login from '../Assets/Images/login.jpg';
import Input from './input/Input';
import ButtonLinkedin from './buttons/ButtonLinkedin';
import ButtonGoogle from './buttons/ButtonGoogle';
import { MdClose } from 'react-icons/md';
const Register = ({ isVisible, onClose, onSwitch }) => {
  const {
    register,
    watch,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (form) => {
    try {
      const { data } = await axios.post(
        'http://localhost:4000/auth/signup',
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
    <>
      <div className='fixed inset-0 bg-black  bg-opacity-25 backdrop-blur-sm   h-[100%] w-[100%] overflow-y-auto  '>
        <div className='dark:bg-bgDarkMode grid grid-cols-1 md:grid-cols-2 mr-[15%] ml-[15%] mt-[4.5%] mb-[4.5%]  h-fit shadow-lg shadow-gray-600 sm:max-w-[700px] bg-[#FFFFFF] rounded-[10px]'>
          <div className='mr-14 ml-14 mt-[24px] mb-[24px] h-[100%]'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col  '>
              <Input
                name={'Nombres'}
                type={'text'}
                register={register('first_name', {
                  required: {
                    value: true,
                    message: 'El campo nombres es requerido.',
                  },
                  pattern: {
                    value: /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/,
                    message: 'Ingresa un nombre válido.',
                  },
                  minLength: {
                    value: 2,
                    message: 'Debe tener al menos 2 caracteres.',
                  },
                  maxLength: {
                    value: 24,
                    message: 'No debe exceder los 24 caracteres.',
                  },
                })}
                error={errors.first_name}
              />
              <Input
                name={'Apellidos'}
                type={'text'}
                register={register('last_name', {
                  required: {
                    value: true,
                    message: 'El campo apellidos es requerido.',
                  },
                  pattern: {
                    value: /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/,
                    message: 'Ingrese un apellido válido.',
                  },
                  minLength: {
                    value: 2,
                    message: 'Debe tener al menos 2 caracteres.',
                  },
                  maxLength: {
                    value: 24,
                    message: 'No debe exceder los 24 caracteres.',
                  },
                })}
                error={errors.last_name}
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
              <Input
                name={'Confirma la contraseña'}
                type={'text'}
                register={register('confirm_password', {
                  required: {
                    value: true,
                    message: 'Confirme la contraseña',
                  },
                  validate: {
                    value: (val) => {
                      if (watch('password') != val) {
                        return 'Your passwords do not match';
                      }
                    },
                    message: 'Las contraseñas no coinciden',
                  },
                })}
                error={errors.confirm_password}
              />
              <div className='flex flex-col gap-[17px] mb-[18px] mt-[10px]'>
                <button
                  type='submit'
                  className='dark:bg-borderDarkMode dark:hover:bg-bgHoverDarkMode dark:text-bgDarkMode dark:focus:bg-bgPushDarkMode w-[100%]  h-[60px] font-Mon text-lg font-bold bg-primario text-white py-2 px-6 rounded-[10px]  hover:bg-primarioH duration-500 focus:bg-primarioP	disabled:bg-primarioD'
                >
                  Regístrate
                </button>
                <ButtonLinkedin name={'Registrarme con LinkedIn'} />
                <ButtonGoogle name={'Registrarme con Google'} />
              </div>
              <span className='dark:text-[#FFFFFF] font-Mon text-center text-[14px] mb-[10px]'>
                ¿Ya tienes cuenta?{' '}
                <button
                  onClick={() => onSwitch()}
                  className='dark:text-borderDarkMode dark:hover:text-bgPushDarkMode font-[800]   text-primario hover:text-primarioH'
                >
                  Inicia sesión
                </button>
              </span>
              <span className='dark:text-[#FFFFFF] font-Mon text-[14px] text-center'>
                Al registrarme declaro que he leído y aceptado los{' '}
                <Link
                  to='/'
                  className='dark:hover:text-bgPushDarkMode underline hover:text-primarioH'
                >
                  Términos y Condiciones de Cevetae.
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
    </>
  );
};

export default Register;
