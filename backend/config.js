require('dotenv/config');

module.exports = {
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost/mern-crud-notes-app',
    PORT: process.env.PORT || 4000,
    URLDEPLOY: 'https://www.mern-crud.vercel.app'
}