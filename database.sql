CREATE TABLE USERWISH(
    id_user serial PRIMARY KEY,
    prenom varchar(20) NOT NULL,
    email varchar(100) NOT NULL,
    password varchar(50) NOT NULL,
    admin boolean NOT NULL
);

CREATE TABLE ENVIE(
    id_env serial PRIMARY KEY,
    nom_e varchar(20) NOT NULL,
    prix float NOT NULL,
    description varchar(10) NOT NULL
);

CREATE TABLE FAVORIS(
    id_fav serial PRIMARY KEY,
    nom_fav varchar(50) NOT NULL,
    description varchar(255) NOT NULL
);

CREATE TABLE CATEGORIE(
    id_cat serial PRIMARY KEY,
    nom_cat varchar(20) NOT NULL,
    date_cat varchar(20) NOT NULL,
    important boolean not null

);

CREATE TABLE MAGASIN(
    id_mag serial PRIMARY KEY,
    nom_mag varchar(20) NOT NULL,
    prix_mag float NOT NULL,
    internet boolean not null
);