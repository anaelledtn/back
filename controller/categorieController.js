const pool = require("../db");
const queries = require("../queries/categorieQueries");

const getCat = (req, res) => {
    pool.query(queries.getCat, (error, results)=>{
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getCatById = (req, res) => {
     const id_cat = parseInt(req.params.id_cat);
     pool.query(queries.getCatById, [id_cat], (error, results) => {
         if (error) throw error;
         res.status(200).json(results.rows);
     });
};

const addCat = (req, res) => {
    const { nom_cat, date_cat, important } = req.body;
    //check if name exists
    pool.query(queries.checkNameCExists, [nom_cat], (error, results) => {
        if (results.rows.length) {
            res.send("La catégorie existe déjà.");
        }
        //add category to database
        pool.query(queries.addCat, [nom_cat, date_cat, important], (error, resulst) => {
            if (error) throw error;
            res.status(201).send("La catégorie a bien été créée.");
        });
    });
};

const removeCat = (req, res) => {
    const id_cat = parseInt(req.params.id_cat);
    pool.query(queries.getCatById, [id_cat], (error, results) => {
        const noCategoryFound = !results.rows.length;
        if(noCategoryFound){
            res.send("La catégorie n'existe pas, ne peut pas être supprimée.");
        }
        pool.query(queries.removeCat, [id_cat], (error, results) => {
            if (error) throw error;
            res.status(200).send("La catégorie a bien été supprimée.")
        });
    });
};

const updateCat = (req, res) => {
    const id_cat = parseInt(req.params.id_cat); 
    const { nom_cat, date_cat, important } = req.body;
    pool.query(queries.getCatById, [id_cat], (error, results) => {
        const noCategoryFound = !results.rows.length;
        if(noCategoryFound){
            res.send("La catégorie n'existe pas, ne peut pas être modifiée.");
        }
        pool.query(queries.updateCat, [nom_cat, date_cat, important, id_cat], (error, results) => {
            if (error) throw error;
            res.status(200).send("La catégorie a bien été modifiée.");
        });
    });
};

module.exports = {
    getCat,
    getCatById,
    addCat,
    removeCat,
    updateCat
};