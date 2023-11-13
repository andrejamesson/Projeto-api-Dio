import UserSchema from "../schema/schema.js"

async function create(date){
    console.log('user crado')
    return await UserSchema.create(date)
}

async function deleti(name){
    await UserSchema.deleteOne({name: name})
}

async function findEmail(email){
    const UserFindEmail = await UserSchema.findOne({ email })
    return UserFindEmail
}


export default {create , findEmail, deleti }