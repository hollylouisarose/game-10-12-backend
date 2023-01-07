import mongoose from 'mongoose'

const gameSchema = new mongoose.Schema({
  text: { type: String, required: true, unique: true },
  keyword: { type: String, required: true, unique: true },
  category: [{ type: String, required: true, unique: false }],
})

const Plot = mongoose.model('Plot', gameSchema)

export default Plot