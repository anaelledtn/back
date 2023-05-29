const getFav = "SELECT * FROM FAVORIS";
const getFavById = "SELECT * FROM FAVORIS WHERE id_fav = $1";
const checkNameFExists = "SELECT f FROM FAVORIS f WHERE f.nom_fav = $1";
const addFav = "INSERT INTO FAVORIS (nom_fav, description) VALUES ($1, $2)";
const removeFav = "DELETE FROM FAVORIS WHERE id_fav = $1";
const updateFav = "UPDATE FAVORIS SET nom_fav = $1, description = $2  WHERE id_fav = $3";

module.exports = {
    getFav,
    getFavById,
    checkNameFExists,
    addFav,
    removeFav,
    updateFav,
};