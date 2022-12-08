import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

import login from '../Assets/Images/login.jpg';
import Input from './input/Input';
import ButtonLinkedin from './buttons/ButtonLinkedin';
import ButtonGoogle from './buttons/ButtonGoogle';
import { MdClose } from 'react-icons/md';
import useWindowSize from './Hooks/WindowSize';
import { AuthContext } from '../Context/AuthContext';
import { DataContext } from '../Context/DataContext';

const Register = ({ isVisible, onClose, onSwitch, viewButtons, onView }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const size = useWindowSize();
  const { dispatch } = useContext(AuthContext);
  const { dispatch: dispatchData } = useContext(DataContext);

  const {
    register,
    watch,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (form) => {
    console.log(form);
    try {
      const { data } = await axios.post(
        'http://localhost:4000/auth/signup',
        form
      );
      localStorage.setItem('cevitaeToken', data.token);

      const {
        data: { user_data },
      } = await axios.get('http://localhost:4000/user/data', {
        headers: { Authorization: `Bearer ${data.token}` },
      });

      dispatch({ type: 'LOGIN', payload: { user: data.token } });
      dispatchData({ type: 'SETDATA', payload: user_data });

      reset();
      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  const mainView = () => {
    return (
      <div className='fixed md:inset-0 top-[80px]  md:bg-black bg-[#FFFFFF] dark:bg-bgDarkMode md:bg-opacity-25 md:backdrop-blur-sm   h-[100%] w-[100%] overflow-y-auto  '>
        <div className='m-[0px]  dark:bg-bgDarkMode grid grid-cols-1 md:grid-cols-2 md:mr-[15%] md:ml-[15%] md:mt-[4.5%] md:mb-[4.5%]  h-fit md:shadow-lg md:shadow-gray-600 sm:max-w-[700px] bg-[#FFFFFF] rounded-[10px]'>
          <div className='mr-7 ml-7 md:mr-14 md:ml-14 md:mt-[24px] mt-[20%] mb-[10%]  md:mb-[24px] h-[100%]'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
              <Input
                name={'Nombres'}
                type={'text'}
                register={register('first_name', {
                  required: {
                    value: true,
                    message: 'El campo nombres es requerido.',
                  },
                  pattern: {
                    value: /^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/,
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
                    value: /^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/,
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

              <div className='relative'>
                <Input
                  name={'Contraseña'}
                  type={`${!showPassword ? 'password' : 'text'}`}
                  register={register('new_password', {
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
                  error={errors.new_password}
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute top-[2.1rem] right-[0.8rem]'
                >
                  {!showPassword ? (
                    <AiFillEye
                      style={{
                        width: '2rem',
                        height: '2rem',
                        color: 'grey',
                      }}
                    />
                  ) : (
                    <AiFillEyeInvisible
                      style={{ width: '2rem', height: '2rem', color: 'grey' }}
                    />
                  )}
                </div>
              </div>

              <div className='relative'>
                <Input
                  name={'Confirma la contraseña'}
                  type={`${!showConfirmPassword ? 'password' : 'text'}`}
                  register={register('confirm_password', {
                    required: {
                      value: true,
                      message: 'Confirme la contraseña',
                    },
                    validate: (val) =>
                      val === watch('new_password') ||
                      'Las contraseñas no coinciden.',
                  })}
                  error={errors.confirm_password}
                />
                <div
                  className='absolute top-[2.1rem] right-[0.8rem]'
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {!showConfirmPassword ? (
                    <AiFillEye
                      style={{ width: '2rem', height: '2rem', color: 'grey' }}
                    />
                  ) : (
                    <AiFillEyeInvisible
                      style={{ width: '2rem', height: '2rem', color: 'grey' }}
                    />
                  )}
                </div>
              </div>

              <div className='flex flex-col gap-[17px] mb-[18px] mt-[10px]'>
                <button
                  type='submit'
                  className='dark:bg-borderDarkmode dark:hover:bg-textHoverDarkmode dark:text-bgDarkMode dark:focus:bg-textPressDarkmode w-[100%]  h-[60px] font-Mon text-lg font-bold bg-primario text-white py-2 px-6 rounded-[10px]  hover:bg-primarioH duration-500 focus:bg-primarioP	disabled:bg-primarioD'
                >
                  Regístrate
                </button>
                <div className='hidden md:block'>
                  <ButtonGoogle name={'Registrarme con Google'} />
                </div>
                <div className='hidden md:block'>
                  <ButtonLinkedin name={'Registrarme con LinkedIn'} />
                </div>
              </div>
              <span className='dark:text-[#FFFFFF] font-Mon text-center text-[14px] mb-[10px]'>
                ¿Ya tienes cuenta?{' '}
                <button
                  onClick={() => onSwitch()}
                  className='dark:text-borderDarkmode dark:hover:text-textHoverDarkmode font-[800]   text-primario hover:text-primarioH'
                >
                  Inicia sesión
                </button>
              </span>
              <span className='dark:text-[#FFFFFF] font-Mon text-[14px] text-center'>
                Al registrarme declaro que he leído y aceptado los{' '}
                <Link
                  to='/'
                  className='dark:hover:text-textPressDarkmode underline hover:text-primarioH'
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
              className='w-full h-full rounded-r-[10px] object-cover object-left'
              src={login}
              alt='login'
            />
          </div>
        </div>
      </div>
    );
  };
  const responsiveView = () => {
    return (
      <>
        {viewButtons && (
          <div className='fixed inset-0 bg-[#FFFFFF] dark:bg-bgDarkMode top-[80px] flex flex-col justify-center md:hidden pr-7 pl-7 gap-[23px]'>
            <button
              onClick={() => onView()}
              className='dark:bg-borderDarkmode dark:hover:bg-textHoverDarkmode dark:text-bgDarkMode dark:focus:bg-textPressDarkmode w-[100%]  h-[60px] font-Mon text-lg font-bold bg-primario text-white py-2 px-6 rounded-[10px]  hover:bg-primarioH duration-500 focus:bg-primarioP	disabled:bg-primarioD'
            >
              Registrarme con email
            </button>
            <ButtonGoogle name={'Registrarme con Google'} />
            <ButtonLinkedin name={'Registrarme con LinkedIn'} />
          </div>
        )}
        {!viewButtons && mainView()}
      </>
    );
  };

  useEffect(() => {
    reset();
  }, [isVisible]);

  if (!isVisible) return null;
  if (isVisible && size.width <= 800) {
    return <>{responsiveView()}</>;
  }

  return <>{mainView()}</>;
};

export default Register;
