import { Router } from "express";

import validate from "../middlewares/validate.middleware.js";
import schema from "../schemas/orders.schema.js";

import {
  createOrder,
  listOrders,
  showOrder,
  deliverOrder
} from "../controllers/orders.controller.js";
import idValidate from "../middlewares/idValidate.middleware.js";

const router = Router();

router.post("/order", validate(schema), createOrder);
router.patch("/order/:id", idValidate, deliverOrder);

router.get("/orders", listOrders);
router.get("/orders/:id", idValidate, showOrder);
export default router;
