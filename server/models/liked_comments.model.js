import mongoose from 'mongoose';
import crypto from 'crypto';
import CONFIG from '../../config';
const {DB} = CONFIG;

const likedComments = new mongoose.Schema({
      user_id: {
         type: mongoose.Schema.ObjectId,
         ref: 'users'       
      },
      comment_id:{
         type: mongoose.Schema.ObjectId,
         ref: 'comments'
      },
      post_id:{
         type: mongoose.Schema.ObjectId,
         ref: 'posts'
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

export default mongoose.model('liked_comments', likedComments);