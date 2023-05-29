const pool = require("../db");
const queries = require("../queries/favorisQueries");

const getFav = (req, res) => {
    pool.query(queries.getFav, (error, results)=>{
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getFavById = (req, res) => {
     const id_fav = parseInt(req.params.id_fav);
     pool.query(queries.getFavById, [id_fav], (error, results) => {
         if (error) throw error;
         res.status(200).json(results.rows);
     });
};

const addFav = (req, res) => {
    const { nom_fav, description } = req.body;
    //check if name exists
    pool.query(queries.checkNameFExists, [nom_fav], (error, results) => {
        if (results.rows.length) {
            res.send("Le favoris existe déjà.");
        }
        //add fav to database
        pool.query(queries.addFav, [nom_fav, description], (error, resulst) => {
            if (error) throw error;
            res.status(201).send("Le favoris a bien été créé.");
        });
    });
};

const removeFav = (req, res) => {
    const id_fav = parseInt(req.params.id_fav);
    pool.query(queries.getFavById, [id_fav], (error, results) => {
        const noFavFound = !results.rows.length;
        if(noFavFound){
            res.send("Le favoris n'existe pas, ne peut pas être supprimé.");
        }
        pool.query(queries.removeFav, [id_fav], (error, results) => {
            if (error) throw error;
            res.status(200).send("Le favoris a bien été supprimé.")
        });
    });
};

const updateFav = (req, res) => {
    const id_fav = parseInt(req.params.id_fav); 
    const { nom_fav, description } = req.body;
    pool.query(queries.getFavById, [id_fav], (error, results) => {
        const noFavFound = !results.rows.length;
        if(noFavFound){
            res.send("Le favoris n'existe pas, ne peut pas être modifié.");
        }
        pool.query(queries.updateEnv, [nom_fav, description, id_fav], (error, results) => {
            if (error) throw error;
            res.status(200).send("Le favoris a bien été modifié.");
        });
    });
};

module.exports = {
    getFav,
    getFavById,
    addFav,
    removeFav,
    updateFav
};