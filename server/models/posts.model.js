import mongoose from 'mongoose'
import CONFIG from '../../config';
const {DB} = CONFIG;

const Posts = new mongoose.Schema({
      user_id: {
      	 type: mongoose.Schema.ObjectId,
      	 ref: 'users'
      },
      url: {
      	type: String
      },
      poster_url:{
      	type: String
      },
      slug:{
      	type: String
      },
      title: {
      	  type: String,
      },
      points: {
      	 type: Number,
      	 default: DB.DEFAULT_COUNT
      },
      comments_count:  {
      	 type: Number,
      	 default: DB.DEFAULT_COUNT
      },
      tags:[{
             type: String  
      }],
      section:[{
         type:mongoose.Schema.ObjectId,
         ref: 'sections'
      }],
      content_type:{
      	 type: Number,
      	 default: DB.DEFAULT_CONTENT_TYPE
      },
      mime_type:{
          type: String
      },
      ext : {
         type: String
      },
      is_new:{
      	type: Boolean, default: DB.DEFAULT_TRUE
      },
      is_hide:{
		type: Boolean, default: DB.DEFAULT_FALSE
      },
      is_nsfw:{
		type: Boolean, default: DB.DEFAULT_FALSE
      },
      width: {
         type: Number
      },
      height:{
      	 type: Number
      },
      duration:{
      	 type:Number, default: DB.DEFAULT_COUNT 
      },
      size:{
      	 type: Number
      },
      liked_list:[
            {
              type: mongoose.Schema.ObjectId,
              ref: 'users'
            }
      ],
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

export default mongoose.model('posts', Posts);