import TransitionSchema from '../schema/transition.js'

async function cretae(body, id){

    if(!id) throw new Error('id is unnif')

    return await TransitionSchema.create({...body ,  userId: id})
}


export default {
    cretae
}