import { StatusCodes } from "http-status-codes";

const validate = schema => (req, res, next) => {
  const validation = schema.validate(req.body);
  if (validation.error) {
    if (validation.error.details.find(err => err.type === "string.uri"))
      res.sendStatus(StatusCodes.UNPROCESSABLE_ENTITY);
    else res.sendStatus(StatusCodes.BAD_REQUEST);
  } else next();
};

export default validate;
