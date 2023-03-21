import joi from "joi";

const schema = joi.object({
  name: joi.string().min(2).required(),
  price: joi.number().positive().required(),
  description: joi.string(),
  image: joi.string().uri().required(),
  flavourId: joi.number().integer().positive().positive()
});

export default schema;
