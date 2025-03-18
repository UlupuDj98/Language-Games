const express = require('express');
const cors = require('cors'); // Importa il pacchetto cors
const wordRoutes = require('./Routes/wordRoutes.js');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;
const app = express();

app.use(cors()); // Abilita CORS per tutte le rotte
app.use(express.json());

// Endpoint di connessione
const dbURI = process.env.MONGODB_URI || 'mongodb://mongodb_container:27017/Dictionary';

// Connessione
mongoose.connect(dbURI)
    .then((result) => {
        console.log('Connected to Dictionary');
        app.listen(3000, () => {
            console.log('Server is running');
        });
    })
    .catch(err => console.error('Errore di connessione a MongoDB: ', err));

app.use('/words', wordRoutes);
