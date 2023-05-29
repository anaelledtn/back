const getCat = "SELECT * FROM CATEGORIE";
const getCatById = "SELECT * FROM CATEGORIE WHERE id_cat = $1";
const checkNameCExists = "SELECT c FROM CATEGORIE c WHERE c.nom_cat = $1";
const addCat = "INSERT INTO CATEGORIE (nom_cat, date_cat, important) VALUES ($1, $2, $3)";
const removeCat = "DELETE FROM CATEGORIE WHERE id_cat = $1";
const updateCat = "UPDATE CATEGORIE SET nom_cat = $1, date_cat = $2, important = $3 WHERE id_cat = $4";

module.exports = {
    getCat,
    getCatById,
    checkNameCExists,
    addCat,
    removeCat,
    updateCat,
};