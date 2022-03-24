const app = require("./app");
require("./db");
const { PORT } = require("./config");

app.listen(PORT);
console.log(`Server is running on port ${PORT}`);
