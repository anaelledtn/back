const pool = require("../db");
const queries = require("../queries/magasinQueries");

const getMag = (req, res) => {
    pool.query(queries.getMag, (error, results)=>{
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getMagById = (req, res) => {
     const id_mag = parseInt(req.params.id_mag);
     pool.query(queries.getMagById, [id_mag], (error, results) => {
         if (error) throw error;
         res.status(200).json(results.rows);
     });
};

const addMag = (req, res) => {
    const { nom_mag, prix_mag, internet } = req.body;
    //check if name exists
    pool.query(queries.checkNameMExists, [nom_mag], (error, results) => {
        if (results.rows.length) {
            res.send("Le magasin existe déjà.");
        }
        //add mag to database
        pool.query(queries.addMag, [nom_mag, prix_mag, internet], (error, resulst) => {
            if (error) throw error;
            res.status(201).send("Le magasin a bien été créé.");
        });
    });
};

const removeMag = (req, res) => {
    const id_mag = parseInt(req.params.id_mag);
    pool.query(queries.getMagById, [id_mag], (error, results) => {
        const noMagFound = !results.rows.length;
        if(noMagFound){
            res.send("Le magasin n'existe pas, ne peut pas être supprimé.");
        }
        pool.query(queries.removeMag, [id_mag], (error, results) => {
            if (error) throw error;
            res.status(200).send("Le magasin a bien été supprimé.")
        });
    });
};

const updateMag = (req, res) => {
    const id_mag = parseInt(req.params.id_mag); 
    const { nom_mag, prix_mag, internet } = req.body;
    pool.query(queries.getMagById, [id_mag], (error, results) => {
        const noMagFound = !results.rows.length;
        if(noMagFound){
            res.send("Le magasin n'existe pas, ne peut pas être modifié.");
        }
        pool.query(queries.updateEnv, [nom_mag, prix_mag, internet, id_mag], (error, results) => {
            if (error) throw error;
            res.status(200).send("Le magasin a bien été modifié.");
        });
    });
};

module.exports = {
    getMag,
    getMagById,
    addMag,
    removeMag,
    updateMag
};