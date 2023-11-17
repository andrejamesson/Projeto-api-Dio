import { Router } from "express";
import transitionComtrolle from "../controllers/transitionComtrolle.js";
import authmiddleware from "../middlewares/authMiddlewares.js";

const transitionRouter = Router()

transitionRouter.use(authmiddleware)

transitionRouter.post(
    '/transition',
    transitionComtrolle.create
)

transitionRouter.get(
    '/transition',
    transitionComtrolle.findAll
    )

export default transitionRouter