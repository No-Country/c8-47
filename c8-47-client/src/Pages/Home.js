import React, { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Cv } from '../Components/Cv/Cv';
import foto from '../Assets/Images/foto.png';
import { AuthContext } from '../Context/AuthContext';
import { DataContext } from '../Context/DataContext';

const Home = () => {
  const { user } = useContext(AuthContext);
  const {
    state: { data },
  } = useContext(DataContext);

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
            src={foto}
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
          <Link to={'/dashboard'}>
            <div className='bg-gray-900 hover:bg-gray-800 w-[220px] h-[220px] text-white text-center grid place-content-center text-9xl cursor-pointer pb-1.5'>
              +
            </div>
          </Link>
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
