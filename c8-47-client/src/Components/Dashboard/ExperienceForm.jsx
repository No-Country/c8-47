import React, { useState, useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import Input from '../input/Input';
import { ButtonPurple } from '../buttons/ButtonPurple';
// import customAxios from './Config/interceptors';

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

        <h2>Tareas</h2>

        {React.Children.toArray(
          fields.map((_, i) => (
            <div>
              <input
                type='text'
                autoComplete='off'
                id={`task_${i}`}
                {...register(`tasks.${i}.value`, {
                  maxLength: 128,
                })}
              />

              {tasksQuantity > 1 && (
                <span onClick={() => handleRemoveTask(i)}>remover</span>
              )}
              {errors.tasks?.[i]?.value.type === 'maxLength' && (
                <p>Tarea acepta como máximo 128 caracteres</p>
              )}
            </div>
          ))
        )}

        <button type='button' onClick={handleAddTask}>
          Agregar tarea
        </button>

        <div className='flex items-center justify-center '>
          <ButtonPurple type={'submit'}>Guardar</ButtonPurple>
        </div>
      </form>
    </div>
  );
}

export default ExperienceForm;
