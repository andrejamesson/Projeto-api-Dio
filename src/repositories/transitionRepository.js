import TransitionSchema from '../schema/transition.js'

async function create(data) {
    return TransitionSchema.create(data);
  }

async function findAll(id){
  return await TransitionSchema.find({userId: id})
}
export default { 
  create,
  findAll
}
