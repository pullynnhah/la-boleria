import { StatusCodes } from "http-status-codes";

const validate = schema => (req, res, next) => {
  const validation = schema.validate(req.body);
  console.log(validation.error);
  if (validation.error) res.sendStatus(StatusCodes.BAD_REQUEST);
  else next();
};

export default validate;
