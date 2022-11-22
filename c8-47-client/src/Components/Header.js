import React, { useState } from 'react';
import Logo from '../Assets/Images/Logo.png';
import LogoNegativo from '../Assets/Images/Logo_negativo.png';
import { FaRegWindowClose } from 'react-icons/fa';
import { FaList } from 'react-icons/fa';
import { ButtonPurple } from './buttons/ButtonPurple';
import { ButtonGray } from './buttons/ButtonGray';

export const Header = () => {
  const Links = [
    { name: 'Prueba Cevetae', link: '/' },
    { name: 'Iniciar sesion', link: '/' },
  ];

  const linkRender = Links.map((link) => (
    <li key={link.name} className='md:ml-8 text-lg md:my-0 my-7 '>
      <a
        href={link.link}
        //className='font-Mon text-textColor border-transparent	transition-all duration-500 py-2 px-3 md:px-3 lg:px6 rounded hover:border-textColor focus:bg-btnHoverG focus:border-btnHoverG hover:border border disabled:text-btnDisable'
      >
        <ButtonGray>{link.name}</ButtonGray>
      </a>
    </li>
  ));
  const [open, setOpen] = useState(false);
  return (
    <div className=' dark:bg-bgDarkMode shadow-md w-full fixed top-0 left-0 '>
      <div className=' dark:bg-bgDarkMode md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div
          className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-textColor'
        >
                  <img src={LogoNegativo} alt='Logo' className=' hidden dark:block w-36' />
                  <img src={Logo} alt='Logo' className=' dark:hidden w-36' />
        
        </div>

        <div
          onClick={() => setOpen(!open)}
          className={
            (open ? 'hidden' : '') +
            ' text-3xl absolute right-8 top-6 cursor-pointer md:hidden'
          }
        >
          <FaList className=' dark:text-white' />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className={
            (open ? '' : 'hidden') +
            ' text-3xl absolute right-8 top-6 cursor-pointer md:hidden'
          }
        >
          <FaRegWindowClose className=' dark:text-white' />
        </div>

        <ul
          className={` dark:bg-bgDarkMode md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-400 ease-in ${
            open ? 'top-20 ' : 'top-[-490px]'
          }`}
        >
          {linkRender}
          <ButtonPurple>Registrarse</ButtonPurple>
        </ul>
      </div>
    </div>
  );
};
