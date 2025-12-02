import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProjects } from "../services/api"
import Form from "../components/Form";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Buttons from "../components/Buttons";
import defaultProject from "../images/project.jpg";
import defaultAuthor from "../images/author.png";
import ProjectPreview from "../components/ProjectPreview";
import "../index.css";

const HomePage = () => {
  const [formData, setFormData] = useState({
    nameProj: "",
    slogan: "",
    repo: "",
    demo: "",
    techs: "",
    description: "",
    owner: "",
    jobTitle: "",
    projectImage: defaultProject,
    authorImage: defaultAuthor,
  });

  const navigate = useNavigate();

  const updateFormData = (key, value) => {
    setFormData((currentState) => ({
      ...currentState,
      [key]: value,
    }));
  }
    const createProjects = () => {
    addProjects(formData).then(data => {
      setFormData(data);
      navigate("/project-list");
      });
  };

  return (
    <>
      <Header />
      <div className="button-container">
        <Buttons to="/project-list" text="Ver Proyectos"/>
      </div>
      <div className="data-container">
        <ProjectPreview project={formData} />
        <Form formData={formData} addProjects={createProjects} updateFormData={updateFormData} />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
