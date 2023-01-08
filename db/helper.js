import mongoose from 'mongoose'
import { dbURI } from '../config/environment.js'

//* connect to database

export function connectDb() {
  mongoose.set('strictQuery', false)
  console.log('🤖 Database has connected')
  return mongoose.connect(dbURI)
}

//* empty the database (trucate)

export function truncateDb(){
  // check database is on and connected
  if (mongoose.connection.readyState !== 0) {
  // access collections in db
    const { collections } = mongoose.connection
    // turning object with collection names into array
    const promises = Object.keys(collections).map(collection => {
      mongoose.connection.collection(collection).deleteMany({})
      // loop through and delete each individual entry
    })
    return Promise.all(promises)
  }
}

// * disconnect from database

export function disconnectDb() {
  if (mongoose.connection.readyState !== 0) {
    return mongoose.disconnect()
  }
}
