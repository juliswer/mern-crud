const express = require("express");
const morgan = require("morgan");
const notesRoutes = require("./routes/notes.routes");
const commentsRoutes = require("./routes/comments.routes");
const cors = require("cors");
const { URLDEPLOY } = require("./config");

const app = express();

const corsOptions = {
  origin: "http://localhost:3000" || URLDEPLOY,
};

// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(cors(corsOptions));

// Routes
app.use('/api', notesRoutes, (req, res, next) => {
  next();
});
app.use('/api', commentsRoutes, (req, res, next) => {
  next();
});

module.exports = app;
