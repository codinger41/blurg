import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Movie = new Schema({
  title: { type: String, required: true },
  release: { type: String, required: true },
  summary: { type: String, required: true }
})

export default mongoose.model('Movie', Movie)