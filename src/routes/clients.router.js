import { Router } from "express";

import validate from "../middlewares/validate.middleware.js";
import schema from "../schemas/clients.schema.js";

import { createClient } from "../controllers/clients.controller.js";

const router = Router();

router.post("/clients", validate(schema), createClient);
export default router;
