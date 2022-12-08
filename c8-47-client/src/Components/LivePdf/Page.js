import React, { useContext } from 'react';
import { DataContext } from '../../Context/DataContext';

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
    {skills?.map((skill) => (
      <p key={skill.name}>{skill.name}</p>
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
          {data?.personal?.name}
        </div>
        <div className='uppercase text-2xl'>
          {data && data.presentations && data?.presentations?.title}
        </div>
        <hr className='text-black bg-black h-1 mt-2'></hr>
      </div>
      <div className='w-full flex mt-2 mr-4'>
        <div className='w-4/12 flex flex-col'>
          <div className='w-full'>
            <img
              className='h-44 w-full object-cover object-top'
              src={data?.image_url}
              alt='curriculumn image'
            ></img>
          </div>
          <div className='w-full mt-2'>
            <Title>{'Contacto'}</Title>
            <Contact type='email' contact={data?.personal?.email} key='1' />
            <Contact type='telefono' contact={data?.personal?.phone} key='2' />
            <Contact type='telefono' contact={data?.personal?.birth} key='5' />

            <Contact type='linkedin' contact='pablopastorino' key='3' />
            <Contact type='github' contact='pablo-pastorino' key='4' />
          </div>
          <div className='w-full mt-2'>
            <Title>{'Educación'}</Title>
            {data?.education
              ?.filter((ed) => ed.certification === false)
              .map((ed) => (
                <Education
                  title={ed.title}
                  organization={ed.institution}
                  date={`${ed.start_date} - ${ed.end_date}`}
                  key={ed.title}
                />
              ))}
          </div>
          <div className='w-full mt-2'>
            <Title>{'Skills'}</Title>
            <Skills skills={data?.skills} />
          </div>
          <div className='w-full mt-2'>
            <Title>{'Certificaciones'}</Title>
            {data?.education
              ?.filter((ed) => ed.certification === true)
              .map((ed) => (
                <Education
                  title={ed.title}
                  organization={ed.institution}
                  date={ed.end_date}
                  key={ed.title}
                />
              ))}
          </div>
          <div className='w-full mt-2'>
            <Title>{'Idiomas'}</Title>
            {data?.languages?.map((lang) => (
              <Language
                language={lang.language}
                level={lang.level}
                key={lang.language}
              />
            ))}
          </div>
        </div>
        <div className='w-8/12 ml-2 flex flex-col'>
          <div>
            <Title>{'Perfil'}</Title>
            <div>{data && data.presentations && data.presentations?.about}</div>
          </div>
          <div className='mt-2'>
            <Title>{'Experiencia'}</Title>
            {data?.experience
              ?.filter((e) => e.main_job === true)
              .map((exp) => (
                <Experience
                  title={exp.title}
                  organization={exp.organization}
                  date={`${exp.start_date} - ${exp.end_date}`}
                  tasks={exp.tasks}
                  key={exp._id}
                />
              ))}
          </div>
          <div className='mt-2'>
            <Title>{'Otras Experiencias'}</Title>
            {data?.experience
              ?.filter((e) => e.main_job === false)
              .map((exp) => (
                <Experience
                  title={exp.title}
                  organization={exp.organization}
                  date={`${exp.start_date} - ${exp.end_date}`}
                  tasks={exp.tasks}
                  key={exp._id}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
