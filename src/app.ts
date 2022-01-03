import express from 'express';
import cors from "cors";
import dotenv from "dotenv";


// Dotenv Setup 
dotenv.config({
  path: "./config.env"
});

// initial Setup
const app = express();
const port = 3400

// Express configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
import * as routes from "./routes/index.route";
app.use(routes.default);

// Start the Server
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});