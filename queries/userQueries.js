const getUsers = "SELECT * FROM USERWISH";
const getUserByEmail = "SELECT * FROM USERWISH WHERE email = $1";
const checkUserExists = "SELECT u FROM USERWISH u WHERE u.email = $1";
const addUser = "INSERT INTO USERWISH (prenom, email, password, admin) VALUES ($1, $2, $3,$4)";
const removeUser = "DELETE FROM USERWISH WHERE email = $1";
const updateUser = "UPDATE USERWISH SET prenom = $1, password = $2, admin = $3 WHERE email = $4";

module.exports = {
    getUsers,
    getUserByEmail,
    checkUserExists,
    addUser,
    removeUser,
    updateUser,
};