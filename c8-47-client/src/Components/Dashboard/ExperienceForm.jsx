import React, { useState, useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

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

  // !VOLVER A VER eliminar useeffect
  useEffect(() => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImVtYWlsIjoiZmVyLmV6ZS5yYW1AZ21haWwuY29tIiwiaWQiOiI2MzcxMmMxMTUzYjNjMmZiNTEwYjdjNWYifSwiaWF0IjoxNjcwMDIyNDAxLCJleHAiOjE2NzI2MTQ0MDF9.yOKSiW55hC9752ucryXLdTMy2WKIXPK-A9m4f8qwo4c';

    localStorage.setItem('cevitaeToken', token);
  }, []);

  const submitForm = async (formData) => {
    if (formData.tasks.length >= 0) {
      const tasksArray = [];

      for (const { value } of formData.tasks) {
        if (value) tasksArray.push(value);
      }

      formData.tasks = tasksArray;
    }

    formData.main_job = true;

    const { data } = await customAxios.post('/job', formData);
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <h1>Experiencia</h1>

        <h2>Título</h2>

        <input
          type='text'
          autoComplete='off'
          {...register('title', {
            required: true,
            maxLength: 64,
          })}
        />

        {errors.title?.type === 'required' && (
          <p className='g-error-input'>Ingresa tu título</p>
        )}
        {errors.title?.type === 'pattern' && (
          <p className='g-error-input'>
            El título acepta como máximo 64 caracteres
          </p>
        )}

        <h2>Organización</h2>

        <input
          type='text'
          autoComplete='off'
          {...register('organization', {
            required: true,
            maxLength: 64,
          })}
        />

        {errors.organization?.type === 'required' && (
          <p className='g-error-input'>Ingresa la Organización</p>
        )}
        {errors.organization?.type === 'maxLength' && (
          <p className='g-error-input'>
            El campo Organización acepta como máximo 64 caracteres
          </p>
        )}

        <h2>Fecha de inicio</h2>

        <input
          type='text'
          autoComplete='off'
          {...register('start_date', {
            required: true,
            maxLength: 10,
          })}
        />

        {errors.start_date?.type === 'required' && (
          <p className='g-error-input'>Ingresa la fecha de inicio</p>
        )}
        {errors.start_date?.type === 'maxLength' && (
          <p className='g-error-input'>
            La fecha de inicio acepta como máximo 10 caracteres
          </p>
        )}

        <h2>Fecha de finalización</h2>

        <input
          type='text'
          autoComplete='off'
          {...register('end_date', {
            required: true,
            maxLength: 10,
          })}
        />

        {errors.end_date?.type === 'required' && (
          <p className='g-error-input'>Ingresa la fecha de finalización</p>
        )}
        {errors.end_date?.type === 'maxLength' && (
          <p className='g-error-input'>
            La fecha de finalización acepta como máximo 10 caracteres
          </p>
        )}

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

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default ExperienceForm;
