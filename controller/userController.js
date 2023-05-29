var bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
const pool = require("../db.js");
const queries = require("../queries/userQueries");

const getUsers = (req, res) => {
    pool.query(queries.getUsers, (error, results)=>{
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getUserByEmail= (req, res) => {
     const email = parseInt(req.params.email);
     pool.query(queries.getUserByEmail, [email], (error, results) => {
         if (error) throw error;
         res.status(200).json(results.rows);
     });
};

const addUser = (req, res) => {
    const { prenom, email, password, admin } = req.body;
    //check if user exists
    pool.query(queries.checkUserExists, [email], (error, results) => {
        if (results.rows.length) {
            res.send("L'email existe déjà.");
        }
        //add perso to database
        pool.query(queries.addPerso, [prenom, email, bcrypy.hashSync(password, salt), admin], (error, resulst) => {
            if (error) throw error;
            res.status(201).send("User a bien été créé.");
        });
    });
};

const removeUser = (req, res) => {
    const email = parseInt(req.params.email);
    pool.query(queries.getUserByEmail, [email], (error, results) => {
        const noUserFound = !results.rows.length;
        if(noUserFound){
            res.send("User n'existe pas, ne peut pas être supprimé.");
        }
        pool.query(queries.removeUser, [email], (error, results) => {
            if (error) throw error;
            res.status(200).send("User a bien été supprimé.")
        });
    });
};

const updateUser = (req, res) => {
    const emailU = parseInt(req.params.email); 
    const { prenom, email, password, admin } = req.body;
    pool.query(queries.getUserByEmail, [emailU], (error, results) => {
        const noUserFound = !results.rows.length;
        if(noUserFound){
            res.send("User n'existe pas, ne peut pas être modifié.");
        }
        pool.query(queries.updatePerso, [prenom, email, bcrypt.hashSync(password, salt), admin, emailU], (error, results) => {
            if (error) throw error;
            res.status(200).send("User a bien été modifié.");
        });
    });
};

const connectUser = (req, res) => {
    const {
        email, 
        password
    } = req.body;
    pool.query(queries.getUserByEmail, [email], (error, results) => {
        const noUserFound = !results.rows.length;
        if(noUserFound){
            res.send("User n'existe pas, ne peut pas être modifié.");
        }
        if(bcrypt.compareSync(password, results.rows[0].password)){
            res.send();
        }
        else {
            res.send("Password incorrect");
        }
    });
};

module.exports = {
    getUsers,
    getUserByEmail,
    addUser,
    removeUser,
    updateUser,
    connectUser
};