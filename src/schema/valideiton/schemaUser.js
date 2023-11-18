import Joi from "joi"

export const schemaUser = Joi.object({
    email: Joi.string().email().required().min(5),
    password: Joi.string().required().min(6)
}) 
