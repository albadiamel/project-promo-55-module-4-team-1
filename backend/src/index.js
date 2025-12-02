const express = require("express");
const cors = require("cors");
const { getProjectsController, getProjectByIdController, addProjectsController } = require("./controllers");
const app = express();
const port = 3000;

require("dotenv").config();

// Configuración para subir límite de respuesta
app.use(express.json({ limit: "25mb" }));
// Para evitar errores de diferente origen cuando se hace la petición
app.use(cors());

// Configuración para escuchar en el puerto definido
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

// Endpoints

// ENDPOINT PARA COGER LOS PROYECTOS
app.get("/projects", getProjectsController);
app.get("/project/:id", getProjectByIdController);
app.post("/project", addProjectsController);



