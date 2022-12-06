import React, { useEffect, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

import customAxios from '../../Helpers/customAxios';

function SkillForm() {
  const [skillsQuantity, setSkillsQuantity] = useState(1);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    watch,
  } = useForm({
    defaultValues: {
      skills: [{ name: '' }],
    },
  });

  const {
    fields,
    append: appendSkill,
    remove: removeSkill,
    // replace,
  } = useFieldArray({
    name: 'skills',
    control,
  });

  const handleAddSkill = () => {
    const skill = document.getElementById(`skill_${skillsQuantity - 1}`);

    if (skill.name !== '') {
      appendSkill();
      setSkillsQuantity(skillsQuantity + 1);
    }
  };

  const handleRemoveSkill = (i) => {
    if (skillsQuantity > 1) {
      removeSkill(i);
      setSkillsQuantity(skillsQuantity - 1);
    }
  };

  useEffect(() => {
    const checkNamesValues = watch('skills').every(({ name }) => name === '');

    if (checkNamesValues) {
      setSubmitDisabled(true);
    } else {
      setSubmitDisabled(false);
    }
  }, [watch({ nest: true })]);

  // !VOLVER A VER eliminar useeffect
  useEffect(() => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImVtYWlsIjoiZmVyLmV6ZS5yYW1AZ21haWwuY29tIiwiaWQiOiI2MzcxMmMxMTUzYjNjMmZiNTEwYjdjNWYifSwiaWF0IjoxNjcwMDIyNDAxLCJleHAiOjE2NzI2MTQ0MDF9.yOKSiW55hC9752ucryXLdTMy2WKIXPK-A9m4f8qwo4c';

    localStorage.setItem('cevitaeToken', token);
  }, []);

  const submitForm = async (formData) => {
    for (let i = 0; i < formData.skills.length; i++) {
      if (formData.skills[i].name === '') {
        formData.skills.splice(i, 1);
        i--;
      }
    }

    // ! VOLVER A VER agregar a este formulario una propiedad 'tag' con el id del tag
    const { data } = await customAxios.post('/skill', formData);

    console.log(data);
  };

  const customSubmit = (e) => {
    e.preventDefault();
    handleSubmit((formData) => submitForm(formData))(e);
  };

  return (
    <div>
      <form onSubmit={customSubmit}>
        <h1>Skills</h1>

        {React.Children.toArray(
          fields.map((_, i) => (
            <div>
              <input
                type='text'
                autoComplete='off'
                id={`skill_${i}`}
                {...register(`skills.${i}.name`, {
                  maxLength: 32,
                })}
              />

              {skillsQuantity > 1 && (
                <span onClick={() => handleRemoveSkill(i)}>remover</span>
              )}
              {errors.skills?.[i]?.name.type === 'maxLength' && (
                <p>El Skill acepta como máximo 32 caracteres</p>
              )}
            </div>
          ))
        )}

        <button type='button' onClick={handleAddSkill}>
          Agregar skill
        </button>

        <button type='submit' disabled={submitDisabled}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default SkillForm;
