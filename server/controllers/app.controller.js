import postSections from '../models/sections.model'
import postTags from '../models/tags.model'
import Posts from '../models/posts.model'
import likedPosts from '../models/liked_posts.model'
import Comments from '../models/comments.model'
import likedComments from '../models/liked_comments.model'
import Reportposts from '../models/report_posts.model'
import externalUrls from '../models/external.url.model'
import latestCursor from '../models/latest_cursor.model'
import mongoose from 'mongoose'
import CONFIG from '../../config';
import uuid from 'uuid/v4';
import AWS from 'aws-sdk'
import rp from 'request-promise'


export default {

    listPosts : async (req, res)=>{
        const postMatchObject = { is_active: true };
        try{
            const skip = parseInt(req.query.offset) || 0,
                  limit = parseInt(req.query.limit) || 2,
                  userId = req.user ? mongoose.Types.ObjectId(req.user._id): 0;
            const { section , tag } = req.query;
            if(section){
                postMatchObject.section = mongoose.Types.ObjectId(section.trim())
            }
            if(tag){
                postMatchObject.tag = { $in : [mongoose.Types.ObjectId(tag.trim())] }
            }
            const totalPostsCount = await Posts.count();
            const posts = await Posts.aggregate([
                        { $match : postMatchObject },
                        {
                          $lookup: {
                            from : 'sections',
                            localField: 'section',
                            foreignField: '_id',
                            as: 'section_details'
                          }
                        },
                        { $unwind: "$section_details" },
                        {
                          $lookup: {
                            from : 'liked_posts',
                            let : { liked_post : '$_id'},
                            pipeline: [
                                {
                                    $match:{
                                         $expr: { $eq: [ "$post_id",  "$$liked_post" ] },
                                         user_id: userId,
                                         is_active: true       
                                    }
                                }
                            ],
                            as : 'liked'
                          }
                        },
                        { $project: 
                            { 
                                like_count: 1,
                                comment_count: 1,
                                share_count: 1,
                                download_count: 1,
                                user_id: 1,
                                url: 1,
                                title: 1,
                                section: 1,
                                mime_type: 1,
                                ext: 1,
                                created: 1,
                                liked: { $size:  "$liked" },
                                'section_details._id': 1, 
                                'section_details.value': 1, 
                                'section_details.url': 1, 
                            }
                        },
                        { $sort: { _id : -1 } },
                        { $skip: skip},
                        { $limit : limit}
                  ]);
            res.status(200).send({
                data : posts,
                count : totalPostsCount  
            })
        }catch(e){
            res.status(400).send({
                error : e
            })
        } 
    }

}


