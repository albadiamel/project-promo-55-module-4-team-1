import { useEffect, useState } from "react";
import { getProjects } from "../services/api";
import ListComponent from "../components/ListComponent";
import Header from "../components/Header";
import Buttons from "../components/Buttons";
import Footer from "../components/Footer";
import "../styles/list-item-component.css";
import "../styles/project-preview.css";


const ProjecListPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then(data => {
      setProjects(data);
    })
  }, []);



  return (
    <>
      <Header />
      <div className="button-container">
        <Buttons to="/">Nuevo proyecto</Buttons>
      </div>
      <ListComponent projects={projects}/>
      <Footer />
    </>
  );
};

export default ProjecListPage;
