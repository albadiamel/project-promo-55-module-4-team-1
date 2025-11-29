import "react";
import ProjectPreview from "../components/ProjectPreview";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Buttons from "../components/Buttons";
import PropTypes from "prop-types";
import { getProjectById } from "../services/api";
import "../styles/projectpreview.css";
import "../styles/yourproject.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const YourProjectPage = () => {
  const [project, setProject] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getProjectById(id).then(data => {
      setProject(data);
    })
  }, []);

  return (
    <>
      <Header />
      <div className="button-container">
        <Buttons to="/project-list">Ver Proyectos</Buttons>
      </div>
      <div className="yourproject-container">
        <ProjectPreview project={project} />
      </div>
      <Footer />
    </>
  );
};

YourProjectPage.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object),
};

export default YourProjectPage;
