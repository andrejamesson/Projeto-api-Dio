import bcrypt from "bcrypt"
import authRepository from "../repositories/authRepository.js"

async function signup(body){

    const passowordHAsd = bcrypt.hashSync(body.password, 10)

    const UserByEmail = await authRepository.findEmail(body.email)
    console.log(UserByEmail)

    if(UserByEmail) throw new Error('ja exite um email desse')

    return authRepository.create({...body, password: passowordHAsd})
}

async function signin(body){
    const userExist = await authRepository.findEmail(body.email)
    if(!userExist) throw new Error('email or password invalid')

    const passowrdOk = bcrypt.compareSync(body.password , userExist.password)
    if(!passowrdOk) throw new Error('email or password invalid')

    return authRepository.generetToken(userExist._id)
}

export default {
    signup,
    signin
}