import transitionRepository from '../repositories/transitionRepository.js'


async function cretae(body, id){

    if(!id) throw new Error('id is unnif')

    return await transitionRepository.create({...body , userId: id})
}


async function findAll(id){
    return transitionRepository.findAll(id)
}

export default {
    cretae,
    findAll
}