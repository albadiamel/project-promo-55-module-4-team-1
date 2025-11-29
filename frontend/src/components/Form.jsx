import { useState } from "react";
import FormTextInputs from "./FormTextInputs";
import FormImage from "./FormImage";
import Reset from "../components/Reset";
// import ls from "../services/localStorage";
import defaultProject from "../images/project.jpg";
import defaultAuthor from "../images/author.png";
import PropTypes from "prop-types";

const Form = ({ formData, setFormData, addProjects }) => {
  const [errors, setErrors] = useState({});

  const [globalError, setGlobalError] = useState("");

  const validateForm = () => {
    const newErrors = {};

    if (!formData.project.trim())
      newErrors.project = "Este campo es obligatorio";
    if (!formData.slogan.trim()) newErrors.slogan = "Este campo es obligatorio";
    if (!formData.repo.trim()) newErrors.repo = "Este campo es obligatorio";
    if (!formData.demo.trim()) newErrors.demo = "Este campo es obligatorio";
    if (!formData.techs.trim()) newErrors.techs = "Este campo es obligatorio";
    if (!formData.description.trim())
      newErrors.description = "Este campo es obligatorio";
    if (!formData.author.trim()) newErrors.author = "Este campo es obligatorio";
    if (!formData.job.trim())
      newErrors.job = "Este campo es obligatorio";

    if (formData.image === defaultProject)
      newErrors.image = "Sube una imagen del proyecto";
    if (formData.authorImage === defaultAuthor)
      newErrors.authorImage = "Sube una imagen de la autora";

    setErrors(newErrors);
    console.log(errors);

    if (Object.keys(newErrors).length > 0) {
      setGlobalError("Por favor, completa los campos");
    } else {
      setGlobalError("");
    }

    return Object.keys(newErrors).length === 0;
  };

    const handleCreateProject = () => {
    const isValid = validateForm();
    if (!isValid) return;
    addProjects();
    };


    // const storedProjects = ls.get("projects", []);
    // const updatedProjects = [...storedProjects, newProject];
    // ls.set("projects", updatedProjects);

  return (
    <div className="form__inputs">
      <FormTextInputs
        formData={formData}
        setFormData={setFormData}
        errors={errors}
      />
      <FormImage
        formData={formData}
        setFormData={setFormData}
        errors={errors}
      />
      <div className="button-container">
        <Reset setFormData={setFormData} />
        <button onClick={handleCreateProject}>Crea tu proyecto</button>
      </div>

      {globalError && (
        <p style={{ color: "red", marginTop: "10px" }}>{globalError}</p>
      )}
    </div>
  );
};

Form.propTypes = {
  formData: PropTypes.shape({
    project: PropTypes.string.isRequired,
    slogan: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired,
    demo: PropTypes.string.isRequired,
    techs: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    authorImage: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    job: PropTypes.string,
    image: PropTypes.string.isRequired,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default Form;
