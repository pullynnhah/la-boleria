import { StatusCodes } from "http-status-codes";

import { postOrder, getOrders, getOrder } from "../repositories/orders.repository.js";

export const createOrder = async (req, res) => {
  const { clientId, cakeId, quantity } = req.body;
  try {
    const { rowCount } = await postOrder(clientId, cakeId, quantity);
    if (rowCount == 1) res.sendStatus(StatusCodes.CREATED);
    else res.sendStatus(StatusCodes.NOT_FOUND);
  } catch (error) {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

export const listOrders = async (req, res) => {
  // TODO: req.query
  try {
    const { rows: orders } = await getOrders();
    res.status(StatusCodes.OK).send(orders);
  } catch (error) {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

export const showOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows: order, rowsCount } = await getOrder(Number(id));
    if (rowsCount === 1) res.status(StatusCodes.OK).send(order);
    else res.sendStatus(StatusCodes.NOT_FOUND);
  } catch (error) {
    console.log(error);
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
