const mysql = require("../database/mysql-pool");

const getProjectByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const query = "SELECT * FROM projects WHERE id = ?";

        const connection = await mysql.getConnection();
        const data = await connection.query(query, [id]);
        await connection.end()
        res.json(data[0]);
    } catch {
        res.status(400).send("Algo ha ido mal");
    }
};

module.exports = {getProjectByIdController};