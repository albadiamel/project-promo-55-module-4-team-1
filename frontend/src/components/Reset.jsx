import "react";
import PropTypes from "prop-types";

const Reset = ({ updateFormData, resetFormData }) => {
  updateFormData();
  return <button onClick={resetFormData}>Limpiar formulario</button>;
};

Reset.propTypes = {
  updateFormData: PropTypes.func.isRequired,
  resetFormData: PropTypes.func.isRequired,
};

export default Reset;
