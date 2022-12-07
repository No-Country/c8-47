import React from 'react';
import { ButtonPurple } from '../buttons/ButtonPurple';
import bannerImg from "../../Assets/Images/Ilus_principal.svg"

export const Banner = ({ onView }) => {
  return (
    <div className=' dark:text-white flex flex-col items-center	gap-12 pt-32 pb-32 '>
      <h1 className=' font-Mon font-semibold text-2xl md:text-3xl '>
        A que nos postulamos hoy?
      </h1>
      <div className=' dark:text-black flex flex-col justify-center items-center h-72 w-4/5 md:w-2/4   '>
        <img src={bannerImg} alt="banner" />
      </div>
      <div className=' md:hidden'>
        <ButtonPurple onClick={onView}>Registrate </ButtonPurple>
      </div>
      <p className=' w-4/5 md:max-w-xl text-base text-center	'>
        Te ayudamos a crear un CV en base a tus preferencias, para que puedas
        destacar en tu puesto ideal y te conviertas en el candidato que todos
        buscan.
      </p>
    </div>
  );
};
