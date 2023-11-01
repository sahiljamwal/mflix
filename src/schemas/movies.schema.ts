import Joi from "joi";

const rangeFilterSchema = Joi.object()
  .keys({
    from: Joi.number().min(1891).required(),
    to: Joi.number().max(2016).required(),
  })
  .custom((value, helpers) =>
    value.from && value.to && value.from >= value.to
      ? helpers.error("custom.fromTo")
      : value
  )
  .messages({
    "custom.fromTo": 'The "from" value must be less than the "to" value',
  })
  .optional();

const listFiltersSchema = Joi.array()
  .items(Joi.string())
  .optional()
  .messages({ "string.base": "genres should be a list of strings" });

export const querySchema = Joi.object().keys({
  pageNum: Joi.number().min(1).default(1).optional(),
  pageSize: Joi.number()
    .default(10)
    .custom((value, _helpers) =>
      !value || (value >= 10 && value <= 100) ? value : 10
    )
    .optional(),
});

export const bodySchema = Joi.object().keys({
  search: Joi.string().optional(),
  sort: Joi.object()
    .keys({
      imdb: Joi.number().allow(1, -1).optional(),
    })
    .optional(),
  filter: Joi.object()
    .keys({
      releaseYear: rangeFilterSchema,
      genres: listFiltersSchema,
    })
    .optional(),
});
