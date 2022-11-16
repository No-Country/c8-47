import React from 'react';
import Logo from '../Assets/Images/Logo.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className=' flex justify-around my-10 w-full h-24'>
      <div>
        <img src={Logo} alt='Logo' className=' w-36' />
        <span className=' font-Mon text-gray-400 text-sm border-b-2 tracking-wider'>
          Terminos y condiciones.
        </span>
      </div>

      <div className=' flex flex-col justify-center gap-2 '>
        <a href='/' className=' flex flex-row items-center gap-x-3'>
          <FaLinkedin /> <span> LinkedIn</span>
        </a>

        <a href='/' className=' flex flex-row items-center gap-x-3'>
          <FaInstagram /> <span> Instagram</span>
        </a>
      </div>
    </div>
  );
};
