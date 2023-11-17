import Jwt from "jsonwebtoken";
import authRepository from "../repositories/authRepository.js";
import 'dotenv/config.js'

export default async function authmiddleware(req , res, netx){
    const  { authorization } = req.headers;

    if(!authorization) return res.status(401).send({mensagen: "Invalid token01"})


    const pars = authorization?.split(" ")
    if(pars.length !== 2 ) return res.status(401).send({mensagen: "Invalid token02"})

    const [ schema , token ] = pars;

    if(!/^Bearer$/i.test(schema)) return res.status(401).send({mensagen: "Invalid token03"})

    Jwt.verify(token , process.env.SECRET , async(error , decode) =>{
        if(error) return res.status(401).send({mensagen: "Invalid token04"})
        if(!decode) return res.status(401).send({mensagen: "Invalid token05"})

        const user = await authRepository.findId(decode.id)
        if(!user) res.status(401).send({mensagen: "Invalid token06"})

        res.locals.user = user;

        netx()
    })

}