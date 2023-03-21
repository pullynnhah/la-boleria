import { StatusCodes } from "http-status-codes";

import { postCake } from "../repositories/cakes.repository.js";
import { findFlavour } from "../repositories/flavours.repository.js";

export const createCake = async (req, res) => {
  const { name, price, description, image, flavourId } = req.body;
  try {
    const data = await findFlavour(flavourId);
    if (data.rowCount != 1) res.sendStatus(StatusCodes.NOT_FOUND);
    else {
      const { rowCount } = await postCake(name, price, description, image, flavourId);
      if (rowCount == 1) res.sendStatus(StatusCodes.CREATED);
      else res.sendStatus(StatusCodes.CONFLICT);
    }
  } catch (error) {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
