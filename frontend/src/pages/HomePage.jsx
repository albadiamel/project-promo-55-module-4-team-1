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
    project: "",
    slogan: "",
    repo: "",
    demo: "",
    techs: "",
    description: "",
    author: "",
    job: "",
    image: defaultProject,
    authorImage: defaultAuthor,
  });

  const navigate = useNavigate();

    const createProjects = () => {
    
    addProjects({
      nameProj: formData.project,
      description: formData.description,
      techs: formData.techs,
      slogan: formData.slogan,
      demo: formData.demo,
      repo: formData.repo,
      projectImage: formData.image,
      owner: formData.author,
      jobTitle: formData.job,
      authorImage: formData.authorImage

    }).then(data => {
      setFormData(data);
      navigate("/project-list");
      });
  };

  return (
    <>
      <Header />
      <div className="button-container">
        <Buttons to="/project-list">Ver Proyectos</Buttons>
      </div>
      <div className="data-container">
        <ProjectPreview project={formData} />
        <Form formData={formData} addProjects={createProjects} setFormData={setFormData} />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
