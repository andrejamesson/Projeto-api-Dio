import ServicesTransition from "../services/ServicesTransition.js"

async function create(req , res){
    const body = req.body

    const id = '6552bfd53e24873ed02a7d52'

    try{
        const transitionCretae = await ServicesTransition.cretae(body , id)
        return res.status(201).send(transitionCretae)
    }catch(Error){
        res.status(409).send(Error.message)
    }
}


export default {
    create
}