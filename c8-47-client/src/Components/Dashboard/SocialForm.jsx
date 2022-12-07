import React, { useEffect, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { FaTrashAlt } from 'react-icons/fa';
import customAxios from '../../Helpers/customAxios';
import ButtonTask from '../buttons/ButtonTask';
import { ButtonPurple } from '../buttons/ButtonPurple';
function SocialForm() {
  const [socialsQuantity, setSocialsQuantity] = useState(1);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    watch,
  } = useForm({
    defaultValues: {
      socials: [{ value: '' }],
    },
  });

  const {
    fields,
    append: appendSocial,
    remove: removeSocial,
    // replace,
  } = useFieldArray({
    name: 'socials',
    control,
  });

  const handleAddSocial = () => {
    const social = document.getElementById(`social_${socialsQuantity - 1}`);

    if (social.value !== '') {
      appendSocial();
      setSocialsQuantity(socialsQuantity + 1);
    }
  };

  const handleRemoveSocial = (i) => {
    if (socialsQuantity > 1) {
      removeSocial(i);
      setSocialsQuantity(socialsQuantity - 1);
    }
  };

  useEffect(() => {
    const checkValues = watch('socials').every(({ value }) => value === '');

    if (checkValues) {
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
    if (formData.socials.length >= 0) {
      const socialsArray = [];

      for (const { value } of formData.socials) {
        if (value) socialsArray.push(value);
      }

      formData.socials = socialsArray;
    }

    const { data } = await customAxios.post('/social', formData);
    console.log(data);
  };

  return (
    <div className='w-[95%]'>
      <form onSubmit={handleSubmit(submitForm)}>
        <label className='dark:text-[#FFFFFF] font-Mon text-[16px] ml-[4px]'>
          Socials
        </label>
        {React.Children.toArray(
          fields.map((_, i) => (
            <div className='h-[85px] flex flex-col'>
              <div className='relative flex items-center gap-3'>
                <input
                  className={`dark:bg-bgDarkMode w-full dark:text-[#FFFFFF] dark:hover:bg-[#353535] h-[48px]  font-Mon  text-lg text text-textColor pt-[9px] pb-[9px] pl-[12px] pr-[35px] mt-[1px] mb-[1px] rounded-[10px] outline-0 ${
                    errors.socials
                      ? 'border border-errorColor dark:border-[#FF6161]'
                      : 'border border-textColor dark:border-[#FFFFFF]'
                  }`}
                  type='text'
                  id={`social_${i}`}
                  {...register(`socials.${i}.value`, {
                    minLength: 6,
                    maxLength: 64,
                  })}
                />

                {socialsQuantity > 1 && (
                  <span
                    className='absolute top-[1.2rem] right-[0.8rem] cursor-pointer'
                    onClick={() => handleRemoveSocial(i)}
                  >
                    <FaTrashAlt
                      style={{
                        color: '#3D3D3D',
                      }}
                    />
                  </span>
                )}
              </div>

              {errors.socials?.[i]?.value.type === 'minLength' && (
                <span className='font-Mon ml-[4px] text-[14px] leading-none text-errorColor dark:text-[#FF6161]'>
                  La URL debe tener al menos 6 caracteres
                </span>
              )}
              {errors.socials?.[i]?.value.type === 'maxLength' && (
                <span className='font-Mon ml-[4px] text-[14px] leading-none text-errorColor dark:text-[#FF6161]'>
                  La URL acepta como máximo 64 caracteres
                </span>
              )}
            </div>
          ))
        )}
        <div>
          <ButtonTask
            type={'button'}
            name={'Agregar social'}
            onClick={handleAddSocial}
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

export default SocialForm;
