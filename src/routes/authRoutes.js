import { Router } from "express";
import authControlles from "../controllers/authControlles.js";
import authRepository from "../repositories/authRepository.js";

const authRoutes = Router()

authRoutes.post('/home', authControlles.signup)
authRoutes.delete('/home' , authRepository.deleti)


export default authRoutes