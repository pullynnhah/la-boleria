import { StatusCodes } from "http-status-codes";
import schema from "../schemas/id.schema.js";

const idValidate = (req, res, next) => {
  const validation = schema.validate(req.params);
  if (validation.error) res.sendStatus(StatusCodes.BAD_REQUEST);
  else next();
};

export default idValidate;
