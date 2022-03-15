const app = require("./app");
const notesRoutes = require("./routes/notes.routes");
require("./db");
const {PORT} = require("./config")

app.use(notesRoutes);

app.listen(PORT);
console.log(`Server is running on port ${PORT}`);
