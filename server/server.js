import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import xss from "xss-clean";
import morgan from "morgan";
import mongoSanitize from "express-mongo-sanitize";
import dbConnection from "./dbConfig/dbConfig.js";

dotenv.config();

const app = express();

const PORT = process.env.port || 8800;

//MONGODB Connection
dbConnection();

//Middleware
app.use(cors());
app.use(xss());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(mongoSanitize());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.listen(() => {
  console.log(`Dev server is running on PORT ${PORT}`);
});
