import { Router } from "express";

import validate from "../middlewares/validate.middleware.js";
import schema from "../schemas/cakes.schema.js";

import { createCake } from "../controllers/cakes.controller.js";

const router = Router();

router.post("/cakes", validate(schema), createCake);
export default router;
