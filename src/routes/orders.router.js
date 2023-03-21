import { Router } from "express";

import validate from "../middlewares/validate.middleware.js";
import schema from "../schemas/orders.schema.js";

import { createOrder } from "../controllers/orders.controller.js";

const router = Router();

router.post("/order", validate(schema), createOrder);
export default router;
