import { Router } from "express";
import transitionComtrolle from "../controllers/transitionComtrolle.js";

const transitionRouter = Router()

transitionRouter.post('/transition' , transitionComtrolle.create)

export default transitionRouter