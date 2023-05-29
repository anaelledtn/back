const getEnv = "SELECT * FROM ENVIE";
const getEnvById = "SELECT * FROM ENVIE WHERE id_env = $1";
const checkNameEExists = "SELECT e FROM ENVIE e WHERE e.nom_e = $1";
const addEnv = "INSERT INTO ENVIE (nom_e, prix, description) VALUES ($1, $2, $3)";
const removeEnv = "DELETE FROM ENVIE WHERE id_env = $1";
const updateEnv = "UPDATE ENVIE SET nom_e = $1, prix = $2, description = $3 WHERE id_env = $4";

module.exports = {
    getEnv,
    getEnvById,
    checkNameEExists,
    addEnv,
    removeEnv,
    updateEnv,
};