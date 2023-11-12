import bcrypt from "bcrypt"
import authRepository from "../repositories/authRepository.js"

async function signup(body){

    const passowordHAsd = bcrypt.hashSync(body.password, 10)

    authRepository.deleti('carlos')


    const UserByEmail = await authRepository.findEmail(body.email)

    if(UserByEmail){
        throw console.error('esse usuario ja existe')
    }


    return authRepository.create({...body, password: passowordHAsd})


}

export default {
    signup
}