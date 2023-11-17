import UserSchema from "../schema/schema.js"
import  Jwt  from "jsonwebtoken"

async function create(date){
    console.log('user criado')
    return await UserSchema.create(date)
}

async function deleti(name){
    await UserSchema.deleteOne({name: name})
}

async function findEmail(email){
    const UserFindEmail = await UserSchema.findOne({ email })
    return UserFindEmail
}

async function generetToken(id){
    return Jwt.sign({ id } , process.env.SECRET , {expiresIn: 86400})
    //!            infs do user , palavra secreta , e o tempo para o token experar
}

async function findId(id){
    const UserFindEmail = await UserSchema.findById(id)
    return UserFindEmail
}

export default {
    create ,
    findEmail,
    deleti, 
    generetToken,
    findId
}