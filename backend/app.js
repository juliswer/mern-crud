const express = require("express");
const morgan = require("morgan");
const notesRoutes = require("./routes/notes.routes");
const cors = require('cors');
const {URLDEPLOY} = require('./config') 

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000' || URLDEPLOY,
}

// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use(notesRoutes);

module.exports = app;
