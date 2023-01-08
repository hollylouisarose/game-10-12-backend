import mongoose from 'mongoose'

const gameSchema = new mongoose.Schema({
  text: { type: String, required: true },
  category: [{ type: String, required: true }],
})

const Plot = mongoose.model('Plot', gameSchema)

export default Plot