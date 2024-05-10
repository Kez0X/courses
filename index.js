// index.js

// Importation des modules nécessaires
const express = require('express');
const path = require('path');

// Création d'une application Express
const app = express();

// Définition du dossier contenant les fichiers statiques (HTML, CSS, JS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Définition de la route racine
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','html', 'home.html'));
});

app.get('/nsi-courses', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','html', 'nsi-courses.html'));
});

app.get('/courses', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','html', 'Informatique-Leçons.html'));
});


// Gestion des erreurs 404
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'public', 'html', '404.html'));
});

// Définition du port d'écoute
const PORT = process.env.PORT || 3000;

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Le serveur est en cours d'exécution sur le port ${PORT}`);
});
