import mongoose from 'mongoose';
import crypto from 'crypto';
import CONFIG from '../../config';
const {DB} = CONFIG;

const likePosts = new mongoose.Schema({
      user_id: {
         type: mongoose.Schema.ObjectId,
         ref: 'users'
      },
      post_id:{
         type: mongoose.Schema.ObjectId,
         ref: 'posts'
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

export default mongoose.model('liked_posts', likePosts);