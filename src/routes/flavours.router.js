import { Router } from "express";

import validate from "../middlewares/validate.middleware.js";
import schema from "../schemas/flavours.schema.js";

import { createFlavour } from "../controllers/flavours.controller.js";

const router = Router();

router.post("/flavours", validate(schema), createFlavour);
export default router;
