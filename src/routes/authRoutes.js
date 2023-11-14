import { Router } from "express";
import authControlles from "../controllers/authControlles.js";

const authRoutes = Router()

authRoutes.post('/signup', authControlles.signup)
authRoutes.post('/signin' , authControlles.signin)


export default authRoutes