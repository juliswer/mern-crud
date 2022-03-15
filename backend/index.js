const app = require('./app');
const notesRoutes = require('./routes/notes.routes');

app.use(notesRoutes)

app.listen(3000)
console.log('Server listening on port 3000')