import joi from "joi";

const schema = joi.object({
  id: joi.number().integer().positive().required()
});

export default schema;
