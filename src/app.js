import cors from "cors";
import dotenv from "dotenv";
import express, { json } from "express";

dotenv.config();

const app = express();
const { PORT } = process.env;

app.use(cors());
app.use(json());

app.get("/", (req, res) => res.sendStatus(200));

app.listen(PORT, () => console.log(`💫 Magic happens @ http://localhost:${PORT}`));
