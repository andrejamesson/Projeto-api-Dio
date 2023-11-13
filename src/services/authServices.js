import bcrypt from "bcrypt"
import authRepository from "../repositories/authRepository.js"

async function signup(body){

    const passowordHAsd = bcrypt.hashSync(body.password, 10)

    const UserByEmail = await authRepository.findEmail(body.email)
    console.log(UserByEmail)

    if(UserByEmail) throw new Error('ja exite um email desse')

    return authRepository.create({...body, password: passowordHAsd})


}

export default {
    signup
}