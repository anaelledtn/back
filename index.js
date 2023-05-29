const express = require("express");
const envieRoutes = require('./routes/envieRoutes');
const favorisRoutes = require('./routes/favorisRoutes');
const magasinRoutes = require('./routes/magasinRoutes');
const categorieRoutes = require('./routes/categorieRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("");
});

app.use('/envies', envieRoutes);
app.use('/favoris', favorisRoutes);
app.use('/magasins', magasinRoutes);
app.use('/categories', categorieRoutes);
app.use('/user', userRoutes);

app.listen(5000, () => {
    console.log(`server listening on port http://localhost:5000`);
});

// const cors = require('cors');
// let corsOptions = {origin: '*'};
// app.use(cors(corsOptions));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next()
});

const path = require('path')

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../front/build')))

// AFTER defining routes: Anything that doesn't match what's above, send back index.html; (the beginning slash ('/') in the string is important!)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '../front/build/index.html'))
})