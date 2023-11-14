import { Schema, model } from "mongoose";

const TransitionSchema = new Schema({
    value: { type: Number , require: true },
    descripton: { type: String, require: true },
    type: { type: String, require: true },
    userId: { type: Schema.Types.ObjectId, require: true , ref: "users"},
    createaT: { type: Date, default: Date.now},
})

export default model('Transition' , TransitionSchema)