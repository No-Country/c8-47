import { useForm } from "react-hook-form";

function EducationForm() {
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
        <h1>Educación</h1>

        <h2>Título</h2>

        <input
          type="text"
          autoComplete="off"
          {...register("title", {
            required: true,
            maxLength: 64,
          })}
        />

        {errors.title?.type === "required" && (
          <p className="g-error-input">Ingresa tu título</p>
        )}
        {errors.title?.type === "pattern" && (
          <p className="g-error-input">
            El título debe tener como máximo 64 caracteres
          </p>
        )}

        <h2>Institución</h2>

        <input
          type="text"
          autoComplete="off"
          {...register("institution", {
            required: true,
            maxLength: 64,
          })}
        />

        {errors.institution?.type === "required" && (
          <p className="g-error-input">Ingresa la Institución</p>
        )}
        {errors.institution?.type === "maxLength" && (
          <p className="g-error-input">
            El campo Institución acepta como máximo 64 caracteres
          </p>
        )}

        <h2>Fecha de inicio</h2>

        <input
          type="text"
          autoComplete="off"
          {...register("start_date", {
            required: true,
            maxLength: 10,
          })}
        />

        {errors.start_date?.type === "required" && (
          <p className="g-error-input">Ingresa la fecha de inicio</p>
        )}
        {errors.start_date?.type === "maxLength" && (
          <p className="g-error-input">
            La fecha de inicio acepta como máximo 10 caracteres
          </p>
        )}

        <h2>Fecha de finalización</h2>

        <input
          type="text"
          autoComplete="off"
          {...register("end_date", {
            required: true,
            maxLength: 10,
          })}
        />

        {errors.end_date?.type === "required" && (
          <p className="g-error-input">Ingresa la fecha de finalización</p>
        )}
        {errors.end_date?.type === "maxLength" && (
          <p className="g-error-input">
            La fecha de finalización acepta como máximo 10 caracteres
          </p>
        )}

        <h2>Comentario</h2>

        <input
          type="text"
          autoComplete="off"
          {...register("comment", {
            maxLength: 256,
          })}
        />

        {errors.comment?.type === "maxLength" && (
          <p className="g-error-input">
            El comentario acepta como máximo 256 caracteres
          </p>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EducationForm;
