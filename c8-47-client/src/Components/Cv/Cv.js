import React from 'react';
import { BsBoxArrowInUpRight } from 'react-icons/bs';
import { HiOutlineDuplicate } from 'react-icons/hi';
import { HiOutlineTrash } from 'react-icons/hi';
import { TbFileArrowRight } from 'react-icons/tb';
import curri from '../../Assets/Images/curriculum.png';
import { InfoCv } from './InfoCv';

const parts = [
  {
    title: 'Abrir en otra carpeta',
    icon: <BsBoxArrowInUpRight />,
  },
  {
    title: 'Duplicar curriculum',
    icon: <HiOutlineDuplicate />,
  },
  {
    title: 'Borrar curriculum',
    icon: <HiOutlineTrash />,
  },
  {
    title: 'Ver datos completos',
    icon: <TbFileArrowRight />,
  },
];

export const Cv = () => {
  return (
    <div className='  grid w-[220px] gap-2'>
      <img src={curri} alt='curri' className=' w-[220px] h-[220px] hidden' />
      <div
        className='   w-[220px] h-[220px] bg-blend-overlay grid grid-rows-2 grid-cols-2 hover:bg-gray-700 gap-0.5 divide-y divide-x  bg-center bg-no-repeat bg-cover'
        style={{ backgroundImage: `url(${curri})` }}
      >
        {parts.map((part, i) => (
          <div
            key={part.title}
            className=' hover:bg-gray-600 flex items-center justify-center flex-col text-center gap-2 cursor-pointer text-white'
          >
            {part.icon}
            <p>{part.title}</p>
          </div>
        ))}
      </div>
      <InfoCv />
    </div>
  );
};
