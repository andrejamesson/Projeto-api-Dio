import mongoose from "mongoose";
import "dotenv/config"
import UserSchema from "../schema/schema.js";

export default async function  conect(){
    try{
        const bandoMongodb = await mongoose.connect(process.env.URL_MONGODB)
        console.log('voce estar conectado ao mongodb')
        console.log(UserSchema)
    }catch(error){
        console.log(error.message)
    }
}

export async function descnect(){
    await mongoose.descnect()
}