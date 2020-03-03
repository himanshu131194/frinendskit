import mongoose from 'mongoose'
import CONFIG from '../../config';
const {DB} = CONFIG;

const Reportposts = new mongoose.Schema({
    text: {
        type: String
    },
    reason: {
        type: String
    },
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

export default mongoose.model('report_posts', Reportposts);



