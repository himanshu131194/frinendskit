import mongoose from 'mongoose'
import CONFIG from '../../config';
const {DB} = CONFIG;

const Sections = new mongoose.Schema({
      value: {
           type: String
      },
      description: {
            type: String
      },
      url: {
            type: String
      },
      is_active:{
      	type: Boolean, default: DB.DEFAULT_TRUE
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

export default mongoose.model('sections', Sections);



