import React, { useEffect, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

// import customAxios from "./Config/interceptors";

function SkillForm() {
  const [skillsQuantity, setSkillsQuantity] = useState(1);

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    defaultValues: {
      skills: [{ value: '' }],
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

    if (skill.value !== '') {
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

  // !VOLVER A VER eliminar useeffect
  useEffect(() => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImVtYWlsIjoiZmVyLmV6ZS5yYW1AZ21haWwuY29tIiwiaWQiOiI2MzcxMmMxMTUzYjNjMmZiNTEwYjdjNWYifSwiaWF0IjoxNjcwMDIyNDAxLCJleHAiOjE2NzI2MTQ0MDF9.yOKSiW55hC9752ucryXLdTMy2WKIXPK-A9m4f8qwo4c';

    localStorage.setItem('cevitaeToken', token);
  }, []);

  const submitForm = async (formData) => {
    if (formData.skills.length >= 0) {
      const skillsArray = [];

      for (const { value } of formData.skills) {
        if (value) skillsArray.push(value);
      }

      formData.skills = skillsArray;
    }

    console.log(formData);

    // const { data } = await customAxios.post("/skill", formData);
    // Es necesario tocar la api para que funcione esta request
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <h1>Skills</h1>

        {React.Children.toArray(
          fields.map((_, i) => (
            <div>
              <input
                type='text'
                autoComplete='off'
                id={`skill_${i}`}
                {...register(`skills.${i}.value`, {
                  maxLength: 32,
                })}
              />

              {skillsQuantity > 1 && (
                <span onClick={() => handleRemoveSkill(i)}>remover</span>
              )}
              {errors.skills?.[i]?.value.type === 'maxLength' && (
                <p>El Skill acepta como máximo 32 caracteres</p>
              )}
            </div>
          ))
        )}

        <button type='button' onClick={handleAddSkill}>
          Agregar skill
        </button>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default SkillForm;
