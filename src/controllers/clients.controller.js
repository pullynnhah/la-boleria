import { StatusCodes } from "http-status-codes";

import { postClient } from "../repositories/clients.repository.js";

export const createClient = async (req, res) => {
  const { name, address, phone } = req.body;
  try {
    await postClient(name, address, phone);
    res.sendStatus(StatusCodes.CREATED);
  } catch (error) {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

export default createClient;
