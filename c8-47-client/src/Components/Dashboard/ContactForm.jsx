import { useForm } from "react-hook-form";

function ContactForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const submitForm = (formData) => {
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <h1>Contacto</h1>

        <h2>Email</h2>

        <input
          type="text"
          autoComplete="off"
          {...register("email", {
            required: true,
            pattern: /^[\w-.]+@([\w-])+[.\w-]*$/i,
            maxLength: 64,
          })}
        />

        {errors.email?.type === "required" && (
          <p className="g-error-input">Ingresa tu email</p>
        )}
        {errors.email?.type === "pattern" && (
          <p className="g-error-input">Ingresa un email válido</p>
        )}
        {errors.email?.type === "maxLength" && (
          <p className="g-error-input">
            El email debe tener como máximo 64 caracteres
          </p>
        )}

        <h2>Teléfono</h2>

        <input
          type="text"
          autoComplete="off"
          {...register("phone", {
            pattern: /^[+]?[0-9]*$/,
            minLength: 8,
          })}
        />

        {errors.phone?.type === "pattern" && (
          <p className="g-error-input">El campo Teléfono solo acepta números</p>
        )}
        {errors.phone?.type === "minLength" && (
          <p className="g-error-input">
            El campo Teléfono debe tener al menos 8 caracteres
          </p>
        )}

        <h2>Dirección</h2>

        <input
          type="text"
          placeholder="Estado"
          autoComplete="off"
          {...register("address.state", {
            required: true,
            pattern: /^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/,
            maxLength: 24,
          })}
        />

        {errors.address?.state?.type === "required" && (
          <p className="g-error-input">Ingresa el Estado</p>
        )}
        {errors.address?.state?.type === "pattern" && (
          <p className="g-error-input">El campo Estado solo acepta letras</p>
        )}
        {errors.address?.state?.type === "maxLength" && (
          <p className="g-error-input">
            El campo Estado debe tener como máximo 24 caracteres
          </p>
        )}

        <input
          type="text"
          placeholder="Ciudad"
          autoComplete="off"
          {...register("address.city", {
            pattern: /^[A-Za-zÀ-ÖØ-öø-ÿ0-9 ]+$/,
            maxLength: 24,
          })}
        />

        {errors.address?.city?.type === "pattern" && (
          <p className="g-error-input">
            El campo Ciudad solo acepta letras y números
          </p>
        )}
        {errors.address?.city?.type === "maxLength" && (
          <p className="g-error-input">
            El campo Ciudad debe tener como máximo 24 caracteres
          </p>
        )}

        <input
          type="text"
          placeholder="Código postal"
          autoComplete="off"
          {...register("address.zip_code", {
            pattern: /^[0-9]+$/,
            maxLength: 12,
          })}
        />

        {errors.address?.zip_code?.type === "pattern" && (
          <p className="g-error-input">El código postal solo acepta números</p>
        )}
        {errors.address?.zip_code?.type === "maxLength" && (
          <p className="g-error-input">
            El código postal debe tener como máximo 12 caracteres
          </p>
        )}

        <input
          type="text"
          placeholder="Calle"
          autoComplete="off"
          {...register("address.street_name", {
            pattern: /^[A-Za-zÀ-ÖØ-öø-ÿ0-9 ]+$/,
            maxLength: 24,
          })}
        />

        {errors.address?.street_name?.type === "pattern" && (
          <p className="g-error-input">
            El campo Calle solo acepta letras y números
          </p>
        )}
        {errors.address?.street_name?.type === "maxLength" && (
          <p className="g-error-input">
            El campo Calle debe tener como máximo 24 caracteres
          </p>
        )}

        <input
          type="text"
          placeholder="Número"
          autoComplete="off"
          {...register("address.street_number", {
            pattern: /^[0-9]+$/,
            maxLength: 8,
          })}
        />

        {errors.address?.street_number?.type === "pattern" && (
          <p className="g-error-input">El campo Número solo acepta números</p>
        )}
        {errors.address?.street_number?.type === "maxLength" && (
          <p className="g-error-input">
            El campo Número debe tener como máximo 8 caracteres
          </p>
        )}

        <input
          type="text"
          placeholder="Departamento"
          autoComplete="off"
          {...register("address.door", {
            pattern: /^[A-Za-zÀ-ÖØ-öø-ÿ0-9 ]+$/,
            maxLength: 8,
          })}
        />

        {errors.address?.door?.type === "pattern" && (
          <p className="g-error-input">
            El campo Departamento solo acepta números y letras
          </p>
        )}
        {errors.address?.door?.type === "maxLength" && (
          <p className="g-error-input">
            El campo Departamento debe tener como máximo 8 caracteres
          </p>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
