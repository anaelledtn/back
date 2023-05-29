const pool = require("../db");
const queries = require("../queries/envieQueries");

const getEnv = (req, res) => {
    pool.query(queries.getEnv, (error, results)=>{
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getEnvById = (req, res) => {
     const id_env = parseInt(req.params.id_env);
     pool.query(queries.getEnvById, [id_env], (error, results) => {
         if (error) throw error;
         res.status(200).json(results.rows);
     });
};

const addEnv = (req, res) => {
    const { nom_e, prix, description } = req.body;
    //check if name exists
    pool.query(queries.checkNameEExists, [nom_e], (error, results) => {
        if (results.rows.length) {
            res.send("L'envie existe déjà.");
        }
        //add envegory to database
        pool.query(queries.addEnv, [nom_e, prix, description], (error, resulst) => {
            if (error) throw error;
            res.status(201).send("L'envie a bien été créée.");
        });
    });
};

const removeEnv = (req, res) => {
    const id_env = parseInt(req.params.id_env);
    pool.query(queries.getEnvById, [id_env], (error, results) => {
        const noEnvieFound = !results.rows.length;
        if(noEnvieFound){
            res.send("L'envie n'existe pas, ne peut pas être supprimée.");
        }
        pool.query(queries.removeEnv, [id_env], (error, results) => {
            if (error) throw error;
            res.status(200).send("L'envie a bien été supprimée.")
        });
    });
};

const updateEnv = (req, res) => {
    const id_env = parseInt(req.params.id_env); 
    const { nom_e, prix, description } = req.body;
    pool.query(queries.getEnvById, [id_env], (error, results) => {
        const noEnvieFound = !results.rows.length;
        if(noEnvieFound){
            res.send("L'envie n'existe pas, ne peut pas être modifiée.");
        }
        pool.query(queries.updateEnv, [nom_e, prix, description, id_env], (error, results) => {
            if (error) throw error;
            res.status(200).send("L'envie a bien été modifiée.");
        });
    });
};

module.exports = {
    getEnv,
    getEnvById,
    addEnv,
    removeEnv,
    updateEnv
};