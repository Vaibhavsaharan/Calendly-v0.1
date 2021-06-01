const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const connectDb = require('./db/connectDb');
var appRouter = require('./routes/appRoutes')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Connect to Mongodb Atlas 
connectDb();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// To check connection between react and express
app.get('/api/hello', (req, res) => {
  res.json({message : "Connected to backend"});
});

app.use('/api', appRouter)

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Express listening on ${port}`);