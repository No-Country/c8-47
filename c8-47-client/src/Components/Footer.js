import React from 'react';
import Logo from '../Assets/Images/Logo.png';
import LogoNegativo from '../Assets/Images/Logo_negativo.png'
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { DarkMode } from './darkmode/DarkMode';
import { useLocation } from 'react-router-dom'
import { routes } from '../Config/routes'




export const Footer = () => {
  const { pathname } = useLocation();

  if (pathname === `/${routes.dashboard}`) return null;

  return (
    <footer className=' dark:text-white flex justify-around item-center my-12 w-full h-36 dark:bg-bgDarkMode mb-0 pb-8'>
      <div className=' flex flex-col'>
        <img src={LogoNegativo} alt='Logo' className=' hidden dark:block w-36' />
        <img src={Logo} alt='Logo' className=' dark:hidden w-36' />
        
        <div className=' font-Mon text-gray-400 text-sm border-b-2 tracking-wider'>
          Terminos y condiciones.
        </div>
      </div>

      <div className=' flex flex-col justify-center gap-2 '>
        <a href='/' className=' flex flex-row items-center gap-x-3'>
          <FaLinkedin /> <span className=' dark:visited:text-borderDarkMode'> LinkedIn</span>
        </a>

        <a href='/' className=' flex flex-row items-center gap-x-3'>
          <FaInstagram /> <span className=' dark:visited:text-borderDarkMode'> Instagram</span>
        </a>
        <DarkMode>Boton
        </DarkMode>
      </div>
    </footer>
  );
};
