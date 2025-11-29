import "react";
import PropTypes from "prop-types";
import "../styles/form-text.css";

const FormTextInputs = ({ setFormData, formData, errors }) => {
  const handleChangeInput = (ev) => {
    setFormData((currentState) => ({
      ...currentState,
      [ev.target.name]: ev.target.value,
    }));
  };

  return (
    <>
      <div className="project__form">
        <h1>Información</h1>
        <h3>Cuéntanos sobre el proyecto</h3>

        <input
          name="project"
          id="project"
          placeholder={
            errors.project ? errors.project : "Nombre del proyecto"
          }
          value={formData.project}
          onChange={handleChangeInput}
          className={errors.project ? "input-error-placeholder" : ""}
        />
        <input
          name="slogan"
          id="slogan"
          placeholder={errors.slogan ? errors.slogan : "Slogan"}
          value={formData.slogan}
          onChange={handleChangeInput}
          className={errors.project ? "input-error-placeholder" : ""}
        />
        <div className="repo-demo">
            <input
            name="repo"
            id="repo"
            placeholder={errors.repo ? errors.repo : "Repositorio"}
            value={formData.repo}
            onChange={handleChangeInput}
            className={`repo ${errors.project ? "input-error-placeholder" : ""}`}
          />
          <input
            name="demo"
            id="demo"
            placeholder={errors.demo ? errors.demo : "Demo"}
            value={formData.demo}
            onChange={handleChangeInput}
            className={`demo ${errors.project ? "input-error-placeholder" : ""}`}
          />
        </div>
        <input
          name="techs"
          id="techs"
          placeholder={errors.techs ? errors.techs : "Tecnologías"}
          value={formData.techs}
          onChange={handleChangeInput}
          className={errors.project ? "input-error-placeholder" : ""}
        />
        <textarea
          name="description"
          id="description"
          placeholder={errors.description ? errors.description : "Descripción"}
          value={formData.description}
          onChange={handleChangeInput}
          className={errors.project ? "input-error-placeholder" : ""}
        />
      </div>

      <div className="owner__form">
        <h3>Cuéntanos sobre la autora</h3>

        <input
          name="author"
          id="author"
          placeholder={errors.author ? errors.author : "Nombre"}
          value={formData.author}
          onChange={handleChangeInput}
          className={errors.project ? "input-error-placeholder" : ""}
        />
        <input
          name="job"
          id="job"
          placeholder={errors.job ? errors.job : "Trabajo"}
          value={formData.job}
          onChange={handleChangeInput}
          className={errors.project ? "input-error-placeholder" : ""}
        />
      </div>
    </>
  );
};

FormTextInputs.propTypes = {
  formData: PropTypes.shape({
    project: PropTypes.string.isRequired,
    slogan: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired,
    demo: PropTypes.string.isRequired,
    techs: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    authorImage: PropTypes.string,
    author: PropTypes.string.isRequired,
    job: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    project: PropTypes.string,
    slogan: PropTypes.string,
    repo: PropTypes.string,
    demo: PropTypes.string,
    techs: PropTypes.string,
    description: PropTypes.string,
    author: PropTypes.string,
    job: PropTypes.string,
  }).isRequired,
};

export default FormTextInputs;
