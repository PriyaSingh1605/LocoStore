import Joi from "joi";

export const validateProduct = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),

    description: Joi.string().allow("").optional(),

    image: Joi.string().uri().optional(),

    price: Joi.number().required(),

    discount: Joi.number().min(0).default(0),

    rating: Joi.number().min(0).max(5).default(0),

    wishlist: Joi.boolean().default(false),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json(error.details[0].message);
  }

  next();
};
