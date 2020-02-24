import mongoose from 'mongoose'
const Popular = new mongoose.Schema({
      value: {
           type: String
      },
      description: {
            type: String
      },
      url: {
            type: String
      },
      created: {
             type: Date,
             default: Date.now
      },
      updated:{ 
         type: Date
      },
      comment: {
             type: String
      }
})

export default mongoose.model('popular', Popular);



