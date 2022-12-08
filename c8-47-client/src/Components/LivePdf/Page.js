import React, { useContext } from 'react';
import { DataContext } from '../../Context/DataContext';

/* ---------------------------------- Mocks --------------------------------- */

const imgSrc =
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60';

const mockTasks = [
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, qui.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi provident impedit repudiandae natus!',
  'ipsum dolor sit amet consectetur adipisicing elit. Unde, modi oloremque error reprehenderit asperiores repellat.Lorem',
];

const mockSills = [
  'uno',
  'dos',
  'otra skill',
  'otra más',
  'muchas skills',
  'cuántas',
  'esta también',
  'y esta por las',
  'así suma',
];

/* -------------------------------------------------------------------------- */

const Title = ({ children }) => (
  <div className='text-2xl uppercase font-extrabold'>{children}</div>
);

const Experience = ({ title, organization, date, tasks }) => {
  return (
    <div>
      <div className='flex justify-between'>
        <p className='text-lg font-semibold'>{`${title} | ${organization}`}</p>
        <p>{date}</p>
      </div>
      <ul className='list-disc list-inside'>
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

const Contact = ({ type, contact }) => (
  <div className='flex justify-between'>
    <p className='capitalize'>{type}</p>
    <p className='font-semibold'>{contact}</p>
  </div>
);

const Education = ({ title, organization, date }) => (
  <div className='flex justify-between'>
    <div>
      <p className='capitalize font-semibold'>{title}</p>
      <p>{organization}</p>
    </div>
    <p>{date}</p>
  </div>
);

const Skills = ({ skills }) => (
  <div className='w-full grid grid-cols-2'>
    {skills.map((skill) => (
      <p key={skill}>{skill}</p>
    ))}
  </div>
);

const Language = ({ language, level }) => (
  <div className='flex justify-between'>
    <p className='capitalize font-semibold'>{language}</p>
    <p className='capitalize'>{level}</p>
  </div>
);

const Page = () => {
  const {
    state: { data },
  } = useContext(DataContext);
  console.log('data', data);
  return (
    <div
      className='shadow-xl m-4 w-full h-full p-8 overflow-y-scroll font-medium'
      style={{ width: '21cm', minHeight: '29.7cm' }}
      size='A4'
    >
      <div className='w-full mb-4'>
        <div className='text-4xl font-extrabold uppercase'>
          {data.personal.name}
        </div>
        <div className='uppercase text-2xl'>{data.presentations[0].title}</div>
        <hr className='text-black bg-black h-1 mt-2'></hr>
      </div>
      <div className='w-full flex mt-2 mr-4'>
        <div className='w-4/12 flex flex-col'>
          <div className='w-full'>
            <img
              className='h-44 w-full object-cover object-top'
              src={imgSrc}
              alt='curriculumn image'
            ></img>
          </div>
          <div className='w-full mt-2'>
            <Title>{'Contacto'}</Title>
            <Contact type='email' contact='miemail@mail.com' key='1' />
            <Contact type='telefono' contact='1234567' key='2' />
            <Contact type='linkedin' contact='pablopastorino' key='3' />
            <Contact type='github' contact='pablo-pastorino' key='4' />
          </div>
          <div className='w-full mt-2'>
            <Title>{'Educación'}</Title>
            <Education
              title='Professional Developer'
              organization={'Digital House'}
              date='8/2022'
              key='3'
            />
            <Education
              title='Experto Programador'
              organization={'Universidad Tecnológica Nacional'}
              date='8/2020'
              key='2'
            />
            <Education
              title='Contador Público'
              organization={'Universidad Nacional del Sur'}
              date='8/2015'
              key='1'
            />
          </div>
          <div className='w-full mt-2'>
            <Title>{'Skills'}</Title>
            <Skills skills={mockSills} />
          </div>
          <div className='w-full mt-2'>
            <Title>{'Certificaciones'}</Title>
            <Education
              title='Digital Ad Expert'
              organization={'Digital Ad Degree'}
              date='8/2022'
              key='3'
            />
            <Education
              title='Scrum Fundamentals'
              organization={'Scrum Organization'}
              date='8/2020'
              key='2'
            />
            <Education
              title='Otra'
              organization={'Universidad Nacional del Sur'}
              date='8/2015'
              key='1'
            />
          </div>
          <div className='w-full mt-2'>
            <Title>{'Idiomas'}</Title>
            <Language language={'inglés'} level='Bueno' key='1' />
            <Language language={'francés'} level='Regular' key='2' />

            <Language language={'alemán'} level='Muy Bueno' key='3' />
          </div>
        </div>
        <div className='w-8/12 ml-2 flex flex-col'>
          <div>
            <Title>{'Perfil'}</Title>
            <div>{data.presentations[0].about}</div>
          </div>
          <div className='mt-2'>
            <Title>{'Experiencia'}</Title>
            <Experience
              title={'Trabajo'}
              organization={'Organizacion'}
              date={'12/2022'}
              key={1}
              tasks={mockTasks}
            />
            <Experience
              title={'Trabajo'}
              organization={'Organizacion'}
              date={'12/2022'}
              key={2}
              tasks={mockTasks}
            />
            <Experience
              title={'Trabajo'}
              organization={'Organizacion'}
              date={'12/2022'}
              key={3}
              tasks={mockTasks}
            />
          </div>
          <div className='mt-2'>
            <Title>{'Otras Experiencias'}</Title>
            <Experience
              title={'Trabajo'}
              organization={'Organizacion'}
              date={'12/2022'}
              key={4}
              tasks={mockTasks}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
