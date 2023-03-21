import { Router } from "express";

import validate from "../middlewares/validate.middleware.js";
import schema from "../schemas/clients.schema.js";

import { createClient, showClientOrders } from "../controllers/clients.controller.js";
import idValidate from "../middlewares/idValidate.middleware.js";

const router = Router();

router.post("/clients", validate(schema), createClient);
router.get("/clients/:id/orders", idValidate, showClientOrders);
export default router;
