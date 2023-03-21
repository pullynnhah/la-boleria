import { StatusCodes } from "http-status-codes";

import { postFlavour } from "../repositories/flavours.repository.js";

const createFlavour = async (req, res) => {
  const { name } = req.body;
  try {
    const { rowCount } = await postFlavour(name);
    if (rowCount == 1) res.sendStatus(StatusCodes.CREATED);
    else res.sendStatus(StatusCodes.CONFLICT);
  } catch (error) {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

export default createFlavour;
