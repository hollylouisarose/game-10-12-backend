import mongoose from 'mongoose'
import mongooseUniqueValidator from 'mongoose-unique-validator'

const gameSchema = new mongoose.Schema({
  number: { type: Number, required: true, unique: true },
  text: { type: String, required: true },
  category: [{ type: String, required: true }],
})

gameSchema.plugin(mongooseUniqueValidator)

const Plot = mongoose.model('Plot', gameSchema)

export default Plot