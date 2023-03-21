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
  const { date = null } = req.query;
  try {
    const { rows: orders } = await getOrders(date);
    if (orders.length === 0) res.status(StatusCodes.NOT_FOUND).send(orders);
    else res.status(StatusCodes.OK).send(orders);
  } catch (error) {
    console.log(error);
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

export const showOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows: orders, rowsCount } = await getOrder(Number(id));
    if (rowsCount === 1) res.status(StatusCodes.OK).send(orders[0]);
    else res.sendStatus(StatusCodes.NOT_FOUND);
  } catch (error) {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
