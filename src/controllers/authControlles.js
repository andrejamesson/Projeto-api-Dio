import authServices from "../services/authServices.js"

async function signup(req , res){
    
    const body = req.body

    const resSeverse = await authServices.signup(body)

    res.send(resSeverse)
}

export default {signup}