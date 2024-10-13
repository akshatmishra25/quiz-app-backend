const dotenv = require("dotenv");
dotenv.config();

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;
const JWT_SECRET = process.env.JWT_SECRET;

// Export the variables as an object
module.exports = { PORT, MONGO_URL, NODE_ENV, JWT_SECRET };
