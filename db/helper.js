import mongoose from 'mongoose'
import { dbURI } from '../config/environment.js'

export function connectDb() {
  mongoose.set('strictQuery', false)
  console.log('🤖 Database has connected')
  return mongoose.connect(dbURI)
}

export function truncateDb(){
  if (mongoose.connection.readyState !== 0) {
    const { collections } = mongoose.connection
    const promises = Object.keys(collections).map(collection => {
      mongoose.connection.collection(collection).deleteMany({})
    })
    return Promise.all(promises)
  }
}

export function disconnectDb() {
  if (mongoose.connection.readyState !== 0) {
    return mongoose.disconnect()
  }
}
