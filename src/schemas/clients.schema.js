import joi from "joi";

const schema = joi.object({
  name: joi.string().required(),
  address: joi.string().required(),
  phone: joi
    .string()
    .pattern(/^[\d]{10,11}$/)
    .required()
});

export default schema;
