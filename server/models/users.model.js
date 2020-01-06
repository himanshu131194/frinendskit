import mongoose from 'mongoose';
import crypto from 'crypto';
import CONFIG from '../../config';
const {DB} = CONFIG;

const UserSchema = new mongoose.Schema({
      name: {
            type: String,
            trim:true,
            required : true,
            unique: true
      },
      email:{
            type: String,
            trim: true,
            required : true,
            unique: true
      },
      password_hash:{
            type: String, 
            trim: true
      },
      password_salt:{
            type: String,
            trim:true
      },
      gender:{
            type: Number,
            default: DB.GENDER.MALE
      },
      dob:{
            type: Date
      },
      country:{
            type: Number
      },
      profile_pic:{
            thumbnail: {
                  url : { type: String },
                  width: {type: Number},
                  height: { type:Number },
                  size: {type: Number}
            },
            original: {
                  url : { type: String },
                  width: {type: Number},
                  height: { type:Number },
                  size: {type: Number}
            }
      },
      description:{
            type: String
      },
      badgets: {
            type: Number,
            default: DB.BADGETS.NOOBIE
      },
      accounts: {
             facebook: { type: String },
             google: {type: String}
      },
      account_type: {
         type: Number,
         default: DB.DEFAULT_ACCOUNT_TYPE //0
      },
      account_id:{
          type: String
      },
      favourite_sections:[
          {type: Number}
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

// UserSchema
//   .virtual('password')
//   .set(function(password) {
//     this._password = password
//     this.password_salt = this.makeSalt()
//     this.password_hash = this.encryptPassword(password)
//   })
//   .get(function() {
//     return this._password
//   })


// UserSchema.methods = {
//     authenticate: function(password){
//        return this.encryptPassword(password)===this.password_hash;
//     },
//     encryptPassword: function(password){
//        if(!password) return ''
//        try{
//           return crypto
//           .createHmac('sha1', this.password_salt)
//           .update(password)
//           .digest('hex')
//        }catch (err) {
//         return ''
//        }
//     },
//     makeSalt: function() {
//         return Math.round((new Date().valueOf() * Math.random())) + ''
//     }
// }

export default mongoose.model('users', UserSchema);