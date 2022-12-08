import React, { useState, useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import Input from '../input/Input';
import ButtonTask from '../buttons/ButtonTask';
import { ButtonPurple } from '../buttons/ButtonPurple';
// import customAxios from './Config/interceptors';
import { FaTrashAlt } from 'react-icons/fa';
import customAxios from '../../Helpers/customAxios';

function ExperienceForm() {
  const [tasksQuantity, setTasksQuantity] = useState(1);

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    defaultValues: {
      tasks: [{ value: '' }],
    },
  });

  const {
    fields,
    append: appendTask,
    remove: removeTask,
    // replace,
  } = useFieldArray({
    name: 'tasks',
    control,
  });

  const handleAddTask = () => {
    const task = document.getElementById(`task_${tasksQuantity - 1}`);

    if (task.value !== '') {
      appendTask();
      setTasksQuantity(tasksQuantity + 1);
    }
  };

  const handleRemoveTask = (i) => {
    if (tasksQuantity > 1) {
      removeTask(i);
      setTasksQuantity(tasksQuantity - 1);
    }
  };

  const submitForm = async (formData) => {
    if (formData.tasks.length >= 0) {
      const tasksArray = [];

      for (const { value } of formData.tasks) {
        if (value) tasksArray.push(value);
      }

      formData.tasks = tasksArray;
    }

    formData.main_job = true;

    // ! VOLVER A VER agregar a este formulario una propiedad 'tag' con el id del tag
    const { data } = await customAxios.post('/job', formData);
    console.log(data);
  };

  return (
    <div className='w-[95%]'>
      <form onSubmit={handleSubmit(submitForm)}>
        <Input
          name={'Título'}
          type={'text'}
          register={register('title', {
            required: { value: true, message: 'Ingresa tu Título.' },
            maxLength: {
              value: 64,
              message: 'El campo Título acepta como máximo 64 caracteres.',
            },
          })}
          error={errors.title}
        />
        <Input
          name={'Organización'}
          type={'text'}
          register={register('organization', {
            required: { value: true, message: 'Ingresa la Organización.' },
            maxLength: {
              value: 64,
              message:
                'El campo Organización acepta como máximo 64 caracteres.',
            },
          })}
          error={errors.organization}
        />
        <Input
          name={'Fecha de inicio'}
          type={'text'}
          placeholder={'mm/aaaa'}
          register={register('start_date', {
            required: { value: true, message: 'Ingresa la fecha de inicio.' },
            maxLength: {
              value: 10,
              message: 'La fecha de inicio acepta como máximo 10 caracteres.',
            },
          })}
          error={errors.start_date}
        />
        <Input
          name={'Fecha de finalización'}
          placeholder={'mm/aaaa'}
          type={'text'}
          register={register('end_date', {
            required: {
              value: true,
              message: 'Ingresa la fecha de finalización.',
            },
            maxLength: {
              value: 10,
              message:
                'La fecha de finalización acepta como máximo 10 caracteres.',
            },
          })}
          error={errors.end_date}
        />
        <label className='dark:text-[#FFFFFF] font-Mon text-[16px] ml-[4px]'>
          Tareas
        </label>
        {React.Children.toArray(
          fields.map((_, i) => (
            <div className='h-[85px] flex flex-col'>
              <div className='relative flex items-center gap-3'>
                <input
                  className={`dark:bg-bgDarkMode w-full dark:text-[#FFFFFF] dark:hover:bg-[#353535] h-[48px]  font-Mon  text-lg text text-textColor pt-[9px] pb-[9px] pl-[12px] pr-[35px] mt-[1px] mb-[1px] rounded-[10px] outline-0 ${
                    errors.tasks
                      ? 'border border-errorColor dark:border-[#FF6161]'
                      : 'border border-textColor dark:border-[#FFFFFF]'
                  }`}
                  type='text'
                  autoComplete='off'
                  id={`task_${i}`}
                  {...register(`tasks.${i}.value`, {
                    maxLength: 128,
                  })}
                />

                {tasksQuantity > 1 && (
                  <span
                    className='absolute top-[1.2rem] right-[0.8rem] cursor-pointer'
                    onClick={() => handleRemoveTask(i)}
                  >
                    <FaTrashAlt
                      style={{
                        color: '#3D3D3D',
                      }}
                    />
                  </span>
                )}
              </div>

              {errors.tasks?.[i]?.value.type === 'maxLength' && (
                <span className='font-Mon ml-[4px] text-[14px] leading-none text-errorColor dark:text-[#FF6161]'>
                  Tarea acepta como máximo 128 caracteres
                </span>
              )}
            </div>
          ))
        )}
        <div>
          <ButtonTask
            type={'button'}
            onClick={handleAddTask}
            name={'Agregar tarea'}
          />
        </div>

        <div className='flex items-center justify-center mt-[35px]'>
          <ButtonPurple type={'submit'}>Guardar</ButtonPurple>
        </div>
      </form>
    </div>
  );
}

export default ExperienceForm;
