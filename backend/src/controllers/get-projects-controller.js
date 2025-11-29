const mysql = require("../database/mysql-pool");

const getProjectsController = async (req, res) => {
    try {
        const query = "SELECT * FROM projects INNER JOIN authors ON projects.fk_id_author = authors.id_author";

        const connection = await mysql.getConnection();
        const data = await connection.query(query);
        await connection.end()
        res.json(data[0]);
    } catch {
        res.status(400).send("Algo ha ido mal");
    }
};

module.exports = {getProjectsController};