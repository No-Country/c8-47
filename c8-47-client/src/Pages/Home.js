import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Outlet, useNavigate } from 'react-router-dom';

import { Cv } from '../Components/Cv/Cv';
import foto from '../Assets/Images/foto.png';
import { AuthContext } from '../Context/AuthContext';
import { DataContext } from '../Context/DataContext';

import './Home.css';
import customAxios from '../Helpers/customAxios';
import { TagContext } from '../Context/TagContext';

const Home = () => {
  const [showInput, setShowInput] = useState(false);
  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(TagContext);
  const {
    state: { data },
  } = useContext(DataContext);
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleShowInput = () => {
    if (!showInput) setShowInput(true);
  };

  const submitForm = async (formData) => {
    try {
      const { data } = await customAxios.post('/tag', formData);

      if (data.tag._id) dispatch({ type: 'SELECT', payload: data.tag._id });

      navigate('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  const styling = {
    display: 'grid',
    gridGap: '1.5rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
  };

  return (
    <div className=' container mx-auto w-[90%]  pt-32 gap-2 grid'>
      <div className='flex justify-start items-center gap-4 pb-5'>
        <div className=' '>
          <img
            src={data?.image_url}
            alt='foto'
            className=' rounded-full object-cover w-20 h-20'
          />
        </div>
        <h1 className=' text-4xl font-Mon font-bold dark:text-white'>
          Hola {data?.first_name}!
        </h1>
      </div>
      <div className=' w-full md:grid-cols-4	' style={styling}>
        <div className=''>
          <div
            className='bg-gray-900 hover:bg-gray-800 w-[220px] h-[220px] text-white text-center grid place-content-center text-9xl cursor-pointer pb-1.5'
            onClick={handleShowInput}
          >
            {showInput ? (
              <form onSubmit={handleSubmit(submitForm)} className='tag-form'>
                <input
                  type='text'
                  autoComplete='off'
                  className='tag-input'
                  {...register('name', {
                    required: true,
                    maxLength: 32,
                  })}
                />

                {!errors.name && <p className='g-hidden-placeholder'>hidden</p>}
                {errors.name?.type === 'required' && (
                  <p className='g-error-input '>Ingrese el nombre</p>
                )}
                {errors.name?.type === 'maxLength' && (
                  <p className='g-error-input '>
                    El nombre acepta como máximo 32 caracteres
                  </p>
                )}

                <div className='tag-buttons-container'>
                  <input
                    type='button'
                    value='Cancelar'
                    onClick={() => setShowInput(false)}
                  />
                  <input type='submit' value='Crear' />
                </div>
              </form>
            ) : (
              <span>+</span>
            )}
          </div>
          <p className='mt-1 text-justify'>Crear un nuevo CV</p>
        </div>
        <Cv key={'1'} />
        <Cv key={'2'} />
        <Cv key={'3'} />
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
