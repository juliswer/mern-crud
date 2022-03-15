const { connect } = require("mongoose");
const {MONGODB_URI} = require("./config");

(async () => {
  try {
    const db = await connect(MONGODB_URI);
    console.log("DB Connected to ", db.connection.name);
  } catch (error) {
    console.log("Error: ", error);
  }
})();
