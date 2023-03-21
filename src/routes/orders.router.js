import { Router } from "express";

import validate from "../middlewares/validate.middleware.js";
import schema from "../schemas/orders.schema.js";

import { createOrder, listOrders, showOrder } from "../controllers/orders.controller.js";

const router = Router();

router.post("/order", validate(schema), createOrder);
router.get("/orders", listOrders);
router.get("/orders/:id", showOrder);
export default router;
