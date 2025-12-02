import "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Buttons from "../components/Buttons";
import "../styles/not-found.css";
import "../index.css";

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <div className="not-found">
        <p className="notfound-message">Esta página no existe</p>
          <div className="button-container">
            <Buttons to="/" text="Volver"/>
            <Buttons to="/project-list" text="Ver Proyectos"/>
          </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFoundPage;
