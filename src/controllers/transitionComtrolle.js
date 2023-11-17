import ServicesTransition from "../services/ServicesTransition.js"

async function create(req , res){
    const body = req.body

    const {_id: id} = res.locals.user

    console.log(id)

    try{
        const transitionCretae = await ServicesTransition.cretae(body , id)
        return res.status(201).send(transitionCretae)
    }catch(Error){
        return res.status(409).send(Error.message)
    }
}


async function findAll(req , res){

    const { _id: id } = res.locals.user;

    try{
        const transitionFindAll = await ServicesTransition.findAll(id)
        return res.send(transitionFindAll)
    }catch(Error){
        return res.status(409).send(Error.message)
    }
}

export default {
    create,
    findAll
}