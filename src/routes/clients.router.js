import { Router } from "express";

import validate from "../middlewares/validate.middleware.js";
import schema from "../schemas/clients.schema.js";

import { createClient, showClientOrders } from "../controllers/clients.controller.js";

const router = Router();

router.post("/clients", validate(schema), createClient);
router.get("/clients/:id/orders", showClientOrders);
export default router;
