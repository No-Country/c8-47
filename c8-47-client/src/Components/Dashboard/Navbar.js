import React, { useState } from 'react';
import Forms from './Forms';
import Icon from './Icon';
// import Input from './Input';

const Navbar = ({ viewPDF }) => {
  const items = {
    profile: 'Perfil',
    location: 'Ubicación',
    socials: 'Redes Sociales',
    work: 'Experiencia',
    other: 'Otras Experiencias',
    education: 'Educación',
    certificates: 'Certificaciones',
    skills: 'Habilidades',
    languages: 'Idiomas',
  };

  const [selected, setSelected] = useState(items[0]);
  // const [name, setName] = useState('');

  return (
    <div
      className={`${
        !viewPDF ? 'flex' : 'hidden'
      } h-screen md:w-fit w-full rounded-r-3xl shadow-2xl md:flex`}
    >
      <div className='h-screen w-16 rounded-r-full shadow-lg overflow-hidden'>
        <ul className='h-full flex flex-col justify-evenly items-stretch rounded-r-full py-8 bg-primarioP'>
          {Object.keys(items).map((e) => (
            <li
              key={e}
              onClick={() => setSelected(e)}
              className={`flex-1 ${
                selected === e
                  ? 'bg-white text-primarioP'
                  : 'bg-primarioP text-white'
              } flex justify-center items-center font-extrabold text-xl`}
            >
              <a
                className='flex-1 h-full flex items-center justify-center'
                href={`#${e}`}
              >
                <Icon name={e} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className='h-screen md:w-96 w-full  overflow-y-scroll py-16 scroll-smooth px-2'>
        {Object.keys(items).map((e) => (
          <div
            key={e}
            id={e}
            className={`${
              selected === e ? 'bg-white' : 'bg-white'
            } flex justify-center items-center h-125 flex-col`}
          >
            <div className='flex text-2xl justify-start w-full'>
              <span className='p-2 flex items-center justify-center'>
                <Icon name={e} />
              </span>
              <h2 className='text-2xl text-left flex items-center justify-center'>
                {items[e]}
              </h2>
            </div>

            <Forms name={e} />
          </div>
        ))}
      </div>
      {/* ))} */}
    </div>
    // </div>
  );
};

export default Navbar;
