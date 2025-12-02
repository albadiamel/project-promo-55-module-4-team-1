import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProjectById } from "../services/api";
import ProjectPreview from "../components/ProjectPreview";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Buttons from "../components/Buttons";
import PropTypes from "prop-types";
import "../styles/project-preview.css";
import "../styles/your-project.css";


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
        <Buttons to="/project-list" text="Ver Proyectos"/>
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
