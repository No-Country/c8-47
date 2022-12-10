import React, { useEffect, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { FaTrashAlt } from 'react-icons/fa';
import ButtonTask from '../buttons/ButtonTask';
import { ButtonPurple } from '../buttons/ButtonPurple';
import customAxios from '../../Helpers/customAxios';
import { useContext } from 'react';
import { TagContext } from '../../Context/TagContext';
import { DataContext } from '../../Context/DataContext';

function SkillForm() {
  const [skillsQuantity, setSkillsQuantity] = useState(1);
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const { tag } = useContext(TagContext);
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

  const { state, dispatch } = useContext(DataContext);

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

  const submitForm = async (formData) => {
    for (let i = 0; i < formData.skills.length; i++) {
      if (formData.skills[i].name === '') {
        formData.skills.splice(i, 1);
        i--;
      }
    }

    const { data } = await customAxios.post('/skill', {
      ...formData,
      tag: tag,
    });

    console.log(data);

    dispatch({
      type: 'SETDATA',
      payload: { skills: [...state.data.skills, ...data.skills] },
    });
  };

  const customSubmit = (e) => {
    e.preventDefault();
    handleSubmit((formData) => submitForm(formData))(e);
  };

  return (
    <div className='w-[95%]'>
      <form onSubmit={customSubmit}>
        <label className='dark:text-[#FFFFFF] font-Mon text-[16px] ml-[4px]'>
          Skills
        </label>

        {React.Children.toArray(
          fields.map((_, i) => (
            <div className='h-[85px] flex flex-col'>
              <div className='relative flex items-center gap-3'>
                <input
                  type='text'
                  autoComplete='off'
                  id={`skill_${i}`}
                  {...register(`skills.${i}.name`, {
                    maxLength: 32,
                  })}
                  className={`dark:bg-bgDarkMode w-full dark:text-[#FFFFFF] dark:hover:bg-[#353535] h-[48px]  font-Mon  text-lg text text-textColor pt-[9px] pb-[9px] pl-[12px] pr-[35px] mt-[1px] mb-[1px] rounded-[10px] outline-0 ${
                    errors.skills
                      ? 'border border-errorColor dark:border-[#FF6161]'
                      : 'border border-textColor dark:border-[#FFFFFF]'
                  }`}
                />
                {skillsQuantity > 1 && (
                  <span
                    onClick={() => handleRemoveSkill(i)}
                    className='absolute top-[1.2rem] right-[0.8rem] cursor-pointer'
                  >
                    <FaTrashAlt
                      style={{
                        color: '#3D3D3D',
                      }}
                    />
                  </span>
                )}
              </div>

              {errors.skills?.[i]?.name.type === 'maxLength' && (
                <span className='font-Mon ml-[4px] text-[14px] leading-none text-errorColor dark:text-[#FF6161]'>
                  El Skill acepta como máximo 32 caracteres
                </span>
              )}
            </div>
          ))
        )}
        <div>
          <ButtonTask
            type={'button'}
            name={'Agregar skill'}
            onClick={handleAddSkill}
          />
        </div>
        <div className='flex items-center justify-center mt-[35px]'>
          <ButtonPurple type={'submit'} disabled={submitDisabled}>
            Guardar
          </ButtonPurple>
        </div>
      </form>
    </div>
  );
}

export default SkillForm;
