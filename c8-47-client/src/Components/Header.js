import React, { useState } from 'react';
import Logo from '../Assets/Images/Logo.png';
import LogoNegativo from '../Assets/Images/Logo_negativo.png';
import { AiOutlineClose } from 'react-icons/ai';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { ButtonPurple } from './buttons/ButtonPurple';
import { ButtonGray } from './buttons/ButtonGray';
import { DarkMode } from '../Components/darkmode/DarkMode';
import { NavLink } from 'react-router-dom';

export const Header = ({
  onClickRegister,
  onClickSignin,
  onClose,

  actionRegister,
}) => {
  const Links = [
    { name: 'Prueba Cevetae', link: '/' },
    // { name: 'Iniciar sesion', link: '/' },
  ];

  const linkRender = Links.map((link) => (
    <li key={link.name} className='md:ml-4 md:my-0 my-7 '>
      {/* <a

        href={link.link}
        //className='font-Mon text-textColor border-transparent	transition-all duration-500 py-2 px-3 md:px-3 lg:px6 rounded hover:border-textColor focus:bg-btnHoverG focus:border-btnHoverG hover:border border disabled:text-btnDisable'
      > */}
      <ButtonGray>{link.name}</ButtonGray>
      {/* </a> */}
    </li>
  ));
  const [open, setOpen] = useState(false);

  return (
    <div className=' bg-white  dark:bg-bgDarkMode shadow-md w-full fixed top-0 left-0 grid place-items-center md:block'>
      <div className='  dark:bg-bgDarkMode md:flex md:items-center md:justify-between bg-white py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-textColor'>
          <img
            src={LogoNegativo}
            alt='Logo'
            className=' hidden dark:block w-36'
          />
          <img src={Logo} alt='Logo' className=' dark:hidden w-36' />
        </div>
        <div className='menuBurger absolute left-10 top-3 md:static	'>
          <div
            onClick={() => setOpen(true)}
            className={
              (open || actionRegister ? 'hidden' : '') +
              ' text-3xl absolute left-10 top-6 cursor-pointer md:hidden'
            }
          >
            <AiOutlineMenu className=' dark:text-white' />
          </div>

          <div
            onClick={() => {
              setOpen(false);
              onClose();
            }}
            className={
              (open || actionRegister ? '' : 'hidden') +
              ' text-3xl absolute left-10 top-6 cursor-pointer md:hidden'
            }
          >
            <AiOutlineClose className=' dark:text-white' />
          </div>
        </div>

        <ul
          className={`  dark:text-white dark:bg-bgDarkMode md:flex md:items-center md:pb-0 pb-40 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-400 ease-in ${
            open ? 'left-21 ' : 'left-[-800px]'
          }`}
        >
          <div className=' flex flex-col gap-y-7 md:block pt-5 md:pt-2'>
            <span className=' md:hidden flex items-center gap-3 hover:bg-btnHoverG px-3 py-3 md:w-0 w-[90%] dark:hover:bg-bgDarkmodeHoverbtn'>
              <BsFillHouseDoorFill /> Ir al inicio
            </span>
            <div className=' md:hidden hover:bg-btnHoverG px-3 py-3 flex items-center md:w-0 w-[90%] dark:hover:bg-bgDarkmodeHoverbtn'>
              <DarkMode />
            </div>
          </div>
          <div className=' flex-col-reverse md:flex pt-16 md:pt-0 flex items-center justify-center md:flex-row gap-y-3'>
            {/* {linkRender} */}

            <div className='py-8 md:py-0 md:ml-4 '>
              <NavLink to='/'>
                <button className=' dark:border-white dark:hover:bg-bgDarkmodeHoverbtn dark:focus:text-white dark:hover:bgDarkmodeHoverbtn dark:disabled:text-btnDisable dark:focus:bg-bgDarkmodeHoverbtn dark:focus:border-bgDarkmodeHoverbtn dark:hover:border-white dark:text-white font-Mon text-textColor	transition-all duration-500 py-2 px-20 md:px-6  lg:px6 rounded-[10px]  hover:bg-btnHoverG focus:bg-btnHoverG focus:border-btnHoverG hover:border border-[transparent] hover:border-textColor  disabled:text-btnDisable'>
                  Prueba Cevetae
                </button>
              </NavLink>
            </div>
            <div className='py-8 md:py-0 md:ml-4 '>
              <ButtonGray onClick={onClickSignin}>Iniciar Sesión</ButtonGray>
            </div>

            <div className=' py-8 md:py-0 md:ml-4 '>
              <ButtonPurple onClick={onClickRegister}>Registrarse</ButtonPurple>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};
