import joi from "joi";

const schema = joi.object({
  name: joi.string().min(2).required()
});

export default schema;
