import mongoose from 'mongoose';
import crypto from 'crypto';
import CONFIG from '../../config';
const {DB} = CONFIG;

const likedComments = new mongoose.Schema({
      user_id: {
          
      },
      comment_id:{
         type: mongoose.Schema.ObjectId,
         ref: 'comments'
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

export default mongoose.model('liked_comments', likedComments);