import { StatusCodes } from "http-status-codes";

import { postClient, getClientOrders } from "../repositories/clients.repository.js";

const createClient = async (req, res) => {
  const { name, address, phone } = req.body;
  try {
    await postClient(name, address, phone);
    res.sendStatus(StatusCodes.CREATED);
  } catch (error) {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

const showClientOrders = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows: orders } = await getClientOrders(Number(id));
    if (orders.length === 0) res.sendStatus(StatusCodes.NOT_FOUND);
    else res.status(StatusCodes.OK).send(orders);
  } catch (error) {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
export { createClient, showClientOrders };
