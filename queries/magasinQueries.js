const getMag = "SELECT * FROM MAGASIN";
const getMagById = "SELECT * FROM MAGASIN WHERE id_mag = $1";
const checkNameMExists = "SELECT m FROM MAGASIN m WHERE m.nom_mag = $1";
const addMag = "INSERT INTO MAGASIN (nom_mag, prix_mag, internet) VALUES ($1, $2, $3)";
const removeMag = "DELETE FROM MAGASIN WHERE id_mag = $1";
const updateMag = "UPDATE MAGASIN SET nom_mag = $1, prix_mag = $2, internet = $3 WHERE id_mag = $4";

module.exports = {
    getMag,
    getMagById,
    checkNameMExists,
    addMag,
    removeMag,
    updateMag,
};