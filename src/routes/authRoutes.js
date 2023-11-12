import { Router } from "express";
import authControlles from "../controllers/authControlles.js";

const authRoutes = Router()

authRoutes.post('/home', authControlles.signup)


export default authRoutes