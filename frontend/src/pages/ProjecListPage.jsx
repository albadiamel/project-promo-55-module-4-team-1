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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
        
    getProjects().then(data => {
      setProjects(data);
      setIsLoading(false);
    })
    
    .catch (() => {
      window.alert("Algo ha ido mal");
      setIsLoading(false);
    })
  }, []);



  return (
    <>
      <Header />
      <div className="button-container">
        <Buttons to="/" text="Nuevo proyecto"/>
      </div>
      
      {isLoading ? <p className="loadingMessage">Cargando...</p> : null}
      
      <ListComponent projects={projects}/>
      <Footer />
    </>
  );
};

export default ProjecListPage;
