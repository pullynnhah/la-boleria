import cors from "cors";
import dotenv from "dotenv";
import express, { json } from "express";

import flavoursRouter from "./routes/flavours.router.js";
import cakesRouter from "./routes/cakes.router.js";
dotenv.config();

const app = express();
const { PORT } = process.env;

app.use(cors());
app.use(json());

app.use(flavoursRouter);
app.use(cakesRouter);

app.listen(PORT, () => console.log(`💫 Magic happens @ http://localhost:${PORT}`));
