import React, { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";

function ContactForm() {
  const [socialsQuantity, setSocialsQuantity] = useState(1);

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    setFocus,
  } = useForm({
    defaultValues: {
      socials: [{ value: "" }],
    },
  });

  const {
    fields,
    append: appendSocial,
    remove: removeSocial,
    // replace,
  } = useFieldArray({
    name: "socials",
    control,
  });

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  const handleAddSocial = () => {
    const social = document.getElementById(`social_${socialsQuantity - 1}`);

    if (social.value !== "") {
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

  const submitForm = (formData) => {
    if (formData.socials.length >= 0) {
      const socialsArray = [];

      for (const { value } of formData.socials) {
        if (value) socialsArray.push(value);
      }

      formData.socials = socialsArray;
    }

    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <h1>Socials</h1>

        {React.Children.toArray(
          fields.map((_, i) => (
            <div>
              <input
                type="text"
                autoComplete="off"
                id={`social_${i}`}
                {...register(`socials.${i}.value`, {
                  minLength: 6,
                  maxLength: 64,
                })}
              />

              {socialsQuantity > 1 && (
                <span onClick={() => handleRemoveSocial(i)}>remover</span>
              )}
              {errors.socials?.[i]?.value.type === "minLength" && (
                <p>La URL debe tener al menos 6 caracteres</p>
              )}
              {errors.socials?.[i]?.value.type === "maxLength" && (
                <p>La URL acepta como máximo 64 caracteres</p>
              )}
            </div>
          )),
        )}

        <button type="button" onClick={handleAddSocial}>
          Agregar social
        </button>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
