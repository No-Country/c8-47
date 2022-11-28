import React from 'react';
import Logo from '../Assets/Images/Logo.png';
import LogoNegativo from '../Assets/Images/Logo_negativo.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { DarkMode } from './darkmode/DarkMode';

export const Footer = () => {
  return (
    <footer className=' font-Mon dark:text-white  flex flex-col md:flex-row justify-around item-center my-12 w-full h-72 md:h-36 dark:bg-bgDarkMode mb-0 pb-10 p-5'>
      <div className=' flex flex-col'>
        <img
          src={LogoNegativo}
          alt='Logo'
          className=' hidden dark:block w-36'
        />
        <img src={Logo} alt='Logo' className=' dark:hidden w-36' />

        <div className=' text-sm   pt-6 md:pt-2'>
          <span className=' dark:text-white dark:border-white border-b-2 text-textColor border-textColor'>
            Terminos y condiciones.
          </span>
        </div>
      </div>

      <div className=' flex flex-col justify-center gap-3 '>
        <a
          href='/'
          className=' dark:hover:text-borderDarkmode dark:text-white hover:text-primarioH flex flex-row items-center gap-x-3 text-sm '
        >
          <FaLinkedin className=' text-xl' /> <span> LinkedIn</span>
        </a>

        <a
          href='/'
          className='  dark:hover:text-borderDarkmode dark:text-white hover:text-primarioH   flex flex-row items-center gap-x-3 text-sm '
        >
          <FaInstagram className=' text-xl' /> <span> Instagram</span>
        </a>
        <DarkMode>Boton</DarkMode>
      </div>
    </footer>
  );
};
