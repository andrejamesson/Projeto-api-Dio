import { Router } from "express";
import transitionComtrolle from "../controllers/transitionComtrolle.js";
import authmiddleware from "../middlewares/authMiddlewares.js";
import CreateTransaction from "../schema/valideiton/transiton.js";
import validetSchema from "../middlewares/validetSchema.js";

const transitionRouter = Router()

transitionRouter.use(authmiddleware)

transitionRouter.post(
    '/transition',
    validetSchema(CreateTransaction),
    transitionComtrolle.create
)

transitionRouter.get(
    '/transition',
    transitionComtrolle.findAll
    )

export default transitionRouter