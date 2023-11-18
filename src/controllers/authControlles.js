import authServices from "../services/authServices.js"

async function signup(req , res){

    let password = req.body.password 
    res.locals.password = password;
    
    try{
        const body = req.body

    
        const resSeverse = await authServices.signup(body)
    
        res.status(201).send(resSeverse)
    }catch(error){
        res.status(409).send(error.message)
    }
}


async function signin(req, res){

    const body = req.body

    try{
        const token = await authServices.signin(body)
        return res.send(token)
    }catch(error){
        return res.status(401).send(error.message)
    }

}

async function userlogado(req , res){

    const { _id } = res.locals.user;

    try{
        const userlogado = await authServices.userLogado(id)
        return res.send(userlogado)
    }catch(error){
        return res.status(401).send(error.message)
    }
}

async function update(req , res){

    const body = req.body

    try{
        const certo = await authServices.update('id do user do mongodb', body)
        return certo
    }catch(error){
        return res.status(401).send(error.message)
    }
}

async function deleteUser(req , res){
    
    const id = 'id do user do mongodb'
    try{
        return await authServices.deleteUser(id)
    }catch(eeror){
        res.status(401).send(eeror.message)
    }
}

export default {
    signup,
    signin,
    userlogado,
    update,
    deleteUser
}