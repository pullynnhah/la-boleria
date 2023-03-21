import { StatusCodes } from "http-status-codes";

import { postOrder } from "../repositories/orders.repository.js";

export const createOrder = async (req, res) => {
  const { clientId, cakeId, quantity } = req.body;
  try {
    const { rowCount } = await postOrder(clientId, cakeId, quantity);
    if (rowCount == 1) res.sendStatus(StatusCodes.CREATED);
    else res.sendStatus(StatusCodes.NOT_FOUND);
  } catch (error) {
    console.log(error);
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

export default createOrder;
